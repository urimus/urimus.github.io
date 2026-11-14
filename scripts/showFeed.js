"use strict";

const proxyURL = "https://proxy.urrimus.workers.dev";

function sanitizeAndText(html) {
	const div = document.createElement("div");
	div.innerHTML = DOMPurify.sanitize(html);
	return escapeHtml(div.textContent);
}

function feedIcon(feedURL, lang) {

	const textFeedType = `${feedURL === "https://api.artemis2.live/news" ? "API" : "RSS"} ${t("feed")}${["rus", "lat"].includes(lang) ? ` (${t("eng")})` : ""}`;

	const a = document.createElement('a');
	a.setAttribute('href', feedURL);
	a.setAttribute('class', 'standardb_red');
	a.setAttribute('target', '_blank');
	a.setAttribute('tabindex', "0");
	a.setAttribute('title', textFeedType);

	const Img = document.createElement("img");
	Img.setAttribute('class', "thumbnail_image_red_png");
	Img.setAttribute('alt', textFeedType);
	Img.setAttribute('height', 27);
	Img.onload = function () {
		adjustFeedScrollDiv();
	}

	if (feedURL == "https://api.artemis2.live/news") { // artemis
		Img.setAttribute('src', "images/icons/feed/api_icon.svg");
	} else {
		Img.setAttribute('src', "images/icons/feed/rss_icon.svg");
	}

	a.appendChild(Img);
	return a;
}

function mailToIcon(email) {
	email = sanitizeAndText(email ?? "");

	const a = document.createElement('a');
	a.setAttribute('href', "mailto:"+email);
	a.setAttribute('class', 'standardb_red icon_link');
	a.setAttribute('target', '_blank');
	a.setAttribute('tabindex', "0");
	a.setAttribute('title', email);

	const Img = document.createElement("img");
	Img.setAttribute('class', "thumbnail_image_red_png");
	Img.setAttribute('alt', email);
	Img.setAttribute('height', 27);
	Img.setAttribute('src', "images/icons/feed/mailto_red.svg");
	a.appendChild(Img);
	return a;
}

function urlA(name, url, description = "") {
	if (description) description = sanitizeAndText(description);
	const a = document.createElement('a');
	a.setAttribute('href', url);
	a.setAttribute('class', 'standardb_red');
	if (description) a.setAttribute('title', description);
	a.setAttribute('target', '_blank');
	a.setAttribute('rel', 'noopener');
	a.textContent = name;
	return a;
}

// --- news keys scroll ---
function enableKeyboardScroll(scrollDiv) {
	let cells = [];
	let scrollCellIndex = 0;
	let lastDirection = null;
	let prevScrollLeft = scrollDiv.scrollLeft;
	let scrollTween = null;
	let scrollTimer = null;
	let devicePixelRatio = window.devicePixelRatio;

	function isZoom() {
		const zoomChanged = window.devicePixelRatio !== devicePixelRatio;
		if (zoomChanged) devicePixelRatio = window.devicePixelRatio;
		return zoomChanged;
	}

	function updateCells() {
		cells = Array.from(scrollDiv.querySelectorAll('tr:first-child td, tr:first-child th'));
		scrollCellIndex = Math.max(0, Math.min(scrollCellIndex, cells.length - 1));
	}

	function animateScroll(x, y, duration = 1.0) {
		if (scrollTween) {
			scrollTween.kill();
			scrollTween = null;
		}
		prevScrollLeft = scrollDiv.scrollLeft;
		scrollTween = gsap.to(scrollDiv, {
			scrollTo: {
				x: x,
				y: y,
				autoKill: false
			},
			duration: duration,
			ease: "power4.out",
			onComplete() {
				scrollTween = null;
				prevScrollLeft = scrollDiv.scrollLeft;
			}
		});
	}

	function scrollToCell(direction, duration) {
		if (!cells.length) return;
		const atLeftEdge = scrollCellIndex === 0;
		const atRightEdge = scrollCellIndex === cells.length - 1;
		if (!lastDirection || lastDirection === direction || atLeftEdge || atRightEdge) {
			scrollCellIndex = direction === 'right'
				? Math.min(cells.length - 1, scrollCellIndex + 1)
				: Math.max(0, scrollCellIndex - 1);
		}
		lastDirection = direction;
		const cell = cells[scrollCellIndex];
		let target = direction === 'right'
			? cell.offsetLeft
			: cell.offsetLeft + cell.offsetWidth - scrollDiv.clientWidth;
		target = Math.max(0, Math.min(target, scrollDiv.scrollWidth - scrollDiv.clientWidth));
		animateScroll(target, scrollDiv.scrollTop, duration);
	}

	function stepY() {
		return scrollDiv.clientHeight;
	}

	new MutationObserver(updateCells).observe(scrollDiv, { childList: true, subtree: true });
	new ResizeObserver(updateCells).observe(scrollDiv);
	scrollDiv.addEventListener('wheel', e => {
		if (e.ctrlKey) return;
		if (!scrollTween) return;

		const maxScrollTop = scrollDiv.scrollHeight - scrollDiv.clientHeight;
		const maxScrollLeft = scrollDiv.scrollWidth - scrollDiv.clientWidth;
		if (maxScrollTop <= 0 && maxScrollLeft <= 0) return;
		const scrollingDown = e.deltaY > 0;
		const scrollingUp = e.deltaY < 0;
		const scrollingRight = e.deltaX > 0;
		const scrollingLeft = e.deltaX < 0;
		const atTop = scrollDiv.scrollTop <= 0;
		const atBottom = scrollDiv.scrollTop >= maxScrollTop;
		const atLeft = scrollDiv.scrollLeft <= 0;
		const atRight = scrollDiv.scrollLeft >= maxScrollLeft;
		if (
			(scrollingUp && atTop) ||
			(scrollingDown && atBottom) ||
			(scrollingLeft && atLeft) ||
			(scrollingRight && atRight)
		) {
			return;
		}

		e.preventDefault();
		const targetX = scrollTween.vars?.scrollTo?.x ?? scrollDiv.scrollLeft;
		const targetY = scrollTween.vars?.scrollTo?.y ?? scrollDiv.scrollTop;
		const nextX = Math.max(	0, Math.min(targetX + e.deltaX, maxScrollLeft));
		const nextY = Math.max(0, Math.min(targetY + e.deltaY, maxScrollTop));
		const remaining = Math.max(0.1, scrollTween.duration() - scrollTween.time());

		animateScroll(nextX, nextY, remaining);
	}, { passive: false });

	function updateScrollCellIndex() {
		if (!cells.length) return;
		const scrollLeft = scrollDiv.scrollLeft;
		const isHorizontalScroll = scrollLeft !== prevScrollLeft;
		if (!isHorizontalScroll) return;
		prevScrollLeft = scrollLeft;
		const scrollCenter = scrollLeft + scrollDiv.clientWidth / 2;
		let left = 0;
		let right = cells.length - 1;

		while (left < right) {
			const middle = Math.floor((left + right) / 2);
			const cellCenter = cells[middle].offsetLeft + cells[middle].offsetWidth / 2;
			if (cellCenter < scrollCenter) {
				left = middle + 1;
			} else {
				right = middle;
			}
		}
		let closest = left;
		if (left > 0) {
			const currentCenter = cells[left].offsetLeft + cells[left].offsetWidth / 2;
			const previousCenter = cells[left - 1].offsetLeft + cells[left - 1].offsetWidth / 2;
			if (Math.abs(previousCenter - scrollCenter) < Math.abs(currentCenter - scrollCenter)) {
				closest = left - 1;
			}
		}
		scrollCellIndex = closest;
		lastDirection = "pointer";
	}

	scrollDiv.addEventListener('scroll', () => {
		if (scrollTween) return;
		if (isZoom()) return;
		clearTimeout(scrollTimer);
		scrollTimer = setTimeout(() => {
			updateScrollCellIndex();
		}, 80);
	});

	document.addEventListener('keydown', e => {
		if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
			if (e.shiftKey) {
				const targetY = scrollDiv.scrollTop +
					(e.key === 'ArrowRight' ? stepY() : -stepY());
				animateScroll(
					scrollDiv.scrollLeft,
					Math.max(0, Math.min(targetY, scrollDiv.scrollHeight - scrollDiv.clientHeight))
				);
			} else {
				scrollToCell(e.key === 'ArrowRight' ? 'right' : 'left', e.repeat ? 0.3 : 1.0);
			}
			e.preventDefault();
		} else if (e.key === 'Home') {
			scrollCellIndex = 0;
			lastDirection = null;
			animateScroll(0, 0);
			e.preventDefault();
		} else if (e.key === 'End') {
			scrollCellIndex = cells.length - 1;
			lastDirection = null;
			animateScroll(scrollDiv.scrollWidth, scrollDiv.scrollHeight);
			e.preventDefault();
		}
	});
	updateCells();
}

// ------------- Initial ---------------- //
function newsLoad(lang) {

	changeLanguage(lang); // i18next

	let source="";
	let toRedirect=0;
	
	const sourceL=getParameterByName('source');
	if (sourceL && sourceL!="") {
		if (sourceL=="artemis" || sourceL=="cbs" || sourceL=="merco" || sourceL=="nasa" || sourceL=="phys.org" || sourceL=="yonhap")  {
			source=sourceL;
		}
	} else {
		toRedirect=1;
	}

	if (source=="") {
		alert("Source '" + sourceL + "' " + t("notValidRedirect"));
		toRedirect=1;
	}

	if (toRedirect==1) {
		window.location.href='news_'+lang+'.html?source=nasa&type=releases';
		return;
	}

	let type="";
	toRedirect=0;
	
	const typeL = getParameterByName('type');
	if (typeL && typeL!="") {
		if (source=="cbs" && (typeL=="top" || typeL=="us" || typeL=="politics" || typeL=="world" || typeL=="health" || typeL=="moneywatch" || typeL=="science" || typeL=="technology" || typeL=="entertainment" || typeL=="space") 
		|| source=="nasa" && (typeL=="releases" || typeL=="recent" || typeL=="image" || typeL=="technology" || typeL=="aeronautics" || typeL=="iss" || typeL=="artemis") 
		|| source=="merco" && (typeL=="main" || typeL=="agriculture" || typeL=="economy" || typeL=="energy" || typeL=="environment" || typeL=="fisheries" || typeL=="health" || typeL=="investments" || typeL=="politics" || typeL=="realestate") 
		|| source=="phys.org" && (typeL=="all" 
										|| typeL=="earth" || typeL=="environment"
										|| typeL=="archaeology" || typeL=="economics" || typeL=="education" || typeL=="mathematics" || typeL=="other" || typeL=="political"  || typeL=="social"
										|| typeL=="bio" || typeL=="nanomaterials" || typeL=="nanophysics"
										|| typeL=="condensed" || typeL=="general" || typeL=="optics" || typeL=="plasma" || typeL=="quantum" || typeL=="soft" || typeL=="superconductivity"
										|| typeL=="astrobiology" || typeL=="astronomy" || typeL=="planetary" || typeL=="space"
										|| typeL=="agriculture" || typeL=="biotechnology" || typeL=="cell" || typeL=="ecology" || typeL=="evolution" || typeL=="molecular" || typeL=="otherb" || typeL=="paleontology" || typeL=="plants" || typeL=="veterinary"
										|| typeL=="analytical" || typeL=="biochemistry" || typeL=="materials" || typeL=="otherc" || typeL=="polymers")
		|| source=="yonhap" && (typeL=="all" || typeL=="national" || typeL=="northkorea" || typeL=="economy" || typeL=="biz" || typeL=="culture" || typeL=="sports") )  {
			type=typeL;
		}
	} else {
		toRedirect=1;
	}
	if (source=="artemis") {
		type="all";
		toRedirect=0;
	}

	if (type=="") {
		alert("Type '" + typeL + "' " + t("notValidRedirect"));
		toRedirect=1;
	}

	if (toRedirect==1) { // restore
		if (source=="artemis") window.location.href='news_'+lang+'.html?source=artemis';
		if (source=="cbs") window.location.href='news_'+lang+'.html?source=cbs&type=top';
		if (source=="merco") window.location.href='news_'+lang+'.html?source=merco&type=main';
		if (source=="nasa") window.location.href='news_'+lang+'.html?source=nasa&type=releases';
		if (source=="phys.org") window.location.href='news_'+lang+'.html?source=phys.org&type=all';
		if (source=="yonhap") window.location.href='news_'+lang+'.html?source=yonhap&type=all';
		return;
	}

	const scrollDiv = document.getElementById('scrollDiv');
	if (scrollDiv) enableKeyboardScroll(scrollDiv);
	processPageResize(lang);
	showFeed(type, source, lang);
}

