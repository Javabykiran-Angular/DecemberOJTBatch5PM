import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,searchTerm:string): any {
   

    let EmpArr:any[]=[];

    if(value.length==0){
      return value;
    }

    for (let i = 0; i < value.length; i++) {
      
      let name:string=value[i].name;  
      let status:string=value[i].status; 

      if(name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
        EmpArr.push(value[i]);
      }else if(value[i].country.cname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
        EmpArr.push(value[i]);
      }else if(status.toLowerCase().startsWith(searchTerm.toLowerCase())){
        EmpArr.push(value[i]);
      }
            
    }

    return (EmpArr);

  }

}
