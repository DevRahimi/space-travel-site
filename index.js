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
