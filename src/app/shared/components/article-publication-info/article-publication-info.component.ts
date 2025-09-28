import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'art-article-publication-info',
    templateUrl: './article-publication-info.component.html',
    styleUrl: './article-publication-info.component.scss',
    imports: [CommonModule]
})
export class ArticlePublicationInfo {
  publicationInfo = input.required<{
    authorName: string;
    publicationDate: Date;
  }>();
}
