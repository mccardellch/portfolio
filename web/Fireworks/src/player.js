export default class Player {
  constructor(x,y, color, fireworkController){
    this.x = x;
    this.y = y;
    this.color = color;
    this.fireworkController = fireworkController;
    this.width = 20;
    this.height = 10;
    
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }
  
  draw(ctx){
    this.move();
//    console.log(`player: (${this.x}, ${this.y})`);
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,this.y+9,canvas.width, canvas.height); 
//    ctx.fillStyle = this.color;   
//    ctx.fillRect(this.x, this.y, this.width, this.height);
    
    ctx.fillStyle = 'brown';
    ctx.fillRect(this.x,this.y,52,20);

    ctx.fillStyle = 'brown';
    ctx.fillRect(this.x + 10,this.y - 48,6,50); 

    ctx.fillStyle = 'brown';
    ctx.fillRect(this.x + 37,this.y-48,6,50);

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(this.x + 14,this.y-52);
    ctx.lineTo(this.x - 10,this.y-20);
    ctx.lineTo(this.x + 26,this.y-20);
    ctx.closePath();
    ctx.fill();  

    ctx.beginPath();
    ctx.fillStyle = "lightgreen";
    ctx.moveTo(this.x + 38,this.y-80);
    ctx.lineTo(this.x,this.y-25);
    ctx.lineTo(this.x+60,this.y-25);
    ctx.closePath();
    ctx.fill(); 

    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.moveTo(this.x-20,this.y-5);
    ctx.lineTo(this.x,this.y-5);
    ctx.lineTo(this.x,this.y+20);
    ctx.closePath();
    ctx.fill(); 

    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.moveTo(this.x+72,this.y-5);
    ctx.lineTo(this.x+52,this.y-5);
    ctx.lineTo(this.x+52,this.y+20);
    ctx.closePath();
    ctx.fill();
    
    this.shoot();
  }
  
  move(){
    if (this.leftPressed){
      this.x -= 5;
    }
    if(this.rightPressed){
      this.x += 5;
    }
  }
  
  shoot(){
    if(this.shootPressed){
      const speed = 5;
      const delay = 4;
      let xFirework = this.x + this.width / 2;
      let yFirework = this.y;
//      console.log(`firework: (${xFirework}, ${yFirework})`);
      this.fireworkController.shoot(xFirework, yFirework, speed, delay);
    }
  }

  //key press event
  keydown = (e) => {
    console.log('keydown');
    if (e.code === "ArrowUp") {
      this.upPressed = true;
    }
    if (e.code === "ArrowDown") {
      this.downPressed = true;
    }
    if (e.code === "ArrowLeft") {
      this.leftPressed = true;
    }
    if (e.code === "ArrowRight") {
      this.rightPressed = true;
    }
    if (e.code === "Enter") {
      this.shootPressed = true;
    }
  }
  
  //key lift event
  keyup = (e) => {
    if (e.code === "ArrowUp") {
      this.upPressed = false;
    }
    if (e.code === "ArrowDown") {
      this.downPressed = false;
    }
    if (e.code === "ArrowLeft") {
      this.leftPressed = false;
    }
    if (e.code === "ArrowRight") {
      this.rightPressed = false;
    }
    if (e.code === "Enter") {
      this.shootPressed = false;
    }
  }
};


