import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { MasterComponent } from './layout/master/master.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { AuthGuardService } from 'src/services/auth-guard.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, SidebarComponent, HeaderComponent, PageNotFoundComponent, MasterComponent, FooterComponent, ProfileComponent],
  imports: [BrowserModule,AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AuthGuardService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
