import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoreService } from "../../shared/core.service";

@Component({
    selector: "ns-topic",
    moduleId: module.id,
    templateUrl: "./topic.component.html",
})
export class TopicComponent implements OnInit {
    items: object[];
    title:string;
    clas:string;
    subject:string;
    lesson:string;
    constructor(
        private route: ActivatedRoute,
        private _coreService:CoreService
    ) { }

    ngOnInit(): void {
        this.title = "Topics";
        this.clas = this.route.snapshot.params["clas"];
        this.lesson = this.route.snapshot.params["lesson"];
        this.subject = this.route.snapshot.params["sub"];         
        this._coreService.getTopic(this.clas,this.lesson,this.subject).subscribe(data => {
            this.items =  data;
        },
        error =>{
            console.log(">>>>>>ERROR>>>>>>");
        });
    }
}
