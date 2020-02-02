import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = true;

  constructor() { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
