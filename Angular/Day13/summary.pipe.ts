import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform {
    // transform(value: any,minIndex:number=0,maxIndex:number=20) {
    transform(value: any,minIndex:number,maxIndex:number) {
       
        if(value==null){
            return value;
        }

        let temp=(<string> value);

        let start=minIndex?minIndex:0;
        let end=maxIndex?maxIndex:12;

        // return (temp.substring(0,15)+' ...');    
        // return (temp.substring(minIndex,maxIndex)+' ...'); 
        return (temp.substring(start,end)+' ...'); 
    }

}