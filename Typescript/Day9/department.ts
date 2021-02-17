
export class Department{
    private role:string;

    constructor(role:string){
        this.role=role;
    }

    setRole(r:string){
        this.role=r;
    }

    getRole(){
        return (this.role);
    }



}