// ------------- End of Initial ---------------- //

function adjustFeedScrollDiv() {
	const scrollDiv = document.getElementById('scrollDiv');
	if (!scrollDiv) return;

	const tabsHeight = document.getElementById('tabstable').getBoundingClientRect().height;
	const feedTitleHeight = document.getElementById('titletable').getBoundingClientRect().height;
	const feedMessageHeight = document.getElementById('messagetable').getBoundingClientRect().height;
	const totalHeight = tabsHeight + feedTitleHeight + feedMessageHeight;

	scrollDiv.style.height = `max(100dvh - ${getScrollDivOffset() + totalHeight + 8}px, ${menuHeight - totalHeight - 8}px)`;

}

// ------------- Show Feed ---------------- //
function showFeedTitle(type, source, lang, result) {

	document.getElementById("loadingTitle").innerHTML = t("outputNewsFeed") + "<span></span>";

	const title = result.title ? sanitizeAndText(result.title) : "";
	let description = "";

	if (title && result.description && result.description != title) {
		description = "<div style='width:100%; border:#ff8a00 1px solid; margin:5px 0;'></div>";
		description += sanitizeAndText(result.description);
	}

	const totalEntries = result.entries.length;
	const table = document.getElementById("titletable");
	table.replaceChildren();

	const row = table.insertRow(-1);
	const cell1 = row.insertCell(0);
	cell1.setAttribute('class', 'nimetus_red');
	cell1.style.textAlign = "center";
	cell1.style.padding = "4px 2px";
	cell1.style.display = "flex";
	cell1.style.alignItems = "center";
	cell1.style.justifyContent = "center";

	const container = document.createElement("div");
	container.style.padding = "5px";
	container.style.border = "1px solid #de8e8e";
	container.style.borderRadius = "4px";
	container.style.fontWeight = "bold";
	container.style.display = "inline-flex";
	container.style.alignItems = "center";
	container.style.gap = "6px";

	const scrollArrow = (direction) => {
		const arrow = document.createElement("span");
		arrow.textContent = direction === "ArrowRight" ? "▶" : "◀";
		arrow.className = "standardb_red";
		arrow.style.padding = "10px";
		arrow.style.cursor = "pointer";
		arrow.setAttribute("tabindex", "0");

		const dispatchKeydown = () => {
			document.dispatchEvent(new KeyboardEvent("keydown", {
				key: direction,
				shiftKey: event.shiftKey,
				ctrlKey: event.ctrlKey,
				altKey: event.altKey,
				metaKey: event.metaKey,
				bubbles: true
			}));
		};

		arrow.addEventListener("click", dispatchKeydown);
		arrow.addEventListener("keydown", event => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				dispatchKeydown();
			}
		});

		return arrow;
	};

	cell1.appendChild(scrollArrow("ArrowLeft"));
	cell1.appendChild(container);
	cell1.appendChild(scrollArrow("ArrowRight"));

	const aLogo = document.createElement('a');
	aLogo.setAttribute('href', result.link);
	aLogo.setAttribute('class', 'standardb_red');
	aLogo.setAttribute('target', '_blank');
	aLogo.setAttribute('tabindex', "0");
	aLogo.setAttribute('title', title + description);

	const logoImg = document.createElement("img");
	logoImg.setAttribute('class', "thumbnail_image_red_png");
	logoImg.setAttribute('alt', title);

	if (source == "artemis") {
		logoImg.setAttribute('height', 54);
	} else {
		logoImg.setAttribute('height', 27);
	}

	logoImg.onload = function () {
		adjustFeedScrollDiv();
	};

	logoImg.src = result.image;
	aLogo.appendChild(logoImg);
	container.appendChild(aLogo);

	const Div = document.createElement('div');
	Div.innerHTML = "<span id='loadedCount'>0/</span>" +
		totalEntries +
		" " +
		t("record", { count: totalEntries }) +
		"<span id='failedCountTitle'></span>";

	container.appendChild(Div);
	container.appendChild(feedIcon(result.feedXML, lang));

	if (result.date_ms) {
		const Img = document.createElement('img');
		Img.setAttribute('tabindex', "0");
		Img.setAttribute('alt', t("lastBuild"));

		const title = `
			<div>${t("lastBuild")}</div>
			<div style="width:100%; border:#ff8a00 1px solid; margin:5px 0;"></div>
			<div>${formatDate(result.date_ms, lang)}</div>
		`;

		Img.setAttribute('title', title);
		Img.setAttribute('height', 27);
		Img.src = "images/icons/feed/build.svg";
		container.appendChild(Img);
	}

	if (result.copyright) {
		const Img = document.createElement('img');
		Img.setAttribute('tabindex', "0");

		const title = `
			<div>${t("copyright")}</div>
			<div style="width:100%; border:#ff8a00 1px solid; margin:5px 0;"></div>
			<div>${sanitizeAndText(result.copyright)}</div>
		`;

		Img.setAttribute('alt', t("copyright"));
		Img.setAttribute('title', title);
		Img.setAttribute('height', 27);
		Img.src = "images/icons/feed/copyright.svg";
		container.appendChild(Img);
	}

	if (source == "nasa" && type == "image") {
		const Img = document.createElement('img');
		Img.setAttribute('tabindex', "0");
		Img.setAttribute('alt', t("managingEditor"));
		Img.setAttribute('title', t("managingEditor"));
		Img.setAttribute('height', 27);
		Img.src = "images/icons/feed/attribution.svg";

		const Div = document.createElement('div');
		Div.innerHTML = "▸ Brian Dunbar";
		Div.appendChild(document.createElement("span"));

		container.append(Img, Div, mailToIcon("brian.dunbar@nasa.gov"));
	}

	adjustFeedScrollDiv();
	showFeedData(type, source, lang, result);
}

function showFeedData(type, source, lang, result) {

	const totalEntries = result.entries.length;

	if (totalEntries > 0) {
		const table = document.getElementById("feedtable");
		const tableMainRow = table.insertRow(-1);
		tableMainRow.id = 'tableMainRow';

		if (result.totalUpdated == totalEntries || source == "merco" || (source=="nasa" && type=="image") || source == "phys.org") {
			const table2 = document.getElementById("messagetable");
			table2.replaceChildren();
			adjustFeedScrollDiv();
			for (let i = 0; i < totalEntries; i++) {
				showEntry(type, source, lang, result, i, true);
			}
		} else {
			for (let i = 0; i < totalEntries; i++) {
				if (result.entries[i].storage.updateProcessed == 1) {
					showEntry(type, source, lang, result, i, true);
				}
			}
			document.getElementById("loadingTitleContainer").innerHTML = t("updateStarted") + ".&nbsp;";
			const span = document.createElement('span');
			span.setAttribute('class', 'standardb_red');
			span.innerText = t("skip");
			const controller = new AbortController();
			span.onclick = function () {
				controller.abort();
				for (let j = 0; j < totalEntries; j++) {
					result.entries[j].error = t("updateSkipped") + ".";
					if (result.entries[j].storage.updateProcessed == 0) {
						result.entries[j].storage.updateProcessed = 1;
						if (result.entries[j].origLink != null) {
							result.entries[j].link = result.entries[j].origLink;
							result.entries[j].origLink = null;
						}
						showEntry(type, source, lang, result, j, false);
					}
				}
				const table2 = document.getElementById("messagetable");
				table2.replaceChildren();
				adjustFeedScrollDiv();
			};
			const loadingMessages = document.getElementById("loadingMessages");
			loadingMessages.appendChild(span);
			const processedDiv = document.getElementById("processedDiv");
			processedDiv.style.display = "block";
			adjustFeedScrollDiv();

			// 10 updates simultaneously only
			removeUnusedUpdates(source, type, result);
			let updatingCount = 0;
			for (let i = 0; i < totalEntries; i++) {
				if (result.entries[i].storage.updateProcessed == 0) {
					result.entries[i].storage.updateInitiated = 1;
					update(i, source, type, result, lang, controller);
					updatingCount++;
					if (updatingCount == 10) break; // 10 updates simultaneously only
				}
			}
		}
	}
}

function formatSummaryDiv(summaryDiv, entry) {

	const summary_words = extractSummaryWords(entry.summary);
	summaryDiv.replaceChildren();
	modifySummary(summaryDiv, summary_words, 4, "red");

}

// ------------- Image Preload -------------- //

function isEmbed(url) {
	try {
		const u = new URL(url);
		const path = u.pathname;
		return (
			path.includes("/embed/") ||
			path.includes("/player/") ||
			path.includes("/iframe/")
		);
	} catch {
		return false;
	}
}

function preloadImage(type, source, lang, result) {
	// 5 preloads simultaneously only

	let isOrigUrl=0;
	let newUrl;
	const totalEntries = result.entries.length;
	let preloadStartedCount=0;
	let preloadPassedCount=0;
	let preloadFailedCount=0;
	let preloadSet=0;
	let preloadIndex=0;
	let loadedCount=0;

	for (let j = 0; j < totalEntries; j++) {
		if (result.entries[j].storage.loadingImg != null &&
		result.entries[j].storage.preloadComplete==0 &&
		result.entries[j].storage.preloadStarted==0 &&
		result.entries[j].media.url != "" &&
		preloadSet==0) {
			preloadSet=1;
			preloadIndex=j;
		}
		if (result.entries[j].storage.preloadStarted == 1) preloadStartedCount++;
		if (result.entries[j].storage.preloadPF !== null && result.entries[j].storage.preloadPF == 1) preloadPassedCount++;
		if (result.entries[j].storage.preloadPF !== null && result.entries[j].storage.preloadPF == 0) preloadFailedCount++;
	}

	if (preloadPassedCount+preloadFailedCount>=totalEntries) return;
	if (preloadStartedCount==5) return; // 5 preloads simultaneously only
	if (preloadSet==0) return;

	const entry = result.entries[preloadIndex];
	const container = entry.storage.container;
	const loadingImg = entry.storage.loadingImg;
	const summaryDiv = entry.storage.summaryDiv;

	const preloadImg = new Image();
	preloadImg.alt = sanitizeAndText(entry.media.comment ?? "");
	preloadImg.title = sanitizeAndText(entry.media.comment ?? "");
	preloadImg.onload = function () {
		entry.storage.preloadPF=1;
		entry.storage.preloadStarted=0;
		entry.storage.preloadComplete=1;
		for (let j = 0; j < totalEntries; j++) {
			if (result.entries[j].storage.preloadPF !== null) loadedCount++;
		}
		if (loadedCount >= totalEntries) {
			document.getElementById("loadedCount").innerHTML = "";
		} else {
			document.getElementById("loadedCount").innerHTML = loadedCount + "/";
		}

		preloadImg.setAttribute('style', 'display: block; margin: 5px 0;');
		preloadImg.setAttribute('class', 'text_red;');

		if (preloadImg.naturalWidth < 450) {
			preloadImg.setAttribute('width', preloadImg.naturalWidth);
			loadingImg.replaceWith(preloadImg);
			container.style.width = preloadImg.naturalWidth + "px";
			entry.media.width = preloadImg.naturalWidth;
			if (summaryDiv && entry.summary) {
				formatSummaryDiv(summaryDiv, entry);
			}
		} else {
			preloadImg.setAttribute('width', 450);
			loadingImg.replaceWith(preloadImg);
		}

		// preloading additional images
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.ready.then(() => {
				if (entry.additMedia?.length) {
					for (let j = 0; j < entry.additMedia.length; j++) {
						const url = new URL(entry.additMedia[j].url);
						if (source === "nasa" || source === "artemis") {
							url.searchParams.set("w", "450");
						}
						new Image().src = url.toString();
					}
				}
			});
		}
		preloadImage(type, source, lang, result);
	}
	preloadImg.onerror = function () {
		const showErrorImage = () => {
			entry.storage.preloadPF=0;
			entry.storage.preloadStarted=0;
			entry.storage.preloadComplete=1;

			const preloadImg2 = document.createElement("img");
			preloadImg2.setAttribute('style', 'display: block; margin: 5px 0;');
			preloadImg2.setAttribute('class', 'text_red;');
			preloadImg2.setAttribute('width', 450);

			if (!preloadImg.alt) {
				preloadImg2.alt = t("imageLoadError");
			} else {
				preloadImg2.alt = preloadImg.alt;
			}
			if (!preloadImg.title) {
				preloadImg2.title = t("imageLoadError");
			} else {
				preloadImg2.title = preloadImg.title;
			}

			preloadImg2.src="images/icons/error/error.jpg";
			preloadImg2.onload = function () {
				loadingImg.replaceWith(preloadImg2);
			}

			for (let j = 0; j < totalEntries; j++) {
				if (result.entries[j].storage.preloadPF !== null) loadedCount++;
			}
			if (loadedCount >= totalEntries) {
				document.getElementById("loadedCount").innerHTML = "";
			} else {
				document.getElementById("loadedCount").innerHTML = loadedCount + "/";
			}
			preloadImage(type, source, lang, result);
		};

		// try origUrl if set
		newUrl = entry.media.origUrl;
		if (typeof newUrl !== 'undefined' && isOrigUrl == 0 && newUrl != preloadImg.src) {
			if (newUrl.endsWith("no_image.png")) { showErrorImage(); return; }
			preloadImg.alt = sanitizeAndText(entry.media.origComment ?? "");
			preloadImg.title = sanitizeAndText(entry.media.origComment ?? "");
			if (source === "nasa" || source === "artemis") {
				const url = new URL(newUrl);
				url.searchParams.set("w", "450");
				newUrl = url.toString();
			}
			preloadImg.src = newUrl;
			isOrigUrl = 1;
		} else {
			showErrorImage();
			return;
		}
	}

	newUrl = entry.media.url;
	entry.storage.preloadStarted=1;
	entry.storage.preloadComplete=0;
	if (newUrl.endsWith("no_image.png")) { preloadImg.src = newUrl; return; }
	if (source === "nasa" || source === "artemis") {
		const url = new URL(newUrl);
		url.searchParams.set("w", "450");
		newUrl = url.toString();
	}
	preloadImg.src = newUrl;
}
// ------------- End of Image Preload -------------- //

function showEntry(type, source, lang, result, i, appendEntry = true) {

	const entry = result.entries[i];
	const totalEntries = result.entries.length;

	const tableMainRow = document.getElementById("tableMainRow");
	let cell1;
	if (appendEntry) {
		cell1 = tableMainRow.insertCell(-1);
		cell1.style.padding = '0 2px';
	} else {
		let processedCountSoFar = 0;
		for (let j = 0; j < i; j++) {
			if (result.entries[j].storage.updateProcessed == 1) processedCountSoFar++;
		}
		const scrollDiv = document.getElementById('scrollDiv');
		cell1 = tableMainRow.insertCell(processedCountSoFar);
		cell1.style.padding = '0 2px';
		if (scrollDiv.scrollLeft < 5 && processedCountSoFar == 0) {
			scrollDiv.scrollLeft = 0;
		}
	}
	cell1.style.verticalAlign = 'top';

	const container = document.createElement('div');
	container.style.display = "inline-block";
	container.style.padding = "10px";
	container.style.border = "1px solid #de8e8e";
	container.style.borderRadius = "4px";
	container.style.width = "450px";
	cell1.appendChild(container);

	if (typeof entry.error !== "undefined" && entry.error != null) {
		const Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		Div.innerHTML = "💥 " + entry.error;
		container.appendChild(Div);
	}

	const Div = document.createElement('div');
	Div.setAttribute('class', "nimetus3_red");
	Div.textContent = (i + 1) + ". " + entry.title;
	container.appendChild(Div);

	const imageDiv = document.createElement('div');
	container.appendChild(imageDiv);

	const Img = document.createElement("img");
	Img.setAttribute('class', "spin_text");
	Img.setAttribute('width', 450 - 200);
	Img.setAttribute('style', 'display: block; margin: 5px 100px;');
	Img.src="images/icons/feed/loading_red.svg";
	imageDiv.appendChild(Img);

	result.entries[i].storage.loadingImg = Img;
	result.entries[i].storage.container = container;

	// preload later
	// ------------- Additional Images Show/Hide -------------- //
	if (entry.additMedia?.length) {
		const expansionImgSpan = document.createElement('span');
		expansionImgSpan.setAttribute('class', 'standardb_red');
		expansionImgSpan.dataset.expanded = "false";
		expansionImgSpan.onclick = function () {
			if (this.dataset.expanded === "false") {
				for (let j = 0; j < entry.additMedia.length; j++) {
					const Img2 = document.createElement("img");
					Img2.setAttribute('class', "text_red");
					Img2.setAttribute('width', entry.media.width);
					Img2.setAttribute('style', 'display: block; margin-bottom:5px; background-color: rgba(222, 142, 142, 0.0);');
					Img2.style.aspectRatio = "16 / 9";
					Img2.style.opacity = "0";
					Img2.style.transition = "opacity 0.5s ease";
					Img2.onload = function () {
						this.width = Math.min(this.naturalWidth, entry.media.width);
						this.style.aspectRatio = "auto";
						requestAnimationFrame(() => {
							this.style.opacity = "1";
						});
					}
					Img2.title = entry.additMedia[j].comment;
					if (source== "nasa" || source == "artemis") {
						const url = new URL(entry.additMedia[j].url);
						url.searchParams.set("w", "450");
						Img2.src = url.toString();
					} else {
						Img2.src=entry.additMedia[j].url;
					}
					imageDiv.appendChild(Img2);
				}
				this.textContent = "[▲]";
				this.dataset.expanded = "true";
				showMoreDiv.innerHTML = t("hide") + " " + entry.additMedia.length + " " + t("more") + " ";
				showMoreDiv.appendChild(this);

			} else {
				for (let j = 0; j < entry.additMedia.length; j++) {
					imageDiv.removeChild(imageDiv.lastChild);
				}
				this.textContent = "[▼]";
				this.dataset.expanded = "false";
				showMoreDiv.innerHTML = t("show") + " " + entry.additMedia.length + " " + t("more") + " ";
				showMoreDiv.appendChild(this);
			}
		}
		expansionImgSpan.textContent = "[▼]";

		const showMoreDiv = document.createElement('div');
		showMoreDiv.setAttribute('class', "text_red");
		showMoreDiv.setAttribute('style', "margin-bottom:5px; text-align: right;");
		showMoreDiv.innerHTML = t("show") + " " + entry.additMedia.length + " " + t("more") + " ";
		showMoreDiv.appendChild(expansionImgSpan);
		imageDiv.appendChild(showMoreDiv);
	}
	// ------------- End of Additional Images Show/Hide -------------- //

	// ------------- Video Show/Hide -------------- //
	if (entry.video) {
		const expansionVideoSpan = document.createElement('span');
		expansionVideoSpan.setAttribute('class', 'standardb_red');
		expansionVideoSpan.dataset.expanded = "false";
		expansionVideoSpan.onclick = function () { 
			if (this.dataset.expanded === "false") {
				const cssText = 
					'display:block;' +
					'margin-bottom:5px;' +
					'border:0;' +
					'background-color:transparent;' +
					'aspect-ratio:16/9;';
				if (isEmbed(entry.video)) {
			        const ifrm = document.createElement("iframe");
					ifrm.credentialless = true;
					ifrm.width = entry.media.width;
					ifrm.style.cssText = cssText;
					ifrm.allow = 
						"accelerometer;" +
						"autoplay;" +
						"clipboard-write;" +
						"encrypted-media;" +
						"fullscreen;" +
						"gyroscope;" +
						"picture-in-picture;";
					ifrm.onload = function () {
						this.style.aspectRatio = "auto";
					}
					const url = new URL(entry.video);
					url.searchParams.set("autoplay", "1");
					url.searchParams.set("mute", "0");
					ifrm.src = url.toString();
					imageDiv.appendChild(ifrm);
				} else {
					const video = document.createElement('video');
					video.controls = true;
					video.autoplay = true;
					video.playsInline = true;
					video.preload = "auto";
					video.width = entry.media.width;
					video.style.cssText = cssText;
					video.onloadeddata = function () {
						this.style.aspectRatio = "auto";
					};
					if (source == "cbs") {
						if (window.Hls && Hls.isSupported()) {
							const hls = new Hls();
							hls.loadSource(entry.video);
							hls.attachMedia(video);
						} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
							video.src = entry.video;
						} else {
							console.error("HLS is not supported.");
						}
					} else {
						video.src = entry.video;
					}
					imageDiv.appendChild(video);
				}
				this.textContent="[▲]";
				this.dataset.expanded = "true";
				showMoreDiv.innerHTML = t("hide") + " " + t("video") + " ";
				showMoreDiv.appendChild(this);
			} else {
				imageDiv.removeChild(imageDiv.lastChild);
				this.textContent="[▼]";
				this.dataset.expanded = "false";
				showMoreDiv.innerHTML = t("show") + " " + t("video") + " ";
				showMoreDiv.appendChild(this);
			}
		}
		expansionVideoSpan.textContent = "[▼]";

		const showMoreDiv = document.createElement('div');
		showMoreDiv.setAttribute('class', "text_red");
		showMoreDiv.setAttribute('style', "margin-bottom:5px; text-align: right;");
		showMoreDiv.innerHTML = t("show") + " " + t("video") + " ";
		showMoreDiv.appendChild(expansionVideoSpan);
		imageDiv.appendChild(showMoreDiv);
	}
	// ------------- End of Video Show/Hide -------------- //

	if (entry.summary) {
		const summaryDiv = document.createElement('div');
		summaryDiv.setAttribute('class', "text_red");
		container.appendChild(summaryDiv);
		formatSummaryDiv(summaryDiv, entry);
		result.entries[i].storage.summaryDiv = summaryDiv;
	}

	// preload and ensured that result.entries[i].storage.summaryDiv is set
	preloadImage(type, source, lang, result);

	if (entry.source) {
		const div = document.createElement('div');
		div.setAttribute('class', "text_red");
		const b = document.createElement("b");
		b.innerHTML = t("source") + ": ";
		div.appendChild(b);
		if (entry.source.url) {
			div.appendChild(urlA(entry.source.title, entry.source.url));
		} else {
			const span = document.createElement('span');
			span.textContent = entry.source.title;
			div.appendChild(span);
		}
		container.appendChild(div);
	}

	if (entry.subject) {
		const div = document.createElement("div");
		div.className = "text_red";
		const b = document.createElement("b");
		b.innerHTML = t("subject") + ": ";
		const span = document.createElement('span');
		span.textContent = entry.subject;
		div.append(b, span);
		container.appendChild(div);
	}

	if (entry?.creator?.length) {
		const div = document.createElement("div");
		div.className = "text_red";

		const hasEmail = entry.creator.some(c => c.email);

		const b = document.createElement("b");
		b.innerHTML = t(entry.creator.length > 1 ? "creators" : "creator") + ": ";
		if (hasEmail) b.style.verticalAlign = "middle";
		div.append(b);

		entry.creator.forEach((creator, index) => {
			if (index > 0) {
				const span = document.createElement('span');
				if (hasEmail) span.style.verticalAlign = "middle";
				span.textContent = ", ";
				div.appendChild(span);
			}

			const span = document.createElement('span');
			if (hasEmail) span.style.verticalAlign = "middle";
			if (creator.url) {
				span.append(urlA(creator.name, creator.url, creator.description));
			} else {
				span.textContent = creator.name;
			}
			div.appendChild(span);

			if (creator.email) {
				const span = document.createElement("span");
				span.textContent = " ";
				span.style.verticalAlign = "middle";
				div.append(span, mailToIcon(creator.email));
			}
		});
		container.append(div);
	}

	if (entry.category?.length) {
		const div = document.createElement("div");
		div.className = "text_red";
		const b = document.createElement("b");
		b.innerHTML = t(entry.category.length > 1 ? "categories" : "category") + ": ";
		let span = document.createElement('span');
		span.textContent = entry.category.join(", ");
		div.append(b, span);
		container.append(div);
	}

	if (entry.link) {
		const Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		const a = document.createElement('a');
		a.setAttribute('href', entry.link);
		a.setAttribute('class', 'standardb_red');
		a.setAttribute('target', '_blank');
		a.setAttribute('rel', 'noopener');
		a.innerHTML = t("more") + " ▶";
		Div.appendChild(a);
		container.appendChild(Div);
	}

	if (entry.seeAlso?.length) {
		const Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		const b = document.createElement("b");
		b.innerHTML = t("seeAlso") + ": ";
		Div.appendChild(b);
		for (let j = 0; j < entry.seeAlso.length; j++) {
			const a = document.createElement('a');
			a.setAttribute('href', entry.seeAlso[j]);
			a.setAttribute('class', 'standardb_red');
			a.setAttribute('target', '_blank');
			a.setAttribute('rel', 'noopener');
			if (j > 0) a.setAttribute('style', "padding-left:5px;");
			a.innerHTML = "▶";
			Div.appendChild(a);
		}
		container.appendChild(Div);
	}

	const date = document.createElement('div');
	date.className = 'textsmall_red';
	date.setAttribute("style", "text-align:right; padding-right:10px;");
	date.innerHTML = formatDate(entry.date_ms, lang);
	container.appendChild(date);

}

