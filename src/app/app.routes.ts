import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), title: 'AIMAX Berhad — Home' },

  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent), title: 'About Us — AIMAX Berhad' },
  { path: 'about/board-of-directors', loadComponent: () => import('./board-of-directors/board-of-directors.component').then(m => m.BoardOfDirectorsComponent), title: 'Board of Directors — AIMAX Berhad' },
  { path: 'about/board-of-directors/:slug', loadComponent: () => import('./director-detail/director-detail.component').then(m => m.DirectorDetailComponent), title: 'Director Profile — AIMAX Berhad' },

  { path: 'businesses', loadComponent: () => import('./businesses/businesses.component').then(m => m.BusinessesComponent), title: 'Our Businesses — AIMAX Berhad' },
  { path: 'businesses/healthcare', loadComponent: () => import('./healthcare/healthcare.component').then(m => m.HealthcareComponent), title: 'Healthcare — AIMAX Berhad' },
  { path: 'businesses/financial-services', loadComponent: () => import('./financial-services/financial-services.component').then(m => m.FinancialServicesComponent), title: 'Financial Services — AIMAX Berhad' },
  { path: 'businesses/manufacturing', loadComponent: () => import('./manufacturing/manufacturing.component').then(m => m.ManufacturingComponent), title: 'Glove Manufacturing — AIMAX Berhad' },

  { path: 'investor-relations', loadComponent: () => import('./investor-relations/investor-relations.component').then(m => m.InvestorRelationsComponent), title: 'Investor Relations — AIMAX Berhad' },
  { path: 'media-centre', loadComponent: () => import('./media-centre/media-centre.component').then(m => m.MediaCentreComponent), title: 'Media Centre — AIMAX Berhad' },
  { path: 'media-centre/:tab', loadComponent: () => import('./media-centre/media-centre.component').then(m => m.MediaCentreComponent), title: 'Media Centre — AIMAX Berhad' },
  { path: 'contact-us', loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent), title: 'Contact Us — AIMAX Berhad' },

  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent), title: 'Page Not Found — AIMAX Berhad' }
];
