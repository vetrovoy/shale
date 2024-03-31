import "../css/app.css";


const burger = document.querySelector("#hamburger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  // document.querySelector(".menu").classList.toggle("menu--active");
})

const workSlider = new Swiper(".work-slider .swiper", {
  rewind: true,
  spaceBetween: 0,

  slidesPerView: 1,
  grabCursor: true,

  breakpoints: {
    990: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: "auto",
      spaceBetween: 37,
    },
  },
});
