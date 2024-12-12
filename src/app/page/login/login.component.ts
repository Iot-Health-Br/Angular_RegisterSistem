import { Component } from '@angular/core';
import {FieldsetModule} from "primeng/fieldset";
import {InputMaskModule} from "primeng/inputmask";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {Button} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {PasswordModule} from "primeng/password";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

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
  providers:[MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cpf: string = '';
  password: string = '';

  constructor(private router: Router, private messageService: MessageService) {}

  onLogin() {
    if (this.cpf == "") {
      this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'Campo do CPF Vazio',life: 5000});
    }else if(this.password == ""){
      this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'Campo da Senha Vazio',life: 5000});
    }else{

    }
  }

  registerUser() {
    this.router.navigate(['/register-user']);
  }
}
