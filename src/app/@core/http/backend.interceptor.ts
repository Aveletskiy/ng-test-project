import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * substitutes a value for the post request to the mock server
 */
@Injectable({
  providedIn: 'root',
})
export class BackendInterceptor implements HttpInterceptor {
  public intercept<T>(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'POST' && request.url.includes('/approval')) {
      return of(
        new HttpResponse({
          status: 201,
          body: {
            message: 'The document was approved successfully',
            code: 201,
            document: request.body,
          },
        })
      );
    }
    return next.handle(request);
  }
}
