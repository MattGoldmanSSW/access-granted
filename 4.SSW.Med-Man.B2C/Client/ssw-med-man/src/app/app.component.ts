import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { MsalService } from './msal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SSW.Medication-Manager';
  router: Router;
  loggedIn: boolean;
  msalService: MsalService;

  constructor(private myRouter: Router, private msalSvc: MsalService) {
    this.router = myRouter;
    this.msalService = msalSvc;

    this.loggedIn = this.msalService.isLoggedIn();
    this.router.navigate(['/home']);
  }
}
