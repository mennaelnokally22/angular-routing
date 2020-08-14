import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

import { map, shareReplay, tap } from "rxjs/operators";

import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  currentUser: object = null;
  token: string = "";

  login(email: string, password: string) {
    return this.http
      .post(`${environment.backendBaseUrl}/user/login`, {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          this.setSession(res);
        }),
        map((res: { token: string; user: Object }) => {
          this.currentUser = res.user;
          this.token = res.token;
        }),
        shareReplay()
      );
  }

  private setSession(authResult) {
    const expiresAt = moment().add("23hours", "second");
    console.log(authResult);
    localStorage.setItem("token", authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
