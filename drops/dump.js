

 // locate your element and add the Click Event Listener

/* document.getElementById("font-options").addEventListener("click",function(e) {
  // e.target is our targetted element.
              // try doing console.log(e.target.nodeName), it will result LI
  if(e.target && e.target.nodeName === "LI") {
      console.log(e.target.className + " was clicked");
  }
}); */


/* fontType[0].addEventListener('click', function(){
  for(i=0; i<koanParas.length; i++) {
    koanParas[i].classList.add('serif');
  }
});

fontType[1].addEventListener('click', function(){
  for(i=0; i<koanParas.length; i++) {
    koanParas[i].classList.add('sawarabi');
  }
});

fontType[2].addEventListener('click', function(){
  for(i=0; i<koanParas.length; i++) {
    koanParas[i].classList.add('san-serif');
  }
});

fontType[2].addEventListener('click', function(){
  for(i=0; i<koanParas.length; i++) {
    koanParas[i].classList.add('monospace');
  }
}); */

/* const serif = document.querySelector('serif');
const sawarabi = document.querySelector('sawarabi');
const sansSerif = document.querySelector('sans-serif');
const monospace = document.querySelector('monospace');


if (fontType[i])

let activeFont = 'serif';

let fontFace = fontType[i].className;

function paraFontUpdate (fontFace){
  for(i=0; i<koanParas.length; i++) {
    koanParas[i].classList.add(fontFace);
  }
}

function fontFaceEvent (){
  for(i=0; i>fontType.length; i++);
  fontFace.addEventListener('click' , paraFontUpdate);
  fontFaceEvent;
}

fontFaceEvent(); */





/* function fontChanger() {
  for (i = 0; i < fontType.length; i++) {
    let fontFace = fontType[i].className;
    console.log(fontFace);
    fontType[0].onclick = function(){
    if (fontFace === 'serif')
    for (i = 0; i < koanParas.length; i++) {
      koanParas[i].classList.add('serif');
  }
}
}
} */
// fontType.addEventListener('click', fontChanger);








/* switch (fontFace) {
  case 'serif':
    for (i = 0; i < koanParas.length; i++) {
      koanParas[i].classList.add('serif');
      break;
  }
} */














/* let i = 0;
let fontFace = fontType[i].className;
let activeFont = fontFace; */

/* fontType[0].onclick = function(){
  console.log(koanPara[0].className);
} */



/* while (i < fontType.length){
  if (activeFont === fontType[i]) {
  koanParas[i].classList.add(activeFont);
  } else {
    continue;
  }
  i++;
} */

/* function fontChanger(){
  for (i=0; i<fontType.length; i++) {
    let fontFace = fontType[i].className;
    fontType[i].onclick = function () {
      console.log(koanParas);
    }
  }
  return fontChanger;
} */

/* function fontChanger (){
  for (i=0; i < fontType.length; i++) {
    let fontFace = fontType[i].className;
    let activeFont = fontFace;
    for (i=0; i < koanParas.length; i++){
      fontType[i].onclick = function(){
    console.log(fontFace);
    if (fontFace === 'monospace'){
      koanParas[i].classList.add('monspace')
    } 
  }  
}
  }
} */

/* function fontChanger (){
    fontType.onclick = function() {
    switch (fontFace) {
      case 'serif':
      for (i=0; i < koanParas.length; i++){
      koanParas[i].classList.add('serif');
      }
      break;
      case 'sawarabi':
      for (i=0; i < koanParas.length; i++){
      koanParas[i].classList.add('sawarabi');
      }
      break;
      case 'sans-serif':
      for (i=0; i < koanParas.length; i++){
      koanParas[i].classList.add('sans-serif');
      }
      break;
      case 'monospace':
      for (i=0; i < koanParas.length; i++){
      koanParas[i].classList.add('monospace');
      }
      break;
      }
  }
}

fontChanger();
 */

/* function paraLoop () {for (i=0; i < koanParas.length; i++){
  koanParas[i].classList.add('serif');
  }
}
 */




/* function fontChanger (){
  for (i=0; i < fontType.length; i++) {
    let fontFace = fontType[i].className;
    console.log(fontFace);
    fontType[i].onclick = function() {
    if (fontFace === 'monospace'){
      for (i=0; i < koanParas.length; i++){
        koanParas[i].classList.add('monospace');
      }
    }
  }  
}
}
fontChanger(); */

/* function fontChanger (){
  for (i=0; i < fontType.length; i++) {
    let fontFace = fontType[i].className;
    console.log(fontFace);
    if (fontFace === 'monospace'){
      for (i=0; i < koanParas.length; i++){
        koanParas[i].classList.add('monospace');
      }
    } else {
      continue;
    }
  }  
} */

// fontType[3].addEventListener('click', fontChanger);



/* fontList.addEventListener('click', function(e){
  if (e.target && e.target.nodeName === "LI") {
    console.log(e.target.className + 5);
  }
}); */





/* function fontDecrease () {
  for (i = 1; i > 0.5; i -= 0.1){
    for (let m=0; m < allParas.length; m++) {
      allParas[m].style.fontSize = i + 'em';
    }
  }
}

function fontIncrease () {
  for (i = 0; i < 2; i += 0.5){
    for (let m=0; m < allParas.length; m++) {
      allParas[m].style.fontSize = i + 'em';
    }
  }
  
}

fontMinus.addEventListener('click', fontDecrease);
fontPlus.addEventListener('click', fontIncrease); */

/* fontMinus.onclick = function () {
  for (i = 1; i > 0.5; i -= 0.1){
    for (let m=0; m < allParas.length; m++) {
      allParas[m].style.fontSize = i + 'em';
    }
  }
}

fontPlus.onclick =  function () {
  for (i = 0; i < 2; i += 0.5){
    for (let m=0; m < allParas.length; m++) {
      allParas[m].style.fontSize = i + 'em';
    }
  }
  
} */

/* for (let i=1; i >= 0.5; i -= 0.1) {
  i = i.toFixed(1);
for (let m=0; m < allParas.length; m++) {
  allParas[m].style.fontSize = i + 'em';
  console.log(i); */
