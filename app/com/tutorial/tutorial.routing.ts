import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TutorialComponent } from "./tutorial.component";

import { ImageTutorComponent } from "./imagetutor/imagetutor.component";

const tutorialRoutes: Routes = [

    { path: "tutorial",component: TutorialComponent,
        children: [
            {path: "page/:clas/:sub/:lesson",component: ImageTutorComponent}
        ]
    }
];
export const TutorialRouting: ModuleWithProviders = NativeScriptRouterModule.forChild(tutorialRoutes);