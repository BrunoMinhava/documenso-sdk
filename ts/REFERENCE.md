# Documenso2 TypeScript SDK Reference

Complete API reference for the Documenso2 TypeScript SDK.


## Documenso2SDK

### Constructor

```ts
new Documenso2SDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Documenso2SDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = Documenso2SDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `Documenso2SDK` instance in test mode.


### Instance Methods

#### `Document(data?: object)`

Create a new `Document` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DocumentEntity` instance.

#### `DocumentField(data?: object)`

Create a new `DocumentField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DocumentFieldEntity` instance.

#### `DocumentRecipient(data?: object)`

Create a new `DocumentRecipient` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DocumentRecipientEntity` instance.

#### `Embedding(data?: object)`

Create a new `Embedding` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmbeddingEntity` instance.

#### `Envelope(data?: object)`

Create a new `Envelope` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvelopeEntity` instance.

#### `EnvelopeAttachment(data?: object)`

Create a new `EnvelopeAttachment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvelopeAttachmentEntity` instance.

#### `EnvelopeField(data?: object)`

Create a new `EnvelopeField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvelopeFieldEntity` instance.

#### `EnvelopeItem(data?: object)`

Create a new `EnvelopeItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvelopeItemEntity` instance.

#### `EnvelopeRecipient(data?: object)`

Create a new `EnvelopeRecipient` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvelopeRecipientEntity` instance.

#### `Folder(data?: object)`

Create a new `Folder` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FolderEntity` instance.

#### `Template(data?: object)`

Create a new `Template` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateEntity` instance.

#### `TemplateField(data?: object)`

Create a new `TemplateField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateFieldEntity` instance.

#### `TemplateRecipient(data?: object)`

Create a new `TemplateRecipient` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateRecipientEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `Documenso2SDK.test()`.

**Returns:** `Documenso2SDK` instance in test mode.


---

## DocumentEntity

```ts
const document = client.Document()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `any[]` | No |  |
| `authOptions` | `Record<string, any> | null` | Yes |  |
| `completedAt` | `string | null` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `data` | `Record<string, any>` | Yes |  |
| `deletedAt` | `string | null` | Yes |  |
| `document` | `Record<string, any>` | Yes |  |
| `documentData` | `Record<string, any>` | Yes |  |
| `documentDataId` | `string` | Yes |  |
| `documentId` | `number` | Yes |  |
| `documentMeta` | `Record<string, any>` | Yes |  |
| `envelopeId` | `string` | Yes |  |
| `envelopeItems` | `any[]` | Yes |  |
| `externalId` | `string | null` | Yes |  |
| `fields` | `any[]` | Yes |  |
| `folder` | `Record<string, any> | null` | Yes |  |
| `folderId` | `string | null` | Yes |  |
| `formValues` | `Record<string, any> | null` | Yes |  |
| `globalAccessAuth` | `any[]` | No |  |
| `globalActionAuth` | `any[]` | No |  |
| `id` | `number` | Yes |  |
| `internalVersion` | `number` | Yes |  |
| `meta` | `Record<string, any>` | No |  |
| `recipients` | `any[]` | Yes |  |
| `source` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `team` | `Record<string, any> | null` | Yes |  |
| `teamId` | `number` | Yes |  |
| `templateId` | `number | null` | No |  |
| `title` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `uploadUrl` | `string` | Yes |  |
| `useLegacyFieldInsertion` | `boolean` | Yes |  |
| `user` | `Record<string, any>` | Yes |  |
| `userId` | `number` | Yes |  |
| `visibility` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `attachments` | - | - | - |
| `authOptions` | - | - | - |
| `completedAt` | - | - | - |
| `createdAt` | - | - | - |
| `data` | - | - | - |
| `deletedAt` | - | - | - |
| `document` | - | - | - |
| `documentData` | - | - | - |
| `documentDataId` | - | - | - |
| `documentId` | - | - | - |
| `documentMeta` | - | - | - |
| `envelopeId` | - | - | - |
| `envelopeItems` | - | - | - |
| `externalId` | - | - | Yes |
| `fields` | - | - | - |
| `folder` | - | - | - |
| `folderId` | - | - | Yes |
| `formValues` | - | - | Yes |
| `globalAccessAuth` | - | - | - |
| `globalActionAuth` | - | - | - |
| `id` | - | - | - |
| `internalVersion` | - | - | - |
| `meta` | - | - | - |
| `recipients` | - | - | Yes |
| `source` | - | - | - |
| `status` | - | - | - |
| `success` | - | - | - |
| `team` | - | - | - |
| `teamId` | - | - | - |
| `templateId` | - | - | - |
| `title` | - | - | - |
| `updatedAt` | - | - | - |
| `uploadUrl` | - | - | - |
| `useLegacyFieldInsertion` | - | - | - |
| `user` | - | - | - |
| `userId` | - | - | - |
| `visibility` | - | - | Yes |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create` | `/document/create` | `client.Document().create({ $action: 'create', ... })` |
| `delete` | `/document/delete` | `client.Document().create({ $action: 'delete', ... })` |
| `distribute` | `/document/distribute` | `client.Document().create({ $action: 'distribute', ... })` |
| `duplicate` | `/document/duplicate` | `client.Document().create({ $action: 'duplicate', ... })` |
| `get_many` | `/document/get-many` | `client.Document().create({ $action: 'get_many', ... })` |
| `redistribute` | `/document/redistribute` | `client.Document().create({ $action: 'redistribute', ... })` |
| `update` | `/document/update` | `client.Document().create({ $action: 'update', ... })` |
| `attachment` | `/document/attachment` | `client.Document().list({ $action: 'attachment', ... })` |
| `download` | `/document/{documentId}/download` | `client.Document().load({ $action: 'download', ... })` |
| `download_beta` | `/document/{documentId}/download-beta` | `client.Document().load({ $action: 'download_beta', ... })` |

