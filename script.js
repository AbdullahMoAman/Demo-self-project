// const modal = document.querySelector(".modal");
// const btnOpenModal = document.querySelector(".btn");
// const btnCloseModal = document.querySelector(".close--btn");
// const overlay = document.querySelector(".overlay");
// const nav = document.querySelector(".nav");

// const openModal = (e) => {
//   e.preventDefault();
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = () => {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// btnOpenModal.addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// // Page Navigation

// document.querySelector(".nav-links").addEventListener("click", function (e) {
//   e.preventDefault();

//   // Matching Strategy
//   if (e.target.classList.contains("nav-link")) {
//     const id = e.target.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });

// // Menu fade animation
// const handleHover = function (e) {
//   if (e.target.classList.contains("nav-link")) {
//     const link = e.target;
//     const siblings = link.closest(".nav").querySelectorAll(".nav-link");
//     const logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = this;
//     });
//     logo.style.opacity = this;
//   }
// };

// // Pssing "argument" into handler
// nav.addEventListener("mouseover", handleHover.bind(0.5));
// nav.addEventListener("mouseout", handleHover.bind(1));

// // Sticky navigation: Intersection Observer API
// const header = document.querySelector(".nav");
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersection) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(header);

// // Reveal sections
// const allSections = document.querySelectorAll("section");

// const revealSection = function (entries, observer) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) return;

//     entry.target.classList.remove("section--hidden");
//     observer.unobserve(entry.target);
//   });
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });
