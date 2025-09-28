import { Component, computed, input } from '@angular/core';
import { Pagination } from '../../../../shared/types/pagination.type';
import { Article } from '../../../../shared/types/article.type';
import { ArticleListItemComponent } from '../article-list-item/article-list-item.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

@Component({
    selector: 'art-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrl: './articles-list.component.scss',
    imports: [ArticleListItemComponent, PaginationComponent]
})
export class ArticlesListComponent {
  articlesPagination = input.required<Pagination<Article>>();

  articles = computed(() => {
    return this.articlesPagination().items;
  });
}
