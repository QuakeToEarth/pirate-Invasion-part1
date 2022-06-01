class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.canonBase = loadImage("./assets/cannonBase.png");
    this.canonHead = loadImage("./assets/canon.png");
  }
  display() {

if(keyIsDown(RIGHT_ARROW)&&this.angle<70){
  this.angle = this.angle + 1
}

if(keyIsDown(LEFT_ARROW)&&this.angle>-30){
  this.angle = this.angle -1
}

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.canonHead,0, 0, this.width, this.height);
    pop();

    image(this.canonBase, 70, 50, 200, 200);
  }
}
