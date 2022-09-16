import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfrescoFolderDocumentListComponent } from './alfresco-folder-document-list.component';

describe('AlfrescoFolderDocumentListComponent', () => {
  let component: AlfrescoFolderDocumentListComponent;
  let fixture: ComponentFixture<AlfrescoFolderDocumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfrescoFolderDocumentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfrescoFolderDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
