
import {Component} from '@angular/core';
import {FormsModule, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'loginForm',
  templateUrl: './loginForm.html'
})
export class LoginComponent {
  data:FormGroup;
  constructor()
  {
    this.data=new FormGroup({
      'username':new FormControl(),
      'password':new FormControl()
    });

  }

  formSubmit()
  {
    console.log(this.data.value)
  }
}
