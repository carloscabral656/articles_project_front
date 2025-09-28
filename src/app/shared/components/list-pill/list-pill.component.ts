import {
  Component,
  computed,
  effect,
  input,
  Optional,
  Self,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Info, LucideAngularModule } from 'lucide-angular';
import { PillOption } from '../../types/pill-option.type';
import { PillComponent } from '../pill/pill.component';
import { FormErrorComponent } from '../forms/form-error/form-error.component';
import { ButtonCheckComponent } from '../forms/button-check/button-check.component';

@Component({
    selector: 'art-list-pill',
    imports: [
        PillComponent,
        LucideAngularModule,
        FormErrorComponent,
        ButtonCheckComponent,
    ],
    templateUrl: './list-pill.component.html',
    styleUrl: './list-pill.component.scss'
})
export class ListPillComponent implements ControlValueAccessor {
  options = input.required<PillOption[]>();
  label = input<string>();
  readonly = input<boolean>(false);

  value = signal<PillOption[]>([]);

  allOptionsChecked = computed(() => {
    return this.options().length === this.value().length;
  });

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  readonly Info = Info;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }

    // apenas para debug
    effect(() => {
      console.log('All checked:', this.allOptionsChecked());
    });
  }

  writeValue(obj: PillOption[] | null): void {
    this.value.set(obj ?? []);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  toggleOption(option: PillOption) {
    const exists = this.value().some((o) => o.id === option.id);

    if (exists) {
      this.value.update((v) => v.filter((o) => o.id !== option.id));
    } else {
      this.value.update((v) => [...v, option]);
    }

    this.onChange(this.value());
    this.onTouched();
  }

  toggleAllOptions(toggleAll: boolean) {
    if (toggleAll) {
      this.value.set([...this.options()]);
    } else {
      this.value.set([]);
    }

    this.onChange(this.value());
    this.onTouched();
  }

  isSelected(option: PillOption): boolean {
    return this.value().some((o) => o.id === option.id);
  }

  handleAllOptionsChecked(isAllChecked: boolean) {
    this.toggleAllOptions(isAllChecked);
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
