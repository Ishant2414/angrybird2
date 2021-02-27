class Chain {
    constructor(bodyA, bodyB){
       var options = {
           bodyA : bodyA,
           bodyB : bodyB,
           stiffness : 0.2,
           lenght : 10
       }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var AZ = this.chain.bodyA.position
        var ZA = this.chain.bodyB.position

        strokeWeight(3)
        line(AZ.x, AZ.y, ZA.x, ZA.y);
    }
}
