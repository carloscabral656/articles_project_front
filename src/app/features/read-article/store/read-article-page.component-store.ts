import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Article } from '../../../shared/models/article.model';
import { Comment } from '../../../shared/models/comment.model';

export interface ArticleState {
  article: Article | null;
  loading: boolean;
}

@Injectable()
export class ReadArticleStore extends ComponentStore<ArticleState> {
  constructor() {
    super({
      article: null,
      loading: false,
    });

    // inicializa artigo de exemplo
    const exampleArticle = new Article(
      'Meu primeiro artigo',
      'Este é o conteúdo do artigo de exemplo. Pode ter várias linhas e até formatação.',
      'Carlos Eduardo'
    );

    // adiciona comentários
    const comment1 = new Comment('Muito bom o artigo!', 'Alice');
    const comment2 = new Comment('Concordo com a Alice.', 'Bruno');

    // resposta a um comentário
    const reply1 = new Comment('Obrigado, Alice!', 'Carlos Eduardo');
    comment1.addReply(reply1);

    const reply2 = new Comment('Obrigado, Carlos!', 'Alice');
    reply1.addReply(reply2);

    exampleArticle.addComment(comment1);
    exampleArticle.addComment(comment2);

    // define o artigo no state
    this.setArticle(exampleArticle);
  }

  readonly article = this.selectSignal((s) => s.article);
  readonly loading = this.selectSignal((s) => s.loading);

  readonly setArticle = this.updater<Article | null>((state, article) => ({
    ...state,
    article,
  }));

  readonly setLoading = this.updater<boolean>((state, loading) => ({
    ...state,
    loading,
  }));
}
