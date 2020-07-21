import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { PagenofoundComponent } from './pages/pagenofound/pagenofound.component';
import { RegitroComponent } from './pages/regitro/regitro.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { EpisodioComponent } from './pages/episodio/episodio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'episodios', component: EpisodiosComponent },
  { path: 'registro', component: RegitroComponent },
  { path: 'personaje/:id', component: PersonajeComponent },
  { path: 'episodio/:id', component: EpisodioComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenofoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
