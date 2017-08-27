import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import {Page} from "ui/page"
import {RouterExtensions} from "nativescript-angular/router";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { CoreService } from "../../../shared/core.service";
import { LoggerService } from "../../../shared/logger.service";
import { ConstantsService } from "../../../shared/constants.service";
import { CommonService } from "../../../shared/common.service";
import { AssestsService } from "../../../shared/assets.service";
import { ITutorial } from "../itutorial";
//
import { PDFView } from 'nativescript-pdf-view';
import { registerElement } from 'nativescript-angular';
registerElement('PDFView', () => PDFView);




@Component({
    selector: "ns-imagetutor",
    moduleId: module.id,
    templateUrl: "./imagetutor.component.html",
})
export class ImageTutorComponent implements OnInit, OnDestroy,ITutorial {
    pagenumber:string;
    public refurl:string;
    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private page:Page,
        private routerExtensions: RouterExtensions,
        private _coreService:CoreService,
        private constantsService:ConstantsService,
        public assets:AssestsService,
        private logger:LoggerService,
        private commonService:CommonService
    ) {
        
     }

   
    ngOnInit(): void {
        this.pagenumber = this.route.snapshot.params["lesson"];

        this.constantsService.subjectPageRxjs.subscribe(
            x => {
                this.onPageChange(x);
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

    onPageChange(x):void{
        this.pagenumber = x;
        this.refurl = this.constantsService.selectedPageUrl;
        //this.logger.log("Page number now :"+x); 
        this.commonService.showLoader();
    }

    ngOnDestroy(): void {
        this.logger.log("clicked OnDestroy");  
    }

    onPageLoaded():void{
        this.logger.log("clicked onPageLoaded");  
    }


    public onSelect(args) {
       // this.selectedOptionIndex = args.index;
      //  this.selectedOption = this.item.options[args.index];
    }

    onSubmit():void{
       /* if(this.selectedOptionIndex == this.item.ans[0]-1){
            this.feedback = "Correct";
        }else{
            this.feedback = "InCorrect";
        }*/
    }

    onLoad():void{
        this.logger.log("Load done.");
        this.commonService.hideLoader();
    }
}
