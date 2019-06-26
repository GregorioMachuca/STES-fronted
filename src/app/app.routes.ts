import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const appRoutes: Routes = [
{ path : '', component : PagesComponent },
{ path : 'login', component : LoginComponent },
{ path : 'home', component: PagesComponent},
{ path : '**', component : NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);