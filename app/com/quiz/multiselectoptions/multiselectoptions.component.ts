import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import {Page} from "ui/page"
import {RouterExtensions} from "nativescript-angular/router";
import { LoggerService } from "../../../shared/logger.service";
import { CoreService } from "../../../shared/core.service";
import { ConstantsService } from "../../../shared/constants.service";
import { AssestsService } from "../../../shared/assets.service";
import { IQuiz } from "../iquiz";

@Component({
    selector: "ns-multiselectoptions",
    moduleId: module.id,
    templateUrl: "./multiselectoptions.component.html",
})
export class MultiSelectOptionsComponent implements OnInit, OnDestroy, IQuiz {
    item: any;
    selectedOption:string;
    selectedOptionIndexList:number[];
    feedback:string;
    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private page:Page,
        private routerExtensions: RouterExtensions,
        private _coreService:CoreService,
        private _constantsService:ConstantsService,
        public assets:AssestsService,
        private logger:LoggerService
    ) {
       let q:any = this._constantsService.selectedQuestion;
       this.selectedOptionIndexList = new Array<number>(q.options.length);
       this.item = this._constantsService.selectedQuestion;
    }

    private onQuestionChange(x:number) {
        this.feedback = "";
        this._constantsService.selectedQuestion=this._constantsService.questions[x];
        let q:any = this._constantsService.selectedQuestion;
        this.selectedOptionIndexList = new Array<number>(q.options.length);
        this.item = this._constantsService.selectedQuestion;
    } 
     
   
    ngOnInit(): void {
        this._constantsService.subjectQIndexRxjs.subscribe(
            x => {
                this.onQuestionChange(x);
                this.logger.log('onNext:'+x)
            },
            e => {
                this.logger.log('onError:'+e)
            },
            () => {
                this.logger.log('onCompleted')
            }
        );
    }

    ngOnDestroy(): void {
        this.logger.log("clicked OnDestroy");  
    }

   
    onPageLoaded():void{
        this.logger.log("clicked onPageLoaded");  
    }

    onSelect(args):void{
        let n:number = this.selectedOptionIndexList[args.index];
        if( n == undefined) {
            this.selectedOptionIndexList[args.index] = 1;
        }else{
            this.selectedOptionIndexList[args.index] = (n==1)?0:1
        }
        this.selectedOption = this.item.options[args.index];
    }

    onSubmit():void{
        let tIndexChecked:Array<number> = []; 
        for(var i=0;i<this.selectedOptionIndexList.length;i++){
            if(this.selectedOptionIndexList[i] == 1){
                tIndexChecked.push(i);
            }
        }
        if(tIndexChecked.toString() == this.item.ans.toString()){
            this.feedback = "Correct";
        }else{
            this.feedback = "InCorrect";
        }
    }
}
