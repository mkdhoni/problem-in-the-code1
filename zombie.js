class Zombie{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.5,
            'density':1,
            'friction':1
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/zombie.png")
        
       
        if (frameCount % 20 === 0) {
            zombie = createSprite(random(100, 1000), 0, 100, 100);
            zombie.velocityY = 6;
        }
        
    }
    display(){
        push();
            translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 100, 100, this.width, this.height);
        pop();
    }
}
