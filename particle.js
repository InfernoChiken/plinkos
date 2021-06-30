//Add a color property for the particle in the constructor. This will apply random colors to the particles.
class Particle {
    constructor() {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 10;
        this.body = Bodies.circle(mouseX, 0, this.r, options);
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(random(0,255),random(0,255),random(0,255));
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};