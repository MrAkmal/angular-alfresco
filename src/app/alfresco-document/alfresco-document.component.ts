import { Component, OnInit } from '@angular/core';
import { AlfrescoDocumentApi } from '../api/alfresco-document-api/alfreco-document-api';
import { AlfrescoDocumentDTO } from './alfresco-document-dto';
<<<<<<< HEAD

import fileDownload from 'js-file-download';
import axios from "axios";
import { HttpClient, HttpHeaders } from '@angular/common/http';
=======
>>>>>>> f352a71a614052a8fb1d28b00dc155274302c963

@Component({
  selector: 'app-alfresco-document',
  templateUrl: './alfresco-document.component.html',
  styleUrls: ['./alfresco-document.component.css']
})
export class AlfrescoDocumentComponent implements OnInit {

  documents: AlfrescoDocumentDTO[] = [];

  selectedVersion: any;

  constructor(private http:HttpClient,private alfrescoDocAPI: AlfrescoDocumentApi) { }

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
<<<<<<< HEAD
    console.log("version: " + this.selectedVersion);


    this.downloadFile(documentId);
    // axios.get('http://localhost:7070/v1/alfresco/document' + '/' + documentId + '/' + this.selectedVersion,{
    //   "responseType": 'blob'
    // })
    //   .then(res => {

    //     var filename = "";
    //     var disposition = res.headers['Content-Disposition'];
    //     if (disposition && disposition.indexOf('attachment') !== -1) {
    //         var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    //         var matches = filenameRegex.exec(disposition);
    //         if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
    //     }


    //     let contentType = res.headers['content-type'];

    //     console.log(res.headers)
    //     console.log(contentType);
    //     let fileName = res.headers['file-name'];
    //     console.log(fileName);
        
    //     fileDownload(res.data,fileName);
    //   }).catch(err => {
    //     console.log(err);
    //   })
=======

>>>>>>> f352a71a614052a8fb1d28b00dc155274302c963
  }



  downloadFile(documentId: string){

    const baseUrl = 'http://localhost:7070/v1/alfresco/document' + '/' + documentId + '/' + this.selectedVersion;


    this.http.get(baseUrl ,{responseType: 'blob' }).subscribe(
        (response) =>{


          // var filename = "";
          // var disposition = response.headers.get('Content-Disposition');
          // if (disposition && disposition.indexOf('attachment') !== -1) {
          //     var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          //     var matches = filenameRegex.exec(disposition);
          //     if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
          // }


          // let someee = response.headers.get('file-name');
          
          // console.log(someee);

            let dataType = response.type;
            let binaryData = [];
            binaryData.push(response);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
            if ("filename")
                downloadLink.setAttribute('download',"filename");
            document.body.appendChild(downloadLink);
            downloadLink.click();
        }
    )
}




}
