var swiper = new Swiper(".myswiper1", {
    slidesPerView: 1,
    spaceBetween: 8,
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
                spaceBetween: 5,
            },
           
            1024: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
           
        }
    
});