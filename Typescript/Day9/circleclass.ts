import {Shape} from './shapeclass';

export class Circle extends Shape
{   
    radius:number;
    area:number;

    constructor(radius:number){
        super();
        this.radius=radius;
        this.area=0;
    }

    Myarea(){
       this.area=3.14*this.radius*this.radius; 
    }

    display(){
        console.log(`
        -----------Area Of Circle-------------
            Radius is ${this.radius}
            Araea is ${this.area}
        `);
    }


}