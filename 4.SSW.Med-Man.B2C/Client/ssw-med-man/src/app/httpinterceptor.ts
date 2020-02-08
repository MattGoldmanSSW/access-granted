import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MsalService } from './msal.service';

@Injectable()
export class TokenInterceptor {

/**
 * Creates an instance of TokenInterceptor.
 * @memberof TokenInterceptor
 */
constructor(msalService: MsalService) {
   this.auth_token = msalService.getToken();
}

auth_token: string;
/**
 * Intercept all HTTP request to add JWT token to Headers
 * @param {HttpRequest<any>} request
 * @param {HttpHandler} next
 * @returns {Observable<HttpEvent<any>>}
 * @memberof TokenInterceptor
 */
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.debug('appending bearer token to request:', request)
    request = request.clone({
       setHeaders: {
          Authorization: `Bearer ${this.auth_token}`
       }
    });

    return next.handle(request);
  }
}