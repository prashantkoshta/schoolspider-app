import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { CalcualtionService } from "./../shared/calculation.service";

@Component({
    selector: 'fn-calculator',
    templateUrl: 'calculator/calculator.component.html',
    styleUrls: ["app.css","calculator/calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
    amount:number;
    rate:number;
    year:number;
    si:number;
    btnName:string;
    arTimes:Array<string>;
    selectedTimeIndex:number;
    @ViewChild("initialContainer") initialContainer: ElementRef;
    @ViewChild("amountTxtField") amountTxtField: ElementRef;
    @ViewChild("timeTxtField") timeTxtField: ElementRef;
    @ViewChild("rateTxtField") rateTxtField: ElementRef;
    @ViewChild("resultLab") resultLab: ElementRef;
     
    constructor(private router: Router, private page: Page,private _calculate:CalcualtionService) {
        this.btnName ="Calculate Now";
        this.arTimes = new Array<string>("year","quarter","month","week","day");
        this.selectedTimeIndex = 0;

    }
    ngOnInit() {
        this.page.actionBarHidden = true;
    }
    goToHome(){
         this.router.navigate(["/home"]);
    }

    focusRate(){
        this.rateTxtField.nativeElement.focus();
    }

    focusTime(){
        this.timeTxtField.nativeElement.focus();
    }

    siCalcualte():void{
        this.si = this._calculate.getSI(this.amount,this.rate,this.year,this.arTimes[this.selectedTimeIndex]);
    }

    selectedIndexChanged():void{
        console.log(this.selectedTimeIndex);
    }

    navigatePrev():void{
        this.router.navigate(["/home"]);
    }
    
}