import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoreService } from "../../shared/core.service";

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
        private _coreService:CoreService
    ) { }

    ngOnInit(): void {
        this.title = "Subject";
        this.clas = this.route.snapshot.params["clas"];  
        this._coreService.getSubjects(this.clas).subscribe(data => {
            this.items =  data;
        },
        error =>{
            console.log(">>>>>>ERROR>>>>>>");
        });
    }
}