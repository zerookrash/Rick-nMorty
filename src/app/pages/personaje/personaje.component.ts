import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
personaje;
cargado = false;
  constructor( private characters: PersonajesService,
               private router: ActivatedRoute ) { }

  ngOnInit(): void {

    this.router.params
      .subscribe( param => {
        this.characters.getCharacterById(param.id)
          .subscribe( character => {
            this.personaje = character;
            this.cargado = true;
          });
      });

  }

}
