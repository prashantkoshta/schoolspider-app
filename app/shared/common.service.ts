import { Injectable } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { CoreService } from "./core.service";
import { LoggerService } from "./logger.service";
import { ConstantsService } from "./constants.service";
import { AssestsService } from "./assets.service";
import { Observable } from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

//
//import { View } from "tns-core-modules/ui/core/view";
import {LoadingIndicator} from "nativescript-loading-indicator";
// import {Page} from "ui/page";

//declare var MBProgressHUDModeDeterminate, MBProgressHUDModeAnnularDeterminate, MBProgressHUDModeDeterminateHorizontalBar, MBProgressHUDModeText, MBProgressHUDModeCustomView;


@Injectable()
export class CommonService {
    source;
    subscription:Subscription;
    loader:LoadingIndicator;
    options:any;
    constructor(
        private routerExtensions:RouterExtensions,
        private logger:LoggerService,
        public constantsService:ConstantsService
    ) {
        this.loader = new LoadingIndicator();


        

        
     }

    navigateToScreen(args:any[],boolCelarHistory:boolean,anim){
        this.routerExtensions.navigate(args,anim);
    }

    navigateToScreenHistoryFlag(args:any[],boolCelarHistory:boolean){
        this.routerExtensions.navigate(args,{clearHistory: boolCelarHistory});
    }

    getScreenConfigData(screenId:string){
        return this.constantsService.appConfigData[screenId];
    }

    hideLoader():void{
        /*this.subscription
        this.constantsService.progressValue = 0;*/
        this.loader.hide();
        
    }
    showLoader():void{
        this.options = {
            message: 'Loading...',
            progress: 0.65,
            android: {
              indeterminate: true,
              cancelable: false,
              max: 100,
              progressNumberFormat: "%1d/%2d",
              progressPercentFormat: 0.53,
              progressStyle: 1,
              secondaryProgress: 1
            },
            ios: {
              details: "",
              margin: 10,
              dimBackground: true,
              color: "#b1b1b1", // color of indicator and labels 
              // background box around indicator 
              // hideBezel will override this if true 
              backgroundColor: "#ffffff",
              hideBezel: false, // default false, can hide the surrounding bezel 
             // view: page, // Target view to show on top of (Defaults to entire window) 
             // mode: MBProgressHUDModeDeterminate // see iOS specific options below 
            }
          };
           
        this.loader.show(this.options); 
    }

    
}