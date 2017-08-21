import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";

import { CoreService } from "../../shared/core.service";
import { LoggerService } from "../../shared/logger.service";
import { ConstantsService } from "../../shared/constants.service";

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
        private _coreService:CoreService,
        private logger:LoggerService,
        private constantsService:ConstantsService,
        private routerExtensions: RouterExtensions, 
    ) { }

    ngOnInit(): void {
        this.title = "Lesson";
        this.clas = this.route.snapshot.params["clas"];
        this.subject = this.route.snapshot.params["sub"];
        this._coreService.getLessons( this.constantsService.navState ,this.clas,this.subject).subscribe(data => {
            this.items =  data;
        },
        error =>{
            this.logger.log("this._coreService.getLessons Error");
        });
        
    }

    onSelect(args):void{
        
        var item:any = this.items[args.index];
        if(this.constantsService.navState == "exam"){
            this.routerExtensions.navigate(['/topics',this.constantsService.navState,item.class,this.subject,item.lesson],
                {
                    animated:true,
                    transition: {
                        name: "slideInLeft",
                        duration: 1000,
                        curve: "linear"
                    }
                }
            );
        }else if(this.constantsService.navState == "tutorial"){
            this.routerExtensions.navigate(['/tutorial/page',item.class,this.subject,item.lesson],
                {
                    animated:true,
                    transition: {
                        name: "slideInLeft",
                        duration: 1000,
                        curve: "linear"
                    }
                }
            );
        }
       
    }
}
