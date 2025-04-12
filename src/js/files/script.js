// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

window.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('click', documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		console.log(targetElement);
		if (targetElement.closest('.search__toggle')) {
			const searchWrapper = targetElement.closest('.search__wrapper');
			searchWrapper.classList.toggle('_active-search');
		}
	}

	// плавное открытие саб меню в мобилке
	function toggleSubmenu(submenu, item) {
		if (!submenu.style.maxHeight || submenu.style.maxHeight === '0px') {
			submenu.style.maxHeight = submenu.scrollHeight + 'px';
			item.classList.add('_active');
		} else {
			submenu.style.maxHeight = '0px';
			item.classList.remove('_active');
		}
	}
	//Показываем/скрываем саб меню
	
	document.querySelectorAll('.menu__item').forEach((item) => {
		const link = item.querySelector('.menu__link');
		const submenu = item.querySelector('.menu__sub-list');

		if (submenu) {
			submenu.style.overflow = 'hidden'; // Исключаем появление скролла
			submenu.style.maxHeight = '0px'; // Начальное состояние

			link.addEventListener('click', (e) => {
				if (window.innerWidth <= 768.02) {
					e.preventDefault();
					toggleSubmenu(submenu, item);
				}
			});
		}
	});

	//Валидация формы
	document
		.getElementById('contact-form')
		.addEventListener('submit', function (e) {
			e.preventDefault();

			const name = document.getElementById('name').value.trim();
			const email = document.getElementById('email').value.trim();
			const message = document.getElementById('message').value.trim();

			if (!name || name.length < 2) {
				alert('Пожалуйста, введите корректное имя.');
				return;
			}

			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailPattern.test(email)) {
				alert('Пожалуйста, введите корректный email.');
				return;
			}

			if (!message || message.length < 5) {
				alert('Сообщение должно содержать минимум 10 символов.');
				return;
			}

			// Если всё валидно — можно отправлять
			const form = document.getElementById('contact-form');
			const modal = document.getElementById('success-modal');
			const closeBtn = document.getElementById('close-alert');

			form.addEventListener('submit', (e) => {
				e.preventDefault();

				// Имитируем отправку
				setTimeout(() => {
					modal.style.display = 'flex';
					form.reset();
				}, 300);
			});

			closeBtn.addEventListener('click', () => {
				modal.style.display = 'none';
			});
		});
});
