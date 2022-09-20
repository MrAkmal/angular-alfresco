import { AlfrescoDocumentDTO } from "../alfresco-document/alfresco-document-dto";

export interface AlfrescoFolderDTO {
  id: number;

  name: string;

  parentId: string;

  folderId: string;
}

export interface AlfrescoFolder {
  id: number;

  name: string;

  parentId: string;

  folderId: string;

  subFolders:AlfrescoFolder[];

  documents:AlfrescoDocumentDTO[];

}

