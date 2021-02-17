
import {Employee} from './employee';
import {Department} from './department'
export class EmployeeDetails implements Employee{
    fname: string;
    lname: string;
    salary:number;
    dept:Department;
    
    constructor(fname:string,
        lname:string,salaray:number,role:string){
        this.fname=fname;
        this.lname=lname;
        this.salary=salaray;
        this.dept=new Department(role);
    }

    display() {        
        console.log(`
            -------Employee Details------------
            First Name :: ${this.fname}
            Last Name :: ${this.lname}
            Salary is :: ${this.salary}
            Department :: ${this.dept.getRole()}
        `);     
    }

    
}

