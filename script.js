const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector(".btn-open");
const btnCloseModal = document.querySelector(".close--btn");
const overlay = document.querySelector(".overlay");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector(".section--1");
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");

//
// Open, close the log in modal

const openModal = (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = (e) => {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Scroll btn with smooth behavior
btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

// Page Navigation
// document.querySelectorAll(".nav-link").forEach((el) => {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Easy way --
// 1- Add event listener to common parent element
// 2- Determine what element originated the event

document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Menu fade animation
const handlerHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav-link");
    const logo = link.closest(".nav").querySelector(".logo");
    const button = link.closest(".nav").querySelector("button");
    console.log(logo);

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
    button.style.opacity = this;
  }
};

// Passing 'argument' into handler
nav.addEventListener("mouseover", handlerHover.bind(0.5));
nav.addEventListener("mouseout", handlerHover.bind(1));

// // Sticky navigation: Intersection Observer API
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
  });
};

const heroOvserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

heroOvserver.observe(hero);

// Reveal sections
const allSections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

// Lazy loading images
// const imgTargets = document.querySelectorAll("img[data-src]");

// const loadImg = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   // Replace src with data-src
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener("load", function () {
//     entry.target.classList.remove("lazy-img");
//   });
//   observer.unobserve(entry.target);
// };

// const imgOvserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: "200px",
// });

// imgTargets.forEach((img) => imgOvserver.observe(img));

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".btn--left");
  const btnRight = document.querySelector(".btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
};

slider();
