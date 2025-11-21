"use strict";

$(function() {
	var r = 4;
	var lineColor = "#ff8a00";
	var targetEl = null;
	var prevCoords = { tooltipX: null, tooltipY: null, targetX: null, targetY: null, minSide: null };
	var isDirty = false;
	var origBackground = null;
	var origColor = null;

	function startTooltipTracker(tooltipEl) {
		if (tooltipEl._tracking) return;
		tooltipEl._tracking = true;

		function track() {
			if (!tooltipEl._tracking) return;

			if (!targetEl || !document.body.contains(targetEl)) {
				var line = tooltipEl._line;
				var startCircle = tooltipEl._startCircle;
				var endCircle = tooltipEl._endCircle;

				if (line) line.remove();
				if (startCircle) startCircle.remove();
				if (endCircle) endCircle.remove();

				stopTooltipTracker(tooltipEl);

				if (tooltipEl.parentNode) document.body.removeChild(tooltipEl);
				return;
			}

			isDirty = false;
			positionTTAndUpdateL();
			requestAnimationFrame(track);
		}

		requestAnimationFrame(track);
	}

	function stopTooltipTracker(tooltipEl) {
		tooltipEl._tracking = false;
	}

	var svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgEl.setAttribute("class", "tooltip-svg");
	var zIndex = "z-index: 1;";
	if (typeof galleria2 !== 'undefined') zIndex = "z-index: 10001;";
	svgEl.setAttribute("style", "position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; opacity:1; " + zIndex);
	document.body.appendChild(svgEl);

	var scrollDiv = document.getElementById('scrollDiv');
	if (scrollDiv) scrollDiv.addEventListener('scroll', positionTTAndUpdateL, { passive: true });
	window.addEventListener('scroll', positionTTAndUpdateL, { passive: true });
	window.addEventListener('resize', positionTTAndUpdateL, { passive: true });

	var style = document.createElement('style');
	style.textContent = `.ui-tooltip.custom-tooltip { border: ${r / 2}px solid ${lineColor}; border-radius: ${r}px; }`;
	document.head.appendChild(style);

	function crisp(value) {
		var ratio = window.devicePixelRatio || 1;
		return Math.round(value * ratio) / ratio;
	}

	function drawLine(tooltipEl) {
		isDirty = false;
		if (!tooltipEl || !targetEl) return;

		var targetRect = targetEl.getBoundingClientRect();
		var tooltipRect = tooltipEl.getBoundingClientRect();

		var targetX = targetRect.left + targetRect.width / 2;
		var targetY = targetRect.top + targetRect.height / 2;

		var distances = {
			top: Math.abs(tooltipRect.top - targetY),
			bottom: Math.abs(tooltipRect.bottom - targetY)
		};

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

		if (
			prevCoords.tooltipX === tooltipX &&
			prevCoords.tooltipY === tooltipY &&
			prevCoords.targetX === targetX &&
			prevCoords.targetY === targetY &&
			prevCoords.minSide === minSide
		) {
			return;
		}

		var length = Math.hypot(tooltipX - targetX, tooltipY - targetY);
		var line = tooltipEl._line;
		if (!line) {
			line = document.createElementNS("http://www.w3.org/2000/svg", "line");
			line.setAttribute("stroke", lineColor);
			line.setAttribute("shape-rendering", "geometricPrecision");
			line.setAttribute("stroke-width", r / 2);
			line.setAttribute("stroke-dashoffset", length);
			line.style.opacity = "0";
			line.style.transition = "stroke-dashoffset 0.4s ease-out, opacity 0.2s linear";
			svgEl.appendChild(line);
			tooltipEl._line = line;
			line.style.opacity = "1";
			requestAnimationFrame(() => { line.setAttribute("stroke-dashoffset", "0"); });
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
			startCircle.style.opacity = "1";
		}
		startCircle.setAttribute("cx", targetX);
		startCircle.setAttribute("cy", targetY);

		var endCircle = tooltipEl._endCircle;
		if (!endCircle) {
			var endCircle = document.createElementNS("http://www.w3.org/2000/svg", "path");
			endCircle.setAttribute("fill", lineColor);
			endCircle.style.opacity = "0";
			endCircle.style.transition = "opacity 0.2s linear";
			svgEl.appendChild(endCircle);
			tooltipEl._endCircle = endCircle;
			endCircle.style.opacity = "1";
		}
		endCircle.setAttribute("d", d);

		prevCoords = { tooltipX, tooltipY, targetX, targetY, minSide };
	}

	function positionTTAndUpdateL() {
		if (!isDirty) {
			isDirty = true;
			requestAnimationFrame(() => {
				var tooltipEl = $(".ui-tooltip:visible").last();
				if (tooltipEl.length && targetEl) {
					var insideScroll = scrollDiv && scrollDiv.contains(targetEl);

					$(tooltipEl).position({
						my: "center bottom",
						at: `center top-${r}`,
						of: targetEl,
						within: insideScroll ? scrollDiv : window,
						collision: "flipfit"
					});
				}

				drawLine(tooltipEl[0]);
			});
		}
	}

	$(document).tooltip({
		track: false,
		position: { my: "center bottom", at: `center top-${r}`, collision: "flipfit" },
		classes: { "ui-tooltip": "custom-tooltip" },
		show: function() { $(this).fadeIn(200); },
		hide: { effect: "fade", duration: 200 },
		content: function() { targetEl = this; return $(this).attr('title'); },
		open: function() {
			(function waitAndApply(attemptsLeft) {
				var tooltipEl = $(".ui-tooltip.custom-tooltip").last()[0];
				if (!tooltipEl) {
					if (attemptsLeft > 0) requestAnimationFrame(() => waitAndApply(attemptsLeft - 1));
					return;
				}

				startTooltipTracker(tooltipEl);

				var colorScheme = targetEl?.dataset?.ttcolor;
				if (colorScheme) {
					if (origColor == null) {
						var styles = window.getComputedStyle(tooltipEl);
						origBackground = styles.background;
						origColor = styles.color;
					}
					if (colorScheme == "blue") { tooltipEl.style.color = "#448CCB"; tooltipEl.style.background = "linear-gradient(0deg, rgba(119,187,226,1) 0%, rgba(228,241,250,1) 100%)"; }
					else if (colorScheme == "black") { tooltipEl.style.color = "#707070"; tooltipEl.style.background = "linear-gradient(0deg, rgba(170,170,170,1) 0%, rgba(238,238,238,1) 100%)"; }
					else if (colorScheme == "red") { tooltipEl.style.color = "#CE3535"; tooltipEl.style.background = "linear-gradient(0deg, rgba(255,150,150,1) 0%, rgba(255,236,237,1) 100%)"; }
					else if (colorScheme == "white") { tooltipEl.style.color = "#A9A9A9"; tooltipEl.style.background = "linear-gradient(0deg, rgba(220,220,220,1) 0%, rgba(255,255,255,1) 100%)"; }
					else if (colorScheme == "green") { tooltipEl.style.color = "#008080"; tooltipEl.style.background = "linear-gradient(0deg, rgba(93,201,81,1) 0%, rgba(207,250,197,1) 100%)"; }
				} else {
					if (origColor != null) {
						tooltipEl.style.color = origColor;
						tooltipEl.style.background = origBackground;
						origColor = null;
						origBackground = null;
					}
				}

				prevCoords = { tooltipX: null, tooltipY: null, targetX: null, targetY: null, minSide: null };
				isDirty = false;
				positionTTAndUpdateL();
			})(4);
		},
		close: function() {
			var tooltipEls = $(".ui-tooltip.custom-tooltip");
			tooltipEls.each(function() {
				stopTooltipTracker(this);

				var line = this._line;
				var startCircle = this._startCircle;
				var endCircle = this._endCircle;

				if (line) line.style.opacity = "0";
				if (startCircle) startCircle.style.opacity = "0";
				if (endCircle) endCircle.style.opacity = "0";

				setTimeout(() => {
					if (line) line.remove();
					if (startCircle) startCircle.remove();
					if (endCircle) endCircle.remove();
					if (this.parentNode) document.body.removeChild(this);
				}, 200);
			});
		}
	});
});
