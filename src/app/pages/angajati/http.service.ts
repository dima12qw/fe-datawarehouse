import {Injectable} from "@angular/core";
import {Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpService extends Http {
  constructor(backend: XHRBackend, options:RequestOptions){
    super(backend, options);
  }
}
