import { TreeNode } from 'primeng/api';
import { AlfrescoFolderApi } from './../api/alfresco-document-api/alfresco-folder-api';
import { Component, OnInit } from '@angular/core';
import {  AlfrescoFolderDTO } from './alfresco-folder-dto';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ConfirmationService, MessageService } from 'primeng/api';

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


  constructor(
    private alfrescoFolderApi: AlfrescoFolderApi,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
    ) { }

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

    this.confirmationService.confirm({
      message: "Are you sure that you want to proceed?",
      header: 'Confirmation',
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.alfrescoFolderApi.delete(id)
          .then(res => {

            this.getMainFolder();
            this.messageService.add({ severity: 'error', summary: 'Deleted', detail: 'Successfully Deleted' });
          }).catch(err => {
            console.log(err);
          })
      },
      reject: () => {
        this.messageService.add({
          severity: "info",
          summary: "Cancelled",
          detail: "Deleteing Cancelled"
        });
      }
    });
  }




}

