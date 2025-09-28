import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userAcronimyFormatter',
  standalone: true,
})
export class UserAcronimyFormatterPipe implements PipeTransform {
  transform(name: string): string {
    if (!name) return '';

    const initials = name
      .split(' ')
      .filter((word) => word.length > 0)
      .map((word) => word[0].toUpperCase());

    return initials.slice(0, 2).join('');
  }
}
