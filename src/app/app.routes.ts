import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignOutComponent } from './quit/sign-out/sign-out.component';
import { PatientsListComponent } from './main/patients-list/patients-list.component';
import { AadharauthComponent } from './personal/aadharauth/aadharauth.component';
import { PageNotFoundComponent } from './others/page-not-found/page-not-found.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

export const routes: Routes = [
    {path:'', redirectTo:"sign-in", pathMatch: 'full'},
    {path:"sign-in", component: SignInComponent},
    {path:"sign-up",component: SignUpComponent},
    {path: "sign-out", component: SignOutComponent},
    {path:"patients-list", component: PatientsListComponent},
    {path:"aadharauth", component:AadharauthComponent},
    {path: "**", component:PageNotFoundComponent}


];
