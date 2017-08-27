import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subject} from 'rxjs/Subject';
import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ConstantsService {
    public endpoint:string = "https://sspider-api.herokuapp.com/spiderapi";


    public appConfigData:any;
    //For Quiz
    public questions: object[];
    public selectedQuestion:object;
    public qIndex:number = 0;
    public routeParam:object = {};


    public subjectQIndexRxjs:Subject<number>;


    //For tutorial
    public navState:string;
    public pages:string[];
    public selectedPageUrl:string;
    public subjectPageRxjs:Subject<number>;



    //
    public ANIMATION_ROLLIN:any;


    public progressValue:number = 0;

    constructor() {
        this.subjectQIndexRxjs = new Subject<number>();
        this.subjectPageRxjs = new Subject<number>();



        //
        this.ANIMATION_ROLLIN = {
            animated:true,
            transition: {
                name: "rollIn",
                duration: 600,
                curve: "linear"
            }
        }
    }


  

   
}
