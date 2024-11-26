var swiper = new Swiper(".myswiper1", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    // autoplay: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
           
            1024: {
                slidesPerView: 2,
                spaceBetween: 0,
            }
           
        },
        effect: 'slide',
    
});



// Ensure the aspect ratio is applied dynamically
document.querySelectorAll('.swiper-slide-active .aspect-ratio-wrapper').forEach(wrapper => {
    const width = wrapper.offsetWidth; // Get current width of the active slide
    wrapper.style.height = `${width * (9 / 16)}px`; // Set height to maintain 16:9
  });
  