import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public userProfile:object = {};

  constructor(private _apiService:ApiService){}

  ngOnInit(): void {
    
  }

  logoutFromSession(){
    this._apiService.v1logoutUser('one');
  }
}
