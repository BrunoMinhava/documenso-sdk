import { Context } from './Context';
declare class Documenso2Error extends Error {
    isDocumenso2Error: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { Documenso2Error };
