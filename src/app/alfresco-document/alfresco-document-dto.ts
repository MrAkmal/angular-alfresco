export interface AlfrescoDocumentDTO {
    id: number;
    documentId: string;

    name: string;

    size: number;

    contentType: string;

    versions: string[];
}
