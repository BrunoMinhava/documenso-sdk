

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { Documenso2SDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('DocumentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DOCUMENSO2_TEST_LIVE=TRUE.
  afterEach(liveDelay('DOCUMENSO2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Documenso2SDK.test()
    const ent = testsdk.Document()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DOCUMENSO2_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'document.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"attachments":{"a":true,"h":"Attachments","n":"attachments","r":false,"t":"`$ARRAY`","key$":"attachments","index$":0},"authOptions":{"a":true,"h":"Auth Options","n":"authOptions","r":true,"t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"authOptions","index$":1},"completedAt":{"a":true,"h":"Completed At","n":"completedAt","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"completedAt","index$":2},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":3},"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":4},"deletedAt":{"a":true,"h":"Deleted At","n":"deletedAt","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"deletedAt","index$":5},"document":{"a":true,"h":"Document","n":"document","r":true,"t":"`$OBJECT`","union":{"branches":10,"count":5,"depth":6},"key$":"document","index$":6},"documentData":{"a":true,"h":"Document Data","n":"documentData","r":true,"t":"`$OBJECT`","key$":"documentData","index$":7},"documentDataId":{"a":true,"h":"Document Data Id","n":"documentDataId","r":true,"t":"`$STRING`","key$":"documentDataId","index$":8},"documentId":{"a":true,"h":"Document Id","n":"documentId","r":true,"t":"`$NUMBER`","key$":"documentId","index$":9},"documentMeta":{"a":true,"h":"Document Meta","n":"documentMeta","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":3,"depth":4},"key$":"documentMeta","index$":10},"envelopeId":{"a":true,"h":"Envelope Id","n":"envelopeId","r":true,"t":"`$STRING`","key$":"envelopeId","index$":11},"envelopeItems":{"a":true,"h":"Envelope Items","n":"envelopeItems","r":true,"t":"`$ARRAY`","key$":"envelopeItems","index$":12},"externalId":{"a":true,"h":"External Id","n":"externalId","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"externalId","index$":13},"fields":{"a":true,"h":"Fields","n":"fields","r":true,"t":"`$ARRAY`","union":{"branches":10,"count":1,"depth":3},"key$":"fields","index$":14},"folder":{"a":true,"h":"Folder","n":"folder","r":true,"t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"folder","index$":15},"folderId":{"a":true,"h":"Folder Id","n":"folderId","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"folderId","index$":16},"formValues":{"a":true,"h":"Form Values","n":"formValues","op":{"create":{"req":false,"type":"`$OBJECT`"}},"r":true,"t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"union":{"branches":3,"count":1,"depth":1},"key$":"formValues","index$":17},"globalAccessAuth":{"a":true,"h":"Global Access Auth","n":"globalAccessAuth","r":false,"t":"`$ARRAY`","key$":"globalAccessAuth","index$":18},"globalActionAuth":{"a":true,"h":"Global Action Auth","n":"globalActionAuth","r":false,"t":"`$ARRAY`","key$":"globalActionAuth","index$":19},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$NUMBER`","key$":"id","index$":20},"internalVersion":{"a":true,"h":"Internal Version","n":"internalVersion","r":true,"t":"`$NUMBER`","key$":"internalVersion","index$":21},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":3,"depth":4},"key$":"meta","index$":22},"recipients":{"a":true,"h":"Recipients","n":"recipients","op":{"create":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$ARRAY`","key$":"recipients","index$":23},"source":{"a":true,"h":"Source","n":"source","r":true,"t":"`$STRING`","key$":"source","index$":24},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":25},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":26},"team":{"a":true,"h":"Team","n":"team","r":true,"t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"team","index$":27},"teamId":{"a":true,"h":"Team Id","n":"teamId","r":true,"t":"`$NUMBER`","key$":"teamId","index$":28},"templateId":{"a":true,"h":"Template Id","n":"templateId","r":false,"t":["`$ONE`",["`$NUMBER`","`$NULL`"]],"key$":"templateId","index$":29},"title":{"a":true,"h":"Title","n":"title","r":true,"t":"`$STRING`","key$":"title","index$":30},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":31},"uploadUrl":{"a":true,"h":"Upload Url","n":"uploadUrl","r":true,"t":"`$STRING`","key$":"uploadUrl","index$":32},"useLegacyFieldInsertion":{"a":true,"h":"Use Legacy Field Insertion","n":"useLegacyFieldInsertion","r":true,"t":"`$BOOLEAN`","key$":"useLegacyFieldInsertion","index$":33},"user":{"a":true,"h":"User","n":"user","r":true,"t":"`$OBJECT`","key$":"user","index$":34},"userId":{"a":true,"h":"User Id","n":"userId","r":true,"t":"`$NUMBER`","key$":"userId","index$":35},"visibility":{"a":true,"h":"Visibility","n":"visibility","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"visibility","index$":36}},"id":{"field":"id","name":"id"},"name":"document","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /document/attachment/create","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/document/attachment/create","q":{},"r":{},"s":[{"lit":"document"},{"lit":"attachment"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /document/attachment/delete","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/document/attachment/delete","q":{},"r":{},"s":[{"lit":"document"},{"lit":"attachment"},{"lit":"delete"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /document/attachment/update","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/document/attachment/update","q":{},"r":{},"s":[{"lit":"document"},{"lit":"attachment"},{"lit":"update"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /document/create","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/document/create","q":{"$action":"create"},"r":{},"s":[{"lit":"document"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /document/create/beta","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/document/create/beta","q":{},"r":{},"s":[{"lit":"document"},{"lit":"create"},{"lit":"beta"}],"t":{"req":"`reqdata`","res":"`body.document`"},"index$":4},{"a":true,"co":{"id":"POST /document/delete","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/document/delete","q":{"$action":"delete"},"r":{},"s":[{"lit":"document"},{"lit":"delete"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"POST /document/distribute","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/document/distribute","q":{"$action":"distribute"},"r":{},"s":[{"lit":"document"},{"lit":"distribute"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"POST /document/duplicate","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/document/duplicate","q":{"$action":"duplicate"},"r":{},"s":[{"lit":"document"},{"lit":"duplicate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7},{"a":true,"co":{"id":"POST /document/get-many","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/document/get-many","q":{"$action":"get_many"},"r":{},"s":[{"lit":"document"},{"lit":"get-many"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":8},{"a":true,"co":{"id":"POST /document/redistribute","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/document/redistribute","q":{"$action":"redistribute"},"r":{},"s":[{"lit":"document"},{"lit":"redistribute"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":9},{"a":true,"co":{"id":"POST /document/update","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/document/update","q":{"$action":"update"},"r":{},"s":[{"lit":"document"},{"lit":"update"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":10}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /document","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"folder_id","or":"folderId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"has_expired_recipient","or":"hasExpiredRecipients","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"order_by_column","or":"orderByColumn","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"desc","k":"query","n":"order_by_direction","or":"orderByDirection","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"per_page","or":"perPage","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"source","or":"source","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"template_id","or":"templateId","r":false,"t":"`$NUMBER`","index$":9}]},"k":"http","m":"GET","o":"/document","q":{"exist":["folder_id","has_expired_recipient","order_by_column","order_by_direction","page","per_page","query","source","status","template_id"]},"r":{},"s":[{"lit":"document"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /document/attachment","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"document_id","or":"documentId","r":true,"t":"`$NUMBER`","index$":0}]},"k":"http","m":"GET","o":"/document/attachment","q":{"$action":"attachment","exist":["document_id"]},"r":{},"s":[{"lit":"document"},{"lit":"attachment"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /document/{documentId}/download","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"documentId","r":true,"t":"`$NUMBER`","index$":0}],"query":[{"a":true,"ex":"signed","k":"query","n":"version","or":"version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/document/{documentId}/download","q":{"$action":"download","exist":["id","version"]},"r":{"param":{"documentId":"id"}},"s":[{"lit":"document"},{"var":"id"},{"lit":"download"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /document/{documentId}/download-beta","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"documentId","r":true,"t":"`$NUMBER`","index$":0}],"query":[{"a":true,"ex":"signed","k":"query","n":"version","or":"version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/document/{documentId}/download-beta","q":{"$action":"download_beta","exist":["id","version"]},"r":{"param":{"documentId":"id"}},"s":[{"lit":"document"},{"var":"id"},{"lit":"download-beta"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /document/{documentId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"documentId","r":true,"t":"`$NUMBER`","index$":0}]},"k":"http","m":"GET","o":"/document/{documentId}","q":{"exist":["id"]},"r":{"param":{"documentId":"id"}},"s":[{"lit":"document"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"document","name__orig":"document","Name":"Document","name_":"document","name-":"document","NAME":"DOCUMENT","index$":0}, {"active":true,"entity":"document","key$":"BasicDocumentFlow","kind":"basic","name":"BasicDocumentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"document_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"document_ref01"}}]},{"a":true,"d":{},"i":{"ref":"document_ref01","srcdatavar":"document_ref01_data","suffix":"_dt0"},"m":{"id":"document01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-document_ref01"}}]}]}, 'Document', {"POST /document/attachment/create":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"documentId":{"type":"number","key$":"documentId"},"data":{"type":"object","properties":{"label":{"type":"string","minLength":1},"data":{"type":"string","format":"uri"}},"required":["label","data"],"key$":"data"}},"required":["documentId","data"],"index$":1}}}},"parameters":[]},"POST /document/attachment/delete":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"string","key$":"id"}},"required":["id"],"index$":1}}}},"parameters":[]},"POST /document/attachment/update":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"string","key$":"id"},"data":{"type":"object","properties":{"label":{"type":"string","minLength":1},"data":{"type":"string","format":"uri"}},"required":["label","data"],"key$":"data"}},"required":["id","data"],"index$":1}}}},"parameters":[]},"POST /document/create":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"payload":{"type":"object","properties":{"title":{"type":"string","minLength":1,"maxLength":255},"externalId":{"type":"string","maxLength":255},"visibility":{"type":"string","enum":["EVERYONE","MANAGER_AND_ABOVE","ADMIN"]},"globalAccessAuth":{"type":"array","items":{"type":"string","enum":[]}},"globalActionAuth":{"type":"array","items":{"type":"string","enum":[]}},"formValues":{"type":"object","additionalProperties":{"anyOf":[]}},"folderId":{"type":"string"},"recipients":{"type":"array","items":{"type":"object","properties":{},"required":[]}},"attachments":{"type":"array","items":{"type":"object","properties":{},"required":[]}},"meta":{"type":"object","properties":{"subject":{},"message":{},"timezone":{},"dateFormat":{},"distributionMethod":{},"signingOrder":{},"allowDictateNextSigner":{},"redirectUrl":{},"language":{},"typedSignatureEnabled":{},"uploadSignatureEnabled":{},"drawSignatureEnabled":{},"emailId":{},"emailReplyTo":{},"emailSettings":{},"envelopeExpirationPeriod":{},"reminderSettings":{}}}},"required":["title"]},"file":{"type":"string","contentMediaType":"application/octet-stream"}},"required":["payload","file"]}}}},"parameters":[]},"POST /document/create/beta":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"title":{"type":"string","minLength":1,"maxLength":255,"key$":"title"},"externalId":{"type":"string","maxLength":255,"key$":"externalId"},"visibility":{"type":"string","enum":["EVERYONE","MANAGER_AND_ABOVE","ADMIN"],"key$":"visibility"},"globalAccessAuth":{"type":"array","items":{"type":"string","enum":["ACCOUNT","TWO_FACTOR_AUTH"]},"key$":"globalAccessAuth"},"globalActionAuth":{"type":"array","items":{"type":"string","enum":["ACCOUNT","PASSKEY","TWO_FACTOR_AUTH","PASSWORD"]},"key$":"globalActionAuth"},"formValues":{"type":"object","additionalProperties":{"anyOf":[{"type":"string"},{"type":"boolean"},{"type":"number"}]},"key$":"formValues"},"folderId":{"type":"string","key$":"folderId"},"recipients":{"type":"array","items":{"type":"object","properties":{"email":{"type":"string","pattern":"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\\u{0080}-\\u{FFFF}-]+@[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?(?:\\.[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?)*$","minLength":1,"maxLength":254},"name":{"type":"string","maxLength":255},"role":{"type":"string","enum":[]},"signingOrder":{"type":"number"},"accessAuth":{"type":"array","items":{},"default":[]},"actionAuth":{"type":"array","items":{},"default":[]},"fields":{"type":"array","items":{}}},"required":["email","name","role"]},"key$":"recipients"},"attachments":{"type":"array","items":{"type":"object","properties":{"label":{"type":"string","minLength":1},"data":{"type":"string","format":"uri"},"type":{"type":"string","enum":[],"default":"link"}},"required":["label","data"]},"key$":"attachments"},"meta":{"type":"object","properties":{"subject":{"type":"string","maxLength":254},"message":{"type":"string","maxLength":5000},"timezone":{"type":"string"},"dateFormat":{"type":"string","enum":["yyyy-MM-dd hh:mm a","yyyy-MM-dd","dd/MM/yyyy","dd-MM-yyyy","MM/dd/yyyy","yy-MM-dd","MMMM dd, yyyy","EEEE, MMMM dd, yyyy","dd/MM/yyyy hh:mm a","dd/MM/yyyy HH:mm","dd-MM-yyyy hh:mm a","dd-MM-yyyy HH:mm","MM/dd/yyyy hh:mm a","MM/dd/yyyy HH:mm","dd.MM.yyyy","dd.MM.yyyy HH:mm","yyyy-MM-dd HH:mm","yy-MM-dd hh:mm a","yy-MM-dd HH:mm","yyyy-MM-dd HH:mm:ss","MMMM dd, yyyy hh:mm a","MMMM dd, yyyy HH:mm","EEEE, MMMM dd, yyyy hh:mm a","EEEE, MMMM dd, yyyy HH:mm","yyyy-MM-dd'T'HH:mm:ss.SSSXXX"],"x-speakeasy-enums":["YyyyMMddHhMmA","YyyyMMdd","DdMMSlashYyyy","DdMMDashYyyy","MmDdSlashYyyy","YyMMdd","MmmmDdCommaYyyy","EeeeMmmmDdCommaYyyy","DdMMSlashYyyyHhMmA","DdMMSlashYyyyHHmm","DdMMDashYyyyHhMmA","DdMMDashYyyyHHmm","MmDdSlashYyyyHhMmA","MmDdSlashYyyyHHmm","DdDotMmDotYyyy","DdDotMmDotYyyyHHmm","YyyyMMddHHmm","YyMMddHhMmA","YyMMddHHmm","YyyyMMddHHmmss","MmmmDdCommaYyyyHhMmA","MmmmDdCommaYyyyHHmm","EeeeMmmmDdCommaYyyyHhMmA","EeeeMmmmDdCommaYyyyHHmm","Iso8601Full"]},"distributionMethod":{"type":"string","enum":["EMAIL","NONE"]},"signingOrder":{"type":"string","enum":["PARALLEL","SEQUENTIAL"]},"allowDictateNextSigner":{"type":"boolean"},"redirectUrl":{"type":"string"},"language":{"type":"string","enum":["de","en","fr","es","it","nl","pl","pt-BR","ja","ko","zh"]},"typedSignatureEnabled":{"type":"boolean"},"uploadSignatureEnabled":{"type":"boolean"},"drawSignatureEnabled":{"type":"boolean"},"emailId":{"type":["string","null"]},"emailReplyTo":{"type":["string","null"],"pattern":"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\\u{0080}-\\u{FFFF}-]+@[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?(?:\\.[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?)*$"},"emailSettings":{"type":["object","null"],"properties":{"recipientSigningRequest":{},"recipientRemoved":{},"recipientSigned":{},"documentPending":{},"documentCompleted":{},"documentDeleted":{},"ownerDocumentCompleted":{},"ownerRecipientExpired":{},"ownerDocumentCreated":{}},"default":{"recipientSigningRequest":true,"recipientRemoved":true,"recipientSigned":true,"documentPending":true,"documentCompleted":true,"documentDeleted":true,"ownerDocumentCompleted":true,"ownerRecipientExpired":true,"ownerDocumentCreated":true}},"envelopeExpirationPeriod":{"nullable":true,"anyOf":[{},{}]},"reminderSettings":{"type":["object","null"],"properties":{"sendAfter":{},"repeatEvery":{}},"required":["sendAfter","repeatEvery"]}},"key$":"meta"}},"required":["title"],"index$":1}}}},"parameters":[]},"POST /document/delete":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"documentId":{"type":"number"}},"required":["documentId"]}}}},"parameters":[]},"POST /document/distribute":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"documentId":{"type":"number"},"meta":{"type":"object","properties":{"subject":{"type":"string","maxLength":254},"message":{"type":"string","maxLength":5000},"timezone":{"type":"string"},"dateFormat":{"type":"string","enum":["yyyy-MM-dd hh:mm a","yyyy-MM-dd","dd/MM/yyyy","dd-MM-yyyy","MM/dd/yyyy","yy-MM-dd","MMMM dd, yyyy","EEEE, MMMM dd, yyyy","dd/MM/yyyy hh:mm a","dd/MM/yyyy HH:mm","dd-MM-yyyy hh:mm a","dd-MM-yyyy HH:mm","MM/dd/yyyy hh:mm a","MM/dd/yyyy HH:mm","dd.MM.yyyy","dd.MM.yyyy HH:mm","yyyy-MM-dd HH:mm","yy-MM-dd hh:mm a","yy-MM-dd HH:mm","yyyy-MM-dd HH:mm:ss","MMMM dd, yyyy hh:mm a","MMMM dd, yyyy HH:mm","EEEE, MMMM dd, yyyy hh:mm a","EEEE, MMMM dd, yyyy HH:mm","yyyy-MM-dd'T'HH:mm:ss.SSSXXX"],"x-speakeasy-enums":["YyyyMMddHhMmA","YyyyMMdd","DdMMSlashYyyy","DdMMDashYyyy","MmDdSlashYyyy","YyMMdd","MmmmDdCommaYyyy","EeeeMmmmDdCommaYyyy","DdMMSlashYyyyHhMmA","DdMMSlashYyyyHHmm","DdMMDashYyyyHhMmA","DdMMDashYyyyHHmm","MmDdSlashYyyyHhMmA","MmDdSlashYyyyHHmm","DdDotMmDotYyyy","DdDotMmDotYyyyHHmm","YyyyMMddHHmm","YyMMddHhMmA","YyMMddHHmm","YyyyMMddHHmmss","MmmmDdCommaYyyyHhMmA","MmmmDdCommaYyyyHHmm","EeeeMmmmDdCommaYyyyHhMmA","EeeeMmmmDdCommaYyyyHHmm","Iso8601Full"]},"distributionMethod":{"type":"string","enum":["EMAIL","NONE"]},"redirectUrl":{"type":"string"},"language":{"type":"string","enum":["de","en","fr","es","it","nl","pl","pt-BR","ja","ko","zh"]},"emailId":{"type":["string","null"]},"emailReplyTo":{"type":["string","null"],"pattern":"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\\u{0080}-\\u{FFFF}-]+@[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?(?:\\.[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?)*$"},"emailSettings":{"type":"object","properties":{"recipientSigningRequest":{},"recipientRemoved":{},"recipientSigned":{},"documentPending":{},"documentCompleted":{},"documentDeleted":{},"ownerDocumentCompleted":{},"ownerRecipientExpired":{},"ownerDocumentCreated":{}},"default":{"recipientSigningRequest":true,"recipientRemoved":true,"recipientSigned":true,"documentPending":true,"documentCompleted":true,"documentDeleted":true,"ownerDocumentCompleted":true,"ownerRecipientExpired":true,"ownerDocumentCreated":true}}}}},"required":["documentId"]}}}},"parameters":[]},"POST /document/duplicate":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"documentId":{"type":"number"}},"required":["documentId"]}}}},"parameters":[]},"POST /document/get-many":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"documentIds":{"type":"array","items":{"type":"number"},"minItems":1}},"required":["documentIds"]}}}},"parameters":[]},"POST /document/redistribute":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"documentId":{"type":"number"},"recipients":{"type":"array","items":{"type":"number"},"minItems":1}},"required":["documentId","recipients"]}}}},"parameters":[]},"POST /document/update":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"documentId":{"type":"number"},"data":{"type":"object","properties":{"title":{"type":"string","minLength":1,"maxLength":255},"externalId":{"type":["string","null"],"maxLength":255},"visibility":{"type":"string","enum":["EVERYONE","MANAGER_AND_ABOVE","ADMIN"]},"globalAccessAuth":{"type":"array","items":{"type":"string","enum":[]}},"globalActionAuth":{"type":"array","items":{"type":"string","enum":[]}},"useLegacyFieldInsertion":{"type":"boolean"},"folderId":{"type":["string","null"]}}},"meta":{"type":"object","properties":{"subject":{"type":"string","maxLength":254},"message":{"type":"string","maxLength":5000},"timezone":{"type":"string"},"dateFormat":{"type":"string","enum":["yyyy-MM-dd hh:mm a","yyyy-MM-dd","dd/MM/yyyy","dd-MM-yyyy","MM/dd/yyyy","yy-MM-dd","MMMM dd, yyyy","EEEE, MMMM dd, yyyy","dd/MM/yyyy hh:mm a","dd/MM/yyyy HH:mm","dd-MM-yyyy hh:mm a","dd-MM-yyyy HH:mm","MM/dd/yyyy hh:mm a","MM/dd/yyyy HH:mm","dd.MM.yyyy","dd.MM.yyyy HH:mm","yyyy-MM-dd HH:mm","yy-MM-dd hh:mm a","yy-MM-dd HH:mm","yyyy-MM-dd HH:mm:ss","MMMM dd, yyyy hh:mm a","MMMM dd, yyyy HH:mm","EEEE, MMMM dd, yyyy hh:mm a","EEEE, MMMM dd, yyyy HH:mm","yyyy-MM-dd'T'HH:mm:ss.SSSXXX"],"x-speakeasy-enums":["YyyyMMddHhMmA","YyyyMMdd","DdMMSlashYyyy","DdMMDashYyyy","MmDdSlashYyyy","YyMMdd","MmmmDdCommaYyyy","EeeeMmmmDdCommaYyyy","DdMMSlashYyyyHhMmA","DdMMSlashYyyyHHmm","DdMMDashYyyyHhMmA","DdMMDashYyyyHHmm","MmDdSlashYyyyHhMmA","MmDdSlashYyyyHHmm","DdDotMmDotYyyy","DdDotMmDotYyyyHHmm","YyyyMMddHHmm","YyMMddHhMmA","YyMMddHHmm","YyyyMMddHHmmss","MmmmDdCommaYyyyHhMmA","MmmmDdCommaYyyyHHmm","EeeeMmmmDdCommaYyyyHhMmA","EeeeMmmmDdCommaYyyyHHmm","Iso8601Full"]},"distributionMethod":{"type":"string","enum":["EMAIL","NONE"]},"signingOrder":{"type":"string","enum":["PARALLEL","SEQUENTIAL"]},"allowDictateNextSigner":{"type":"boolean"},"redirectUrl":{"type":"string"},"language":{"type":"string","enum":["de","en","fr","es","it","nl","pl","pt-BR","ja","ko","zh"]},"typedSignatureEnabled":{"type":"boolean"},"uploadSignatureEnabled":{"type":"boolean"},"drawSignatureEnabled":{"type":"boolean"},"emailId":{"type":["string","null"]},"emailReplyTo":{"type":["string","null"],"pattern":"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\\u{0080}-\\u{FFFF}-]+@[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?(?:\\.[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?)*$"},"emailSettings":{"type":["object","null"],"properties":{"recipientSigningRequest":{},"recipientRemoved":{},"recipientSigned":{},"documentPending":{},"documentCompleted":{},"documentDeleted":{},"ownerDocumentCompleted":{},"ownerRecipientExpired":{},"ownerDocumentCreated":{}},"default":{"recipientSigningRequest":true,"recipientRemoved":true,"recipientSigned":true,"documentPending":true,"documentCompleted":true,"documentDeleted":true,"ownerDocumentCompleted":true,"ownerRecipientExpired":true,"ownerDocumentCreated":true}},"envelopeExpirationPeriod":{"nullable":true,"anyOf":[{},{}]},"reminderSettings":{"type":["object","null"],"properties":{"sendAfter":{},"repeatEvery":{}},"required":["sendAfter","repeatEvery"]}}}},"required":["documentId"]}}}},"parameters":[]},"GET /document":{"protocol":"http","parameters":[{"in":"query","name":"query","description":"The search query.","schema":{"type":"string"},"index$":0},{"in":"query","name":"page","description":"The pagination page number, starts at 1.","schema":{"type":"number","minimum":1},"index$":1},{"in":"query","name":"perPage","description":"The number of items per page.","schema":{"type":"number","minimum":1,"maximum":100},"index$":2},{"in":"query","name":"templateId","description":"Filter documents by the template ID used to create it.","schema":{"type":"number"},"index$":3},{"in":"query","name":"source","description":"Filter documents by how it was created.","schema":{"type":"string","enum":["DOCUMENT","TEMPLATE","TEMPLATE_DIRECT_LINK"]},"index$":4},{"in":"query","name":"status","description":"Filter documents by the current status","schema":{"type":"string","enum":["DRAFT","PENDING","COMPLETED","REJECTED","CANCELLED"]},"index$":5},{"in":"query","name":"hasExpiredRecipients","description":"Filter for documents that have at least one recipient whose signing link has expired.","schema":{"type":"string","enum":["true","false"]},"index$":6},{"in":"query","name":"folderId","description":"Filter documents by folder ID","schema":{"type":"string"},"index$":7},{"in":"query","name":"orderByColumn","schema":{"type":"string","enum":["createdAt"]},"index$":8},{"in":"query","name":"orderByDirection","schema":{"type":"string","enum":["asc","desc"],"default":"desc"},"index$":9}]},"GET /document/attachment":{"protocol":"http","parameters":[{"in":"query","name":"documentId","schema":{"type":"number"},"required":true,"index$":0}]},"GET /document/{documentId}/download":{"protocol":"http","parameters":[{"in":"path","name":"documentId","description":"The ID of the document to download.","schema":{"type":"number"},"required":true,"index$":0},{"in":"query","name":"version","description":"The version of the document to download. \"signed\" returns the completed document with signatures, \"original\" returns the original uploaded document.","schema":{"type":"string","enum":["original","signed"],"default":"signed"},"index$":1}]},"GET /document/{documentId}/download-beta":{"protocol":"http","parameters":[{"in":"path","name":"documentId","description":"The ID of the document to download.","schema":{"type":"number"},"required":true,"index$":0},{"in":"query","name":"version","description":"The version of the document to download. \"signed\" returns the completed document with signatures, \"original\" returns the original uploaded document.","schema":{"type":"string","enum":["original","signed"],"default":"signed"},"index$":1}]},"GET /document/{documentId}":{"protocol":"http","parameters":[{"in":"path","name":"documentId","schema":{"type":"number"},"required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const document_ref01_ent = client.Document()
    let document_ref01_data = setup.data.new.document['document_ref01']

    document_ref01_data = (await document_ref01_ent.create(document_ref01_data)).data()
    assert(null != document_ref01_data.id)


    // LIST
    const document_ref01_match: any = {}

    const document_ref01_list = (await document_ref01_ent.list(document_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(document_ref01_list, { id: document_ref01_data.id })))


    // LOAD
    const document_ref01_match_dt0: any = {}
    document_ref01_match_dt0.id = document_ref01_data.id
    const document_ref01_data_dt0 = (await document_ref01_ent.load(document_ref01_match_dt0)).data()
    assert(document_ref01_data_dt0.id === document_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/document/DocumentTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = Documenso2SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['document01','document02','document03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DOCUMENSO2_TEST_DOCUMENT_ENTID': idmap,
    'DOCUMENSO2_TEST_LIVE': 'FALSE',
    'DOCUMENSO2_TEST_EXPLAIN': 'FALSE',
    'DOCUMENSO2_APIKEY': '',
  })

  idmap = env['DOCUMENSO2_TEST_DOCUMENT_ENTID']

  const live = 'TRUE' === env.DOCUMENSO2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DOCUMENSO2_TEST_DOCUMENT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new Documenso2SDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
