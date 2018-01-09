import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DepartmentService} from "./department.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  private allItems: any[];
  public number;
  formEditDepartment: FormGroup;
  formAddDepartment: FormGroup;
  page = 1;

  constructor(private departmentService: DepartmentService, private modalService: NgbModal,
              private builder: FormBuilder) {
    this.formEditDepartment = builder.group({
      id: [''],
      name: [''],
      number_employee: [''],
      chief_name: ['']
    });

    this.formAddDepartment = builder.group({
      name: [''],
      number_employee: [''],
      chief_name: ['']
    });

    this.getCount();
  }

  ngOnInit() {
    this.getDepartments(this.page);
  }

  getDepartments(i: number) {
    this.departmentService.getDepartments(i).subscribe(data => {
      this.allItems = data;
      console.log(data);
      this.getCount();
    })
  }

  getCount(){
    this.departmentService.getDepartmentsCount().subscribe(data => {
      this.number = <number>data;
    });
  }

  pageChange(i: any){
   this.getDepartments(i);
  }

  openAddDepartment(content){
    this.modalService.open(content);
  }

  onAddDepartment(body:any){
    this.departmentService.addDepartment(body).subscribe(data=>{
      console.log(data);
      this.getDepartments(this.page)
    })
  }

  onDeleteDepartment() {
    this.departmentService.deleteDepartment(this.formEditDepartment.controls['id'].value).subscribe(data => {
      console.log(data);
      this.getDepartments(this.page);
    })
  }
  onUpdateDepartment() {
    console.log(this.formEditDepartment.value);
    this.departmentService.updateDepartment(this.formEditDepartment.controls['id'].value, this.formEditDepartment.value).subscribe(data => {
      console.log(data);
      this.getDepartments(this.page);
      this.formEditDepartment.reset();
    })
  }

  open(content, link) {
    this.modalService.open(content);
    this.departmentService.getDepartment(link).subscribe(data => {
      this.formEditDepartment.patchValue({
        id: data[0].id,
        name: data[0].name,
        number_employee: data[0].number_employee,
        chief_name: data[0].chief_name
      });
    })
  }
}
