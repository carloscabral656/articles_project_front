import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validationError',
  standalone: true,
})
export class ValidationErrorPipe implements PipeTransform {
  transform(errors: ValidationErrors | null | undefined): string | null {
    if (!errors) return null;

    if (errors['required']) {
      return 'Este campo é obrigatório.';
    }

    if (errors['minlength']) {
      return `Mínimo de ${errors['minlength'].requiredLength} caracteres (atual: ${errors['minlength'].actualLength}).`;
    }

    if (errors['maxlength']) {
      return `Máximo de ${errors['maxlength'].requiredLength} caracteres (atual: ${errors['maxlength'].actualLength}).`;
    }

    if (errors['email']) {
      return 'Formato de e-mail inválido.';
    }

    if (errors['pattern']) {
      return 'O valor não corresponde ao formato esperado.';
    }

    if (errors['min']) {
      return `O valor mínimo permitido é ${errors['min'].min}.`;
    }

    if (errors['max']) {
      return `O valor máximo permitido é ${errors['max'].max}.`;
    }

    const firstKey = Object.keys(errors)[0];

    return `Erro: ${firstKey}`;
  }
}
