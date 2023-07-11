import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Acck } from '../models/Acck';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcckService {

  acckURL = 'http://localhost:8080/api/accks/';

  constructor(private http: HttpClient) { }

  getAccks(): Observable<Acck[]>{
    return this.http.get<Acck[]>(this.acckURL);
  }
  getAccksById(id: number): Observable<Acck> {
    return this.http.get<Acck>(this.acckURL + id);
  }
  createAcck(acck: Acck): Observable<any> {
    return this.http.post<any>(this.acckURL, acck);
  }
  updateAcck(id: number, acck: Acck): Observable<any> {
    return this.http.put<any>(this.acckURL + `${id}`, acck);
  }
  deleteAccksById(id: number): Observable<any> {
    return this.http.delete<any>(this.acckURL + id);
  }
}
