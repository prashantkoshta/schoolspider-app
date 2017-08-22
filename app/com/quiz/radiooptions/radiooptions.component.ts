import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import {Page} from "ui/page"
import {RouterExtensions} from "nativescript-angular/router";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { CoreService } from "../../../shared/core.service";
import { LoggerService } from "../../../shared/logger.service";
import { ConstantsService } from "../../../shared/constants.service";
import { AssestsService } from "../../../shared/assets.service";
import { IQuiz } from "../iquiz";




@Component({
    selector: "ns-radiooptions",
    moduleId: module.id,
    templateUrl: "./radiooptions.component.html",
})
export class RadioOptionsComponent implements OnInit, OnDestroy,IQuiz {
    item: any;
    selectedOption:string;
    selectedOptionIndex:number;
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
        this.selectedOptionIndex = -1;
        this.item =  this._constantsService.selectedQuestion;
     }

    private onQuestionChange(x:number) {
        this.feedback = "";
        this.selectedOptionIndex = -1
        this.item = this._constantsService.selectedQuestion=this._constantsService.questions[x];
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


    public onSelect(args) {
        this.selectedOptionIndex = args.index;
        this.selectedOption = this.item.options[args.index];
    }

    onSubmit():void{
        if(this.selectedOptionIndex == this.item.ans[0]-1){
            this.feedback = "Correct"
        }else{
            this.feedback = "Incorrect"
        }
    }
}
