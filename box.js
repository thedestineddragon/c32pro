class Box {
  constructor(x, y, width, height) {
    this.Visiblity = 255;
    this.image = loadImage("box.png");
    this.body = Bodies.rectangle(x,y,width,height)
    World.add(world,this.body)
    this.width = width
    this.height = height
  }
  display(){
    if(this.body.speed < 3){
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
    else{
      var pos = this.body.position;
      push();
      World.remove(world,this.body);
      this.Visiblity = this.Visiblity - 30;
      tint(255,this.Visiblity);
      image(this.image,pos.x,pos.y,40,50);
      pop();
    }
  }
}