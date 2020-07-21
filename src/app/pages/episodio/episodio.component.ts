import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodiosService } from 'src/app/services/episodios.service';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css']
})
export class EpisodioComponent implements OnInit {
  episodio;
  cargado = false;

  constructor(private episodios: EpisodiosService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.params
      .subscribe( param => {
        this.episodios.getEpisode(param.id)
          .subscribe( episode => {
            this.episodio = episode;
            this.cargado = true;
          });
      });
  }

}
