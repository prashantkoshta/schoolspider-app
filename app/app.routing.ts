import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { StandardComponent } from "./com/standard/standard.component";
import { LessonComponent } from "./com/lesson/lesson.component";
import { SubjectComponent } from "./com/subject/subject.component";
import { TopicComponent } from "./com/topic/topic.component";
import { LandingComponent } from "./com/landing/landing.component";
import { RouteResolveService } from "./shared/routeresolve.service";



const routes: Routes = [
    { path: "", redirectTo: "/landing", pathMatch: "full" },

    { path: "landing", component: LandingComponent },

    { path: "items", component: ItemsComponent, resolve: { routeData: RouteResolveService }},

    { path: "exam",
        children: [
            { path: "standards", component: StandardComponent, resolve: { routeData: RouteResolveService }},
            { path: "subjects", component: SubjectComponent , resolve: { routeData: RouteResolveService }},
            { path: "lessons", component: LessonComponent, resolve: { routeData: RouteResolveService } },
            { path: "topics", component: TopicComponent , resolve: { routeData: RouteResolveService }}
        ]
    },

    { path: "tutorial",
        children: [
            { path: "standards", component: StandardComponent, resolve: { routeData: RouteResolveService }},
            { path: "subjects", component: SubjectComponent , resolve: { routeData: RouteResolveService }},
            { path: "lessons", component: LessonComponent, resolve: { routeData: RouteResolveService } },
            { path: "topics", component: TopicComponent , resolve: { routeData: RouteResolveService }}
        ]
    }



    //{ path: "", redirectTo: "/items", pathMatch: "full" },
    /*
    { path: "items", component: ItemsComponent, resolve: { routeData: RouteResolveService }},
    { path: "standards/:navstart", component: StandardComponent, resolve: { routeData: RouteResolveService }},
    { path: "subjects/:navstart/:clas", component: SubjectComponent , resolve: { routeData: RouteResolveService }},
    { path: "lessons/:navstart/:clas/:sub", component: LessonComponent, resolve: { routeData: RouteResolveService } },
    { path: "topics/:navstart/:clas/:sub/:lesson", component: TopicComponent , resolve: { routeData: RouteResolveService }}
    */
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }