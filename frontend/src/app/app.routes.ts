import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MurphComponent } from './murph/murph.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'murph', component: MurphComponent},
    {path: 'login', component: LoginComponent},
];
