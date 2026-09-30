import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { EnvelopeRecipient, EnvelopeRecipientLoadMatch, EnvelopeRecipientCreateData } from '../Documenso2Types';
declare class EnvelopeRecipientEntity extends Documenso2EntityBase<EnvelopeRecipient> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: EnvelopeRecipientEntity): EnvelopeRecipientEntity;
    load(this: any, reqmatch?: EnvelopeRecipientLoadMatch, ctrl?: Control): Promise<EnvelopeRecipientEntity>;
    create(this: any, reqdata?: EnvelopeRecipientCreateData, ctrl?: Control): Promise<EnvelopeRecipientEntity>;
}
export { EnvelopeRecipientEntity };
