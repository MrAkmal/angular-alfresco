import { AlfrescoDocumentApi } from './../../../api/alfresco-document-api/alfreco-document-api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlfrescoFolderDTO } from 'src/app/alfresco-folder/alfresco-folder-dto';
import { AlfrescoFolderComponent } from 'src/app/alfresco-folder/alfresco-folder.component';
import { AlfrescoFolderApi } from 'src/app/api/alfresco-document-api/alfresco-folder-api';
import { ToastService } from 'src/app/_services/toast.service';
import { AlfrescoDocumentComponent } from '../../alfresco-document.component';
import {FileUploadModule} from 'primeng/fileupload';
import { FileUpload } from 'primeng/fileupload';
import { ConfirmationService, Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-alfresco-document-create',
  templateUrl: './alfresco-document-create.component.html',
  styleUrls: ['./alfresco-document-create.component.css']
})
export class AlfrescoDocumentCreateComponent implements OnInit {


  folders: AlfrescoFolderDTO[] = [];
  documentForm: FormGroup;
  multipartFile!: File;


  constructor(private fb: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    private modalService: NgbModal,
    private alfrescoDocApi: AlfrescoDocumentApi,
    private alfrescoFolderApi: AlfrescoFolderApi,
    private alfrescoDoc: AlfrescoDocumentComponent,
    private messageService: MessageService) {

    this.documentForm = this.fb.group({
      folderId: ''
    });

  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.getAllFolder();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onChange(event: any) {
    console.log(event);
    this.multipartFile = event.target.files[0];
  }

  save() {
    const val = this.documentForm.value;

    console.log("file: ", this.multipartFile);

    if (this.multipartFile && val.folderId != null) {
      this.alfrescoDocApi.save(this.multipartFile, val.folderId)
        .then(res => {
          this.modalService.dismissAll();
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Successfully Created'});
          this.alfrescoDoc.getAll();
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      this.documentForm = this.fb.group({
        folderId: ''
      });
      this.folders = [];
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

