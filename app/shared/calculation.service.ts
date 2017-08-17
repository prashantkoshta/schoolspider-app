import { Injectable } from '@angular/core';

@Injectable()
export class CalcualtionService {

    constructor() { }

    getSI(p:number,r:number,t:number,frequency:string):number{
        // A = P(1 + rt)
        r = r/100;
        frequency = frequency.toLowerCase();
        if(frequency === "year"){
             t= t;
        }else if(frequency === "quarter"){
             t = t/4;
        }else if(frequency === "month"){
             t = t/12;
        }else if(frequency === "week"){
            t = t/4*12;
        }else if(frequency === "day"){
            t= t/1*30*12;
        }
        
        console.log("Final",t,frequency);
        return p * (1 + (r * t));
    }
}