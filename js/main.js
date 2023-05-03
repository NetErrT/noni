'use strict';

const { body, documentElement: root } = document;
const burger = document.querySelector('.burger');
const menuClass = 'menu-active';
const noScrollClass = 'no-scroll';
const dataTo = document.querySelectorAll('[data-to]');
const header = document.querySelector('.header');

function menuToggle() {
  root.classList.toggle(menuClass);
  body.classList.toggle(noScrollClass);
}

burger.addEventListener('click', menuToggle);

dataTo.forEach((to) => {
  to.addEventListener('click', (e) => {
    const href = e.target.getAttribute('href');
    const block = document.querySelector(href);

    if (!block) {
      throw new Error('block to is undefined');
    }

    e.preventDefault();

    if (
      root.classList.contains(menuClass) &&
      body.classList.contains(noScrollClass)
    ) {
      menuToggle();
    }

    window.scrollBy({
      behavior: 'smooth',
      top: block.getBoundingClientRect().top - header.clientHeight,
    });
  });
});
