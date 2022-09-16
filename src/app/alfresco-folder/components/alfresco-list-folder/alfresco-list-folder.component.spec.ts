import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfrescoListFolderComponent } from './alfresco-list-folder.component';

describe('AlfrescoListFolderComponent', () => {
  let component: AlfrescoListFolderComponent;
  let fixture: ComponentFixture<AlfrescoListFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfrescoListFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfrescoListFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
