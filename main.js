var images = ['./img/opening.gif','./img/Azul.jpg','./img/Rojo.jpg','./img/verde.jpg']
var imagePosition = 0
var screen = document.querySelector(".screen img");
var sonido =new Audio();
sonido.src="./music/gb-start.mp3"

function switchOnOff() {
    imagePosition = 0
  screen.classList.toggle('hidden')
  screen.src= images[imagePosition]
  sonido.play();
};


function pressAButton() {

  if(imagePosition == 0){
    
    imagePosition++
    screen.src=images[imagePosition]
    imagePosition++
  }
  else if(imagePosition == 2){
    screen.src=images[imagePosition]
    imagePosition++
  }
  else {    screen.src=images[imagePosition]
    imagePosition = 0}

};

function reset() {
  imagePosition = 0

  screen.src= images[imagePosition]
 
};



