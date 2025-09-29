import { Component, input } from '@angular/core';
import { Article } from '../../../../shared/types/article.type';
import { PillComponent } from '../../../../shared/components/pill/pill.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { LucideAngularModule, SquarePen } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'art-articles-list-item',
  standalone: true,
  templateUrl: './article-list-item.component.html',
  styleUrl: './article-list-item.component.scss',
  imports: [PillComponent, ButtonComponent, LucideAngularModule],
})
export class ArticleListItemComponent {
  article = input.required<Article>();

  readonly SquarePen = SquarePen;

  constructor(private readonly router: Router) {}

  redirectToEditArticle() {
    this.router.navigateByUrl('articles-edit');
  }

  redirectToReadArticle() {
    this.router.navigateByUrl('read-article');
  }
}
