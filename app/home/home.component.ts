import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";

import { ICommonData } from "./../shared/icommondata.interface";

@Component({
    selector: 'fn-home',
    templateUrl: 'home/home.component.html',
    styleUrls: ["app.css","home/home.component.css"]
})
export class HomeComponent implements OnInit {
     items:Array<Object>;

     @ViewChild("initialContainer") initialContainer: ElementRef;
    constructor(private router: Router,
    private page: Page) {
        this.items = new Array<Object>();
     }

    ngOnInit() {
        this.page.actionBarHidden = true;
        var d1:Object = {
            "key":"Exam",
            "action":"SHOW_CLASS",
            "value":"Exam"
        };
        var d2:Object ={
            "key":"Tutorial",
            "action":"SHOW_TUTORIAL",
            "value":"Tutorial"
        };
        var data:Array<Object> = new Array<Object>();
        data.push(d1);
        data.push(d2);
        this.items =  data;
    }
    
    actionOnSelect(arg:Object){
        switch(arg["action"]){
            case "SHOW_CLASS":
                // this.router.navigate([arg.pageurl]);
            default:
        }
    }
}