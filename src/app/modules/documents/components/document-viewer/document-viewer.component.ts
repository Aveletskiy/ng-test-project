import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IDocumentWithContent } from '@app/modules/documents/models';
import { DocumentsService } from '@app/modules/documents/services';
import { untilDestroyed } from '@core';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentViewerComponent implements OnInit, OnDestroy {
  @Input() documentId: number;
  public document$: ReplaySubject<IDocumentWithContent> = new ReplaySubject(1);

  constructor(private documentsService: DocumentsService) {}

  ngOnInit(): void {
    this.getDocument();
  }

  ngOnDestroy(): void {}

  private getDocument(): void {
    this.documentsService
      .getDocumentById(this.documentId)
      .pipe(
        tap((data) => this.document$.next(data)),
        tap(() => {
          this.documentsService.changeDocumentLoadingState(true);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
