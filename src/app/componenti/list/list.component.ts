import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servizi/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemonArray: string[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonArray = [];
    this.getPokemonUrl();
  }

  getPokemonUrl() {
    let resp = this.pokemonService.getPokemonList();
    console.log(resp)
    resp.subscribe((data) => {
      for (let i of data["results"]) {
        let ciccioBello = i["url"];
        this.pokemonArray.push(ciccioBello);
      }
      console.log(this.pokemonArray);
    })
  }

}
