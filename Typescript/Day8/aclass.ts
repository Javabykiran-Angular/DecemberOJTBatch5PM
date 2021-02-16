export class A{

  private  id:number;
   protected name:string;

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }

    display(){
        console.log(`
            id is :: ${this.id}
            name  :: ${this.name}
        `);
    }

}