import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  episodes: Observable<any>;
  episode: Observable<any>;
  personajes: Observable<any>;

  constructor(private http: HttpClient) { }

  // Episodios

  getAllEpisodes() {
    const urlApi = 'https://rickandmortyapi.com/api/episode';
    return this.http.get(urlApi);
  }

  // Episodio
  getEpisode(id: string) {
    const urlApi = `https://rickandmortyapi.com/api/episode/${id}`;
    return (this.episode = this.http.get(urlApi));
  }

  // Personajes
  getPersonajesEpi() {
    
  }
}
