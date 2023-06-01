import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { isNumberKey } from 'src/helpers/helpers';
import { ApiService } from 'src/services/api.service';
import { AuthGuardService } from 'src/services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public isNumberKey = isNumberKey;

  public backendError: any;

  public loginFormModel = {
    device_type    : 'android',
    device_token   : 'android-web-angular',
    business_id    : '1',
    email_mobile   : 'domenica95@example.org',
    password       : 'xbkJyuTgeFr@3',
    remember       : false
  }

  constructor(private _apiService: ApiService, private _auth:AuthGuardService, private _router:Router)  {}

  ngOnInit() {
    if(this._auth.isAuthenticated()){this._router.navigateByUrl('/dashboard');}
  }

  submitLoginForm(formData: NgForm){
    if(formData.valid){
      this._apiService.v1LoginPost(formData.value).subscribe(
        res => {
          this._apiService.authenticateUser(res);
        },err => {
          this.backendError = err?.error?.errors;
        }
      );
    }
  }
}
