class PaperBall {
    constructor(x, y,radius) {
      var options = {
        density:1.2,
        friction: 0.5,
        restitution:0,
        isStatic : false
      };

      this.body = Matter.Bodies.circle(x, y, radius, options)
      this.radius = 80;
      this.image = loadImage("bot.png")
      World.add(world, this.body);
      
    };
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 80,50);
      pop();
    };
  };

  
  
  