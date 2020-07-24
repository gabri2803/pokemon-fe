import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/model/Pokemon';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  pokemonModal: Pokemon;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pokemonModal)
  }

}
