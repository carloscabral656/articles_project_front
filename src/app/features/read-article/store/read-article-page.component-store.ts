import { Injectable } from '@angular/core';

@Injectable()
export class ReadArticleStore extends ComponentStore<ArticleState> {
  // state inicial
  constructor() {
    super({
      article: null,
      loading: false,
    });
  }

  // SIGNALS (para uso fácil no template)
  readonly article = this.selectSignal((s) => s.article);
  readonly loading = this.selectSignal((s) => s.loading);

  // Updaters
  readonly setArticle = this.updater<Article | null>((state, article) => ({
    ...state,
    article,
  }));

  readonly setLoading = this.updater<boolean>((state, loading) => ({
    ...state,
    loading,
  }));

  readonly addComment = this.updater<Comment>((state, newComment) => {
    if (!state.article) return state;
    return {
      ...state,
      article: {
        ...state.article,
        comments: [...state.article.comments, newComment],
      },
    };
  });

  readonly addReply = this.updater<{ parentId: string; reply: Comment }>(
    (state, { parentId, reply }) => {
      if (!state.article) return state;

      const updateReplies = (comments: Comment[]): Comment[] =>
        comments.map((c) =>
          c.id === parentId
            ? { ...c, replies: [...c.replies, reply] }
            : { ...c, replies: updateReplies(c.replies) }
        );

      return {
        ...state,
        article: {
          ...state.article,
          comments: updateReplies(state.article.comments),
        },
      };
    }
  );
}
