import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  user = {
    username: '',
    password: '',
  };

  onSubmit(formValue: any) {
    console.log('Form Value:', formValue);

    // Post to API
    // Do some other ...
  }
}
