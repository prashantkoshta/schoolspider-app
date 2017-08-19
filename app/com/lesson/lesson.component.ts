import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoreService } from "../../shared/core.service";

@Component({
    selector: "ns-lesson",
    moduleId: module.id,
    templateUrl: "./lesson.component.html",
})
export class LessonComponent implements OnInit {
    items: object[];
    title:string;
    clas:string;
    subject:string;
    constructor(
        private route: ActivatedRoute,
        private _coreService:CoreService
    ) { }

    ngOnInit(): void {
        this.title = "Lesson";
        this.clas = this.route.snapshot.params["clas"];
        this.subject = this.route.snapshot.params["sub"];  
        this._coreService.getLessons(this.clas,this.subject).subscribe(data => {
            this.items =  data;
        },
        error =>{
            console.log(">>>>>>ERROR>>>>>>");
        });
    }
}
