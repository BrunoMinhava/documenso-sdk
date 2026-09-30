"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DocumentFieldEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DOCUMENSO2_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DOCUMENSO2_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Documenso2SDK.test();
        const ent = testsdk.DocumentField();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DOCUMENSO2_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'document_field.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "customText": { "a": true, "h": "Custom Text", "n": "customText", "r": true, "t": "`$STRING`", "key$": "customText", "index$": 0 }, "documentId": { "a": true, "h": "Document Id", "n": "documentId", "op": { "create": { "req": true, "type": "`$NUMBER`" } }, "r": false, "t": ["`$ONE`", ["`$NUMBER`", "`$NULL`"]], "key$": "documentId", "index$": 1 }, "envelopeId": { "a": true, "h": "Envelope Id", "n": "envelopeId", "r": true, "t": "`$STRING`", "key$": "envelopeId", "index$": 2 }, "envelopeItemId": { "a": true, "h": "Envelope Item Id", "n": "envelopeItemId", "r": true, "t": "`$STRING`", "key$": "envelopeItemId", "index$": 3 }, "field": { "a": true, "h": "Field", "n": "field", "r": true, "t": "`$ANY`", "union": { "branches": 11, "count": 1, "depth": 2 }, "key$": "field", "index$": 4 }, "fieldId": { "a": true, "h": "Field Id", "n": "fieldId", "r": true, "t": "`$NUMBER`", "key$": "fieldId", "index$": 5 }, "fieldMeta": { "a": true, "h": "Field Meta", "n": "fieldMeta", "r": true, "t": "`$ANY`", "union": { "branches": 10, "count": 1, "depth": 0 }, "key$": "fieldMeta", "index$": 6 }, "fields": { "a": true, "h": "Fields", "n": "fields", "r": true, "t": "`$ARRAY`", "union": { "branches": 10, "count": 1, "depth": 3 }, "key$": "fields", "index$": 7 }, "height": { "a": true, "h": "Height", "n": "height", "r": true, "t": "`$NUMBER`", "key$": "height", "index$": 8 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$NUMBER`", "key$": "id", "index$": 9 }, "inserted": { "a": true, "h": "Inserted", "n": "inserted", "r": true, "t": "`$BOOLEAN`", "key$": "inserted", "index$": 10 }, "page": { "a": true, "h": "Page", "n": "page", "r": true, "t": "`$NUMBER`", "key$": "page", "index$": 11 }, "positionX": { "a": true, "h": "Position X", "n": "positionX", "r": true, "t": "`$ANY`", "key$": "positionX", "index$": 12 }, "positionY": { "a": true, "h": "Position Y", "n": "positionY", "r": true, "t": "`$ANY`", "key$": "positionY", "index$": 13 }, "recipientId": { "a": true, "h": "Recipient Id", "n": "recipientId", "r": true, "t": "`$NUMBER`", "key$": "recipientId", "index$": 14 }, "secondaryId": { "a": true, "h": "Secondary Id", "n": "secondaryId", "r": true, "t": "`$STRING`", "key$": "secondaryId", "index$": 15 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 16 }, "templateId": { "a": true, "h": "Template Id", "n": "templateId", "r": false, "t": ["`$ONE`", ["`$NUMBER`", "`$NULL`"]], "key$": "templateId", "index$": 17 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 18 }, "width": { "a": true, "h": "Width", "n": "width", "r": true, "t": "`$NUMBER`", "key$": "width", "index$": 19 } }, "id": { "field": "id", "name": "id" }, "name": "document_field", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /document/field/create", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/document/field/create", "q": {}, "r": {}, "s": [{ "lit": "document" }, { "lit": "field" }, { "lit": "create" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /document/field/create-many", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/document/field/create-many", "q": {}, "r": {}, "s": [{ "lit": "document" }, { "lit": "field" }, { "lit": "create-many" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /document/field/delete", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/document/field/delete", "q": {}, "r": {}, "s": [{ "lit": "document" }, { "lit": "field" }, { "lit": "delete" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /document/field/update", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/document/field/update", "q": {}, "r": {}, "s": [{ "lit": "document" }, { "lit": "field" }, { "lit": "update" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "POST /document/field/update-many", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/document/field/update-many", "q": {}, "r": {}, "s": [{ "lit": "document" }, { "lit": "field" }, { "lit": "update-many" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /document/field/{fieldId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "fieldId", "r": true, "t": "`$NUMBER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/document/field/{fieldId}", "q": { "exist": ["id"] }, "r": { "param": { "fieldId": "id" } }, "s": [{ "lit": "document" }, { "lit": "field" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "document_field", "name__orig": "document_field", "Name": "DocumentField", "name_": "document_field", "name-": "document-field", "NAME": "DOCUMENT_FIELD", "index$": 1 }, { "active": true, "entity": "document_field", "key$": "BasicDocumentFieldFlow", "kind": "basic", "name": "BasicDocumentFieldFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "document_field_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "document_field_ref01", "srcdatavar": "document_field_ref01_data", "suffix": "_dt0" }, "m": { "id": "document_field01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-document_field_ref01" } }] }] }, 'DocumentField', { "POST /document/field/create": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "documentId": { "type": "number", "key$": "documentId" }, "field": { "allOf": [{ "oneOf": [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}] }, { "type": "object", "properties": { "recipientId": {}, "pageNumber": {}, "pageX": {}, "pageY": {}, "width": {}, "height": {} }, "required": ["recipientId", "pageNumber", "pageX", "pageY", "width", "height"] }], "key$": "field" } }, "required": ["documentId", "field"], "index$": 1 } } } }, "parameters": [] }, "POST /document/field/create-many": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "documentId": { "type": "number", "key$": "documentId" }, "fields": { "type": "array", "items": { "allOf": [{ "oneOf": [] }, { "type": "object", "properties": {}, "required": [] }] }, "key$": "fields" } }, "required": ["documentId", "fields"], "index$": 1 } } } }, "parameters": [] }, "POST /document/field/delete": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "fieldId": { "type": "number", "key$": "fieldId" } }, "required": ["fieldId"], "index$": 1 } } } }, "parameters": [] }, "POST /document/field/update": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "documentId": { "type": "number", "key$": "documentId" }, "field": { "allOf": [{ "oneOf": [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}] }, { "type": "object", "properties": { "id": {}, "pageNumber": {}, "pageX": {}, "pageY": {}, "width": {}, "height": {} }, "required": ["id"] }], "key$": "field" } }, "required": ["documentId", "field"], "index$": 1 } } } }, "parameters": [] }, "POST /document/field/update-many": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "documentId": { "type": "number", "key$": "documentId" }, "fields": { "type": "array", "items": { "allOf": [{ "oneOf": [] }, { "type": "object", "properties": {}, "required": [] }] }, "key$": "fields" } }, "required": ["documentId", "fields"], "index$": 1 } } } }, "parameters": [] }, "GET /document/field/{fieldId}": { "protocol": "http", "parameters": [{ "in": "path", "name": "fieldId", "schema": { "type": "number" }, "required": true, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const document_field_ref01_ent = client.DocumentField();
        let document_field_ref01_data = setup.data.new.document_field['document_field_ref01'];
        document_field_ref01_data = (await document_field_ref01_ent.create(document_field_ref01_data)).data();
        (0, node_assert_1.default)(null != document_field_ref01_data.id);
        // LOAD
        const document_field_ref01_match_dt0 = {};
        document_field_ref01_match_dt0.id = document_field_ref01_data.id;
        const document_field_ref01_data_dt0 = (await document_field_ref01_ent.load(document_field_ref01_match_dt0)).data();
        (0, node_assert_1.default)(document_field_ref01_data_dt0.id === document_field_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/document_field/DocumentFieldTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Documenso2SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['document_field01', 'document_field02', 'document_field03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DOCUMENSO2_TEST_DOCUMENT_FIELD_ENTID': idmap,
        'DOCUMENSO2_TEST_LIVE': 'FALSE',
        'DOCUMENSO2_TEST_EXPLAIN': 'FALSE',
        'DOCUMENSO2_APIKEY': '',
    });
    idmap = env['DOCUMENSO2_TEST_DOCUMENT_FIELD_ENTID'];
    const live = 'TRUE' === env.DOCUMENSO2_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DOCUMENSO2_TEST_DOCUMENT_FIELD_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.Documenso2SDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.DOCUMENSO2_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.DOCUMENSO2_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=DocumentFieldEntity.test.js.map