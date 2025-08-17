const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Close navbar when scrolling
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Close navbar when a navigation link is clicked
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.onclick = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
});

const typed = new Typed(".multiple-text", {
  strings: ["Software Engineer", "Frontend Developer", "Mobile Engineer"],
  typeSpeed: 50,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});
