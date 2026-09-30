"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documenso2Error = void 0;
class Documenso2Error extends Error {
    isDocumenso2Error = true;
    sdk = 'Documenso2';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.Documenso2Error = Documenso2Error;
//# sourceMappingURL=Documenso2Error.js.map