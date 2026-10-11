import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((module) => module.Home),
    title: 'Paw & Home — Find your new best friend',
  },
  {
    path: 'pets/:id',
    loadComponent: () =>
      import('./details/details').then((module) => module.Details),
    title: 'Meet your new best friend — Paw & Home',
  },
  { path: '**', redirectTo: '' },
];
