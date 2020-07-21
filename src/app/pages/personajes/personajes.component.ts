import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
personajes;
char;
  constructor( private characters: PersonajesService) { }

  ngOnInit(): void {
    this.getListCharacters();
  }

  getListCharacters(): void {
    this.characters.getAllCharacters()
      .subscribe((characters) => {
        this.char = characters;
        this.personajes = this.char.results;
      });
  }
}
