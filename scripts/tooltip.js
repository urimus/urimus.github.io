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

	var svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgEl.setAttribute("style", "position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; opacity:1; z-index: 1;");
	document.body.appendChild(svgEl);

	function crisp(value) {
		var ratio = window.devicePixelRatio || 1;
		return Math.floor(value * ratio) / ratio;
	}

	function crisp2(value) {
		var ratio = window.devicePixelRatio || 1;
		return Math.ceil(value * ratio) / ratio;
	}

	window.addEventListener('resize', () => {
		activeTooltips.forEach(tooltipEl => tooltipEl._boundingRect = null);
	});
	if (scrollDiv) {
		const ro = new ResizeObserver(() => {
			activeTooltips.forEach(tooltipEl => tooltipEl._boundingRect = null);
		});
		ro.observe(scrollDiv);
	}
	window.addEventListener('scroll', () => {
		activeTooltips.forEach(tooltipEl => tooltipEl._boundingRect = null);
	});

	// can be used later
	function updateAllTooltips(forScrollDiv = false) {
		activeTooltips.forEach(tooltipEl => {
			const insideScroll = scrollDiv && scrollDiv.contains(tooltipEl._targetEl);
			if (!forScrollDiv || insideScroll) updateTooltip(tooltipEl);
		});
	}

	function updateTooltip(tooltipEl) {
		if (!tooltipEl || !tooltipEl._targetEl) return;

		const targetRect = tooltipEl._targetEl.getBoundingClientRect();
		const prev = tooltipEl._prevTargetRect || {};
		const epsilon = 0.5;

		const changed =
			typeof prev.top === "undefined" || Math.abs(prev.top - targetRect.top) > epsilon ||
			typeof prev.left === "undefined" || Math.abs(prev.left - targetRect.left) > epsilon ||
			typeof prev.width === "undefined" || Math.abs(prev.width - targetRect.width) > epsilon ||
			typeof prev.height=== "undefined" || Math.abs(prev.height - targetRect.height) > epsilon;

		if (changed) {
			tooltipEl._prevTargetRect = {
				top: targetRect.top,
				left: targetRect.left,
				width: targetRect.width,
				height: targetRect.height
			};

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

		var tooltipRect = tooltipEl.getBoundingClientRect();
		var targetX = targetRect.left + targetRect.width / 2;
		var targetY = targetRect.top + targetRect.height / 2;

		if (!tooltipEl._boundingRect) {
			if (scrollDiv && scrollDiv.contains(tooltipEl._targetEl)) {
				var scrollRect = scrollDiv.getBoundingClientRect();
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

		targetX = crisp(targetX);
		targetY = crisp(targetY);

		// crisp/crisp2 - moving closer to border
		if (targetX - r < tooltipEl._boundingRect.left) targetX = crisp(tooltipEl._boundingRect.left + r);
		else if (targetX + r > tooltipEl._boundingRect.right) targetX = crisp2(tooltipEl._boundingRect.right - r);
		if (targetY - r < tooltipEl._boundingRect.top) targetY = crisp(tooltipEl._boundingRect.top + r);
		else if (targetY + r > tooltipEl._boundingRect.bottom) targetY = crisp2(tooltipEl._boundingRect.bottom - r);

		var distances = { top: Math.abs(tooltipRect.top - targetY), bottom: Math.abs(tooltipRect.bottom - targetY) };
		var minSide = distances.top < distances.bottom ? "top" : "bottom";

		var tooltipX, tooltipY, d, startX, endX;

		tooltipX = tooltipRect.left + tooltipRect.width / 2;
		tooltipY = minSide === "top"
			? tooltipRect.top
			: tooltipRect.bottom;

		tooltipX = crisp(tooltipX);
		tooltipY = crisp(tooltipY);

		// crisp/crisp2 - moving closer to border
		if (tooltipX - r < tooltipEl._boundingRect.left) tooltipX = crisp(tooltipEl._boundingRect.left + r);
		else if (tooltipX + r > tooltipEl._boundingRect.right) tooltipX = crisp2(tooltipEl._boundingRect.right - r);
		if (tooltipY - r < tooltipEl._boundingRect.top) tooltipY = crisp(tooltipEl._boundingRect.top + r);
		else if (tooltipY + r > tooltipEl._boundingRect.bottom) tooltipY = crisp2(tooltipEl._boundingRect.bottom - r);

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

			var  targetRect = tooltipEl._targetEl.getBoundingClientRect();
			// tooltipEl.style.padding="4px 6px";
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
			const extras = getHorizontalExtras(tooltipEl);
			if (targetRect.width >= 350) {
				tooltipEl.style.maxWidth = crisp(Math.round(targetRect.width)-extras.total) + "px";
			} else {
				tooltipEl.style.maxWidth = crisp(450-extras.total)+"px";
			}

			startTooltipTracker(tooltipEl);
		},
		close: function(event, ui) {
			removeTooltip(ui.tooltip[0]);
		}
	});

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

	let fired = false;
	const firstHandler = ev => {
		if (fired || typeof ev.clientX !== "number") return;
		fired = true;
		const el = document.elementFromPoint(ev.clientX, ev.clientY);
		if (el?.getAttribute?.("title")) {
			el.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
			el.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
		}
		window.removeEventListener("pointermove", firstHandler, true);
	};
	window.addEventListener("pointermove", firstHandler, true);
});
