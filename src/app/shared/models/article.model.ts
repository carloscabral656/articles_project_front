import { Comment } from './comment.model';

export class Article {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: Date;
  comments: Comment[];

  constructor(
    title: string,
    content: string,
    author: string,
    publishedAt?: Date
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.content = content;
    this.author = author;
    this.publishedAt = publishedAt ?? new Date();
    this.comments = [];
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }
}