function generateTabs(type, source, lang) {
	const tabs = {};
	const tabs2 = {};

	const physGroups = [
		{
			types: ["earth", "environment"],
			title: "Earth",
			tabs: {
				earth: "Earth Sciences",
				environment: "Environment"
			}
		},
		{
			types: ["archaeology", "economics", "education", "mathematics", "other", "political", "social"],
			title: "Other Sciences",
			tabs: {
				archaeology: "Archaeology",
				economics: "Economics &",
				education: "Education",
				mathematics: "Mathematics",
				other: "Other",
				political: "Political Science",
				social: "Social Sciences"
			},
			full: {
				economics: "Economics & Business"
			}
		},
		{
			types: ["bio", "nanomaterials", "nanophysics"],
			title: "Nanotechnology",
			tabs: {
				bio: "Bio & Medicine",
				nanomaterials: "Nanomaterials",
				nanophysics: "Nanophysics"
			}
		},
		{
			types: ["condensed", "general", "optics", "plasma", "quantum", "soft", "superconductivity"],
			title: "Physics",
			tabs: {
				condensed: "Condensed Matter",
				general: "General Physics",
				optics: "Optics & Photonics",
				plasma: "Plasma Physics",
				quantum: "Quantum Physics",
				soft: "Soft Matter",
				superconductivity: "Superconductivity"
			}
		},
		{
			types: ["astrobiology", "astronomy", "planetary", "space"],
			title: "Astronomy & Space",
			tabs: {
				astrobiology: "Astrobiology",
				astronomy: "Astronomy",
				planetary: "Planetary Sciences",
				space: "Space Exploration"
			}
		},
		{
			types: ["agriculture", "biotechnology", "cell", "ecology", "evolution", "molecular", "otherb", "paleontology", "plants", "veterinary"],
			title: "Biology",
			tabs: {
				agriculture: "Agriculture",
				biotechnology: "Biotechnology",
				cell: "Cell &",
				ecology: "Ecology",
				evolution: "Evolution",
				molecular: "Molecular &",
				otherb: "Other",
				paleontology: "Paleontology &",
				plants: "Plants & Animals",
				veterinary: "Veterinary"
			},
			full: {
				cell: "Cell & Microbiology",
				molecular: "Molecular & Computational Biology",
				paleontology: "Paleontology & Fossils",
				veterinary: "Veterinary Medicine"
			}
		},
		{
			types: ["analytical", "biochemistry", "materials", "otherc", "polymers"],
			title: "Chemistry",
			tabs: {
				analytical: "Analytical",
				biochemistry: "Biochemistry",
				materials: "Materials Science",
				otherc: "Other",
				polymers: "Polymers"
			},
			full: {
				analytical: "Analytical Chemistry"
			}
		}
	];

	const sourceTabs = {
		cbs: {
			top: "Top Stories",
			us: "U.S.",
			politics: "Politics",
			world: "World",
			health: "Health",
			moneywatch: "MoneyWatch",
			science: "Science",
			technology: "Technology",
			entertainment: "Entertainment",
			space: "Space"
		},
		nasa: {
			releases: "News Releases",
			recent: "Recently",
			image: "Image of the Day",
			technology: "Technology",
			aeronautics: "Aeronautics",
			iss: "Space Station",
			artemis: "Artemis"
		},
		merco: {
			main: "Main",
			agriculture: "Agriculture",
			economy: "Economy",
			energy: "Energy",
			environment: "Environment",
			fisheries: "Fisheries",
			health: "Health & Science",
			investments: "Investments",
			politics: "Politics",
			realestate: "Real Estate"
		},
		yonhap: {
			all: "All News",
			national: "National",
			northkorea: "North Korea",
			economy: "Economy/Finance",
			biz: "BIZ",
			culture: "Culture/K-pop",
			sports: "Sports"
		}
	};

	if (source === "phys.org") {
		const group = physGroups.find(group => group.types.includes(type));
		if (group) {
			Object.assign(tabs, group.tabs);
			if (group.full) Object.assign(tabs2, group.full);
		}
	} else if (sourceTabs[source]) {
		Object.assign(tabs, sourceTabs[source]);
	}

	const sourceInfo = {
		artemis: ["Artemis II", "menu_26_1"],
		cbs: ["CBS News", "menu_26_2"],
		merco: ["MercoPress.", "menu_26_3"],
		nasa: ["NASA", "menu_26_4"],
		"phys.org": ["Phys.org", "menu_26_5"],
		yonhap: ["Yonhap News", "menu_26_6"]
	};

	const [textFeedSource, menuId] = sourceInfo[source];
	const menuDiv = document.getElementById(menuId);

	menuDiv.setAttribute('class', "menu_selected");
	menuDiv.setAttribute('onmouseleave', "this.className='menu_selected';");

	const textFeedType = (source === "artemis" ? "API " : "RSS ") + t("feed");

	let tabtype2 = "";

	if (source === "phys.org") {
		if (type === "all") {
			tabtype2 = "All Stories";
		} else {
			const group = physGroups.find(group => group.types.includes(type));
			if (group) {
				tabtype2 = group.title + " &blacktriangleright; " + (tabs2[type] || tabs[type]);
			}
		}
	} else if (source === "nasa" && type === "recent") {
		tabtype2 = tabs2.recent;
	} else if (source !== "artemis") {
		tabtype2 = tabs[type];
	}

	const feedTitle = document.getElementById("feedTitle");
	feedTitle.innerHTML = t("news") + " &blacktriangleright; " + textFeedSource + " " + textFeedType +
		(tabtype2 ? " &blacktriangleright; " + tabtype2 : "");

	const keys = Object.keys(tabs);
	const table = document.getElementById("tabstable");
	table.replaceChildren();

	// Phys.org subtable
	if (source === "phys.org") {
		const row = table.insertRow(-1);
		const cell1 = row.insertCell(0);
		const tabssubtable1 = document.createElement('table');

		tabssubtable1.setAttribute('cellpadding', "0px;");
		tabssubtable1.setAttribute('cellspacing', "0px;");
		tabssubtable1.setAttribute('width', "100%;");

		const subrow = tabssubtable1.insertRow(-1);
		const subcell = subrow.insertCell(0);

		subcell.setAttribute('style', "width: 280px; display: inline-block; textAlign: left; margin:2px;");

		const Div = document.createElement('div');
		Div.setAttribute('id', "menu_100");
		Div.setAttribute('onmouseenter', "showSubMenu(this, '"+lang+"', 'news');");
		Div.setAttribute('onmouseleave', "this.className='menu_not_selected_red'");
		Div.setAttribute('onclick', "showSubMenu(this, '"+lang+"', 'news');");
		Div.setAttribute('class', "menu_not_selected_red");
		Div.setAttribute('style', "padding-left: 5px;");
		Div.innerHTML = "● Phys.org RSS " + t("feed");

		subcell.appendChild(Div);
		cell1.appendChild(tabssubtable1);
		table.setAttribute("onmouseenter", "");
	}

	const tabssubtable2 = document.createElement('table');

	tabssubtable2.setAttribute('cellpadding', "0px;");
	tabssubtable2.setAttribute('cellspacing', "0px;");
	tabssubtable2.setAttribute('width', "100%;");

	let subrow;

	for (let i = 0; i < keys.length; i++) {
		if (i % 5 === 0) subrow = tabssubtable2.insertRow(-1);

		const key = keys[i];
		const subcell = subrow.insertCell(i % 5);

		subcell.style.width = '20%';
		if (keys.length < 5) subcell.style.display = 'inline-block';
		subcell.style.textAlign = 'center';

		const Div = document.createElement('div');

		Div.dataset.shortTitle = tabs[key];
		if (tabs2[key] !== undefined) Div.dataset.fullTitle = tabs2[key];

		Div.style.margin = '2px';
		Div.setAttribute('class', type === key ? "menu_selected" : "menu_not_selected_red");
		Div.setAttribute('id', "feed_" + key);
		Div.setAttribute('role', "button");
		Div.setAttribute('tabindex', "0");

		Div.setAttribute('onmouseenter',
			"if (clickStarted) return; this.className='menu_selected'; if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.fullTitle;"
		);

		Div.setAttribute('onmouseleave',
			"if (clickStarted) return; mouseOutTab('"+key+"', '"+type+"'); if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.shortTitle;"
		);

		const divLink = "news_" + lang + ".html?source=" + source + "&type=" + key;

		Div.setAttribute('onclick',
			"if (event.ctrlKey){ window.open('"+divLink+"'); } else { clickStarted = true; window.location.href='"+divLink+"'; };"
		);

		Div.innerHTML = tabs[key];
		subcell.appendChild(Div);
	}

	const row = table.insertRow(-1);
	const cell1 = row.insertCell(0);
	cell1.appendChild(tabssubtable2);

	const title = `
		<div>${t("tip")}</div>
		<div style="width:100%; border:#ff8a00 1px solid; margin:5px 0;"></div>
		<div>${t("useNavigationKeys")} <kbd>&rlarr;</kbd> ${t("or")} <kbd>◀▶</kbd> ${t("with")} <kbd>Shift</kbd> ${t("or")} <kbd>Home</kbd>, <kbd>End</kbd> ${t("forContentsScroll")}</div>
	`;

	const Img = document.createElement('img');
	Img.setAttribute('tabindex', "0");
	Img.setAttribute('alt', t("tip"));
	Img.setAttribute('title', title);
	Img.setAttribute('style', "height:27px; display: block;");
	Img.src = "images/icons/feed/tips.svg";
	table.appendChild(Img);

	const Div = document.createElement('div');
	Div.setAttribute('id', "information_div");

	const a = document.createElement('a');
	a.setAttribute('href', "javascript:showInformation('"+lang+"');");
	a.setAttribute('tabindex', "0");
	a.setAttribute('title', t("versionInformation"));

	const Img2 = document.createElement('img');
	Img2.setAttribute('alt', t("versionInformation"));
	Img2.setAttribute('id', "information_img");
	Img2.setAttribute('class', "thumbnail_image_red_png");
	Img2.setAttribute('style', "height: 27px; display: block;");
	Img2.src = "images/icons/html_editor/information_red.svg";

	a.appendChild(Img2);
	Div.appendChild(a);
	table.appendChild(Div);

	table.style.position = 'relative';
	Div.style.position = 'absolute';
	Img.style.position = 'absolute';

	Div.style.right = '2px';
	Img.style.right = '32px';

	if (keys.length < 5) {
		Div.style.top = '2px';
		Img.style.top = '2px';
	} else if (keys.length % 5 === 0) {
		Div.style.bottom = '-27px';
		Img.style.bottom = '-27px';
	} else {
		Div.style.bottom = '0px';
		Img.style.bottom = '0px';
	}

	adjustFeedScrollDiv();
}

