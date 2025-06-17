import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./features/auth/login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  { path: 'menu', loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule) },
  { path: 'order', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule) },
  { path: 'closing', loadChildren: () => import('./features/closing/closing.module').then(m => m.ClosingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
