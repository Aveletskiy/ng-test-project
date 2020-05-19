import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationGuard } from '@app/guards';

import { AuthenticationService } from '../auth';

import { MockAuthenticationService } from '@app/modules/auth';
import { ShellComponent } from '@app/modules/shell/components';
import { Shell } from './services/shell.service';

describe('Shell', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellComponent],
      providers: [AuthenticationGuard, { provide: AuthenticationService, useClass: MockAuthenticationService }],
    });
  });

  describe('childRoutes', () => {
    it('should create routes as children of shell', () => {
      // Prepare
      const testRoutes = [{ path: 'test' }];

      // Act
      const result = Shell.childRoutes(testRoutes);

      // Assert
      expect(result.path).toBe('');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(ShellComponent);
    });
  });
});
