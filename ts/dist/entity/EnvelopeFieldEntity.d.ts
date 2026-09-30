import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { EnvelopeField, EnvelopeFieldLoadMatch, EnvelopeFieldCreateData } from '../Documenso2Types';
declare class EnvelopeFieldEntity extends Documenso2EntityBase<EnvelopeField> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: EnvelopeFieldEntity): EnvelopeFieldEntity;
    load(this: any, reqmatch?: EnvelopeFieldLoadMatch, ctrl?: Control): Promise<EnvelopeFieldEntity>;
    create(this: any, reqdata?: EnvelopeFieldCreateData, ctrl?: Control): Promise<EnvelopeFieldEntity>;
}
export { EnvelopeFieldEntity };
