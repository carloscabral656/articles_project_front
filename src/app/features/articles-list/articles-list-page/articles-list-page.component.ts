import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { ListPillComponent } from '../../../shared/components/list-pill/list-pill.component';
import { Article } from '../../../shared/types/article.type';
import { Pagination } from '../../../shared/types/pagination.type';
import { PillOption } from '../../../shared/types/pill-option.type';
import { ArticlesListComponent } from '../components/articles-list/articles-list.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ArrowRightSquare } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
    selector: 'art-articles-list-page',
    templateUrl: './articles-list-page.component.html',
    styleUrl: './articles-list-page.component.scss',
    imports: [
        CommonModule,
        ButtonComponent,
        ListPillComponent,
        InputComponent,
        ArticlesListComponent,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ArticlesListPage {
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

  articlesPagination = signal<Pagination<Article>>(
    new Pagination<Article>(
      [
        {
          id: 1,
          imgUrl: 'https://picsum.photos/600/400?random=1',
          title: 'Introdução ao TypeScript',
          description:
            'Um guia prático para quem está começando com TypeScript e deseja entender os principais conceitos.',
          tags: [
            { id: 1, value: 'TypeScript' },
            { id: 2, value: 'Frontend' },
          ],
          createdAt: new Date('2025-01-10T10:00:00'),
          updatedAt: null,
        },
        {
          id: 2,
          imgUrl: 'https://picsum.photos/600/400?random=2',
          title: 'Boas práticas em React',
          description:
            'Dicas essenciais para escrever componentes reutilizáveis e manter o código limpo em projetos React.',
          tags: [
            { id: 3, value: 'React' },
            { id: 4, value: 'Clean Code' },
          ],
          createdAt: new Date('2025-02-05T14:30:00'),
          updatedAt: new Date('2025-02-20T08:00:00'),
        },
        {
          id: 3,
          imgUrl: 'https://picsum.photos/600/400?random=3',
          title: 'Arquitetura de Software Moderna',
          description:
            'Uma visão geral sobre padrões de arquitetura como microservices, monólitos e serverless.',
          tags: [
            { id: 5, value: 'Arquitetura' },
            { id: 6, value: 'Backend' },
          ],
          createdAt: new Date('2025-03-01T09:15:00'),
          updatedAt: null,
        },
      ],
      10, // total de registros
      1, // página atual
      3 // tamanho da página
    )
  );

  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);

  searchArticlesForm = this.fb.group({
    pills: [[]],
    search: '',
  });

  constructor(private readonly router: Router) {
    this.initFormValueChanges();
  }

  initFormValueChanges() {
    this.searchArticlesForm.valueChanges
      .pipe(
        debounceTime(500),
        tap((e) => {
          console.log(e);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  redirectToCreateArticle() {
    this.router.navigateByUrl('articles-create');
  }
}
