const btnMobileEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

btnMobileEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const heroSection = document.querySelector(".section-hero");

// Call the Intersection Observer API
const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      headerEl.classList.add("sticky");
    } else {
      headerEl.classList.remove("sticky");
    }
  },
  {
    // Fire when the hero section is fully out of view
    rootMargin: "-90px 0px 0px 0px",
    threshold: 0,
  },
);

observer.observe(heroSection);
