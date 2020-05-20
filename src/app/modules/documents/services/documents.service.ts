import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDocumentApproval, IDocumentApprovalResponse, IDocumentWithContent } from '@app/modules/documents/models';
import { RandomQuoteContext } from '@app/modules/home/services';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const routes = {
  documents: (c: number) => `/documents/${c}`,
  approval: '/approval',
};

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  public alreadyLoadedDocumentSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly alreadyLoadedDocument$: Observable<boolean> = this.alreadyLoadedDocumentSubject$.asObservable();
  public alreadyApprovedDocumentSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly alreadyApprovedDocument$: Observable<boolean> = this.alreadyApprovedDocumentSubject$.asObservable();

  constructor(private http: HttpClient) {}

  public changeDocumentLoadingState(state: boolean): void {
    this.alreadyLoadedDocumentSubject$.next(state);
  }

  public changeDocumentApprovedState(state: boolean): void {
    this.alreadyApprovedDocumentSubject$.next(state);
  }

  public getDocumentById(id: number): Observable<IDocumentWithContent> {
    return this.http.get<IDocumentWithContent>(routes.documents(id));
  }

  public postDocumentApproval(approval: IDocumentApproval): Observable<IDocumentApprovalResponse> {
    return this.http.post<IDocumentApprovalResponse>(routes.approval, approval);
  }
}
