// Angular Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Services
import { MovieService } from './providers/movie.service';

import { AppComponent } from './app.component';
import { AppRountingModule } from './/app-rounting.module';
import { HomeComponent } from './components/home/home.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

// Pipes
import { MovieTransformPipe } from './pipes/movie-transform.pipe';
import { SearchComponent } from './components/search/search.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewDetailComponent,
    NavbarComponent,
    CardComponent,
    MovieTransformPipe,
    SearchComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRountingModule,
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
