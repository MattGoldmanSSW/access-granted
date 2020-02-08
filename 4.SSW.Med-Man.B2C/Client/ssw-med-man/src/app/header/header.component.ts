import { Component, OnInit,Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MsalService } from '../msal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(msalService: MsalService, private _snackBar: MatSnackBar, private router: Router) {
    this.msalService = msalService;
   }

  @Input()
  loggedIn: boolean;
  subscription: Subscription;
  msalService: MsalService;

  ngOnInit() {
    this.loggedIn = this.msalService.isLoggedIn();
    //this.subscription = this.userService.authNavStatus$.subscribe(loggedin => this.loggedIn = loggedin);
  }

  logout(){
    this.msalService.logout();
    this.loggedIn = false;
    this._snackBar.open("You have been logged out", "OK" ,{ duration: 3000} );
    this.router.navigate(['/home']);
  }

}
