import { Component, OnInit,Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(userService: UserService, private _snackBar: MatSnackBar) {
    this.userService = userService;
   }

  @Input()
  loggedIn: boolean;
  subscription: Subscription;
  userService: UserService;

  ngOnInit() {
    this.subscription = this.userService.authNavStatus$.subscribe(loggedin => this.loggedIn = loggedin);
  }

  logout(){
    this.userService.logout();
    this.loggedIn = false;
    this._snackBar.open("You have been logged out", "OK" ,{ duration: 3000} );
  }

}
