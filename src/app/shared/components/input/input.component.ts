import {
  Component,
  computed,
  input,
  Optional,
  Self,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Eye, EyeClosed, LucideAngularModule, X } from 'lucide-angular';
import { FormErrorComponent } from '../forms/form-error/form-error.component';

@Component({
    selector: 'art-input',
    imports: [LucideAngularModule, FormErrorComponent],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss'
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

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

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

  get errors() {
    return this.ngControl?.control?.errors;
  }

  get required() {
    return !!this.errors?.['required'];
  }

  get isRequiredValidator(): boolean {
    const validator = this.ngControl?.control?.validator;
    if (!validator) return false;

    const result = validator({} as any);
    return !!result?.['required'];
  }

  get invalid() {
    return (
      this.ngControl?.invalid &&
      (this.ngControl?.touched || this.ngControl?.dirty)
    );
  }
}
