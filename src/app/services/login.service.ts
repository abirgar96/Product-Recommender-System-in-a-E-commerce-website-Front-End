import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Tokens } from '../models/token';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAdmin: boolean = false
  isUser: boolean = false
  jwt: string
  role: string
  username: string
  readonly JWT_TOKEN = 'JWT_TOKEN';
  readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  loggedUser: any;

  constructor(private http: HttpClient) { }

  loginStatus: boolean = localStorage.getItem('loginIn') ? true : false

  // login(user:any){
  //     return this.http.post(`${environment.baseUrl}/auth/login`,user)
  //   }

  login(user: any): Observable<boolean> {
    return this.http.post<any>(`${environment.baseUrl}/auth/login`, user)
      .pipe(
        tap(res => {
          const tokens = {
            jwt: res['data'].token,
            refreshToken: res['data'].refreshToken
          }
           
          localStorage.setItem("user", JSON.stringify(res['data'].user));
          this.doLoginUser(user.email, tokens)
          var decoded: any = jwt_decode(res['data'].token)
          localStorage.setItem("role", decoded['role']);

        }
        ),
        mapTo(true),
        catchError(error => {
          // alert(error.error);
          return of(false);
        }));
  }

  register(user: any) {
    return this.http.post(`${environment.baseUrl}/auth/register`, user)
  }

  forgetpassword(user: any) {
    return this.http.post(`${environment.baseUrl}/auth/forget`, user)
  }

  resetpassword(user: any) {
    return this.http.post(`${environment.baseUrl}/auth/restpassword`, user)
  }


  //  refreshToken1(){
  //   const refreshToken=this.getRefreshToken()
  //   // const user=JSON.parse(localStorage.getItem('user'))
  //   const iduser=user._id 
  //   return this.http.post(`${environment.baseUrl}/auth/refresh/${iduser}`,{'refreshToken':refreshToken})
  //  }


  // refreshToken() {
  //   const user=JSON.parse(localStorage.getItem('user'))
  //   const refreshToken=this.getRefreshToken()

  //   return this.http.post<any>(`${environment.baseUrl}/auth/refresh/${user._id}`,{'refreshToken':refreshToken}).
  //   pipe(tap((res:any) => {
  //     console.log("token refresh",res["token"])
  //     this.storeJwtToken(res['token']);
  //   }));
  // }


  //  getprofile(iduser:any) {
  //   let headers = new HttpHeaders({'access-token': localStorage.getItem('token')});
  //   return this.http.get(environment.baseUrl + '/users/'+ iduser, {headers: headers});
  // }

  getloginstatus() {
    return localStorage.getItem("loginIn") ? true : false;
  }

  setloginstatus(x: any) {
    this.loginStatus = x
  }

  logout() {
    const refreshtoken = this.getRefreshToken()
    return this.http.post<any>(`${environment.baseUrl}/auth/logout`, { 'refreshToken': refreshtoken }).pipe(
      tap((res) => {
        console.log("logout")
        this.doLogoutUser()
      }),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }


  isLoggedIn() {
    return !!this.getJwtToken();
  }


  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
    localStorage.clear()
  }

  getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }




  // this.http.get(url, {headers: headers, params: params}); 
  // //No need to use .map(res => res.json()) anymore


  /* isAdmin(){
      if (this.role=="admin")
        return true;
     }
  
   isUser(){
     if (this.role=='candidat')
        return true;
    
   }*/



































  /* isAdmin(){
      if (this.role=="admin")
        return true;
     }
  
   isUser(){
     if (this.role=='candidat')
        return true;
    
   }
   */

}
