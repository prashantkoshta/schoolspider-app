import { Component, OnInit, OnDestroy } from "@angular/core";
import {RouterExtensions, } from "nativescript-angular/router";
import { ActivatedRoute,NavigationExtras } from "@angular/router";
import { AssestsService } from "../shared/assets.service";
import { LoggerService } from "../shared/logger.service";
import { ConstantsService } from "../shared/constants.service";
import { CoreService } from "../shared/core.service";
import { CommonService } from "../shared/common.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: any[];
    public SCREEN_ID:string = "itemScreen001";
    constructor(
    private routerExtensions:RouterExtensions,
    public assets:AssestsService,
    private logger:LoggerService,
    public constantsService:ConstantsService,
    private route: ActivatedRoute,
    public commonService:CommonService

) { }

    ngOnInit(): void {
        //this.items = this.itemService.getItems();
        this.constantsService.appConfigData = this.route.snapshot.data['routeData']
        let configData = this.commonService.getScreenConfigData(this.SCREEN_ID);
        this.items = configData.data;
        //
        //Uncomment for testing spcific question layout
        
        //For Question
       // this.constantsService.navState = "exam";
       // this.routerExtensions.navigate(["/topics","exam","1","English","Lesson 1"]);


        //For Tutorial
       // this.constantsService.navState = "tutorial";
        //this.routerExtensions.navigate(["/tutorial/page","1","English","Lesson 1"]);
    }

    onSelect(args):void{
        var listItem:any = this.items[args.index];
        this.logger.log("navigate to "+listItem.role);
        this.constantsService.navState = listItem.role;
        this.routerExtensions.navigate(['/'+listItem.role+'/standards']);
    }
   
}