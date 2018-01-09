import {Inject, Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class DepartmentService {
  private _departmentUrl = this._apiBase + 'api/departament';

  constructor(private http: Http, @Inject('apiBase') private _apiBase: string) {
  }

  getDepartments(i: number) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.get('/v2/api/departament' + '?page=' + i + '&size=5', {headers: headers}).map(res => <any>res.json()).map((data) => {
      console.log(data);
      return data;
    })
  }

  getDepartmentsCount() {
    return this.http.get('/v2/api/departament' + '/count').map(res => res.json()).map((data) => {
      return data
    })
  }

  getDepartment(url: string) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.get(url, {headers: headers}).map(res => res.json()).map((data) => {
      return data;
    })
  }

  updateDepartment(id: number, body: any) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.put('/v2/api/departament' + '/' + id, body, {headers: headers}).map(res => res).map((data) => {
      return data;
    })
  }

  deleteDepartment(id: number) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.delete('/v2/api/departament' + '/' + id, {headers: headers}).map(res => res).map((data) => {
      return data;
    })
  }

  addDepartment(body: any) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.post('/v2/api/departament', body, {headers: headers}).map(res => res).map((data) => {
      return data
    })
  }

  getDepartmentFiltered(filter: any) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.get(this._apiBase + 'departament/filter?name=' + filter, {headers: headers}).map(res => res.json()).map((data) => {
      return data
    })
  }
}
