import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PublicComponent } from './public.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormService } from './signup-form/signup-form.service';
import { LoginFormService } from './login-form/login-form.service';

@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers:[
    SignupFormService,
    LoginFormService
  ]
})
export class PublicModule { }