An action returns that action's OWN response, which is not necessarily a
Document record — check the API definition for its shape.

```ts
const result = await client.Document().create({
  $action: 'create',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Document().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Document().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Document().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DocumentEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DocumentFieldEntity

```ts
const document_field = client.DocumentField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customText` | `string` | Yes |  |
| `documentId` | `number | null` | No |  |
| `envelopeId` | `string` | Yes |  |
| `envelopeItemId` | `string` | Yes |  |
| `field` | `any` | Yes |  |
| `fieldId` | `number` | Yes |  |
| `fieldMeta` | `any` | Yes |  |
| `fields` | `any[]` | Yes |  |
| `height` | `number` | Yes |  |
| `id` | `number` | Yes |  |
| `inserted` | `boolean` | Yes |  |
| `page` | `number` | Yes |  |
| `positionX` | `any` | Yes |  |
| `positionY` | `any` | Yes |  |
| `recipientId` | `number` | Yes |  |
| `secondaryId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `templateId` | `number | null` | No |  |
| `type` | `string` | Yes |  |
| `width` | `number` | Yes |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `customText` | - | - |
| `documentId` | - | Yes |
| `envelopeId` | - | - |
| `envelopeItemId` | - | - |
| `field` | - | - |
| `fieldId` | - | - |
| `fieldMeta` | - | - |
| `fields` | - | - |
| `height` | - | - |
| `id` | - | - |
| `inserted` | - | - |
| `page` | - | - |
| `positionX` | - | - |
| `positionY` | - | - |
| `recipientId` | - | - |
| `secondaryId` | - | - |
| `success` | - | - |
| `templateId` | - | - |
| `type` | - | - |
| `width` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DocumentField().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DocumentField().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DocumentFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DocumentRecipientEntity

```ts
const document_recipient = client.DocumentRecipient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authOptions` | `Record<string, any> | null` | Yes |  |
| `documentDeletedAt` | `string | null` | Yes |  |
| `documentId` | `number | null` | No |  |
| `email` | `string` | Yes |  |
| `envelopeId` | `string` | Yes |  |
| `expirationNotifiedAt` | `string | null` | Yes |  |
| `expired` | `string | null` | Yes |  |
| `expiresAt` | `string | null` | Yes |  |
| `fields` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `readStatus` | `string` | Yes |  |
| `recipient` | `Record<string, any>` | Yes |  |
| `recipientId` | `number` | Yes |  |
| `recipients` | `any[]` | Yes |  |
| `rejectionReason` | `string | null` | Yes |  |
| `role` | `string` | Yes |  |
| `sendStatus` | `string` | Yes |  |
| `signedAt` | `string | null` | Yes |  |
| `signingOrder` | `number | null` | Yes |  |
| `signingStatus` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `templateId` | `number | null` | No |  |
| `token` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `authOptions` | - | - |
| `documentDeletedAt` | - | - |
| `documentId` | - | Yes |
| `email` | - | - |
| `envelopeId` | - | - |
| `expirationNotifiedAt` | - | - |
| `expired` | - | - |
| `expiresAt` | - | - |
| `fields` | - | - |
| `id` | - | - |
| `name` | - | - |
| `readStatus` | - | - |
| `recipient` | - | - |
| `recipientId` | - | - |
| `recipients` | - | - |
| `rejectionReason` | - | - |
| `role` | - | - |
| `sendStatus` | - | - |
| `signedAt` | - | - |
| `signingOrder` | - | - |
| `signingStatus` | - | - |
| `success` | - | - |
| `templateId` | - | - |
| `token` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DocumentRecipient().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DocumentRecipient().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DocumentRecipientEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmbeddingEntity

```ts
const embedding = client.Embedding()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create_presign_token` | `/embedding/create-presign-token` | `client.Embedding().create({ $action: 'create_presign_token', ... })` |
| `verify_presign_token` | `/embedding/verify-presign-token` | `client.Embedding().create({ $action: 'verify_presign_token', ... })` |

An action returns that action's OWN response, which is not necessarily a
Embedding record — check the API definition for its shape.

```ts
const result = await client.Embedding().create({
  $action: 'create_presign_token',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Embedding().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmbeddingEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvelopeEntity

```ts
const envelope = client.Envelope()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authOptions` | `Record<string, any> | null` | Yes |  |
| `completedAt` | `string | null` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `deletedAt` | `string | null` | Yes |  |
| `directLink` | `Record<string, any> | null` | Yes |  |
| `documentMeta` | `Record<string, any>` | Yes |  |
| `envelopeItems` | `any[]` | Yes |  |
| `externalId` | `string | null` | Yes |  |
| `fields` | `any[]` | Yes |  |
| `folderId` | `string | null` | Yes |  |
| `formValues` | `Record<string, any> | null` | Yes |  |
| `id` | `string` | Yes |  |
| `internalVersion` | `number` | Yes |  |
| `publicDescription` | `string` | Yes |  |
| `publicTitle` | `string` | Yes |  |
| `recipients` | `any[]` | Yes |  |
| `secondaryId` | `string` | Yes |  |
| `source` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `team` | `Record<string, any>` | Yes |  |
| `teamId` | `number` | Yes |  |
| `templateId` | `number | null` | Yes |  |
| `templateType` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `user` | `Record<string, any>` | Yes |  |
| `userId` | `number` | Yes |  |
| `visibility` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/envelope/cancel` | `client.Envelope().create({ $action: 'cancel', ... })` |
| `create` | `/envelope/create` | `client.Envelope().create({ $action: 'create', ... })` |
| `delete` | `/envelope/delete` | `client.Envelope().create({ $action: 'delete', ... })` |
| `distribute` | `/envelope/distribute` | `client.Envelope().create({ $action: 'distribute', ... })` |
| `duplicate` | `/envelope/duplicate` | `client.Envelope().create({ $action: 'duplicate', ... })` |
| `get_many` | `/envelope/get-many` | `client.Envelope().create({ $action: 'get_many', ... })` |
| `redistribute` | `/envelope/redistribute` | `client.Envelope().create({ $action: 'redistribute', ... })` |
| `update` | `/envelope/update` | `client.Envelope().create({ $action: 'update', ... })` |
| `use` | `/envelope/use` | `client.Envelope().create({ $action: 'use', ... })` |
| `audit_log` | `/envelope/{envelopeId}/audit-log` | `client.Envelope().list({ $action: 'audit_log', ... })` |
| `audit_log_download` | `/envelope/{envelopeId}/audit-log/download` | `client.Envelope().load({ $action: 'audit_log_download', ... })` |
| `certificate_download` | `/envelope/{envelopeId}/certificate/download` | `client.Envelope().load({ $action: 'certificate_download', ... })` |

