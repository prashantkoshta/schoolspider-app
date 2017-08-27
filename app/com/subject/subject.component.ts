import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoreService } from "../../shared/core.service";
import { LoggerService } from "../../shared/logger.service";
import { ConstantsService } from "../../shared/constants.service";

@Component({
    selector: "ns-subject",
    moduleId: module.id,
    templateUrl: "./subject.component.html",
})
export class SubjectComponent implements OnInit {
    items: object[];
    title:string;
    clas:string;
    constructor(
        private route: ActivatedRoute,
        private _coreService:CoreService,
        private logger:LoggerService,
        public constantsService:ConstantsService
    ) { }

    ngOnInit(): void {
        this.title = "Subject";
        this.clas = this.route.snapshot.params["clas"]; 
        this.items = this.route.snapshot.data['routeData']; 
    }
}
