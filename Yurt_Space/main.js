import { useGSAP } from "@gsap/react";
import gsap from "gsap";
console.log("JavaScript is successfully connected!");
let lastScrollY = window.scrollY;
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      // 1. At the very top: transparent background and fully visible
      nav.classList.remove('nav-hidden', 'nav-scrolled');
    } else if (currentScrollY > lastScrollY) {
      // 2. Scrolling down: hide the navbar off-screen
      nav.classList.add('nav-hidden');
    } else {
      // 3. Scrolling up: reveal the navbar with solid black background
      nav.classList.remove('nav-hidden');
      nav.classList.add('nav-scrolled');
    }

    lastScrollY = currentScrollY;
  });