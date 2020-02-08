import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { MsalService } from './msal.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private user:MsalService, private router:Router){}

    canActivate() {
        if(!this.user.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}