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
        public constantsService:ConstantsService,
        private logger:LoggerService
    ) { }

    ngOnInit(): void {
        this.title = "Topics";
        this.clas = this.route.snapshot.params["clas"];
        this.subject = this.route.snapshot.params["sub"];   
        this.lesson = this.route.snapshot.params["lesson"];
        this.items = this.route.snapshot.data['routeData'];
    }
    
}
