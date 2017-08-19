import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoreService } from "../../shared/core.service";

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
        private _coreService:CoreService
    ) { }

    ngOnInit(): void {
        this.title = "Class";
        console.log(">>>>>>##################>>>>>>");
        this._coreService.getClasses().subscribe(data => {
            this.items =  data;
        },
        error =>{
            console.log(">>>>>>ERROR>>>>>>");
        });
    }

    onclick(obj:object):void {

    }
}
