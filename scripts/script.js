// global variables

let menuBtn = document.getElementById('menu-button');
let navMenu = document.getElementById('nav-menu-hid');
let themeMenu = document.getElementById('theme-changer-hid');
let themeMenuBtn = document.getElementById('theme');
let aboutMenu = document.getElementById('about-section-hid');
let aboutMenuBtn = document.getElementById('about');


// navigation menu scripts
function menuToggle() {
  let mySrc = menuBtn.getAttribute('src');
  if(mySrc === 'vectors/circle.svg') {
    menuBtn.setAttribute ('src','vectors/cross.svg');
    navMenu.id = 'nav-menu-vis';
  } else {
    menuBtn.setAttribute ('src','vectors/circle.svg');
    navMenu.id = 'nav-menu-hid';
    themeMenu.id = 'theme-changer-hid';
    aboutMenu.id = 'about-section-hid';
  }
}

menuBtn.addEventListener('click' , menuToggle);


// theme changer menu scripts
function themeChanger () {
  if (themeMenu.id === 'theme-changer-hid'){
    themeMenu.id = 'theme-changer-vis';
    aboutMenu.id = 'about-section-hid';
  } else {
    themeMenu.id = 'theme-changer-out';
    setTimeout(function(){
      themeMenu.id = 'theme-changer-hid'}, 1000);
  }
}

themeMenuBtn.addEventListener('click', themeChanger);


// theme color changer scripts



// font size changer

let fontMinus = document.getElementById('font-minus');
let fontPlus = document.getElementById('font-plus');

let x = 1;

function fontDecrease () {
  if (x >= 0.5) {
  x -= 0.1;
  for (let m=0; m < allParas.length; m++) {
    allParas[m].style.fontSize = x + 'em';
    }
  }
}

function fontIncrease () {
  if (x <= 1.5) {
    x += 0.1;
    for (let m=0; m < allParas.length; m++) {
      allParas[m].style.fontSize = x + 'em';
    }
  } 
}


fontMinus.addEventListener('click', fontDecrease);
fontPlus.addEventListener('click', fontIncrease);



/*@summary font changer scripts
* @author Mayank
* @param
* @response
* @created_at
* @modify_at 
*/
//variable declaration

let fontList = document.getElementById('font-options');
let fontType = fontList.querySelectorAll('li');
let KoanArticle = document.querySelector('article');
let allParas = document.getElementsByTagName('p');

function defaultFont(){
for (i=0; i < allParas.length; i++){
  allParas[i].removeAttribute('class');
  allParas[i].classList.add('sawarabi');
  fontType[1].style.background = '#e6e6e6';
  }
}

defaultFont();

function fontChanger (){
  for (i=0; i < fontType.length; i++) {
    let fontFace = fontType[i].className;
    fontType[i].onclick = function() {
    switch (fontFace) {
      case 'serif':
      for (i=0; i < allParas.length; i++){
      allParas[i].removeAttribute('class');
      allParas[i].classList.add('serif');
      fontType[i].style.background = '#ffffff';
      fontType[0].style.background = '#e6e6e6';
      }
      break;
      case 'sawarabi':
      for (i=0; i < allParas.length; i++){
      allParas[i].removeAttribute('class');
      allParas[i].classList.add('sawarabi');
      fontType[i].style.background = '#ffffff';
      fontType[1].style.background = '#e6e6e6';
      }
      break;
      case 'sans-serif':
      for (i=0; i < allParas.length; i++){
      allParas[i].removeAttribute('class');
      allParas[i].classList.add('sans-serif');
      fontType[i].style.background = '#ffffff';
      fontType[2].style.background = '#e6e6e6';
      }
      break;
      case 'monospace':
      for (i=0; i < allParas.length; i++){
      allParas[i].removeAttribute('class');
      allParas[i].classList.add('monospace');
      fontType[i].style.background = '#ffffff';
      fontType[3].style.background = '#e6e6e6';
      }
      break;
      }
    }
  }
}

fontChanger();


// about menu scripts


function aboutMenuFn () {
  if (aboutMenu.id === 'about-section-hid'){
    aboutMenu.id = 'about-section-vis';
    themeMenu.id = 'theme-changer-hid';
  } else {
    aboutMenu.id = 'about-section-out';
    setTimeout(function(){
      aboutMenu.id = 'about-section-hid'}, 1000);
  }
}

aboutMenuBtn.addEventListener('click', aboutMenuFn);

