"use strict";

$(function() {
	var r = 4;
	var lineColor = "#ff8a00";
	var currentTooltipTarget = null;
	var suppressTooltipOpen = false;
	var suppressTimeout = null;
	var activeTooltips = new Set();
	var updateLoopRunning = false;
	var scrollDiv = document.getElementById('scrollDiv');
	var lastViewportScale = window.visualViewport ? window.visualViewport.scale : 1;
	var isOpera = isOpera() ? true : false;

	var svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgEl.setAttribute("style", "position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; opacity:1; z-index: 1;");
	document.body.appendChild(svgEl);

	function isOpera() {
		return (!!window.opr && !!window.opr.addons) || navigator.userAgent.includes('OPR') || navigator.userAgent.includes('Opera');
	}

	function undoSnapRect(rect) {
		// shifting coord back to rect to undo post-snapping geometry
		const top = Math.min(Math.ceil(rect.top), rect.top + 0.5); // TOP ≈ floor
		const left = Math.min(Math.ceil(rect.left), rect.left + 0.5); // LEFT ≈ floor
		const bottom = Math.max(Math.floor(rect.bottom), rect.bottom - 0.5); // BOTTOM ≈ ceil
		const right = Math.max(Math.floor(rect.right), rect.right - 0.5); // RIGHT ≈ ceil
		return {
			top,
			left,
			bottom,
			right,
			width: right - left,
			height: bottom - top
		};
	}

	function getBoundingClientRectNoSnap(el) {
		const rect = el.getBoundingClientRect();
		const rectNoSnap = undoSnapRect(rect);
		rectNoSnap.width = el.offsetWidth;
		rectNoSnap.height = el.offsetHeight;
		return rectNoSnap;
	}

	window.addEventListener('resize', () => {
		activeTooltips.forEach(tooltipEl => {
			tooltipEl._boundingRect = null;
			tooltipEl._prevTargetRect = null;
		});
	});
	if (scrollDiv) {
		const ro = new ResizeObserver(() => {
			activeTooltips.forEach(tooltipEl => {
				tooltipEl._boundingRect = null;
				tooltipEl._prevTargetRect = null;
			});
		});
		ro.observe(scrollDiv);
	}
	window.addEventListener('scroll', () => {
		activeTooltips.forEach(tooltipEl => {
			tooltipEl._boundingRect = null;
			tooltipEl._prevTargetRect = null;
		});
	});

	function updateAllTooltips(forScrollDiv = false) {
		activeTooltips.forEach(tooltipEl => {
			const insideScroll = scrollDiv && scrollDiv.contains(tooltipEl._targetEl);
			if (!forScrollDiv || insideScroll) updateTooltip(tooltipEl);
		});
	}

	function updateTooltip(tooltipEl) {
		if (!tooltipEl || !tooltipEl._targetEl) return;

		const targetRect = getBoundingClientRectNoSnap(tooltipEl._targetEl);
		const prev = tooltipEl._prevTargetRect || {};
		const epsilon = 0.5;

		const changedCoords =
			typeof prev.top === "undefined" || Math.abs(prev.top - targetRect.top) > epsilon ||
			typeof prev.left === "undefined" || Math.abs(prev.left - targetRect.left) > epsilon ||
			typeof prev.width === "undefined" || Math.abs(prev.width - targetRect.width) > epsilon ||
			typeof prev.height=== "undefined" || Math.abs(prev.height - targetRect.height) > epsilon;
		if (changedCoords) {
			tooltipEl._prevTargetRect = {
				top: targetRect.top,
				left: targetRect.left,
				width: targetRect.width,
				height: targetRect.height
			};
		}
		var changedScale = false;
		if (isOpera && window.visualViewport) {
			var currentScale = window.visualViewport.scale;
			changedScale = Math.abs(currentScale - lastViewportScale) > 0.001;
			if (changedScale) {
				lastViewportScale = currentScale;
				setTooltipMaxWidth(tooltipEl);
			}
		}

		if (changedCoords || changedScale) {
			positionTooltip(tooltipEl);
			drawLine(tooltipEl, targetRect);
		}

	}

	function globalTick() {
		if (activeTooltips.size === 0 || !updateLoopRunning) {
			updateLoopRunning = false;
			return;
		}

		const toRemove = [];
		activeTooltips.forEach(tooltipEl => {
			if (!tooltipEl._targetEl || !tooltipEl._targetEl.isConnected || tooltipEl._targetEl.offsetParent === null) {
				toRemove.push(tooltipEl);
			} else {
				updateTooltip(tooltipEl);
			}
		});
		toRemove.forEach(tooltipEl => removeTooltip(tooltipEl, true));
		if (updateLoopRunning) requestAnimationFrame(globalTick);
	}

	function startTooltipTracker(tooltipEl) {
		if (tooltipEl._tracking) return;
		tooltipEl._tracking = true;
		activeTooltips.add(tooltipEl);
		if (!updateLoopRunning) {
			updateLoopRunning = true;
			globalTick();
		}
	}

	function stopTooltipTracker(tooltipEl) {
		activeTooltips.delete(tooltipEl);
		if (activeTooltips.size === 0) updateLoopRunning = false;
	}

	function drawLine(tooltipEl, targetRect) {
		if (!tooltipEl || !tooltipEl._targetEl) return;

		var tooltipRect = getBoundingClientRectNoSnap(tooltipEl);
		var targetX = targetRect.left + targetRect.width / 2;
		var targetY = targetRect.top + targetRect.height / 2;

		if (!tooltipEl._boundingRect) {
			if (scrollDiv && scrollDiv.contains(tooltipEl._targetEl)) {
				var scrollRect = getBoundingClientRectNoSnap(scrollDiv);
				tooltipEl._boundingRect = {
					left: scrollRect.left,
					top: scrollRect.top,
					right: scrollRect.left + scrollDiv.clientWidth,
					bottom: scrollRect.top + scrollDiv.clientHeight
				};
			} else {
				tooltipEl._boundingRect = {
					left: 0,
					top: 0,
					right: getViewportWidth(),
					bottom: getViewportHeight()
				};
			}
		}

		if (targetX - r < tooltipEl._boundingRect.left) targetX = tooltipEl._boundingRect.left + r;
		else if (targetX + r > tooltipEl._boundingRect.right) targetX = tooltipEl._boundingRect.right - r;
		if (targetY - r < tooltipEl._boundingRect.top) targetY = tooltipEl._boundingRect.top + r;
		else if (targetY + r > tooltipEl._boundingRect.bottom) targetY = tooltipEl._boundingRect.bottom - r;

		var distances = { top: Math.abs(tooltipRect.top - targetY), bottom: Math.abs(tooltipRect.bottom - targetY) };
		var minSide = distances.top < distances.bottom ? "top" : "bottom";

		var tooltipX, tooltipY, d, startX, endX;

		tooltipX = tooltipRect.left + tooltipRect.width / 2;
		tooltipY = minSide === "top"
			? tooltipRect.top
			: tooltipRect.bottom;

		if (tooltipX - r < tooltipEl._boundingRect.left) tooltipX = tooltipEl._boundingRect.left + r;
		else if (tooltipX + r > tooltipEl._boundingRect.right) tooltipX = tooltipEl._boundingRect.right - r;
		if (tooltipY - r < tooltipEl._boundingRect.top) tooltipY = tooltipEl._boundingRect.top + r;
		else if (tooltipY + r > tooltipEl._boundingRect.bottom) tooltipY = tooltipEl._boundingRect.bottom - r;

		startX = minSide === "top" ? tooltipX - r : tooltipX + r;
		endX   = minSide === "top" ? tooltipX + r : tooltipX - r;
		d = `M ${startX} ${tooltipY} A ${r} ${r} 0 0 1 ${endX} ${tooltipY}`;

		var length = Math.hypot(tooltipX - targetX, tooltipY - targetY);

		var line = tooltipEl._line;
		if (!line) {
			line = document.createElementNS("http://www.w3.org/2000/svg", "line");
			line.setAttribute("stroke", lineColor);
			line.setAttribute("shape-rendering", "geometricPrecision");
			line.setAttribute("stroke-width", r / 2);
			line.setAttribute("stroke-dasharray", length);
			line.setAttribute("stroke-dashoffset", length);
			line.style.opacity = "0";
			line.style.transition = "stroke-dashoffset 0.4s ease-out, opacity 0.2s linear";
			line.style.pointerEvents = "none";
			svgEl.appendChild(line);
			tooltipEl._line = line;
		}
		line.setAttribute("stroke-dasharray", length);
		line.setAttribute("x1", targetX);
		line.setAttribute("y1", targetY);
		line.setAttribute("x2", tooltipX);
		line.setAttribute("y2", tooltipY);

		var startCircle = tooltipEl._startCircle;
		if (!startCircle) {
			startCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			startCircle.setAttribute("r", r);
			startCircle.setAttribute("fill", lineColor);
			startCircle.style.opacity = "0";
			startCircle.style.transition = "opacity 0.2s linear";
			startCircle.style.pointerEvents = "none";
			svgEl.appendChild(startCircle);
			tooltipEl._startCircle = startCircle;
		}
		startCircle.setAttribute("cx", targetX);
		startCircle.setAttribute("cy", targetY);

		var endCircle = tooltipEl._endCircle;
		if (!endCircle) {
			endCircle = document.createElementNS("http://www.w3.org/2000/svg", "path");
			endCircle.setAttribute("fill", lineColor);
			endCircle.style.opacity = "0";
			endCircle.style.transition = "opacity 0.2s linear";
			endCircle.style.pointerEvents = "none";
			svgEl.appendChild(endCircle);
			tooltipEl._endCircle = endCircle;
		}
		endCircle.setAttribute("d", d);

		if (!tooltipEl._animated) {
			tooltipEl._animated = true;
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					line.setAttribute("stroke-dashoffset", "0");
					tooltipEl._line.style.opacity = "1";
					tooltipEl._startCircle.style.opacity = "1";
					tooltipEl._endCircle.style.opacity = "1";
				});
			});
		}
	}

	function positionTooltip(tooltipEl) {
		if (!tooltipEl || !tooltipEl._targetEl) return;
		var insideScroll = scrollDiv && scrollDiv.contains(tooltipEl._targetEl);
		$(tooltipEl).position({
			my: "center bottom",
			at: `center top-${r}`,
			of: tooltipEl._targetEl,
			within: insideScroll ? scrollDiv : window,
			collision: "fit"
		});
	}

	$(document).tooltip({
		track: false,
		classes: { "ui-tooltip": "custom-tooltip" },
		show: function(event, ui) { ui.tooltip.fadeIn(200); },
		hide: function(event, ui) { ui.tooltip.fadeOut(200); },
		content: function() {
			const title = $(this).attr("title");
			if (!title || !title.trim()) return false;
			currentTooltipTarget = this;
			return title;
		},
		open: function(event, ui) {
			if (suppressTooltipOpen) {
				ui.tooltip.remove();
				return;
			}
			const tooltipEl = ui.tooltip[0];
			if (!tooltipEl || !currentTooltipTarget) return;

			tooltipEl._targetEl = currentTooltipTarget;
			currentTooltipTarget = null;
			tooltipEl._prevTargetRect = null;
			tooltipEl._boundingRect = null;
			tooltipEl._animated = false;

			const colorSchemes = {
				blue:  { color:"#448CCB", bg:"linear-gradient(0deg, rgba(119,187,226,1) 0%, rgba(228,241,250,1) 100%)" },
				black: { color:"#707070", bg:"linear-gradient(0deg, rgba(170,170,170,1) 0%, rgba(238,238,238,1) 100%)" },
				red:   { color:"#CE3535", bg:"linear-gradient(0deg, rgba(255,150,150,1) 0%, rgba(255,236,237,1) 100%)" },
				white: { color:"#A9A9A9", bg:"linear-gradient(0deg, rgba(220,220,220,1) 0%, rgba(255,255,255,1) 100%)" },
				green: { color:"#008080", bg:"linear-gradient(0deg, rgba(93,201,81,1) 0%, rgba(207,250,197,1) 100%)" }
			};

			const schemeName = tooltipEl._targetEl?.dataset?.ttcolor;
			if (schemeName && colorSchemes[schemeName]) {
				const scheme = colorSchemes[schemeName];
				tooltipEl.style.color = scheme.color;
				tooltipEl.style.background = scheme.bg;
			}

			lastViewportScale = !updateLoopRunning && window.visualViewport ? window.visualViewport.scale : 1;
			setTooltipMaxWidth(tooltipEl);
			startTooltipTracker(tooltipEl);
		},
		close: function(event, ui) {
			removeTooltip(ui.tooltip[0]);
		}
	});


	function setTooltipMaxWidth(tooltipEl) {
		const getHorizontalExtras = (el) => {
			const s = getComputedStyle(el);
			return {
				paddingLeft:  parseFloat(s.paddingLeft),
				paddingRight: parseFloat(s.paddingRight),
				borderLeft:   parseFloat(s.borderLeftWidth),
				borderRight:  parseFloat(s.borderRightWidth),
				total: parseFloat(s.paddingLeft) + parseFloat(s.paddingRight) + parseFloat(s.borderLeftWidth) + parseFloat(s.borderRightWidth)
			};
		};
		if (!tooltipEl._horizontalExtras) tooltipEl._horizontalExtras = getHorizontalExtras(tooltipEl);
		var scale = isOpera ? lastViewportScale : 1;
		if (tooltipEl._targetEl.offsetWidth >= 350) {
			tooltipEl.style.maxWidth = (tooltipEl._targetEl.offsetWidth - tooltipEl._horizontalExtras.total) / scale + "px";
		} else {
			tooltipEl.style.maxWidth = (450 - tooltipEl._horizontalExtras.total) / scale + "px";
		}
	}

	function removeTooltip(tooltipEl, noAnimation = false) {
		if (!tooltipEl) return;
		const removeTooltipElements = () => {
			if (tooltipEl._line && tooltipEl._line.parentNode === svgEl) svgEl.removeChild(tooltipEl._line);
			if (tooltipEl._startCircle && tooltipEl._startCircle.parentNode === svgEl) svgEl.removeChild(tooltipEl._startCircle);
			if (tooltipEl._endCircle && tooltipEl._endCircle.parentNode === svgEl) svgEl.removeChild(tooltipEl._endCircle);
			stopTooltipTracker(tooltipEl);
			if (tooltipEl?.isConnected) tooltipEl.remove();
		};
		if (noAnimation) {
			removeTooltipElements();
			return;
		}
		if (tooltipEl._line) tooltipEl._line.style.opacity = "0";
		if (tooltipEl._startCircle) tooltipEl._startCircle.style.opacity = "0";
		if (tooltipEl._endCircle) tooltipEl._endCircle.style.opacity = "0";
		setTimeout(removeTooltipElements, 200);
	}


	window.addEventListener("blur", () => {
		suppressTooltipOpen = true;
		activeTooltips.forEach(tooltipEl => {
			removeTooltip(tooltipEl);
		});
		if (suppressTimeout !== null) clearTimeout(suppressTimeout);
		suppressTimeout = setTimeout(() => {
			suppressTooltipOpen = false;
			suppressTimeout = null;
		}, 200);
	});

	function fireTooltipAt(x, y) {
		if (typeof x !== "number" || typeof y !== "number") return;
		const el = document.elementFromPoint(x, y);
		if (!el?.getAttribute?.("title")) return;
		el.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
		el.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
	}
	const firstHandler = ev => { fireTooltipAt(ev.clientX, ev.clientY); };
	window.addEventListener("pointermove", firstHandler, { capture: true, once: true });

	let lastPointer = null;
	window.addEventListener("pointermove", e => { lastPointer = { x: e.clientX, y: e.clientY }; }, true);
	function fireTooltip() {
		if (!lastPointer) return;
		requestAnimationFrame(() => {
			fireTooltipAt(lastPointer.x, lastPointer.y);
		});
	}
	window.addEventListener("pageshow", fireTooltip);
	window.addEventListener("popstate", fireTooltip);
});
