/* --------------------- */
/*      NAVIGATION       */
/* --------------------- */
const navbar = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
	const visibility = navbar.getAttribute('data-visible');

	if (visibility === 'false') {
		navbar.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
	} else {
		navbar.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
	}
});

/* --------------------- */
/*         TABS          */
/* --------------------- */
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const pictures = document.querySelectorAll('picture');
const articles = document.querySelectorAll('article');

let tabFocus = 0;

function changeTabFocus(e) {
	const keydownLeft = 37;
	const keydownRight = 39;

	// if (e.keyCode === keydownLeft) {
	// } else if (e.keyCode === keydownRight) {
	// }

	if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
		tabs[tabFocus].setAttribute('tabindex', -1);
		tabs[tabFocus].setAttribute('aria-selected', 'false');
		// pictures[tabFocus].setAttribute('hidden', 'hidden');
		pictures[tabFocus].setAttribute('data-hidearticle', 'true');
		articles[tabFocus].setAttribute('data-hidearticle', 'true');

		if (e.keyCode === keydownRight) {
			tabFocus++;
			if (tabFocus >= tabs.length) tabFocus = 0;
		} else if (e.keyCode === keydownLeft) {
			tabFocus--;
			if (tabFocus < 0) tabFocus = tabs.length - 1;
		}
	}

	tabs[tabFocus].setAttribute('aria-selected', 'true');
	tabs[tabFocus].setAttribute('tabindex', 0);
	tabs[tabFocus].focus();
	// pictures[tabFocus].removeAttribute('hidden');
	pictures[tabFocus].removeAttribute('data-hidearticle');
	articles[tabFocus].removeAttribute('data-hidearticle');
}

function changeTabPanel(e) {
	const targetTab = e.target;
	// const targetPanel = targetTab.getAttribute('aria-controls');
	const idx = parseInt(targetTab.getAttribute('data-tabindex'));

	tabs.forEach((tab) => {
		const i = parseInt(tab.getAttribute('data-tabindex'));

		if (i === idx) {
			tabFocus = i;
			tabs[i].setAttribute('aria-selected', 'true');
			tabs[i].setAttribute('tabindex', 0);
			tabs[i].focus();
			pictures[i].removeAttribute('data-hidearticle');
			articles[i].removeAttribute('data-hidearticle');
		} else {
			tabs[i].setAttribute('tabindex', -1);
			tabs[i].setAttribute('aria-selected', 'false');
			pictures[i].setAttribute('data-hidearticle', 'true');
			articles[i].setAttribute('data-hidearticle', 'true');
		}
	});
}

tabList.addEventListener('keydown', changeTabFocus);
tabs.forEach((tab) => {
	tab.addEventListener('click', changeTabPanel);
});
