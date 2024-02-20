// mobile nav

const mobileNav = document.querySelector('.mnav');
const CloseBtn = document.querySelector('.mnav__close-btn');
const ClBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arleftClass = 'ri-arrow-left-s-line';
const arrightClass = 'ri-arrow-right-s-line';

CloseBtn.addEventListener('click', ()=> {
    mobileNav.classList.toggle(navOpenedClass);
    mobileNav.classList.toggle(navClosedClass);

    ClBtnIcon.classList.toggle(arleftClass);
    ClBtnIcon.classList.toggle(arrightClass);
})

// Slider
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickabel : true
    },
  });

  // faq
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach((item) => {
  const faqBtn = item.querySelector('.faq__btn');
  item.addEventListener('click', ()=> {
    const IsOpen = item.classList.toggle('open');
    const IconClass = IsOpen ? 'ri-subtract-fill' : 'ri-add-fill';
    const IconElement = faqBtn.querySelector('i');
    IconElement.classList = `${IconClass} text-2xl`;
  })
})