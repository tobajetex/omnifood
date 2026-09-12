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

// (1) Get all the links from the parent element using querySelectorAll
const navLinks = document.querySelectorAll(".main-nav-link");

// (2) Loop over it and add an event listener to each
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // stop the default jump

    // (3) Get the href attribute
    const href = link.getAttribute("href");

    // (4) Use scrollIntoView on this attribute to get to the specific location
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    headerEl.classList.remove("nav-open");
  });
});

const yearEl = document.querySelector(".year");

const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;
