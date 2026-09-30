# Documenso v2 API

Welcome to the Documenso v2 API. This API provides access to our system, which you can use to integrate applications, automate workflows, or build custom tools.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 13 entities and 89 HTTP routes. There are 1 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Document

Results: Successful response.

SDK operations: `create`, `list`, `load`.

### DocumentField

Results: Successful response.

SDK operations: `create`, `load`.

### DocumentRecipient

Results: Successful response.

SDK operations: `create`, `load`.

### Embedding

Results: Successful response.

SDK operations: `create`.

### Envelope

Results: Successful response.

SDK operations: `create`, `list`, `load`.

### EnvelopeAttachment

Results: Successful response.

SDK operations: `create`, `list`.

### EnvelopeField

Results: Successful response.

SDK operations: `create`, `load`.

### EnvelopeItem

Results: Successful response.

SDK operations: `create`, `load`.

### EnvelopeRecipient

Results: Successful response.

SDK operations: `create`, `load`.

### Folder

Results: Successful response.

SDK operations: `create`, `list`.

### Template

Results: Successful response.

SDK operations: `create`, `list`, `load`.

### TemplateField

Results: Successful response.

SDK operations: `create`, `load`.

### TemplateRecipient

Results: Successful response.

SDK operations: `create`, `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Document | `create` | `POST /document/attachment/create` | Required |
| Document | `create` | `POST /document/attachment/delete` | Required |
| Document | `create` | `POST /document/attachment/update` | Required |
| Document | `create` | `POST /document/create` | Required |
| Document | `create` | `POST /document/create/beta` | Required |
| Document | `create` | `POST /document/delete` | Required |
| Document | `create` | `POST /document/distribute` | Required |
| Document | `create` | `POST /document/duplicate` | Required |
| Document | `create` | `POST /document/get-many` | Required |
| Document | `create` | `POST /document/redistribute` | Required |
| Document | `create` | `POST /document/update` | Required |
| Document | `list` | `GET /document` | Required |
| Document | `list` | `GET /document/attachment` | Required |
| Document | `load` | `GET /document/{documentId}/download` | Required |
| Document | `load` | `GET /document/{documentId}/download-beta` | Required |
| Document | `load` | `GET /document/{documentId}` | Required |
| DocumentField | `create` | `POST /document/field/create` | Required |
| DocumentField | `create` | `POST /document/field/create-many` | Required |
| DocumentField | `create` | `POST /document/field/delete` | Required |
| DocumentField | `create` | `POST /document/field/update` | Required |
| DocumentField | `create` | `POST /document/field/update-many` | Required |
| DocumentField | `load` | `GET /document/field/{fieldId}` | Required |
| DocumentRecipient | `create` | `POST /document/recipient/create` | Required |
| DocumentRecipient | `create` | `POST /document/recipient/create-many` | Required |
| DocumentRecipient | `create` | `POST /document/recipient/delete` | Required |
| DocumentRecipient | `create` | `POST /document/recipient/update` | Required |
| DocumentRecipient | `create` | `POST /document/recipient/update-many` | Required |
| DocumentRecipient | `load` | `GET /document/recipient/{recipientId}` | Required |
| Embedding | `create` | `POST /embedding/create-presign-token` | Required |
| Embedding | `create` | `POST /embedding/verify-presign-token` | Required |
| Envelope | `create` | `POST /envelope/cancel` | Required |
| Envelope | `create` | `POST /envelope/create` | Required |
| Envelope | `create` | `POST /envelope/delete` | Required |
| Envelope | `create` | `POST /envelope/distribute` | Required |
| Envelope | `create` | `POST /envelope/duplicate` | Required |
| Envelope | `create` | `POST /envelope/get-many` | Required |
| Envelope | `create` | `POST /envelope/redistribute` | Required |
| Envelope | `create` | `POST /envelope/update` | Required |
| Envelope | `create` | `POST /envelope/use` | Required |
| Envelope | `list` | `GET /envelope` | Required |
| Envelope | `list` | `GET /envelope/{envelopeId}/audit-log` | Required |
| Envelope | `load` | `GET /envelope/{envelopeId}` | Required |
| Envelope | `load` | `GET /envelope/{envelopeId}/audit-log/download` | Required |
| Envelope | `load` | `GET /envelope/{envelopeId}/certificate/download` | Required |
| EnvelopeAttachment | `create` | `POST /envelope/attachment/create` | Required |
| EnvelopeAttachment | `create` | `POST /envelope/attachment/delete` | Required |
| EnvelopeAttachment | `create` | `POST /envelope/attachment/update` | Required |
| EnvelopeAttachment | `list` | `GET /envelope/attachment` | Required |
| EnvelopeField | `create` | `POST /envelope/field/create-many` | Required |
| EnvelopeField | `create` | `POST /envelope/field/delete` | Required |
| EnvelopeField | `create` | `POST /envelope/field/update-many` | Required |
| EnvelopeField | `load` | `GET /envelope/field/{fieldId}` | Required |
| EnvelopeItem | `create` | `POST /envelope/item/create-many` | Required |
| EnvelopeItem | `create` | `POST /envelope/item/delete` | Required |
| EnvelopeItem | `create` | `POST /envelope/item/update-many` | Required |
| EnvelopeItem | `load` | `GET /envelope/item/{envelopeItemId}/download` | Required |
| EnvelopeRecipient | `create` | `POST /envelope/recipient/{recipientId}/reject` | Required |
| EnvelopeRecipient | `create` | `POST /envelope/recipient/create-many` | Required |
| EnvelopeRecipient | `create` | `POST /envelope/recipient/delete` | Required |
| EnvelopeRecipient | `create` | `POST /envelope/recipient/update-many` | Required |
| EnvelopeRecipient | `load` | `GET /envelope/recipient/{recipientId}` | Required |
| Folder | `create` | `POST /folder/create` | Required |
| Folder | `create` | `POST /folder/delete` | Required |
| Folder | `create` | `POST /folder/update` | Required |
| Folder | `list` | `GET /folder` | Required |
| Template | `create` | `POST /template/create` | Required |
| Template | `create` | `POST /template/create/beta` | Required |
| Template | `create` | `POST /template/delete` | Required |
| Template | `create` | `POST /template/direct/create` | Required |
| Template | `create` | `POST /template/direct/delete` | Required |
| Template | `create` | `POST /template/direct/toggle` | Required |
| Template | `create` | `POST /template/duplicate` | Required |
| Template | `create` | `POST /template/get-many` | Required |
| Template | `create` | `POST /template/update` | Required |
| Template | `create` | `POST /template/use` | Required |
| Template | `list` | `GET /template` | Required |
| Template | `load` | `GET /template/{templateId}` | Required |
| TemplateField | `create` | `POST /template/field/create` | Required |
| TemplateField | `create` | `POST /template/field/create-many` | Required |
| TemplateField | `create` | `POST /template/field/delete` | Required |
| TemplateField | `create` | `POST /template/field/update` | Required |
| TemplateField | `create` | `POST /template/field/update-many` | Required |
| TemplateField | `load` | `GET /template/field/{fieldId}` | Required |
| TemplateRecipient | `create` | `POST /template/recipient/create` | Required |
| TemplateRecipient | `create` | `POST /template/recipient/create-many` | Required |
| TemplateRecipient | `create` | `POST /template/recipient/delete` | Required |
| TemplateRecipient | `create` | `POST /template/recipient/update` | Required |
| TemplateRecipient | `create` | `POST /template/recipient/update-many` | Required |
| TemplateRecipient | `load` | `GET /template/recipient/{recipientId}` | Required |

## Connect to the API

- API server: `https://app.documenso.com/api/v2`

The default credential is sent in the `Authorization` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `test`: In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

