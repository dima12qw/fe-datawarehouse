import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import {DepartmentService} from "./department.service";
import {routing} from "./department.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModalModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgbPaginationModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DepartmentService],
  declarations: [DepartmentComponent]
})
export class DepartmentModule { }
