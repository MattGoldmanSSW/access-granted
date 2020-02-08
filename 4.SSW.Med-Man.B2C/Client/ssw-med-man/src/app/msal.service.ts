import { Injectable } from '@angular/core';

import * as Msal from 'msal';

declare var bootbox: "";
@Injectable()
export class MsalService {

    B2CTokenKey = "b2c.access.token";

    tenantConfig = {
        tenant: "goldiessw.onmicrosoft.com",
        // Replace this with your client id 
        clientID: 'd31fe268-a410-4a9f-9ce0-a91078f75396',
        signInPolicy: "B2C_1_signupandsignin",
        signUpPolicy: "B2C_1_signupandsignin",
        redirectUri:"http://localhost:4200",
        b2cScopes:["https://goldiessw.onmicrosoft.com/api/user_impersonation"]
    };

    // Configure the authority for Azure AD B2C
    authority = "https://goldiessw.b2clogin.com/tfp/" + this.tenantConfig.tenant + "/" + this.tenantConfig.signInPolicy;

    /*
     * B2C SignIn SignUp Policy Configuration
     */
    clientApplication = new Msal.UserAgentApplication(
        this.tenantConfig.clientID, this.authority,
        function (errorDesc: any, token: any, error: any, tokenType: any) {
      }
    );
//https://goldiessw.b2clogin.com/goldiessw.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_signupandsignin
    public login():void{
      this.clientApplication.authority = "https://goldiessw.b2clogin.com/tfp/" + this.tenantConfig.tenant + "/v2.0/.well-known/openid-configuration?p=" + this.tenantConfig.signInPolicy;
      console.log("Authority:");
      console.log(this.clientApplication.authority.toString());
      this.authenticate();
    }

    public signup():void{
      this.clientApplication.authority = "https://goldiessw.b2clogin.com/tfp/" + this.tenantConfig.tenant + "/" + this.tenantConfig.signUpPolicy;
      this.authenticate();
    }

    public authenticate(): void {
        var _this = this;
        this.clientApplication.loginPopup(this.tenantConfig.b2cScopes).then(function (idToken: any) {
            _this.clientApplication.acquireTokenSilent(_this.tenantConfig.b2cScopes).then(
                function (accessToken: any) {
                    _this.saveAccessTokenToCache(accessToken);
                }, function (error: any) {
                    _this.clientApplication.acquireTokenPopup(_this.tenantConfig.b2cScopes).then(
                        function (accessToken: any) {
                            _this.saveAccessTokenToCache(accessToken);
                        }, function (error: any) {
                            console.log("error: ", error);
                        });
                })
        }, function (error: any) {
            console.log("error: ", error);
        });
    }

    saveAccessTokenToCache(accessToken: string): void {
        sessionStorage.setItem(this.B2CTokenKey, accessToken);
    };

    getToken(){
      return sessionStorage.getItem(this.B2CTokenKey);
    }

    logout(): void {
        this.clientApplication.logout();
    };

    isLoggedIn(): boolean {
        return this.clientApplication.getUser() != null;
    };

    getUserEmail(): string{
       return this.getUser().idToken['emails'][0];
    }

    getUser(){
      return this.clientApplication.getUser()
    }
}