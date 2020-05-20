import { DocResolutionEnum } from '@app/modules/documents/models/documents.enum';

export interface IDocumentWithContent {
  id: number;
  title: string | null;
  content: string | null;
  approver: string;
}

export interface IDocumentApproval {
  id?: number;
  documentId: number;
  approver: string;
  resolution: DocResolutionEnum;
  comment: string;
  state: number;
}

export interface IDocumentApprovalResponse {
  code: number;
  document: IDocumentApproval;
  message: string;
}
