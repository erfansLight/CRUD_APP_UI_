import { Routes } from '@angular/router';
import { adminGuard } from './admin/guards/admin.guard';


export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((r) => r.AuthRoutes),
  },
  {
    path: 'main-page',
    loadChildren: () =>
      import('./pages/pages.routes').then((r) => r.PagesRoutes),
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.AdminRoutes),
  },
  {
    path: '**',
    redirectTo: 'main-page',
  },
];
