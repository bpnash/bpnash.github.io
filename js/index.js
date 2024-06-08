// This file is for the site interaction and is not part of the practicals
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.remove('top');
    scrolled = true;
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};
