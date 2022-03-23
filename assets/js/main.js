const headerFixed = document.querySelector('.header__desktop');
const slideItem = document.querySelectorAll('.slide-item');
const burgerMenuElem = document.querySelector('.burger-menu');
const navigationMobileList = document.querySelector('.navigation__mobile');
const navigationBackground = document.querySelector('.navigation-bg');
const sectionsBuildingBnts = document.querySelectorAll('.sections-building__bnt');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  scrollY > 100 ? headerFixed.classList.add('header__desktop-active') : headerFixed.classList.remove('header__desktop-active');
});

const mySwiper = new Swiper('.main-slider.swiper-container', {
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

const removeActiveBtns = () => sectionsBuildingBnts.forEach(btn => btn.classList.remove('building__btn--active'));
const sectionsContainerControl1 = document.querySelector('#forBuilding1');
const sectionsContainerControl2 = document.querySelector('#forBuilding2');
const swiperContainerAll = document.querySelectorAll('.swiper__container');
const removeSlidersWrapp = () => swiperContainerAll.forEach(item => item.classList.add('hidden-sections-slides'));

sectionsBuildingBnts.forEach(btn => {
  btn.addEventListener('click', () => {
    removeActiveBtns();
    btn.classList.add('building__btn--active');
    if (btn.id === 'building1') {
      sectionsContainerControl1.classList.remove('hidden-building-control');
      sectionsContainerControl2.classList.add('hidden-building-control');
      removeSlidersWrapp();
      hiddenAllContainerSlides();
      building1Section1.classList.remove('hidden-sections-slides');
      B1Section1Control.classList.remove('hidden-sections-control');
      initSwiper();
    } 
    if (btn.id === 'building2') {
      sectionsContainerControl2.classList.remove('hidden-building-control');
      sectionsContainerControl1.classList.add('hidden-building-control');
      removeSlidersWrapp();
      hiddenAllContainerSlides();
      building2Section1.classList.remove('hidden-sections-slides');
      B2Section1Control.classList.remove('hidden-sections-control');
      initSwiper();
    } 
  });
});

const initSwiper = () => {
  const b1Section1Swiper = new Swiper('.building1_section1.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter1',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next1',
      prevEl: '.floors-btn__prev1',
    },
  });
  
  const b1Section2Swiper = new Swiper('.building1_section2.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter2',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next2',
      prevEl: '.floors-btn__prev2',
    },
  });

  const b1Section3Swiper = new Swiper('.building1_section3.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter3',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next3',
      prevEl: '.floors-btn__prev3',
    },
  });

  const b1Section4Swiper = new Swiper('.building1_section4.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter4',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next4',
      prevEl: '.floors-btn__prev4',
    },
  });

  const b1Section5Swiper = new Swiper('.building1_section5.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter5',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next5',
      prevEl: '.floors-btn__prev5',
    },
  });

  const b1Section6Swiper = new Swiper('.building1_section6.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter6',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next6',
      prevEl: '.floors-btn__prev6',
    },
  });

  const b2Section1Swiper = new Swiper('.building2_section1.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter21',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next21',
      prevEl: '.floors-btn__prev21',
    },
  });

  const b2Section2Swiper = new Swiper('.building2_section2.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter22',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next22',
      prevEl: '.floors-btn__prev22',
    },
  });

  const b2Section3Swiper = new Swiper('.building2_section3.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter23',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next23',
      prevEl: '.floors-btn__prev23',
    },
  });

  const b2Section4Swiper = new Swiper('.building2_section4.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter24',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next24',
      prevEl: '.floors-btn__prev24',
    },
  });

  const b2Section5Swiper = new Swiper('.building2_section5.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter25',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next25',
      prevEl: '.floors-btn__prev25',
    },
  });

  const b2Section6Swiper = new Swiper('.building2_section6.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter26',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next26',
      prevEl: '.floors-btn__prev26',
    },
  });

  const b2Section7Swiper = new Swiper('.building2_section7.swiper-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.counter27',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.floors-btn__next27',
      prevEl: '.floors-btn__prev27',
    },
  });
}

initSwiper();


//all sections
//building 1
const building1Section1 = document.querySelector('.building1_section1');
const building1Section2 = document.querySelector('.building1_section2');
const building1Section3 = document.querySelector('.building1_section3');
const building1Section4 = document.querySelector('.building1_section4');
const building1Section5 = document.querySelector('.building1_section5');
const building1Section6 = document.querySelector('.building1_section6');
//building 2 
const building2Section1 = document.querySelector('.building2_section1');
const building2Section2 = document.querySelector('.building2_section2');
const building2Section3 = document.querySelector('.building2_section3');
const building2Section4 = document.querySelector('.building2_section4');
const building2Section5 = document.querySelector('.building2_section5');
const building2Section6 = document.querySelector('.building2_section6');
const building2Section7 = document.querySelector('.building2_section7');

//all controls container
// building 1
const B1Section1Control = document.querySelector('#B1Section1Control');
const B1Section2Control = document.querySelector('#B1Section2Control');
const B1Section3Control = document.querySelector('#B1Section3Control');
const B1Section4Control = document.querySelector('#B1Section4Control');
const B1Section5Control = document.querySelector('#B1Section5Control');
const B1Section6Control = document.querySelector('#B1Section6Control');
//building 2
const B2Section1Control = document.querySelector('#B2Section1Control');
const B2Section2Control = document.querySelector('#B2Section2Control');
const B2Section3Control = document.querySelector('#B2Section3Control');
const B2Section4Control = document.querySelector('#B2Section4Control');
const B2Section5Control = document.querySelector('#B2Section5Control');
const B2Section6Control = document.querySelector('#B2Section6Control');
const B2Section7Control = document.querySelector('#B2Section7Control');

