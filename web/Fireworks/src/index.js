import Player from "./player.js";
import firework from "./firework.js";
import FireworkController from "./fireworkController.js";

const canvasWidth = 800;
const canvasHeight = 600;
let ctx = canvas.getContext("2d");
canvas.width = canvasWidth;
canvas.height = canvasHeight;

let sliderValue = 2;
let boatColor = 'yellow';
let fireworkShape = 'circle';

//using enums to run through the loops
const mode = {
    MAIN: 'main',
    GAME: 'game',
    PAUSE: 'pause',
    CREDITS: 'credits',
};
   
let state = mode.MAIN; //start on clear

const fireworkController = new FireworkController(canvas);
const player = new Player(100, 500, 'red', fireworkController);

//window.onload = mainState;

function mainState(){  
  ctx.fillStyle = 'black';
	ctx.fillRect(0,0,canvas.width,canvas.height);
    
  ctx.fillStyle = 'red';
  ctx.fillRect(200, 200, 100,100);

  document.querySelector('#shoot').onclick = function(e){
      player.shoot();
    };
  
    document.querySelector('#boatColorChooser').onchange = function(e){
        boatColor = e.target.value;  
    };
  
    document.querySelector('#sizeSlider').onchange = function(e){
        sliderValue = e.target.value;  
    };
    
    document.querySelector('#fireworkShapeChooser').onchange = function(e){
        fireworkShape = e.target.value;
    };
  
  fireworkController.draw(ctx, sliderValue, fireworkShape);
  player.draw(ctx, boatColor);
}
   
setInterval(mainState, 1000/60);


