import { AlfrescoDocumentDTO } from './../../../alfresco-document/alfresco-document-dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alfresco-folder-document-list',
  templateUrl: './alfresco-folder-document-list.component.html',
  styleUrls: ['./alfresco-folder-document-list.component.css']
})
export class AlfrescoFolderDocumentListComponent implements OnInit {

  @Input()
  documents:AlfrescoDocumentDTO[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
