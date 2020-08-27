var ground, ball;
function preload() {
    loadImage.image("groundObj.png");
    loadImage.image("dustbinObj.png");
    loadImage.image("paperObj.png");
}
function setup(){
    var canvas = createCanvas(400,400);
    

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    var options ={
        istatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
    }
    ball = Bodies.circle(100,100,70,options);
    World.add(world,ball);
}

function draw(){
    background(0);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    fill("blue");
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
         display() {
             groundObj.display();
             dustbinObj.display();
             paperObj.display();
         }


         
    if (UP_ARROW.IsPressed) {
        keyPressed();
    }

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
    }
}