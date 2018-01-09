import {Component, OnInit} from '@angular/core';
import {PagerService} from "./pager.service";
import {AngajatiServices} from "./angajati.services";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-angajati',
  templateUrl: './angajati.component.html',
  styleUrls: ['./angajati.component.scss']
})
export class AngajatiComponent implements OnInit {
  private allItems: any[];
  private numbers: any[];
  public number = 11;
  formEditEmpl: FormGroup;
  formAddEmpl: FormGroup;
  page = 1;

  constructor(private pagerService: PagerService, private angajatiService: AngajatiServices,
              private modalService: NgbModal, builder: FormBuilder) {
    this.formEditEmpl = builder.group({
      id: [''],
      name: [''],
      salary: ['']
    });

    this.formAddEmpl = builder.group({
      name: [''],
      salary: ['']
    });

    angajatiService.getAngajatiCount().subscribe(data => {
      // console.log(data);
      this.number = <number>data;
      console.log(this.number);
    })
  }

  ngOnInit() {
    this.getAngajati(this.page);

  }

  getAngajati(i) {
    this.angajatiService.getAngajati(i).subscribe(data => {
      this.allItems = data;
      console.log(this.allItems)
    });
  }

  getCount() {
    this.angajatiService.getAngajatiCount().subscribe(data => {
      // console.log(data);
      this.number = <number>data;
      console.log(this.number);
    })
  }

  pageChange(i: any) {
    console.log(i);
    this.angajatiService.getAngajati(i).subscribe(data => {
      this.allItems = data;
      console.log(this.allItems);
      this.getCount();
    });
  }

  open(content, link) {
    this.modalService.open(content);
    this.angajatiService.getAngajat(link).subscribe(data => {
      this.formEditEmpl.patchValue({
        id: data[0].id,
        name: data[0].name,
        salary: data[0].salary
      });
    })
  }

  onUpdateAngajat() {
    console.log(this.formEditEmpl.value);
    this.angajatiService.updateAngajat(this.formEditEmpl.controls['id'].value, this.formEditEmpl.value).subscribe(data => {
      console.log(data);
      this.getAngajati(this.page);
      this.formEditEmpl.reset();
    })
  }

  onDeleteAngajat() {
    this.angajatiService.deleteAngajat(this.formEditEmpl.controls['id'].value).subscribe(data => {
      console.log(data);
      this.getAngajati(this.page);
    })
  }

  openAddEmployer(content) {
    this.modalService.open(content);
  }

  onSubmit(body: any) {
    console.log(body);
    this.angajatiService.addAngajat(body).subscribe(data => {
      console.log(data);
      this.getAngajati(this.page);
    })
  }

  onKeyPress(event) {
    console.log(event.target.value);
    if (event.target.value != '') {
      this.angajatiService.getAngajatiFiltered(event.target.value).subscribe(data => {
        this.allItems = data;
      })
    } else {
      this.getAngajati(this.page);
    }
  }
}
