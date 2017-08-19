import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QuizComponent } from "./quiz.component";

import { RadioOptionsComponent } from "./radiooptions/radiooptions.component";

const quizRoutes: Routes = [

    { path: "quizs/:clas/:lesson/:sub/:topic", component: QuizComponent,
        children: [
            {path: '',component: RadioOptionsComponent},
            {path: 'tese',component: RadioOptionsComponent}
        ]
    }
];
export const QuizRouting: ModuleWithProviders = RouterModule.forChild(quizRoutes);