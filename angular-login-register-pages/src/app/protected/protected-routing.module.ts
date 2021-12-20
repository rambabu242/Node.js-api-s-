import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProtectedComponent } from './protected.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  {path: '', component: ProtectedComponent, children : [
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: UserDataComponent},
    {path: '', redirectTo:'home',pathMatch:'full'},
    {path: 'update', component: UpdateFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
