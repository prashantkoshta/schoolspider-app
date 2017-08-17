import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { calculatorRouting } from "./calculator.routing";
import { CalculatorComponent } from "./calculator.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    calculatorRouting
  ],
  declarations: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }