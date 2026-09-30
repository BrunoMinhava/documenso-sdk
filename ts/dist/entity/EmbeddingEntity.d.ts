import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { Embedding, EmbeddingCreateData } from '../Documenso2Types';
declare class EmbeddingEntity extends Documenso2EntityBase<Embedding> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: EmbeddingEntity): EmbeddingEntity;
    create(this: any, reqdata?: EmbeddingCreateData, ctrl?: Control): Promise<EmbeddingEntity>;
}
export { EmbeddingEntity };
