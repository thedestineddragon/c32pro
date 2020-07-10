class Ball {
    constructor(x,y,radius){
        var option = {
        restitution:0.4,
        friction:1,
        density:1

        }
        this.body = Bodies.circle(x,y,radius,option);
        World.add(world,this.body);
        this.radius = radius;
    }
    display(){
    var pos =this.body.position;
    push()
    fill("red");
    translate(pos.x, pos.y);
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius); 
    pop() 
    }
}

