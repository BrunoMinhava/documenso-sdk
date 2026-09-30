import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { Envelope, EnvelopeLoadMatch, EnvelopeListMatch, EnvelopeCreateData } from '../Documenso2Types';
declare class EnvelopeEntity extends Documenso2EntityBase<Envelope> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: EnvelopeEntity): EnvelopeEntity;
    load(this: any, reqmatch?: EnvelopeLoadMatch, ctrl?: Control): Promise<EnvelopeEntity>;
    list(this: any, reqmatch?: EnvelopeListMatch, ctrl?: Control): Promise<EnvelopeEntity[]>;
    create(this: any, reqdata?: EnvelopeCreateData, ctrl?: Control): Promise<EnvelopeEntity>;
}
export { EnvelopeEntity };
