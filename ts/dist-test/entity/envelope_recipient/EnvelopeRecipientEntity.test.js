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
(0, node_test_1.describe)('EnvelopeRecipientEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DOCUMENSO2_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DOCUMENSO2_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Documenso2SDK.test();
        const ent = testsdk.EnvelopeRecipient();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DOCUMENSO2_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'envelope_recipient.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "authOptions": { "a": true, "h": "Auth Options", "n": "authOptions", "r": true, "t": ["`$ONE`", ["`$OBJECT`", "`$NULL`"]], "key$": "authOptions", "index$": 0 }, "data": { "a": true, "h": "Data", "n": "data", "r": true, "t": "`$ARRAY`", "key$": "data", "index$": 1 }, "documentDeletedAt": { "a": true, "h": "Document Deleted At", "n": "documentDeletedAt", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "documentDeletedAt", "index$": 2 }, "email": { "a": true, "h": "Email", "n": "email", "r": true, "t": "`$STRING`", "key$": "email", "index$": 3 }, "envelopeId": { "a": true, "h": "Envelope Id", "n": "envelopeId", "r": true, "t": "`$STRING`", "key$": "envelopeId", "index$": 4 }, "expirationNotifiedAt": { "a": true, "h": "Expiration Notified At", "n": "expirationNotifiedAt", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "expirationNotifiedAt", "index$": 5 }, "expired": { "a": true, "h": "Expired", "n": "expired", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "expired", "index$": 6 }, "expiresAt": { "a": true, "h": "Expires At", "n": "expiresAt", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "expiresAt", "index$": 7 }, "fields": { "a": true, "h": "Fields", "n": "fields", "r": true, "t": "`$ARRAY`", "union": { "branches": 10, "count": 1, "depth": 3 }, "key$": "fields", "index$": 8 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$NUMBER`", "key$": "id", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 10 }, "readStatus": { "a": true, "h": "Read Status", "n": "readStatus", "r": true, "t": "`$STRING`", "key$": "readStatus", "index$": 11 }, "recipientId": { "a": true, "h": "Recipient Id", "n": "recipientId", "r": true, "t": "`$NUMBER`", "key$": "recipientId", "index$": 12 }, "rejectionReason": { "a": true, "h": "Rejection Reason", "n": "rejectionReason", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "rejectionReason", "index$": 13 }, "role": { "a": true, "h": "Role", "n": "role", "r": true, "t": "`$STRING`", "key$": "role", "index$": 14 }, "sendStatus": { "a": true, "h": "Send Status", "n": "sendStatus", "r": true, "t": "`$STRING`", "key$": "sendStatus", "index$": 15 }, "signedAt": { "a": true, "h": "Signed At", "n": "signedAt", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "signedAt", "index$": 16 }, "signingOrder": { "a": true, "h": "Signing Order", "n": "signingOrder", "r": true, "t": ["`$ONE`", ["`$NUMBER`", "`$NULL`"]], "key$": "signingOrder", "index$": 17 }, "signingStatus": { "a": true, "h": "Signing Status", "n": "signingStatus", "r": true, "t": "`$STRING`", "key$": "signingStatus", "index$": 18 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 19 }, "token": { "a": true, "h": "Token", "n": "token", "r": true, "t": "`$STRING`", "key$": "token", "index$": 20 } }, "id": { "field": "id", "name": "id" }, "name": "envelope_recipient", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /envelope/recipient/{recipientId}/reject", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "recipient_id", "or": "recipientId", "r": true, "t": "`$NUMBER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/envelope/recipient/{recipientId}/reject", "q": { "$action": "reject", "exist": ["recipient_id"] }, "r": { "param": { "recipientId": "recipient_id" } }, "s": [{ "lit": "envelope" }, { "lit": "recipient" }, { "var": "recipient_id" }, { "lit": "reject" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /envelope/recipient/create-many", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/envelope/recipient/create-many", "q": {}, "r": {}, "s": [{ "lit": "envelope" }, { "lit": "recipient" }, { "lit": "create-many" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /envelope/recipient/delete", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/envelope/recipient/delete", "q": {}, "r": {}, "s": [{ "lit": "envelope" }, { "lit": "recipient" }, { "lit": "delete" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /envelope/recipient/update-many", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/envelope/recipient/update-many", "q": {}, "r": {}, "s": [{ "lit": "envelope" }, { "lit": "recipient" }, { "lit": "update-many" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /envelope/recipient/{recipientId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "recipientId", "r": true, "t": "`$NUMBER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/envelope/recipient/{recipientId}", "q": { "exist": ["id"] }, "r": { "param": { "recipientId": "id" } }, "s": [{ "lit": "envelope" }, { "lit": "recipient" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "envelope_recipient", "name__orig": "envelope_recipient", "Name": "EnvelopeRecipient", "name_": "envelope_recipient", "name-": "envelope-recipient", "NAME": "ENVELOPE_RECIPIENT", "index$": 8 }, { "active": true, "entity": "envelope_recipient", "key$": "BasicEnvelopeRecipientFlow", "kind": "basic", "name": "BasicEnvelopeRecipientFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "envelope_recipient_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "envelope_recipient_ref01", "srcdatavar": "envelope_recipient_ref01_data", "suffix": "_dt0" }, "m": { "id": "envelope_recipient01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-envelope_recipient_ref01" } }] }] }, 'EnvelopeRecipient', { "POST /envelope/recipient/{recipientId}/reject": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "envelopeId": { "type": "string" }, "reason": { "type": "string", "minLength": 1 }, "actAsEmail": { "type": "string", "pattern": "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\\u{0080}-\\u{FFFF}-]+@[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?(?:\\.[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?)*$" } }, "required": ["envelopeId", "reason"] } } } }, "parameters": [{ "in": "path", "name": "recipientId", "description": "The ID of the recipient to reject the document on behalf of.", "schema": { "type": "number" }, "required": true, "index$": 0 }] }, "POST /envelope/recipient/create-many": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "envelopeId": { "type": "string", "key$": "envelopeId" }, "data": { "type": "array", "items": { "type": "object", "properties": { "email": { "anyOf": [] }, "name": { "type": "string", "maxLength": 255 }, "role": { "type": "string", "enum": [] }, "signingOrder": { "type": "number" }, "accessAuth": { "type": "array", "items": {}, "default": [] }, "actionAuth": { "type": "array", "items": {}, "default": [] } }, "required": ["email", "name", "role"] }, "key$": "data" } }, "required": ["envelopeId", "data"], "index$": 1 } } } }, "parameters": [] }, "POST /envelope/recipient/delete": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "recipientId": { "type": "number", "key$": "recipientId" } }, "required": ["recipientId"], "index$": 1 } } } }, "parameters": [] }, "POST /envelope/recipient/update-many": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "envelopeId": { "type": "string", "key$": "envelopeId" }, "data": { "type": "array", "items": { "type": "object", "properties": { "id": { "type": "number" }, "email": { "anyOf": [] }, "name": { "type": "string", "maxLength": 255 }, "role": { "type": "string", "enum": [] }, "signingOrder": { "type": "number" }, "accessAuth": { "type": "array", "items": {}, "default": [] }, "actionAuth": { "type": "array", "items": {}, "default": [] } }, "required": ["id"] }, "key$": "data" } }, "required": ["envelopeId", "data"], "index$": 1 } } } }, "parameters": [] }, "GET /envelope/recipient/{recipientId}": { "protocol": "http", "parameters": [{ "in": "path", "name": "recipientId", "schema": { "type": "number" }, "required": true, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const envelope_recipient_ref01_ent = client.EnvelopeRecipient();
        let envelope_recipient_ref01_data = setup.data.new.envelope_recipient['envelope_recipient_ref01'];
        envelope_recipient_ref01_data = (await envelope_recipient_ref01_ent.create(envelope_recipient_ref01_data)).data();
        (0, node_assert_1.default)(null != envelope_recipient_ref01_data.id);
        // LOAD
        const envelope_recipient_ref01_match_dt0 = {};
        envelope_recipient_ref01_match_dt0.id = envelope_recipient_ref01_data.id;
        const envelope_recipient_ref01_data_dt0 = (await envelope_recipient_ref01_ent.load(envelope_recipient_ref01_match_dt0)).data();
        (0, node_assert_1.default)(envelope_recipient_ref01_data_dt0.id === envelope_recipient_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/envelope_recipient/EnvelopeRecipientTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Documenso2SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['envelope_recipient01', 'envelope_recipient02', 'envelope_recipient03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DOCUMENSO2_TEST_ENVELOPE_RECIPIENT_ENTID': idmap,
        'DOCUMENSO2_TEST_LIVE': 'FALSE',
        'DOCUMENSO2_TEST_EXPLAIN': 'FALSE',
        'DOCUMENSO2_APIKEY': '',
    });
    idmap = env['DOCUMENSO2_TEST_ENVELOPE_RECIPIENT_ENTID'];
    const live = 'TRUE' === env.DOCUMENSO2_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DOCUMENSO2_TEST_ENVELOPE_RECIPIENT_ENTID'];
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
//# sourceMappingURL=EnvelopeRecipientEntity.test.js.map