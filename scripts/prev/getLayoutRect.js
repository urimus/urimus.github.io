
function getLayoutRect(el) {
	let x = 0, y = 0;
	let cur = el;

	while (cur) {
		x += cur.offsetLeft;
		y += cur.offsetTop;
		cur = cur.offsetParent;
	}

	cur = el.parentNode;
	while (cur && cur !== document.body) {
		if (cur.scrollLeft || cur.scrollTop) {
			x -= cur.scrollLeft;
			y -= cur.scrollTop;
		}
		cur = cur.parentNode;
	}

	x -= window.scrollX;
	y -= window.scrollY;

	return {
		left: x,
		top: y,
		width: el.offsetWidth,
		height: el.offsetHeight,
		right: x + el.offsetWidth,
		bottom: y + el.offsetHeight
	};
}
