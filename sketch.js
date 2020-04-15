const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1700,20)

    DustbinObj = new Dustbin(910,315,150,0);

    side1 = new Side(864,315,150, -PI/13);
    side2 = new Side(955,315,150, PI/13);
    side3 = new Side(915,380,70,PI/2);
    
    paperObj = new PaperBall(150,330,20);

    slingshot = new SlingShot(paperObj.body,{x:150, y:150});

    

    var render = Render.create({    
        element: document.body,    
        engine: engine,    
        options: 
        {   width: 1200, 
            height: 700,    
            wireframes: false    
        }   
    });

    Render.run(render);

}

function draw(){
    background("#808080");
    Engine.update(engine);
    slingshot.display();
    paperObj.display();
    ground.display();
    DustbinObj.display();
    
}


function mouseDragged(){
    Matter.Body.setPosition(paperObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}




