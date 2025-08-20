import { Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { LandingPageComponent } from './LandingPage/landingpage.component';


const date = new Date()

export const PagesRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'tierlist',
    component: DashboardComponent
  },
  {
    path: 'tierlist/:year/:month',
    component: DashboardComponent
  }
];
