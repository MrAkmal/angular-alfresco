import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { AlfrescoDocumentComponent } from './alfresco-document/alfresco-document.component';
import { AlfrescoFolderComponent } from './alfresco-folder/alfresco-folder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { TreeSelectModule } from 'primeng/treeselect';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AlfrescoCreateFolderComponent } from './alfresco-folder/components/alfresco-create-folder/alfresco-create-folder.component';
import { AlfrescoFolderDocumentListComponent } from './alfresco-folder/components/alfresco-folder-document-list/alfresco-folder-document-list.component';
import { AlfrescoListFolderComponent } from './alfresco-folder/components/alfresco-list-folder/alfresco-list-folder.component';
import { AlfrescoUpdateFolderComponent } from './alfresco-folder/components/alfresco-update-folder/alfresco-update-folder.component';
import { ToastComponent } from './toast/toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlfrescoDocumentCreateComponent } from './alfresco-document/components/alfresco-document-create/alfresco-document-create.component';
import { DownloadDocumentComponent } from './alfresco-document/components/download-document/download-document.component';
import { AlfrescoDocumentUpdateComponent } from './alfresco-document/components/alfresco-document-update/alfresco-document-update.component';
import { AlfrescoDocumentListComponent } from './alfresco-document/components/alfresco-document-list/alfresco-document-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlfrescoDocumentComponent,
    AlfrescoFolderComponent,
    AlfrescoCreateFolderComponent,
    ToastComponent,
    AlfrescoUpdateFolderComponent,
    AlfrescoListFolderComponent,
    AlfrescoFolderDocumentListComponent,
    AlfrescoDocumentCreateComponent,
    DownloadDocumentComponent,
    AlfrescoDocumentUpdateComponent,
    AlfrescoDocumentListComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    RatingModule,
    FormsModule,
    TreeSelectModule,
    PanelModule,
    HttpClientModule,
    NgbModule,
    BrowserModule,
    ButtonModule,
    PanelModule,
		FormsModule,
    HttpClientModule,
    TreeSelectModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
