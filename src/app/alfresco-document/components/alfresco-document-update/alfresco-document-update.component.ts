import { AlfrescoDocumentDTO } from './../../alfresco-document-dto';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlfrescoFolderDTO } from 'src/app/alfresco-folder/alfresco-folder-dto';
import { AlfrescoDocumentApi } from 'src/app/api/alfresco-document-api/alfreco-document-api';
import { AlfrescoFolderApi } from 'src/app/api/alfresco-document-api/alfresco-folder-api';
import { ToastService } from 'src/app/_services/toast.service';
import { AlfrescoDocumentComponent } from '../../alfresco-document.component';
import { ConfirmationService, Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-alfresco-document-update',
  templateUrl: './alfresco-document-update.component.html',
  styleUrls: ['./alfresco-document-update.component.css']
})
export class AlfrescoDocumentUpdateComponent implements OnInit {


  @Input()
  documentId!: string;

  @Input()
  documentName!:string;

  documentForm: FormGroup;
  multipartFile!: File;


  constructor(private fb: FormBuilder,
    private toastService: ToastService,
    private modalService: NgbModal,
    private alfrescoDocApi: AlfrescoDocumentApi,
    private alfrescoDoc: AlfrescoDocumentComponent,
    private messageService: MessageService) {

    this.documentForm = this.fb.group({
    });

  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onChange(event: any) {
    this.multipartFile = event.target.files[0];
  }

  update() {

    if (this.multipartFile) {
      this.alfrescoDocApi.update(this.multipartFile, this.documentId)
        .then(res => {
          this.modalService.dismissAll();
          this.messageService.add({severity:'info', summary: 'Updated', detail: 'Successfully Updated'});
          this.alfrescoDoc.getAll();
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
    }else{
      this.modalService.dismissAll();
          this.toastService.show('Success', {
            classname: 'bg-warning text-light',
            delay: 2000,
            autohide: true
          });
    }
  }


}
