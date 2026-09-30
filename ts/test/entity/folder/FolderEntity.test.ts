

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


describe('FolderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DOCUMENSO2_TEST_LIVE=TRUE.
  afterEach(liveDelay('DOCUMENSO2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Documenso2SDK.test()
    const ent = testsdk.Folder()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DOCUMENSO2_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'folder.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":2},"parentId":{"a":true,"h":"Parent Id","n":"parentId","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"parentId","index$":3},"pinned":{"a":true,"h":"Pinned","n":"pinned","r":true,"t":"`$BOOLEAN`","key$":"pinned","index$":4},"teamId":{"a":true,"h":"Team Id","n":"teamId","r":true,"t":"`$NUMBER`","key$":"teamId","index$":5},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":6},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":7},"userId":{"a":true,"h":"User Id","n":"userId","r":true,"t":"`$NUMBER`","key$":"userId","index$":8},"visibility":{"a":true,"h":"Visibility","n":"visibility","r":true,"t":"`$STRING`","key$":"visibility","index$":9}},"id":{"field":"id","name":"id"},"name":"folder","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /folder/create","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/folder/create","q":{"$action":"create"},"r":{},"s":[{"lit":"folder"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /folder/delete","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/folder/delete","q":{"$action":"delete"},"r":{},"s":[{"lit":"folder"},{"lit":"delete"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /folder/update","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/folder/update","q":{"$action":"update"},"r":{},"s":[{"lit":"folder"},{"lit":"update"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /folder","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"k":"query","n":"parent_id","or":"parentId","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"per_page","or":"perPage","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/folder","q":{"exist":["page","parent_id","per_page","query","type"]},"r":{},"s":[{"lit":"folder"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"folder","name__orig":"folder","Name":"Folder","name_":"folder","name-":"folder","NAME":"FOLDER","index$":9}, {"active":true,"entity":"folder","key$":"BasicFolderFlow","kind":"basic","name":"BasicFolderFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"folder_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"folder_ref01"}}]}]}, 'Folder', {"POST /folder/create":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","minLength":2,"maxLength":100},"parentId":{"type":"string"},"type":{"type":"string","enum":["DOCUMENT","TEMPLATE"]}},"required":["name"]}}}},"parameters":[]},"POST /folder/delete":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"folderId":{"type":"string"}},"required":["folderId"]}}}},"parameters":[]},"POST /folder/update":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"folderId":{"type":"string"},"data":{"type":"object","properties":{"name":{"type":"string","minLength":2,"maxLength":100},"parentId":{"type":["string","null"]},"visibility":{"type":"string","enum":["EVERYONE","MANAGER_AND_ABOVE","ADMIN"]},"pinned":{"type":"boolean"}}}},"required":["folderId","data"]}}}},"parameters":[]},"GET /folder":{"protocol":"http","parameters":[{"in":"query","name":"query","description":"The search query.","schema":{"type":"string"},"index$":0},{"in":"query","name":"page","description":"The pagination page number, starts at 1.","schema":{"type":"number","minimum":1},"index$":1},{"in":"query","name":"perPage","description":"The number of items per page.","schema":{"type":"number","minimum":1,"maximum":100},"index$":2},{"in":"query","name":"parentId","schema":{"type":"string"},"index$":3},{"in":"query","name":"type","schema":{"type":"string","enum":["DOCUMENT","TEMPLATE"]},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const folder_ref01_ent = client.Folder()
    let folder_ref01_data = setup.data.new.folder['folder_ref01']

    folder_ref01_data = (await folder_ref01_ent.create(folder_ref01_data)).data()
    assert(null != folder_ref01_data.id)


    // LIST
    const folder_ref01_match: any = {}

    const folder_ref01_list = (await folder_ref01_ent.list(folder_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(folder_ref01_list, { id: folder_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/folder/FolderTestData.json')

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
    ['folder01','folder02','folder03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DOCUMENSO2_TEST_FOLDER_ENTID': idmap,
    'DOCUMENSO2_TEST_LIVE': 'FALSE',
    'DOCUMENSO2_TEST_EXPLAIN': 'FALSE',
    'DOCUMENSO2_APIKEY': '',
  })

  idmap = env['DOCUMENSO2_TEST_FOLDER_ENTID']

  const live = 'TRUE' === env.DOCUMENSO2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DOCUMENSO2_TEST_FOLDER_ENTID']
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
  
