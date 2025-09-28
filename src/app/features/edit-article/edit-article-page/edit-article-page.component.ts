import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { ListPillComponent } from '../../../shared/components/list-pill/list-pill.component';
import { TextAreaComponent } from '../../../shared/components/text-area/text-area.component';
import { PillOption } from '../../../shared/types/pill-option.type';
import { CommonModule } from '@angular/common';
import { ArrowBigLeft, LucideAngularModule, Plus } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
    selector: 'art-edit-article-page',
    templateUrl: './edit-article-page.component.html',
    styleUrl: './edit-article-page.component.scss',
    imports: [
        CommonModule,
        ButtonComponent,
        InputComponent,
        ListPillComponent,
        TextAreaComponent,
        FormsModule,
        ReactiveFormsModule,
        LucideAngularModule,
    ]
})
export class EditArticlePage {
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

  fb = inject(FormBuilder);
  createArticleForm = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    imageUrl: ['', [Validators.required]],
    tags: [[]],
    content: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly ArrowBigLet = ArrowBigLeft;
  readonly Plus = Plus;

  constructor(private readonly router: Router) {}

  get isFormValid() {
    return this.createArticleForm.valid;
  }

  redirectToArticlesList() {
    this.router.navigateByUrl('articles-list');
  }
}
