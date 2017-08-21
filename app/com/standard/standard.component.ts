import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoreService } from "../../shared/core.service";
import { LoggerService } from "../../shared/logger.service";
import { ConstantsService } from "../../shared/constants.service";

@Component({
    selector: "ns-standard",
    moduleId: module.id,
    templateUrl: "./standard.component.html",
})
export class StandardComponent implements OnInit {
    items: object[];
    title:string;
    constructor(
        private route: ActivatedRoute,
        private _coreService:CoreService,
        private logger:LoggerService,
        public constantsService:ConstantsService
    ) {
       
     }

    ngOnInit(): void {
        this.title = "Class";
        this.logger.log(this.route.snapshot.params["navstart"]);
        this.constantsService.navState = this.route.snapshot.params["navstart"];
        this._coreService.getClasses(this.constantsService.navState).subscribe(data => {
            this.items =  data;
        },
        error =>{
            this.logger.log("this._coreService.getClasses() ERROR");
        });
    }

    onclick(obj:object):void {

    }
}
