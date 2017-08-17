import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { homeRouting } from "./home.routing";
import { HomeComponent } from "./home.component";
import { CalculatorModule } from "./../calculator/calculator.module";
import { EquationListService } from "./../shared/equationlist.service";
import { FnEqConstantsService } from "./../shared/fnconstants.service";


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    homeRouting,
    CommonModule,
    FormsModule,
    CalculatorModule
  ],
  declarations: [
    HomeComponent
  ],
  providers:[EquationListService,FnEqConstantsService]
})
export class HomeModule { }
