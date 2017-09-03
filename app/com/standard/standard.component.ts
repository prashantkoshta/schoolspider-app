import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute,NavigationExtras } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { CoreService } from "../../shared/core.service";
import { LoggerService } from "../../shared/logger.service";
import { ConstantsService } from "../../shared/constants.service";
import { CommonService } from "../../shared/common.service";

@Component({
    selector: "ns-standard",
    moduleId: module.id,
    templateUrl: "./standard.component.html",
})
export class StandardComponent implements OnInit, OnDestroy {
    items: object[];
    title:string;
    sub: any;
    subData:any;
    constructor(
        private route: ActivatedRoute,
        private _coreService:CoreService,
        private routerExtensions:RouterExtensions,
        private logger:LoggerService,
        public constantsService:ConstantsService,
        private commonService:CommonService
    ) {}

    ngOnInit(): void {
        this.logger.log("INIT");
        this.title = "Class";
        //this.items = this.route.snapshot.data['routeData'];
       /* this.sub = this.route.params.subscribe(params => {
            this.logger.log("INIT  sub  =---------"+params["navstart"]);
        });*/
        this.subData = this.route.data.subscribe(data => {
            this.items = data['routeData'];
        });
    }

    ngOnDestroy() {
        //this.sub.unsubscribe();
        this.subData.unsubscribe();
    }

    onclick():void {
       // this.commonService.hideLoader();
    }

    onSelect(args):void{
        var listItem:any = this.items[args.index];
        let navextras: NavigationExtras = { 
            queryParams:{"message":JSON.stringify(listItem)}
        };
        this.routerExtensions.navigate(['/'+this.constantsService.navState +'/subjects'],navextras);
    }

}
