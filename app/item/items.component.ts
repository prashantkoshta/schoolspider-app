import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { Item } from "./item";
import { ItemService } from "./item.service";
import { AssestsService } from "../shared/assets.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private routerExtensions:RouterExtensions,
    public assets:AssestsService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();

        //'/topics',item.class,this.subject,item.lessonç
        this.routerExtensions.navigate(["/topics","1","English","Lesson 1"]);
    }
}