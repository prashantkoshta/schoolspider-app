import { Component, OnInit } from "@angular/core";
import { SwipeGestureEventData } from "ui/gestures";
import { ActivatedRoute,Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { CoreService } from "../../shared/core.service";
import { LoggerService } from "../../shared/logger.service";
import { ConstantsService } from "../../shared/constants.service";
import { CommonService } from "../../shared/common.service";
import { AssestsService } from "../../shared/assets.service";


@Component({
    selector: "ns-tutorial",
    moduleId: module.id,
    templateUrl: "./tutorial.component.html",
})
export class TutorialComponent implements OnInit {
    title:string;
    nofopage:number;
    currentpage:number;
    item:any
    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private routerExtensions: RouterExtensions,
        private _coreService:CoreService,
        public constantsService:ConstantsService,
        public commonService:CommonService,
        private logger:LoggerService,
        public assets:AssestsService
    ) { 
        this.title = "Tutors";
        this.currentpage = this.nofopage = -1;
    }


    ngOnInit(){
       
         
        this.item = this.route.snapshot.data['routeData'][0];
        this.logger.log("Now updateing on get data page : "+this.currentpage);
        this.logger.log("Now updateing on get data page : "+JSON.stringify(this.item));
        this.constantsService.pages = this.item.refurls;
        this.nofopage = this.constantsService.pages.length;
        this.onNext();

        /*
        this._coreService.getPages(
            this.constantsService.navState,
            this.route.snapshot.params["clas"],
            this.route.snapshot.params["sub"],
            this.route.snapshot.params["lesson"]
         ).subscribe(data => {
             var d:any = data;
             this.logger.log("Now updateing on get data page : "+this.currentpage);
             this.logger.log("Now updateing on get data page : "+JSON.stringify(data));
             this.constantsService.pages = d[0].refurls;
             
             this.nofopage = this.constantsService.pages.length;
             this.onNext();
         },
         error =>{
             this.logger.log("this._coreService.getClasses() ERROR");
         });
         */
    }

    onNext():void{
        this.currentpage+=1;
        if(this.currentpage!= -1 && this.currentpage < this.nofopage)
            this.onPageUdpate();

    }
    
    private onPageUdpate(){
        var t = this.currentpage+1;
        this.title = "Page : "+t+ " of "+this.nofopage;
        this.constantsService.selectedPageUrl = this.constantsService.pages[this.currentpage];
        this.constantsService.subjectPageRxjs.next(this.currentpage);
        this.routerExtensions.navigate(["/tutorialpage/page"]);
    }

    onClickNext():void{
       this.constantsService.navState
    }

    onPrevious(){
        this.currentpage-=1;
        if(this.currentpage!= -1 && this.currentpage < this.nofopage)
            this.onPageUdpate();
    }

    onSwipe(args: SwipeGestureEventData) {
        /*this.logger.log("Swipe!");
        this.logger.log("Object that triggered the event: " + args.object);
        this.logger.log("View that triggered the event: " + args.view);
        this.logger.log("Event name: " + args.eventName);
        this.logger.log("Swipe Direction: " + args.direction);*/
        if(args.direction == 1)  this.onPrevious();
        if(args.direction == 2)  this.onNext();
    }

    
   
}
