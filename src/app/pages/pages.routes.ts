import { Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';


const date = new Date()

export const PagesRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: ':year/:month',
    component: DashboardComponent
  }
];
