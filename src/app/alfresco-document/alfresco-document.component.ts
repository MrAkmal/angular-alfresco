import { Component, OnInit } from '@angular/core';
import b64toBlob from 'b64-to-blob';
import * as saveAs from 'file-saver';
import { AlfrescoDocumentApi } from '../api/alfresco-document-api/alfreco-document-api';
import { AlfrescoDocumentDTO } from './alfresco-document-dto';
import axios from "axios";

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
    console.log("version: " + this.selectedVersion);
    axios.get('http://localhost:7070/v1/alfresco/document' + '/' + documentId + '/' + this.selectedVersion)
      .then(res => {

        console.log(res);
        let blob: Blob = res.data as Blob;
        let contentType = res.headers['content-type'];
        let fileName = res.headers['content-disposition']?.split(';')[1].split('=')[1];

        console.log(contentType);
        console.log(fileName);

        const blo = b64toBlob(res.data, contentType);
        saveAs(blo, fileName);

      }).catch(err => {
        console.log(err);
      })
  }

}
