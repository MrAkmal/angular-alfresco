import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfrescoUpdateFolderComponent } from './alfresco-update-folder.component';

describe('AlfrescoUpdateFolderComponent', () => {
  let component: AlfrescoUpdateFolderComponent;
  let fixture: ComponentFixture<AlfrescoUpdateFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfrescoUpdateFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfrescoUpdateFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
