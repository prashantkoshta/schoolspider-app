import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConstantsService {
    public endpoint:string = "https://sspider-api.herokuapp.com/spiderapi/getData";
    public questions: object[];
    public selectedQuestion:object;
    public qIndex:number = 0;
    public routeParam:object = {};
}
