import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailValidatorService } from '../../services/email-validator.service';
import { emailAsyncValidator, getEmailError } from '../../utils/email-validator';

@Component({
  selector: 'app-form-example',
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './form-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormExampleComponent {

  getEmailError = getEmailError;

  fb = inject(FormBuilder);

  emailValidatorService = inject(EmailValidatorService);


  formExample = this.fb.group({
    email: new FormControl(
      '',
      [Validators.required, Validators.email],
      [emailAsyncValidator(this.emailValidatorService)]
    ),
  });



  onSubmit() {
    if (this.formExample.valid) {
      console.log('Form Submitted!', this.formExample.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
