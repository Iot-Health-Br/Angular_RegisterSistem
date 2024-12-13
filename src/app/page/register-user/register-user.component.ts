import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {InputMaskModule} from "primeng/inputmask";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    Button,
    InputMaskModule,
    InputTextModule,
    PaginatorModule,
    PasswordModule,
    ToastModule,
    NgIf
  ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  cpf: string='';
  password: string='';
  nome: string='';
  nascimento: string='';
  confirmPassword: string='';
  imageSrc: any;
  telefone: string='';
  email: string='';
  address: string='';
  cidade: string='';
  estado: string='';
  cep: string='';
  addressComplement: string='';

  constructor(private router: Router, private messageService: MessageService) {}


  cancelRegister() {

  }

  onRegister() {

  }

  returnLogin() {
    this.router.navigate(['/login']);
  }

}
