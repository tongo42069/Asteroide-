var ship;

function setup ()  {
    createCanvas (windowWidth, windowHeight);
    ship = new Ship();
}

function draw() {
    background (0);
    ship.render();
}


function ship()  {
    this.pos = createVector(width/2, height/2);
    this.r = 20;
    this.heading = PI / 2;

    this.render = function()  {
        translate(this.pos.x, this.pos.y);
        DeviceRotationRate(this.heading);
        noFill();
        stroke(255);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
    }

    this.turn = funtion(angle){
        heading += angle;

}

}