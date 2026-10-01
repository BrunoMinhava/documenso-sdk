# Documenso2 TypeScript SDK



The TypeScript SDK for the Documenso2 API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Document()` — each with a small set of operations (`list`, `load`, `create`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Releases](https://github.com/BrunoMinhava/documenso-sdk/releases)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/BrunoMinhava/documenso-sdk
npm install ./documenso-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { Documenso2SDK } from '@voxgig-sdk/documenso2-sdk'

const client = new Documenso2SDK({
  apikey: process.env.DOCUMENSO2_APIKEY,
})
```

### 2. List document records

`list()` resolves to an array of Document ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const documents = await client.Document().list()

for (const document of documents) {
  console.log(document)
}
```

### 3. Load a document

`load()` returns the entity directly and throws on failure:

```ts
try {
  const document = await client.Document().load({ id: 1 })
  console.log(document)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created Document ENTITY (.data() for the record)
const created = await client.Document().create({
  authOptions: {},
  completedAt: 'example_completedAt',
  createdAt: 'example_createdAt',
  data: {},
  deletedAt: 'example_deletedAt',
  document: {},
  documentData: {},
  documentDataId: 'example_documentDataId',
  documentId: 1,
  documentMeta: {},
  envelopeId: 'example_envelopeId',
  envelopeItems: [],
  externalId: 'example_externalId',
  fields: [],
  folder: {},
  folderId: 'example_folderId',
  formValues: {},
  id: 1,
  internalVersion: 1,
  recipients: [],
  source: 'example_source',
  status: 'example_status',
  success: true,
  team: {},
  teamId: 1,
  title: 'example_title',
  updatedAt: 'example_updatedAt',
  uploadUrl: 'example_uploadUrl',
  useLegacyFieldInsertion: true,
  user: {},
  userId: 1,
  visibility: 'example_visibility',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const documentfield = await client.DocumentField().load({ id: 1 })
  console.log(documentfield)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = Documenso2SDK.test()

const documentfield = await client.DocumentField().load({ id: 1 })
// documentfield is the entity, populated with mock response data
// — call documentfield.data() for the record itself
console.log(documentfield)
```

You can also use the instance method:

```ts
const client = new Documenso2SDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.DocumentField()

// First call runs the operation and stores its result
await entity.load({ id: 1 })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new Documenso2SDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
DOCUMENSO2_TEST_LIVE=TRUE
DOCUMENSO2_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### Documenso2SDK

#### Constructor

```ts
new Documenso2SDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Document(data?)` | `DocumentEntity` | Create a Document entity instance. |
| `DocumentField(data?)` | `DocumentFieldEntity` | Create a DocumentField entity instance. |
| `DocumentRecipient(data?)` | `DocumentRecipientEntity` | Create a DocumentRecipient entity instance. |
| `Embedding(data?)` | `EmbeddingEntity` | Create an Embedding entity instance. |
| `Envelope(data?)` | `EnvelopeEntity` | Create an Envelope entity instance. |
| `EnvelopeAttachment(data?)` | `EnvelopeAttachmentEntity` | Create an EnvelopeAttachment entity instance. |
| `EnvelopeField(data?)` | `EnvelopeFieldEntity` | Create an EnvelopeField entity instance. |
| `EnvelopeItem(data?)` | `EnvelopeItemEntity` | Create an EnvelopeItem entity instance. |
| `EnvelopeRecipient(data?)` | `EnvelopeRecipientEntity` | Create an EnvelopeRecipient entity instance. |
| `Folder(data?)` | `FolderEntity` | Create a Folder entity instance. |
| `Template(data?)` | `TemplateEntity` | Create a Template entity instance. |
| `TemplateField(data?)` | `TemplateFieldEntity` | Create a TemplateField entity instance. |
| `TemplateRecipient(data?)` | `TemplateRecipientEntity` | Create a TemplateRecipient entity instance. |
| `tester(testopts?, sdkopts?)` | `Documenso2SDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `Documenso2SDK.test(testopts?, sdkopts?)` | `Documenso2SDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): Documenso2SDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` and `create` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Document

| Field | Description |
| --- | --- |
| `attachments` |  |
| `authOptions` |  |
| `completedAt` |  |
| `createdAt` |  |
| `data` |  |
| `deletedAt` |  |
| `document` |  |
| `documentData` |  |
| `documentDataId` |  |
| `documentId` |  |
| `documentMeta` |  |
| `envelopeId` |  |
| `envelopeItems` |  |
| `externalId` |  |
| `fields` |  |
| `folder` |  |
| `folderId` |  |
| `formValues` |  |
| `globalAccessAuth` |  |
| `globalActionAuth` |  |
| `id` |  |
| `internalVersion` |  |
| `meta` |  |
| `recipients` |  |
| `source` |  |
| `status` |  |
| `success` |  |
| `team` |  |
| `teamId` |  |
| `templateId` |  |
| `title` |  |
| `updatedAt` |  |
| `uploadUrl` |  |
| `useLegacyFieldInsertion` |  |
| `user` |  |
| `userId` |  |
| `visibility` |  |

Operations: create, list, load.

API path: `/document/attachment/create`

#### DocumentField

| Field | Description |
| --- | --- |
| `customText` |  |
| `documentId` |  |
| `envelopeId` |  |
| `envelopeItemId` |  |
| `field` |  |
| `fieldId` |  |
| `fieldMeta` |  |
| `fields` |  |
| `height` |  |
| `id` |  |
| `inserted` |  |
| `page` |  |
| `positionX` |  |
| `positionY` |  |
| `recipientId` |  |
| `secondaryId` |  |
| `success` |  |
| `templateId` |  |
| `type` |  |
| `width` |  |

Operations: create, load.

API path: `/document/field/create`

#### DocumentRecipient

| Field | Description |
| --- | --- |
| `authOptions` |  |
| `documentDeletedAt` |  |
| `documentId` |  |
| `email` |  |
| `envelopeId` |  |
| `expirationNotifiedAt` |  |
| `expired` |  |
| `expiresAt` |  |
| `fields` |  |
| `id` |  |
| `name` |  |
| `readStatus` |  |
| `recipient` |  |
| `recipientId` |  |
| `recipients` |  |
| `rejectionReason` |  |
| `role` |  |
| `sendStatus` |  |
| `signedAt` |  |
| `signingOrder` |  |
| `signingStatus` |  |
| `success` |  |
| `templateId` |  |
| `token` |  |

Operations: create, load.

API path: `/document/recipient/create`

#### Embedding

| Field | Description |
| --- | --- |

Operations: create.

API path: `/embedding/create-presign-token`

#### Envelope

| Field | Description |
| --- | --- |
| `authOptions` |  |
| `completedAt` |  |
| `createdAt` |  |
| `deletedAt` |  |
| `directLink` |  |
| `documentMeta` |  |
| `envelopeItems` |  |
| `externalId` |  |
| `fields` |  |
| `folderId` |  |
| `formValues` |  |
| `id` |  |
| `internalVersion` |  |
| `publicDescription` |  |
| `publicTitle` |  |
| `recipients` |  |
| `secondaryId` |  |
| `source` |  |
| `status` |  |
| `team` |  |
| `teamId` |  |
| `templateId` |  |
| `templateType` |  |
| `title` |  |
| `type` |  |
| `updatedAt` |  |
| `user` |  |
| `userId` |  |
| `visibility` |  |

Operations: create, list, load.

API path: `/envelope/cancel`

#### EnvelopeAttachment

| Field | Description |
| --- | --- |
| `data` |  |
| `envelopeId` |  |
| `id` |  |
| `label` |  |
| `success` |  |
| `type` |  |

Operations: create, list.

API path: `/envelope/attachment/create`

#### EnvelopeField

| Field | Description |
| --- | --- |
| `customText` |  |
| `data` |  |
| `envelopeId` |  |
| `envelopeItemId` |  |
| `fieldId` |  |
| `fieldMeta` |  |
| `height` |  |
| `id` |  |
| `inserted` |  |
| `page` |  |
| `positionX` |  |
| `positionY` |  |
| `recipientId` |  |
| `secondaryId` |  |
| `success` |  |
| `type` |  |
| `width` |  |

Operations: create, load.

API path: `/envelope/field/create-many`

#### EnvelopeItem

| Field | Description |
| --- | --- |
| `data` |  |
| `envelopeId` |  |
| `envelopeItemId` |  |
| `success` |  |

Operations: create, load.

API path: `/envelope/item/create-many`

#### EnvelopeRecipient

| Field | Description |
| --- | --- |
| `authOptions` |  |
| `data` |  |
| `documentDeletedAt` |  |
| `email` |  |
| `envelopeId` |  |
| `expirationNotifiedAt` |  |
| `expired` |  |
| `expiresAt` |  |
| `fields` |  |
| `id` |  |
| `name` |  |
| `readStatus` |  |
| `recipientId` |  |
| `rejectionReason` |  |
| `role` |  |
| `sendStatus` |  |
| `signedAt` |  |
| `signingOrder` |  |
| `signingStatus` |  |
| `success` |  |
| `token` |  |

Operations: create, load.

API path: `/envelope/recipient/{recipientId}/reject`

#### Folder

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `id` |  |
| `name` |  |
| `parentId` |  |
| `pinned` |  |
| `teamId` |  |
| `type` |  |
| `updatedAt` |  |
| `userId` |  |
| `visibility` |  |

Operations: create, list.

API path: `/folder/create`

#### Template

| Field | Description |
| --- | --- |
| `attachments` |  |
| `authOptions` |  |
| `createdAt` |  |
| `directLink` |  |
| `directRecipientId` |  |
| `directTemplateRecipientId` |  |
| `enabled` |  |
| `envelopeId` |  |
| `envelopeItems` |  |
| `externalId` |  |
| `fields` |  |
| `folder` |  |
| `folderId` |  |
| `globalAccessAuth` |  |
| `globalActionAuth` |  |
| `id` |  |
| `meta` |  |
| `publicDescription` |  |
| `publicTitle` |  |
| `recipients` |  |
| `success` |  |
| `team` |  |
| `teamId` |  |
| `template` |  |
| `templateDocumentData` |  |
| `templateDocumentDataId` |  |
| `templateId` |  |
| `templateMeta` |  |
| `title` |  |
| `token` |  |
| `type` |  |
| `updatedAt` |  |
| `uploadUrl` |  |
| `useLegacyFieldInsertion` |  |
| `user` |  |
| `userId` |  |
| `visibility` |  |

Operations: create, list, load.

API path: `/template/create`

#### TemplateField

| Field | Description |
| --- | --- |
| `customText` |  |
| `documentId` |  |
| `envelopeId` |  |
| `envelopeItemId` |  |
| `field` |  |
| `fieldId` |  |
| `fieldMeta` |  |
| `fields` |  |
| `height` |  |
| `id` |  |
| `inserted` |  |
| `page` |  |
| `positionX` |  |
| `positionY` |  |
| `recipientId` |  |
| `secondaryId` |  |
| `success` |  |
| `templateId` |  |
| `type` |  |
| `width` |  |

Operations: create, load.

API path: `/template/field/create`

#### TemplateRecipient

| Field | Description |
| --- | --- |
| `authOptions` |  |
| `documentDeletedAt` |  |
| `documentId` |  |
| `email` |  |
| `envelopeId` |  |
| `expirationNotifiedAt` |  |
| `expired` |  |
| `expiresAt` |  |
| `fields` |  |
| `id` |  |
| `name` |  |
| `readStatus` |  |
| `recipient` |  |
| `recipientId` |  |
| `recipients` |  |
| `rejectionReason` |  |
| `role` |  |
| `sendStatus` |  |
| `signedAt` |  |
| `signingOrder` |  |
| `signingStatus` |  |
| `success` |  |
| `templateId` |  |
| `token` |  |

Operations: create, load.

API path: `/template/recipient/create`



## Entities


### Document

Create an instance: `const document = client.Document()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `any[]` |  |
| `authOptions` | `Record<string, any> | null` |  |
| `completedAt` | `string | null` |  |
| `createdAt` | `string` |  |
| `data` | `Record<string, any>` |  |
| `deletedAt` | `string | null` |  |
| `document` | `Record<string, any>` |  |
| `documentData` | `Record<string, any>` |  |
| `documentDataId` | `string` |  |
| `documentId` | `number` |  |
| `documentMeta` | `Record<string, any>` |  |
| `envelopeId` | `string` |  |
| `envelopeItems` | `any[]` |  |
| `externalId` | `string | null` |  |
| `fields` | `any[]` |  |
| `folder` | `Record<string, any> | null` |  |
| `folderId` | `string | null` |  |
| `formValues` | `Record<string, any> | null` |  |
| `globalAccessAuth` | `any[]` |  |
| `globalActionAuth` | `any[]` |  |
| `id` | `number` |  |
| `internalVersion` | `number` |  |
| `meta` | `Record<string, any>` |  |
| `recipients` | `any[]` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `success` | `boolean` |  |
| `team` | `Record<string, any> | null` |  |
| `teamId` | `number` |  |
| `templateId` | `number | null` |  |
| `title` | `string` |  |
| `updatedAt` | `string` |  |
| `uploadUrl` | `string` |  |
| `useLegacyFieldInsertion` | `boolean` |  |
| `user` | `Record<string, any>` |  |
| `userId` | `number` |  |
| `visibility` | `string` |  |

#### Example: Load

```ts
const document = await client.Document().load({ id: 1 })
```

#### Example: List

```ts
const documents = await client.Document().list()
```

#### Example: Create

```ts
const document = await client.Document().create({
  authOptions: {},
  completedAt: 'example_completedAt',
  createdAt: 'example_createdAt',
  data: {},
  deletedAt: 'example_deletedAt',
  document: {},
  documentData: {},
  documentDataId: 'example_documentDataId',
  documentId: 1,
  documentMeta: {},
  envelopeId: 'example_envelopeId',
  envelopeItems: [],
  externalId: 'example_externalId',
  fields: [],
  folder: {},
  folderId: 'example_folderId',
  formValues: {},
  id: 1,
  internalVersion: 1,
  recipients: [],
  source: 'example_source',
  status: 'example_status',
  success: true,
  team: {},
  teamId: 1,
  title: 'example_title',
  updatedAt: 'example_updatedAt',
  uploadUrl: 'example_uploadUrl',
  useLegacyFieldInsertion: true,
  user: {},
  userId: 1,
  visibility: 'example_visibility',
})
```


### DocumentField

Create an instance: `const document_field = client.DocumentField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customText` | `string` |  |
| `documentId` | `number | null` |  |
| `envelopeId` | `string` |  |
| `envelopeItemId` | `string` |  |
| `field` | `any` |  |
| `fieldId` | `number` |  |
| `fieldMeta` | `any` |  |
| `fields` | `any[]` |  |
| `height` | `number` |  |
| `id` | `number` |  |
| `inserted` | `boolean` |  |
| `page` | `number` |  |
| `positionX` | `any` |  |
| `positionY` | `any` |  |
| `recipientId` | `number` |  |
| `secondaryId` | `string` |  |
| `success` | `boolean` |  |
| `templateId` | `number | null` |  |
| `type` | `string` |  |
| `width` | `number` |  |

#### Example: Load

```ts
const document_field = await client.DocumentField().load({ id: 1 })
```

#### Example: Create

```ts
const document_field = await client.DocumentField().create({
  customText: 'example_customText',
  envelopeId: 'example_envelopeId',
  envelopeItemId: 'example_envelopeItemId',
  field: 'example_field',
  fieldId: 1,
  fieldMeta: 'example_fieldMeta',
  fields: [],
  height: 1,
  id: 1,
  inserted: true,
  page: 1,
  positionX: 'example_positionX',
  positionY: 'example_positionY',
  recipientId: 1,
  secondaryId: 'example_secondaryId',
  success: true,
  type: 'example_type',
  width: 1,
})
```


### DocumentRecipient

Create an instance: `const document_recipient = client.DocumentRecipient()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authOptions` | `Record<string, any> | null` |  |
| `documentDeletedAt` | `string | null` |  |
| `documentId` | `number | null` |  |
| `email` | `string` |  |
| `envelopeId` | `string` |  |
| `expirationNotifiedAt` | `string | null` |  |
| `expired` | `string | null` |  |
| `expiresAt` | `string | null` |  |
| `fields` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `readStatus` | `string` |  |
| `recipient` | `Record<string, any>` |  |
| `recipientId` | `number` |  |
| `recipients` | `any[]` |  |
| `rejectionReason` | `string | null` |  |
| `role` | `string` |  |
| `sendStatus` | `string` |  |
| `signedAt` | `string | null` |  |
| `signingOrder` | `number | null` |  |
| `signingStatus` | `string` |  |
| `success` | `boolean` |  |
| `templateId` | `number | null` |  |
| `token` | `string` |  |

#### Example: Load

```ts
const document_recipient = await client.DocumentRecipient().load({ id: 1 })
```

#### Example: Create

```ts
const document_recipient = await client.DocumentRecipient().create({
  authOptions: {},
  documentDeletedAt: 'example_documentDeletedAt',
  email: 'example_email',
  envelopeId: 'example_envelopeId',
  expirationNotifiedAt: 'example_expirationNotifiedAt',
  expired: 'example_expired',
  expiresAt: 'example_expiresAt',
  fields: [],
  id: 1,
  name: 'example_name',
  readStatus: 'example_readStatus',
  recipient: {},
  recipientId: 1,
  recipients: [],
  rejectionReason: 'example_rejectionReason',
  role: 'example_role',
  sendStatus: 'example_sendStatus',
  signedAt: 'example_signedAt',
  signingOrder: 1,
  signingStatus: 'example_signingStatus',
  success: true,
  token: 'example_token',
})
```


### Embedding

Create an instance: `const embedding = client.Embedding()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const embedding = await client.Embedding().create({
})
```


### Envelope

Create an instance: `const envelope = client.Envelope()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authOptions` | `Record<string, any> | null` |  |
| `completedAt` | `string | null` |  |
| `createdAt` | `string` |  |
| `deletedAt` | `string | null` |  |
| `directLink` | `Record<string, any> | null` |  |
| `documentMeta` | `Record<string, any>` |  |
| `envelopeItems` | `any[]` |  |
| `externalId` | `string | null` |  |
| `fields` | `any[]` |  |
| `folderId` | `string | null` |  |
| `formValues` | `Record<string, any> | null` |  |
| `id` | `string` |  |
| `internalVersion` | `number` |  |
| `publicDescription` | `string` |  |
| `publicTitle` | `string` |  |
| `recipients` | `any[]` |  |
| `secondaryId` | `string` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `team` | `Record<string, any>` |  |
| `teamId` | `number` |  |
| `templateId` | `number | null` |  |
| `templateType` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |
| `user` | `Record<string, any>` |  |
| `userId` | `number` |  |
| `visibility` | `string` |  |

#### Example: Load

```ts
const envelope = await client.Envelope().load({ id: 'envelope_id' })
```

#### Example: List

```ts
const envelopes = await client.Envelope().list()
```

#### Example: Create

```ts
const envelope = await client.Envelope().create({
  authOptions: {},
  completedAt: 'example_completedAt',
  createdAt: 'example_createdAt',
  deletedAt: 'example_deletedAt',
  directLink: {},
  documentMeta: {},
  envelopeItems: [],
  externalId: 'example_externalId',
  fields: [],
  folderId: 'example_folderId',
  formValues: {},
  id: 'example_id',
  internalVersion: 1,
  publicDescription: 'example_publicDescription',
  publicTitle: 'example_publicTitle',
  recipients: [],
  secondaryId: 'example_secondaryId',
  source: 'example_source',
  status: 'example_status',
  team: {},
  teamId: 1,
  templateId: 1,
  templateType: 'example_templateType',
  title: 'example_title',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
  user: {},
  userId: 1,
  visibility: 'example_visibility',
})
```


### EnvelopeAttachment

Create an instance: `const envelope_attachment = client.EnvelopeAttachment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `envelopeId` | `string` |  |
| `id` | `string` |  |
| `label` | `string` |  |
| `success` | `boolean` |  |
| `type` | `string` |  |

#### Example: List

```ts
const envelope_attachments = await client.EnvelopeAttachment().list({ envelope_id: "example" })
```

#### Example: Create

```ts
const envelope_attachment = await client.EnvelopeAttachment().create({
  data: {},
  envelopeId: 'example_envelopeId',
  id: 'example_id',
  label: 'example_label',
  success: true,
  type: 'example_type',
})
```


### EnvelopeField

Create an instance: `const envelope_field = client.EnvelopeField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customText` | `string` |  |
| `data` | `any[]` |  |
| `envelopeId` | `string` |  |
| `envelopeItemId` | `string` |  |
| `fieldId` | `number` |  |
| `fieldMeta` | `any` |  |
| `height` | `number` |  |
| `id` | `number` |  |
| `inserted` | `boolean` |  |
| `page` | `number` |  |
| `positionX` | `any` |  |
| `positionY` | `any` |  |
| `recipientId` | `number` |  |
| `secondaryId` | `string` |  |
| `success` | `boolean` |  |
| `type` | `string` |  |
| `width` | `number` |  |

#### Example: Load

```ts
const envelope_field = await client.EnvelopeField().load({ id: 1 })
```

#### Example: Create

```ts
const envelope_field = await client.EnvelopeField().create({
  customText: 'example_customText',
  data: [],
  envelopeId: 'example_envelopeId',
  envelopeItemId: 'example_envelopeItemId',
  fieldId: 1,
  fieldMeta: 'example_fieldMeta',
  height: 1,
  id: 1,
  inserted: true,
  page: 1,
  positionX: 'example_positionX',
  positionY: 'example_positionY',
  recipientId: 1,
  secondaryId: 'example_secondaryId',
  success: true,
  type: 'example_type',
  width: 1,
})
```


### EnvelopeItem

Create an instance: `const envelope_item = client.EnvelopeItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `envelopeId` | `string` |  |
| `envelopeItemId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const envelope_item = await client.EnvelopeItem().load({ item_id: 'item_id' })
```

#### Example: Create

```ts
const envelope_item = await client.EnvelopeItem().create({
  data: [],
  envelopeId: 'example_envelopeId',
  envelopeItemId: 'example_envelopeItemId',
  success: true,
})
```


### EnvelopeRecipient

Create an instance: `const envelope_recipient = client.EnvelopeRecipient()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authOptions` | `Record<string, any> | null` |  |
| `data` | `any[]` |  |
| `documentDeletedAt` | `string | null` |  |
| `email` | `string` |  |
| `envelopeId` | `string` |  |
| `expirationNotifiedAt` | `string | null` |  |
| `expired` | `string | null` |  |
| `expiresAt` | `string | null` |  |
| `fields` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `readStatus` | `string` |  |
| `recipientId` | `number` |  |
| `rejectionReason` | `string | null` |  |
| `role` | `string` |  |
| `sendStatus` | `string` |  |
| `signedAt` | `string | null` |  |
| `signingOrder` | `number | null` |  |
| `signingStatus` | `string` |  |
| `success` | `boolean` |  |
| `token` | `string` |  |

#### Example: Load

```ts
const envelope_recipient = await client.EnvelopeRecipient().load({ id: 1 })
```

#### Example: Create

```ts
const envelope_recipient = await client.EnvelopeRecipient().create({
  authOptions: {},
  data: [],
  documentDeletedAt: 'example_documentDeletedAt',
  email: 'example_email',
  envelopeId: 'example_envelopeId',
  expirationNotifiedAt: 'example_expirationNotifiedAt',
  expired: 'example_expired',
  expiresAt: 'example_expiresAt',
  fields: [],
  id: 1,
  name: 'example_name',
  readStatus: 'example_readStatus',
  recipientId: 1,
  rejectionReason: 'example_rejectionReason',
  role: 'example_role',
  sendStatus: 'example_sendStatus',
  signedAt: 'example_signedAt',
  signingOrder: 1,
  signingStatus: 'example_signingStatus',
  success: true,
  token: 'example_token',
})
```


### Folder

Create an instance: `const folder = client.Folder()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `parentId` | `string | null` |  |
| `pinned` | `boolean` |  |
| `teamId` | `number` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |
| `userId` | `number` |  |
| `visibility` | `string` |  |

#### Example: List

```ts
const folders = await client.Folder().list()
```

#### Example: Create

```ts
const folder = await client.Folder().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  parentId: 'example_parentId',
  pinned: true,
  teamId: 1,
  type: 'example_type',
  updatedAt: 'example_updatedAt',
  userId: 1,
  visibility: 'example_visibility',
})
```


### Template

Create an instance: `const template = client.Template()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `any[]` |  |
| `authOptions` | `Record<string, any> | null` |  |
| `createdAt` | `string` |  |
| `directLink` | `Record<string, any> | null` |  |
| `directRecipientId` | `number` |  |
| `directTemplateRecipientId` | `number` |  |
| `enabled` | `boolean` |  |
| `envelopeId` | `string` |  |
| `envelopeItems` | `any[]` |  |
| `externalId` | `string | null` |  |
| `fields` | `any[]` |  |
| `folder` | `Record<string, any> | null` |  |
| `folderId` | `string | null` |  |
| `globalAccessAuth` | `any[]` |  |
| `globalActionAuth` | `any[]` |  |
| `id` | `number` |  |
| `meta` | `Record<string, any>` |  |
| `publicDescription` | `string` |  |
| `publicTitle` | `string` |  |
| `recipients` | `any[]` |  |
| `success` | `boolean` |  |
| `team` | `Record<string, any> | null` |  |
| `teamId` | `number` |  |
| `template` | `Record<string, any>` |  |
| `templateDocumentData` | `Record<string, any>` |  |
| `templateDocumentDataId` | `string` |  |
| `templateId` | `number` |  |
| `templateMeta` | `Record<string, any>` |  |
| `title` | `string` |  |
| `token` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `string` |  |
| `uploadUrl` | `string` |  |
| `useLegacyFieldInsertion` | `boolean` |  |
| `user` | `Record<string, any>` |  |
| `userId` | `number` |  |
| `visibility` | `string` |  |

