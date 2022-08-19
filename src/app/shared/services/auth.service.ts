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
   let _token="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhZG1pbkBhZG1pbi5jb20iLCJuYW1lIjoiMDEyMTIxMjEyIiwibmJmIjoxNjYwODY4MDY4LCJleHAiOjE2NjM0NjAwNjgsImlhdCI6MTY2MDg2ODA2OH0.Kj1KLERMmny87ZXa9WrcL7xfa11YESnlwmOhYXC2geEIZ7J_mAfxJg4Ax_pnmO8iIq_mrjhp9TYHrDY5kRbRDg"
    
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
