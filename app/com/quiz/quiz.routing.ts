import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QuizComponent } from "./quiz.component";

import { RadioOptionsComponent } from "./radiooptions/radiooptions.component";
import { MultiSelectOptionsComponent } from "./multiselectoptions/multiselectoptions.component";

const quizRoutes: Routes = [

    { path: "quizs",component: QuizComponent,
        children: [
            {path: "single-select/:qid",component: RadioOptionsComponent},
            {path: "multi-select/:qid",component: MultiSelectOptionsComponent}
        ]
    }
];
export const QuizRouting: ModuleWithProviders = RouterModule.forChild(quizRoutes);