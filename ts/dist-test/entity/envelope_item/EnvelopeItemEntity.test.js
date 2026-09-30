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
(0, node_test_1.describe)('EnvelopeItemEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DOCUMENSO2_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DOCUMENSO2_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Documenso2SDK.test();
        const ent = testsdk.EnvelopeItem();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DOCUMENSO2_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'envelope_item.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": true, "t": "`$ARRAY`", "key$": "data", "index$": 0 }, "envelopeId": { "a": true, "h": "Envelope Id", "n": "envelopeId", "r": true, "t": "`$STRING`", "key$": "envelopeId", "index$": 1 }, "envelopeItemId": { "a": true, "h": "Envelope Item Id", "n": "envelopeItemId", "r": true, "t": "`$STRING`", "key$": "envelopeItemId", "index$": 2 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 3 } }, "name": "envelope_item", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /envelope/item/create-many", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/envelope/item/create-many", "q": {}, "r": {}, "s": [{ "lit": "envelope" }, { "lit": "item" }, { "lit": "create-many" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /envelope/item/delete", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/envelope/item/delete", "q": {}, "r": {}, "s": [{ "lit": "envelope" }, { "lit": "item" }, { "lit": "delete" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /envelope/item/update-many", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/envelope/item/update-many", "q": {}, "r": {}, "s": [{ "lit": "envelope" }, { "lit": "item" }, { "lit": "update-many" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /envelope/item/{envelopeItemId}/download", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "item_id", "or": "envelopeItemId", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "signed", "k": "query", "n": "version", "or": "version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/envelope/item/{envelopeItemId}/download", "q": { "exist": ["item_id", "version"] }, "r": { "param": { "envelopeItemId": "item_id" } }, "s": [{ "lit": "envelope" }, { "lit": "item" }, { "var": "item_id" }, { "lit": "download" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "envelope_item", "name__orig": "envelope_item", "Name": "EnvelopeItem", "name_": "envelope_item", "name-": "envelope-item", "NAME": "ENVELOPE_ITEM", "index$": 7 }, { "active": true, "entity": "envelope_item", "key$": "BasicEnvelopeItemFlow", "kind": "basic", "name": "BasicEnvelopeItemFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "envelope_item_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "envelope_item_ref01", "srcdatavar": "envelope_item_ref01_data", "suffix": "_dt0" }, "m": { "id": "envelope_item01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-envelope_item_ref01" } }] }] }, 'EnvelopeItem', { "POST /envelope/item/create-many": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "schema": { "type": "object", "properties": { "payload": { "type": "object", "properties": { "envelopeId": { "type": "string" } }, "required": ["envelopeId"] }, "files": { "type": "array", "items": { "type": "string", "contentMediaType": "application/octet-stream" } } }, "required": ["payload"] } } } }, "parameters": [] }, "POST /envelope/item/delete": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "envelopeId": { "type": "string", "key$": "envelopeId" }, "envelopeItemId": { "type": "string", "key$": "envelopeItemId" } }, "required": ["envelopeId", "envelopeItemId"], "index$": 1 } } } }, "parameters": [] }, "POST /envelope/item/update-many": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "envelopeId": { "type": "string", "key$": "envelopeId" }, "data": { "type": "array", "items": { "type": "object", "properties": { "envelopeItemId": { "type": "string" }, "order": { "type": "integer", "minimum": 1 }, "title": { "type": "string", "minLength": 1, "maxLength": 255 } }, "required": ["envelopeItemId"] }, "minItems": 1, "key$": "data" } }, "required": ["envelopeId", "data"], "index$": 1 } } } }, "parameters": [] }, "GET /envelope/item/{envelopeItemId}/download": { "protocol": "http", "parameters": [{ "in": "path", "name": "envelopeItemId", "description": "The ID of the envelope item to download.", "schema": { "type": "string" }, "required": true, "index$": 0 }, { "in": "query", "name": "version", "description": "The version of the envelope item to download. \"signed\" returns the completed document with all signatures and the audit trail, \"original\" returns the original uploaded document, \"pending\" returns the original document with currently-inserted fields burned in (only valid while the envelope is in PENDING status; not a final executed document).", "schema": { "type": "string", "enum": ["original", "signed", "pending"], "default": "signed" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const envelope_item_ref01_ent = client.EnvelopeItem();
        let envelope_item_ref01_data = setup.data.new.envelope_item['envelope_item_ref01'];
        envelope_item_ref01_data = (await envelope_item_ref01_ent.create(envelope_item_ref01_data)).data();
        (0, node_assert_1.default)(null != envelope_item_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/envelope_item/EnvelopeItemTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Documenso2SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['envelope_item01', 'envelope_item02', 'envelope_item03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DOCUMENSO2_TEST_ENVELOPE_ITEM_ENTID': idmap,
        'DOCUMENSO2_TEST_LIVE': 'FALSE',
        'DOCUMENSO2_TEST_EXPLAIN': 'FALSE',
        'DOCUMENSO2_APIKEY': '',
    });
    idmap = env['DOCUMENSO2_TEST_ENVELOPE_ITEM_ENTID'];
    const live = 'TRUE' === env.DOCUMENSO2_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DOCUMENSO2_TEST_ENVELOPE_ITEM_ENTID'];
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
//# sourceMappingURL=EnvelopeItemEntity.test.js.map