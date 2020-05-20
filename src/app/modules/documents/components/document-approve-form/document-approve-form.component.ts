import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocResolutionEnum, IDocumentApprovalResponse } from '@app/modules/documents/models';
import { DocumentsService } from '@app/modules/documents/services';
import { Logger, untilDestroyed } from '@core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

const log = new Logger('Approve-form');

@Component({
  selector: 'app-document-approve-form',
  templateUrl: './document-approve-form.component.html',
  styleUrls: ['./document-approve-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentApproveFormComponent implements OnInit, OnDestroy {
  public approveForm!: FormGroup;
  public isLoading = false;
  public error: string | undefined;
  public resolutions$: BehaviorSubject<string[]> = new BehaviorSubject(Object.values(DocResolutionEnum));
  public documentId = 1;
  public alreadyLoaded$: Observable<boolean> = this.documentsService.alreadyLoadedDocument$;
  public alreadyApproved$: Observable<boolean> = this.documentsService.alreadyApprovedDocument$;
  public approvalResponse$: ReplaySubject<IDocumentApprovalResponse> = new ReplaySubject(1);

  constructor(private formBuilder: FormBuilder, private documentsService: DocumentsService) {
    this.createForm();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  public sendApproval(state: number): void {
    if (this.approveForm.valid) {
      this.approveForm.patchValue({ state, documentId: this.documentId });
      const approval = { ...this.approveForm.value };
      log.info(approval);
      this.documentsService
        .postDocumentApproval(approval)
        .pipe(
          tap((data) => log.info(data)),
          tap(() => this.documentsService.changeDocumentLoadingState(false)),
          tap(() => this.documentsService.changeDocumentApprovedState(true)),
          tap((data) => this.approvalResponse$.next(data)),
          untilDestroyed(this)
        )
        .subscribe(
          () => log.debug(`Form successfully send and approved`),
          (err) => log.debug(`an error occurred: ${err.message}`)
        );
    }
  }

  public resetForm(): void {
    this.createForm();
    this.documentsService.changeDocumentApprovedState(false);
    this.approvalResponse$.next(null);
  }

  private createForm(): void {
    this.approveForm = this.formBuilder.group({
      documentId: [null],
      approver: ['', Validators.required],
      resolution: [null, Validators.required],
      comment: [''],
      state: [null],
    });
    log.debug(`Form created`);
  }
}
