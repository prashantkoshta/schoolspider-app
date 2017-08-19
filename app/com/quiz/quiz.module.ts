import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//
import { CoreService } from "../../shared/core.service";
import { ConstantsService } from "../../shared/constants.service";
//
//
import { QuizRouting } from "./quiz.routing";
import { QuizComponent } from "./quiz.component";
import { RadioOptionsComponent } from "./radiooptions/radiooptions.component";
import { MultiSelectOptionsComponent } from "./multiselectoptions/multiselectoptions.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    QuizRouting,
    CommonModule,
    FormsModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    QuizComponent,
    RadioOptionsComponent,
    MultiSelectOptionsComponent
  ],
  providers:[CoreService,ConstantsService]
})
export class QuizModule { }