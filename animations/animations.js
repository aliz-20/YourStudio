const revealElements = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < triggerBottom) {
      el.classList.add("show");
    }
  });
};

const setActiveLink = () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
};

window.addEventListener("scroll", () => {
  revealOnScroll();
  setActiveLink();
});

window.addEventListener("load", () => {
  revealOnScroll();
  setActiveLink();
});