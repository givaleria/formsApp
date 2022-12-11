import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  @ViewChild('myForm') myForm!: NgForm;

  person = {
    genre: 'M',
    notifications: true
  }

  termsAndConditions: boolean = false;

  get errors(): any {
    return this.myForm?.controls['terms']?.errors
  }
}
