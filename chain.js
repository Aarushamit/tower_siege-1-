class Chain {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.CHain = Constraint.create(options);
        World.add(world, this.CHain);
    }

    fly(){
        this.CHain.bodyA = null;
    }

    display(){
        if(this.CHain.bodyA){
            var pointA = this.CHain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}