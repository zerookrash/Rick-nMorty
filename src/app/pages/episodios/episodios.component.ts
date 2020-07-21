import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from '../../services/episodios.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {
  episodios;
  episo;
  constructor( private episodes: EpisodiosService ) { }

  ngOnInit(): void {
    this.getListEpisodes();
  }

  getListEpisodes(): void {
    this.episodes.getAllEpisodes()
      .subscribe((episodes) => {
        this.episo = episodes;
        this.episodios = this.episo.results;
      });
  }

}
