import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute,NavigationExtras } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { CoreService } from "../../shared/core.service";
import { LoggerService } from "../../shared/logger.service";
import { ConstantsService } from "../../shared/constants.service";
import { CommonService } from "../../shared/common.service";



@Component({
    selector: "ns-lesson",
    moduleId: module.id,
    templateUrl: "./lesson.component.html",
})
export class LessonComponent implements OnInit , OnDestroy{
    items: object[];
    title:string;
    clas:string;
    subject:string;
    subData:any;
    constructor(
        private route: ActivatedRoute,
        private _coreService:CoreService,
        private logger:LoggerService,
        public constantsService:ConstantsService,
        private routerExtensions: RouterExtensions, 
        private commonService:CommonService
    ) { }

    ngOnInit(): void {
        this.title = "Lesson";
        this.subData = this.route.data.subscribe(data => {
            this.items = data['routeData'];
        });
    }

    ngOnDestroy() {
        this.subData.unsubscribe();
    }

    onSelect(args):void{
        var item:any = this.items[args.index];
        let navextras: NavigationExtras = { 
            queryParams:{"message":JSON.stringify(item)}
        };

        if(this.constantsService.navState == "exam"){
            this.routerExtensions.navigate(['/'+this.constantsService.navState +'/topics'],navextras);
        }else if(this.constantsService.navState == "tutorial"){
            this.constantsService.selectedLessonItem = item;
            this.routerExtensions.navigate(['/tutorialpage'],navextras);
        }
       
    }
}
