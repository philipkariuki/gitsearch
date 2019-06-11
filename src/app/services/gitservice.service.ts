import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './../user';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {

  constructor(private http:HttpClient) {}
    getUser(name: string): Observable<User>{
      const url= `https://api.github.com/users/${name}` + '?access_token=' + environment.apitoken;
      return this.http.get<User>(url);
    }

}
