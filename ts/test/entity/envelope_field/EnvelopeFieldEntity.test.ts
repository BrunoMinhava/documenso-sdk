

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


describe('EnvelopeFieldEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DOCUMENSO2_TEST_LIVE=TRUE.
  afterEach(liveDelay('DOCUMENSO2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Documenso2SDK.test()
    const ent = testsdk.EnvelopeField()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DOCUMENSO2_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'envelope_field.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"customText":{"a":true,"h":"Custom Text","n":"customText","r":true,"t":"`$STRING`","key$":"customText","index$":0},"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$ARRAY`","union":{"branches":10,"count":1,"depth":3},"key$":"data","index$":1},"envelopeId":{"a":true,"h":"Envelope Id","n":"envelopeId","r":true,"t":"`$STRING`","key$":"envelopeId","index$":2},"envelopeItemId":{"a":true,"h":"Envelope Item Id","n":"envelopeItemId","r":true,"t":"`$STRING`","key$":"envelopeItemId","index$":3},"fieldId":{"a":true,"h":"Field Id","n":"fieldId","r":true,"t":"`$NUMBER`","key$":"fieldId","index$":4},"fieldMeta":{"a":true,"h":"Field Meta","n":"fieldMeta","r":true,"t":"`$ANY`","union":{"branches":10,"count":1,"depth":0},"key$":"fieldMeta","index$":5},"height":{"a":true,"h":"Height","n":"height","r":true,"t":"`$NUMBER`","key$":"height","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$NUMBER`","key$":"id","index$":7},"inserted":{"a":true,"h":"Inserted","n":"inserted","r":true,"t":"`$BOOLEAN`","key$":"inserted","index$":8},"page":{"a":true,"h":"Page","n":"page","r":true,"t":"`$NUMBER`","key$":"page","index$":9},"positionX":{"a":true,"h":"Position X","n":"positionX","r":true,"t":"`$ANY`","key$":"positionX","index$":10},"positionY":{"a":true,"h":"Position Y","n":"positionY","r":true,"t":"`$ANY`","key$":"positionY","index$":11},"recipientId":{"a":true,"h":"Recipient Id","n":"recipientId","r":true,"t":"`$NUMBER`","key$":"recipientId","index$":12},"secondaryId":{"a":true,"h":"Secondary Id","n":"secondaryId","r":true,"t":"`$STRING`","key$":"secondaryId","index$":13},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":14},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":15},"width":{"a":true,"h":"Width","n":"width","r":true,"t":"`$NUMBER`","key$":"width","index$":16}},"id":{"field":"id","name":"id"},"name":"envelope_field","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /envelope/field/create-many","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/envelope/field/create-many","q":{},"r":{},"s":[{"lit":"envelope"},{"lit":"field"},{"lit":"create-many"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /envelope/field/delete","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/envelope/field/delete","q":{},"r":{},"s":[{"lit":"envelope"},{"lit":"field"},{"lit":"delete"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /envelope/field/update-many","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/envelope/field/update-many","q":{},"r":{},"s":[{"lit":"envelope"},{"lit":"field"},{"lit":"update-many"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /envelope/field/{fieldId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"fieldId","r":true,"t":"`$NUMBER`","index$":0}]},"k":"http","m":"GET","o":"/envelope/field/{fieldId}","q":{"exist":["id"]},"r":{"param":{"fieldId":"id"}},"s":[{"lit":"envelope"},{"lit":"field"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"envelope_field","name__orig":"envelope_field","Name":"EnvelopeField","name_":"envelope_field","name-":"envelope-field","NAME":"ENVELOPE_FIELD","index$":6}, {"active":true,"entity":"envelope_field","key$":"BasicEnvelopeFieldFlow","kind":"basic","name":"BasicEnvelopeFieldFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"envelope_field_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"envelope_field_ref01","srcdatavar":"envelope_field_ref01_data","suffix":"_dt0"},"m":{"id":"envelope_field01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-envelope_field_ref01"}}]}]}, 'EnvelopeField', {"POST /envelope/field/create-many":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"envelopeId":{"type":"string","key$":"envelopeId"},"data":{"type":"array","items":{"anyOf":[{"allOf":[]},{"allOf":[]}]},"key$":"data"}},"required":["envelopeId","data"],"index$":1}}}},"parameters":[]},"POST /envelope/field/delete":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"fieldId":{"type":"number","key$":"fieldId"}},"required":["fieldId"],"index$":1}}}},"parameters":[]},"POST /envelope/field/update-many":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"envelopeId":{"type":"string","key$":"envelopeId"},"data":{"type":"array","items":{"allOf":[{"oneOf":[]},{"type":"object","properties":{},"required":[]},{"type":"object","properties":{}}]},"key$":"data"}},"required":["envelopeId","data"],"index$":1}}}},"parameters":[]},"GET /envelope/field/{fieldId}":{"protocol":"http","parameters":[{"in":"path","name":"fieldId","schema":{"type":"number"},"required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const envelope_field_ref01_ent = client.EnvelopeField()
    let envelope_field_ref01_data = setup.data.new.envelope_field['envelope_field_ref01']

    envelope_field_ref01_data = (await envelope_field_ref01_ent.create(envelope_field_ref01_data)).data()
    assert(null != envelope_field_ref01_data.id)


    // LOAD
    const envelope_field_ref01_match_dt0: any = {}
    envelope_field_ref01_match_dt0.id = envelope_field_ref01_data.id
    const envelope_field_ref01_data_dt0 = (await envelope_field_ref01_ent.load(envelope_field_ref01_match_dt0)).data()
    assert(envelope_field_ref01_data_dt0.id === envelope_field_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/envelope_field/EnvelopeFieldTestData.json')

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
    ['envelope_field01','envelope_field02','envelope_field03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DOCUMENSO2_TEST_ENVELOPE_FIELD_ENTID': idmap,
    'DOCUMENSO2_TEST_LIVE': 'FALSE',
    'DOCUMENSO2_TEST_EXPLAIN': 'FALSE',
    'DOCUMENSO2_APIKEY': '',
  })

  idmap = env['DOCUMENSO2_TEST_ENVELOPE_FIELD_ENTID']

  const live = 'TRUE' === env.DOCUMENSO2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DOCUMENSO2_TEST_ENVELOPE_FIELD_ENTID']
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
  
