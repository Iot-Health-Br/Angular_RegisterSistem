import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {InputMaskModule} from "primeng/inputmask";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {ToastModule} from "primeng/toast";
import {PasswordModule} from "primeng/password";

@Component({
  selector: 'app-home-user',
  standalone: true,
  imports: [
    Button,
    InputMaskModule,
    InputTextModule,
    PaginatorModule,
    ToastModule,
    PasswordModule
  ],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent {

}
