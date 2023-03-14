// .js file of all the utility/helper/unnecessary methods
(function(){
  
  let divergence = 137.5
  let c = 4;
  
function getRandomColor(r=1,g=1,b=1,a=1){
  const getByte = _ => 55 + Math.round(Math.random() * 200);
  return `rgba(${getByte()*r}, ${getByte()*g}, ${getByte()*b},${a})`;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
       
function dtr(degrees){
    return degrees * (Math.PI/180);
}

function drawDot(ctx,x,y,radius,color){
	ctx.save();
       if (color == 'rainbow'){
           let aDegrees = (n * divergence) % 360;
           color = `hsl(${aDegrees},255%,50%)`;
           ctx.fillStyle = color;
       }else{
           ctx.fillStyle = color;
       }
	ctx.beginPath();
	ctx.arc(x,y,radius,0,Math.PI * 2);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}
  
function drawCircle(ctx, n, c, sliderValue, xPos){
  let a = n * hhmLIB.dtr(divergence);
  let r = c * Math.sqrt(n);
  let x = r * Math.cos(a) + xPos;
  let y = r * Math.sin(a) + 100;

  drawDot(ctx,x,y,sliderValue, hhmLIB.getRandomColor());
}
  
function drawSpiral(ctx, n, c, sliderValue, xPos){
  let a = n * 2 * hhmLIB.dtr(divergence);
  let r = c * Math.sqrt(n * 2);
  let x = r * Math.cos(a) + xPos;
  let y = r * Math.sin(a) + 100;
  
  drawDot(ctx,x,y,sliderValue, hhmLIB.getRandomColor());
}
  
function drawOval(ctx, n, c, sliderValue, xPos){
  let a = n * 2 * hhmLIB.dtr(divergence);
  let r = c * Math.sqrt(n);
  let x = r * Math.cos(a + 100) + xPos;
  let y = r * Math.sin(a) + 100;
  
  drawDot(ctx,x,y,sliderValue, hhmLIB.getRandomColor());
}

function stars(ctx, canvasWidth, playerY){
    for (let i = 0; i < 6; i++){
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.fillStyle = hhmLIB.getRandomColor(1,1,0);
        ctx.fillRect(hhmLIB.getRandomInt(0,800), hhmLIB.getRandomInt(0, 500), 3,3);
        ctx.restore();
    }
}
   
function getMousePos(ctx, e){
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}
  
//function resetValues(){
//    n = 0;
//    y_Firework = 550;
//    x_Firework = movement + player.width/2;
//}    
    
window['hhmLIB'] = {
    getRandomColor,
    getRandomInt,
    dtr,
    drawDot,
    drawCircle,
    drawSpiral,
    drawOval,
    stars,
    getMousePos,
    }
})();
