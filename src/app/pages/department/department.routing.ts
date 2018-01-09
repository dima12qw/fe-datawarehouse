import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DepartmentComponent} from "./department.component";
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {path: '', component: DepartmentComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
