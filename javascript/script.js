const menuButton = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.nav-links');

if (menuButton && menu) {
	const closeMenu = () => {
		menu.classList.remove('is-open');
		menuButton.setAttribute('aria-expanded', 'false');
		menuButton.setAttribute('aria-label', 'Abrir menu');
	};

	menuButton.addEventListener('click', () => {
		const isOpen = menu.classList.toggle('is-open');
		menuButton.setAttribute('aria-expanded', String(isOpen));
		menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
	});

	menu.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', closeMenu);
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			closeMenu();
		}
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > 968) {
			closeMenu();
		}
	});
}
