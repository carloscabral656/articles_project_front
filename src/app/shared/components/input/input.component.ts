import { Component, forwardRef, input, signal, computed } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Eye, EyeClosed, LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'art-input',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  readonly placeholder = input<string>('');
  readonly label = input<string>('');
  readonly type = input<'text' | 'number' | 'password'>('text');

  readonly CircleX = X;
  readonly Eye = Eye;
  readonly EyeClosed = EyeClosed;

  private showPassword = signal(false);

  typeSig = computed(() =>
    this.type() === 'password'
      ? this.showPassword()
        ? 'text'
        : 'password'
      : this.type()
  );

  disabled = false;
  private innerValue = '';

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.innerValue = value || '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.innerValue = value;
    this.onChange(value);
  }
  onBlur(): void {
    this.onTouched();
  }

  resetValue() {
    this.innerValue = '';
    this.onChange('');
  }

  changePasswordVisibility() {
    this.showPassword.update((show) => !show);
  }

  visibilityIcon() {
    return this.typeSig() === 'password' ? Eye : EyeClosed;
  }

  get value() {
    return this.innerValue;
  }
}
