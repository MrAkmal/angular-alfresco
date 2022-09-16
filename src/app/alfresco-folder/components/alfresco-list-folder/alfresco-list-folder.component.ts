import { AlfrescoFolderComponent } from './../../alfresco-folder.component';
import { AlfrescoFolder, AlfrescoFolderDTO } from './../../alfresco-folder-dto';
import { Component, Input, OnInit } from '@angular/core';
import { AlfrescoFolderApi } from 'src/app/api/alfresco-document-api/alfresco-folder-api';

@Component({
  selector: 'app-alfresco-list-folder',
  templateUrl: './alfresco-list-folder.component.html',
  styleUrls: ['./alfresco-list-folder.component.css']
})
export class AlfrescoListFolderComponent implements OnInit {

  @Input()
  folders: AlfrescoFolder[] = [];
  constructor(private alfrescoFolderApi: AlfrescoFolderComponent) { }

  ngOnInit(): void {
  }


  delete(id: string) {

    this.alfrescoFolderApi.delete(id);
  }


}
