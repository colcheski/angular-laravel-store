import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {};

  private xsrfHeaderName = 'X-XSRF-TOKEN'

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const xsrfToken = this.tokenExtractor.getToken();

    if (xsrfToken !== null) {
      const authReq = req.clone({
        setHeaders: { [this.xsrfHeaderName]: xsrfToken }
      })
      return next.handle(authReq);
    }

    return next.handle(req);
  }
  
};