function showInformation(lang) {
	axios.get("scripts/showFeed.js", {
		headers: { 'Cache-Control': 'no-cache' }
	})
	.then(
		response => {
			const modStr = response.headers["last-modified"];
			alert(t("feedInfoText") + formatDate(modStr, lang) + ".");
		},
		consoleAxiosError
	);
}

function showFeedError(message, feedURL, lang) {

	const container = document.createElement("div");
	container.style.padding = "5px";
	container.style.border = "2px solid #de8e8e";
	container.style.borderRadius = "4px";
	container.style.fontWeight = "bold";
	container.style.display = "inline-block";

	const table2 = document.getElementById("messagetable");
	table2.replaceChildren();

	const row = table2.insertRow(-1);
	const cell1 = row.insertCell(0);
	cell1.className = "text_red";
	cell1.style.textAlign = "center";
	cell1.style.padding = "4px 2px 8px 2px";
	cell1.appendChild(container);

	const div = document.createElement("div");
	div.style.display = "inline-flex";
	div.style.alignItems = "center";
	div.style.gap = "6px";
	div.append(t("newsFeed"), feedIcon(feedURL, lang));

	const reloadLink = document.createElement("a");
	reloadLink.href = "javascript:location.reload();";
	reloadLink.className = "standardb_red";
	reloadLink.textContent = t("reloadPage");

	container.append(
		div,
		document.createElement("br"),
		document.createTextNode(message),
		document.createElement("br"),
		reloadLink
	);

	adjustFeedScrollDiv();
}


function loadFeed(type, source, lang, feedURL, loadAttempt = 1) {

	const axiosConfig = {
		url: ["cbs", "merco", "phys.org", "yonhap"].includes(source) ? proxyURL : feedURL,
		params: {
			...( ["cbs", "merco", "phys.org", "yonhap"].includes(source) ? { url: feedURL } : {}),
			_: Date.now()
		},
		timeout: 10000
	};

/*
	// --- check if proxy required ---
	fetch(feedURL)
	.then(r => {
		console.log(feedURL, "Proxy NOT required");
	})
	.catch(err => {
		console.log(feedURL, "Proxy IS required");
	});
*/

	axios(axiosConfig)
	.then(response => {
		const data = response.data;

		const loadAttemptSpan = document.getElementById("loadAttempt");
		if (loadAttemptSpan) loadAttemptSpan.innerHTML = "";
		adjustFeedScrollDiv();

		let result;

		if (source === "artemis") {
			if (!data || typeof data !== "object" || data.message !== "fetch news event is successful.") {
				showFeedError("API Parse Error: Invalid API Response", feedURL, lang);
				adjustFeedScrollDiv();
				return;
			}
			result = data;
		} else {
			try {
				result = xml2js(data, {
					compact: true,
					trim: true
				}).rss.channel;
			} catch (e) {
				showFeedError("XML Parse Error: " + e.message, feedURL, lang);
				adjustFeedScrollDiv();
				return;
			}
		}

		result.feedXML = feedURL;
		optimizeUpdateResult(type, source, lang, result);

		if ("serviceWorker" in navigator) {
			requestIdleCallback(() => {
				navigator.serviceWorker.ready.then(() => {
					preloadImagesGeneral();
				});
			});
		}
	})
	.catch(error => {
		consoleAxiosError(error, t("feedLoadError") + " | " + t("loadAttempt") + " " + loadAttempt);

		if (loadAttempt < 10) {
			loadAttempt++;

			const loadAttemptSpan = document.getElementById("loadAttempt");
			if (loadAttemptSpan) {
				const reloadLink = document.createElement("a");
				reloadLink.href = "javascript:location.reload();";
				reloadLink.className = "standardb_red";
				reloadLink.textContent = t("reloadPage");

				loadAttemptSpan.replaceChildren(
					document.createElement("br"),
					document.createTextNode(t("loadAttempt") + ": " + loadAttempt),
					document.createElement("br"),
					reloadLink
				);
			}

			adjustFeedScrollDiv();
			loadFeed(type, source, lang, feedURL, loadAttempt);
			return;
		}

		showFeedError(error.message, feedURL, lang);
	});
}

