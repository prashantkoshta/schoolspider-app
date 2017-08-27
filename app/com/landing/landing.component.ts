import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { AssestsService } from "../../shared/assets.service";
import { LoggerService } from "../../shared/logger.service";
import { ConstantsService } from "../../shared/constants.service";
import { CommonService } from "../../shared/common.service";
import {Page} from "ui/page";

@Component({
    selector: "ns-landing",
    moduleId: module.id,
    templateUrl: "./landing.component.html",
})

export class LandingComponent implements OnInit {
    constructor(
    private routerExtensions:RouterExtensions,
    public assets:AssestsService,
    private logger:LoggerService,
    public constantsService:ConstantsService,
    public commonService:CommonService,
    private page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        
        //Uncomment for testing spcific question layout
        
        //For Question
       // this.constantsService.navState = "exam";
       // this.routerExtensions.navigate(["/topics","exam","1","English","Lesson 1"]);


        //For Tutorial
       // this.constantsService.navState = "tutorial";
        //this.routerExtensions.navigate(["/tutorial/page","1","English","Lesson 1"]);
    }
   
}