#### Example: Load

```ts
const template = await client.Template().load({ id: 1 })
```

#### Example: List

```ts
const templates = await client.Template().list()
```

#### Example: Create

```ts
const template = await client.Template().create({
  authOptions: {},
  createdAt: 'example_createdAt',
  directLink: {},
  directTemplateRecipientId: 1,
  enabled: true,
  envelopeId: 'example_envelopeId',
  envelopeItems: [],
  externalId: 'example_externalId',
  fields: [],
  folder: {},
  folderId: 'example_folderId',
  id: 1,
  publicDescription: 'example_publicDescription',
  publicTitle: 'example_publicTitle',
  recipients: [],
  success: true,
  team: {},
  teamId: 1,
  template: {},
  templateDocumentData: {},
  templateDocumentDataId: 'example_templateDocumentDataId',
  templateId: 1,
  templateMeta: {},
  title: 'example_title',
  token: 'example_token',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
  uploadUrl: 'example_uploadUrl',
  useLegacyFieldInsertion: true,
  user: {},
  userId: 1,
  visibility: 'example_visibility',
})
```


### TemplateField

Create an instance: `const template_field = client.TemplateField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customText` | `string` |  |
| `documentId` | `number | null` |  |
| `envelopeId` | `string` |  |
| `envelopeItemId` | `string` |  |
| `field` | `any` |  |
| `fieldId` | `number` |  |
| `fieldMeta` | `any` |  |
| `fields` | `any[]` |  |
| `height` | `number` |  |
| `id` | `number` |  |
| `inserted` | `boolean` |  |
| `page` | `number` |  |
| `positionX` | `any` |  |
| `positionY` | `any` |  |
| `recipientId` | `number` |  |
| `secondaryId` | `string` |  |
| `success` | `boolean` |  |
| `templateId` | `number | null` |  |
| `type` | `string` |  |
| `width` | `number` |  |