function showFeed(type, source, lang) {
	generateTabs(type, source, lang);

	const feedTypes = {
		artemis: {
			all: "https://api.artemis2.live/news"
		},
		cbs: {
			top: "https://www.cbsnews.com/latest/rss/main",
			us: "https://www.cbsnews.com/latest/rss/us",
			politics: "https://www.cbsnews.com/latest/rss/politics",
			world: "https://www.cbsnews.com/latest/rss/world",
			health: "https://www.cbsnews.com/latest/rss/health",
			moneywatch: "https://www.cbsnews.com/latest/rss/moneywatch",
			science: "https://www.cbsnews.com/latest/rss/science",
			technology: "https://www.cbsnews.com/latest/rss/technology",
			entertainment: "https://www.cbsnews.com/latest/rss/entertainment",
			space: "https://www.cbsnews.com/latest/rss/space"
		},
		merco: {
			main: "https://en.mercopress.com/rss/",
			agriculture: "https://en.mercopress.com/rss/agriculture",
			economy: "https://en.mercopress.com/rss/economy",
			energy: "https://en.mercopress.com/rss/energy",
			environment: "https://en.mercopress.com/rss/environment",
			fisheries: "https://en.mercopress.com/rss/fisheries",
			health: "https://en.mercopress.com/rss/health-science",
			investments: "https://en.mercopress.com/rss/investments",
			politics: "https://en.mercopress.com/rss/politics",
			realestate: "https://en.mercopress.com/rss/real-estate"
		},
		nasa: {
			releases: "https://www.nasa.gov/news-release/feed/",
			recent: "https://www.nasa.gov/feed/",
			image: "https://www.nasa.gov/feeds/iotd-feed/",
			technology: "https://www.nasa.gov/technology/feed/",
			aeronautics: "https://www.nasa.gov/aeronautics/feed/",
			iss: "https://www.nasa.gov/missions/station/feed/",
			artemis: "https://www.nasa.gov/missions/artemis/feed/"
		},
		"phys.org": {
			all: "https://phys.org/rss-feed/",
			earth: "https://phys.org/rss-feed/earth-news/earth-sciences/",
			environment: "https://phys.org/rss-feed/earth-news/environment/",
			archaeology: "https://phys.org/rss-feed/science-news/archaeology-fossils/",
			economics: "https://phys.org/rss-feed/science-news/economics-business/",
			education: "https://phys.org/rss-feed/science-news/education/",
			mathematics: "https://phys.org/rss-feed/science-news/mathematics/",
			other: "https://phys.org/rss-feed/science-news/sci-other/",
			political: "https://phys.org/rss-feed/science-news/political-science/",
			social: "https://phys.org/rss-feed/science-news/social-sciences/",
			bio: "https://phys.org/rss-feed/nanotech-news/bio-medicine/",
			nanomaterials: "https://phys.org/rss-feed/nanotech-news/nano-materials/",
			nanophysics: "https://phys.org/rss-feed/nanotech-news/nano-physics/",
			condensed: "https://phys.org/rss-feed/physics-news/materials/",
			general: "https://phys.org/rss-feed/physics-news/physics/",
			optics: "https://phys.org/rss-feed/physics-news/optics-photonics/",
			plasma: "https://phys.org/rss-feed/physics-news/plasma/",
			quantum: "https://phys.org/rss-feed/physics-news/quantum-physics/",
			soft: "https://phys.org/rss-feed/physics-news/soft-matter/",
			superconductivity: "https://phys.org/rss-feed/physics-news/superconductivity/",
			astrobiology: "https://phys.org/rss-feed/space-news/astrobiology/",
			astronomy: "https://phys.org/rss-feed/space-news/astronomy/",
			planetary: "https://phys.org/rss-feed/space-news/planetary-sciences/",
			space: "https://phys.org/rss-feed/space-news/space-exploration/",
			agriculture: "https://phys.org/rss-feed/biology-news/agriculture/",
			biotechnology: "https://phys.org/rss-feed/biology-news/biotechnology/",
			cell: "https://phys.org/rss-feed/biology-news/microbiology/",
			ecology: "https://phys.org/rss-feed/biology-news/ecology/",
			evolution: "https://phys.org/rss-feed/biology-news/evolution/",
			molecular: "https://phys.org/rss-feed/biology-news/molecular-computational/",
			otherb: "https://phys.org/rss-feed/biology-news/biology-other/",
			paleontology: "https://phys.org/rss-feed/biology-news/paleontology/",
			plants: "https://phys.org/rss-feed/biology-news/plants-animals/",
			veterinary: "https://phys.org/rss-feed/biology-news/veterinary-medicine/",
			analytical: "https://phys.org/rss-feed/chemistry-news/analytical-chemistry/",
			biochemistry: "https://phys.org/rss-feed/chemistry-news/biochemistry/",
			materials: "https://phys.org/rss-feed/chemistry-news/materials-science/",
			otherc: "https://phys.org/rss-feed/chemistry-news/chemistry-other/",
			polymers: "https://phys.org/rss-feed/chemistry-news/polymers/"
		},
		yonhap: {
			all: "https://en.yna.co.kr/RSS/news.xml",
			national: "https://en.yna.co.kr/RSS/national.xml",
			northkorea: "https://en.yna.co.kr/RSS/nk.xml",
			economy: "https://en.yna.co.kr/RSS/economy-finance.xml",
			biz: "https://en.yna.co.kr/RSS/biz.xml",
			culture: "https://en.yna.co.kr/RSS/culture.xml",
			sports: "https://en.yna.co.kr/RSS/sports.xml"
		}
	};

	const feedURL = feedTypes[source]?.[type] || "";

	const loadingSpin = document.createElement("div");
	loadingSpin.className = "spin_animated_text";
	loadingSpin.style.fontSize = "20px";
	loadingSpin.style.paddingBottom = "2.5px"; // to avoid spin shift
	loadingSpin.textContent = "⚙"; // ⚙ ↻⌛⏳

	const processedDiv = document.createElement("div");
	processedDiv.id = "processedDiv";
	processedDiv.style.display = "none";

	const processedLine = document.createElement("div");
	processedLine.innerHTML = "#📊: <span id='processedCount'>0</span> | #🏁: <span id='leftCount'>0</span>";

	const passedLine = document.createElement("div");
	passedLine.innerHTML = "#✅: <span id='passedCount'>0</span>";

	const failedLine = document.createElement("div");
	failedLine.innerHTML = "#❎: <span id='failedCount'>0</span>";

	processedDiv.append(processedLine, passedLine, failedLine);

	const loadingMessages = document.createElement("div");
	loadingMessages.id = "loadingMessages";

	const loadingTitleContainer = document.createElement("span");
	loadingTitleContainer.id = "loadingTitleContainer";

	const loadingTitle = document.createElement("span");
	loadingTitle.id = "loadingTitle";
	loadingTitle.innerHTML = t("readingNewsFeed");
	loadingTitle.appendChild(document.createElement("span"));

	loadingTitleContainer.append(loadingTitle, feedIcon(feedURL, lang));
	loadingTitleContainer.style.display = "inline-flex";
	loadingTitleContainer.style.alignItems = "center";
	loadingTitleContainer.style.gap = "6px";

	const loadAttempt = document.createElement("span");
	loadAttempt.id = "loadAttempt";

	loadingMessages.append(loadingTitleContainer, loadAttempt);
	loadingMessages.style.display = "block";

	const container = document.createElement("div");
	container.append(loadingMessages, loadingSpin, processedDiv);
	container.style.padding = "5px";
	container.style.border = "2px solid #de8e8e";
	container.style.borderRadius = "4px";
	container.style.fontWeight = "bold";
	container.style.display = "inline-block";

	const table = document.getElementById("messagetable");
	table.replaceChildren();

	const row = table.insertRow(-1);
	const cell1 = row.insertCell(0);

	cell1.className = 'text_red';
	cell1.style.textAlign = "center";
	cell1.style.padding = "4px 2px 8px 2px";
	cell1.appendChild(container);

	adjustFeedScrollDiv();
	loadFeed(type, source, lang, feedURL);
}

// ------------- Functions ---------------- //

function getLocalStorageData(par) {
	if (typeof localStorage[par] === "undefined") {
		return {};
	} else {
		return JSON.parse(localStorage[par]);
	}
}

// ------------- End of Functions ---------------- //


// ------------- Optimize ---------------- //
function getFirstFrame(videoUrl, i, callback) {
	const video = document.createElement("video");

	video.crossOrigin = "anonymous";
	video.preload = "metadata";
	video.muted = true;

	video.onloadeddata = function() {
		video.currentTime = 0;
	};

	video.onseeked = function() {
		const canvas = document.createElement("canvas");
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;

		const ctx = canvas.getContext("2d");
		ctx.drawImage(video, 0, 0);

		canvas.toBlob(function(blob) {
			callback(URL.createObjectURL(blob), i);
		}, "image/jpeg", 0.9);
	};

	video.onerror = function() {
		callback(null, i);
	};

	video.src = videoUrl;
}

