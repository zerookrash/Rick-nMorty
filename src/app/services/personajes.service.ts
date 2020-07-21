import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  characters: Observable<any>;
  character: Observable<any>;

  constructor( private http: HttpClient ) { }

  // Personajes
  getAllCharacters() {
    const urlApi = 'https://rickandmortyapi.com/api/character';
    return this.http.get(urlApi);
  }

  getCharacterById(id: string) {
    const urlApi = `https://rickandmortyapi.com/api/character/${id}`;
    return (this.character = this.http.get(urlApi));
  }
}
