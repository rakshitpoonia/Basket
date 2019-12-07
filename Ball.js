class Ball{
constructor(x,y){
    var options={
        'restitution':1.0,
        'friction':0.5,
        'density':1.0
    }
    this.ball=Bodies.rectangle(x,y,20,20,options);
    this.width=20;
    this.height=20;
    World.add(world,this.ball);
    
}
display(){
    push();
    var angle=this.ball.angle;
    translate(this.ball.position.x,this.ball.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();

}

}