import { TreeNode } from 'primeng/api';
import { AlfrescoFolderApi } from './../api/alfresco-document-api/alfresco-folder-api';
import { Component, OnInit } from '@angular/core';
import { AlfrescoFolder, AlfrescoFolderDTO } from './alfresco-folder-dto';
import { ToastService } from '../_services/toast.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AlfrescoDocumentApi } from '../api/alfresco-document-api/alfreco-document-api';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
@Component({
  selector: 'app-alfresco-folder',
  templateUrl: './alfresco-folder.component.html',
  styleUrls: ['./alfresco-folder.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class AlfrescoFolderComponent implements OnInit {

  folders: TreeNode[] = [];

  folderDialog: boolean | undefined;

  submitted: boolean | undefined;

  cols = [
    { field: 'id', header: 'Expand' },
    { field: 'name', header: 'Name' },
    { field: 'parentId', header: 'ParentId' },
    { field: 'folderId', header: 'FolderId' }
  ];



  constructor(private alfrescoFolderApi: AlfrescoFolderApi, private toastService: ToastService,
    private alfrescoDocAPI: AlfrescoDocumentApi,private messageService: MessageService) { }

  ngOnInit() {
    this.getMainFolder();
  }


  getMainFolder() {
    this.alfrescoFolderApi.getMainFolder()
      .then(res => {
        console.log(res);
        let result: TreeNode[] = [];
        this.folders = this.loadData(res, result);
        console.log("folders:", this.folders)
      }).catch(err => {
        console.log(err);
      })

  }


  loadData(res: AlfrescoFolderDTO[], result: TreeNode[]): TreeNode[] {
    for (let i = 0; i < res.length; i++) {

      result.push({
        data: {
          id: res[i].id,
          name: res[i].name,
          parentId: res[i].parentId,
          folderId: res[i].folderId
        },
        children: this.getSubFolders(res[i].folderId)
      });
    }

    return result;
  }

  getSubFolders(folderId: any): TreeNode[] {
    let data: TreeNode[] = [];
    this.alfrescoFolderApi.getSubFolders(folderId)
      .then(res => {
        if (res != null) {
          for (let i = 0; i < res.length; i++) {
            data.push({
              data: {
                id: res[i].id,
                name: res[i].name,
                parentId: res[i].parentId,
                folderId: res[i].folderId
              },
              children: this.getSubFolders(res[i].folderId)
            });
          }
        }
      }).catch(err => {
        console.log(err);
      });
    return data;
  }



  delete(id: any) {
    console.log("any:",id);
    if (window.confirm('Are you sure you want to delete this folder')) {
      this.alfrescoFolderApi.delete(id)
        .then(res => {

          this.getMainFolder();
          this.messageService.add({severity:'error', summary: 'Deleted', detail: 'Successfully Deleted'});
        }).catch(err => {
          console.log(err);
        })
    }
  }



}
function onNodeExpand(e: any, event: Event | undefined) {
  throw new Error('Function not implemented.');
}

