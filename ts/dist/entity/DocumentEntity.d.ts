import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { Document, DocumentLoadMatch, DocumentListMatch, DocumentCreateData } from '../Documenso2Types';
declare class DocumentEntity extends Documenso2EntityBase<Document> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: DocumentEntity): DocumentEntity;
    load(this: any, reqmatch?: DocumentLoadMatch, ctrl?: Control): Promise<DocumentEntity>;
    list(this: any, reqmatch?: DocumentListMatch, ctrl?: Control): Promise<DocumentEntity[]>;
    create(this: any, reqdata?: DocumentCreateData, ctrl?: Control): Promise<DocumentEntity>;
}
export { DocumentEntity };
