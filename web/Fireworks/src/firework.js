export default class Firework {
  
     colors = [
       "red",
       "blue",
       "red",
       "green",
       "yellow",
       "orange",
       "purple",
       "pink",
       "brown",
       "grey",
     ];
  
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;

    this.c = 4;
    this.n = 0;
    this.width = 5;
    this.height = 15;
    this.color = "red";
//     this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  draw(ctx, size, shape) {
    if(this.y < 125){
      ctx.clearRect(0, 0, this.width, 100);
      this.explode(ctx, size, shape);
    }else{
      ctx.fillStyle = this.color;
      this.y -= this.speed;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  
  explode(ctx, size, shape){
    this.y = 0;
    if (this.n <= 200){
        ctx.save();
        ctx.fillStyle='black';
        ctx.globalAlpha = 5/60;
        ctx.fillRect(0,0,canvas.height, this.y);
        ctx.restore();

        if(shape == 'circle'){
            hhmLIB.drawCircle(ctx, this.n, this.c, size, this.x);
        }else if(shape == 'spiral'){
            hhmLIB.drawSpiral(ctx, this.n, this.c, size, this.x);
        }else if(shape == 'oval'){
            hhmLIB.drawOval(ctx, this.n, this.c, size, this.x);
        }

        this.n++;
    }
  }

  collideWith(sprite) {
    if (
      this.x < sprite.x + sprite.width &&
      this.x + this.width > sprite.x &&
      this.y < sprite.y + sprite.height &&
      this.y + this.height > sprite.y
    ) {
      sprite.takeDamage(this.damage);
      return true;
    }
    return false;
  }
}