import { Component, input } from '@angular/core';
import { Info, LucideAngularModule } from 'lucide-angular';
import { ValidationErrorPipe } from '../../../../utils/pipes/validation-error.pipe';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'art-form-error',
  standalone: true,
  imports: [LucideAngularModule, ValidationErrorPipe],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.scss',
})
export class FormErrorComponent {
  formErrors = input.required<ValidationErrors>();

  readonly Info = Info;
}
