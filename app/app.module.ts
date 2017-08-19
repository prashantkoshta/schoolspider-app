import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//  
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

//
import { StandardComponent } from "./com/standard/standard.component";
import { LessonComponent } from "./com/lesson/lesson.component";
import { SubjectComponent } from "./com/subject/subject.component";
import { TopicComponent } from "./com/topic/topic.component";
//import { QuizComponent } from "./com/quiz/quiz.component";

//
import { CoreService } from "./shared/core.service";
import { ConstantsService } from "./shared/constants.service";


//custome module
import { QuizModule } from "./com/quiz/quiz.module";
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        HttpModule,
        QuizModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        StandardComponent,
        LessonComponent,
        SubjectComponent,
        TopicComponent
    ],
    providers: [
        ItemService,
        CoreService,
        ConstantsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
