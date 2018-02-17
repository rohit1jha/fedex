import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
// import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LoginService {

  constructor(private http: HttpClient) { }

  public loginPin(pin){
    return this.http.get('../assets/login.json')
  }

}