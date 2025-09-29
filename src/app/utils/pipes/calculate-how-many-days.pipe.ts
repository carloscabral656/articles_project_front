import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateHowManyDays',
  standalone: true,
})
export class CalculateHowManyDays implements PipeTransform {
  transform(startDate: Date): string {
    const now = new Date();
    const diffInMs = now.getTime() - startDate.getTime();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    const days = Math.round(diffInDays);
    return days === 0 ? 'Hoje' : `${days} dias`;
  }
}
