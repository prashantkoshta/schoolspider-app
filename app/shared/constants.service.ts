import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
    public endpointurl:string;
    constructor() { 
        this.endpointurl = "https://sspider-api.herokuapp.com/spiderapi/getData";
    }
}
