import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService, JwtModule} from '@auth0/angular-jwt'
import { MsalService } from './msal.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private msalService: MsalService, private router: Router, private helper: JwtHelperService) { }

  canActivate(route: ActivatedRouteSnapshot) : boolean {
    const expectedRole = route.data.expectedRole;
    const token = this.msalService.getToken();
    const tokenPayload = this.helper.decodeToken(token);
    if(!this.msalService.isLoggedIn || tokenPayload.role != expectedRole) {
      this.router.navigate(['/unauth']); //add you shall not pass page here
      console.log("Navigation faile");
      console.log("Expected role: " + expectedRole);
      console.log("Actual role: " + tokenPayload.role);
      return false;
    }
    return true;
   }
}
