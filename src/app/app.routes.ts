import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/tierlist',
        pathMatch: 'full',
      },
      {
        path: 'tierlist',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
