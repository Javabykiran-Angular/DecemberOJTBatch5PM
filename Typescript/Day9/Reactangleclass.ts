import {Shape} from './shapeclass';

export class Rectangle extends Shape{
    length:number;
    breadth:number;
    area:number;
    constructor(l:number,b:number){
        super();
        this.length=l;
        this.breadth=b;
        this.area=0;
    }
    Myarea(){
        this.area=this.length*this.breadth;
    }

    display(){
        console.log(`
        ------------Area of Reacangle----------------
            Length is ${this.length}
            Breadth is ${this.breadth}
            Araea is ${this.area}
        `);
    }


}