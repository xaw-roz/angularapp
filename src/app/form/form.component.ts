import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  registerForm : FormGroup;

  constructor(fb : FormBuilder){
    this.registerForm=fb.group(
      {
        'firstName': [null,Validators.compose([Validators.required,Validators.minLength(5)])],
        'lastName' : [null,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],
        'gender':[null,Validators.required]
      }
    )

}

  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form.firstName);
    console.log(form.lastName);
  }


}
