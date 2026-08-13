"use strict";

let proxyURL = "https://proxy.urrimus.workers.dev";

function feedIcon(feedURL, lang) {

	let textFeedType;
	if (feedURL == "https://api.artemis2.live/news") { // artemis
		textFeedType = "API ";
	} else {
		textFeedType = "RSS "
	}
	textFeedType += t("feed");
	if (lang == "rus" || lang == "lat") textFeedType += " (" + t("eng") + ")";

	let a = document.createElement('a');
	a.setAttribute('href', feedURL);
	a.setAttribute('class', 'standardb_red');
	a.setAttribute('target', '_blank');
	a.setAttribute('tabindex', "0");
	a.setAttribute('title', textFeedType);

	let Img = document.createElement("img");
	Img.setAttribute('class', "thumbnail_image_red_png");
	Img.setAttribute('alt', textFeedType);
	Img.setAttribute('height', 27);

	if (feedURL == "https://api.artemis2.live/news") { // artemis
		Img.setAttribute('src', "images/icons/feed/api_icon.svg");
	} else {
		Img.setAttribute('src', "images/icons/feed/rss_icon.svg");
	}

	a.appendChild(Img);
	return a;
}

function mailToIcon(email) {
	email = DOMPurify.sanitize(email ?? "");
	let a = document.createElement('a');
	a.setAttribute('href', "mailto:"+email);
	a.setAttribute('class', 'standardb_red icon_link');
	a.setAttribute('target', '_blank');
	a.setAttribute('tabindex', "0");
	a.setAttribute('title', email);

	let Img = document.createElement("img");
	Img.setAttribute('class', "thumbnail_image_red_png");
	Img.setAttribute('alt', email);
	Img.setAttribute('height', 27);
	Img.setAttribute('src', "images/icons/feed/mailto_red.svg");
	a.appendChild(Img);
	return a;
}

