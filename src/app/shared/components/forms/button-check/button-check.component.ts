import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { Check, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'art-button-check',
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './button-check.component.html'
})
export class ButtonCheckComponent {
  label = input.required<string>();
  alreadyChecked = input.required<boolean>();
  checked = output<boolean>();

  isChecked = signal<boolean>(false);

  readonly Check = Check;

  checkedClass = computed(() => {
    if (this.isChecked()) return 'checked';
    else return 'no-checked';
  });

  constructor() {
    effect(() => {
      this.checked.emit(this.isChecked());
    });
  }

  toogleChecked() {
    this.isChecked.update((checked) => !checked);
  }
}
