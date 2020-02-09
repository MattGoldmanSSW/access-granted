import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService, JwtModule} from '@auth0/angular-jwt'
import { AuthService } from './auth-zero.service';
import { Observable, Subscription } from 'rxjs';
import { map, tap, catchError, mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private helper: JwtHelperService) { }
  subscription: Subscription;
  token: string;

  ngOnInit(){
    this.subscription = this.authService.tokenSource$.subscribe(token => {
      this.token = token;
      console.log("Got new token:");
      console.log(this.token);
    });
  }

   canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.getTokenSilently$().pipe(
      map(token => {
        console.log(token);
        let tokenPayload = this.helper.decodeToken(token);
        console.log(tokenPayload);
        let expectedRole = route.data.expectedRole;
        console.log("Expected role:");
        console.log(expectedRole);
        let actualRole = tokenPayload.role;
        console.log("Actual role:");
        console.log(actualRole);
        if(this.authService.loggedIn && expectedRole == actualRole){
          return true;
        }
        else{
          this.router.navigate(['/unauth']);
          return false;
        }
      }));
  }
}
