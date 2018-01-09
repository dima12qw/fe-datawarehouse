import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngajatiComponent } from './angajati.component';
import {routing} from './angajati.routing'
import {AngajatiServices} from "./angajati.services";
import {PagerService} from "./pager.service";
import {HttpService} from "./http.service";
import {NgbModalModule, NgbPagination, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [AngajatiComponent],
  providers: [AngajatiServices, PagerService, HttpService]
})
export class AngajatiModule { }
