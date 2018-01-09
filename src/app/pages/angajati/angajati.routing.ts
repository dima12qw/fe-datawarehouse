import {RouterModule, Routes} from "@angular/router";
import {AngajatiComponent} from "./angajati.component";
import {ModuleWithProviders} from "@angular/core";
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {path: '', component: AngajatiComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
