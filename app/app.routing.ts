import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { StandardComponent } from "./com/standard/standard.component";
import { LessonComponent } from "./com/lesson/lesson.component";
import { SubjectComponent } from "./com/subject/subject.component";
import { TopicComponent } from "./com/topic/topic.component";
//import { QuizComponent } from "./com/quiz/quiz.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    //{ path: "item/:id", component: ItemDetailComponent },
    { path: "standards", component: StandardComponent },
    { path: "subjects/:clas", component: SubjectComponent },
    { path: "lessons/:clas/:sub", component: LessonComponent },
    { path: "topics/:clas/:lesson/:sub", component: TopicComponent }
    /*,
    { path: "quizs/:clas/:lesson/:sub/:topic", component: QuizComponent,
        children: [
            {path: '',component: QuizComponent},
            {path: 'tese',component: QuizComponent}
        ]
    }*/
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }