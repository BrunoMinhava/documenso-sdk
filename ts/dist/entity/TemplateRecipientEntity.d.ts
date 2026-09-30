import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { TemplateRecipient, TemplateRecipientLoadMatch, TemplateRecipientCreateData } from '../Documenso2Types';
declare class TemplateRecipientEntity extends Documenso2EntityBase<TemplateRecipient> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: TemplateRecipientEntity): TemplateRecipientEntity;
    load(this: any, reqmatch?: TemplateRecipientLoadMatch, ctrl?: Control): Promise<TemplateRecipientEntity>;
    create(this: any, reqdata?: TemplateRecipientCreateData, ctrl?: Control): Promise<TemplateRecipientEntity>;
}
export { TemplateRecipientEntity };
