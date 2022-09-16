import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfrescoCreateFolderComponent } from './alfresco-create-folder.component';

describe('AlfrescoCreateFolderComponent', () => {
  let component: AlfrescoCreateFolderComponent;
  let fixture: ComponentFixture<AlfrescoCreateFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfrescoCreateFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfrescoCreateFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
