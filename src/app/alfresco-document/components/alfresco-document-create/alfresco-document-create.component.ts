import { AlfrescoDocumentApi } from './../../../api/alfresco-document-api/alfreco-document-api';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlfrescoFolderDTO } from 'src/app/alfresco-folder/alfresco-folder-dto';
import { AlfrescoFolderApi } from 'src/app/api/alfresco-document-api/alfresco-folder-api';
import { AlfrescoDocumentComponent } from '../../alfresco-document.component';
import { MessageService } from 'primeng/api';

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

  displayModal!: boolean;
  showModalDialog() {
    this.displayModal = true;
    this.getAllFolder();
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
          this.displayModal = false;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully Created' });
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
        } else {
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

