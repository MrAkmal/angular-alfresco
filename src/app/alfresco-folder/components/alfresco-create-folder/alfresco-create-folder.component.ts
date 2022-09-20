import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlfrescoFolderApi } from 'src/app/api/alfresco-document-api/alfresco-folder-api';
import { ToastService } from 'src/app/_services/toast.service';
import { AlfrescoFolderDTO } from '../../alfresco-folder-dto';
import { AlfrescoFolderComponent } from '../../alfresco-folder.component';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
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
    private alfrescoFolderComponent: AlfrescoFolderComponent,
    private messageService: MessageService) {

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
    console.log("value: ", val.name, val.parentFolderId);

    if (val.name && val.parentFolderId != null) {
      this.alfrescoFolderApi.save(val.name, val.parentFolderId)
        .then((res: any) => {
          console.log("response: ", res);
          this.modalService.dismissAll();


          this.messageService.add({severity:'success', summary: 'Created', detail: 'Successfully Created'});

          this.alfrescoFolderComponent.getMainFolder();
          this.folderForm = this.fb.group({
            name: ['', Validators.required],
            parentFolderId: ''
          });
          this.folders = [];

        }).catch((err: any) => {
          console.log(err);
        });
    }

  }


  getAllFolder() {
    this.alfrescoFolderApi.getAll()
      .then(res => {
        if (res != null) {
          res.push({
            name: "Root Folder",
            folderId: 0
          });
          this.folders = res;
        }else{
          this.folders.push({
            name: "Root Folder",
            folderId: '0',
            id: 0,
            parentId: ''
          });
        }
      }).catch(err => {
        console.log(err);
      })
  }


}
