class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 50
        }

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(color){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
    

    attach(body){
        this.sling.bodyA = body;
    }

  
    
    
}