#### Example: Load

```ts
const template_field = await client.TemplateField().load({ id: 1 })
```

#### Example: Create

```ts
const template_field = await client.TemplateField().create({
  customText: 'example_customText',
  envelopeId: 'example_envelopeId',
  envelopeItemId: 'example_envelopeItemId',
  field: 'example_field',
  fieldId: 1,
  fieldMeta: 'example_fieldMeta',
  fields: [],
  height: 1,
  id: 1,
  inserted: true,
  page: 1,
  positionX: 'example_positionX',
  positionY: 'example_positionY',
  recipientId: 1,
  secondaryId: 'example_secondaryId',
  success: true,
  type: 'example_type',
  width: 1,
})
```


### TemplateRecipient

Create an instance: `const template_recipient = client.TemplateRecipient()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authOptions` | `Record<string, any> | null` |  |
| `documentDeletedAt` | `string | null` |  |
| `documentId` | `number | null` |  |
| `email` | `string` |  |
| `envelopeId` | `string` |  |
| `expirationNotifiedAt` | `string | null` |  |
| `expired` | `string | null` |  |
| `expiresAt` | `string | null` |  |
| `fields` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `readStatus` | `string` |  |
| `recipient` | `Record<string, any>` |  |
| `recipientId` | `number` |  |
| `recipients` | `any[]` |  |
| `rejectionReason` | `string | null` |  |
| `role` | `string` |  |
| `sendStatus` | `string` |  |
| `signedAt` | `string | null` |  |
| `signingOrder` | `number | null` |  |
| `signingStatus` | `string` |  |
| `success` | `boolean` |  |
| `templateId` | `number | null` |  |
| `token` | `string` |  |

