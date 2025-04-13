/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
import "../../scss/base/swiper.scss";
//Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
//Полный набор стилей с node_modules
// import 'swiper/css';

//Инициализация слайдеров
function initSliders() {
	//Список слайдеров
	//Проверяем, есть ли слайдер на странице
	if (document.querySelector(".main__slider")) {
		//Указываем класс нужного слайдера
		//Создаем слайдер
		new Swiper(".main__slider", {
			//Указываем класс нужного слайдера
			//Подключаем модули слайдера
			//для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Эффекты
			effect: "fade",
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация

			pagination: {
				el: ".main__pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: ".main__arrow_prev",
				nextEl: ".main__arrow_next",
			},
		});
	}

	if (document.querySelector(".popup__slider_1")) {
		new Swiper(".popup__slider_1", {
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,
			loop: true,
			// Эффекты
			effect: "fade",
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			// Пагинация
			pagination: {
				el: ".main__pagination",
				clickable: true,
			},
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: ".main__arrow_prev",
				nextEl: ".main__arrow_next",
			},
		});
	}
	if (document.querySelector(".popup__slider_2")) {
		new Swiper(".popup__slider_2", {
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,
			loop: true,
			// Эффекты
			effect: "fade",
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			// Пагинация
			pagination: {
				el: ".main__pagination",
				clickable: true,
			},
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: ".main__arrow_prev",
				nextEl: ".main__arrow_next",
			},
		});
	}
}
//Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar");
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: "vertical",
				slidesPerView: "auto",
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	//Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
