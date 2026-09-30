import { Documenso2EntityBase } from '../Documenso2EntityBase';
import type { Documenso2SDK } from '../Documenso2SDK';
import type { Control } from '../types';
import type { Folder, FolderListMatch, FolderCreateData } from '../Documenso2Types';
declare class FolderEntity extends Documenso2EntityBase<Folder> {
    constructor(client: Documenso2SDK, entopts: any);
    make(this: FolderEntity): FolderEntity;
    list(this: any, reqmatch?: FolderListMatch, ctrl?: Control): Promise<FolderEntity[]>;
    create(this: any, reqdata?: FolderCreateData, ctrl?: Control): Promise<FolderEntity>;
}
export { FolderEntity };
