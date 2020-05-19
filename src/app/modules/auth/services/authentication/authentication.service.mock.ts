import { Observable, of } from 'rxjs';

import { LoginContext, Credentials } from '../..';

export class MockAuthenticationService {
  public credentials: Credentials | null = {
    username: 'ivanov',
    token: '123',
  };

  public login(context: LoginContext): Observable<Credentials> {
    debugger
    return of({
      username: context.username,
      token: '123456',
    });
  }

  public logout(): Observable<boolean> {
    this.credentials = null;
    return of(true);
  }
}
