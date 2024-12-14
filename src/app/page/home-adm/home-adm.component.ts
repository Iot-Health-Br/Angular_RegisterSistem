import {Component, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {MenuItem, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {Button} from "primeng/button";
import {InputMaskModule} from "primeng/inputmask";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {TreeSelectModule} from "primeng/treeselect";
import {TreeTableModule} from "primeng/treetable";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-home-adm',
  standalone: true,
  imports: [
    MenubarModule,
    NgSwitchCase,
    NgSwitch,
    Button,
    InputMaskModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    ToastModule,
    FormsModule,
    TreeSelectModule,
    TreeTableModule,
    CommonModule,
    NgForOf,
    NgIf,
    TableModule
  ],
  providers:[MessageService],
  templateUrl: './home-adm.component.html',
  styleUrl: './home-adm.component.css'
})
export class HomeAdmComponent implements OnInit{
  items: MenuItem[] | undefined;
  activeCard: 'about' | 'infoUser' | 'registerUser' | 'registerAdm' | 'userList' | undefined;
  showCard: boolean = false;
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
  categoria: any[] = [
    { key: "USER", label: 'Usuário' },
    { key: "ADMIN", label: 'Administrador' },
    { key: "MANAGER", label: 'Gerente' }
  ];
  selectedCategoria: any = null;
  files: any;
  cols: any;
  products: any[] | undefined;
  selectedProduct: any;

  constructor(private router: Router, private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
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
            label: 'Lista de Entregas',
            icon: 'pi pi-clipboard',
            command: () => this.listDelivery()
          },
          {
            label: 'Avaliação de Pedidos',
            icon: 'pi pi-clipboard',
            command: () => this.avaliationDelivery()
          }
        ]
      },
      {
        label: 'Configurações',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Cadastrar Adm',
            icon: 'pi pi-user-plus',
            command: () => this.registerAdm()
          },
          {
            label: 'Cadastrar User',
            icon: 'pi pi-user',
            command: () => this.registerUser()
          },
          {
            label: 'Lista de Usuários',
            icon: 'pi pi-address-book',
            command: () => this.listUser()
          }
        ]
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

  private listDelivery() {
    return undefined;
  }

  private avaliationDelivery() {
    return undefined;
  }

  private registerAdm() {
    this.showCard = true;
    this.activeCard = 'registerAdm';
  }

  private registerUser() {
    this.showCard = true;
    this.activeCard = 'registerUser';
  }

  private listUser() {
    this.showCard = true;
    this.activeCard = 'userList';
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

  returnLogin() {

  }

  onRegister() {

  }

  cancelRegister() {

  }
}
