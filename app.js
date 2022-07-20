const navToggleClose = document.querySelector('.nav-toggle-c');
const menu = document.querySelector('.nav-menu');
const navToggleOpen = document.querySelector('.nav-toggle');

// Event listener open the menu
navToggleOpen.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.add('show-menu');
});

// Event listener close the menu
navToggleClose.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('show-menu');
});
