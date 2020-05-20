import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';

// components
import { DocumentApproveFormComponent, DocumentViewerComponent } from './components';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, FormsModule, NgSelectModule, ReactiveFormsModule],
  declarations: [DocumentApproveFormComponent, DocumentViewerComponent],
  entryComponents: [DocumentApproveFormComponent],
  exports: [DocumentApproveFormComponent],
})
export class DocumentsModule {}
