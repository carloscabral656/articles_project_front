import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ListPillComponent } from '../../../shared/components/list-pill/list-pill.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { PillOption } from '../../../shared/types/pill-option.type';
import { ArticlePublicationInfo } from '../../../shared/components/article-publication-info/article-publication-info.component';
import { TextAreaComponent } from '../../../shared/components/text-area/text-area.component';
import { ArticleCommentsListComponent } from '../components/article-comments-list/article-comments-list.component';

@Component({
  selector: 'art-read-article-page',
  standalone: true,
  templateUrl: './read-article-page.component.html',
  styleUrl: './read-article-page.component.scss',
  imports: [
    CommonModule,
    ButtonComponent,
    ListPillComponent,
    InputComponent,
    ArticlePublicationInfo,
    TextAreaComponent,
    ArticleCommentsListComponent,
  ],
})
export class ReadArticlePage {
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
}
