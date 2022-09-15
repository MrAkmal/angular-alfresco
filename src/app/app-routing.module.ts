import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlfrescoDocumentComponent } from './alfresco-document/alfresco-document.component';
import { AlfrescoFolderComponent } from './alfresco-folder/alfresco-folder.component';

const routes: Routes = [
  {
    path:"documents",
    component:AlfrescoDocumentComponent
  },
  {
    path:"folders",
    component:AlfrescoFolderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
