import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlfrescoFolderApi } from 'src/app/api/alfresco-document-api/alfresco-folder-api';
import { ToastService } from 'src/app/_services/toast.service';
import { AlfrescoFolderDTO } from '../../alfresco-folder-dto';
import { AlfrescoFolderComponent } from '../../alfresco-folder.component';

@Component({
  selector: 'app-alfresco-update-folder',
  templateUrl: './alfresco-update-folder.component.html',
  styleUrls: ['./alfresco-update-folder.component.css']
})
export class AlfrescoUpdateFolderComponent implements OnInit {

  @Input()
  id!: string;
  folders: AlfrescoFolderDTO[] = [];
  folderForm: FormGroup;
  folder: AlfrescoFolderDTO = {
    id: 0,
    name: '',
    parentId: '',
    folderId: ''
  };


  constructor(private fb: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    private modalService: NgbModal,
    private alfrescoFolderApi: AlfrescoFolderApi,
    private alfrescoFolderComponent: AlfrescoFolderComponent) {

    this.folderForm = this.fb.group({
      name: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.getAllFolder();
    this.get();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  update() {

    const val = this.folderForm.value;

    console.log(val.name,this.id);
    if (val.name) {
      this.alfrescoFolderApi.update(val.name, this.id)
        .then((res: any) => {
          console.log("response: ", res);
          this.modalService.dismissAll();

          this.toastService.show('SuccessFully Updated', {
            classname: 'bg-info text-light',
            delay: 2000,
            autohide: true
          });

          this.alfrescoFolderComponent.getMainFolder();
          this.folderForm = this.fb.group({
            name: ['', Validators.required],
            parentFolderId: ''
          });
          this.folders = [];
          this.folder = {
            id: 0,
            name: '',
            parentId: '',
            folderId: ''
          };

        }).catch((err: any) => {
          console.log(err);
        });
    }

  }


  getAllFolder() {
    this.alfrescoFolderApi.getAll()
      .then(res => {
        if (res != null) {
          res.push({
            name: "Root Folder",
            folderId: 0
          });
          this.folders = res;
        }else{
          this.folders.push({
            name: "Root Folder",
            folderId: '0',
            id: 0,
            parentId: ''
          });
        }
      }).catch(err => {
        console.log(err);
      })
  }

  get() {
    this.alfrescoFolderApi.get(this.id)
      .then(res => {
        console.log(res);
        this.folder = res;
      }).catch(err => {
        console.log(err);
      })
  }


}
