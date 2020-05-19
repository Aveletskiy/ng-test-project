import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// modules
import { I18nModule } from '@app/i18n';
import { AuthModule } from '@app/modules/auth/auth.module';

// components
import { ShellComponent, HeaderComponent } from '@app/modules/shell/components';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    AuthModule,
    I18nModule,
    RouterModule
  ],
  declarations: [HeaderComponent, ShellComponent],
})
export class ShellModule {}
