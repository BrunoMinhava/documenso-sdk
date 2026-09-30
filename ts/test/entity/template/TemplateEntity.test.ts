

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


describe('TemplateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DOCUMENSO2_TEST_LIVE=TRUE.
  afterEach(liveDelay('DOCUMENSO2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Documenso2SDK.test()
    const ent = testsdk.Template()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DOCUMENSO2_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'template.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"attachments":{"a":true,"h":"Attachments","n":"attachments","r":false,"t":"`$ARRAY`","key$":"attachments","index$":0},"authOptions":{"a":true,"h":"Auth Options","n":"authOptions","r":true,"t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"authOptions","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":2},"directLink":{"a":true,"h":"Direct Link","n":"directLink","r":true,"t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"directLink","index$":3},"directRecipientId":{"a":true,"h":"Direct Recipient Id","n":"directRecipientId","r":false,"t":"`$NUMBER`","key$":"directRecipientId","index$":4},"directTemplateRecipientId":{"a":true,"h":"Direct Template Recipient Id","n":"directTemplateRecipientId","r":true,"t":"`$NUMBER`","key$":"directTemplateRecipientId","index$":5},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"t":"`$BOOLEAN`","key$":"enabled","index$":6},"envelopeId":{"a":true,"h":"Envelope Id","n":"envelopeId","r":true,"t":"`$STRING`","key$":"envelopeId","index$":7},"envelopeItems":{"a":true,"h":"Envelope Items","n":"envelopeItems","r":true,"t":"`$ARRAY`","key$":"envelopeItems","index$":8},"externalId":{"a":true,"h":"External Id","n":"externalId","op":{"create":{"req":false,"type":["`$ONE`",["`$STRING`","`$NULL`"]]}},"r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"externalId","index$":9},"fields":{"a":true,"h":"Fields","n":"fields","r":true,"t":"`$ARRAY`","union":{"branches":10,"count":1,"depth":3},"key$":"fields","index$":10},"folder":{"a":true,"h":"Folder","n":"folder","r":true,"t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"folder","index$":11},"folderId":{"a":true,"h":"Folder Id","n":"folderId","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"folderId","index$":12},"globalAccessAuth":{"a":true,"h":"Global Access Auth","n":"globalAccessAuth","r":false,"t":"`$ARRAY`","key$":"globalAccessAuth","index$":13},"globalActionAuth":{"a":true,"h":"Global Action Auth","n":"globalActionAuth","r":false,"t":"`$ARRAY`","key$":"globalActionAuth","index$":14},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$NUMBER`","key$":"id","index$":15},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"t":"`$OBJECT`","key$":"meta","index$":16},"publicDescription":{"a":true,"h":"Public Description","n":"publicDescription","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"publicDescription","index$":17},"publicTitle":{"a":true,"h":"Public Title","n":"publicTitle","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"publicTitle","index$":18},"recipients":{"a":true,"h":"Recipients","n":"recipients","r":true,"t":"`$ARRAY`","key$":"recipients","index$":19},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":20},"team":{"a":true,"h":"Team","n":"team","r":true,"t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"team","index$":21},"teamId":{"a":true,"h":"Team Id","n":"teamId","r":true,"t":"`$NUMBER`","key$":"teamId","index$":22},"template":{"a":true,"h":"Template","n":"template","r":true,"t":"`$OBJECT`","union":{"branches":10,"count":1,"depth":5},"key$":"template","index$":23},"templateDocumentData":{"a":true,"h":"Template Document Data","n":"templateDocumentData","r":true,"t":"`$OBJECT`","key$":"templateDocumentData","index$":24},"templateDocumentDataId":{"a":true,"h":"Template Document Data Id","n":"templateDocumentDataId","r":true,"t":"`$STRING`","key$":"templateDocumentDataId","index$":25},"templateId":{"a":true,"h":"Template Id","n":"templateId","r":true,"t":"`$NUMBER`","key$":"templateId","index$":26},"templateMeta":{"a":true,"h":"Template Meta","n":"templateMeta","r":true,"t":"`$OBJECT`","key$":"templateMeta","index$":27},"title":{"a":true,"h":"Title","n":"title","r":true,"t":"`$STRING`","key$":"title","index$":28},"token":{"a":true,"h":"Token","n":"token","r":true,"t":"`$STRING`","key$":"token","index$":29},"type":{"a":true,"h":"Type","n":"type","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"type","index$":30},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":31},"uploadUrl":{"a":true,"h":"Upload Url","n":"uploadUrl","r":true,"t":"`$STRING`","key$":"uploadUrl","index$":32},"useLegacyFieldInsertion":{"a":true,"h":"Use Legacy Field Insertion","n":"useLegacyFieldInsertion","r":true,"t":"`$BOOLEAN`","key$":"useLegacyFieldInsertion","index$":33},"user":{"a":true,"h":"User","n":"user","r":true,"t":"`$OBJECT`","key$":"user","index$":34},"userId":{"a":true,"h":"User Id","n":"userId","r":true,"t":"`$NUMBER`","key$":"userId","index$":35},"visibility":{"a":true,"h":"Visibility","n":"visibility","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"visibility","index$":36}},"id":{"field":"id","name":"id"},"name":"template","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /template/create","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/template/create","q":{"$action":"create"},"r":{},"s":[{"lit":"template"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /template/create/beta","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/template/create/beta","q":{},"r":{},"s":[{"lit":"template"},{"lit":"create"},{"lit":"beta"}],"t":{"req":"`reqdata`","res":"`body.template`"},"index$":0},{"a":true,"co":{"id":"POST /template/delete","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/template/delete","q":{"$action":"delete"},"r":{},"s":[{"lit":"template"},{"lit":"delete"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /template/direct/create","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/template/direct/create","q":{},"r":{},"s":[{"lit":"template"},{"lit":"direct"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /template/direct/delete","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/template/direct/delete","q":{},"r":{},"s":[{"lit":"template"},{"lit":"direct"},{"lit":"delete"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"POST /template/direct/toggle","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/template/direct/toggle","q":{},"r":{},"s":[{"lit":"template"},{"lit":"direct"},{"lit":"toggle"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"POST /template/duplicate","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/template/duplicate","q":{"$action":"duplicate"},"r":{},"s":[{"lit":"template"},{"lit":"duplicate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"POST /template/get-many","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/template/get-many","q":{"$action":"get_many"},"r":{},"s":[{"lit":"template"},{"lit":"get-many"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7},{"a":true,"co":{"id":"POST /template/update","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/template/update","q":{"$action":"update"},"r":{},"s":[{"lit":"template"},{"lit":"update"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":8},{"a":true,"co":{"id":"POST /template/use","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/template/use","q":{"$action":"use"},"r":{},"s":[{"lit":"template"},{"lit":"use"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":9}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /template","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"folder_id","or":"folderId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"k":"query","n":"per_page","or":"perPage","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/template","q":{"exist":["folder_id","page","per_page","query","type"]},"r":{},"s":[{"lit":"template"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /template/{templateId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"templateId","r":true,"t":"`$NUMBER`","index$":0}]},"k":"http","m":"GET","o":"/template/{templateId}","q":{"exist":["id"]},"r":{"param":{"templateId":"id"}},"s":[{"lit":"template"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"template","name__orig":"template","Name":"Template","name_":"template","name-":"template","NAME":"TEMPLATE","index$":10}, {"active":true,"entity":"template","key$":"BasicTemplateFlow","kind":"basic","name":"BasicTemplateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"template_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"template_ref01"}}]},{"a":true,"d":{},"i":{"ref":"template_ref01","srcdatavar":"template_ref01_data","suffix":"_dt0"},"m":{"id":"template01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-template_ref01"}}]}]}, 'Template', {"POST /template/create":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"payload":{"type":"object","properties":{"title":{"type":"string","minLength":1,"maxLength":255},"folderId":{"type":"string"},"externalId":{"type":["string","null"]},"visibility":{"type":"string","enum":["EVERYONE","MANAGER_AND_ABOVE","ADMIN"]},"globalAccessAuth":{"type":"array","items":{"type":"string","enum":[]},"default":[]},"globalActionAuth":{"type":"array","items":{"type":"string","enum":[]},"default":[]},"publicTitle":{"type":"string","minLength":1,"maxLength":50},"publicDescription":{"type":"string","minLength":1,"maxLength":256},"type":{"type":"string","enum":["PUBLIC","PRIVATE","ORGANISATION"]},"meta":{"type":"object","properties":{"subject":{},"message":{},"timezone":{},"dateFormat":{},"distributionMethod":{},"emailId":{},"emailReplyTo":{},"emailSettings":{},"redirectUrl":{},"language":{},"typedSignatureEnabled":{},"uploadSignatureEnabled":{},"drawSignatureEnabled":{},"signingOrder":{},"allowDictateNextSigner":{}}},"attachments":{"type":"array","items":{"type":"object","properties":{},"required":[]}}},"required":["title"]},"file":{"type":"string","contentMediaType":"application/octet-stream"}},"required":["payload","file"]}}}},"parameters":[]},"POST /template/create/beta":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"title":{"type":"string","minLength":1,"maxLength":255,"key$":"title"},"folderId":{"type":"string","key$":"folderId"},"externalId":{"type":["string","null"],"key$":"externalId"},"visibility":{"type":"string","enum":["EVERYONE","MANAGER_AND_ABOVE","ADMIN"],"key$":"visibility"},"globalAccessAuth":{"type":"array","items":{"type":"string","enum":["ACCOUNT","TWO_FACTOR_AUTH"]},"default":[],"key$":"globalAccessAuth"},"globalActionAuth":{"type":"array","items":{"type":"string","enum":["ACCOUNT","PASSKEY","TWO_FACTOR_AUTH","PASSWORD"]},"default":[],"key$":"globalActionAuth"},"publicTitle":{"type":"string","minLength":1,"maxLength":50,"key$":"publicTitle"},"publicDescription":{"type":"string","minLength":1,"maxLength":256,"key$":"publicDescription"},"type":{"type":"string","enum":["PUBLIC","PRIVATE","ORGANISATION"],"key$":"type"},"meta":{"type":"object","properties":{"subject":{"type":"string","maxLength":254},"message":{"type":"string","maxLength":5000},"timezone":{"type":"string"},"dateFormat":{"type":"string","enum":["yyyy-MM-dd hh:mm a","yyyy-MM-dd","dd/MM/yyyy","dd-MM-yyyy","MM/dd/yyyy","yy-MM-dd","MMMM dd, yyyy","EEEE, MMMM dd, yyyy","dd/MM/yyyy hh:mm a","dd/MM/yyyy HH:mm","dd-MM-yyyy hh:mm a","dd-MM-yyyy HH:mm","MM/dd/yyyy hh:mm a","MM/dd/yyyy HH:mm","dd.MM.yyyy","dd.MM.yyyy HH:mm","yyyy-MM-dd HH:mm","yy-MM-dd hh:mm a","yy-MM-dd HH:mm","yyyy-MM-dd HH:mm:ss","MMMM dd, yyyy hh:mm a","MMMM dd, yyyy HH:mm","EEEE, MMMM dd, yyyy hh:mm a","EEEE, MMMM dd, yyyy HH:mm","yyyy-MM-dd'T'HH:mm:ss.SSSXXX"],"x-speakeasy-enums":["YyyyMMddHhMmA","YyyyMMdd","DdMMSlashYyyy","DdMMDashYyyy","MmDdSlashYyyy","YyMMdd","MmmmDdCommaYyyy","EeeeMmmmDdCommaYyyy","DdMMSlashYyyyHhMmA","DdMMSlashYyyyHHmm","DdMMDashYyyyHhMmA","DdMMDashYyyyHHmm","MmDdSlashYyyyHhMmA","MmDdSlashYyyyHHmm","DdDotMmDotYyyy","DdDotMmDotYyyyHHmm","YyyyMMddHHmm","YyMMddHhMmA","YyMMddHHmm","YyyyMMddHHmmss","MmmmDdCommaYyyyHhMmA","MmmmDdCommaYyyyHHmm","EeeeMmmmDdCommaYyyyHhMmA","EeeeMmmmDdCommaYyyyHHmm","Iso8601Full"]},"distributionMethod":{"type":"string","enum":["EMAIL","NONE"]},"emailId":{"type":["string","null"]},"emailReplyTo":{"type":["string","null"],"pattern":"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\\u{0080}-\\u{FFFF}-]+@[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?(?:\\.[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?)*$"},"emailSettings":{"type":"object","properties":{"recipientSigningRequest":{},"recipientRemoved":{},"recipientSigned":{},"documentPending":{},"documentCompleted":{},"documentDeleted":{},"ownerDocumentCompleted":{},"ownerRecipientExpired":{},"ownerDocumentCreated":{}},"default":{"recipientSigningRequest":true,"recipientRemoved":true,"recipientSigned":true,"documentPending":true,"documentCompleted":true,"documentDeleted":true,"ownerDocumentCompleted":true,"ownerRecipientExpired":true,"ownerDocumentCreated":true}},"redirectUrl":{"type":"string"},"language":{"type":"string","enum":["de","en","fr","es","it","nl","pl","pt-BR","ja","ko","zh"]},"typedSignatureEnabled":{"type":"boolean"},"uploadSignatureEnabled":{"type":"boolean"},"drawSignatureEnabled":{"type":"boolean"},"signingOrder":{"type":"string","enum":["PARALLEL","SEQUENTIAL"]},"allowDictateNextSigner":{"type":"boolean"}},"key$":"meta"},"attachments":{"type":"array","items":{"type":"object","properties":{"label":{"type":"string","minLength":1},"data":{"type":"string","format":"uri"},"type":{"type":"string","enum":[],"default":"link"}},"required":["label","data"]},"key$":"attachments"}},"required":["title"],"index$":1}}}},"parameters":[]},"POST /template/delete":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"templateId":{"type":"number"}},"required":["templateId"]}}}},"parameters":[]},"POST /template/direct/create":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"templateId":{"type":"number","key$":"templateId"},"directRecipientId":{"type":"number","key$":"directRecipientId"}},"required":["templateId"],"index$":1}}}},"parameters":[]},"POST /template/direct/delete":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"templateId":{"type":"number","key$":"templateId"}},"required":["templateId"],"index$":1}}}},"parameters":[]},"POST /template/direct/toggle":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"templateId":{"type":"number","key$":"templateId"},"enabled":{"type":"boolean","key$":"enabled"}},"required":["templateId","enabled"],"index$":1}}}},"parameters":[]},"POST /template/duplicate":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"templateId":{"type":"number"}},"required":["templateId"]}}}},"parameters":[]},"POST /template/get-many":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"templateIds":{"type":"array","items":{"type":"number"},"minItems":1}},"required":["templateIds"]}}}},"parameters":[]},"POST /template/update":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"templateId":{"type":"number"},"data":{"type":"object","properties":{"title":{"type":"string","minLength":1,"maxLength":255},"externalId":{"type":["string","null"]},"visibility":{"type":"string","enum":["EVERYONE","MANAGER_AND_ABOVE","ADMIN"]},"globalAccessAuth":{"type":"array","items":{"type":"string","enum":[]},"default":[]},"globalActionAuth":{"type":"array","items":{"type":"string","enum":[]},"default":[]},"publicTitle":{"type":"string","minLength":1,"maxLength":50},"publicDescription":{"type":"string","minLength":1,"maxLength":256},"type":{"type":"string","enum":["PUBLIC","PRIVATE","ORGANISATION"]},"useLegacyFieldInsertion":{"type":"boolean"},"folderId":{"type":["string","null"]}}},"meta":{"type":"object","properties":{"subject":{"type":"string","maxLength":254},"message":{"type":"string","maxLength":5000},"timezone":{"type":"string"},"dateFormat":{"type":"string","enum":["yyyy-MM-dd hh:mm a","yyyy-MM-dd","dd/MM/yyyy","dd-MM-yyyy","MM/dd/yyyy","yy-MM-dd","MMMM dd, yyyy","EEEE, MMMM dd, yyyy","dd/MM/yyyy hh:mm a","dd/MM/yyyy HH:mm","dd-MM-yyyy hh:mm a","dd-MM-yyyy HH:mm","MM/dd/yyyy hh:mm a","MM/dd/yyyy HH:mm","dd.MM.yyyy","dd.MM.yyyy HH:mm","yyyy-MM-dd HH:mm","yy-MM-dd hh:mm a","yy-MM-dd HH:mm","yyyy-MM-dd HH:mm:ss","MMMM dd, yyyy hh:mm a","MMMM dd, yyyy HH:mm","EEEE, MMMM dd, yyyy hh:mm a","EEEE, MMMM dd, yyyy HH:mm","yyyy-MM-dd'T'HH:mm:ss.SSSXXX"],"x-speakeasy-enums":["YyyyMMddHhMmA","YyyyMMdd","DdMMSlashYyyy","DdMMDashYyyy","MmDdSlashYyyy","YyMMdd","MmmmDdCommaYyyy","EeeeMmmmDdCommaYyyy","DdMMSlashYyyyHhMmA","DdMMSlashYyyyHHmm","DdMMDashYyyyHhMmA","DdMMDashYyyyHHmm","MmDdSlashYyyyHhMmA","MmDdSlashYyyyHHmm","DdDotMmDotYyyy","DdDotMmDotYyyyHHmm","YyyyMMddHHmm","YyMMddHhMmA","YyMMddHHmm","YyyyMMddHHmmss","MmmmDdCommaYyyyHhMmA","MmmmDdCommaYyyyHHmm","EeeeMmmmDdCommaYyyyHhMmA","EeeeMmmmDdCommaYyyyHHmm","Iso8601Full"]},"distributionMethod":{"type":"string","enum":["EMAIL","NONE"]},"emailId":{"type":["string","null"]},"emailReplyTo":{"type":["string","null"],"pattern":"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\\u{0080}-\\u{FFFF}-]+@[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?(?:\\.[a-zA-Z0-9\\u{0080}-\\u{FFFF}](?:[a-zA-Z0-9\\u{0080}-\\u{FFFF}-]{0,61}[a-zA-Z0-9\\u{0080}-\\u{FFFF}])?)*$"},"emailSettings":{"type":"object","properties":{"recipientSigningRequest":{},"recipientRemoved":{},"recipientSigned":{},"documentPending":{},"documentCompleted":{},"documentDeleted":{},"ownerDocumentCompleted":{},"ownerRecipientExpired":{},"ownerDocumentCreated":{}},"default":{"recipientSigningRequest":true,"recipientRemoved":true,"recipientSigned":true,"documentPending":true,"documentCompleted":true,"documentDeleted":true,"ownerDocumentCompleted":true,"ownerRecipientExpired":true,"ownerDocumentCreated":true}},"redirectUrl":{"type":"string"},"language":{"type":"string","enum":["de","en","fr","es","it","nl","pl","pt-BR","ja","ko","zh"]},"typedSignatureEnabled":{"type":"boolean"},"uploadSignatureEnabled":{"type":"boolean"},"drawSignatureEnabled":{"type":"boolean"},"signingOrder":{"type":"string","enum":["PARALLEL","SEQUENTIAL"]},"allowDictateNextSigner":{"type":"boolean"}}}},"required":["templateId"]}}}},"parameters":[]},"POST /template/use":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"templateId":{"type":"number"},"externalId":{"type":"string","maxLength":255},"recipients":{"type":"array","items":{"type":"object","properties":{"id":{"type":"number"},"email":{"anyOf":[]},"name":{"type":"string","maxLength":255}},"required":["id","email"]}},"distributeDocument":{"type":"boolean"},"customDocumentDataId":{"type":"string"},"customDocumentData":{"type":"array","items":{"type":"object","properties":{"documentDataId":{"type":"string"},"envelopeItemId":{"type":"string"}},"required":["documentDataId","envelopeItemId"]}},"folderId":{"type":"string"},"prefillFields":{"type":"array","items":{"allOf":[{"type":"object","properties":{},"required":[]},{"oneOf":[]}]}},"override":{"type":"object","properties":{"title":{"type":"string","minLength":1,"maxLength":255},"subject":{"type":"string","maxLength":254},"message":{"type":"string","maxLength":5000},"timezone":{"type":"string"},"dateFormat":{"type":"string","enum":["yyyy-MM-dd hh:mm a","yyyy-MM-dd","dd/MM/yyyy","dd-MM-yyyy","MM/dd/yyyy","yy-MM-dd","MMMM dd, yyyy","EEEE, MMMM dd, yyyy","dd/MM/yyyy hh:mm a","dd/MM/yyyy HH:mm","dd-MM-yyyy hh:mm a","dd-MM-yyyy HH:mm","MM/dd/yyyy hh:mm a","MM/dd/yyyy HH:mm","dd.MM.yyyy","dd.MM.yyyy HH:mm","yyyy-MM-dd HH:mm","yy-MM-dd hh:mm a","yy-MM-dd HH:mm","yyyy-MM-dd HH:mm:ss","MMMM dd, yyyy hh:mm a","MMMM dd, yyyy HH:mm","EEEE, MMMM dd, yyyy hh:mm a","EEEE, MMMM dd, yyyy HH:mm","yyyy-MM-dd'T'HH:mm:ss.SSSXXX"],"x-speakeasy-enums":["YyyyMMddHhMmA","YyyyMMdd","DdMMSlashYyyy","DdMMDashYyyy","MmDdSlashYyyy","YyMMdd","MmmmDdCommaYyyy","EeeeMmmmDdCommaYyyy","DdMMSlashYyyyHhMmA","DdMMSlashYyyyHHmm","DdMMDashYyyyHhMmA","DdMMDashYyyyHHmm","MmDdSlashYyyyHhMmA","MmDdSlashYyyyHHmm","DdDotMmDotYyyy","DdDotMmDotYyyyHHmm","YyyyMMddHHmm","YyMMddHhMmA","YyMMddHHmm","YyyyMMddHHmmss","MmmmDdCommaYyyyHhMmA","MmmmDdCommaYyyyHHmm","EeeeMmmmDdCommaYyyyHhMmA","EeeeMmmmDdCommaYyyyHHmm","Iso8601Full"]},"redirectUrl":{"type":"string"},"distributionMethod":{"type":"string","enum":["EMAIL","NONE"]},"emailSettings":{"type":"object","properties":{"recipientSigningRequest":{},"recipientRemoved":{},"recipientSigned":{},"documentPending":{},"documentCompleted":{},"documentDeleted":{},"ownerDocumentCompleted":{},"ownerRecipientExpired":{},"ownerDocumentCreated":{}},"default":{"recipientSigningRequest":true,"recipientRemoved":true,"recipientSigned":true,"documentPending":true,"documentCompleted":true,"documentDeleted":true,"ownerDocumentCompleted":true,"ownerRecipientExpired":true,"ownerDocumentCreated":true}},"language":{"type":"string","enum":["de","en","fr","es","it","nl","pl","pt-BR","ja","ko","zh"]},"typedSignatureEnabled":{"type":"boolean"},"uploadSignatureEnabled":{"type":"boolean"},"drawSignatureEnabled":{"type":"boolean"},"allowDictateNextSigner":{"type":"boolean"},"envelopeExpirationPeriod":{"nullable":true,"anyOf":[{},{}]}}},"attachments":{"type":"array","items":{"type":"object","properties":{"label":{"type":"string","minLength":1},"data":{"type":"string","format":"uri"},"type":{"type":"string","enum":[],"default":"link"}},"required":["label","data"]}},"formValues":{"type":"object","additionalProperties":{"anyOf":[{"type":"string"},{"type":"boolean"},{"type":"number"}]}}},"required":["templateId","recipients"]}}}},"parameters":[]},"GET /template":{"protocol":"http","parameters":[{"in":"query","name":"query","description":"The search query.","schema":{"type":"string"},"index$":0},{"in":"query","name":"page","description":"The pagination page number, starts at 1.","schema":{"type":"number","minimum":1},"index$":1},{"in":"query","name":"perPage","description":"The number of items per page.","schema":{"type":"number","minimum":1,"maximum":100},"index$":2},{"in":"query","name":"type","description":"Filter templates by type.","schema":{"type":"string","enum":["PUBLIC","PRIVATE","ORGANISATION"]},"index$":3},{"in":"query","name":"folderId","description":"The ID of the folder to filter templates by.","schema":{"type":"string"},"index$":4}]},"GET /template/{templateId}":{"protocol":"http","parameters":[{"in":"path","name":"templateId","schema":{"type":"number"},"required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const template_ref01_ent = client.Template()
    let template_ref01_data = setup.data.new.template['template_ref01']

    template_ref01_data = (await template_ref01_ent.create(template_ref01_data)).data()
    assert(null != template_ref01_data.id)


    // LIST
    const template_ref01_match: any = {}

    const template_ref01_list = (await template_ref01_ent.list(template_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(template_ref01_list, { id: template_ref01_data.id })))


    // LOAD
    const template_ref01_match_dt0: any = {}
    template_ref01_match_dt0.id = template_ref01_data.id
    const template_ref01_data_dt0 = (await template_ref01_ent.load(template_ref01_match_dt0)).data()
    assert(template_ref01_data_dt0.id === template_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/template/TemplateTestData.json')

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
    ['template01','template02','template03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DOCUMENSO2_TEST_TEMPLATE_ENTID': idmap,
    'DOCUMENSO2_TEST_LIVE': 'FALSE',
    'DOCUMENSO2_TEST_EXPLAIN': 'FALSE',
    'DOCUMENSO2_APIKEY': '',
  })

  idmap = env['DOCUMENSO2_TEST_TEMPLATE_ENTID']

  const live = 'TRUE' === env.DOCUMENSO2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DOCUMENSO2_TEST_TEMPLATE_ENTID']
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
  
