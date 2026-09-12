const btnMobileEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

btnMobileEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
