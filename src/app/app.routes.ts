import { Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {RegisterUserComponent} from "./page/register-user/register-user.component";
import {HomeUserComponent} from "./page/home-user/home-user.component";
import {HomeAdmComponent} from "./page/home-adm/home-adm.component";

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'home-user', component: HomeUserComponent},
  {path: 'home-adm', component: HomeAdmComponent}
];
