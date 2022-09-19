import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlfrescoFolderDTO } from 'src/app/alfresco-folder/alfresco-folder-dto';
import { AlfrescoDocumentApi } from 'src/app/api/alfresco-document-api/alfreco-document-api';
import { AlfrescoFolderApi } from 'src/app/api/alfresco-document-api/alfresco-folder-api';
import { ToastService } from 'src/app/_services/toast.service';
import { AlfrescoDocumentComponent } from '../../alfresco-document.component';

@Component({
  selector: 'app-download-document',
  templateUrl: './download-document.component.html',
  styleUrls: ['./download-document.component.css']
})
export class DownloadDocumentComponent implements OnInit {

  @Input()
  documentId!: string;
  @Input()
  selectedVersion!: string;
  downloadForm: FormGroup;


  constructor(private fb: FormBuilder,
    private router: Router,
    private alfrescoDocApi: AlfrescoDocumentApi,
    private alfrescoFolderApi: AlfrescoFolderApi,
    private alfrescoDoc: AlfrescoDocumentComponent, private http: HttpClient,
    private alfrescoDocAPI: AlfrescoDocumentApi, private toastService: ToastService,
    private modalService: NgbModal) {

    this.downloadForm = this.fb.group({
      name: ''
    });

  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }


  download() {
    console.log("version: " + this.selectedVersion);
    const val = this.downloadForm.value;
    if (this.selectedVersion && this.documentId && val.name) {
      this.downloadFile(this.documentId,val.name);
    } else {
      this.modalService.dismissAll();
      this.toastService.show('Select Version', {
        classname: 'bg-danger text-light',
        delay: 2000,
        autohide: true
      });
    }
  }



  downloadFile(documentId: string,fileName:string) {

    const baseUrl = 'http://localhost:9090/v1/alfresco/document' + '/' + documentId + '/' + this.selectedVersion;


    this.http.get(baseUrl, { responseType: 'blob' }).subscribe(
      (response) => {

        let dataType = response.type;
        let binaryData = [];
        binaryData.push(response);
        let downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
        if (fileName)
          downloadLink.setAttribute('download', fileName);
        document.body.appendChild(downloadLink);
        downloadLink.click();
      }
    )

    this.modalService.dismissAll();
    this.toastService.show('SuccessFully Downloaded', {
      classname: 'bg-success text-light',
      delay: 2000,
      autohide: true
    });
  }
}