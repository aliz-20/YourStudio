const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navLinkItems = document.querySelectorAll(".nav-link");

const savedTheme = localStorage.getItem("theme");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    themeIcon.innerHTML = '<img src="https://emojiisland.com/cdn/shop/products/Moon_emoji_icon_png_large.png?v=1571606088" alt="Moon" width="30" height="30">';
    logoImg.src = "assets/logo-light.jpg";
  } else {
    localStorage.setItem("theme", "dark");
    themeIcon.innerHTML = '<img src="https://emojigraph.org/media/apple/sun_2600-fe0f.png" alt="Sun" width="30" height="30">';
    logoImg.src = "assets/logo-dark.jpg";
  }
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});