import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { EnvelopeItem, EnvelopeItemLoadMatch, EnvelopeItemCreateData } from '../Documenso2Types';
declare class EnvelopeItemEntity extends Documenso2EntityBase<EnvelopeItem> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: EnvelopeItemEntity): EnvelopeItemEntity;
    load(this: any, reqmatch?: EnvelopeItemLoadMatch, ctrl?: Control): Promise<EnvelopeItemEntity>;
    create(this: any, reqdata?: EnvelopeItemCreateData, ctrl?: Control): Promise<EnvelopeItemEntity>;
}
export { EnvelopeItemEntity };
