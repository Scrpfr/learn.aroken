(function() {
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
   }

   const modal = document.querySelector('.modal');
   const modalButton = document.querySelector('.about__img-button');

   modalButton.addEventListener('click', openmodal);
   modal.addEventListener('click', closemodal);

   function openmodal(e) {
      e.preventDefault()
      modal.classList.toggle('body--opened-modal')
   }

   function closemodal(e) {
      e.preventDefault()
      const target = e.target;

      if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
         modal.classList.remove('body--opened-modal')
      }
   }
}) ()