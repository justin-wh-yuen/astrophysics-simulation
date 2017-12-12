// Simulation of acceleration of Solar Sails depending on its area
var movers = [];

function setup() {
  createCanvas(900, 400);
  reset();

 }

function draw() {
  background(0);
  fill(255,204,0);
  ellipse(50,150,100,100);
  textSize(40);
  fill(0,0,0);
  stroke(0);
  strokeWeight(2);
text("sun",10,150);


  for (var i = 1; i < movers.length; i++) {
      var solarforce = createVector(0.001*i*movers[i].mass,0); 
      //change the coefficient here to make it accelerate slower

        movers[i].applyForce(solarforce);
   
     movers[i].update(); //animate the ship
    movers[i].display(); //display it
    
  }
  
}

function mousePressed() {
  reset();
}

// Restart all the Mover objects randomly
function reset() {
  for (var i = 1; i < 3; i++) {
    // make a number of sails and their coordinates
    movers[i] = new Mover((4*(2*i)), 100, 0 + 100*i);
   // make each sail's acceleration twice the previous since
   // the sail's area is twice the previous sail.

    var solarforce = createVector(0.01*2*movers[i].mass,0); 
    //this line isn't necessary but it is redefined so we can print out
    //the value of the solar force for each sail in the browser console
    print(solarforce.x);
   
      }
}

function Mover(m,x,y) {
  this.mass = m;
  this.position = createVector(x,y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);
}

// Apply the force from the sunlight
Mover.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force,this.mass);
  this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
   this.velocity.add(this.acceleration);
   this.position.add(this.velocity);
   this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  i=1;
  stroke(0);
  strokeWeight(2);
  fill('red');
  rect(this.position.x,this.position.y,this.mass*10,this.mass*10);
  
  fill('blue');
  rect(this.position.x,this.position.y,this.mass*20,10);
};









