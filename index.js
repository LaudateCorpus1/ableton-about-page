/*MOBILE*/
const dropdownMenu = document.querySelector('.dropdown-menu');
const menu = document.querySelector('.menu');
const menuCaret = document.querySelector('.menu-caret');

menu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show-menu');
    menuCaret.classList.toggle('show-menu');
})
/*DESKTOP*/
const mainNavSectionOne = document.querySelector('.main-nav__section.one');
const mainNavSectionTwo = document.querySelector('.main-nav__section.two');
const more = document.querySelector('.more');
const faMinus = document.querySelector('.fa-minus');
const faPlus = document.querySelector('.fa-plus');

more.addEventListener('click', () => {
    mainNavSectionOne.classList.toggle('show-menu')
    mainNavSectionTwo.classList.toggle('show-menu')
    faMinus.classList.toggle('show-icon');
    faPlus.classList.toggle('show-icon');
})