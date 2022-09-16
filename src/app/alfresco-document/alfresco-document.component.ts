import { Component, OnInit } from '@angular/core';
import { AlfrescoDocumentApi } from '../api/alfresco-document-api/alfreco-document-api';
import { AlfrescoDocumentDTO } from './alfresco-document-dto';

import fileDownload from 'js-file-download';
import axios from "axios";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-alfresco-document',
  templateUrl: './alfresco-document.component.html',
  styleUrls: ['./alfresco-document.component.css']
})
export class AlfrescoDocumentComponent implements OnInit {

  documents: AlfrescoDocumentDTO[] = [];
  selectedVersion!: string;

  constructor(private http: HttpClient, private alfrescoDocAPI: AlfrescoDocumentApi, private toastService: ToastService,
    private modalService: NgbModal) { }

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


  delete(id: string) {
    if (window.confirm('Are you sure you want to delete this folder')) {
      this.alfrescoDocAPI.delete(id)
        .then(() => {

          this.getAll();
          this.toastService.show('SuccessFully Deleted', {
            classname: 'bg-danger text-light',
            delay: 2000,
            autohide: true
          });
        }).catch((err: any) => {
          console.log(err);
        })
    }
  }



}