function optimizeUpdateResult(type, source, lang, resultOrig) {
	const result = {};
	let locStUpdateData = {}, i = -1;

	result.feedXML = resultOrig.feedXML;

	if (source == "artemis") result.image = "images/icons/feed/artemis_logo.svg";
	if (source == "cbs") result.image = "images/icons/feed/cbs_news_logo.svg";
	if (source == "nasa") result.image = "images/icons/feed/nasa_worm_logo.svg";
	if (source == "merco") result.image = "images/icons/feed/mercopress_logo.png";
	if (source == "phys.org") result.image = "images/icons/feed/phys_org_logo.png";
	if (source == "yonhap") result.image = "images/icons/feed/yonhap_news_logo.svg";

	result.totalUpdated = 0;

	if (source == "artemis" || source == "cbs" || (source == "nasa" && type != "image") || source == "yonhap") {
		const locStPar = source + "_" + type + "_updates";
		locStUpdateData = getLocalStorageData(locStPar);
	}

	result.entries = [];
	let items;

	if (source == "artemis") {
		result.title = "NASA’s Artemis II Mission News";
		result.description = "NASA’s Artemis II Mission News";
		result.link = "https://artemis2.live/news";
		items = resultOrig.data;
	} else {
		if (!resultOrig.item || resultOrig.item.length == 0) {
			showFeedError("No Records in Feed", resultOrig.feedXML, lang);
			return;
		}
		result.title = resultOrig.title?._text || resultOrig.title?._cdata;
		result.description = resultOrig.description?._text || resultOrig.description?._cdata;
		result.link = resultOrig.link._text;
		const lastBuild = resultOrig.pubDate?._text || resultOrig.lastBuildDate?._text;
		if (lastBuild) result.date_ms = new Date(lastBuild).getTime();
		const copyright = resultOrig.copyright?._text || resultOrig.copyright?._cdata;
		if (copyright) result.copyright = copyright;
		items = resultOrig.item;
	}

	const createMediaComment = (mediaContent, description, content, credit) => {
		const fixHtmlEntities = text =>
			text?.replaceAll("&amp;", "&").replace(/&#0+(\d+);/g, "&#$1;");

		const mediaCommentBlock = (caption, content, marginTop = 0) => `
			<div style="display:flex; align-items:center; margin-top:${marginTop}px">
				<div style="flex:1; border:1px solid #ff8a00;"></div>
				<div style="padding:0 5px; white-space:nowrap;">${caption}</div>
				<div style="flex:1; border:1px solid #ff8a00;"></div>
			</div>
			<div>${content}</div>
		`;

		description = fixHtmlEntities(mediaContent?.[description]?._cdata);
		content = fixHtmlEntities(mediaContent?.[content]?._cdata);
		credit = fixHtmlEntities(mediaContent?.[credit]?._cdata);

		let comment = "";

		if (description && content && content.toLowerCase() === description.toLowerCase()) {
			comment += mediaCommentBlock(t("description") + "/" + t("content"), description);
		} else {
			if (description) {
				comment += mediaCommentBlock(t("description"), description);
			}
			if (content) {
				const padding = comment ? 5 : 0;
				comment += mediaCommentBlock(t("content"), content, padding);
			}
		}
		if (credit) {
			const padding = comment ? 5 : 0;
			comment += mediaCommentBlock(t("credit"), credit, padding);
		}
		return comment;
	};

	const checkIsVideo = (url) => {
		if (!url) return false;
		url = url.split(/[?#]/)[0];
		const dotPos = url.lastIndexOf(".");
		if (dotPos === -1) return false;
		const ext = url.substring(dotPos + 1).toLowerCase();
		return ["mp4", "3gp", "ogg", "webm", "mov", "m4v"].includes(ext);
	};

	for (let c = 0; c < items.length; c++) {
		const entry = items[c];
		if (source == "nasa" && entry.category) {
			const categories = Array.isArray(entry.category) ? entry.category : [entry.category];
			if (categories.map(c => c._cdata || c._text).filter(Boolean).includes("APOD")) continue;
		}

		i++;

		result.entries[i] = {};
		const newEntry = result.entries[i];
		newEntry.media = {};
		newEntry.media.comment = "";
		newEntry.storage = {};
		newEntry.storage.updateProcessed = 0;
		newEntry.storage.updateInitiated = 0;
		newEntry.storage.preloadStarted = 0;
		newEntry.storage.preloadComplete = 0;
		newEntry.storage.preloadPF = null;

		// --- artemis ---
		if (source == "artemis") {
			newEntry.title = entry.title;
			if (entry.imagePath) {
				newEntry.media.url = entry.imagePath;
			} else {
				newEntry.media.url = "images/icons/error/no_image.png";
				newEntry.media.comment = t("imageAbsent");
			}
			newEntry.summary = entry.content;
		}

		// --- CBS ---
		if (source == "cbs") {
			newEntry.title = entry.title._text;
			newEntry.media.url = "images/icons/error/no_image.png";
			newEntry.media.comment = t("imageAbsent");
			newEntry.summary = entry.description._text;
		}

		// --- MercoPress ---
		if (source == "merco") {
			newEntry.title = entry.title._cdata;
			newEntry.media.url = "images/icons/error/no_image.png";
			newEntry.media.comment = t("imageAbsent");

			const doc = new DOMParser().parseFromString(
				entry.description?._cdata || "[Missing description._cdata]",
				"text/html"
			);
			const img = doc.querySelector("img");
			const alt = img?.alt || "";
			img?.remove();
			newEntry.summary = doc.body.textContent.trim();

			if (entry.category) {
				newEntry.category = entry.category._cdata.split(",").map(c => c.trim()).filter(Boolean);
			}
			const url = entry.enclosure?._attributes?.url;
			if (url) {
				const pos = url.indexOf("100x80/");
				if (pos != -1) {
					newEntry.media.url = url.substring(0, pos) + "600x315/" + url.substring(pos + 7);
					newEntry.media.comment = alt;
				}
			}
		}

		// --- NASA ---
		if (source == "nasa") {
			newEntry.title = entry.title._text;
			if (type == "image") {
				newEntry.media.url = entry.enclosure._attributes.url;
				newEntry.summary = entry.description._text;
			} else {
				newEntry.media.url = "images/icons/error/no_image.png";
				newEntry.media.comment = t("imageAbsent");
				newEntry.summary = entry.description._cdata;
			}
		}

		// --- phys.org ---
		if (source == "phys.org") {
			newEntry.title = entry.title._text;
			newEntry.media.url = "images/icons/error/no_image.png";
			newEntry.media.comment = t("imageAbsent");
			const url = entry["media:thumbnail"]?._attributes?.url;
			if (url) {
				const pos = url.indexOf("tmb/");
				if (pos != -1) {
					newEntry.media.url = "https://scx2.b-cdn.net/gfx/news/" + url.substring(pos + 4);
					newEntry.media.comment = "";
				}
			}
			newEntry.summary = entry.description._text;
		}

		// --- yonhap ---
		if (source == "yonhap") {
			newEntry.title = entry.title._cdata;
			if (entry["media:content"]) {
				const mediaContent = Array.isArray(entry["media:content"])
					? entry["media:content"]
					: [entry["media:content"]];
				newEntry.media.url = mediaContent[0]._attributes.url;
				newEntry.media.comment = "";

				const additMediaContent = mediaContent
					.slice(1)
					.filter(item => item._attributes.url);

				if (additMediaContent.length > 0) {
					newEntry.additMedia = additMediaContent.map(item => ({
						url: item._attributes.url,
						comment: ""
					}));
				}
			} else {
				newEntry.media.url = "images/icons/error/no_image.png";
				newEntry.media.comment = t("imageAbsent");
			}
			if (entry.description._cdata != "(END)") {
				newEntry.summary = entry.description._cdata;
			}
		}

		if (!newEntry.media.width) newEntry.media.width = 450;
		if (newEntry.media.width >= 450) newEntry.media.width = 450;

		// --- dc:creator ---
		if (entry.source) {
			newEntry.source = {};
			newEntry.source.title = entry.source._text || entry.source._cdata;
			if (entry.source._attributes?.url) newEntry.source.url = entry.source._attributes.url;
		}

		// --- dc:publisher ---
		if (entry["dc:publisher"]) {
			newEntry.source = {};
			newEntry.source.title = entry["dc:publisher"]._text || entry["dc:publisher"]._cdata;
		}

		// --- dc:creator ---
		if (entry["dc:creator"]) {
			newEntry.creator = [];

			const creators = Array.isArray(entry["dc:creator"])
				? entry["dc:creator"]
				: [entry["dc:creator"]];
			newEntry.creator = creators
				.map(c => c._cdata || c._text)
				.filter(Boolean)
				.map(name => ({ name }));
		}

		// --- rss:author ---
		if (entry.author) {
			newEntry.creator = [];
			const authors = Array.isArray(entry.author)
				? entry.author
				: [entry.author];
			for (let j = 0; j < authors.length; j++) {
				const nameEmail = authors[j]._cdata || authors[j]._text;
				const match = nameEmail.match(/^\s*([^\s()]+@[^\s()]+)\s*\(([^)]+)\)/);
				if (match) {
					newEntry.creator.push({
						name: match[2],
						email: match[1]
					});
				} else if (nameEmail) {
					newEntry.creator.push({
						name: nameEmail
					});
				}
			}
		}

		// --- rss:category ---
		if (entry.category && source != "merco") {
			const categories = (Array.isArray(entry.category)
				? entry.category
				: [entry.category])
				.map(c => c._cdata || c._text)
				.filter(Boolean);
			if (categories.length > 0) {
				newEntry.category = categories;
			}
		}

		// --- media:keywords ---
		if (entry["media:keywords"]?._text) {
			newEntry.category = entry["media:keywords"]._text.split(",").map(c => c.trim()).filter(Boolean);
		}

		// --- dc:subject ---
		if (entry["dc:subject"]?._text) {
			newEntry.subject = entry["dc:subject"]._text;
		}

		if (source == "artemis") {
			newEntry.link = entry.sourceUrl;
			newEntry.date_ms = new Date(entry.updatedAt).getTime();
		} else {
			newEntry.link = entry.link._text || entry.link._cdata;
			newEntry.date_ms = new Date(entry.pubDate._text).getTime();
		}

		if (newEntry.link == "" || newEntry.link == "https://x.com/nasaadmin/status/2025249086908125630?s=46") {
			newEntry.storage.updateProcessed = 1;
			result.totalUpdated++;
		}

		// --- Prevous Updates Load ---
		if (source == "artemis" || source == "cbs" || (source == "nasa" && type != "image") || source == "yonhap") {
			const update = locStUpdateData[newEntry.link];
			if (update) {
				newEntry.storage.updateProcessed = 1;
				result.totalUpdated++;
				if (update.summary) newEntry.summary = update.summary;
				if (update.media) {
					newEntry.media = {
						...update.media,
						origUrl: newEntry.media.url,
						origComment: newEntry.media.comment,
						width: newEntry.media.width
					};
				}
				if (update.creator) newEntry.creator = [...update.creator];
				if (update.category) newEntry.category = [...update.category];
				if (update.seeAlso) newEntry.seeAlso = [...update.seeAlso];
				if (update.video) newEntry.video = update.video;
			}
		}
	}

	// --- Sort Feed by Date Desc ---
	const totalEntries = result.entries.length;
	for (let i = totalEntries - 1; i >= 0; i--) {
		for (let j = 1; j <= i; j++) {
			if (result.entries[j - 1].date_ms < result.entries[j].date_ms) {
				const temp = result.entries[j - 1];
				result.entries[j - 1] = result.entries[j];
				result.entries[j] = temp;
			}
		}
	}

/* if video in .media.url
		for (let i = 0; i < totalEntries ; i++) {
			if (result.entries[i].video) {
				let url = new URL(proxyURL);
				url.searchParams.set("url", result.entries[i].video);
				getFirstFrame(url.toString(), i, function(imageUrl, i) {
					if (imageUrl) {
						result.entries[i].media.url = imageUrl;
						result.entries[i].media.comment = "";
					} else {
						result.entries[i].media.url="images/icons/error/error.jpg";
						result.entries[i].media.comment = t("imageLoadError");
					}
					preloadImage(type, source, lang, result);
				});
			}
		}
*/

	document.getElementById("processedCount").innerHTML = result.totalUpdated;
	document.getElementById("leftCount").innerHTML = totalEntries - result.totalUpdated;
	showFeedTitle(type, source, lang, result);
}

// ------------- End of Optimize---------------- //

// ------------- Update ---------------- //
function removeUnusedUpdates(source, type, result) {
	const key = `${source}_${type}_updates`;
	const updates = getLocalStorageData(key);
	const links = new Set(result.entries.map(entry => entry.link));

	for (const link in updates) {
		if (!links.has(link)) {
			delete updates[link];
		}
	}

	localStorage[key] = JSON.stringify(updates);
}

function consoleMetas(doc) {
	const metas = doc.querySelectorAll("meta");

	for (let i = 0; i < metas.length; i++) {
		console.log(
			`meta[${i}]: ` +
			Array.from(
				metas[i].attributes,
				attr => `${attr.name}=${attr.value}`
			).join(", ")
		);
	}
}

function checkProcessedCount(source, type, result, lang, controller, pf = 1) {
	const totalEntries = result.entries.length;

	// failed
	if (pf == 0) {
		const failedCount = document.getElementById("failedCount");
		const failedCountInt = parseInt(failedCount.innerHTML) + 1;
		failedCount.innerHTML = failedCountInt;
		const failedCountTitle = document.getElementById("failedCountTitle");
		failedCountTitle.innerHTML = " (#❎: " + failedCountInt + ")";
		const processedCount = document.getElementById("processedCount");
		result.totalUpdated++;
		processedCount.innerHTML = result.totalUpdated;
		document.getElementById("leftCount").innerHTML = (totalEntries - result.totalUpdated);
	}

	let processedCount = 0;
	let nextUpdateRecord = -1;
	let nextUpdateRecordSet = false;

	for (let j = 0; j < totalEntries; j++) {
		if (result.entries[j].storage.updateProcessed == 1) {
			processedCount++;
		}
		if (!nextUpdateRecordSet && result.entries[j].storage.updateInitiated == 0 && result.entries[j].storage.updateProcessed == 0) {
			nextUpdateRecord = j;
			nextUpdateRecordSet = true;
		}
	}

	if (processedCount == totalEntries) {
		const table2 = document.getElementById("messagetable");
		table2.replaceChildren();
		adjustFeedScrollDiv();
		return;
	} else {
		// passed
		if (pf == 1) {
			const passedCount = document.getElementById("passedCount");
			passedCount.innerHTML = parseInt(passedCount.innerHTML) + 1;
			processedCount = document.getElementById("processedCount");
			result.totalUpdated++;
			processedCount.innerHTML = result.totalUpdated;
			document.getElementById("leftCount").innerHTML = (totalEntries - result.totalUpdated);
		}
		if (nextUpdateRecordSet) {
			result.entries[nextUpdateRecord].storage.updateInitiated = 1;
			update(nextUpdateRecord, source, type, result, lang, controller);
		}
	}
}

function update(i, source, type, result, lang, controller, updateAttempt = 1, redirectCount = 0) {

	let media, description, categories, creators, seeAlso, videoURL;

	axios.get(proxyURL, {
		params: {
			url: result.entries[i].link,
			_: Date.now()
		},
		signal: controller.signal
	})
	.then(
		response => {

			const data = response.data;

			const doc = (new DOMParser).parseFromString(data, "text/html");

			const getMeta = (doc, search) => {
				const property = doc.querySelector(search);
				if (property == null) return null;
				return property.content.trim();
			};
			const getMetas = (doc, search) => {
				const properties = doc.querySelectorAll(search);
				return [...properties].map(p => p.content.trim());
			};
			const getScript = (doc, search) => {
				const script = doc.querySelector(search);
				if (script == null) return null;
				return script.textContent.trim();
			};
			const getScripts = (doc, search) => {
				const scripts = doc.querySelectorAll(search);
				return [...scripts].map(p => p.textContent.trim());
			};

			media = {
				url: getMeta(doc, 'meta[property="og:image"]'),
				comment: getMeta(doc, 'meta[property="og:image:alt"]')
			};

			if (source != "nasa" && source != "artemis") { // do not update NASA and Artemis description
				description = getMeta(doc, 'meta[name="description"]');
				if (description == null) description = getMeta(doc, 'meta[property="og:description"]');
				if (description == null) description = getMeta(doc, 'meta[name="twitter:description"]');
			}

			categories = getMetas(doc, 'meta[name="keywords"]');
			if (!categories[0]) categories = getMetas(doc, 'meta[name="parsely-tags"]');
			if (!categories[0]) categories = getMetas(doc, 'meta[property="article:section"]');

			creators = getMetas(doc, 'meta[name="parsely-author"]').map(name => ({ name }));

			const safeParseJSON = (jsonText) => {
				try {
					return JSON.parse(jsonText);
				} catch {
					return null;
				}
			};
			if (source == "cbs") {
				let scriptData = null;
				const scripts = getScripts(doc, 'script[type="application/ld+json"]');
				for (const script of scripts) {
					scriptData= safeParseJSON(script);
					if (scriptData?.articleBody) break;
				}
				if (scriptData?.articleBody) {
					description = scriptData.articleBody.trim();
					if (scriptData.author?.length) {
						creators = scriptData.author.map(author => ({
							name: author.name?.trim(),
							email: null,
							url: author.url || null,
							description: author.description?.trim() || null
						}));
					}
					if (scriptData.keywords?.length) {
						categories = [...new Set([...(scriptData.keywords ?? []), ...(categories ?? [])])];
					}
				}
			}
			if (source == "nasa" || source == "artemis") {
				let scriptData = null;
				const scripts = getScripts(doc, 'script[type="application/ld+json"]');
				for (const script of scripts) {
					scriptData= safeParseJSON(script);
					if (scriptData?.["@graph"]) {
						const graph = scriptData["@graph"];
						for (const ele of graph) {
							if (ele["@type"] === "ImageObject") {
								let url = new URL(ele.url);
								url.search = "";
								let eleUrl = url.toString();
								if (!media.url || (media.url != eleUrl && ele.caption)) {
									media = {
										url: eleUrl,
										comment: ele.caption?.trim()
									};
								}
							}
							if (ele["@type"] === "Person") {
								creators = [
   									{
										name: ele.name?.trim(),
										email: null,
										url: ele.url?.trim(),
										description: null
									},
									...(creators ?? []).filter(c => c.name !== ele.name)
								];
							}
						}
					}
					if (scriptData?.["@type"] === "NewsArticle") {
						if (scriptData?.author?.length) {
							creators = [
								...(creators ?? []),
								...scriptData.author
									.filter(author =>
										author.name?.trim() &&
										!(creators ?? []).some(c => c.name === author.name.trim())
									)
									.map(author => ({
										name: author.name.trim(),
										email: null,
										url: null,
										description: null
									}))
							];
						}
						if (scriptData?.creator?.length) {
							creators = [
								...(creators ?? []),
								...scriptData.creator
									.filter(name =>
										name?.trim() &&
										!(creators ?? []).some(c => c.name === name.trim())
									)
									.map(name => ({
										name: name.trim(),
										email: null,
										url: null,
										description: null
									}))
							];
						}
						if (scriptData?.keywords?.length) {
							categories = [...new Set([...(scriptData.keywords ?? []), ...(categories ?? [])])];
						}
					}
				}
			}
			if (source == "yonhap") {
				const script = getScript(doc, '#contentJsonData');
				if (script) {
					const getData = new Function(`
						let CONTENT_DATA;
						${script}
						return CONTENT_DATA;
					`);
					let jsonDATA = safeParseJSON(getData());
					if (jsonDATA?.BODY) {
						description = jsonDATA.BODY.trim();
						if (description == "\n") description = "";
					}
				}
			}
				
			if (media?.url) {
				try {
					const url = new URL(media.url);
					url.search = "";
					media.url = url.toString();
				} catch (e) {
					console.log("Update: Record #", i + 1, "- Invalid media.url:", media.url);
				}
			}

			seeAlso = getMetas(doc, 'meta[property="og:see_also"]');
			videoURL = getMeta(doc, 'meta[property="og:video"]');
			if (videoURL == null) videoURL = getMeta(doc, 'meta[property="og:video:url"]');

			let locStUpdateDataNew = {};
			if (description) {
				result.entries[i].summary = description;
				locStUpdateDataNew.summary = description;
			}
			if (media.url) {
				result.entries[i].media.origUrl = result.entries[i].media.url;
				result.entries[i].media.url = media.url;
				if (media.comment) {
					result.entries[i].media.origComment = result.entries[i].media.comment;
					result.entries[i].media.comment = media.comment;
				} else {
					result.entries[i].media.comment = "";
				}
				locStUpdateDataNew.media = media;
			}
			if (creators && creators.length) {
				result.entries[i].creator = [
					...(result.entries[i].creator ?? []),
					...creators
				].filter((creator, index, arr) =>
					arr.findIndex(c => c.name === creator.name) === index
				);
				locStUpdateDataNew.creator = result.entries[i].creator;
			}
			if (categories && categories.length) {
				result.entries[i].category = [];
				locStUpdateDataNew.category = [];
				result.entries[i].category = [
					...new Set([
						...(result.entries[i].category ?? []),
						...(categories ?? []).flatMap(c =>
							c.split(",").map(x => x.trim()).filter(Boolean)
						)
					])
				];
				locStUpdateDataNew.category = result.entries[i].category;
			}
			if (seeAlso && seeAlso.length) {
				result.entries[i].seeAlso = [...new Set(seeAlso)];
				locStUpdateDataNew.seeAlso = result.entries[i].seeAlso;
			}
			if (videoURL) {
				result.entries[i].video = videoURL;
				locStUpdateDataNew.video = videoURL;
			}

			if (description == null && media.url == null) {

				// complete update absent

				document.getElementById("loadingSpanTitle").innerHTML =
					t("updateOfRecord")
					+ " #" + (i + 1)
					+ (updateAttempt > 1 ? "/" + updateAttempt : "")
					+ " ❎.&nbsp;";

				adjustFeedScrollDiv();

				// check for redirect in html
				let redirectURL = getMeta(doc, 'meta[http-equiv="refresh"]');
				if (redirectURL && redirectCount < 5) {
					const match = redirectURL.match(/url=['"]?(.*?)['"]?$/i);
					if (match && match[1]) redirectURL = match[1];

					console.log(t("record") + " # " + (i + 1) + ", " + t("redirectByURL") + " - " + redirectURL);

					if (result.entries[i].origLink == null) result.entries[i].origLink = result.entries[i].link;
					result.entries[i].link = redirectURL;

					update(i, source, type, result, lang, controller, 1, redirectCount + 1);
					return;
				}
				if (result.entries[i].origLink != null) {
					result.entries[i].link = result.entries[i].origLink;
					result.entries[i].origLink = null;
				}

				let message = t("updateAbsent");

				if (updateAttempt < 5) { // 5 attempts
					console.log(
						message
						+ ". " + t("record")
						+ " # " + (i + 1)
						+ ", " + t("updateAttempt") + " = " + updateAttempt
					);
					update(i, source, type, result, lang, controller, updateAttempt + 1, redirectCount);
					return;
				}

				console.log(
					message
					+ ". " + t("record")
					+ " # " + (i + 1)
					+ ", " + t("updateAttempt") + " = " + updateAttempt
					+ ", data = " + data
				);
				consoleMetas(doc);

				result.entries[i].error = message + ".";
				showEntry(type, source, lang, result, i, false);
				result.entries[i].storage.updateProcessed = 1;
				checkProcessedCount(source, type, result, lang, controller, 0);
			} else {
				// success

				document.getElementById("loadingTitleContainer").innerHTML =
					t("updateOfRecord")
					+ " #" + (i + 1)
					+ (updateAttempt > 1 ? "/" + updateAttempt : "")
					+ " ✅.&nbsp;";

				adjustFeedScrollDiv();

				let locStPar = source + "_" + type + "_updates";
				let locStUpdateData = getLocalStorageData(locStPar);
				if (result.entries[i].origLink != null) {
					result.entries[i].link = result.entries[i].origLink;
					result.entries[i].origLink = null;
				}
				locStUpdateData[result.entries[i].link] = locStUpdateDataNew;
				localStorage[source + "_" + type + "_updates"] = JSON.stringify(locStUpdateData);

				showEntry(type, source, lang, result, i, false);
				result.entries[i].storage.updateProcessed = 1;
				checkProcessedCount(source, type, result, lang, controller, 1);
			}
		},
		error => {

			if (error.code === 'ERR_CANCELED') return;

			document.getElementById("loadingTitleContainer").innerHTML =
				t("updateOfRecord")
				+ " #" + (i + 1)
				+ (updateAttempt > 1 ? "/" + updateAttempt : "")
				+ " ❎.&nbsp;";

			adjustFeedScrollDiv();

			consoleAxiosError(error, t("record") + " # " + (i + 1) + " | " + t("updateAttempt") + " " + updateAttempt);
			if (updateAttempt < 5) { // 5 attempts
				update(i, source, type, result, lang, controller, updateAttempt + 1, redirectCount);
				return;
			}

			const status = error.response?.status ?? 0;

			if (result.entries[i].origLink != null) {
				result.entries[i].link = result.entries[i].origLink;
				result.entries[i].origLink = null;
			}
			if (source == "cbs" || source == "nasa") {
				result.entries[i].media.origComment = result.entries[i].media.comment;
				result.entries[i].media.comment = t("updateLoadError") + " (" + status + ")";
				result.entries[i].media.origUrl = result.entries[i].media.url;
				result.entries[i].media.url = "images/icons/error/no_image.png";
			}
			result.entries[i].error = t("updateLoadError") + " (" + status + "). <a href='javascript:location.reload();' class='standardb_red'>" + t("reloadPage") + "</a>";
			showEntry(type, source, lang, result, i, false);
			result.entries[i].storage.updateProcessed = 1;
			checkProcessedCount(source, type, result, lang, controller, 0);
		}
	);
}
// ------------- End of Update---------------- //
