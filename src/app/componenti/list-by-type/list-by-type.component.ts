import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/model/Pokemon';

@Component({
  selector: 'app-list-by-type',
  templateUrl: './list-by-type.component.html',
  styleUrls: ['./list-by-type.component.css']
})
export class ListByTypeComponent implements OnInit {

  @Input()
  pokemonList: Pokemon[];

  constructor() { }

  ngOnInit(): void {
  }

}
