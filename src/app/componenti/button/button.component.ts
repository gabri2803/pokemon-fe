import { Component, OnInit, Input } from '@angular/core';
import { Type } from 'src/app/model/Type';
import { Pokemon } from 'src/app/model/Pokemon';
import { TypeService } from 'src/app/servizi/type.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  typeList: Type;

  pokemon: Pokemon;
  pokemonArray: Pokemon[];
  selectedType: string;

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
  }

  getNomiPk(tipo) {
    this.pokemonArray = [];
    this.selectedType = tipo;
    let resp = this.typeService.getNomiPkList(this.selectedType);
    resp.subscribe((data) => {
      for (let i of data["pokemon"]) {
        this.pokemon = new Pokemon();
        this.pokemon.nome = i["name"];
        this.pokemon.url = i["url"];
        if (data != undefined) {
          this.pokemonArray.push(this.pokemon);
        }
      }
      console.log(this.pokemonArray)
    })
  }
}
