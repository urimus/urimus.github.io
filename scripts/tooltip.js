"use strict";

$(function() {
	var r = 4;
	var lineColor = "#ff8a00";
	var currentTooltipTarget = null;
	var activeTooltips = new Set();
	var rafRunning = false;

	var svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	var zIndex = (typeof galleria2 !== 'undefined') ? "z-index: 10001;" : "z-index: 1;";
	svgEl.setAttribute("style", "position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; opacity:1; " + zIndex);
	document.body.appendChild(svgEl);

	var scrollDiv = document.getElementById('scrollDiv');

	var style = document.createElement('style');
	style.textContent = `.ui-tooltip.custom-tooltip { border: ${r / 2}px solid ${lineColor}; border-radius: ${r}px; }`;
	document.head.appendChild(style);

	function crisp(value) {
		var ratio = window.devicePixelRatio || 1;
		return Math.round(value * ratio) / ratio;
	}

	window.addEventListener('resize', () => {
		activeTooltips.forEach(tooltipEl => tooltipEl._boundingRect = null);
		updateAllTooltips(); 
	});
	if (scrollDiv) {
		const ro = new ResizeObserver(() => {
			activeTooltips.forEach(tooltipEl => tooltipEl._boundingRect = null);
			updateAllTooltips(true);
		});
		ro.observe(scrollDiv);
	}
	window.addEventListener('scroll', () => {
		activeTooltips.forEach(tooltipEl => tooltipEl._boundingRect = null);
		updateAllTooltips(); 
	});
	scrollDiv?.addEventListener('scroll', () => updateAllTooltips(true), { passive: true });

	function updateAllTooltips(forScrollDiv = false) {
		activeTooltips.forEach(tooltipEl => {
			const insideScroll = scrollDiv && scrollDiv.contains(tooltipEl._targetEl);
			if (!forScrollDiv || insideScroll) updateTooltip(tooltipEl);
		});
	}

	function updateTooltip(tooltipEl, targetRect) {
		if (!tooltipEl || !tooltipEl._targetEl) return;
		if (!targetRect) targetRect = tooltipEl._targetEl.getBoundingClientRect();

		const prev = tooltipEl._prevTargetRect || {};
		const epsilon = 0.5;

		const changed =
			!prev.top || Math.abs(prev.top - targetRect.top) > epsilon ||
			!prev.left || Math.abs(prev.left - targetRect.left) > epsilon ||
			!prev.width || Math.abs(prev.width - targetRect.width) > epsilon ||
			!prev.height || Math.abs(prev.height - targetRect.height) > epsilon;

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
		if (activeTooltips.size === 0) {
			rafRunning = false;
			return;
		}
		const toRemove = [];
		activeTooltips.forEach(tooltipEl => {
			if (!tooltipEl._targetEl || !document.body.contains(tooltipEl._targetEl)) {
				toRemove.push(tooltipEl);
				return;
			}
			updateTooltip(tooltipEl);
		});
		toRemove.forEach(tooltipEl => removeTooltip(tooltipEl, true));
		requestAnimationFrame(globalTick);
	}

	function startTooltipTracker(tooltipEl) {
		if (tooltipEl._tracking) return;
		tooltipEl._tracking = true;
		activeTooltips.add(tooltipEl);

		if (!rafRunning) {
			rafRunning = true;
			requestAnimationFrame(globalTick);
		}
	}

	function stopTooltipTracker(tooltipEl) {
		if (!tooltipEl._tracking) return;
		tooltipEl._tracking = false;
		tooltipEl._prevTargetRect = null;
		activeTooltips.delete(tooltipEl);
	}

	function drawLine(tooltipEl, targetRect) {
		if (!tooltipEl || !tooltipEl._targetEl) return;

		var tooltipRect = tooltipEl.getBoundingClientRect();
		if (tooltipRect.left === 0 && tooltipRect.top === 0 && tooltipRect.width === 0 && tooltipRect.height === 0) return;
		var targetX = crisp(targetRect.left + targetRect.width / 2);
		var targetY = crisp(targetRect.top + targetRect.height / 2);

		if (!tooltipEl._boundingRect) {
			if (scrollDiv && scrollDiv.contains(tooltipEl._targetEl)) {
				var boundingRect = scrollDiv.getBoundingClientRect();
				tooltipEl._boundingRect = {
					left: boundingRect.left,
					top: boundingRect.top,
					right: boundingRect.right - getScrollbarWidth(scrollDiv),
					bottom: boundingRect.bottom - getScrollbarHeight(scrollDiv)
				};
			} else {
				tooltipEl._boundingRect = {
					left: 0,
					top: 0,
					right: document.documentElement.clientWidth,
					bottom: document.documentElement.clientHeight
				};
			}
		}
		if (targetX - r < tooltipEl._boundingRect.left) targetX = crisp(tooltipEl._boundingRect.left + r);
		else if (targetX + r > tooltipEl._boundingRect.right) targetX = crisp(tooltipEl._boundingRect.right - r);
		if (targetY - r < tooltipEl._boundingRect.top) targetY = crisp(tooltipEl._boundingRect.top + r);
		else if (targetY + r > tooltipEl._boundingRect.bottom) targetY = crisp(tooltipEl._boundingRect.bottom - r);

		var distances = { top: Math.abs(tooltipRect.top - targetY), bottom: Math.abs(tooltipRect.bottom - targetY) };
		var minSide = distances.top < distances.bottom ? "top" : "bottom";

		var tooltipX, tooltipY, d;

		tooltipX = crisp(tooltipRect.left + tooltipRect.width / 2);
		if (minSide === "top") {
			tooltipY = crisp(tooltipRect.top);
			d = `M ${tooltipX + r} ${tooltipY} A ${r} ${r} 0 0 0 ${tooltipX - r} ${tooltipY} Z`;
		} else {
			tooltipY = crisp(tooltipRect.bottom);
			d = `M ${tooltipX - r} ${tooltipY} A ${r} ${r} 0 0 0 ${tooltipX + r} ${tooltipY} Z`;
		}

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
			requestAnimationFrame(() => {
				line.style.opacity = "1";
				line.setAttribute("stroke-dashoffset", "0");
			});
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
			requestAnimationFrame(() => { startCircle.style.opacity = "1"; });
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
			requestAnimationFrame(() => { endCircle.style.opacity = "1"; });
		}
		endCircle.setAttribute("d", d);
	}

	function positionTooltip(tooltipEl) {
		if (!tooltipEl || !tooltipEl._targetEl) return;
		var insideScroll = scrollDiv && scrollDiv.contains(tooltipEl._targetEl);
		$(tooltipEl).position({
			my: "center bottom",
			at: `center top-${r}`,
			of: tooltipEl._targetEl,
			within: insideScroll ? scrollDiv : window,
			collision: insideScroll ? "flipfit" : "fit"
		});
	}

	$(document).tooltip({
		track: false,
		classes: { "ui-tooltip": "custom-tooltip" },
		show: function() { $(this).fadeIn(200); },
		hide: { effect: "fade", duration: 200 },
		content: function() {
			if ($(this).attr('title') != "") currentTooltipTarget = this;
			return $(this).attr('title');
		},
		open: function(event, ui) {
			const tooltipEl = ui.tooltip[0];
			if (!tooltipEl || !currentTooltipTarget) return;

			tooltipEl._targetEl = currentTooltipTarget;
			currentTooltipTarget = null;
			tooltipEl._prevTargetRect = null;
			tooltipEl._boundingRect = null;

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
			tooltipEl.style.maxWidth = crisp(Math.max(300, Math.round(targetRect.width)-16)) + "px";

			requestAnimationFrame(() => {
				updateTooltip(tooltipEl, targetRect);
				startTooltipTracker(tooltipEl);
			});
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
			if (tooltipEl.parentNode) tooltipEl.parentNode.removeChild(tooltipEl);
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
		activeTooltips.forEach(tooltipEl => {
			removeTooltip(tooltipEl, true);
		});
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
