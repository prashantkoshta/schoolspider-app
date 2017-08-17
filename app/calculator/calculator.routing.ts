import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CalculatorComponent } from "./calculator.component";
import { AuthGuard } from "../auth-guard.service";

const calculatorRoutes: Routes = [
  { path: "calculator", component: CalculatorComponent },
];
export const calculatorRouting: ModuleWithProviders = RouterModule.forChild(calculatorRoutes);