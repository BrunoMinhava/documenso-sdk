import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { DocumentRecipient, DocumentRecipientLoadMatch, DocumentRecipientCreateData } from '../Documenso2Types';
declare class DocumentRecipientEntity extends Documenso2EntityBase<DocumentRecipient> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: DocumentRecipientEntity): DocumentRecipientEntity;
    load(this: any, reqmatch?: DocumentRecipientLoadMatch, ctrl?: Control): Promise<DocumentRecipientEntity>;
    create(this: any, reqdata?: DocumentRecipientCreateData, ctrl?: Control): Promise<DocumentRecipientEntity>;
}
export { DocumentRecipientEntity };
