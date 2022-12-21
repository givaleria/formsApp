import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)] ],
    username: ['', [Validators.required, this.validatorService.cantBeStrider] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required] ],
  },{
    validators: [
      this.validatorService.equalFields('password', 'password2')
    ]
  })

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Gi Degiglio',
      email: 'test@huenei.com',
      username: 'angelofdeath'
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
