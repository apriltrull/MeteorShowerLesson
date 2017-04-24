var meteors=[];

function setup(){
  createCanvas (window.innerWidth, window.innerHeight);
  ellipseMode(RADIUS);
//fill(255);
  // ellipse(50, 50, 30, 30);
  colorMode(HSB);

   for(var i = 0; i < 225; i++) {
    meteors.push(new Meteor());
  }
}

function draw (){
   background(color(0, 0.1));
  for(var i = 0; i < meteors.length; i++){
     meteors[i].move();

     meteors[i].display();
  }

}

function Meteor(){
  this.size=random(4);
  this.color=color(random(324),255,255);
  this.speed=random(10);

  this.x= -random(width);
  this.y= -random(height);

  this.move=function(){
    this.x += this.size;
    this.y += this.size;

     if(this.x > width || this.y > height){

       this.x = -random(width);
       this.y = -random(height);

     }
  }

  this.display=function(){
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);

  }
}