#### Example: Load

```ts
const template_recipient = await client.TemplateRecipient().load({ id: 1 })
```

#### Example: Create

```ts
const template_recipient = await client.TemplateRecipient().create({
  authOptions: {},
  documentDeletedAt: 'example_documentDeletedAt',
  email: 'example_email',
  envelopeId: 'example_envelopeId',
  expirationNotifiedAt: 'example_expirationNotifiedAt',
  expired: 'example_expired',
  expiresAt: 'example_expiresAt',
  fields: [],
  id: 1,
  name: 'example_name',
  readStatus: 'example_readStatus',
  recipient: {},
  recipientId: 1,
  recipients: [],
  rejectionReason: 'example_rejectionReason',
  role: 'example_role',
  sendStatus: 'example_sendStatus',
  signedAt: 'example_signedAt',
  signingOrder: 1,
  signingStatus: 'example_signingStatus',
  success: true,
  token: 'example_token',
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

18 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `document_field` | `field` | 11 | 2 levels |
| `template_field` | `field` | 11 | 2 levels |
| `document` | `document` | 10 | 6 levels |
| `document` | `fields` | 10 | 3 levels |
| `document_field` | `fieldMeta` | 10 | 0 levels |
| `document_field` | `fields` | 10 | 3 levels |
| `document_recipient` | `fields` | 10 | 3 levels |
| `envelope` | `fields` | 10 | 3 levels |
| `envelope_field` | `data` | 10 | 3 levels |
| `envelope_field` | `fieldMeta` | 10 | 0 levels |
| `envelope_recipient` | `fields` | 10 | 3 levels |
| `template` | `fields` | 10 | 3 levels |
| `template` | `template` | 10 | 5 levels |
| `template_field` | `fieldMeta` | 10 | 0 levels |
| `template_field` | `fields` | 10 | 3 levels |
| `template_recipient` | `fields` | 10 | 3 levels |
| `document` | `formValues` | 3 | 1 level |
| `envelope` | `formValues` | 3 | 1 level |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
documenso2/
├── src/
│   ├── Documenso2SDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { Documenso2SDK } from '@voxgig-sdk/documenso2-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const documentfield = client.DocumentField()
await documentfield.load({ id: 1 })

// documentfield.data() now returns the documentfield data from the last `load`
// documentfield.match() returns { id: 1 }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
