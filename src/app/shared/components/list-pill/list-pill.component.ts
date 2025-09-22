import { Component, input } from '@angular/core';
import { PillOption } from '../../types/pill-option.type';
import { PillComponent } from '../pill/pill.component';

@Component({
  selector: 'art-list-pill',
  standalone: true,
  imports: [PillComponent],
  templateUrl: './list-pill.component.html',
  styleUrl: './list-pill.component.scss',
})
export class ListPillComponent {
  options = input.required<PillOption[]>();
}
