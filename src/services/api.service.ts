import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const _baseUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private header;

    constructor(private _http : HttpClient,private _router : Router) {
        this.header = new HttpHeaders()
            .set('Access-Control-Allow-Origin', '*')
            .set("Authorization", 'Bearer '+localStorage.getItem("accessToken"))
            .set("Accept","application/json")
            .set('Content-type',"application/json");
    }

    v1LoginPost(formdata: FormData){
        return this._http.post<any>(_baseUrl + 'v1/login',formdata,{headers: this.header});
    }

    authenticateUser(loginData:any){
        localStorage.setItem('userInfo', JSON.stringify(loginData?.data));
        localStorage.setItem('accessToken', loginData?.data?.access_token);
        this._router.navigateByUrl('/dashboard');
    }

    v1logoutUser(){
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userInfo');
        return this._http.post<any>(_baseUrl + 'v1/logout',{headers: this.header});
    }
}