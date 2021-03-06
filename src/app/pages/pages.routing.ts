import {Routes, RouterModule} from '@angular/router';
import {Pages} from './pages.component';
import {ModuleWithProviders} from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      {path: '', redirectTo: 'angajati', pathMatch: 'full'},
      {path: 'angajati', loadChildren: 'app/pages/angajati/angajati.module#AngajatiModule'},
      {path: 'department', loadChildren: 'app/pages/department/department.module#DepartmentModule'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
