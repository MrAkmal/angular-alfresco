import { Component, OnInit } from '@angular/core';
import { AlfrescoDocumentApi } from '../api/alfresco-document-api/alfreco-document-api';
import { AlfrescoDocumentDTO } from './alfresco-document-dto';

@Component({
  selector: 'app-alfresco-document',
  templateUrl: './alfresco-document.component.html',
  styleUrls: ['./alfresco-document.component.css']
})
export class AlfrescoDocumentComponent implements OnInit {

  documents: AlfrescoDocumentDTO[] = [];

  selectedVersion: any;

  constructor(private alfrescoDocAPI: AlfrescoDocumentApi) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.alfrescoDocAPI.getAll()
      .then(res => {
        console.log(res);
        this.documents = res;
      }).catch(err => {
        console.log(err);
      })
  }

  download(documentId: string) {

  }

}
