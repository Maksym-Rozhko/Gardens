const headerFixed = document.querySelector('.header__desktop');
const slideItem = document.querySelectorAll('.slide-item');
const burgerMenuElem = document.querySelector('.burger-menu');
const navigationMobileList = document.querySelector('.navigation__mobile');
const navigationBackground = document.querySelector('.navigation-bg');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  scrollY > 100 ? headerFixed.classList.add('header__desktop-active') : headerFixed.classList.remove('header__desktop-active');
});

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  allowTouchMove: false,
  navigation: {
    nextEl: '.main-btn__next',
    prevEl: '.main-btn__prev',
  },
});

$('.swiper-wrap').on('click', '.slide-item', function() {
  const index = $(this).data('index');
  mySwiper.slideTo(index);
});

mySwiper.on('slideChange', () => {
  let currIndexSlide = mySwiper.realIndex;

  switch(currIndexSlide) {
      case 0:
          slideItem[0].classList.add('slide-item_active');
          slideItem[1].classList.remove('slide-item_active');
          slideItem[2].classList.remove('slide-item_active');
      break;
      case 1:
          slideItem[1].classList.add('slide-item_active');
          slideItem[0].classList.remove('slide-item_active');
          slideItem[2].classList.remove('slide-item_active');
      break;
      case 2:
          slideItem[2].classList.add('slide-item_active');
          slideItem[0].classList.remove('slide-item_active');
          slideItem[1].classList.remove('slide-item_active');
      break;
      default:
          console.log('slideChange');
  }
});

burgerMenuElem.addEventListener('click', () => {
  burgerMenuElem.classList.toggle('burger-menu__active');
  navigationMobileList.classList.toggle('navigation__active');
  navigationBackground.classList.toggle('navigation-bg__active');
});














// const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 4,
//     spaceBetween: 10,
//     direction: 'horizontal',

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },

//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//       },
//       812: {
//         slidesPerView: 2,
//       },
//       1200: {
//         slidesPerView: 3,
//       },
//       1570: {
//         slidesPerView: 4,
//       }
//     }
// });

// const swiperCertificates = new Swiper('.certificates__slider', {
//   slidesPerView: 3,
//   spaceBetween: 20,
//   direction: 'horizontal',
//   centeredSlides: true,
//   loop: true,
//   autoplay: true,

//   pagination: {
//       el: '.swiper-pagin-certif',
//       clickable: true,
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     990: {
//       slidesPerView: 3,
//     }
//   }
// });

// const btnsElem = document.querySelectorAll('.scroll-to-form');
// const scrollToOrder = document.querySelector('.header-top'); 
// const formInputNameElem = document.querySelector('.form__input'); 

// function smoothScroll() {
//   const anchors = btnsElem;
//   for(let anchor of anchors) {
//     anchor.addEventListener('click', (e) => {
//       e.preventDefault();
     
//       scrollToOrder.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });

//       setTimeout(() => {
//         formInputNameElem.focus();
//       }, 1000);
//     });
//   }
// }
// smoothScroll();

