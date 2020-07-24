import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/servizi/pokemon.service';
import { Pokemon } from 'src/app/model/Pokemon'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  pk: string;

  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemon = new Pokemon();
    this.getDetailsPokemon();
  }

  getDetailsPokemon() {
    let resp = this.pokemonService.getPokemon(this.pk);
    resp.subscribe((data) => {
      this.pokemon.id = data["id"];
      this.pokemon.nome = data["name"].toUpperCase();
      this.pokemon.sprites = data["sprites"]["front_default"];
      this.pokemon.stats = this.statsInString(data);
      this.pokemon.types = this.typesInString(data);
    })
  }
  //PROCEDIMENTO PER TRASFORMARE I RISULTATI MULTIPLI DI TYPES IN UNA SOLA STRINGA
  private typesInString(body: any) {
    let tempTypes = "";
    let typesName = body["types"];
    for (let index = 0; index < typesName.length; index++) {
      tempTypes += body["types"][index]["type"]["name"] + " ";
    }
    return tempTypes;
  }
  //PROCEDIMENTO PER TRASFORMARE I RISULTATI MULTIPLI DI STATS IN UNA SOLA STRINGA
  private statsInString(body: any) {
    let tempStats = "";
    let stats = body["stats"];
    for (let index = 0; index < stats.length; index++) {
      let nameOfStat = body["stats"][index]["stat"]["name"];
      let valueOfStat = body["stats"][index]["base_stat"];
      if (index == 0) {
        tempStats += nameOfStat + ": " + valueOfStat;
      } else {
        tempStats += " - " + nameOfStat + ": " + valueOfStat;
      }
    }
    return tempStats;
  }
}
