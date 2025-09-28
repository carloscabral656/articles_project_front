import { Component, input } from '@angular/core';
import { PillOption } from '../../types/pill-option.type';
import { tagStyles } from './tag.variants';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'art-pill',
    templateUrl: './pill.component.html',
    styleUrl: './pill.component.scss',
    imports: [CommonModule]
})
export class PillComponent {
  option = input.required<PillOption>();
  size = input<'sm' | 'md' | 'lg'>('md');
  isSelected = input<boolean>(false);

  get classes(): string {
    return tagStyles({
      size: this.size(),
      isSelected: this.isSelected(),
    });
  }
}
