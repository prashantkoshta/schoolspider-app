import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TutorialComponent } from "./tutorial.component";

import { ImageTutorComponent } from "./imagetutor/imagetutor.component";
import { TutorialRouteResolveService } from "./tutorialrouteresolve.service";

const tutorialRoutes: Routes = [

    { path: "tutorialpage",component: TutorialComponent, resolve: { routeData: TutorialRouteResolveService },
        children: [
           // {path: ":clas/:sub/:lesson",},
            {path: "page",component: ImageTutorComponent}
        ]
    }
];
export const TutorialRouting: ModuleWithProviders = NativeScriptRouterModule.forChild(tutorialRoutes);