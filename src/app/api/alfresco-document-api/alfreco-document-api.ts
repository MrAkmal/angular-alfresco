import { Injectable } from "@angular/core";
import axios from "axios";
import { AlfrescoDocumentDTO } from "src/app/alfresco-document/alfresco-document-dto";


@Injectable(
    {providedIn: "root"}
)
export class AlfrescoDocumentApi{

    baseUrl:string="http://localhost:9090/v1/alfresco/document"

    constructor(){

    }



    async getAll(){

        try {
            const res = await axios.get(this.baseUrl);
            console.log(res);
            return res.data.data;
          } catch (err) {
            console.log(err);
          }
    }

    async getDocumentByFolderId(id:string){

      try {
          const res = await axios.get(this.baseUrl+'/documents/'+id);
          console.log(res);
          return res.data.data;
        } catch (err) {
          console.log(err);
        }
  }

    async download(documentId:string,version:string){

        try {
            const res = await axios.get(this.baseUrl+'/'+documentId+'/'+version);
            console.log(res);
            return res.data;
          } catch (err) {
            console.log(err);
          }
    }

}
