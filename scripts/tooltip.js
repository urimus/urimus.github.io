"use strict";

$(function() {
	var r = 4;
	var lineColor = "#ff8a00";
	var targetEl = null;

	var svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgEl.setAttribute("class", "tooltip-svg");
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

	function startTooltipTracker(tooltipEl) {
		if (tooltipEl._tracking) return;
		tooltipEl._tracking = true;

		function track() {
			if (!tooltipEl._tracking) return;

			if (!tooltipEl._targetEl || !document.body.contains(tooltipEl._targetEl)) {
				stopTooltipTracker(tooltipEl);
				removeTooltipGraphics(tooltipEl);
				if (tooltipEl.parentNode) document.body.removeChild(tooltipEl);
				return;
			}

			positionTooltip(tooltipEl);
			drawLine(tooltipEl);

			requestAnimationFrame(track);
		}

		requestAnimationFrame(track);
	}

	function stopTooltipTracker(tooltipEl) {
		tooltipEl._tracking = false;
	}

	function removeTooltipGraphics(tooltipEl) {
		if (tooltipEl._line && tooltipEl._line.parentNode === svgEl) svgEl.removeChild(tooltipEl._line);
		if (tooltipEl._startCircle && tooltipEl._startCircle.parentNode === svgEl) svgEl.removeChild(tooltipEl._startCircle);
		if (tooltipEl._endCircle && tooltipEl._endCircle.parentNode === svgEl) svgEl.removeChild(tooltipEl._endCircle);
	}

	function drawLine(tooltipEl) {
		if (!tooltipEl || !tooltipEl._targetEl) return;

		var targetRect = tooltipEl._targetEl.getBoundingClientRect();
		var tooltipRect = tooltipEl.getBoundingClientRect();

		var targetX = targetRect.left + targetRect.width / 2;
		var targetY = targetRect.top + targetRect.height / 2;

		var boundingRect = scrollDiv && scrollDiv.contains(tooltipEl._targetEl)
			? scrollDiv.getBoundingClientRect()
			: document.body.getBoundingClientRect();
		var boundingRectArray = {
			left: boundingRect.left,
			top: boundingRect.top,
			right: boundingRect.right - getScrollbarWidth(scrollDiv || document.body),
			bottom: boundingRect.bottom - getScrollbarHeight(scrollDiv || document.body)
		};
		if (targetX - r < boundingRectArray.left) targetX = crisp(boundingRectArray.left + r);
		else if (targetX + r > boundingRectArray.right) targetX = crisp(boundingRectArray.right - r);
		if (targetY - r < boundingRectArray.top) targetY = crisp(boundingRectArray.top + r);
		else if (targetY + r > boundingRectArray.bottom) targetY = crisp(boundingRectArray.bottom - r);

		var distances = { top: Math.abs(tooltipRect.top - targetY), bottom: Math.abs(tooltipRect.bottom - targetY) };
		var minSide = Object.keys(distances).reduce((a, b) => distances[a] < distances[b] ? a : b);

		var tooltipX, tooltipY, d;
		switch (minSide) {
			case 'top':
				tooltipX = tooltipRect.left + tooltipRect.width / 2;
				tooltipY = crisp(tooltipRect.top);
				d = `M ${tooltipX + r} ${tooltipY} A ${r} ${r} 0 0 0 ${tooltipX - r} ${tooltipY} Z`;
				break;
			case 'bottom':
				tooltipX = tooltipRect.left + tooltipRect.width / 2;
				tooltipY = crisp(tooltipRect.bottom);
				d = `M ${tooltipX - r} ${tooltipY} A ${r} ${r} 0 0 0 ${tooltipX + r} ${tooltipY} Z`;
				break;
		}

		var prev = tooltipEl._prevCoords || {};
		if (
			prev.tooltipX === tooltipX &&
			prev.tooltipY === tooltipY &&
			prev.targetX === targetX &&
			prev.targetY === targetY &&
			prev.minSide === minSide
		) return;

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
			svgEl.appendChild(endCircle);
			tooltipEl._endCircle = endCircle;
			requestAnimationFrame(() => { endCircle.style.opacity = "1"; });
		}
		endCircle.setAttribute("d", d);

		tooltipEl._prevCoords = { tooltipX, tooltipY, targetX, targetY, minSide };
	}

	function positionTooltip(tooltipEl) {
		if (!tooltipEl || !tooltipEl._targetEl) return;
		var insideScroll = scrollDiv && scrollDiv.contains(tooltipEl._targetEl);
		$(tooltipEl).position({
			my: "center bottom",
			at: `center top-${r}`,
			of: tooltipEl._targetEl,
			within: insideScroll ? scrollDiv : window,
			collision: "flipfit"
		});
	}

	$(document).tooltip({
		track: false,
		classes: { "ui-tooltip": "custom-tooltip" },
		show: function() { $(this).fadeIn(200); },
		hide: { effect: "fade", duration: 200 },
		content: function() {
			if ($(this).attr('title') != "") targetEl = this;
			return $(this).attr('title');
		},
		open: function() {
			(function waitAndApply(attemptsLeft) {
				var tooltipEl = $(".ui-tooltip.custom-tooltip").last()[0];
				if (!tooltipEl || !targetEl) {
					if (attemptsLeft > 0)
						return requestAnimationFrame(() => waitAndApply(attemptsLeft - 1));
					return;
				}

				tooltipEl._targetEl = targetEl;
				tooltipEl._prevCoords = {
					tooltipX: null,
					tooltipY: null,
					targetX: null,
					targetY: null,
					minSide: null
				};

				startTooltipTracker(tooltipEl);

				var colorScheme = tooltipEl._targetEl?.dataset?.ttcolor;
				if (!tooltipEl._origColor) {
					var styles = window.getComputedStyle(tooltipEl);
					tooltipEl._origBackground = styles.background;
					tooltipEl._origColor = styles.color;
				}
				switch (colorScheme) {
					case "blue":
						tooltipEl.style.color = "#448CCB";
						tooltipEl.style.background = "linear-gradient(0deg, rgba(119,187,226,1) 0%, rgba(228,241,250,1) 100%)";
						break;
					case "black":
						tooltipEl.style.color = "#707070";
						tooltipEl.style.background = "linear-gradient(0deg, rgba(170,170,170,1) 0%, rgba(238,238,238,1) 100%)";
						break;
					case "red":
						tooltipEl.style.color = "#CE3535";
						tooltipEl.style.background = "linear-gradient(0deg, rgba(255,150,150,1) 0%, rgba(255,236,237,1) 100%)";
						break;
					case "white":
						tooltipEl.style.color = "#A9A9A9";
						tooltipEl.style.background = "linear-gradient(0deg, rgba(220,220,220,1) 0%, rgba(255,255,255,1) 100%)";
						break;
					case "green":
						tooltipEl.style.color = "#008080";
						tooltipEl.style.background = "linear-gradient(0deg, rgba(93,201,81,1) 0%, rgba(207,250,197,1) 100%)";
						break;
					default:
						tooltipEl.style.color = tooltipEl._origColor;
						tooltipEl.style.background = tooltipEl._origBackground;
				}

				positionTooltip(tooltipEl);
				drawLine(tooltipEl);

			})(20);
		},
		close: function() {
			$(".ui-tooltip.custom-tooltip").each(function() {
				var tooltipEl = this;

				if (tooltipEl._line) tooltipEl._line.style.opacity = "0";
				if (tooltipEl._startCircle) tooltipEl._startCircle.style.opacity = "0";
				if (tooltipEl._endCircle) tooltipEl._endCircle.style.opacity = "0";

				setTimeout(() => {
					removeTooltipGraphics(tooltipEl);
					stopTooltipTracker(tooltipEl);
					if (tooltipEl.parentNode) document.body.removeChild(tooltipEl);
				}, 200);
			});
		}
	});
	window.addEventListener("blur", () => {
		$(".ui-tooltip.custom-tooltip").each(function() {
			var tooltipEl = this;
			removeTooltipGraphics(tooltipEl);
			stopTooltipTracker(tooltipEl);
			if (tooltipEl.parentNode) document.body.removeChild(tooltipEl);
		});
	});
});
