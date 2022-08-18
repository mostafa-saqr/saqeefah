import { Injectable } from '@angular/core';
import { IUser }  from './IUser'; 

@Injectable()
export class AuthService {
  private isloggedIn: boolean;
  private USER_KEY: string = 'auth_data';
  public user: IUser;
  constructor() {
    if (localStorage.getItem(this.USER_KEY)) {
      this.isloggedIn = true;
    } else {
      this.isloggedIn = false;
    }
  }

  isUserLoggedIn(): boolean {
    var data = JSON.parse(localStorage.getItem(this.USER_KEY)  || '{}' );
    const now = new Date(Date.now());
    const expiresDate = new Date(data?.expires || now);
    const difftime = expiresDate.getTime() - now.getTime();
    if (difftime > 0) {
      this.isloggedIn = true;
    } else {
      this.isloggedIn = false;
    }
    return this.isloggedIn;
  }

  logoutUser(): void {
    this.isloggedIn = false;
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem('loginData');
  }

  getToken(): string {
    // let data = localStorage.getItem(this.USER_KEY);
    // let _token = JSON.parse(data).token;
    let _token="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJ0ZXN0QHRlc3QuY29tIiwibmFtZSI6IjAxMjEyMTIxMiIsIm5iZiI6MTY2MDc3NzcxOCwiZXhwIjoxNjYzMzY5NzE4LCJpYXQiOjE2NjA3Nzc3MTh9.HUlxjAFtHM-woPR4imEABk8kPHZwgio9s-Ccs_gihap6fTZBXIAKThcGKx6bcJtPoHRkjnImYDlSh8KVT0chKQ"; 
    return _token;
  }

  getUsername(): string {
    let data: any = JSON.parse(localStorage.getItem(this.USER_KEY));
    return data?.user?.fullName;
  }

  getCurrentUserId(): string {
    if (!this.isUserLoggedIn) return null;
    if (!this.user) {
      let data: any = JSON.parse(localStorage.getItem(this.USER_KEY));
      this.user = data?.user;
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
