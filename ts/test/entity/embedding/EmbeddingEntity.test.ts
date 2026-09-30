

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


describe('EmbeddingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DOCUMENSO2_TEST_LIVE=TRUE.
  afterEach(liveDelay('DOCUMENSO2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Documenso2SDK.test()
    const ent = testsdk.Embedding()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DOCUMENSO2_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'embedding.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"embedding","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /embedding/create-presign-token","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/embedding/create-presign-token","q":{"$action":"create_presign_token"},"r":{},"s":[{"lit":"embedding"},{"lit":"create-presign-token"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /embedding/verify-presign-token","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/embedding/verify-presign-token","q":{"$action":"verify_presign_token"},"r":{},"s":[{"lit":"embedding"},{"lit":"verify-presign-token"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"embedding","name__orig":"embedding","Name":"Embedding","name_":"embedding","name-":"embedding","NAME":"EMBEDDING","index$":3}, {"active":true,"entity":"embedding","key$":"BasicEmbeddingFlow","kind":"basic","name":"BasicEmbeddingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"embedding_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'Embedding', {"POST /embedding/create-presign-token":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"expiresIn":{"type":"number","minimum":0,"maximum":10080,"default":60},"scope":{"type":"string"}}}}}},"parameters":[]},"POST /embedding/verify-presign-token":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"token":{"type":"string","minLength":1},"scope":{"type":"string"}},"required":["token"]}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const embedding_ref01_ent = client.Embedding()
    let embedding_ref01_data = setup.data.new.embedding['embedding_ref01']

    embedding_ref01_data = (await embedding_ref01_ent.create(embedding_ref01_data)).data()
    assert(null != embedding_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/embedding/EmbeddingTestData.json')

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
    ['embedding01','embedding02','embedding03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DOCUMENSO2_TEST_EMBEDDING_ENTID': idmap,
    'DOCUMENSO2_TEST_LIVE': 'FALSE',
    'DOCUMENSO2_TEST_EXPLAIN': 'FALSE',
    'DOCUMENSO2_APIKEY': '',
  })

  idmap = env['DOCUMENSO2_TEST_EMBEDDING_ENTID']

  const live = 'TRUE' === env.DOCUMENSO2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DOCUMENSO2_TEST_EMBEDDING_ENTID']
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
  
