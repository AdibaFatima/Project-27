class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB
        }
        this.Chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.Chain);
    }

    display(){
        var pointA = this.Chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}