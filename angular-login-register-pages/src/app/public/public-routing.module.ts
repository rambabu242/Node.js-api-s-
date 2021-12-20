import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { PublicComponent } from './public.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  {path: '', component: PublicComponent , children : [
  {path: 'login', component: LoginFormComponent},
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'signup', component: SignupFormComponent}]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
