// Dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {HomeComponent} from './components/home/home.component';
import {PriceComponent} from './components/price/price.component';
import {ProtectedComponent} from './components/protected/protected.component';

// Services
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'prices', component: PriceComponent},
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuardService]},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
