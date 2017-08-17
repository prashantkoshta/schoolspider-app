import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";

import { EquationListService } from "./../shared/equationlist.service";
import { IEquationData } from "./../shared/iequationdata.interface";

@Component({
    selector: 'fn-home',
    templateUrl: 'home/home.component.html',
    styleUrls: ["app.css","home/home.component.css"]
})
export class HomeComponent implements OnInit {
     items:Array<IEquationData>;

     @ViewChild("initialContainer") initialContainer: ElementRef;
    constructor(private router: Router,
    private page: Page,
    private _eqListService:EquationListService) {
        this.items = new Array<IEquationData>();
     }

    ngOnInit() {
    this.page.actionBarHidden = true;
       this._eqListService.getFinEquListData().subscribe(data => {
            this.items =  data;
        },
        error =>{
            console.log(">>>>>>ERROR>>>>>>");
        });
    }
    
    actionOnSelect(arg:IEquationData){
        switch(arg.action){
            case "SIMINT":
                 this.router.navigate([arg.pageurl]);
            default:
        }
    }
}