import { AlfrescoDocumentComponent } from './../../alfresco-document.component';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlfrescoDocumentApi } from 'src/app/api/alfresco-document-api/alfreco-document-api';
import { ToastService } from 'src/app/_services/toast.service';
import { AlfrescoDocumentDTO } from '../../alfresco-document-dto';


@Component({
  selector: 'app-alfresco-document-list',
  templateUrl: './alfresco-document-list.component.html',
  styleUrls: ['./alfresco-document-list.component.css']
})
export class AlfrescoDocumentListComponent implements OnInit {


  @Input()
  document: AlfrescoDocumentDTO = {
    id: 0,
    documentId: '',
    name: '',
    size: 0,
    contentType: '',
    versions: []
  };
  selectedVersion!: string;


  constructor(private http: HttpClient,
    private alfrescoDoc: AlfrescoDocumentComponent,
    private alfrescoDocAPI: AlfrescoDocumentApi, private toastService: ToastService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }


  onClick(id: string) {
    this.selectedVersion = id;
  }


}
