import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { RegitroComponent } from './pages/regitro/regitro.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PagenofoundComponent } from './pages/pagenofound/pagenofound.component';

import { HttpClientModule } from '@angular/common/http';

// Servicios
import { PersonajesService } from './services/personajes.service';
import { PersonajeComponent } from './pages/personaje/personaje.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonajesComponent,
    EpisodiosComponent,
    RegitroComponent,
    NavbarComponent,
    FooterComponent,
    PagenofoundComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PersonajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
