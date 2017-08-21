import { Component, OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { CoreService } from "../../shared/core.service";
import { ConstantsService } from "../../shared/constants.service";
import { LoggerService } from "../../shared/logger.service";

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
        private router:Router,
        private routerExtensions: RouterExtensions,
        private _coreService:CoreService,
        private _constantsService:ConstantsService,
        private logger:LoggerService
    ) { }

    ngOnInit(): void {
        this.title = "Topics";
        this.clas = this.route.snapshot.params["clas"];
        this.subject = this.route.snapshot.params["sub"];   
        this.lesson = this.route.snapshot.params["lesson"];
        this._coreService.getTopic(this.clas,this.subject,this.lesson).subscribe(data => {
            this.items =  data;
        },
        error =>{
            this.logger.log("this._coreService.getTopic ERROR");
        });
    }
    getQuestionList(item:object){
        this._coreService.getQuestions(item["class"],item["subject"],item["lesson"],item["topic"]).subscribe(data => {
            this._constantsService.questions =  data;
            this._constantsService.qIndex = 0
            this._constantsService.routeParam = item;
            this._constantsService.selectedQuestion = this._constantsService.questions [0];
            var q = this._constantsService.selectedQuestion;
            this.routerExtensions.navigate(["/quizs/"+q["qtype"],this._constantsService.qIndex]);
        },
        error =>{
            this.logger.log("this._coreService.getQuestions ERROR");
        });
    }
}
