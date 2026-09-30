import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { EnvelopeAttachment, EnvelopeAttachmentListMatch, EnvelopeAttachmentCreateData } from '../Documenso2Types';
declare class EnvelopeAttachmentEntity extends Documenso2EntityBase<EnvelopeAttachment> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: EnvelopeAttachmentEntity): EnvelopeAttachmentEntity;
    list(this: any, reqmatch?: EnvelopeAttachmentListMatch, ctrl?: Control): Promise<EnvelopeAttachmentEntity[]>;
    create(this: any, reqdata?: EnvelopeAttachmentCreateData, ctrl?: Control): Promise<EnvelopeAttachmentEntity>;
}
export { EnvelopeAttachmentEntity };
