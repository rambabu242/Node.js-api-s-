import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthguardGuard } from "./core/guards/authguard.guard";


const routes: Routes =[
    {path: '',loadChildren:() => import('./public/public.module').then(m => m.PublicModule)},
    {path: '',loadChildren:() => import('./protected/protected.module').then(m => m.ProtectedModule), canActivate:[AuthguardGuard]}  
];

//configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }