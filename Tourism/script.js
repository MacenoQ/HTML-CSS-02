const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('click-btn');
  menu.classList.toggle('click-menu');
});
