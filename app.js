const navToggleClose = document.querySelector('.nav-toggle-c');
const menu = document.querySelector('.nav-menu');
const navToggleOpen = document.querySelector('.nav-toggle');
const worksCard = document.querySelector('.works');
// const modalCard = document.querySelector('.modal');

// modal selectors
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlays');

// work data object
const works = [
  {
    id: 'modal1',
    title: 'Tonic',
    description:
      'This is a portfolio website for my personal portfolioThis is a portfolio website for my personal portfolio.',
    image: 'img/work-1.png',
    chronical: ['CANOPY', 'Back End Dev', '2015'],
    stack: ['html', 'css', 'javascript'],
    liveurl: 'https://github.com/barakadanny',
    githuburl: 'https://github.com/barakadanny',
  },
  {
    id: 'modal2',
    title: 'Multi-Post stories',
    description:
      'This is a portfolio website for my personal portfolio This is a portfolio website for my personal portfolio.',
    image: 'img/work-2.png',
    chronical: ['CANOPY', 'Back End Dev', '2015'],
    stack: ['html', 'css', 'javascript'],
    liveurl: 'https://github.com/barakadanny',
    githuburl: 'https://github.com/barakadanny',
  },
  {
    id: 'modal3',
    title: 'Tonic',
    description:
      'This is a portfolio website for my personal portfolio This is a portfolio website for my personal portfolio.',
    image: 'img/work-3.png',
    chronical: ['CANOPY', 'Back End Dev', '2015'],
    stack: ['html', 'css', 'javascript'],
    liveurl: 'https://github.com/barakadanny',
    githuburl: 'https://github.com/barakadanny',
  },
  {
    id: 'modal4',
    title: 'Multi-Post stories',
    description:
      'This is a portfolio website for my personal portfolio This is a portfolio website for my personal portfolio.',
    image: 'img/work-4.png',
    chronical: ['CANOPY', 'Back End Dev', '2015'],
    stack: ['html', 'css', 'javascript'],
    liveurl: 'https://github.com/barakadanny',
    githuburl: 'https://github.com/barakadanny',
  },
];

// generate dynamic work Cards
for (let i = 0; i < works.length; i += 1) {
  const work = works[i];

  const workElement = document.createElement('div');
  workElement.classList.add('work');
  workElement.innerHTML = `
    <div class="single-work">
      
      <div class="work-img">
        <img src="${work.image}" alt="${work.title}">
        </div>
        <div class="work-content">
          <h2 class="work-title">${work.title}</h2>
          <ul class="work-chronical">
            <li class="work-chronical-title">${work.chronical[0]}</li>
            <li class="work-chronical_c">${work.chronical[1]}</li>
            <li class="work-chronical_c">${work.chronical[2]}</li>
          </ul>
          <p class="work-description">${work.description}</p>
          <ul class="work-stacks">
            <li class="single-stack">${work.stack[0]}</li>
            <li class="single-stack">${work.stack[1]}</li>
            <li class="single-stack">${work.stack[2]}</li>
          </ul>
          <button data-modal-target="#modal" data-id="${work.id}" class="primary-btn">See Projects</button>
        </div>
      </div>
    </div>
  `;
  worksCard.appendChild(workElement);
  // const modal = document.querySelector(`#${work.id}`);
  // workElement.addEventListener('click', () => {
  //   openModal(modal);
  // });
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');

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

// modal functions open and closed
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('actives');
  overlay.classList.remove('actives');
}

// generate dynamic modal cards
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('actives');
  overlay.classList.add('actives');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector(e.target.dataset.modalTarget);
    openModal(modal);
  });
});

openModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.actives');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});
