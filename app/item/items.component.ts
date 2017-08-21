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

    constructor(private itemService: ItemService, private routerExtensions:RouterExtensions,
    public assets:AssestsService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        //
        //Uncomment for testing spcific question layout
        //
        //this.routerExtensions.navigate(["/topics","1","English","Lesson 1"]);
    }
}