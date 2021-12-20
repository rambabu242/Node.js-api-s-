import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { HomeComponent } from './home/home.component';
import { ProtectedComponent } from './protected.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateFormService } from './update-form/update-form.service';
import { FormsModule } from '@angular/forms';
import { UserDataService } from './user-data/user-data.service';

@NgModule({
  declarations: [
    HomeComponent,
    ProtectedComponent,
    UserDataComponent,
    UpdateFormComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    UpdateFormService,
    UserDataService
  ]

})
export class ProtectedModule { }
