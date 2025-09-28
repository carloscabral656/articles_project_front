import { Routes } from '@angular/router';
import { EditArticlePage } from '../edit-article-page/edit-article-page.component';

export const editArticlesRoutes: Routes = [
  {
    path: 'articles-edit',
    component: EditArticlePage,
  },
];
