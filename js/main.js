const swipeSlide = document.querySelectorAll('swiper-slide')
const popupUI = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");

const showPopup = () => popupUI.classList.add("show-js");
const hidePopup = () => popupUI.classList.remove("show-js");

swipeSlide.forEach((el) => {
    el.addEventListener("click", showPopup);
})
popupUI.addEventListener("click", hidePopup);
popupContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});