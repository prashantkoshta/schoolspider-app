import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoreService } from "../../../shared/core.service";

@Component({
    selector: "ns-radiooptions",
    moduleId: module.id,
    templateUrl: "./radiooptions.component.html",
})
export class RadioOptionsComponent implements OnInit {
    items: object[];
    title:string;
    quizid:string;
    constructor(
        private route: ActivatedRoute,
        private _coreService:CoreService
    ) { }

    ngOnInit(): void {
        this.title = "Question :";
        this.quizid = this.route.snapshot.params["quizid"];        
        this._coreService.getClasses().subscribe(data => {
            this.items =  data;
        },
        error =>{
            console.log(">>>>>>ERROR.....>>>>>>");
        });
    }
}
