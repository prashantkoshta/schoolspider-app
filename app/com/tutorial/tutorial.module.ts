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
import { TutorialRouting } from "./tutorial.routing";
import { TutorialComponent } from "./tutorial.component";
import { ImageTutorComponent } from "./imagetutor/imagetutor.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    TutorialRouting,
    CommonModule,
    FormsModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    TutorialComponent,
    ImageTutorComponent
  ],
  providers:[CoreService,ConstantsService]
})
export class TutorialModule { }