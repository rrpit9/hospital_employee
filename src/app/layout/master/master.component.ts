import { Component } from '@angular/core';
import { AuthGuardService } from 'src/services/auth-guard.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  public isLoggedIn: boolean = false;

  constructor(private _auth:AuthGuardService){
    this.isLoggedIn = this._auth.isAuthenticated();
  }
}
