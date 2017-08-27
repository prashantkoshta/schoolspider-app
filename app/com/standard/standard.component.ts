import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoreService } from "../../shared/core.service";
import { LoggerService } from "../../shared/logger.service";
import { ConstantsService } from "../../shared/constants.service";
import { CommonService } from "../../shared/common.service";

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
        public constantsService:ConstantsService,
        private commonService:CommonService
    ) {}

    ngOnInit(): void {
        this.title = "Class";
        this.constantsService.navState = this.route.snapshot.params["navstart"];
        this.items = this.route.snapshot.data['routeData'];
    }

    onclick():void {
       // this.commonService.hideLoader();
    }
}
