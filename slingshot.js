class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    
        }
    }

    fly(){
       //bodyA should change to empty = null
       this.sling.bodyA = null;
    }
    
}

/*
ARGUMENTS & PARAMETERS

Parameter - when function is being created
                - PLACEHOLDER for arguments
                - DO NOT exist
Argument - when function is being called
            - Real value to be used

           
*/