import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfrescoDocumentCreateComponent } from './alfresco-document-create.component';

describe('AlfrescoDocumentCreateComponent', () => {
  let component: AlfrescoDocumentCreateComponent;
  let fixture: ComponentFixture<AlfrescoDocumentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfrescoDocumentCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfrescoDocumentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
