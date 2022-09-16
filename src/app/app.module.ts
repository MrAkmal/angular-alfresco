import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { AlfrescoDocumentComponent } from './alfresco-document/alfresco-document.component';
import { AlfrescoFolderComponent } from './alfresco-folder/alfresco-folder.component';
import {  ReactiveFormsModule } from '@angular/forms';
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
<<<<<<< HEAD
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
=======
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';


import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AlfrescoCreateFolderComponent } from './alfresco-folder/components/alfresco-create-folder/alfresco-create-folder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast.component';
import { AlfrescoUpdateFolderComponent } from './alfresco-folder/components/alfresco-update-folder/alfresco-update-folder.component';
import { AlfrescoListFolderComponent } from './alfresco-folder/components/alfresco-list-folder/alfresco-list-folder.component';
import { AlfrescoFolderDocumentListComponent } from './alfresco-folder/components/alfresco-folder-document-list/alfresco-folder-document-list.component';
>>>>>>> f352a71a614052a8fb1d28b00dc155274302c963


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
    AlfrescoFolderDocumentListComponent

  ],
  imports: [
    BrowserModule,
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
<<<<<<< HEAD
    HttpClientModule
=======
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
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    NgbModule

>>>>>>> f352a71a614052a8fb1d28b00dc155274302c963
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
