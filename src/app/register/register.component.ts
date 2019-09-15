import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {UsernameValidator} from './../customValidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerForm = new FormGroup( {
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(4),UsernameValidator.usernameSpaceValidator]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')])

  } );

  get email() {
    return this.registerForm.get('email');
  }
  get name() {
    return this.registerForm.get('name');
  }
  get mobile() {
    return this.registerForm.get('mobile')
  }


}
