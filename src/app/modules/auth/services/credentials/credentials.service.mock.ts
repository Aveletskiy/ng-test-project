import { Credentials } from '../..';

export class MockCredentialsService {
  public credentials: Credentials | null = {
    username: 'test',
    token: '123',
  };

  public isAuthenticated(): boolean {
    return !!this.credentials;
  }

  public setCredentials(credentials?: Credentials, _remember?: boolean) {
    this.credentials = credentials || null;
  }
}
