import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlfrescoDocumentApi } from 'src/app/api/alfresco-document-api/alfreco-document-api';
import { AlfrescoDocumentComponent } from '../../alfresco-document.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-alfresco-document-update',
  templateUrl: './alfresco-document-update.component.html',
  styleUrls: ['./alfresco-document-update.component.css']
})
export class AlfrescoDocumentUpdateComponent implements OnInit {


  @Input()
  documentId!: string;

  @Input()
  documentName!: string;

  documentForm: FormGroup;
  multipartFile!: File;


  constructor(private fb: FormBuilder,
    private alfrescoDocApi: AlfrescoDocumentApi,
    private alfrescoDoc: AlfrescoDocumentComponent,
    private messageService: MessageService) {

    this.documentForm = this.fb.group({
    });

  }

  ngOnInit(): void {
  }

  displayModal!: boolean;
  showModalDialog() {
    this.displayModal = true;
  }


  onChange(event: any) {
    this.multipartFile = event.target.files[0];
  }

  update() {

    if (this.multipartFile) {
      this.alfrescoDocApi.update(this.multipartFile, this.documentId)
        .then(res => {
          this.displayModal = false;
          this.messageService.add({ severity: 'info', summary: 'Updated', detail: 'Successfully Updated' });
          this.alfrescoDoc.getAll();
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
    } else {
      this.displayModal = false;
      this.messageService.add({ severity: 'info', summary: 'Updated', detail: 'Successfully Updated' });
    }
  }


}
