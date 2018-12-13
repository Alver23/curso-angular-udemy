// Angular Dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import {SearchComponent} from './components/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: ViewDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRountingModule { }
