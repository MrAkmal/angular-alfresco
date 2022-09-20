import { Component, OnInit } from '@angular/core';
import { AlfrescoDocumentApi } from '../api/alfresco-document-api/alfreco-document-api';
import { AlfrescoDocumentDTO } from './alfresco-document-dto';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../_services/toast.service';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-alfresco-document',
  templateUrl: './alfresco-document.component.html',
  styleUrls: ['./alfresco-document.component.css']
})
export class AlfrescoDocumentComponent implements OnInit {

  documents: AlfrescoDocumentDTO[] = [];

  msgs: Message[] = [];



  constructor(private primengConfig: PrimeNGConfig, private http: HttpClient, private alfrescoDocAPI: AlfrescoDocumentApi, private toastService: ToastService,
    private modalService: NgbModal, private confirmationService: ConfirmationService, private messageService: MessageService) { }

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

    this.messageService.clear('c');

    this.alfrescoDocAPI.delete(id)
      .then(() => {
        this.getAll();
        this.messageService.add({ severity: 'error', summary: 'Deleted', detail: 'Successfully Deleted' });
      }).catch((err: any) => {
        console.log(err);
        this.getAll();
        this.toastService.show('Error Deleting', {
          classname: 'bg-danger text-light',
          delay: 2000,
          autohide: true
        });
      })
  }



  showConfirm(id:any) {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true,
    severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed',id:id });
  }


  onReject() {
    this.messageService.clear('c');
    this.messageService.add({
      severity: "info",
      summary: "Cancelled",
      detail: "Deleteing Cancelled"
    });
  }

}





