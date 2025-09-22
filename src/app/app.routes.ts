import { Routes } from '@angular/router';
import { homeRoutes } from './features/home/routes/home-routes.route';
import { loginRoutes } from './features/login/routes/login-routes.route';

export const routes: Routes = [...homeRoutes, ...loginRoutes];
