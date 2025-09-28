import { Component, input, Optional, Self, signal } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Info, LucideAngularModule } from 'lucide-angular';
import { v4 as uuidv4 } from 'uuid';
import { FormErrorComponent } from '../forms/form-error/form-error.component';

@Component({
    selector: 'art-text-area',
    templateUrl: './text-area.component.html',
    styleUrl: './text-area.component.scss',
    imports: [LucideAngularModule, FormErrorComponent]
})
export class TextAreaComponent implements ControlValueAccessor {
  readonly placeholder = input<string>('');
  readonly label = input<string>('');
  readonly rows = input<number>();
  readonly cols = input<number>();

  id = signal(uuidv4());

  disabled = false;
  private innerValue = '';

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  readonly Info = Info;

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
    const value = (event.target as HTMLTextAreaElement).value;
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
