import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { Template, TemplateLoadMatch, TemplateListMatch, TemplateCreateData } from '../Documenso2Types';
declare class TemplateEntity extends Documenso2EntityBase<Template> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: TemplateEntity): TemplateEntity;
    load(this: any, reqmatch?: TemplateLoadMatch, ctrl?: Control): Promise<TemplateEntity>;
    list(this: any, reqmatch?: TemplateListMatch, ctrl?: Control): Promise<TemplateEntity[]>;
    create(this: any, reqdata?: TemplateCreateData, ctrl?: Control): Promise<TemplateEntity>;
}
export { TemplateEntity };
