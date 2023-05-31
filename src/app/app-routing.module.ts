import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component:LoginComponent, title: "Login", pathMatch:'full'},
  {path: 'login', component:LoginComponent, title: "Login", pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent, title: "Dashboard", pathMatch:'full', canActivate:[AuthGuardService]},
  {path: 'my-profile', component:ProfileComponent, title: "Profile", pathMatch:'full', canActivate:[AuthGuardService]},
  
  /** Wild Card Route, this should be in the last route */
  {path: '**', component: PageNotFoundComponent, title: 'Page Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