function urlA(name, url, description = "") {
	if (description) description = DOMPurify.sanitize(description);
	let a = document.createElement('a');
	a.setAttribute('href', url);
	a.setAttribute('class', 'standardb_red');
	if (description) a.setAttribute('title', description);
	a.setAttribute('target', '_blank');
	a.setAttribute('rel', 'noopener');
	a.innerHTML = DOMPurify.sanitize(name);
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
		let closest = 0;
		let best = Infinity;
		for (let i = 0; i < cells.length; i++) {
			const cellCenter = cells[i].offsetLeft + cells[i].offsetWidth / 2;
			const distance = Math.abs(cellCenter - scrollCenter);
			if (distance < best) {
				best = distance;
				closest = i;
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

	let sourceL="";
	let source="";
	let toRedirect=0;
	
	sourceL=getParameterByName('source');
	if (sourceL && sourceL!="") {
		if (sourceL=="artemis" || sourceL=="cbs" || sourceL=="merco" || sourceL=="nasa" || sourceL=="phys.org" || sourceL=="space.com" || sourceL=="wired" || sourceL=="yahoo" || sourceL=="yonhap")  {
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
		window.location.href='news_'+lang+'.html?source=yahoo&type=top';
		return;
	}

	let typeL="";
	let type="";
	toRedirect=0;
	
	typeL=getParameterByName('type');
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
		|| source=="wired" && (typeL=="top" || typeL=="business" || typeL=="ai" || typeL=="culture" || typeL=="gear" || typeL=="ideas" || typeL=="science" || typeL=="security" || typeL=="backchannel" || typeL=="guides")
		|| source=="yahoo" && (typeL=="top" || typeL=="world" || typeL=="us" || typeL=="politics" || typeL=="health" || typeL=="finance" || typeL=="science" || typeL=="sports" || typeL=="entertainment" || typeL=="lifestyle")
		|| source=="yonhap" && (typeL=="all" || typeL=="national" || typeL=="northkorea" || typeL=="economy" || typeL=="biz" || typeL=="culture" || typeL=="sports") )  {
			type=typeL;
		}
	} else {
		toRedirect=1;
	}
	if (source=="space.com" || source=="artemis") {
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
	    	if (source=="space.com") window.location.href='news_'+lang+'.html?source=space.com';
	    	if (source=="wired") window.location.href='news_'+lang+'.html?source=wired&type=top';
	    	if (source=="yahoo") window.location.href='news_'+lang+'.html?source=yahoo&type=top';
	    	if (source=="yonhap") window.location.href='news_'+lang+'.html?source=yonhap&type=all';
		return;
	}

	let scrollDiv = document.getElementById('scrollDiv');
	if (scrollDiv) enableKeyboardScroll(scrollDiv);
	processPageResize(lang);
	showFeed(type, source, lang);
}

// ------------- End of Initial ---------------- //

function adjustFeedScrollDiv() {
	let scrollDiv = document.getElementById('scrollDiv');

	let tabsHeight = document.getElementById('tabstable').offsetHeight;
	let feedTitleHeight = document.getElementById('titletable').offsetHeight;
	let feedMessageHeight = document.getElementById('messagetable').offsetHeight;
	let totalHeight = tabsHeight+feedTitleHeight+feedMessageHeight;

	if (isMobile()) {
		scrollDiv.style.minHeight = (menuHeight - totalHeight - 8) + "px";
		scrollDiv.style.height = "100%";
		return;
	}

	// use max-height: Math.max(screen, menu)
	scrollDiv.style.maxHeight = (Math.max(getViewportHeight() - getScrollDivOffset(), menuHeight) - totalHeight - 8) + "px";

	scrollDiv.style.height = (document.getElementById('feedtable').offsetHeight==0)
		? scrollDiv.style.maxHeight
		: "100%";
}

// ------------- Show Feed ---------------- //

function showFeedTitle(type, source, lang, result) {

	document.getElementById("loadingTitle").innerHTML = t("outputNewsFeed") + "<span></span>";

	let title = "";
	if (result.title) {
		title = DOMPurify.sanitize(result.title);
		if (result.description && result.description != title) {
			title += "<div style='width:100%; border:#ff8a00 1px solid; margin:5px 0;'></div>";
			title += DOMPurify.sanitize(result.description);
		}
	}

	let preloadImg = new Image();
	preloadImg.setAttribute('class', "thumbnail_image_red_png");
	preloadImg.setAttribute('alt', title);
	if (source == "artemis") {
		preloadImg.setAttribute('height', 54);
	} else {
		preloadImg.setAttribute('height', 27);
	}
	preloadImg.onload = function () {
		let totalEntries = result.entries.length;
		let table = document.getElementById("titletable");
		table.replaceChildren();
		let row = table.insertRow(-1);	
		let cell1 = row.insertCell(0);
		cell1.setAttribute('class', 'nimetus_red');
		cell1.style.textAlign = "center";
		cell1.style.padding = "4px 2px";

		let container = document.createElement("div");
		container.style.padding = "5px";
		container.style.border = "1px solid #de8e8e";
		container.style.borderRadius = "4px";
		container.style.fontWeight = "bold";

		container.style.display = "inline-flex";
		container.style.alignItems = "center";
		container.style.gap = "6px";
		cell1.appendChild(container);

		let aLogo = document.createElement('a');
		aLogo.setAttribute('href', result.link);
		aLogo.setAttribute('class', 'standardb_red');
		aLogo.setAttribute('target', '_blank');
		aLogo.setAttribute('tabindex', "0");
		aLogo.setAttribute('title', title);
		aLogo.appendChild(preloadImg);
		container.appendChild(aLogo);

		let Div = document.createElement('div');
		Div.innerHTML = "<span id='loadedCount'>0/</span>" +
			totalEntries +
			" " +
			t("record", { count: totalEntries}) +
			"<span id='failedCountTitle'></span>";
		container.appendChild(Div);

		container.appendChild(feedIcon(result.feedXML, lang));

		if (result.date_ms) {
			let Img = document.createElement('img');
			Img.setAttribute('tabindex', "0");
			Img.setAttribute('alt', t("lastBuild"));
			Img.setAttribute('title', t("lastBuild") + ": " + formatDate(result.date_ms, lang));
			Img.setAttribute('height', 27);
			Img.src="images/icons/feed/build.svg";
			container.appendChild(Img);
		}

		if (result.copyright) {
			let Img = document.createElement('img');
			Img.setAttribute('tabindex', "0");
			let copyright = DOMPurify.sanitize(result.copyright);
			Img.setAttribute('alt', copyright);
			Img.setAttribute('title', copyright);
			Img.setAttribute('height', 27);
			Img.src="images/icons/feed/copyright.svg";
			container.appendChild(Img);
		}

		if (source=="nasa" && type=="image") {
			let Img = document.createElement('img');
			Img.setAttribute('tabindex', "0");
			Img.setAttribute('alt', t("managingEditor"));
			Img.setAttribute('title', t("managingEditor"));
			Img.setAttribute('height', 27);
			Img.src="images/icons/feed/attribution.svg";

			let Div = document.createElement('div');
			Div.innerHTML = "▸ Brian Dunbar"; // ⯈
			Div.appendChild(document.createElement("span"));

			container.append(Img, Div, mailToIcon("brian.dunbar@nasa.gov"));
		}

		adjustFeedScrollDiv();
		showFeedData(type, source, lang, result);
	}
	preloadImg.src = result.image;
	adjustFeedScrollDiv();
}

function showFeedData(type, source, lang, result) {

	let totalEntries = result.entries.length;

	if (totalEntries > 0) {
		let table = document.getElementById("feedtable");
		let tableMainRow = table.insertRow(-1);
		tableMainRow.id = 'tableMainRow';

		if (result.totalUpdated == totalEntries || source == "merco" || (source=="nasa" && type=="image") || source == "phys.org" || source == "space.com" || source == "wired") {
			let table2 = document.getElementById("messagetable");
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
			document.getElementById("loadingTitleContainer").innerHTML = t("updateStarted") + ". ";
			let a = document.createElement('a');
			a.setAttribute('href', "javascript:void(0);");
			a.setAttribute('class', 'standardb_red');
			a.innerText = t("skip");
			let controller = new AbortController();
			a.onclick = function () {
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
				let table2 = document.getElementById("messagetable");
				table2.replaceChildren();
				adjustFeedScrollDiv();
			};
			let loadingMessages = document.getElementById("loadingMessages");
			loadingMessages.appendChild(a);
			adjustFeedScrollDiv();

			let processedDiv = document.getElementById("processedDiv");
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

function extractLines(html) {
	let parser = new DOMParser();
	let doc = parser.parseFromString(html, 'text/html');

	doc.querySelectorAll('p').forEach(p => {
		p.replaceWith(document.createTextNode(p.innerText + '\n'));
	});

	return doc.body.innerText
		.replaceAll("\\n", "\n")
		.split("\n")
		.map(s => s.trim())
		.filter(Boolean);
}

function splitIgnoringSpecialSpan(str) {
	let placeholder = "\n";
	return str
		.replaceAll("<span style='padding-left:10px;'><span>", placeholder)
		.split(" ")
		.map(s => s.replaceAll(placeholder, "<span style='padding-left:10px;'><span>"));
}

function formatSummaryDiv(summaryDiv, entry) {

	let entry_summary = DOMPurify.sanitize(entry.summary);
	let summary_words;
	let lines = extractLines(entry_summary);
	if (lines.length) {
		entry_summary  = "<span style='padding-left:10px;'><span>" + lines.join(" <br><span style='padding-left:10px;'><span>");
		summary_words = splitIgnoringSpecialSpan(entry_summary);
	} else {
		summary_words = entry_summary.split(" ");
	}

	let wordsCount = 0;
	let linesToShow = 4;

	summaryDiv.innerHTML = "";

	let summarySpan = document.createElement('span');
	summarySpan.setAttribute('class', "text_red");
	summarySpan.style.overflowWrap = "anywhere";
	summarySpan.innerHTML = "";
	summaryDiv.appendChild(summarySpan);

	let extensionA = document.createElement('a');
	extensionA.setAttribute('href', "javascript:void(0);");
	extensionA.setAttribute('class', 'standardb_red');
	extensionA.onclick = function () {
		if (this.innerHTML == "[▼]") {
			summarySpan.innerHTML = entry_summary + " ";
			this.innerHTML = "[▲]";
		} else if (this.innerHTML == "[▲]") {
			summarySpan.innerHTML = formatSummary(summary_words, wordsCount);
			this.innerHTML = "[▼]";
		}
		adjustFeedScrollDiv();
	};
	extensionA.innerHTML = "[▼]";
	summaryDiv.appendChild(extensionA);

	let k;
	for (k = 1; k < summary_words.length; k++) {
		summarySpan.innerHTML = formatSummary(summary_words, k);
		if (getLineCount(summaryDiv) > linesToShow) {
			wordsCount = k - 1;
			summarySpan.innerHTML = formatSummary(summary_words, wordsCount);
			break;
		}
	}
	if (k == summary_words.length) {
		summarySpan.innerHTML = entry_summary;
		summaryDiv.removeChild(extensionA);
	}
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
	let totalEntries = result.entries.length;
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

	let entry = result.entries[preloadIndex];
	let container = entry.storage.container;
	let loadingImg = entry.storage.loadingImg;
	let summaryDiv = entry.storage.summaryDiv;

	let preloadImg = new Image();
	preloadImg.alt = DOMPurify.sanitize(entry.media.comment ?? "");
	preloadImg.title = DOMPurify.sanitize(entry.media.comment ?? "");
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
				if (typeof entry.additMediaUrl !== "undefined") {
					for (let j = 0; j < entry.additMediaUrl.length; j++) {
						const url = new URL(entry.additMediaUrl[j]);
						if (source === "nasa" || source === "artemis") {
							url.searchParams.set("w", "450");
						}
						new Image().src = url.toString();
					}
				}
			});
		}
		adjustFeedScrollDiv();
		preloadImage(type, source, lang, result);
	}
	preloadImg.onerror = function () {
		const showErrorImage = () => {
			entry.storage.preloadPF=0;
			entry.storage.preloadStarted=0;
			entry.storage.preloadComplete=1;

			let preloadImg2 = document.createElement("img");
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
				adjustFeedScrollDiv();
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
			preloadImg.alt = DOMPurify.sanitize(entry.media.origComment ?? "");
			preloadImg.title = DOMPurify.sanitize(entry.media.origComment ?? "");
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

	let entry = result.entries[i];
	let totalEntries = result.entries.length;

	let tableMainRow = document.getElementById("tableMainRow");
	let cell1;
	if (appendEntry) {
		cell1 = tableMainRow.insertCell(-1);
		cell1.style.padding = '0 2px';
	} else {
		let processedCountSoFar = 0;
		for (let j = 0; j < i; j++) {
			if (result.entries[j].storage.updateProcessed == 1) processedCountSoFar++;
		}
		let scrollDiv = document.getElementById('scrollDiv');
		cell1 = tableMainRow.insertCell(processedCountSoFar);
		cell1.style.padding = '0 2px';
		if (scrollDiv.scrollLeft < 5 && processedCountSoFar == 0) {
			scrollDiv.scrollLeft = 0;
		}
	}
	cell1.style.verticalAlign = 'top';

	let container = document.createElement('div');
	container.style.display = "inline-block";
	container.style.padding = "10px";
	container.style.border = "1px solid #de8e8e";
	container.style.borderRadius = "4px";
	container.style.width = "450px";
	cell1.appendChild(container);

	if (typeof entry.error !== "undefined" && entry.error != null) {
		let Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		Div.innerHTML = "💥 " + DOMPurify.sanitize(entry.error);
		container.appendChild(Div);
	}

	let Div = document.createElement('div');
	Div.setAttribute('class', "nimetus3_red");
	Div.innerHTML = (i + 1) + ". " + DOMPurify.sanitize(entry.title);
	container.appendChild(Div);

	let imageDiv = document.createElement('div');
	container.appendChild(imageDiv);

	let Img = document.createElement("img");
	Img.setAttribute('class', "spin_text");
	Img.setAttribute('width', 450 - 200);
	Img.setAttribute('style', 'display: block; margin: 5px 100px;');
	Img.onload = function () {
		adjustFeedScrollDiv();
	}
	Img.src="images/icons/feed/loading_red.svg";
	imageDiv.appendChild(Img);

	result.entries[i].storage.loadingImg = Img;
	result.entries[i].storage.container = container;

	// preload later
	// ------------- Additional Images Show/Hide -------------- //
	if (entry.additMediaUrl) {
		let extensionImgA = document.createElement('a');
		extensionImgA.setAttribute('href', "javascript:void(0);");
		extensionImgA.setAttribute('class', 'standardb_red');
		extensionImgA.onclick = function () {
			if (this.innerHTML == "[▼]") {
				for (let j = 0; j < entry.additMediaUrl.length; j++) {
					let Img2 = document.createElement("img");
					Img2.setAttribute('class', "text_red");
					Img2.setAttribute('width', entry.media.width);
					Img2.setAttribute('style', 'display: block; margin-bottom:5px; background-color: rgba(222, 142, 142, 0.0);');
					Img2.style.visibility = "hidden";
					Img2.onload = function () {
						this.width = Math.min(this.naturalWidth, entry.media.width);
						this.style.visibility = "visible";
						adjustFeedScrollDiv();
					}
					if (source== "nasa" || source == "artemis") {
						const url = new URL(entry.additMediaUrl[j]);
						url.searchParams.set("w", "450");
						Img2.src = url.toString();
					} else {
						Img2.src=entry.additMediaUrl[j];
					}
					imageDiv.appendChild(Img2);
				}
				this.innerHTML = "[▲]";
				showMoreDiv.innerHTML = t("hide") + " " + entry.additMediaUrl.length + " " + t("more") + " ";
				showMoreDiv.appendChild(this);

			} else {
				for (let j = 0; j < entry.additMediaUrl.length; j++) {
					imageDiv.removeChild(imageDiv.lastChild);
				}
				this.innerHTML = "[▼]";
				showMoreDiv.innerHTML = t("show") + " " + entry.additMediaUrl.length + " " + t("more") + " ";
				showMoreDiv.appendChild(this);
			}
			adjustFeedScrollDiv();
		}
		extensionImgA.innerHTML = "[▼]";

		let showMoreDiv = document.createElement('div');
		showMoreDiv.setAttribute('class', "text_red");
		showMoreDiv.setAttribute('style', "margin-bottom:5px; text-align: right;");
		showMoreDiv.innerHTML = t("show") + " " + entry.additMediaUrl.length + " " + t("more") + " ";
		showMoreDiv.appendChild(extensionImgA);
		imageDiv.appendChild(showMoreDiv);
	}
	// ------------- End of Additional Images Show/Hide -------------- //

	// ------------- Video Show/Hide -------------- //
	if (entry.video) {
		let extensionVideoA = document.createElement('a');
		extensionVideoA.setAttribute('href', "javascript:void(0);");
		extensionVideoA.setAttribute('class', 'standardb_red');
		extensionVideoA.onclick  = function () { 
			// ▼- &#9660;   ▲- &#9650;
			if (this.innerHTML=="[▼]") { // expand
				let cssText = 
					'display:block;' +
					'margin-bottom:5px;' +
					'border:0;' +
					'background-color:transparent;' +
					'aspect-ratio:16/9;';
				if (isEmbed(entry.video)) {
			        	let ifrm = document.createElement("iframe");
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
						adjustFeedScrollDiv();
					}
					let url = new URL(entry.video);
					url.searchParams.set("autoplay", "1");
					url.searchParams.set("mute", "0");
					ifrm.src = url.toString();
					imageDiv.appendChild(ifrm);
				} else {
					let video = document.createElement('video');
					video.controls = true;
					video.autoplay = true;
					video.playsInline = true;
					video.preload = "metadata";
					video.width = entry.media.width;
					video.style.cssText = cssText;
					video.onloadedmetadata = function () {
						adjustFeedScrollDiv();
					};
					if (source == "cbs") {
						if (window.Hls && Hls.isSupported()) {
							let hls = new Hls();
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
				this.innerHTML="[▲]";
				showMoreDiv.innerHTML = t("hide") + " " + t("video") + " ";
				showMoreDiv.appendChild(this);
			} else if (this.innerHTML=="[▲]") { // collapse
				imageDiv.removeChild(imageDiv.lastChild);
				this.innerHTML="[▼]";
				showMoreDiv.innerHTML = t("show") + " " + t("video") + " ";
				showMoreDiv.appendChild(this);
			}
			adjustFeedScrollDiv();
		}
		extensionVideoA.innerHTML = "[▼]";

		let showMoreDiv = document.createElement('div');
		showMoreDiv.setAttribute('class', "text_red");
		showMoreDiv.setAttribute('style', "margin-bottom:5px; text-align: right;");
		showMoreDiv.innerHTML = t("show") + " " + t("video") + " ";
		showMoreDiv.appendChild(extensionVideoA);
		imageDiv.appendChild(showMoreDiv);
	}
	// ------------- End of Video Show/Hide -------------- //

	if (entry.summary) {
		let summaryDiv = document.createElement('div');
		summaryDiv.setAttribute('class', "text_red");
		container.appendChild(summaryDiv);
		formatSummaryDiv(summaryDiv, entry);
		result.entries[i].storage.summaryDiv = summaryDiv;
	}

	// preload and ensured that result.entries[i].storage.summaryDiv is set
	preloadImage(type, source, lang, result);

	if (entry.source) {
		let div = document.createElement('div');
		div.setAttribute('class', "text_red");
		let b = document.createElement("b");
		b.innerHTML = t("source") + ": ";
		div.appendChild(b);
		if (entry.source.url) {
			div.appendChild(urlA(entry.source.title, entry.source.url));
		} else {
			let span = document.createElement('span');
			span.innerHTML = DOMPurify.sanitize(entry.source.title);
			div.appendChild(span);
		}
		container.appendChild(div);
	}

	if (entry.subject) {
		let div = document.createElement("div");
		div.className = "text_red";
		let b = document.createElement("b");
		b.innerHTML = t("subject") + ": ";
		let span = document.createElement('span');
		span.innerHTML = DOMPurify.sanitize(entry.subject);
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

			const name = DOMPurify.sanitize(creator.name ?? "");
			const description = DOMPurify.sanitize(creator.description ?? "");

			const span = document.createElement('span');
			if (hasEmail) span.style.verticalAlign = "middle";
			if (creator.url) {
				span.append(urlA(name, creator.url, description));
			} else {
				span.innerHTML = name;
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
		span.innerHTML = entry.category.map(DOMPurify.sanitize).join(", ");
		div.append(b, span);
		container.append(div);
	}

	if (entry.link) {
		let Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		let a = document.createElement('a');
		a.setAttribute('href', entry.link);
		a.setAttribute('class', 'standardb_red');
		a.setAttribute('target', '_blank');
		a.setAttribute('rel', 'noopener');
		a.innerHTML = t("more") + " ▶";
		Div.appendChild(a);
		container.appendChild(Div);
	}

	if (entry.seeAlso?.length) {
		let Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		const b = document.createElement("b");
		b.innerHTML = t("seeAlso") + ": ";
		Div.appendChild(b);
		for (let j = 0; j < entry.seeAlso.length; j++) {
			let a = document.createElement('a');
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

	let date = document.createElement('div');
	date.className = 'textsmall_red';
	date.setAttribute("style", "text-align:right; padding-right:10px;");
	date.innerHTML = formatDate(entry.date_ms, lang);
	container.appendChild(date);
}

function generateTabs(type, source, lang) {

	let tabs = {};
	let tabs2 = {};

	if (source=="cbs") {
		tabs["top"]="Top Stories";
		tabs["us"]="U.S.";
		tabs["politics"]="Politics";
		tabs["world"]="World";
		tabs["health"]="Health";
		tabs["moneywatch"]="MoneyWatch";
		tabs["science"]="Science";
		tabs["technology"]="Technology";
		tabs["entertainment"]="Entertainment";
		tabs["space"]="Space";
	}
	if (source=="nasa") {
		tabs["releases"]="News Releases";
		tabs["recent"]="Recently";
		tabs2["recent"]="Recently Published Content";
		tabs["image"]="Image of the Day";
		tabs["technology"]="Technology";
		tabs["aeronautics"]="Aeronautics";
		tabs["iss"]="Space Station";
		tabs["artemis"]="Artemis";
	}
	if (source=="merco") {
		tabs["main"]="Main";
		tabs["agriculture"]="Agriculture";
		tabs["economy"]="Economy";
		tabs["energy"]="Energy";
		tabs["environment"]="Environment";
		tabs["fisheries"]="Fisheries";
		tabs["health"]="Health & Science";
		tabs["investments"]="Investments";
		tabs["politics"]="Politics";
		tabs["realestate"]="Real Estate";
	}
	if (source=="phys.org") {
		if (type=="earth" || type=="environment") {
			tabs["earth"]="Earth Sciences";
			tabs["environment"]="Environment";
		}
		if (type=="archaeology" || type=="economics" || type=="education" || type=="mathematics" || type=="other" || type=="political"  || type=="social") {
			tabs["archaeology"]="Archaeology";
			tabs2["economics"]="Economics & Business";
			tabs["economics"]="Economics &";
			tabs["education"]="Education";
			tabs["mathematics"]="Mathematics";
			tabs["other"]="Other";
			tabs["political"]="Political Science";
			tabs["social"]="Social Sciences";
		}
		if (type=="bio" || type=="nanomaterials" || type=="nanophysics") {
			tabs["bio"]="Bio & Medicine";
			tabs["nanomaterials"]="Nanomaterials";
			tabs["nanophysics"]="Nanophysics";
		}
		if (type=="condensed" || type=="general" || type=="optics" || type=="plasma" || type=="quantum" || type=="soft" || type=="superconductivity") {
			tabs["condensed"]="Condensed Matter";
			tabs["general"]="General Physics";
			tabs["optics"]="Optics & Photonics";
			tabs["plasma"]="Plasma Physics";
			tabs["quantum"]="Quantum Physics";
			tabs["soft"]="Soft Matter";
			tabs["superconductivity"]="Superconductivity";
		}
		if (type=="astrobiology" || type=="astronomy" || type=="planetary" || type=="space") {
			tabs["astrobiology"]="Astrobiology";
			tabs["astronomy"]="Astronomy";
			tabs["planetary"]="Planetary Sciences";
			tabs["space"]="Space Exploration";
		}
		if (type=="agriculture" || type=="biotechnology" || type=="cell" || type=="ecology" || type=="evolution" || type=="molecular" || type=="otherb" || type=="paleontology" || type=="plants" || type=="veterinary") {
			tabs["agriculture"]="Agriculture";
			tabs["biotechnology"]="Biotechnology";
			tabs2["cell"]="Cell & Microbiology";
			tabs["cell"]="Cell &";
			tabs["ecology"]="Ecology";
			tabs["evolution"]="Evolution";
			tabs2["molecular"]="Molecular & Computational Biology";
			tabs["molecular"]="Molecular &";
			tabs["otherb"]="Other";
			tabs2["paleontology"]="Paleontology & Fossils";
			tabs["paleontology"]="Paleontology &";
			tabs["plants"]="Plants & Animals";
			tabs2["veterinary"]="Veterinary Medicine";
			tabs["veterinary"]="Veterinary";
		}
		if (type=="analytical" || type=="biochemistry" || type=="materials" || type=="otherc" || type=="polymers") {
			tabs2["analytical"]="Analytical Chemistry";
			tabs["analytical"]="Analytical";
			tabs["biochemistry"]="Biochemistry";
			tabs["materials"]="Materials Science";
			tabs["otherc"]="Other";
			tabs["polymers"]="Polymers";
		}
	}
	if (source=="wired") {
		tabs["top"]="Top";
		tabs["business"]="Business";
		tabs["ai"]="Artificial";
		tabs2["ai"]="Artificial Intelligence";
		tabs["culture"]="Culture";
		tabs["gear"]="Gear";
		tabs["ideas"]="Ideas";
		tabs["science"]="Science";
		tabs["security"]="Security";
		tabs["backchannel"]="Backchannel";
		tabs["guides"]="Guides";
	}
	if (source=="yahoo") {
		tabs["top"]="Top";
		tabs["world"]="World";
		tabs["us"]="US";
		tabs["politics"]="Politics";
		tabs["health"]="Health";
		tabs["finance"]="Finance";
		tabs["science"]="Science";
		tabs["sports"]="Sports";
		tabs["entertainment"]="Entertainment";
		tabs["lifestyle"]="Lifestyle";
	}
	if (source=="yonhap") {
		tabs["all"]="All News";
		tabs["national"]="National";
		tabs["northkorea"]="North Korea";
		tabs["economy"]="Economy/Finance";
		tabs["biz"]="BIZ";
		tabs["culture"]="Culture/K-pop";
		tabs["sports"]="Sports";
	}

	let textFeedSource;
	let menuDiv;
	if (source=="artemis") {
		textFeedSource = "Artemis II";
		menuDiv=document.getElementById("menu_26_8");
	}
	if (source == "cbs") {
		textFeedSource = "CBS News";
		menuDiv=document.getElementById("menu_26_3");
	}
	if (source == "merco") {
		textFeedSource = "MercoPress.";
		menuDiv=document.getElementById("menu_26_9");
	}
	if (source == "nasa") {
		textFeedSource = "NASA";
		menuDiv=document.getElementById("menu_26_2");
	}
	if (source=="phys.org") {
		textFeedSource = "Phys.org";
		menuDiv=document.getElementById("menu_26_1");
	}
	if (source=="space.com") {
		textFeedSource = "Space.com";
		menuDiv=document.getElementById("menu_26_6");
	}
	if (source == "wired") {
		textFeedSource = "Wired";
		menuDiv=document.getElementById("menu_26_7");
	}
	if (source == "yahoo") {
		textFeedSource = "Yahoo! News";
		menuDiv=document.getElementById("menu_26_5");
	}
	if (source == "yonhap") {
		textFeedSource = "Yonhap News";
		menuDiv=document.getElementById("menu_26_4");
	}

	menuDiv.setAttribute('class', "menu_selected");
	menuDiv.setAttribute('onmouseleave', "this.className='menu_selected';");

	let textFeedType;
	if (source == "artemis") {
		textFeedType ="API ";
	} else {
		textFeedType ="RSS ";
	}
	textFeedType += t("feed");

	let tabtype2;
	if (source=="phys.org") {
		if (type=="all") tabtype2="All Stories";
		if (type=="earth" || type=="environment") tabtype2="Earth &blacktriangleright; "+tabs[type];
		if (type=="archaeology" || type=="economics" || type=="education" || type=="mathematics" || type=="other" || type=="political"  || type=="social") {
			tabtype2="Other Sciences &blacktriangleright; "+tabs[type];
			if (type=="economics") tabtype2="Other Sciences &blacktriangleright; "+tabs2[type];
		}
		if (type=="bio" || type=="nanomaterials" || type=="nanophysics") tabtype2="Nanotechnology &blacktriangleright; "+tabs[type];
		if (type=="condensed" || type=="general" || type=="optics" || type=="plasma" || type=="quantum" || type=="soft" || type=="superconductivity") tabtype2="Physics &blacktriangleright; "+tabs[type];
		if (type=="astrobiology" || type=="astronomy" || type=="planetary" || type=="space") tabtype2="Astronomy & Space &blacktriangleright; "+tabs[type];
		if (type=="agriculture" || type=="biotechnology" || type=="cell" || type=="ecology" || type=="evolution" || type=="molecular" || type=="otherb" || type=="paleontology" || type=="plants" || type=="veterinary") {
			tabtype2="Biology &blacktriangleright; "+tabs[type];
			if (type=="cell" || type=="molecular" || type=="paleontology" || type=="veterinary") tabtype2="Biology &blacktriangleright; "+tabs2[type];
		}
		if (type=="analytical" || type=="biochemistry" || type=="materials" || type=="otherc" || type=="polymers") {
			tabtype2="Chemistry &blacktriangleright; "+tabs[type];
			if (type=="analytical") tabtype2="Chemistry &blacktriangleright; "+tabs2[type];
		}
	} else if (source=="artemis" || source=="space.com") tabtype2="";
	else if (source=="nasa" && type=="recent" || source=="wired" && type=="ai") tabtype2=tabs2[type];
	else tabtype2=tabs[type];

	let feedTitle=document.getElementById("feedTitle");
	if (tabtype2 != "") {
		feedTitle.innerHTML=t("news")+" &blacktriangleright; "+textFeedSource +" "+textFeedType+" &blacktriangleright; "+tabtype2;
	} else {
		feedTitle.innerHTML=t("news")+" &blacktriangleright; "+textFeedSource +" "+textFeedType;
	}

	let keys=Object.keys(tabs);
	let table = document.getElementById("tabstable");
	table.replaceChildren();

	// Phys.org subtable
	if (source == "phys.org") {
		let row = table.insertRow(-1);
		let cell1 = row.insertCell(0);
		let tabssubtable1 = document.createElement('table');
		tabssubtable1.setAttribute('cellpadding', "0px;");
		tabssubtable1.setAttribute('cellspacing', "0px;");
		tabssubtable1.setAttribute('width', "100%;");
		let subrow = tabssubtable1.insertRow(-1);
		let subcell = subrow.insertCell(0);
		subcell.setAttribute('style', "width: 280px; display: inline-block; textAlign: left; margin:2px;");
		let Div = document.createElement('div');
		Div.setAttribute('id', "menu_100");
		Div.setAttribute('onmouseenter', "showSubMenu(this, '"+lang+"', 'news');");
		Div.setAttribute('onmouseleave', "this.className='menu_not_selected_red'");
		Div.setAttribute('onclick', "showSubMenu(this, '"+lang+"', 'news');" );
		Div.setAttribute('class', "menu_not_selected_red");
		Div.setAttribute('style', "padding-left: 5px;");
		Div.innerHTML = "● Phys.org RSS " + t("feed");
		subcell.appendChild(Div);
		cell1.appendChild(tabssubtable1);
		table.setAttribute("onmouseenter", "");
	}

	let tabssubtable2 = document.createElement('table');
	tabssubtable2.setAttribute('cellpadding', "0px;");
	tabssubtable2.setAttribute('cellspacing', "0px;");
	tabssubtable2.setAttribute('width', "100%;");

	let subrow;
	for (let i=0; i<keys.length; i++) {
		if (i%5==0) subrow = tabssubtable2.insertRow(-1);
		let subcell = subrow.insertCell(i%5);
		subcell.style.width='20%';
		if (keys.length<5) subcell.style.display='inline-block';
		subcell.style.textAlign='center';

		let Div = document.createElement('div');
		Div.dataset.shortTitle=tabs[keys[i]];
		if (typeof tabs2[keys[i]]!=="undefined") Div.dataset.fullTitle=tabs2[keys[i]];
		Div.style.margin='2px';
		if (type==keys[i]) Div.setAttribute('class', "menu_selected");
		else Div.setAttribute('class', "menu_not_selected_red");
		Div.setAttribute('id', "feed_"+keys[i]);
		Div.setAttribute('role', "button");
		Div.setAttribute('tabindex', "0");
		Div.setAttribute('onmouseenter', "if (clickStarted) return; this.className='menu_selected'; if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.fullTitle;");
		Div.setAttribute('onmouseleave', "if (clickStarted) return; mouseOutTab('"+keys[i]+"', '"+type+"'); if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.shortTitle;");
		let divLink="news_"+lang+".html?source="+source+"&type="+keys[i];
		Div.setAttribute('onclick', "if (event.ctrlKey){ window.open('"+divLink+"'); } else { clickStarted = true; window.location.href='"+divLink+"'; };");
		Div.innerHTML=tabs[keys[i]];
		subcell.appendChild(Div);
	}

	let row = table.insertRow(-1);
	let cell1 = row.insertCell(0);
	cell1.appendChild(tabssubtable2);

	let Img = document.createElement('img');
	Img.setAttribute('tabindex', "0");
	Img.setAttribute('alt', t("quickTips"));
	Img.setAttribute('title', t("tipUseNavigationKeys") + " - <kbd>&rlarr;</kbd> " + t("with") + " <kbd>Shift</kbd> " + t("and") + " <kbd>Home</kbd>, <kbd>End</kbd> " + t("forContentsScroll"));
	Img.setAttribute('style',  "height:27px; display: block;");
	Img.src="images/icons/feed/tips.svg";
	table.appendChild(Img);

	let Div = document.createElement('div');
	Div.setAttribute('id', "information_div");
	let a = document.createElement('a');
	a.setAttribute('href', "javascript:showInformation('"+lang+"');");
	a.setAttribute('tabindex', "0");
	a.setAttribute('title', t("versionInformation"));
	let Img2 = document.createElement('img');
	Img2.setAttribute('alt', t("versionInformation"));
	Img2.setAttribute('id', "information_img");
	Img2.setAttribute('class', "thumbnail_image_red_png");
	Img2.setAttribute('style', "height: 27px; display: block;");
	Img2.src="images/icons/html_editor/information_red.svg";
	a.appendChild(Img2);
	Div.appendChild(a);
	table.appendChild(Div);

	table.style.position='relative';
	Div.style.position='absolute';
	Img.style.position='absolute';

	if (keys.length < 5) {
		Div.style.right='2px';
		Img.style.right='32px';
		Div.style.top='2px';
		Img.style.top='2px';
	} else if (keys.length % 5==0) {
		Div.style.right='2px';
		Img.style.right='32px';
		Div.style.bottom='-27px';
		Img.style.bottom='-27px';
	} else {
		Div.style.right='2px';
		Img.style.right='32px';
		Div.style.bottom='0px';
		Img.style.bottom='0px';
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

	let container = document.createElement("div");
	container.style.padding = "5px";
	container.style.border = "2px solid #de8e8e";
	container.style.borderRadius = "4px";
	container.style.fontWeight = "bold";
	container.style.display = "inline-block";

	let table2 = document.getElementById("messagetable");
	table2.replaceChildren();
	let row = table2.insertRow(-1);
	let cell1 = row.insertCell(0);
	cell1.className = 'text_red';
	cell1.style.textAlign = "center";
	cell1.style.padding = "4px 2px 8px 2px";
	cell1.appendChild(container);

	let Div = document.createElement("div");
	Div.style.display = "inline-flex";
	Div.style.alignItems = "center";
	Div.style.gap = "6px";
	Div.innerHTML = t("newsFeed") + feedIcon(feedURL, lang).outerHTML;

	container.innerHTML = Div.outerHTML + "<br>" + message + "<br><a href='javascript:location.reload();' class='standardb_red'>" + t("reloadPage")+ "</a>";
	adjustFeedScrollDiv();
	requestIdleCallback(() => { preloadImagesGeneral(); });

}

function loadFeed(type, source, lang, feedURL, loadAttempt = 1) {

	let axiosConfig = {};

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

	if (source == "cbs" || source == "merco" || source == "phys.org" || source == "space.com" || source == "yonhap") {
		axiosConfig.url = proxyURL;
		axiosConfig.params = {
			url: feedURL,
			_: Date.now()
		};
	} else {
		axiosConfig.url = feedURL;
		axiosConfig.params = {
			_: Date.now()
		};
	}
	axiosConfig.timeout = 10000;

	axios(axiosConfig)
	.then(
		response => {
			const data = response.data;

			let loadAttemptSpan = document.getElementById("loadAttempt");
			if (loadAttemptSpan) loadAttemptSpan.innerHTML="";
			adjustFeedScrollDiv();

			let result;
			if (source == "artemis") {
				if (!data || typeof data !== "object" || data.message !== "fetch news event is successful.") {
   					showFeedError("API Parse Error: Invalid API Response", feedURL, lang);
					adjustScrollDiv();
					return;
				}
				result = data;
			} else {
				try {
					let json = xml2js(data, {
						compact: true,
						trim: true
					});
					result = json.rss.channel;
				} catch (e) {
   					showFeedError("XML Parse Error: " + e.message, feedURL, lang);
					adjustScrollDiv();
					return;
				}
			}

			result.feedXML = feedURL;
			optimizeUpdateResult(type, source, lang, result);
			requestIdleCallback(() => { preloadImagesGeneral(); });
		},
		error => {
			consoleAxiosError(error, t("feedLoadError") + " | " + t("loadAttempt") + " " + loadAttempt);
			if (loadAttempt < 10) {
				loadAttempt++;
				let loadAttemptSpan = document.getElementById("loadAttempt");
				if (loadAttemptSpan) loadAttemptSpan.innerHTML="<br>" + t("loadAttempt") + ": " + loadAttempt;
				adjustFeedScrollDiv();
				loadFeed(type, source, lang, feedURL, loadAttempt);
				return;
			} 

			showFeedError(error.message, feedURL, lang);

		}
	);
}

function showFeed(type, source, lang) {
	generateTabs(type, source, lang);

	let feedURL = "";

	if (source == "artemis") {
		let artemisTypes = {
			"all": "https://api.artemis2.live/news"
		};
		if (artemisTypes[type]) feedURL = artemisTypes[type];
	}

	if (source == "cbs") {
		let cbsTypes = {
			"top": "https://www.cbsnews.com/latest/rss/main",
			"us": "https://www.cbsnews.com/latest/rss/us",
			"politics": "https://www.cbsnews.com/latest/rss/politics",
			"world": "https://www.cbsnews.com/latest/rss/world",
			"health": "https://www.cbsnews.com/latest/rss/health",
			"moneywatch": "https://www.cbsnews.com/latest/rss/moneywatch",
			"science": "https://www.cbsnews.com/latest/rss/science",
			"technology": "https://www.cbsnews.com/latest/rss/technology",
			"entertainment": "https://www.cbsnews.com/latest/rss/entertainment",
			"space": "https://www.cbsnews.com/latest/rss/space"
		};
		if (cbsTypes[type]) feedURL = cbsTypes[type];
	}

	if (source == "merco") {
		let mercoTypes = {
			"main": "https://en.mercopress.com/rss/",
			"agriculture": "https://en.mercopress.com/rss/agriculture",
			"economy": "https://en.mercopress.com/rss/economy",
			"energy": "https://en.mercopress.com/rss/energy",
			"environment": "https://en.mercopress.com/rss/environment",
			"fisheries": "https://en.mercopress.com/rss/fisheries",
			"health": "https://en.mercopress.com/rss/health-science",
			"investments": "https://en.mercopress.com/rss/investments",
			"politics": "https://en.mercopress.com/rss/politics",
			"realestate": "https://en.mercopress.com/rss/real-estate"
		};
		if (mercoTypes[type]) feedURL = mercoTypes[type];
	}

	if (source == "nasa") {
		let nasaTypes = {
			"releases": "https://www.nasa.gov/news-release/feed/",
			"recent": "https://www.nasa.gov/feed/",
			"image": "https://www.nasa.gov/feeds/iotd-feed/",
			"technology": "https://www.nasa.gov/technology/feed/",
			"aeronautics": "https://www.nasa.gov/aeronautics/feed/",
			"iss": "https://www.nasa.gov/missions/station/feed/",
			"artemis": "https://www.nasa.gov/missions/artemis/feed/"
		};
		if (nasaTypes[type]) feedURL = nasaTypes[type];
	}

	if (source == "phys.org") {
		let physTypes = {
			"all": "https://phys.org/rss-feed/",
			"earth": "https://phys.org/rss-feed/earth-news/earth-sciences/",
			"environment": "https://phys.org/rss-feed/earth-news/environment/",
			"archaeology": "https://phys.org/rss-feed/science-news/archaeology-fossils/",
			"economics": "https://phys.org/rss-feed/science-news/economics-business/",
			"education": "https://phys.org/rss-feed/science-news/education/",
			"mathematics": "https://phys.org/rss-feed/science-news/mathematics/",
			"other": "https://phys.org/rss-feed/science-news/sci-other/",
			"political": "https://phys.org/rss-feed/science-news/political-science/",
			"social": "https://phys.org/rss-feed/science-news/social-sciences/",
			"bio": "https://phys.org/rss-feed/nanotech-news/bio-medicine/",
			"nanomaterials": "https://phys.org/rss-feed/nanotech-news/nano-materials/",
			"nanophysics": "https://phys.org/rss-feed/nanotech-news/nano-physics/",
			"condensed": "https://phys.org/rss-feed/physics-news/materials/",
			"general": "https://phys.org/rss-feed/physics-news/physics/",
			"optics": "https://phys.org/rss-feed/physics-news/optics-photonics/",
			"plasma": "https://phys.org/rss-feed/physics-news/plasma/",
			"quantum": "https://phys.org/rss-feed/physics-news/quantum-physics/",
			"soft": "https://phys.org/rss-feed/physics-news/soft-matter/",
			"superconductivity": "https://phys.org/rss-feed/physics-news/superconductivity/",
			"astrobiology": "https://phys.org/rss-feed/space-news/astrobiology/",
			"astronomy": "https://phys.org/rss-feed/space-news/astronomy/",
			"planetary": "https://phys.org/rss-feed/space-news/planetary-sciences/",
			"space": "https://phys.org/rss-feed/space-news/space-exploration/",
			"agriculture": "https://phys.org/rss-feed/biology-news/agriculture/",
			"biotechnology": "https://phys.org/rss-feed/biology-news/biotechnology/",
			"cell": "https://phys.org/rss-feed/biology-news/microbiology/",
			"ecology": "https://phys.org/rss-feed/biology-news/ecology/",
			"evolution": "https://phys.org/rss-feed/biology-news/evolution/",
			"molecular": "https://phys.org/rss-feed/biology-news/molecular-computational/",
			"otherb": "https://phys.org/rss-feed/biology-news/biology-other/",
			"paleontology": "https://phys.org/rss-feed/biology-news/paleontology/",
			"plants": "https://phys.org/rss-feed/biology-news/plants-animals/",
			"veterinary": "https://phys.org/rss-feed/biology-news/veterinary-medicine/",
			"analytical": "https://phys.org/rss-feed/chemistry-news/analytical-chemistry/",
			"biochemistry": "https://phys.org/rss-feed/chemistry-news/biochemistry/",
			"materials": "https://phys.org/rss-feed/chemistry-news/materials-science/",
			"otherc": "https://phys.org/rss-feed/chemistry-news/chemistry-other/",
			"polymers": "https://phys.org/rss-feed/chemistry-news/polymers/"
		};
		if (physTypes[type]) feedURL = physTypes[type];
	}

	if (source == "space.com") {
		let spaceComTypes = {
			"all": "https://www.space.com/feeds.xml"
		};
		if (spaceComTypes[type]) feedURL = spaceComTypes[type];
	}

	if (source == "wired") {
		let wiredTypes = {
			"top": "https://www.wired.com/feed/rss",
			"business": "https://www.wired.com/feed/category/business/latest/rss",
			"ai": "https://www.wired.com/feed/tag/ai/latest/rss",
			"culture": "https://www.wired.com/feed/category/culture/latest/rss",
			"gear": "https://www.wired.com/feed/category/gear/latest/rss",
			"ideas": "https://www.wired.com/feed/category/ideas/latest/rss",
			"science": "https://www.wired.com/feed/category/science/latest/rss",
			"security": "https://www.wired.com/feed/category/security/latest/rss",
			"backchannel": "https://www.wired.com/feed/category/backchannel/latest/rss",
			"guides": "https://www.wired.com/feed/tag/wired-guide/latest/rss"
		};
		if (wiredTypes[type]) feedURL = wiredTypes[type];
	}

	if (source == "yahoo") {
		let yahooTypes = {
			"top": "https://news.yahoo.com/rss/",
			"world": "https://news.yahoo.com/rss/world",
			"us": "https://news.yahoo.com/rss/us",
			"politics": "https://news.yahoo.com/rss/politics",
			"health": "https://news.yahoo.com/rss/health",
			"finance": "https://news.yahoo.com/rss/finance",
			"science": "https://news.yahoo.com/rss/science",
			"sports": "https://news.yahoo.com/rss/sports",
			"entertainment": "https://news.yahoo.com/rss/entertainment",
			"lifestyle": "https://news.yahoo.com/rss/lifestyle"
		};
		if (yahooTypes[type]) feedURL = yahooTypes[type];
	}

	if (source == "yonhap") {
		let yonhapTypes = {
			"all": "https://en.yna.co.kr/RSS/news.xml",
			"national": "https://en.yna.co.kr/RSS/national.xml",
			"northkorea": "https://en.yna.co.kr/RSS/nk.xml",
			"economy": "https://en.yna.co.kr/RSS/economy-finance.xml",
			"biz": "https://en.yna.co.kr/RSS/biz.xml",
			"culture": "https://en.yna.co.kr/RSS/culture.xml",
			"sports": "https://en.yna.co.kr/RSS/sports.xml"
		};
		if (yonhapTypes[type]) feedURL = yonhapTypes[type];
	}

	let loadingSpin = document.createElement("div");
	loadingSpin.className = "spin_animated_text";
	loadingSpin.style.fontSize = "20px";
	loadingSpin.style.paddingBottom = "2.5px"; // to avoid spin shift
	loadingSpin.textContent = "⚙"; // ⚙ ↻⌛⏳

	let processedDiv = document.createElement("div");
	processedDiv.id = "processedDiv";
	processedDiv.style.display = "none";
	let processedLine = document.createElement("div");
	processedLine.innerHTML = "#📊: <span id='processedCount'>0</span> | #🏁: <span id='leftCount'>0</span>";
	let passedLine = document.createElement("div");
	passedLine.innerHTML = "#✅: <span id='passedCount'>0</span>";
	let failedLine = document.createElement("div");
	failedLine.innerHTML = "#❎: <span id='failedCount'>0</span>";
	processedDiv.appendChild(processedLine);
	processedDiv.appendChild(passedLine);
	processedDiv.appendChild(failedLine);

	let loadingMessages = document.createElement("div");
	loadingMessages.id = "loadingMessages";
	let loadingTitleContainer = document.createElement("span");
	loadingTitleContainer.id = "loadingTitleContainer";
	let loadingTitle = document.createElement("span");
	loadingTitle.id = "loadingTitle";
	loadingTitle.innerHTML = t("readingNewsFeed");
	loadingTitle.appendChild(document.createElement("span"));
	loadingTitleContainer.appendChild(loadingTitle);
	loadingTitleContainer.appendChild(feedIcon(feedURL, lang));
	loadingTitleContainer.style.display = "inline-flex";
	loadingTitleContainer.style.alignItems = "center";
	loadingTitleContainer.style.gap = "6px";
	let loadAttempt = document.createElement("span");
	loadAttempt.id = "loadAttempt";
	loadingMessages.appendChild(loadingTitleContainer);
	loadingMessages.appendChild(loadAttempt);
	loadingMessages.style.display = "block";

	let container = document.createElement("div");
	container.appendChild(loadingMessages);
	container.appendChild(loadingSpin);
	container.appendChild(processedDiv);
	container.style.padding = "5px";
	container.style.border = "2px solid #de8e8e";
	container.style.borderRadius = "4px";
	container.style.fontWeight = "bold";
	container.style.display = "inline-block";

	let preloadImg = new Image();
	preloadImg.onload = function () {
		let table = document.getElementById("messagetable");
		table.replaceChildren();
		let row = table.insertRow(-1);
		let cell1 = row.insertCell(0);
		cell1.className = 'text_red';
		cell1.style.textAlign = "center";
		cell1.style.padding = "4px 2px 8px 2px";;
		cell1.appendChild(container);
		adjustFeedScrollDiv();
		loadFeed(type, source, lang, feedURL);
	}
	if (source == "artemis") {
		preloadImg.src = "images/icons/feed/api_icon.svg";
	} else {
		preloadImg.src = "images/icons/feed/rss_icon.svg"
	}
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
	let result, locStUpdateData = {},  i = -1;

	result = {};
	result.feedXML = resultOrig.feedXML;

	if (source == "artemis") result.image = "images/icons/feed/artemis_logo.svg";
	if (source == "cbs") result.image = "images/icons/feed/cbs_news_logo.svg";
	if (source == "nasa") result.image = "images/icons/feed/nasa_worm_logo.svg";
	if (source == "merco") result.image = "images/icons/feed/mercopress_logo.png";
	if (source == "phys.org") result.image = "images/icons/feed/phys_org_logo.png";
	if (source == "space.com") result.image = "images/icons/feed/space_com_logo.svg";
	if (source == "wired") result.image = "images/icons/feed/wired_logo.svg";
	if (source == "yahoo") result.image = "images/icons/feed/yahoo_news_logo.svg";
	if (source == "yonhap") result.image = "images/icons/feed/yonhap_news_logo.svg";

	result.totalUpdated = 0;

	if (source == "artemis" || source == "cbs" || (source == "nasa" && type != "image") || source == "yonhap" || source == "yahoo") {
		let locStPar = source + "_" + type + "_updates";
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
		if (!resultOrig.item || resultOrig.item.length == 0) return result;
		result.title = resultOrig.title?._text || resultOrig.title?._cdata;
		result.description = resultOrig.description?._text || resultOrig.description?._cdata;
		if (source == "wired" && type != "top") result.description = result.title;
		result.link = resultOrig.link._text;
		if (source == "space.com") result.link = "https://www.space.com";
		let lastBuild = resultOrig.pubDate?._text || resultOrig.lastBuildDate?._text;
		if (lastBuild) result.date_ms = new Date(lastBuild).getTime();
		let copyright = resultOrig.copyright?._text || resultOrig.copyright?._cdata;
		if (copyright) result.copyright = copyright;
		items = resultOrig.item;
	}

	const mediaCommentBlock = (caption, content, marginTop = 0) => `
		<div style="display:flex; align-items:center; margin-top:${marginTop}px">
			<div style="flex:1; border:1px solid #ff8a00;"></div>
			<div style="padding:0 5px; white-space:nowrap;">${caption}</div>
			<div style="flex:1; border:1px solid #ff8a00;"></div>
		</div>
		<div>${content}</div>
	`;

	for (let c = 0; c < items.length; c++) {
		let entry = items[c];

		if (source == "yahoo" && entry.source) {
			if (entry.source._text == "BBC" || entry.source._text == "Yahoo Finance UK" || entry.source._text == "The Telegraph") {
				continue;
			}
		}
		i++;

		result.entries[i] = {};
		let newEntry = result.entries[i];
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
				if (pos  != -1) {
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

		// --- space.com ---
		if (source == "space.com") {
			newEntry.title = entry.title._cdata;
			const url = entry["media:thumbnail"]?._attributes?.url;
			if (url) {
				newEntry.media.url = url;
				let description = entry["media:content"]?.["media:description"]?._cdata;
				if (description) {
					newEntry.media.comment = mediaCommentBlock(t("description"), description);
					let content = entry["media:content"]?.["media:text"]?._cdata;
					if (description && content != description) {
						newEntry.media.comment += mediaCommentBlock(t("content"), content, 5);
					}
					let credit = entry["media:content"]?.["media:credit"]?._cdata;
					if (credit) {
						newEntry.media.comment += mediaCommentBlock(t("credit"), credit, 5);
					}
				}
			} else {
				newEntry.media.url = "images/icons/error/no_image.png";
				newEntry.media.comment = t("imageAbsent");
			}
			newEntry.summary = entry.description._cdata;
		}

		// --- wired ---
		if (source == "wired") {
			newEntry.title = entry.title._text;
			let isVideo = false;
			let url = entry["media:thumbnail"]?._attributes?.url;
			if (url) {
				url = url.split(/[?#]/)[0]; // remove ? and #
				const dotPos = url.lastIndexOf(".");
				if (dotPos !== -1) {
					const ext = url.substring(dotPos + 1).toLowerCase();
					isVideo = ["mp4", "3gp", "ogg", "webm", "mov", "m4v"].includes(ext);
				}
				if (isVideo) {
					newEntry.media.url = "";
					newEntry.video = entry["media:thumbnail"]._attributes.url;
				} else {
					newEntry.media.url = entry["media:thumbnail"]._attributes.url;
				}
			} else {
				newEntry.media.url = "images/icons/error/no_image.png";
				newEntry.media.comment = t("imageAbsent");
			}
			if (entry.description) {
				newEntry.summary = entry.description._text;
			}
		}

		// --- yahoo ---
		if (source == "yahoo") {
			newEntry.title = entry.title._text;
			const url = entry["media:content"]?._attributes?.url;
			if (url) {
				newEntry.media.url = url;
			} else {
				newEntry.media.url = "images/icons/error/no_image.png";
				newEntry.media.comment = t("imageAbsent");
			}
		}

		// --- yonhap ---
		if (source == "yonhap") {
			newEntry.title = entry.title._cdata;
			if (entry["media:content"]) {
				let mediaContent = Array.isArray(entry["media:content"])
					? entry["media:content"]
					: [entry["media:content"]];
				newEntry.media.url = mediaContent[0]._attributes.url;
				if (mediaContent.length > 1) {
					newEntry.additMediaUrl = mediaContent
						.slice(1)
						.map(item => item._attributes.url);
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
			newEntry.source.title = entry.source._text;
			newEntry.source.url = entry.source._attributes.url;
		}

		// --- dc:publisher ---
		if (entry["dc:publisher"]) {
			newEntry.source = {};
			newEntry.source.title = entry["dc:publisher"]._text;
		}

		// --- dc:creator ---
		if (entry["dc:creator"]) {
			newEntry.creator = [];
			if (source != "wired") {
				let creators = Array.isArray(entry["dc:creator"])
					? entry["dc:creator"]
					: [entry["dc:creator"]];
				newEntry.creator = creators
					.map(c => c._cdata || c._text)
					.filter(Boolean)
					.map(name => ({ name }));
			} else {
				newEntry.creator = entry["dc:creator"]._text.split(",").map(name => ({ name: name.trim() }));
			}
		}

		// --- rss:author ---
		if (entry.author) {
			newEntry.creator = [];
			let authors = Array.isArray(entry.author)
				? entry.author
				: [entry.author];
			for (let j = 0; j < authors.length; j++) {
				let nameEmail = authors[j]._cdata || authors[j]._text;
				let match = nameEmail.match(/^\s*([^\s()]+@[^\s()]+)\s*\(([^)]+)\)/);
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
		if (entry.category && source != "wired" && source != "merco") {
			let categories = Array.isArray(entry.category)
				? entry.category
				: [entry.category];
			newEntry.category = categories
				.map(c => c._cdata || c._text)
				.filter(Boolean);
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
			newEntry.link = entry.link._text ||  entry.link._cdata;
			newEntry.date_ms = new Date(entry.pubDate._text).getTime();
		}

		if (newEntry.link == "" || newEntry.link == "https://x.com/nasaadmin/status/2025249086908125630?s=46") {
			newEntry.storage.updateProcessed = 1;
			result.totalUpdated++;
		}

		// --- Prevous Updates Load ---
		if (source == "artemis" || source == "cbs" || (source == "nasa" && type != "image") || source == "yonhap" || source == "yahoo") { 
			let update = locStUpdateData[newEntry.link];
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
	let totalEntries = result.entries.length;
	for (let i = totalEntries - 1; i >= 0; i--) {
		for (let j = 1; j <= i; j++) {
			if (result.entries[j - 1].date_ms < result.entries[j].date_ms) {
				let temp = result.entries[j - 1];
				result.entries[j - 1] = result.entries[j];
				result.entries[j] = temp;
			}
		}
	}

	if (source == "wired") {
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
	}


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

	let totalEntries = result.entries.length;

	// failed
	if (pf == 0) {
		let failedCount = document.getElementById("failedCount");
		let failedCountInt = parseInt(failedCount.innerHTML) + 1;
		failedCount.innerHTML = failedCountInt;
		let failedCountTitle = document.getElementById("failedCountTitle");
		failedCountTitle.innerHTML = " (#❎: " + failedCountInt + ")";
		let processedCount = document.getElementById("processedCount");
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
		let table2 = document.getElementById("messagetable");
		table2.replaceChildren();
		adjustFeedScrollDiv();
		return;
	} else {
		// passed
		if (pf == 1) {
			let passedCount = document.getElementById("passedCount");
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

			if (source == "nasa" || source == "artemis") { // do not update NASA and Artemis description
				description = result.entries[i].summary;
			} else {
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
			if (source == "yahoo") {
				let scriptData = null;
				const scripts = getScripts(doc, 'script[type="application/ld+json"]');
				for (const script of scripts) {
					scriptData = safeParseJSON(script);
					if (scriptData?.creator?.name) {
						creators = [
   							{
								name: scriptData.creator.name.trim(),
								email: null,
								url: null,
								description: null
							},
							...(creators ?? []).filter(c => c.name !== scriptData.creator.name)
						];
						break;
					}
				}
			}
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
				let url = new URL(media.url);
				url.search = "";
				media.url = url.toString();
			}

			seeAlso = getMetas(doc, 'meta[property="og:see_also"]');
			videoURL = getMeta(doc, 'meta[property="og:video"]');
			if (videoURL == null) videoURL = getMeta(doc, 'meta[property="og:video:url"]');

			let locStUpdateDataNew = {};
			if (description != null) {
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
					+ " ❎. ";

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
					+ " ✅. ";

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
				+ " ❎. ";

			consoleAxiosError(error, t("record") + " # " + (i + 1) + " | " + t("updateAttempt") + " " + updateAttempt);
			if (updateAttempt < 5) { // 5 attempts
				update(i, source, type, result, lang, controller, updateAttempt + 1, redirectCount);
				return;
			}

			const status = error.response?.status ?? 0;
			const statusText = error.response?.statusText ?? error.message ?? String(error);

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
			result.entries[i].error = t("updateLoadError") + " (" + status + "). <a href='javascript:location.reload();' class='standardb_red');>" + t("reloadPage") + "</a>";
			showEntry(type, source, lang, result, i, false);
			result.entries[i].storage.updateProcessed = 1;
			checkProcessedCount(source, type, result, lang, controller, 0);
		}
	);
}
// ------------- End of Update---------------- //
