import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any> {
    let resp = this.http.get("https://pokeapi.co/api/v2/pokemon/");
    return resp;
  }

  getPokemon(url): Observable<any> {
    let resp = this.http.get(url);
    return resp;
  }
}
