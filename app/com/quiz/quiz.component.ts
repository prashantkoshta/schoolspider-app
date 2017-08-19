import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoreService } from "../../shared/core.service";

@Component({
    selector: "ns-quiz",
    moduleId: module.id,
    templateUrl: "./quiz.component.html",
})
export class QuizComponent implements OnInit {
    questions: object[];
    title:string;
    constructor(
        private route: ActivatedRoute,
        private _coreService:CoreService
    ) { }

    ngOnInit(): void {
        this.title = "Quiz";
        var params = this.route.snapshot.params;        
        this._coreService.getQuestions(params["clas"],params["subject"],params["lesson"],params["topic"]).subscribe(data => {
            this.questions =  data;
        },
        error =>{
            console.log(">>>>>>ERROR>>>>>>");
        });
    }
}
