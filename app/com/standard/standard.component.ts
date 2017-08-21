import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoreService } from "../../shared/core.service";
import { LoggerService } from "../../shared/logger.service";

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
        private logger:LoggerService
    ) { }

    ngOnInit(): void {
        this.title = "Class";
        this._coreService.getClasses().subscribe(data => {
            this.items =  data;
        },
        error =>{
            this.logger.log("this._coreService.getClasses() ERROR");
        });
    }

    onclick(obj:object):void {

    }
}
