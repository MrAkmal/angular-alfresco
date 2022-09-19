import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfrescoDocumentListComponent } from './alfresco-document-list.component';

describe('AlfrescoDocumentListComponent', () => {
  let component: AlfrescoDocumentListComponent;
  let fixture: ComponentFixture<AlfrescoDocumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfrescoDocumentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfrescoDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
