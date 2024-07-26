//  all const 
const loader = document.getElementById('loader');
const saport = document.getElementById('saport');
const formSuport = document.getElementById('formSuport');
window.addEventListener('load' , () => {
   // loader.classList.add('hidden');
   document.body.classList.remove('overflow-y-hidden');
    saport.addEventListener('click' , () => {
        window.scrollTo({
            top: formSuport.offsetTop ,
            behavior: "smooth"
        })
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 10000,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
          // Responsive breakpoints
          breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        },
        enabled : 'false',
      });
      
})


