class Leg {
  constructor(x, y, height, angle) {
    var options = {
      isStatic: true,
      
  }

    this.body = Bodies.rectangle(x, y, 0, height, options);
    this.width = 100;
    this.height = height;
    Matter.Body.setAngle(this.body, angle);
    this.image = loadImage("leg.png")
    World.add(world, this.body);

  }
  
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};
