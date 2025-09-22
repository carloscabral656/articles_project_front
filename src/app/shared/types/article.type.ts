import { PillOption } from './pill-option.type';

export interface Article {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  tags: PillOption[];
  createdAt: Date;
  updatedAt: Date | null;
}
