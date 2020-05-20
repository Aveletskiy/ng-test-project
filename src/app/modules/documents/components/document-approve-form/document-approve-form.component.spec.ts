import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentApproveFormComponent } from './document-approve-form.component';

describe('DocumentApproveFormComponent', () => {
  let component: DocumentApproveFormComponent;
  let fixture: ComponentFixture<DocumentApproveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentApproveFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentApproveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
