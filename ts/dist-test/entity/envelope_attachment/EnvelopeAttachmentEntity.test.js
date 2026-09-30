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
(0, node_test_1.describe)('EnvelopeAttachmentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DOCUMENSO2_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DOCUMENSO2_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Documenso2SDK.test();
        const ent = testsdk.EnvelopeAttachment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DOCUMENSO2_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'envelope_attachment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": true, "t": "`$OBJECT`", "key$": "data", "index$": 0 }, "envelopeId": { "a": true, "h": "Envelope Id", "n": "envelopeId", "r": true, "t": "`$STRING`", "key$": "envelopeId", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 2 }, "label": { "a": true, "h": "Label", "n": "label", "r": true, "t": "`$STRING`", "key$": "label", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 4 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "envelope_attachment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /envelope/attachment/create", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/envelope/attachment/create", "q": {}, "r": {}, "s": [{ "lit": "envelope" }, { "lit": "attachment" }, { "lit": "create" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /envelope/attachment/delete", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/envelope/attachment/delete", "q": {}, "r": {}, "s": [{ "lit": "envelope" }, { "lit": "attachment" }, { "lit": "delete" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /envelope/attachment/update", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/envelope/attachment/update", "q": {}, "r": {}, "s": [{ "lit": "envelope" }, { "lit": "attachment" }, { "lit": "update" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /envelope/attachment", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "envelope_id", "or": "envelopeId", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "token", "or": "token", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/envelope/attachment", "q": { "exist": ["envelope_id", "token"] }, "r": {}, "s": [{ "lit": "envelope" }, { "lit": "attachment" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "envelope_attachment", "name__orig": "envelope_attachment", "Name": "EnvelopeAttachment", "name_": "envelope_attachment", "name-": "envelope-attachment", "NAME": "ENVELOPE_ATTACHMENT", "index$": 5 }, { "active": true, "entity": "envelope_attachment", "key$": "BasicEnvelopeAttachmentFlow", "kind": "basic", "name": "BasicEnvelopeAttachmentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "envelope_attachment_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "envelope_attachment_ref01" } }] }] }, 'EnvelopeAttachment', { "POST /envelope/attachment/create": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "envelopeId": { "type": "string", "key$": "envelopeId" }, "data": { "type": "object", "properties": { "label": { "type": "string", "minLength": 1 }, "data": { "type": "string", "format": "uri" } }, "required": ["label", "data"], "key$": "data" } }, "required": ["envelopeId", "data"], "index$": 1 } } } }, "parameters": [] }, "POST /envelope/attachment/delete": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "string", "key$": "id" } }, "required": ["id"], "index$": 1 } } } }, "parameters": [] }, "POST /envelope/attachment/update": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "string", "key$": "id" }, "data": { "type": "object", "properties": { "label": { "type": "string", "minLength": 1 }, "data": { "type": "string", "format": "uri" } }, "required": ["label", "data"], "key$": "data" } }, "required": ["id", "data"], "index$": 1 } } } }, "parameters": [] }, "GET /envelope/attachment": { "protocol": "http", "parameters": [{ "in": "query", "name": "envelopeId", "schema": { "type": "string" }, "required": true, "index$": 0 }, { "in": "query", "name": "token", "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const envelope_attachment_ref01_ent = client.EnvelopeAttachment();
        let envelope_attachment_ref01_data = setup.data.new.envelope_attachment['envelope_attachment_ref01'];
        envelope_attachment_ref01_data = (await envelope_attachment_ref01_ent.create(envelope_attachment_ref01_data)).data();
        (0, node_assert_1.default)(null != envelope_attachment_ref01_data.id);
        // LIST
        const envelope_attachment_ref01_match = {};
        const envelope_attachment_ref01_list = (await envelope_attachment_ref01_ent.list(envelope_attachment_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(envelope_attachment_ref01_list, { id: envelope_attachment_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/envelope_attachment/EnvelopeAttachmentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Documenso2SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['envelope_attachment01', 'envelope_attachment02', 'envelope_attachment03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DOCUMENSO2_TEST_ENVELOPE_ATTACHMENT_ENTID': idmap,
        'DOCUMENSO2_TEST_LIVE': 'FALSE',
        'DOCUMENSO2_TEST_EXPLAIN': 'FALSE',
        'DOCUMENSO2_APIKEY': '',
    });
    idmap = env['DOCUMENSO2_TEST_ENVELOPE_ATTACHMENT_ENTID'];
    const live = 'TRUE' === env.DOCUMENSO2_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DOCUMENSO2_TEST_ENVELOPE_ATTACHMENT_ENTID'];
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
//# sourceMappingURL=EnvelopeAttachmentEntity.test.js.map