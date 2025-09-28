import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Reply, Trash2 } from 'lucide-angular';
import { UserAcronimyComponent } from '../../../../shared/components/user-acronimy/user-acronimy.component';

@Component({
    selector: 'art-article-comment',
    templateUrl: './article-comment.component.html',
    styleUrl: './article-comment.component.scss',
    imports: [CommonModule, LucideAngularModule, UserAcronimyComponent]
})
export class ArticleCommentComponent {
  readonly Reply = Reply;
  readonly Trash = Trash2;
}
