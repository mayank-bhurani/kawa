// global variable Declaration
let navMenu = document.getElementById('nav-menu-hid');
let menuBtn = document.getElementById('menu-button');

let themeMenu = document.getElementById('theme-changer-hid');
let themeMenuBtn = document.getElementById('theme');

let aboutMenu = document.getElementById('about-section-hid');
let aboutMenuBtn = document.getElementById('about');

let koansMenu = document.getElementById('all-koans-section-hid');
let koansMenuBtn = document.getElementById('all-koans');

let KoanParas = document.querySelector('article');
const rootEl = document.querySelector(':root');

const prevKoanBtn = document.getElementById('previous-koan');
const nextKoanBtn = document.getElementById('next-koan');

let vectPath = `vectors/`;

// navigation menu scripts
function menuToggle() {
  if(menuBtn.getAttribute('src') === `${vectPath}circle.svg`) {
    menuBtn.setAttribute ('src',`${vectPath}cross.svg`);
    navMenu.id = 'nav-menu-vis';
  } else {
    menuBtn.setAttribute ('src',`${vectPath}circle.svg`);
    navMenu.id = 'nav-menu-hid';
    themeMenu.id = 'theme-changer-hid';
    aboutMenu.id = 'about-section-hid';
    koansMenu.id = 'all-koans-section-hid';
  }
}

menuBtn.addEventListener('click' , menuToggle);


// change path for vector images based on theme
function vectPathSet(){
  if(menuBtn.getAttribute('src') === `${vectPath}circle.svg`) {
    menuBtn.setAttribute ('src',`${vectPath}circle.svg`);
  }else{
    menuBtn.setAttribute ('src',`${vectPath}cross.svg`);
  }
  prevKoanBtn.setAttribute ('src',`${vectPath}semi-circle-arc.svg`);
  nextKoanBtn.setAttribute ('src',`${vectPath}semi-circle-arc2.svg`);
}

// theme changer menu scripts
function themeChanger () {
  if (themeMenu.id === 'theme-changer-hid'){
    themeMenu.id = 'theme-changer-vis';
    aboutMenu.id = 'about-section-hid';
    koansMenu.id = 'all-koans-section-hid';
  } else {
    themeMenu.id = 'theme-changer-out';
    setTimeout(function(){
      themeMenu.id = 'theme-changer-hid'}, 1000);
  }
}

themeMenuBtn.addEventListener('click', themeChanger);

// theme color changer scripts
function themeLight(){
  rootEl.style.setProperty('--primary-color', '#e6e6e6');
  rootEl.style.setProperty('--secondary-color', '#1a1a1a');
  rootEl.style.setProperty('--accent-color', '#ffffff');
  rootEl.style.setProperty('--emphasis-color', '#000000');
  vectPath = `vectors/`;
  vectPathSet();
}
function themeMoonMist(){
  rootEl.style.setProperty('--primary-color', '#dbd5c9');
  rootEl.style.setProperty('--secondary-color', '#1a1a1a');
  rootEl.style.setProperty('--accent-color', '#e5e0d7');
  rootEl.style.setProperty('--emphasis-color', '#000000');
  vectPath = `vectors/`;
  vectPathSet();
}
function themeDark(){
  rootEl.style.setProperty('--primary-color', '#1a1a1a');
  rootEl.style.setProperty('--secondary-color', '#e6e6e6');
  rootEl.style.setProperty('--accent-color', '#000000');
  rootEl.style.setProperty('--emphasis-color', '#ffffff');
  vectPath = `vectors/light/`;
  vectPathSet();
}

document.getElementById('black-90').addEventListener('click', themeDark);

document.getElementById('white-10').addEventListener('click', themeLight);

document.getElementById('moon-mist-fade').addEventListener('click', themeMoonMist);

// font size changer
let fontMinus = document.getElementById('font-minus');
let fontPlus = document.getElementById('font-plus');

let fontSize = 1.2;

function fontDecrease () {
  if (fontSize >= 0.6) {
  fontSize -= 0.1;
  KoanParas.style.fontSize = fontSize + 'em';
    mMClass.style.fontSize = fontSize + 'em';
    }
}
function fontIncrease () {
  if (fontSize <= 1.6) {
    fontSize += 0.1;
    KoanParas.style.fontSize = fontSize + 'em';
      mMClass.style.fontSize = fontSize + 'em';
    }
}
fontMinus.addEventListener('click', fontDecrease);
fontPlus.addEventListener('click', fontIncrease);


let fontList = document.getElementById('font-options');
let fontType = fontList.querySelectorAll('li');

let mM = document.getElementById('font-size-changer');
let mMClass = document.querySelector('p');



// font changing scripts
function defaultFont(){
  KoanParas.removeAttribute('class');
  KoanParas.setAttribute('class', 'baskerville');
  mMClass.removeAttribute('class');
  mMClass.setAttribute('class', 'baskerville');
  fontType[1].style.background = 'var(--primary-color)';
}

defaultFont();

function fontChanger (){
  for (i=0; i < fontType.length; i++) {
    let fontFace = fontType[i].className;
    fontType[i].onclick = function() {
      for (i=0; i < fontType.length; i++) {
      fontType[i].style.background = 'var(--accent-color)';
      }
      mMClass.removeAttribute('class');
      KoanParas.removeAttribute('class');
    switch (fontFace) {
      case 'serif':
      KoanParas.setAttribute('class', 'serif');
      mMClass.setAttribute('class', 'serif');
      fontType[0].style.background = 'var(--primary-color)';
      break;
      case 'baskerville':
      KoanParas.setAttribute('class', 'baskerville');
      mMClass.setAttribute('class', 'baskerville');
      fontType[1].style.background = 'var(--primary-color)';
      break;
      case 'sans-serif':
      KoanParas.setAttribute('class', 'sans-serif');
      mMClass.setAttribute('class', 'sans-serif');
      fontType[2].style.background = 'var(--primary-color)';
      break;
      case 'monospace':
      KoanParas.setAttribute('class', 'monospace')
      mMClass.setAttribute('class', 'monospace');
      fontType[3].style.background = 'var(--primary-color)';
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
    koansMenu.id = 'all-koans-section-hid';
  } else {
    aboutMenu.id = 'about-section-out';
    setTimeout(function(){
      aboutMenu.id = 'about-section-hid'}, 1000);
  }
}

aboutMenuBtn.addEventListener('click', aboutMenuFn);

// koans list menu scritps
function allKoansFn () {
  if (koansMenu.id === 'all-koans-section-hid'){
    koansMenu.id = 'all-koans-section-vis';
    aboutMenu.id = 'about-section-hid';
    themeMenu.id = 'theme-changer-hid';
  } else {
    koansMenu.id = 'all-koans-section-out';
    setTimeout(function(){
      koansMenu.id = 'all-koans-section-hid'}, 1000);
  }
}

koansMenuBtn.addEventListener('click', allKoansFn);


/*@summary font changer scripts
* @author
* @param
* @response
* @created_at
* @modify_at 
*/
//variable declaration