class Saviour{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.5,
            'density':1,
            'friction':1
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/saviour.png")
       
        
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}

