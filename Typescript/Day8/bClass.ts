import {A} from './aclass';
export class B extends A
{

    address:string;
    
    constructor(id:number,name:string,address:string){
        super(id,name);
        this.address=address;
        
    }

    BClass_Display(){
        this.display();
        console.log("Address is "+this.address);
    }


}