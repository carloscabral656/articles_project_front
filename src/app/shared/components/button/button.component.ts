import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonProps, buttonStyles } from './button.variants.js';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'art-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
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
