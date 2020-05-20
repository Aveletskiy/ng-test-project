import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// modules
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { DocumentsModule } from '@app/modules/documents/documents.module';

// components
import { HomeComponent } from './components';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, DocumentsModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
