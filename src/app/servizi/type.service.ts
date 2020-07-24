import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) {

  }
  getTypeList(): Observable<any> {
    let resp = this.http.get("https://pokeapi.co/api/v2/type/");
    return resp;
  }
  getNomiPkList(tipo): Observable<any> {
    let resp = this.http.get("https://pokeapi.co/api/v2/type/" + tipo);
    return resp;
  }
}
