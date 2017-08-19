import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import {Page} from "ui/page"
import {RouterExtensions} from "nativescript-angular/router";

import { CoreService } from "../../../shared/core.service";
import { ConstantsService } from "../../../shared/constants.service";

@Component({
    selector: "ns-multiselectoptions",
    moduleId: module.id,
    templateUrl: "./multiselectoptions.component.html",
})
export class MultiSelectOptionsComponent implements OnInit, OnDestroy {
    item: object;
    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private page:Page,
        private routerExtensions: RouterExtensions,
        private _coreService:CoreService,
        private _constantsService:ConstantsService
    ) {
       // this.page.on("navigatedTo",()=>{
           // console.log("NAV again");
           // this.initScreen();
       // });

       this.item = this._constantsService.selectedQuestion;
       console.log("ROUTING PARAM : "+this._constantsService.qIndex); 
     }
   
    ngOnInit(): void {
       // this.initScreen();   
       /* this.router.events.subscribe((event) => {
            console.log("event again");
        });*/
    }

    ngOnDestroy(): void {
        console.log("clicked OnDestroy");  
    }

   
    onPageLoaded():void{
        console.log("clicked onPageLoaded");  
    }
}
