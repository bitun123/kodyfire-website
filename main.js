const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay:{
        delay:1400,
        disableOnInteraction:false
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  let tl=gsap.timeline()
tl.from("#page1 h1",{
  y:200,
  opacity:0,
  stager:0.4,
});