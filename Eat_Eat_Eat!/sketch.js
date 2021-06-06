let player;
let food = [];
let speed = 2;

let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // reset button
  button = createButton('Reset');
  button.position(0, 0);
  button.mousePressed(reset);
  
  // create player
  player = new Player(width / 2, height / 2, 25);
  
  // create food entities
  for (let i = 0; i < 10; i++) {
    food[i] = new Food(createVector(random(windowWidth), random(windowHeight)));
  }
}

// creates new instances of food entities on mouse click
function mousePressed() {
  food.push(new Food(createVector(mouseX, mouseY)));
}

// reset button
function reset() {
  player.resetSize(25);
}

function draw() {
  background(220);
  
  // creates player
  player.show();
  player.move();
  
  // loops through the array containing the instances of food entities
  for (let i = 0; i < food.length; i++) {
    
    // checks to see if the food is alive
    if (food[i].isAlive() === true) {
      
      // checks to see if the food and the player have collided
      if (dist(player.getPos().x, player.getPos().y, food[i].getPos().x, food[i].getPos().y) < food[i].getSize() / 2 + player.getSize() / 2) {
        
        // sets food that was eaten to dead
        food[i].setAlive(false);
        
        // updates the size of the player after eating food
        player.updateSize(food[i].getSize());
      }
      
      // creates food entities
      food[i].show();
      food[i].changeVel();
      food[i].move();
    }  
  } 
}

class Player {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.size = s;
  }
  
  // Returns the x and y positions of the player
  getPos() {
    return createVector(this.x, this.y);
  }
  
  // Returns the size of the player
  getSize() {
    return this.size;
  }
  
  // Player movment perameters
  move() {
    if (keyIsDown(87)) {
      this.y -= speed;
    }
    if (keyIsDown(83)) {
      this.y += speed;
    }
    if (keyIsDown(65)) {
      this.x -= speed;
    }
    if (keyIsDown(68)) {
      this.x += speed;
    }
    
    if (this.x < 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }
    
    if (this.y < 0) {
      this.y = height;
    } else if (this.y > height) {
      this.y = 0;
    }
    
    if (this.size > 100) {
      speed = 1.25;
    } else if (this.size > 200) {
      speed = 0.5;
    } else if (this.size > 300) {
      speed = 0.3;
    }
  }
  
  // Updates the size of the player
  updateSize(foodSize) {
    this.size += foodSize;
  }
  
  resetSize(size) {
    this.size = size;
  }
  
  // Draws the player
  show() {
    ellipse(this.x, this.y, this.size);
    
    textAlign(CENTER);
    text("Player", this.x, this.y);
    text(floor(player.getSize()), 70, 18);
  }
}

class Food {
  constructor(pos) {
    this.alive = true;
    this.pos = pos;
    this.vel = p5.Vector.random2D();
    this.size = random(10, 25);
  }
  
  // returns the position of food
  getPos() {
    return createVector(this.pos.x, this.pos.y);
  }
  
  // returns the size of food
  getSize() {
    return this.size;
  }
  
  // sets life of food entity
  setAlive(isAlive) {
    this.alive = isAlive;
  }
  
  // returns weather the food is alive or not
  isAlive() {
    return this.alive;
  }
  
  changeVel() {
    let dir = p5.Vector.random2D()
    this.vel = p5.Vector.add(this.vel, dir.mult(0.1)).normalize()
  }
  
  // defines how the food entities move
  move() {
    if(this.pos.x > width || this.pos.x < 0){
      this.vel.x = -this.vel.x;
    }
    
    if(this.pos.y > height || this.pos. y < 0){
      this.vel.y = -this.vel.y
    }
    
    this.pos.add(this.vel);
  }
  
  // shows the food
  show() {
    ellipse(this.pos.x, this.pos.y, this.size);  
  }
}