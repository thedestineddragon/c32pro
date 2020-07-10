const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

function preload() {
    getbackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    stable1 = new Ground(600,200,250,20);
    stable2 = new Ground(1000,150,250,20);
    ground1 = new Ground(0,0,1200,20);
    box1 = new Box(600,185,50,30);
    box2 = new Box(550,185,50,30);
    box3 = new Box(500,185,50,30);
    box4 = new Box(650,185,50,30);
    box5 = new Box(700,185,50,30);
    box6 = new Box(650,155,50,30);
    box7 = new Box(600,155,50,30);
    box8 = new Box(550,155,50,30);
    box9 = new Box(600,125,50,30);
    box10 = new Box(1000,135,50,30);
    box11 = new Box(1050,135,50,30);
    box12 = new Box(1100,135,50,30);
    box13 = new Box(950,135,50,30);
    box14 = new Box(900,135,50,30);
    box15 = new Box(1000,120,50,30);
    box16 = new Box(950,120,50,30);
    box17 = new Box(1050,120,50,30);
    box18 = new Box(1000,105,50,30);
    ball = new Ball(150,100,15);
    rope  = new Rope(ball.body,{x:100,y:150});
}
    function draw (){
if(backgroundImg!=null){
     background(backgroundImg);
      Engine.update(engine);
    stable1.display();
    stable2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    ball.display();
    rope.display();
    
        }
}
function mouseDragged (){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased (){
  rope.fly();
}
async function getbackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson = await response.json();
    console.log(responsejson);
    var date = responsejson.datetime
    console.log(date)
    var hour = date.slice(11,13)
    console.log(hour);
    if(hour<18 && hour>6){
       backgroundImg = loadImage("bg.png");
    
    }
    else{
        backgroundImg = loadImage("bg2.jpg");
    }
    }