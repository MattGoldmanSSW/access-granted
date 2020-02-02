import { Observable, from, BehaviorSubject } from 'rxjs';
import {Injectable} from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable()

export class UserService{
    baseUrl: string = '';

    //observable navItem source
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    //observable navItem stream
    authNavStatus$ = this._authNavStatusSource.asObservable();

    private loggedIn = false;

    constructor(private http: HttpClient) {
        this.loggedIn = !!localStorage.getItem('auth_token');
        this._authNavStatusSource.next(this.loggedIn);
        this.baseUrl = '';
    }


    login(email, password) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post<any>(
                this.baseUrl + '/account/login',
                JSON.stringify({email, password}), {headers}
            )
            .subscribe(
              (res) => { 
                localStorage.setItem('auth_token', res.token);
                this.loggedIn = true;
                this._authNavStatusSource.next(true);
                console.log('Login succesful! Token received:');
                console.log(res.token);
                return true;
            },
            error => {
              console.log('Error:');
              console.log(error);
            });
    }

    logout(){
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}