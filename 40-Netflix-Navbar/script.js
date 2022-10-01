const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

// adding a event listener thta simply add
// class visible to the nav
openBtn.addEventListener('click', () => {
    nav.forEach((navEl) => navEl.classList.add('visible'));
});

// adding a event listener thta simply remove
// class visible to the nav

closeBtn.addEventListener('click', () => {
    nav.forEach((navEl) => navEl.classList.remove('visible'));
});