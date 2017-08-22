import { Component, OnInit } from "@angular/core";
import { SwipeGestureEventData } from "ui/gestures";
import { ActivatedRoute,Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { CoreService } from "./shared/core.service";
import { LoggerService } from "./shared/logger.service";
import { ConstantsService } from "./shared/constants.service";
import { CommonService } from "./shared/common.service";
import { AssestsService } from "./shared/assets.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
    constructor(private _coreService:CoreService,
    private _constantsService:ConstantsService,
    private logger:LoggerService
){
        this._coreService.getAppDataConfig().subscribe(
            data => {this._constantsService.appConfigData = data;},
        error =>{
            this.logger.log("this._coreService.getAppDataConfig() ERROR");
        });
    }
   
}
