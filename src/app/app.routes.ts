import { Routes } from '@angular/router';
import { homeRoutes } from './features/home/routes/home-routes.route';
import { loginRoutes } from './features/login/routes/login-routes.route';
import { articlesListRoutes } from './features/articles-list/routes/articles-list.route';
import { createArticlesRoutes } from './features/create-article/routes/routes';
import { editArticlesRoutes } from './features/edit-article/routes/routes';
import { readArticleRoutes } from './features/read-article/routes/read-article.routes';

export const routes: Routes = [
  ...homeRoutes,
  ...loginRoutes,
  ...articlesListRoutes,
  ...createArticlesRoutes,
  ...editArticlesRoutes,
  ...readArticleRoutes,
];
