const enterHamburger = document.querySelector('.main-nav__hamburger');
const sideNavToggle = document.querySelector('.side-nav__list');
const navbar = document.querySelector('.navbar');

enterHamburger.addEventListener('mouseenter', () => {
  sideNavToggle.style.marginLeft = '0px';
});

navbar.addEventListener('mouseleave', () => {
  sideNavToggle.style.marginLeft = '-260px';
});

let colorHome = '#cdcdcd';
let colorGreen = '#008000';
let colorBlue = '#8a2be2';
let colorOrange = '#f0a442';
let colorRed = '#ff0000';

const colorToggler = function (
  selector,
  backgroundColor,
) {
  let colorItem = document.querySelector(selector);
  colorItem.addEventListener('click', () => {
    document.body.style.backgroundColor = backgroundColor;
    sideNavToggle.style.marginLeft = '-250px';
  });
};

colorToggler('.home', colorHome, 'grey', '#cdcdcd');
colorToggler('.green', colorGreen, 'green', '#008000');
colorToggler('.blue', colorBlue, 'blue', '8a2be2');
colorToggler('.orange', colorOrange, 'orange', '#ef0a442');
colorToggler('.red', colorRed, 'red', '#ff0000');
