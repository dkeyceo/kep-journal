import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEDP } from '../models/UserEDP';
import { UserCreateRequest } from '../models/UserCreateRequest';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersEDPURL = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) { }

  getUsersEDP(): Observable<UserEDP[]>{
    return this.http.get<UserEDP[]>(this.usersEDPURL);
  }

  createUserEDP(userCreateRequest: UserCreateRequest): Observable<any>{
    return this.http.post<Observable<any>>(this.usersEDPURL, userCreateRequest );
  }
}
