import { AlfrescoFolderApi } from './../api/alfresco-document-api/alfresco-folder-api';
import { Component, Input, OnInit } from '@angular/core';
import { AlfrescoFolder, AlfrescoFolderDTO } from './alfresco-folder-dto';
import { ToastService } from '../_services/toast.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AlfrescoDocumentDTO } from '../alfresco-document/alfresco-document-dto';
import { AlfrescoDocumentApi } from '../api/alfresco-document-api/alfreco-document-api';

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

  folders: AlfrescoFolder[] = [];



  folderDialog: boolean | undefined;

  submitted: boolean | undefined;

  constructor(private alfrescoFolderApi: AlfrescoFolderApi, private toastService: ToastService,
    private alfrescoDocAPI: AlfrescoDocumentApi) { }

  ngOnInit() {
    this.getMainFolder();
  }


  getMainFolder() {
    this.alfrescoFolderApi.getMainFolder()
      .then(res => {
        console.log(res);
        let result: AlfrescoFolder[] = [];
        this.folders = this.loadData(res, result);
        console.log("result: ", this.folders);
      }).catch(err => {
        console.log(err);
      })
  }

  loadData(res: AlfrescoFolder[], result: AlfrescoFolder[]): AlfrescoFolder[] {
    for (let i = 0; i < res.length; i++) {

      result.push({
        id: res[i].id,
        name: res[i].name,
        parentId: res[i].parentId,
        folderId: res[i].folderId,
        subFolders: this.getSubFolders(res[i].folderId),
        documents: []
      });

    }

    return result;
  }

  getSubFolders(folderId: string): AlfrescoFolder[] {
    let data: AlfrescoFolder[] = [];
    this.alfrescoFolderApi.getSubFolders(folderId)
      .then(res => {
        if (res != null) {
          for (let i = 0; i < res.length; i++) {
            data.push({
              id: res[i].id,
              name: res[i].name,
              parentId: res[i].parentId,
              folderId: res[i].folderId,
              subFolders: this.getSubFolders(res[i].folderId),
              documents: []
            });


          }
        }
      }).catch(err => {
        console.log(err);
      });
    return data;
  }

  getAllDocuments(id: number): AlfrescoDocumentDTO[] {
    let data: AlfrescoDocumentDTO[] = [];
    this.alfrescoDocAPI.getDocumentByFolderId(id)
      .then(res => {
        if (res != null) {
          data = res;
          console.log("data:", data);
        }
      }).catch(err => {
        console.log(err);
      });
    return data;
  }

  delete(id: string) {
    if (window.confirm('Are you sure you want to delete this folder')) {
      this.alfrescoFolderApi.delete(id)
        .then(res => {

          this.getMainFolder();
          this.toastService.show('SuccessFully Deleted', {
            classname: 'bg-danger text-light',
            delay: 2000,
            autohide: true
          });
        }).catch(err => {
          console.log(err);
        })
    }
  }



}
