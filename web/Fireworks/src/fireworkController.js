import Firework from "./firework.js";

export default class FireworkController {
  fireworks = [];
  timerTillNextFirework = 0;

  constructor(canvas) {
    this.canvas = canvas;
  }

  shoot(x, y, speed, delay) {
    if (this.timerTillNextFirework <= 0) {
      this.fireworks.push(new Firework(x, y, speed));

      this.timerTillNextFirework = delay;
    }

    this.timerTillNextFirework--;
  }

  draw(ctx, size, shape) {
    this.fireworks.forEach((firework) => {
      if (this.isFireworkOffScreen(firework)) {
        const index = this.fireworks.indexOf(firework);
        this.fireworks.splice(index, 1);
      }
      firework.draw(ctx, size, shape);
    });
  }

  collideWith(sprite) {
    return this.fireworks.some((firework) => {
      if (firework.collideWith(sprite)) {
        this.fireworks.splice(this.fireworks.indexOf(firework), 1);
        return true;
      }
      return false;
    });
  }

  isFireworkOffScreen(firework) {
    return firework.y <= -firework.height;
  }
}