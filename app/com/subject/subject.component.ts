import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute,NavigationExtras } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { CoreService } from "../../shared/core.service";
import { LoggerService } from "../../shared/logger.service";
import { ConstantsService } from "../../shared/constants.service";
import { CommonService } from "../../shared/common.service";


@Component({
    selector: "ns-subject",
    moduleId: module.id,
    templateUrl: "./subject.component.html",
})
export class SubjectComponent implements OnInit,OnDestroy {
    items: object[];
    title:string;
    clas:string;
    subData:any;
    constructor(
        private route: ActivatedRoute,
        private _coreService:CoreService,
        private logger:LoggerService,
        public constantsService:ConstantsService,
        private routerExtensions:RouterExtensions
    ) { }

    ngOnInit(): void {
        this.title = "Subject";
        this.subData = this.route.data.subscribe(data => {
            this.items = data['routeData'];
        });
    }
    ngOnDestroy() {
        //this.sub.unsubscribe();
        this.subData.unsubscribe();
    }

    onSelect(args):void{
        var listItem:any = this.items[args.index];
        let navextras: NavigationExtras = { 
            queryParams:{"message":JSON.stringify(listItem)}
        };
        this.routerExtensions.navigate(['/'+this.constantsService.navState +'/lessons'],navextras);
    }

    //[nsRouterLink]="['/lessons',constantsService.navState,item.class,item.subject]" 
}
