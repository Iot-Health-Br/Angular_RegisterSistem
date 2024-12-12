import { Component } from '@angular/core';
import {FieldsetModule} from "primeng/fieldset";
import {InputMaskModule} from "primeng/inputmask";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {Button} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {PasswordModule} from "primeng/password";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FieldsetModule,
    InputMaskModule,
    FormsModule,
    InputTextModule,
    Button,
    ToastModule,
    ReactiveFormsModule,
    PasswordModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: any;
  password: any;
  loginForm: any;
  cpf: any;
  value: any;

  onLogin() {

  }

  registerUser() {

  }

  onSubmit() {

  }
}
