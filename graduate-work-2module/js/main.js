const search = document.querySelector('.search__input');
const variant = document.querySelector('.search__form-variants');

(function () {
   document.addEventListener('click', burgerInit)
   function burgerInit(e) {
   const burgerIcon = e.target.closest('.burger-icon')
   const burgerNavLink = e.target.closest('.nav__link')
   if (!burgerIcon && !burgerNavLink) return
   if (document.documentElement.clientWidth > 900) return
   if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
   } else {
      document.body.classList.remove('body--opened-menu')
   }
}}) ()

const swiper = new Swiper('.swiper', {
   direction: 'horizontal',
   loop: true,
   spaceBetween: 10,
   slidesPerView: 1,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});

variant.addEventListener('click', select);
function select(e) {
   if (e.target.tagName == 'LI') {
      search.value = e.target.textContent;
   }
   else {}
}