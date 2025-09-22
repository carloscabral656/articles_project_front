import { Component, input, Input } from '@angular/core';
import { buttonStyles, ButtonProps } from './button.variants.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'art-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'button.component.html',
})
export class ButtonComponent {
  variant = input<ButtonProps['variant']>();
  full = input<boolean>(false);
  size = input<ButtonProps['size']>();
  disabled = input(false);

  get classes(): string {
    return buttonStyles({
      variant: this.variant(),
      size: this.size(),
      disabled: this.disabled(),
      full: this.full(),
    });
  }
}
