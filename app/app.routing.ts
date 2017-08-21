import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { StandardComponent } from "./com/standard/standard.component";
import { LessonComponent } from "./com/lesson/lesson.component";
import { SubjectComponent } from "./com/subject/subject.component";
import { TopicComponent } from "./com/topic/topic.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "standards/:navstart", component: StandardComponent},
    { path: "subjects/:navstart/:clas", component: SubjectComponent },
    { path: "lessons/:navstart/:clas/:sub", component: LessonComponent },
    { path: "topics/:navstart/:clas/:sub/:lesson", component: TopicComponent }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }