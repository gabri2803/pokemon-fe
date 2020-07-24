import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/servizi/type.service';
import { Type } from 'src/app/model/Type'
import { Pokemon } from 'src/app/model/Pokemon';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  type: Type;
  typeArray: Type[];
  pokemon: Pokemon;
  pokemonArray: Pokemon[];
  selectedType: string;

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.type = new Type();
    this.typeArray = [];
    this.getTypeList();
  }
  getTypeList() {
    let resp = this.typeService.getTypeList();
    console.log(resp);
    resp.subscribe((data) => {
      for (let i of data["results"]) {
        this.type = new Type();
        this.type.nome = i["name"];
        this.type.url = i["url"];
        if (i["name"] != undefined) {
          this.typeArray.push(this.type);
        }
      }
      console.log(this.typeArray);
    })
  }

}
