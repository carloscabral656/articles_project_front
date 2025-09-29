import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  input,
  signal,
  ViewChild,
} from '@angular/core';
import {
  CircleX,
  ClosedCaption,
  LucideAngularModule,
  Reply,
  Trash2,
} from 'lucide-angular';
import { UserAcronimyComponent } from '../../../../shared/components/user-acronimy/user-acronimy.component';
import { Comment } from '../../../../shared/models/comment.model';
import { CalculateHowManyDays } from '../../../../utils/pipes/calculate-how-many-days.pipe';
import { TextAreaComponent } from '../../../../shared/components/text-area/text-area.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'art-article-comment',
  standalone: true,
  templateUrl: './article-comment.component.html',
  styleUrl: './article-comment.component.scss',
  imports: [
    CommonModule,
    LucideAngularModule,
    UserAcronimyComponent,
    CalculateHowManyDays,
    TextAreaComponent,
    ButtonComponent,
    ModalComponent,
    ButtonComponent,
  ],
})
export class ArticleCommentComponent {
  comment = input.required<Comment>();
  replyVisible = signal<boolean>(false);

  @ViewChild('deleteDialog') deleteDialog!: ModalComponent;

  iconReply = computed(() => {
    if (this.replyVisible()) return this.CircleX;
    else return this.Reply;
  });

  readonly Reply = Reply;
  readonly Trash = Trash2;
  readonly CircleX = CircleX;

  toogleReply() {
    this.replyVisible.update((isVisible) => !isVisible);
  }

  openDeleteDialog() {
    this.deleteDialog.open();
  }

  confirmDelete() {
    console.log('Comentário deletado!');
    this.deleteDialog.close();
  }
}
