import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ArticlePublicationInfo } from '../../../shared/components/article-publication-info/article-publication-info.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TextAreaComponent } from '../../../shared/components/text-area/text-area.component';
import { PillOption } from '../../../shared/types/pill-option.type';
import { ArticleCommentsListComponent } from '../components/article-comments-list/article-comments-list.component';
import { ReadArticleStore } from '../store/read-article-page.component-store';

@Component({
  selector: 'art-read-article-page',
  standalone: true,
  templateUrl: './read-article-page.component.html',
  styleUrl: './read-article-page.component.scss',
  imports: [
    CommonModule,
    ButtonComponent,
    ArticlePublicationInfo,
    TextAreaComponent,
    ArticleCommentsListComponent,
  ],
  providers: [ReadArticleStore],
})
export class ReadArticlePage {
  article = this.readArticleStore.article;
  loading = this.readArticleStore.loading;

  articleAuthorData = computed(() => {
    const author = this.article()?.author;
    const pushedAt = this.article()?.publishedAt;

    return {
      authorName: author ?? '',
      publicationDate: pushedAt ?? new Date(),
    };
  });

  articleTypes = signal<PillOption[]>([
    {
      id: 1,
      value: 'Front-end',
    },
    {
      id: 2,
      value: 'Back-end',
    },
    {
      id: 3,
      value: 'Mobile',
    },
    {
      id: 4,
      value: 'UI/UX',
    },
    {
      id: 5,
      value: 'DevOps',
    },
    {
      id: 6,
      value: 'Data Science',
    },
    {
      id: 7,
      value: 'Cybersecurity',
    },
    {
      id: 8,
      value: 'AI & Machine Learning',
    },
  ]);

  data = {
    authorName: 'Carlos',
    publicationDate: new Date(),
  };

  constructor(private readArticleStore: ReadArticleStore) {}
}
