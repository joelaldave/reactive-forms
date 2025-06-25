import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { EmailValidatorService } from '../services/email-validator.service';

export function emailAsyncValidator(service: EmailValidatorService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return service.checkEmail(control.value).pipe(
            map(permitted => (permitted ? null : { forbiddenEmail: true }))
        );
    };
}

export function getEmailError(control: AbstractControl): string | null {

    if (control?.hasError('required')) return 'El correo es obligatorio.';
    if (control?.hasError('email')) return 'Correo no válido.';
    if (control?.hasError('forbiddenEmail')) return 'Este correo está prohibido.';
    return null;
}