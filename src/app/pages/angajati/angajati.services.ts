import {Headers, Http} from '@angular/http';
import {Inject, Injectable} from "@angular/core";
import {HttpService} from "./http.service";

@Injectable()
export class AngajatiServices {
  private _angajatiUrl = this._apiBase + 'angajati';

  constructor(private http: Http, @Inject('apiBase') private _apiBase: string) {

  }


  getAngajati(i: number) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.get('/v1/api/angajati' + '?page=' + i + '&size=5', {headers: headers}).map(res => <any>res.json()).map((data) => {
      console.log(data);
      return data;
    })
  }

  getLista() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.get('/v1/api/angajati/lista', {headers: headers}).map(res => <any>res.json()).map((data) => {
      console.log(data);
      return data;
    })
  }

  getAngajatiCount() {
    return this.http.get( '/v1/api/angajati/count').map(res => res.json()).map((data) => {
      return data
    })
  }

  getAngajat(url: string) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.get(url, {headers: headers}).map(res => res.json()).map((data) => {
      return data;
    })
  }

  updateAngajat(id: number, body: any) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.put( '/v1/api/angajati/' + id, body, {headers: headers}).map(res => res).map((data) => {
      return data;
    })
  }

  deleteAngajat(id: number) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.delete( '/v1/api/angajati/' + id, {headers: headers}).map(res => res).map((data) => {
      return data;
    })
  }

  addAngajat(body: any) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.post('/v1/api/angajati/', body, {headers: headers}).map(res => res).map((data) => {
      return data
    })
  }

  getAngajatiFiltered(filter:any){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.get(this._apiBase + 'angajat/filter?name=' + filter, {headers:headers}).map(res=>res.json()).map((data)=>{
      return data
    })
  }
}
