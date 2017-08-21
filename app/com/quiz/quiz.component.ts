import { Component, OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { CoreService } from "../../shared/core.service";
import { LoggerService } from "../../shared/logger.service";
import { ConstantsService } from "../../shared/constants.service";


@Component({
    selector: "ns-quiz",
    moduleId: module.id,
    templateUrl: "./quiz.component.html",
})
export class QuizComponent implements OnInit {
    questions: object[];
    title:string;
    isLastData:boolean;
    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private routerExtensions: RouterExtensions,
        private _coreService:CoreService,
        private _constantsService:ConstantsService,
        private logger:LoggerService
    ) { 
        let len = this._constantsService.questions.length;
        let cnt = this._constantsService.qIndex+1;
        this.setQutestionTitle(cnt,len);
        this.isLastData  = (len == cnt)?true:false;
    }


    ngOnInit(){
    }

    onClickNext():void{
        this._constantsService.qIndex+=1;
        let len = this._constantsService.questions.length;
        this.logger.log("Count:"+this._constantsService.questions.length);
        if(this._constantsService.qIndex == this._constantsService.questions.length-1){
            this.isLastData = true;
        }
        if(this._constantsService.qIndex >this._constantsService.questions.length){
            let item = this._constantsService.routeParam;
           this.routerExtensions.navigate(["/topics",item["class"],item["subject"],item["lesson"]]);
           return;
        }
        let cnt = this._constantsService.qIndex+1;
        this.setQutestionTitle(cnt,len);
        var nextQ = this._constantsService.questions[this._constantsService.qIndex];
        this._constantsService.selectedQuestion = nextQ;
        this.routerExtensions.navigate(["/quizs/"+nextQ["qtype"],this._constantsService.qIndex]);
        //subsribe
        this._constantsService.subjectQIndexRxjs.next( this._constantsService.qIndex);
    }

    private setQutestionTitle(n:number,l:number){
        this.title = "Question: "+n+" of "+l;
    }
   
}
