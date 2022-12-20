import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: [ , [Validators.required, Validators.minLength(3)] ],
    favs: this.fb.array( [
      ['God of War', Validators.required],
      ['GTA VI', Validators.required]
    ], Validators.required)
  });


  newFav: FormControl = this.fb.control('', Validators.required);

  get favsArray() {
    return this.myForm.get('favs') as FormArray;
  }


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  isFieldValid( field: string ) {
    return this.myForm.controls[field].errors
            && this.myForm.controls[field].touched
  }

  addFav() {
    if (this.newFav.invalid) {
      return;
    }

    // this.favsArray.push(new FormControl(this.newFav.value, Validators.required));
    this.favsArray.push( this.fb.control( this.newFav.value, Validators.required ) );
    this.newFav.reset();
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

  delete(i: number) {
    this.favsArray.removeAt(i);
  }

}
