import { Injectable } from '@angular/core';

@Injectable()
export class FnEqConstantsService {
    public fnlistURL:string;
    constructor() { 
        this.fnlistURL = "https://app-service-fn.herokuapp.com/fneqapi/listofequation";
        //this.fnlistURL = "http://192.168.0.22:3000/fneqapi/listofequation"; 
    }
}
