class Paper{

constructor(x,y){

    var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
    }

this.body=Bodies.circle(x,y,20,options)
this.r=20


World .add(world,this.body)
}
display(){

var pos=this.body.position
ellipseMode(RADIUS)
fill("purple")
ellipse(pos.x,pos.y,this.r,this.r)

}


}