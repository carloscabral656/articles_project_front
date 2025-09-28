import { Routes } from '@angular/router';
import { CreateArticlePage } from '../create-article-page/create-article-page.component';

export const createArticlesRoutes: Routes = [
  {
    path: 'articles-create',
    component: CreateArticlePage,
  },
];
