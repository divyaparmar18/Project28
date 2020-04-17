const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//const Render = Matter.Render;

var engine, world;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("bg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1700,20)

    DustbinObj = new Dustbin(910,315,150,0);
    legobj = new Leg(205,305,90,PI/16)
    boy = new Boy(160,230,300,0);
    side1 = new Side(864,315,150, -PI/13);
    side2 = new Side(955,315,150, PI/13);
    side3 = new Side(915,380,70,PI/2);
    
    paperObj = new PaperBall(180,330,35,40);

    slingshot = new SlingShot(paperObj.body,{x:250, y:270});

    // var render = Render.create({    
    //     element: document.body,    
    //     engine: engine,    
    //     options: 
    //     {   width: 1200, 
    //         height: 700,    
    //         wireframes: false    
    //     }   
    // });

    // Render.run(render);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    // slingshot.display();
    legobj.display();
    
    boy.display();
    paperObj.display();
    ground.display();
    DustbinObj.display();
    // console.log(legobj.body.angle)
    
    
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(paperObj.body);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(paperObj.body, {x: mouseX , y: mouseY});
    Matter.Body.rotate(legobj.body, 0.03);
        if (legobj.body.angle > 0.50) {
            Matter.Body.setAngle(legobj.body,0.50);
     }
    
}

function mouseReleased(){
    slingshot.fly();
    Matter.Body.setAngle(legobj.body, PI/14);
}




