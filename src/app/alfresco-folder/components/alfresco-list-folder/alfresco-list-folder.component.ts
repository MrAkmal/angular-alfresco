import { AlfrescoFolder, AlfrescoFolderDTO } from './../../alfresco-folder-dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alfresco-list-folder',
  templateUrl: './alfresco-list-folder.component.html',
  styleUrls: ['./alfresco-list-folder.component.css']
})
export class AlfrescoListFolderComponent implements OnInit {

  @Input()
  folders:AlfrescoFolder[]=[];
  constructor() { }

  ngOnInit(): void {
  }


  delete(id: string) {
    
  }


}
