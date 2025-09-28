export class Comment {
  id: string;
  content: string;
  createdAt: Date;
  author: string;
  replies: Comment[];

  constructor(content: string, author: string) {
    this.id = crypto.randomUUID();
    this.content = content;
    this.createdAt = new Date();
    this.author = author;
    this.replies = [];
  }

  addReply(reply: Comment): void {
    this.replies.push(reply);
  }
}
