import { Injectable } from '@angular/core';
import { APICallerService } from './apicaller.service';
import { IUser }  from './IUser'; 

@Injectable()
export class AuthService {
  private isloggedIn: boolean;
  private USER_KEY: string = 'auth_data';
  private token: string = 'token';

  public user: IUser;
  constructor() {
    if (localStorage.getItem(this.token)) {
      this.isloggedIn = true;
    } else {
      this.isloggedIn = false;
    }
  }

  isUserLoggedIn(): boolean {
    var data = localStorage.getItem(this.token);
    // const now = new Date(Date.now());
    // const expiresDate = new Date(data?.expires || now);
    // const difftime = expiresDate.getTime() - now.getTime();
    if (data ==null||data==undefined) {
      this.isloggedIn = false;
    } else {
      this.isloggedIn = true;
    }
    return this.isloggedIn;
  }

  logoutUser(): void {
    this.isloggedIn = false;
    this.user = null;
    localStorage.removeItem(this.token);
     localStorage.removeItem(this.USER_KEY);
  }

  getToken(): string {
    let data = localStorage.getItem(this.token);
    let _token = data;
    return _token;
  }

  getUsername(): string {
    let data: any = JSON.parse(localStorage.getItem(this.USER_KEY));
    return data?.data?.fullName;
  }

  getCurrentUserId(): string {
    if (!this.isUserLoggedIn) return null;
    if (!this.user) {
      let data: any = JSON.parse(localStorage.getItem(this.USER_KEY));
      this.user = data?.data;
    }
    return this.user.adminId;
  }


  getUserRoles(): string[] {
    let data: any = JSON.parse(localStorage.getItem(this.USER_KEY));
    return data?.roles;
  }

  isInRole(rolename: string): boolean {
    let _user=  this.getCurrentUser();
    return _user.roleNames.includes(rolename);
  }
  //  in current User
  isPermitExpired(): boolean {
    let data: any = JSON.parse(localStorage.getItem(this.USER_KEY));
    return data?.user?.isPermitExpired;
  }
  // Get Current User
  public getCurrentUser() {
    if (!this.isUserLoggedIn) return null;
    if (!this.user) {
      let data: any = JSON.parse(localStorage.getItem(this.USER_KEY));
      this.user = data?.user;
    }
    return this.user;
  }


}
