import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { Item } from "./item";
import { ItemService } from "./item.service";
import { AssestsService } from "../shared/assets.service";
import { LoggerService } from "../shared/logger.service";
import { ConstantsService } from "../shared/constants.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService, 
    private routerExtensions:RouterExtensions,
    public assets:AssestsService,
    private logger:LoggerService,
    private constantsService:ConstantsService
) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();

        //
        //Uncomment for testing spcific question layout
        
        //For Question
       // this.constantsService.navState = "exam";
       // this.routerExtensions.navigate(["/topics","exam","1","English","Lesson 1"]);


        //For Tutorial
        this.constantsService.navState = "tutorial";
        this.routerExtensions.navigate(["/tutorial/page","1","English","Lesson 1"]);
    }
   
}