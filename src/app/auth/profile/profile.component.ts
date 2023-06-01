import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { gender, isNumberKey, marital } from 'src/helpers/helpers';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public authUser:any = {};

  public defaultGender:any = gender();
  public defaultMarital:any = marital();
  public isNumberKey = isNumberKey;

  public backendError: any;
  
  public profileTabs = {
    overview       : false,
    edit           : false,
    changepassword : false
  };

  public profileTabType: string = 'overview';

  constructor(private _apiService:ApiService, private _activeRoute: ActivatedRoute){
    this.profileTabType = this._activeRoute.snapshot.params['tabType'];
  }

  ngOnInit(): void {
    this.getAuthUser();
    this.updateTabsBasedOnRoute();
  }

  getAuthUser(){
    this._apiService.v1GetAuthUserProfile().subscribe(
      res => {
        if(res.success == true){
          this.authUser = res.data;
          console.log('calling AUTH API For Profile',this.authUser);
        }
      },err => {}
    );
  }

  updateTabsBasedOnRoute(){
    switch(this.profileTabType){
      case 'overview': this.profileTabs.overview = true; break;
      case 'edit': this.profileTabs.edit = true; break;
      case 'change-password': this.profileTabs.changepassword = true; break;
    }
    console.log(this.profileTabs);
  }

  submitUpdateProfileForm(formData: NgForm){
    if(formData.valid){
      console.log(formData.value);
      this._apiService.v1UpdateAuthProfile(formData.value).subscribe(
        res => {

        },err => {
          this.backendError = err?.error?.errors;
        }
      );
    }
  }

  submitChangePasswordForm(formData: NgForm){
    if(formData.valid){
      this._apiService.v1UpdateAuthPassword(formData.value).subscribe(
        res => {
          this._apiService.v1logoutUser('one');
        },err => {
          this.backendError = err?.error?.errors;
        }
      );
    }
  }
}