const hiddenAllContainerSlides = () => {
  //sections
  //building 1
  building1Section1.classList.add('hidden-sections-slides');
  building1Section2.classList.add('hidden-sections-slides');
  building1Section3.classList.add('hidden-sections-slides');
  building1Section4.classList.add('hidden-sections-slides');
  building1Section5.classList.add('hidden-sections-slides');
  building1Section6.classList.add('hidden-sections-slides');
  //building 2
  building2Section1.classList.add('hidden-sections-slides');
  building2Section2.classList.add('hidden-sections-slides');
  building2Section3.classList.add('hidden-sections-slides');
  building2Section4.classList.add('hidden-sections-slides');
  building2Section5.classList.add('hidden-sections-slides');
  building2Section6.classList.add('hidden-sections-slides');
  building2Section7.classList.add('hidden-sections-slides');
  //controls
  //building 1
  B1Section1Control.classList.add('hidden-sections-control');
  B1Section2Control.classList.add('hidden-sections-control');
  B1Section3Control.classList.add('hidden-sections-control');
  B1Section4Control.classList.add('hidden-sections-control');
  B1Section5Control.classList.add('hidden-sections-control');
  B1Section6Control.classList.add('hidden-sections-control');
  //building 2
  B2Section1Control.classList.add('hidden-sections-control');
  B2Section2Control.classList.add('hidden-sections-control');
  B2Section3Control.classList.add('hidden-sections-control');
  B2Section4Control.classList.add('hidden-sections-control');
  B2Section5Control.classList.add('hidden-sections-control');
  B2Section6Control.classList.add('hidden-sections-control');
  B2Section7Control.classList.add('hidden-sections-control');
}

const sectionsLabels = document.querySelectorAll('.sections-ctm-label');
sectionsLabels.forEach(section => {
  section.addEventListener('click', () => {
    hiddenAllContainerSlides();
    let sectionNumber = section.innerHTML;
    switch(sectionNumber) {
      case '1':
        building1Section1.classList.remove('hidden-sections-slides');
        B1Section1Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
      case '2':
        building1Section2.classList.remove('hidden-sections-slides');
        B1Section2Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
      case '3':
        building1Section3.classList.remove('hidden-sections-slides');
        B1Section3Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
      case '4':
        building1Section4.classList.remove('hidden-sections-slides');
        B1Section4Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
      case '5':
        building1Section5.classList.remove('hidden-sections-slides');
        B1Section5Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
      case '6':
        building1Section6.classList.remove('hidden-sections-slides');
        B1Section6Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
    }
  });
});

const sectionsLabels2 = document.querySelectorAll('.sections-ctm-label2');
sectionsLabels2.forEach(section => {
  section.addEventListener('click', () => {
    hiddenAllContainerSlides();
    let sectionNumber = section.innerHTML;
    switch(sectionNumber) {
      case '1':
        building2Section1.classList.remove('hidden-sections-slides');
        B2Section1Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
      case '2':
        building2Section2.classList.remove('hidden-sections-slides');
        B2Section2Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
      case '3':
        building2Section3.classList.remove('hidden-sections-slides');
        B2Section3Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
      case '4':
        building2Section4.classList.remove('hidden-sections-slides');
        B2Section4Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
      case '5':
        building2Section5.classList.remove('hidden-sections-slides');
        B2Section5Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
      case '6':
        building2Section6.classList.remove('hidden-sections-slides');
        B2Section6Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
      case '7':
        building2Section7.classList.remove('hidden-sections-slides');
        B2Section7Control.classList.remove('hidden-sections-control');
        initSwiper();
        break;
    }
  });
});

const advantagesSlider = new Swiper('.advantages-slider.swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.advantages-btn__next',
    prevEl: '.advantages-btn__prev',
  },
});

const priceSlider = new Swiper('.price-slider.swiper-container', {
  slidesPerView: 4,

  navigation: {
    nextEl: '.price-btn__next',
    prevEl: '.price-btn__prev',
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  }
});

const gallerySlider = new Swiper('.gallery-slider.swiper-container', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 32,
  loop: true,

  navigation: {
    nextEl: '.gallery-btn__next',
    prevEl: '.gallery-btn__prev',
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
    820: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  }
});

const anchorsLink = document.querySelectorAll('a.nav-list__link');
const scrollToTop = document.querySelectorAll('a.header__logo');
const scrollToForm = document.querySelectorAll('.scroll-to-form');

const removeBurgerOverflow = () => {
  burgerMenuElem.classList.toggle('burger-menu__active');
  navigationMobileList.classList.toggle('navigation__active');
  navigationBackground.classList.toggle('navigation-bg__active');
};

scrollToForm.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const scrollTarget = document.querySelector('#faqForm');
    const topPadding = 70;
    const topOffset = topPadding;
    
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    })
  });
});

const smoothScroll = (anchors) => {
  for (let anchor of anchors) {
    const blockID = anchor.getAttribute('href');
    anchor.addEventListener('click', (e) => {
      e.preventDefault();

      if(innerWidth <= 820) {
        setTimeout(() => {
          removeBurgerOverflow();
        }, 500);
      }

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      if (anchor.classList.value === 'nav-list__link' || anchor.classList.value !== 'nav-list__link') {
        for (let anchor of anchors) {
          anchor.classList.remove('active-nav-link');
        }
        anchor.classList.add('active-nav-link');
      }
    });
  };
};

smoothScroll(scrollToTop);
smoothScroll(anchorsLink);