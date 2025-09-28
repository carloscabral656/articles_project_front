import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ArticleCommentComponent } from '../article-comment/article-comment.component';
import { Comment } from '../../../../shared/models/comment.model';

@Component({
  selector: 'art-article-comments-list',
  standalone: true,
  templateUrl: './article-comments-list.component.html',
  styleUrl: './article-comments-list.component.scss',
  imports: [CommonModule, ArticleCommentComponent],
})
export class ArticleCommentsListComponent {
  comments = input.required<Comment[]>();
}
