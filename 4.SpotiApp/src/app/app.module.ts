import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// Routes
import {APP_ROUTING} from './app.routes';


import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {SpotifyService} from './service/spotify.service';
import { CardsComponent } from './components/cards/cards.component';
import { ImagePipe } from './pipes/image.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ArtistComponent } from './components/artist/artist.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ErrorComponent } from './components/shared/error/error.component';
import { ErrorPipe } from './pipes/error.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    CardsComponent,
    ImagePipe,
    LoadingComponent,
    ArtistComponent,
    DomseguroPipe,
    ErrorComponent,
    ErrorPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
