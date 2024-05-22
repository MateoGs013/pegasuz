import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./components/services/services.component').then(
        (m) => m.ServicesComponent
      ),
  },
  {
    path: 'portafolio',
    loadComponent: () =>
      import('./components/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
];
