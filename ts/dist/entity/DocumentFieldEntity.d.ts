import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { DocumentField, DocumentFieldLoadMatch, DocumentFieldCreateData } from '../Documenso2Types';
declare class DocumentFieldEntity extends Documenso2EntityBase<DocumentField> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: DocumentFieldEntity): DocumentFieldEntity;
    load(this: any, reqmatch?: DocumentFieldLoadMatch, ctrl?: Control): Promise<DocumentFieldEntity>;
    create(this: any, reqdata?: DocumentFieldCreateData, ctrl?: Control): Promise<DocumentFieldEntity>;
}
export { DocumentFieldEntity };
