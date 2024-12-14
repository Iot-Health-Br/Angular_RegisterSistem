import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {InputMaskModule} from "primeng/inputmask";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {ToastModule} from "primeng/toast";
import {PasswordModule} from "primeng/password";
import {MenubarModule} from "primeng/menubar";
import {MenuItem, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'app-home-user',
  standalone: true,
  imports: [
    Button,
    InputMaskModule,
    InputTextModule,
    PaginatorModule,
    ToastModule,
    PasswordModule,
    MenubarModule,
    NgSwitchCase,
    NgSwitch
  ],
  providers:[MessageService],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent implements OnInit{
  items: MenuItem[] | undefined;
  activeCard: 'about' | 'infoUser' | undefined;
  showCard: boolean = false;

  constructor(private router: Router, private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.welcomeUser()
      },
      {
        label: 'Meus Dados',
        icon: 'pi pi-user-edit',
        command: () => this.showAboutUser()
      },
      {
        label: 'Pedidos',
        icon: 'pi pi-shop',
        items: [
          {
            label: 'Fazer Pedidos',
            icon: 'pi pi-cart-arrow-down',
            command: () => this.placeOrder()
          },
          {
            label: 'Lista de Pedidos',
            icon: 'pi pi-receipt',
            command: () => this.listOrder()
          },
          {
            label: 'Avaliar Pedidos',
            icon: 'pi pi-clipboard',
            command: () => this.avaliationOrder()
          }
        ]
      },
      {
        label: 'Configurações',
        icon: 'pi pi-cog'
      },
      {
        label: 'Contact',
        icon: 'pi pi-whatsapp',
        items: [
          {
            label: 'Sobre nós',
            icon: 'pi pi-face-smile',
            command: () => this.showAboutUs()
          },
          {
            label: 'Nosso Telefone',
            icon: 'pi pi-phone',
            command: () => this.showPhone()
          },
          {
            label: 'Nossa Localização',
            icon: 'pi pi-warehouse',
            command: () => this.showLocation()
          }
        ]
      },
      {
        label: 'Logout',
        icon: 'pi pi-user-minus',
        command: () => this.logout()
      }
    ]
  }


  private showAboutUser() {
    return undefined;
  }

  private placeOrder() {
    return undefined;
  }

  private listOrder() {
    return undefined;
  }

  private avaliationOrder() {
    return undefined;
  }

  private showAboutUs() {
    this.showCard = true;
    this.activeCard = 'about';
  }

  private showPhone() {
    return undefined;
  }

  private showLocation() {
    return undefined;
  }

  private logout() {
    return undefined;
  }

  private welcomeUser() {
    return this.messageService.add({ severity: 'success', summary: 'Success', detail: "Bem Vindo ao SistemCad",life: 10000 });
  }
}
