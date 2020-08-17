import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("INTERCEPTOR");

    const token = this.authService.token;
    console.log(token);
    let newHeaders = req.headers;
    if (token) {
      newHeaders = newHeaders.append("authtoken", token);
    }
    const modifiedReq = req.clone({ headers: newHeaders });

    return next.handle(modifiedReq);
  }
}
