import { Injectable } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { CoreService } from "./core.service";
import { LoggerService } from "./logger.service";
import { ConstantsService } from "./constants.service";
import { AssestsService } from "./assets.service";

@Injectable()
export class CommonService {
    constructor(
        private routerExtensions:RouterExtensions,
        private logger:LoggerService
    ) {
        
     }

    navigateToScreen(args:any[],boolCelarHistory:boolean,anim){
        this.logger.log(args.toString());
        this.routerExtensions.navigate(args,anim);
    }

    navigateToScreenHistoryFlag(args:any[],boolCelarHistory:boolean){
        this.logger.log(args.toString());
        this.routerExtensions.navigate(args,{clearHistory: boolCelarHistory});
    }
}