An action returns that action's OWN response, which is not necessarily a
Envelope record — check the API definition for its shape.

```ts
const result = await client.Envelope().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Envelope().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Envelope().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Envelope().load({ id: 'envelope_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvelopeEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvelopeAttachmentEntity

```ts
const envelope_attachment = client.EnvelopeAttachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `envelopeId` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EnvelopeAttachment().create({
  data: {},
  envelopeId: 'example_envelopeId',
  id: 'example_id',
  label: 'example_label',
  success: true,
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EnvelopeAttachment().list({ envelope_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvelopeAttachmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvelopeFieldEntity

```ts
const envelope_field = client.EnvelopeField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customText` | `string` | Yes |  |
| `data` | `any[]` | Yes |  |
| `envelopeId` | `string` | Yes |  |
| `envelopeItemId` | `string` | Yes |  |
| `fieldId` | `number` | Yes |  |
| `fieldMeta` | `any` | Yes |  |
| `height` | `number` | Yes |  |
| `id` | `number` | Yes |  |
| `inserted` | `boolean` | Yes |  |
| `page` | `number` | Yes |  |
| `positionX` | `any` | Yes |  |
| `positionY` | `any` | Yes |  |
| `recipientId` | `number` | Yes |  |
| `secondaryId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `type` | `string` | Yes |  |
| `width` | `number` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EnvelopeField().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EnvelopeField().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvelopeFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvelopeItemEntity

```ts
const envelope_item = client.EnvelopeItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes |  |
| `envelopeId` | `string` | Yes |  |
| `envelopeItemId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EnvelopeItem().create({
  data: [],
  envelopeId: 'example_envelopeId',
  envelopeItemId: 'example_envelopeItemId',
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EnvelopeItem().load({ item_id: 'item_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvelopeItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvelopeRecipientEntity

```ts
const envelope_recipient = client.EnvelopeRecipient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authOptions` | `Record<string, any> | null` | Yes |  |
| `data` | `any[]` | Yes |  |
| `documentDeletedAt` | `string | null` | Yes |  |
| `email` | `string` | Yes |  |
| `envelopeId` | `string` | Yes |  |
| `expirationNotifiedAt` | `string | null` | Yes |  |
| `expired` | `string | null` | Yes |  |
| `expiresAt` | `string | null` | Yes |  |
| `fields` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `readStatus` | `string` | Yes |  |
| `recipientId` | `number` | Yes |  |
| `rejectionReason` | `string | null` | Yes |  |
| `role` | `string` | Yes |  |
| `sendStatus` | `string` | Yes |  |
| `signedAt` | `string | null` | Yes |  |
| `signingOrder` | `number | null` | Yes |  |
| `signingStatus` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `token` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `reject` | `/envelope/recipient/{recipientId}/reject` | `client.EnvelopeRecipient().create({ $action: 'reject', ... })` |

An action returns that action's OWN response, which is not necessarily a
EnvelopeRecipient record — check the API definition for its shape.

```ts
const result = await client.EnvelopeRecipient().create({
  $action: 'reject',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EnvelopeRecipient().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EnvelopeRecipient().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvelopeRecipientEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FolderEntity

```ts
const folder = client.Folder()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `parentId` | `string | null` | Yes |  |
| `pinned` | `boolean` | Yes |  |
| `teamId` | `number` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `userId` | `number` | Yes |  |
| `visibility` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create` | `/folder/create` | `client.Folder().create({ $action: 'create', ... })` |
| `delete` | `/folder/delete` | `client.Folder().create({ $action: 'delete', ... })` |
| `update` | `/folder/update` | `client.Folder().create({ $action: 'update', ... })` |

An action returns that action's OWN response, which is not necessarily a
Folder record — check the API definition for its shape.

```ts
const result = await client.Folder().create({
  $action: 'create',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Folder().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Folder().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FolderEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateEntity

```ts
const template = client.Template()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `any[]` | No |  |
| `authOptions` | `Record<string, any> | null` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `directLink` | `Record<string, any> | null` | Yes |  |
| `directRecipientId` | `number` | No |  |
| `directTemplateRecipientId` | `number` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `envelopeId` | `string` | Yes |  |
| `envelopeItems` | `any[]` | Yes |  |
| `externalId` | `string | null` | Yes |  |
| `fields` | `any[]` | Yes |  |
| `folder` | `Record<string, any> | null` | Yes |  |
| `folderId` | `string | null` | Yes |  |
| `globalAccessAuth` | `any[]` | No |  |
| `globalActionAuth` | `any[]` | No |  |
| `id` | `number` | Yes |  |
| `meta` | `Record<string, any>` | No |  |
| `publicDescription` | `string` | Yes |  |
| `publicTitle` | `string` | Yes |  |
| `recipients` | `any[]` | Yes |  |
| `success` | `boolean` | Yes |  |
| `team` | `Record<string, any> | null` | Yes |  |
| `teamId` | `number` | Yes |  |
| `template` | `Record<string, any>` | Yes |  |
| `templateDocumentData` | `Record<string, any>` | Yes |  |
| `templateDocumentDataId` | `string` | Yes |  |
| `templateId` | `number` | Yes |  |
| `templateMeta` | `Record<string, any>` | Yes |  |
| `title` | `string` | Yes |  |
| `token` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `uploadUrl` | `string` | Yes |  |
| `useLegacyFieldInsertion` | `boolean` | Yes |  |
| `user` | `Record<string, any>` | Yes |  |
| `userId` | `number` | Yes |  |
| `visibility` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `attachments` | - | - | - |
| `authOptions` | - | - | - |
| `createdAt` | - | - | - |
| `directLink` | - | - | - |
| `directRecipientId` | - | - | - |
| `directTemplateRecipientId` | - | - | - |
| `enabled` | - | - | - |
| `envelopeId` | - | - | - |
| `envelopeItems` | - | - | - |
| `externalId` | - | - | Yes |
| `fields` | - | - | - |
| `folder` | - | - | - |
| `folderId` | - | - | Yes |
| `globalAccessAuth` | - | - | - |
| `globalActionAuth` | - | - | - |
| `id` | - | - | - |
| `meta` | - | - | - |
| `publicDescription` | - | - | Yes |
| `publicTitle` | - | - | Yes |
| `recipients` | - | - | - |
| `success` | - | - | - |
| `team` | - | - | - |
| `teamId` | - | - | - |
| `template` | - | - | - |
| `templateDocumentData` | - | - | - |
| `templateDocumentDataId` | - | - | - |
| `templateId` | - | - | - |
| `templateMeta` | - | - | - |
| `title` | - | - | - |
| `token` | - | - | - |
| `type` | - | - | Yes |
| `updatedAt` | - | - | - |
| `uploadUrl` | - | - | - |
| `useLegacyFieldInsertion` | - | - | - |
| `user` | - | - | - |
| `userId` | - | - | - |
| `visibility` | - | - | Yes |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create` | `/template/create` | `client.Template().create({ $action: 'create', ... })` |
| `delete` | `/template/delete` | `client.Template().create({ $action: 'delete', ... })` |
| `duplicate` | `/template/duplicate` | `client.Template().create({ $action: 'duplicate', ... })` |
| `get_many` | `/template/get-many` | `client.Template().create({ $action: 'get_many', ... })` |
| `update` | `/template/update` | `client.Template().create({ $action: 'update', ... })` |
| `use` | `/template/use` | `client.Template().create({ $action: 'use', ... })` |

An action returns that action's OWN response, which is not necessarily a
Template record — check the API definition for its shape.

```ts
const result = await client.Template().create({
  $action: 'create',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Template().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Template().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Template().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateFieldEntity

```ts
const template_field = client.TemplateField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customText` | `string` | Yes |  |
| `documentId` | `number | null` | No |  |
| `envelopeId` | `string` | Yes |  |
| `envelopeItemId` | `string` | Yes |  |
| `field` | `any` | Yes |  |
| `fieldId` | `number` | Yes |  |
| `fieldMeta` | `any` | Yes |  |
| `fields` | `any[]` | Yes |  |
| `height` | `number` | Yes |  |
| `id` | `number` | Yes |  |
| `inserted` | `boolean` | Yes |  |
| `page` | `number` | Yes |  |
| `positionX` | `any` | Yes |  |
| `positionY` | `any` | Yes |  |
| `recipientId` | `number` | Yes |  |
| `secondaryId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `templateId` | `number | null` | No |  |
| `type` | `string` | Yes |  |
| `width` | `number` | Yes |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `customText` | - | - |
| `documentId` | - | - |
| `envelopeId` | - | - |
| `envelopeItemId` | - | - |
| `field` | - | - |
| `fieldId` | - | - |
| `fieldMeta` | - | - |
| `fields` | - | - |
| `height` | - | - |
| `id` | - | - |
| `inserted` | - | - |
| `page` | - | - |
| `positionX` | - | - |
| `positionY` | - | - |
| `recipientId` | - | - |
| `secondaryId` | - | - |
| `success` | - | - |
| `templateId` | - | Yes |
| `type` | - | - |
| `width` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TemplateField().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TemplateField().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateRecipientEntity

```ts
const template_recipient = client.TemplateRecipient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authOptions` | `Record<string, any> | null` | Yes |  |
| `documentDeletedAt` | `string | null` | Yes |  |
| `documentId` | `number | null` | No |  |
| `email` | `string` | Yes |  |
| `envelopeId` | `string` | Yes |  |
| `expirationNotifiedAt` | `string | null` | Yes |  |
| `expired` | `string | null` | Yes |  |
| `expiresAt` | `string | null` | Yes |  |
| `fields` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `readStatus` | `string` | Yes |  |
| `recipient` | `Record<string, any>` | Yes |  |
| `recipientId` | `number` | Yes |  |
| `recipients` | `any[]` | Yes |  |
| `rejectionReason` | `string | null` | Yes |  |
| `role` | `string` | Yes |  |
| `sendStatus` | `string` | Yes |  |
| `signedAt` | `string | null` | Yes |  |
| `signingOrder` | `number | null` | Yes |  |
| `signingStatus` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `templateId` | `number | null` | No |  |
| `token` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `authOptions` | - | - |
| `documentDeletedAt` | - | - |
| `documentId` | - | - |
| `email` | - | - |
| `envelopeId` | - | - |
| `expirationNotifiedAt` | - | - |
| `expired` | - | - |
| `expiresAt` | - | - |
| `fields` | - | - |
| `id` | - | - |
| `name` | - | - |
| `readStatus` | - | - |
| `recipient` | - | - |
| `recipientId` | - | - |
| `recipients` | - | - |
| `rejectionReason` | - | - |
| `role` | - | - |
| `sendStatus` | - | - |
| `signedAt` | - | - |
| `signingOrder` | - | - |
| `signingStatus` | - | - |
| `success` | - | - |
| `templateId` | - | Yes |
| `token` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TemplateRecipient().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TemplateRecipient().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateRecipientEntity` instance with the same client and
options.

#### `client()`

Return the parent `Documenso2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new Documenso2SDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

