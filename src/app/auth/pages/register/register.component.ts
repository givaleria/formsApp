import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.fullNamePattern)] ],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator] ],
    username: ['', [Validators.required, this.validatorService.cantBeStrider] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required] ],
  },{
    validators: [
      this.validatorService.equalFields('password', 'password2')
    ]
  })

  get emailErrorMsg(): string {

    const errors = this.myForm.get('email')?.errors;

    if (errors?.['required']) {
      return 'Email is mandatory.'
    } else if (errors?.['pattern']) {
      return 'Invalid email format.'
    } else if (errors?.['takenEmail']) {
      return 'Email has already been taken.'
    }

    return '';

  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Gi Degiglio',
      email: 'test1@test.com',
      username: 'angelofdeath',
      password: '123456',
      password2: '123456'
    })
  }

  invalidField(field: string) {
    return this.myForm.get(field)?.invalid
            && this.myForm.get(field)?.touched;
  }

  submitForm() {
    this.myForm.markAllAsTouched();
  }

}
