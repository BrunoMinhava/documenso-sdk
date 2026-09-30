import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { TemplateField, TemplateFieldLoadMatch, TemplateFieldCreateData } from '../Documenso2Types';
declare class TemplateFieldEntity extends Documenso2EntityBase<TemplateField> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: TemplateFieldEntity): TemplateFieldEntity;
    load(this: any, reqmatch?: TemplateFieldLoadMatch, ctrl?: Control): Promise<TemplateFieldEntity>;
    create(this: any, reqdata?: TemplateFieldCreateData, ctrl?: Control): Promise<TemplateFieldEntity>;
}
export { TemplateFieldEntity };
