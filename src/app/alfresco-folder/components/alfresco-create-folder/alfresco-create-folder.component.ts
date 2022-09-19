import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlfrescoFolderApi } from 'src/app/api/alfresco-document-api/alfresco-folder-api';
import { ToastService } from 'src/app/_services/toast.service';
import { AlfrescoFolderDTO } from '../../alfresco-folder-dto';
import { AlfrescoFolderComponent } from '../../alfresco-folder.component';

@Component({
  selector: 'app-alfresco-create-folder',
  templateUrl: './alfresco-create-folder.component.html',
  styleUrls: ['./alfresco-create-folder.component.css']
})
export class AlfrescoCreateFolderComponent implements OnInit {

  folders: AlfrescoFolderDTO[] = [];
  folderForm: FormGroup;


  constructor(private fb: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    private modalService: NgbModal,
    private alfrescoFolderApi: AlfrescoFolderApi,
    private alfrescoFolderComponent: AlfrescoFolderComponent) {

    this.folderForm = this.fb.group({
      name: ['', Validators.required],
      parentFolderId: ''
    });

  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.getAllFolder();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  save() {

    const val = this.folderForm.value;
    console.log("value: ", val.name, val.parentId);

    if (val.name && val.parentFolderId) {
      this.alfrescoFolderApi.save(val.name, val.parentFolderId)
        .then((res: any) => {
          console.log("response: ", res);
          this.modalService.dismissAll();

          
          this.toastService.show('SuccessFully Created', {
            classname: 'bg-success text-light',
            delay: 2000,
            autohide: true
          });

          this.alfrescoFolderComponent.getMainFolder();
          this.folderForm = this.fb.group({
            name: ['', Validators.required],
            parentFolderId: ''
          });
          this.folders=[];

        }).catch((err: any) => {
          console.log(err);
        });
    }

  }


  getAllFolder() {
    this.alfrescoFolderApi.getAll()
      .then(res => {
        console.log(res);
        this.folders = res;
      }).catch(err => {
        console.log(err);
      })
  }


}
