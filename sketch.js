    

var saviour;
var zombie;
var backgroundImg;
var world;
var engine;
var bullet;

     


function preload(){
backgroundImg = loadImage("sprites/background-1500x900.jpg")
}

function setup(){
    var canvas = createCanvas(1500,900);
    saviour = new Saviour(100,200,350,350)
    zombie = new Zombie(1400,400,50,50)
    bullet = new Bullet(200,200,50,50)

}

function draw(){
    background(backgroundImg)
   
    if (keyDown(UP_ARROW)){
        saviour.velocityX=10
            
    }
    if (keyDown(DOWN_ARROW)){
        saviour.velocityY= -10
    
    }
   
   
saviour.display();
zombie.display();
bullet.display();

    
}