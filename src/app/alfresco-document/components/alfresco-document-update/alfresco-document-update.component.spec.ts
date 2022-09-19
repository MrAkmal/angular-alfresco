import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfrescoDocumentUpdateComponent } from './alfresco-document-update.component';

describe('AlfrescoDocumentUpdateComponent', () => {
  let component: AlfrescoDocumentUpdateComponent;
  let fixture: ComponentFixture<AlfrescoDocumentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfrescoDocumentUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfrescoDocumentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
