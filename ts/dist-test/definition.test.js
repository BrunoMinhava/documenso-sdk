"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "document",
        "accessor": "Document",
        "op": "create",
        "method": "POST",
        "path": "/document/create",
        "action": "create",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "envelopeId": "x",
            "id": 1
        },
        "idField": "id"
    },
    {
        "entity": "document",
        "accessor": "Document",
        "op": "create",
        "method": "POST",
        "path": "/document/delete",
        "action": "delete",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true
        },
        "idField": "id"
    },
    {
        "entity": "document",
        "accessor": "Document",
        "op": "create",
        "method": "POST",
        "path": "/document/distribute",
        "action": "distribute",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "visibility": "EVERYONE",
            "status": "DRAFT",
            "source": "DOCUMENT",
            "id": 1,
            "externalId": "x",
            "userId": 1,
            "authOptions": {
                "globalAccessAuth": [
                    "ACCOUNT"
                ],
                "globalActionAuth": [
                    "ACCOUNT"
                ]
            },
            "formValues": {},
            "title": "x",
            "createdAt": "x",
            "updatedAt": "x",
            "completedAt": "x",
            "deletedAt": "x",
            "teamId": 1,
            "folderId": "x",
            "useLegacyFieldInsertion": true,
            "envelopeId": "x",
            "internalVersion": 1,
            "documentDataId": "x",
            "templateId": 1
        },
        "idField": "id"
    },
    {
        "entity": "document",
        "accessor": "Document",
        "op": "create",
        "method": "POST",
        "path": "/document/duplicate",
        "action": "duplicate",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "documentId": 1
        },
        "idField": "id"
    },
    {
        "entity": "document",
        "accessor": "Document",
        "op": "create",
        "method": "POST",
        "path": "/document/get-many",
        "action": "get_many",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "visibility": "EVERYONE",
                    "status": "DRAFT",
                    "source": "DOCUMENT",
                    "id": 1,
                    "externalId": "x",
                    "userId": 1,
                    "authOptions": {
                        "globalAccessAuth": [
                            "ACCOUNT"
                        ],
                        "globalActionAuth": [
                            "ACCOUNT"
                        ]
                    },
                    "formValues": {},
                    "title": "x",
                    "createdAt": "x",
                    "updatedAt": "x",
                    "completedAt": "x",
                    "deletedAt": "x",
                    "teamId": 1,
                    "folderId": "x",
                    "useLegacyFieldInsertion": true,
                    "envelopeId": "x",
                    "internalVersion": 1,
                    "documentDataId": "x",
                    "templateId": 1,
                    "user": {
                        "id": 1,
                        "name": "x",
                        "email": "x"
                    },
                    "recipients": [
                        {
                            "envelopeId": "x",
                            "role": "CC",
                            "readStatus": "NOT_OPENED",
                            "signingStatus": "NOT_SIGNED",
                            "sendStatus": "NOT_SENT",
                            "id": 1,
                            "email": "x",
                            "name": "x",
                            "token": "x",
                            "documentDeletedAt": "x",
                            "expired": "x",
                            "expiresAt": "x",
                            "expirationNotifiedAt": "x",
                            "signedAt": "x",
                            "authOptions": {
                                "accessAuth": [],
                                "actionAuth": []
                            },
                            "signingOrder": 1,
                            "rejectionReason": "x",
                            "documentId": 1,
                            "templateId": 1
                        }
                    ],
                    "team": {
                        "id": 1,
                        "url": "x"
                    }
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "document",
        "accessor": "Document",
        "op": "create",
        "method": "POST",
        "path": "/document/redistribute",
        "action": "redistribute",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true
        },
        "idField": "id"
    },
    {
        "entity": "document",
        "accessor": "Document",
        "op": "create",
        "method": "POST",
        "path": "/document/update",
        "action": "update",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "visibility": "EVERYONE",
            "status": "DRAFT",
            "source": "DOCUMENT",
            "id": 1,
            "externalId": "x",
            "userId": 1,
            "authOptions": {
                "globalAccessAuth": [
                    "ACCOUNT"
                ],
                "globalActionAuth": [
                    "ACCOUNT"
                ]
            },
            "formValues": {},
            "title": "x",
            "createdAt": "x",
            "updatedAt": "x",
            "completedAt": "x",
            "deletedAt": "x",
            "teamId": 1,
            "folderId": "x",
            "useLegacyFieldInsertion": true,
            "envelopeId": "x",
            "internalVersion": 1,
            "documentDataId": "x",
            "templateId": 1
        },
        "idField": "id"
    },
    {
        "entity": "document",
        "accessor": "Document",
        "op": "list",
        "method": "GET",
        "path": "/document",
        "args": [],
        "select": {
            "folder_id": "v1",
            "has_expired_recipient": "v1",
            "order_by_column": "v1",
            "order_by_direction": "v1",
            "page": "v1",
            "per_page": "v1",
            "query": "v1",
            "source": "v1",
            "status": "v1",
            "template_id": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "page",
            "perPage",
            "templateId",
            "source",
            "status",
            "hasExpiredRecipients",
            "folderId",
            "orderByColumn",
            "orderByDirection"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "authOptions": {
                        "globalAccessAuth": [
                            "ACCOUNT"
                        ],
                        "globalActionAuth": [
                            "ACCOUNT"
                        ]
                    },
                    "completedAt": "x",
                    "createdAt": "x",
                    "deletedAt": "x",
                    "documentDataId": "x",
                    "envelopeId": "x",
                    "externalId": "x",
                    "folderId": "x",
                    "formValues": {},
                    "id": 1,
                    "internalVersion": 1,
                    "recipients": [
                        {
                            "authOptions": {
                                "accessAuth": [],
                                "actionAuth": []
                            },
                            "documentDeletedAt": "x",
                            "documentId": 1,
                            "email": "x",
                            "envelopeId": "x",
                            "expirationNotifiedAt": "x",
                            "expired": "x",
                            "expiresAt": "x",
                            "id": 1,
                            "name": "x",
                            "readStatus": "NOT_OPENED",
                            "rejectionReason": "x",
                            "role": "CC",
                            "sendStatus": "NOT_SENT",
                            "signedAt": "x",
                            "signingOrder": 1,
                            "signingStatus": "NOT_SIGNED",
                            "templateId": 1,
                            "token": "x"
                        }
                    ],
                    "source": "DOCUMENT",
                    "status": "DRAFT",
                    "team": {
                        "id": 1,
                        "url": "x"
                    },
                    "teamId": 1,
                    "templateId": 1,
                    "title": "x",
                    "updatedAt": "x",
                    "useLegacyFieldInsertion": true,
                    "user": {
                        "email": "x",
                        "id": 1,
                        "name": "x"
                    },
                    "userId": 1,
                    "visibility": "EVERYONE"
                }
            ],
            "count": 1,
            "currentPage": 1,
            "perPage": 1,
            "totalPages": 1
        },
        "idField": "id"
    },
    {
        "entity": "document",
        "accessor": "Document",
        "op": "list",
        "method": "GET",
        "path": "/document/attachment",
        "action": "attachment",
        "args": [],
        "select": {
            "document_id": "v1"
        },
        "headers": [],
        "query": [
            "documentId"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "data": "x",
                    "id": "x",
                    "label": "x",
                    "type": "link"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "document",
        "accessor": "Document",
        "op": "load",
        "method": "GET",
        "path": "/document/{documentId}/download",
        "action": "download",
        "args": [
            {
                "name": "id",
                "wire": "documentId",
                "value": "p1"
            }
        ],
        "select": {
            "version": "v1"
        },
        "headers": [],
        "query": [
            "version"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "document",
        "accessor": "Document",
        "op": "load",
        "method": "GET",
        "path": "/document/{documentId}/download-beta",
        "action": "download_beta",
        "args": [
            {
                "name": "id",
                "wire": "documentId",
                "value": "p1"
            }
        ],
        "select": {
            "version": "v1"
        },
        "headers": [],
        "query": [
            "version"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "downloadUrl": "x",
            "filename": "x",
            "contentType": "x"
        },
        "idField": "id"
    },
    {
        "entity": "document",
        "accessor": "Document",
        "op": "load",
        "method": "GET",
        "path": "/document/{documentId}",
        "args": [
            {
                "name": "id",
                "wire": "documentId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "visibility": "EVERYONE",
            "status": "DRAFT",
            "source": "DOCUMENT",
            "id": 1,
            "externalId": "x",
            "userId": 1,
            "authOptions": {
                "globalAccessAuth": [
                    "ACCOUNT"
                ],
                "globalActionAuth": [
                    "ACCOUNT"
                ]
            },
            "formValues": {},
            "title": "x",
            "createdAt": "x",
            "updatedAt": "x",
            "completedAt": "x",
            "deletedAt": "x",
            "teamId": 1,
            "folderId": "x",
            "envelopeId": "x",
            "internalVersion": 1,
            "templateId": 1,
            "documentDataId": "x",
            "documentData": {
                "type": "S3_PATH",
                "id": "x",
                "data": "x",
                "initialData": "x",
                "envelopeItemId": "x"
            },
            "documentMeta": {
                "signingOrder": "PARALLEL",
                "distributionMethod": "EMAIL",
                "id": "x",
                "subject": "x",
                "message": "x",
                "timezone": "x",
                "dateFormat": "x",
                "redirectUrl": "x",
                "typedSignatureEnabled": true,
                "uploadSignatureEnabled": true,
                "drawSignatureEnabled": true,
                "allowDictateNextSigner": true,
                "language": "x",
                "emailSettings": {
                    "recipientSigningRequest": true,
                    "recipientRemoved": true,
                    "recipientSigned": true,
                    "documentPending": true,
                    "documentCompleted": true,
                    "documentDeleted": true,
                    "ownerDocumentCompleted": true,
                    "ownerRecipientExpired": true,
                    "ownerDocumentCreated": true
                },
                "emailId": "x",
                "emailReplyTo": "x",
                "envelopeExpirationPeriod": {
                    "unit": "day",
                    "amount": 1
                },
                "reminderSettings": {
                    "sendAfter": {
                        "unit": "day",
                        "amount": 1
                    },
                    "repeatEvery": {
                        "unit": "day",
                        "amount": 1
                    }
                },
                "password": "x",
                "documentId": 1
            },
            "envelopeItems": [
                {
                    "id": "x",
                    "envelopeId": "x"
                }
            ],
            "folder": {
                "id": "x",
                "name": "x",
                "type": "DOCUMENT",
                "visibility": "EVERYONE",
                "userId": 1,
                "teamId": 1,
                "pinned": true,
                "parentId": "x",
                "createdAt": "x",
                "updatedAt": "x"
            },
            "recipients": [
                {
                    "envelopeId": "x",
                    "role": "CC",
                    "readStatus": "NOT_OPENED",
                    "signingStatus": "NOT_SIGNED",
                    "sendStatus": "NOT_SENT",
                    "id": 1,
                    "email": "x",
                    "name": "x",
                    "token": "x",
                    "documentDeletedAt": "x",
                    "expired": "x",
                    "expiresAt": "x",
                    "expirationNotifiedAt": "x",
                    "signedAt": "x",
                    "authOptions": {
                        "accessAuth": [
                            "ACCOUNT"
                        ],
                        "actionAuth": [
                            "ACCOUNT"
                        ]
                    },
                    "signingOrder": 1,
                    "rejectionReason": "x",
                    "documentId": 1,
                    "templateId": 1
                }
            ],
            "fields": [
                {
                    "envelopeId": "x",
                    "envelopeItemId": "x",
                    "type": "SIGNATURE",
                    "id": 1,
                    "secondaryId": "x",
                    "recipientId": 1,
                    "page": 1,
                    "customText": "x",
                    "inserted": true,
                    "fieldMeta": {
                        "label": "x",
                        "placeholder": "x",
                        "required": true,
                        "readOnly": true,
                        "fontSize": 1,
                        "overflow": "auto",
                        "type": "signature"
                    },
                    "documentId": 1,
                    "templateId": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "document_field",
        "accessor": "DocumentField",
        "op": "load",
        "method": "GET",
        "path": "/document/field/{fieldId}",
        "args": [
            {
                "name": "id",
                "wire": "fieldId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "envelopeId": "x",
            "envelopeItemId": "x",
            "type": "SIGNATURE",
            "id": 1,
            "secondaryId": "x",
            "recipientId": 1,
            "page": 1,
            "customText": "x",
            "inserted": true,
            "fieldMeta": {
                "label": "x",
                "placeholder": "x",
                "required": true,
                "readOnly": true,
                "fontSize": 1,
                "overflow": "auto",
                "type": "signature"
            },
            "documentId": 1,
            "templateId": 1
        },
        "idField": "id"
    },
    {
        "entity": "document_recipient",
        "accessor": "DocumentRecipient",
        "op": "load",
        "method": "GET",
        "path": "/document/recipient/{recipientId}",
        "args": [
            {
                "name": "id",
                "wire": "recipientId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "envelopeId": "x",
            "role": "CC",
            "readStatus": "NOT_OPENED",
            "signingStatus": "NOT_SIGNED",
            "sendStatus": "NOT_SENT",
            "id": 1,
            "email": "x",
            "name": "x",
            "token": "x",
            "documentDeletedAt": "x",
            "expired": "x",
            "expiresAt": "x",
            "expirationNotifiedAt": "x",
            "signedAt": "x",
            "authOptions": {
                "accessAuth": [
                    "ACCOUNT"
                ],
                "actionAuth": [
                    "ACCOUNT"
                ]
            },
            "signingOrder": 1,
            "rejectionReason": "x",
            "fields": [
                {
                    "envelopeId": "x",
                    "envelopeItemId": "x",
                    "type": "SIGNATURE",
                    "id": 1,
                    "secondaryId": "x",
                    "recipientId": 1,
                    "page": 1,
                    "customText": "x",
                    "inserted": true,
                    "fieldMeta": {
                        "label": "x",
                        "placeholder": "x",
                        "required": true,
                        "readOnly": true,
                        "fontSize": 1,
                        "overflow": "auto",
                        "type": "signature"
                    },
                    "documentId": 1,
                    "templateId": 1
                }
            ],
            "documentId": 1,
            "templateId": 1
        },
        "idField": "id"
    },
    {
        "entity": "embedding",
        "accessor": "Embedding",
        "op": "create",
        "method": "POST",
        "path": "/embedding/create-presign-token",
        "action": "create_presign_token",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "token": "x",
            "expiresAt": "x",
            "expiresIn": 1
        },
        "idField": "id"
    },
    {
        "entity": "embedding",
        "accessor": "Embedding",
        "op": "create",
        "method": "POST",
        "path": "/embedding/verify-presign-token",
        "action": "verify_presign_token",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "create",
        "method": "POST",
        "path": "/envelope/cancel",
        "action": "cancel",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "create",
        "method": "POST",
        "path": "/envelope/create",
        "action": "create",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x"
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "create",
        "method": "POST",
        "path": "/envelope/delete",
        "action": "delete",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "create",
        "method": "POST",
        "path": "/envelope/distribute",
        "action": "distribute",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true,
            "id": "x",
            "recipients": [
                {
                    "id": 1,
                    "name": "x",
                    "email": "x",
                    "token": "x",
                    "role": "CC",
                    "signingOrder": 1,
                    "signingUrl": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "create",
        "method": "POST",
        "path": "/envelope/duplicate",
        "action": "duplicate",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x"
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "create",
        "method": "POST",
        "path": "/envelope/get-many",
        "action": "get_many",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "internalVersion": 1,
                    "type": "DOCUMENT",
                    "status": "DRAFT",
                    "source": "DOCUMENT",
                    "visibility": "EVERYONE",
                    "templateType": "PUBLIC",
                    "id": "x",
                    "secondaryId": "x",
                    "externalId": "x",
                    "createdAt": "x",
                    "updatedAt": "x",
                    "completedAt": "x",
                    "deletedAt": "x",
                    "title": "x",
                    "authOptions": {
                        "globalAccessAuth": [
                            "ACCOUNT"
                        ],
                        "globalActionAuth": [
                            "ACCOUNT"
                        ]
                    },
                    "formValues": {},
                    "publicTitle": "x",
                    "publicDescription": "x",
                    "userId": 1,
                    "teamId": 1,
                    "folderId": "x",
                    "templateId": 1,
                    "documentMeta": {
                        "signingOrder": "PARALLEL",
                        "distributionMethod": "EMAIL",
                        "id": "x",
                        "subject": "x",
                        "message": "x",
                        "timezone": "x",
                        "dateFormat": "x",
                        "redirectUrl": "x",
                        "typedSignatureEnabled": true,
                        "uploadSignatureEnabled": true,
                        "drawSignatureEnabled": true,
                        "allowDictateNextSigner": true,
                        "language": "x",
                        "emailSettings": {
                            "recipientSigningRequest": true,
                            "recipientRemoved": true,
                            "recipientSigned": true,
                            "documentPending": true,
                            "documentCompleted": true,
                            "documentDeleted": true,
                            "ownerDocumentCompleted": true,
                            "ownerRecipientExpired": true,
                            "ownerDocumentCreated": true
                        },
                        "emailId": "x",
                        "emailReplyTo": "x",
                        "envelopeExpirationPeriod": {
                            "unit": "day",
                            "amount": 1
                        }
                    },
                    "recipients": [
                        {
                            "envelopeId": "x",
                            "role": "CC",
                            "readStatus": "NOT_OPENED",
                            "signingStatus": "NOT_SIGNED",
                            "sendStatus": "NOT_SENT",
                            "id": 1,
                            "email": "x",
                            "name": "x",
                            "token": "x",
                            "documentDeletedAt": "x",
                            "expired": "x",
                            "expiresAt": "x",
                            "expirationNotifiedAt": "x",
                            "signedAt": "x",
                            "authOptions": {
                                "accessAuth": [],
                                "actionAuth": []
                            },
                            "signingOrder": 1,
                            "rejectionReason": "x"
                        }
                    ],
                    "fields": [
                        {
                            "envelopeId": "x",
                            "envelopeItemId": "x",
                            "type": "SIGNATURE",
                            "id": 1,
                            "secondaryId": "x",
                            "recipientId": 1,
                            "page": 1,
                            "customText": "x",
                            "inserted": true,
                            "fieldMeta": {}
                        }
                    ],
                    "envelopeItems": [
                        {
                            "envelopeId": "x",
                            "documentDataId": "x",
                            "id": "x",
                            "title": "x",
                            "order": 1
                        }
                    ],
                    "directLink": {
                        "directTemplateRecipientId": 1,
                        "enabled": true,
                        "id": "x",
                        "token": "x"
                    },
                    "team": {
                        "id": 1,
                        "url": "x"
                    },
                    "user": {
                        "id": 1,
                        "name": "x",
                        "email": "x"
                    }
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "create",
        "method": "POST",
        "path": "/envelope/redistribute",
        "action": "redistribute",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true,
            "id": "x",
            "recipients": [
                {
                    "id": 1,
                    "name": "x",
                    "email": "x",
                    "token": "x",
                    "role": "CC",
                    "signingOrder": 1,
                    "signingUrl": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "create",
        "method": "POST",
        "path": "/envelope/update",
        "action": "update",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "internalVersion": 1,
            "type": "DOCUMENT",
            "status": "DRAFT",
            "source": "DOCUMENT",
            "visibility": "EVERYONE",
            "templateType": "PUBLIC",
            "id": "x",
            "secondaryId": "x",
            "externalId": "x",
            "createdAt": "x",
            "updatedAt": "x",
            "completedAt": "x",
            "deletedAt": "x",
            "title": "x",
            "authOptions": {
                "globalAccessAuth": [
                    "ACCOUNT"
                ],
                "globalActionAuth": [
                    "ACCOUNT"
                ]
            },
            "formValues": {},
            "publicTitle": "x",
            "publicDescription": "x",
            "userId": 1,
            "teamId": 1,
            "folderId": "x"
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "create",
        "method": "POST",
        "path": "/envelope/use",
        "action": "use",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "recipients": [
                {
                    "id": 1,
                    "name": "x",
                    "email": "x",
                    "token": "x",
                    "role": "CC",
                    "signingOrder": 1,
                    "signingUrl": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "list",
        "method": "GET",
        "path": "/envelope",
        "args": [],
        "select": {
            "folder_id": "v1",
            "has_expired_recipient": "v1",
            "order_by_column": "v1",
            "order_by_direction": "v1",
            "page": "v1",
            "per_page": "v1",
            "query": "v1",
            "source": "v1",
            "status": "v1",
            "template_id": "v1",
            "type": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "page",
            "perPage",
            "type",
            "templateId",
            "source",
            "status",
            "hasExpiredRecipients",
            "folderId",
            "orderByColumn",
            "orderByDirection"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "authOptions": {
                        "globalAccessAuth": [
                            "ACCOUNT"
                        ],
                        "globalActionAuth": [
                            "ACCOUNT"
                        ]
                    },
                    "completedAt": "x",
                    "createdAt": "x",
                    "deletedAt": "x",
                    "externalId": "x",
                    "folderId": "x",
                    "formValues": {},
                    "id": "x",
                    "internalVersion": 1,
                    "publicDescription": "x",
                    "publicTitle": "x",
                    "recipients": [
                        {
                            "authOptions": {
                                "accessAuth": [],
                                "actionAuth": []
                            },
                            "documentDeletedAt": "x",
                            "email": "x",
                            "envelopeId": "x",
                            "expirationNotifiedAt": "x",
                            "expired": "x",
                            "expiresAt": "x",
                            "id": 1,
                            "name": "x",
                            "readStatus": "NOT_OPENED",
                            "rejectionReason": "x",
                            "role": "CC",
                            "sendStatus": "NOT_SENT",
                            "signedAt": "x",
                            "signingOrder": 1,
                            "signingStatus": "NOT_SIGNED",
                            "token": "x"
                        }
                    ],
                    "secondaryId": "x",
                    "source": "DOCUMENT",
                    "status": "DRAFT",
                    "team": {
                        "id": 1,
                        "url": "x"
                    },
                    "teamId": 1,
                    "templateId": 1,
                    "templateType": "PUBLIC",
                    "title": "x",
                    "type": "DOCUMENT",
                    "updatedAt": "x",
                    "user": {
                        "email": "x",
                        "id": 1,
                        "name": "x"
                    },
                    "userId": 1,
                    "visibility": "EVERYONE"
                }
            ],
            "count": 1,
            "currentPage": 1,
            "perPage": 1,
            "totalPages": 1
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "list",
        "method": "GET",
        "path": "/envelope/{envelopeId}/audit-log",
        "action": "audit_log",
        "args": [
            {
                "name": "id",
                "wire": "envelopeId",
                "value": "p1"
            }
        ],
        "select": {
            "order_by_column": "v1",
            "order_by_direction": "v1",
            "page": "v1",
            "per_page": "v1"
        },
        "headers": [],
        "query": [
            "page",
            "perPage",
            "orderByColumn",
            "orderByDirection"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "createdAt": "x",
                    "email": "x",
                    "envelopeId": "x",
                    "id": "x",
                    "ipAddress": "x",
                    "name": "x",
                    "userAgent": "x",
                    "userId": 1,
                    "data": {
                        "envelopeItemId": "x",
                        "envelopeItemTitle": "x"
                    },
                    "type": "ENVELOPE_ITEM_CREATED"
                }
            ],
            "count": 1,
            "currentPage": 1,
            "perPage": 1,
            "totalPages": 1
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "load",
        "method": "GET",
        "path": "/envelope/{envelopeId}",
        "args": [
            {
                "name": "id",
                "wire": "envelopeId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "internalVersion": 1,
            "type": "DOCUMENT",
            "status": "DRAFT",
            "source": "DOCUMENT",
            "visibility": "EVERYONE",
            "templateType": "PUBLIC",
            "id": "x",
            "secondaryId": "x",
            "externalId": "x",
            "createdAt": "x",
            "updatedAt": "x",
            "completedAt": "x",
            "deletedAt": "x",
            "title": "x",
            "authOptions": {
                "globalAccessAuth": [
                    "ACCOUNT"
                ],
                "globalActionAuth": [
                    "ACCOUNT"
                ]
            },
            "formValues": {},
            "publicTitle": "x",
            "publicDescription": "x",
            "userId": 1,
            "teamId": 1,
            "folderId": "x",
            "templateId": 1,
            "documentMeta": {
                "signingOrder": "PARALLEL",
                "distributionMethod": "EMAIL",
                "id": "x",
                "subject": "x",
                "message": "x",
                "timezone": "x",
                "dateFormat": "x",
                "redirectUrl": "x",
                "typedSignatureEnabled": true,
                "uploadSignatureEnabled": true,
                "drawSignatureEnabled": true,
                "allowDictateNextSigner": true,
                "language": "x",
                "emailSettings": {
                    "recipientSigningRequest": true,
                    "recipientRemoved": true,
                    "recipientSigned": true,
                    "documentPending": true,
                    "documentCompleted": true,
                    "documentDeleted": true,
                    "ownerDocumentCompleted": true,
                    "ownerRecipientExpired": true,
                    "ownerDocumentCreated": true
                },
                "emailId": "x",
                "emailReplyTo": "x",
                "envelopeExpirationPeriod": {
                    "unit": "day",
                    "amount": 1
                }
            },
            "recipients": [
                {
                    "envelopeId": "x",
                    "role": "CC",
                    "readStatus": "NOT_OPENED",
                    "signingStatus": "NOT_SIGNED",
                    "sendStatus": "NOT_SENT",
                    "id": 1,
                    "email": "x",
                    "name": "x",
                    "token": "x",
                    "documentDeletedAt": "x",
                    "expired": "x",
                    "expiresAt": "x",
                    "expirationNotifiedAt": "x",
                    "signedAt": "x",
                    "authOptions": {
                        "accessAuth": [
                            "ACCOUNT"
                        ],
                        "actionAuth": [
                            "ACCOUNT"
                        ]
                    },
                    "signingOrder": 1,
                    "rejectionReason": "x"
                }
            ],
            "fields": [
                {
                    "envelopeId": "x",
                    "envelopeItemId": "x",
                    "type": "SIGNATURE",
                    "id": 1,
                    "secondaryId": "x",
                    "recipientId": 1,
                    "page": 1,
                    "customText": "x",
                    "inserted": true,
                    "fieldMeta": {
                        "label": "x",
                        "placeholder": "x",
                        "required": true,
                        "readOnly": true,
                        "fontSize": 1,
                        "overflow": "auto",
                        "type": "signature"
                    }
                }
            ],
            "envelopeItems": [
                {
                    "envelopeId": "x",
                    "documentDataId": "x",
                    "id": "x",
                    "title": "x",
                    "order": 1
                }
            ],
            "directLink": {
                "directTemplateRecipientId": 1,
                "enabled": true,
                "id": "x",
                "token": "x"
            },
            "team": {
                "id": 1,
                "url": "x"
            },
            "user": {
                "id": 1,
                "name": "x",
                "email": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "load",
        "method": "GET",
        "path": "/envelope/{envelopeId}/audit-log/download",
        "action": "audit_log_download",
        "args": [
            {
                "name": "id",
                "wire": "envelopeId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "envelope",
        "accessor": "Envelope",
        "op": "load",
        "method": "GET",
        "path": "/envelope/{envelopeId}/certificate/download",
        "action": "certificate_download",
        "args": [
            {
                "name": "id",
                "wire": "envelopeId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "envelope_attachment",
        "accessor": "EnvelopeAttachment",
        "op": "list",
        "method": "GET",
        "path": "/envelope/attachment",
        "args": [],
        "select": {
            "envelope_id": "v1",
            "token": "v1"
        },
        "headers": [],
        "query": [
            "envelopeId",
            "token"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "data": "x",
                    "id": "x",
                    "label": "x",
                    "type": "link"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "envelope_field",
        "accessor": "EnvelopeField",
        "op": "load",
        "method": "GET",
        "path": "/envelope/field/{fieldId}",
        "args": [
            {
                "name": "id",
                "wire": "fieldId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "envelopeId": "x",
            "envelopeItemId": "x",
            "type": "SIGNATURE",
            "id": 1,
            "secondaryId": "x",
            "recipientId": 1,
            "page": 1,
            "customText": "x",
            "inserted": true,
            "fieldMeta": {
                "label": "x",
                "placeholder": "x",
                "required": true,
                "readOnly": true,
                "fontSize": 1,
                "overflow": "auto",
                "type": "signature"
            }
        },
        "idField": "id"
    },
    {
        "entity": "envelope_item",
        "accessor": "EnvelopeItem",
        "op": "load",
        "method": "GET",
        "path": "/envelope/item/{envelopeItemId}/download",
        "args": [
            {
                "name": "item_id",
                "wire": "envelopeItemId",
                "value": "p1"
            }
        ],
        "select": {
            "version": "v1"
        },
        "headers": [],
        "query": [
            "version"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "envelope_recipient",
        "accessor": "EnvelopeRecipient",
        "op": "create",
        "method": "POST",
        "path": "/envelope/recipient/{recipientId}/reject",
        "action": "reject",
        "args": [
            {
                "name": "recipient_id",
                "wire": "recipientId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "envelopeId": "x",
            "role": "CC",
            "readStatus": "NOT_OPENED",
            "signingStatus": "NOT_SIGNED",
            "sendStatus": "NOT_SENT",
            "id": 1,
            "email": "x",
            "name": "x",
            "token": "x",
            "documentDeletedAt": "x",
            "expired": "x",
            "expiresAt": "x",
            "expirationNotifiedAt": "x",
            "signedAt": "x",
            "authOptions": {
                "accessAuth": [
                    "ACCOUNT"
                ],
                "actionAuth": [
                    "ACCOUNT"
                ]
            },
            "signingOrder": 1,
            "rejectionReason": "x",
            "fields": [
                {
                    "envelopeId": "x",
                    "envelopeItemId": "x",
                    "type": "SIGNATURE",
                    "id": 1,
                    "secondaryId": "x",
                    "recipientId": 1,
                    "page": 1,
                    "customText": "x",
                    "inserted": true,
                    "fieldMeta": {
                        "label": "x",
                        "placeholder": "x",
                        "required": true,
                        "readOnly": true,
                        "fontSize": 1,
                        "overflow": "auto",
                        "type": "signature"
                    },
                    "documentId": 1,
                    "templateId": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "envelope_recipient",
        "accessor": "EnvelopeRecipient",
        "op": "load",
        "method": "GET",
        "path": "/envelope/recipient/{recipientId}",
        "args": [
            {
                "name": "id",
                "wire": "recipientId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "envelopeId": "x",
            "role": "CC",
            "readStatus": "NOT_OPENED",
            "signingStatus": "NOT_SIGNED",
            "sendStatus": "NOT_SENT",
            "id": 1,
            "email": "x",
            "name": "x",
            "token": "x",
            "documentDeletedAt": "x",
            "expired": "x",
            "expiresAt": "x",
            "expirationNotifiedAt": "x",
            "signedAt": "x",
            "authOptions": {
                "accessAuth": [
                    "ACCOUNT"
                ],
                "actionAuth": [
                    "ACCOUNT"
                ]
            },
            "signingOrder": 1,
            "rejectionReason": "x",
            "fields": [
                {
                    "envelopeId": "x",
                    "envelopeItemId": "x",
                    "type": "SIGNATURE",
                    "id": 1,
                    "secondaryId": "x",
                    "recipientId": 1,
                    "page": 1,
                    "customText": "x",
                    "inserted": true,
                    "fieldMeta": {
                        "label": "x",
                        "placeholder": "x",
                        "required": true,
                        "readOnly": true,
                        "fontSize": 1,
                        "overflow": "auto",
                        "type": "signature"
                    },
                    "documentId": 1,
                    "templateId": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "folder",
        "accessor": "Folder",
        "op": "create",
        "method": "POST",
        "path": "/folder/create",
        "action": "create",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "name": "x",
            "userId": 1,
            "teamId": 1,
            "parentId": "x",
            "pinned": true,
            "createdAt": "x",
            "updatedAt": "x",
            "visibility": "EVERYONE",
            "type": "DOCUMENT"
        },
        "idField": "id"
    },
    {
        "entity": "folder",
        "accessor": "Folder",
        "op": "create",
        "method": "POST",
        "path": "/folder/delete",
        "action": "delete",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true
        },
        "idField": "id"
    },
    {
        "entity": "folder",
        "accessor": "Folder",
        "op": "create",
        "method": "POST",
        "path": "/folder/update",
        "action": "update",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "name": "x",
            "userId": 1,
            "teamId": 1,
            "parentId": "x",
            "pinned": true,
            "createdAt": "x",
            "updatedAt": "x",
            "visibility": "EVERYONE",
            "type": "DOCUMENT"
        },
        "idField": "id"
    },
    {
        "entity": "folder",
        "accessor": "Folder",
        "op": "list",
        "method": "GET",
        "path": "/folder",
        "args": [],
        "select": {
            "page": "v1",
            "parent_id": "v1",
            "per_page": "v1",
            "query": "v1",
            "type": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "page",
            "perPage",
            "parentId",
            "type"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "createdAt": "x",
                    "id": "x",
                    "name": "x",
                    "parentId": "x",
                    "pinned": true,
                    "teamId": 1,
                    "type": "DOCUMENT",
                    "updatedAt": "x",
                    "userId": 1,
                    "visibility": "EVERYONE"
                }
            ],
            "count": 1,
            "currentPage": 1,
            "perPage": 1,
            "totalPages": 1
        },
        "idField": "id"
    },
    {
        "entity": "template",
        "accessor": "Template",
        "op": "create",
        "method": "POST",
        "path": "/template/create",
        "action": "create",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "envelopeId": "x",
            "id": 1
        },
        "idField": "id"
    },
    {
        "entity": "template",
        "accessor": "Template",
        "op": "create",
        "method": "POST",
        "path": "/template/delete",
        "action": "delete",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true
        },
        "idField": "id"
    },
    {
        "entity": "template",
        "accessor": "Template",
        "op": "create",
        "method": "POST",
        "path": "/template/duplicate",
        "action": "duplicate",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "type": "PUBLIC",
            "visibility": "EVERYONE",
            "id": 1,
            "externalId": "x",
            "title": "x",
            "userId": 1,
            "teamId": 1,
            "authOptions": {
                "globalAccessAuth": [
                    "ACCOUNT"
                ],
                "globalActionAuth": [
                    "ACCOUNT"
                ]
            },
            "createdAt": "x",
            "updatedAt": "x",
            "publicTitle": "x",
            "publicDescription": "x",
            "folderId": "x",
            "useLegacyFieldInsertion": true,
            "envelopeId": "x",
            "templateDocumentDataId": "x"
        },
        "idField": "id"
    },
    {
        "entity": "template",
        "accessor": "Template",
        "op": "create",
        "method": "POST",
        "path": "/template/get-many",
        "action": "get_many",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "type": "PUBLIC",
                    "visibility": "EVERYONE",
                    "id": 1,
                    "externalId": "x",
                    "title": "x",
                    "userId": 1,
                    "teamId": 1,
                    "authOptions": {
                        "globalAccessAuth": [
                            "ACCOUNT"
                        ],
                        "globalActionAuth": [
                            "ACCOUNT"
                        ]
                    },
                    "createdAt": "x",
                    "updatedAt": "x",
                    "publicTitle": "x",
                    "publicDescription": "x",
                    "folderId": "x",
                    "useLegacyFieldInsertion": true,
                    "envelopeId": "x",
                    "team": {
                        "id": 1,
                        "url": "x",
                        "name": "x"
                    },
                    "fields": [
                        {
                            "envelopeId": "x",
                            "envelopeItemId": "x",
                            "type": "SIGNATURE",
                            "id": 1,
                            "secondaryId": "x",
                            "recipientId": 1,
                            "page": 1,
                            "customText": "x",
                            "inserted": true,
                            "fieldMeta": {},
                            "documentId": 1,
                            "templateId": 1
                        }
                    ],
                    "recipients": [
                        {
                            "envelopeId": "x",
                            "role": "CC",
                            "readStatus": "NOT_OPENED",
                            "signingStatus": "NOT_SIGNED",
                            "sendStatus": "NOT_SENT",
                            "id": 1,
                            "email": "x",
                            "name": "x",
                            "token": "x",
                            "documentDeletedAt": "x",
                            "expired": "x",
                            "expiresAt": "x",
                            "expirationNotifiedAt": "x",
                            "signedAt": "x",
                            "authOptions": {
                                "accessAuth": [],
                                "actionAuth": []
                            },
                            "signingOrder": 1,
                            "rejectionReason": "x",
                            "documentId": 1,
                            "templateId": 1
                        }
                    ],
                    "templateMeta": {
                        "signingOrder": "PARALLEL",
                        "distributionMethod": "EMAIL"
                    },
                    "directLink": {
                        "token": "x",
                        "enabled": true
                    },
                    "templateDocumentDataId": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "template",
        "accessor": "Template",
        "op": "create",
        "method": "POST",
        "path": "/template/update",
        "action": "update",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "type": "PUBLIC",
            "visibility": "EVERYONE",
            "id": 1,
            "externalId": "x",
            "title": "x",
            "userId": 1,
            "teamId": 1,
            "authOptions": {
                "globalAccessAuth": [
                    "ACCOUNT"
                ],
                "globalActionAuth": [
                    "ACCOUNT"
                ]
            },
            "createdAt": "x",
            "updatedAt": "x",
            "publicTitle": "x",
            "publicDescription": "x",
            "folderId": "x",
            "useLegacyFieldInsertion": true,
            "envelopeId": "x",
            "templateDocumentDataId": "x"
        },
        "idField": "id"
    },
    {
        "entity": "template",
        "accessor": "Template",
        "op": "create",
        "method": "POST",
        "path": "/template/use",
        "action": "use",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "visibility": "EVERYONE",
            "status": "DRAFT",
            "source": "DOCUMENT",
            "id": 1,
            "externalId": "x",
            "userId": 1,
            "authOptions": {
                "globalAccessAuth": [
                    "ACCOUNT"
                ],
                "globalActionAuth": [
                    "ACCOUNT"
                ]
            },
            "formValues": {},
            "title": "x",
            "createdAt": "x",
            "updatedAt": "x",
            "completedAt": "x",
            "deletedAt": "x",
            "teamId": 1,
            "folderId": "x",
            "envelopeId": "x",
            "internalVersion": 1,
            "templateId": 1,
            "documentDataId": "x",
            "documentData": {
                "type": "S3_PATH",
                "id": "x",
                "data": "x",
                "initialData": "x",
                "envelopeItemId": "x"
            },
            "documentMeta": {
                "signingOrder": "PARALLEL",
                "distributionMethod": "EMAIL",
                "id": "x",
                "subject": "x",
                "message": "x",
                "timezone": "x",
                "dateFormat": "x",
                "redirectUrl": "x",
                "typedSignatureEnabled": true,
                "uploadSignatureEnabled": true,
                "drawSignatureEnabled": true,
                "allowDictateNextSigner": true,
                "language": "x",
                "emailSettings": {
                    "recipientSigningRequest": true,
                    "recipientRemoved": true,
                    "recipientSigned": true,
                    "documentPending": true,
                    "documentCompleted": true,
                    "documentDeleted": true,
                    "ownerDocumentCompleted": true,
                    "ownerRecipientExpired": true,
                    "ownerDocumentCreated": true
                },
                "emailId": "x",
                "emailReplyTo": "x",
                "envelopeExpirationPeriod": {
                    "unit": "day",
                    "amount": 1
                },
                "reminderSettings": {
                    "sendAfter": {
                        "unit": "day",
                        "amount": 1
                    },
                    "repeatEvery": {
                        "unit": "day",
                        "amount": 1
                    }
                },
                "password": "x",
                "documentId": 1
            },
            "envelopeItems": [
                {
                    "id": "x",
                    "envelopeId": "x"
                }
            ],
            "folder": {
                "id": "x",
                "name": "x",
                "type": "DOCUMENT",
                "visibility": "EVERYONE",
                "userId": 1,
                "teamId": 1,
                "pinned": true,
                "parentId": "x",
                "createdAt": "x",
                "updatedAt": "x"
            },
            "recipients": [
                {
                    "envelopeId": "x",
                    "role": "CC",
                    "readStatus": "NOT_OPENED",
                    "signingStatus": "NOT_SIGNED",
                    "sendStatus": "NOT_SENT",
                    "id": 1,
                    "email": "x",
                    "name": "x",
                    "token": "x",
                    "documentDeletedAt": "x",
                    "expired": "x",
                    "expiresAt": "x",
                    "expirationNotifiedAt": "x",
                    "signedAt": "x",
                    "authOptions": {
                        "accessAuth": [
                            "ACCOUNT"
                        ],
                        "actionAuth": [
                            "ACCOUNT"
                        ]
                    },
                    "signingOrder": 1,
                    "rejectionReason": "x",
                    "documentId": 1,
                    "templateId": 1
                }
            ],
            "fields": [
                {
                    "envelopeId": "x",
                    "envelopeItemId": "x",
                    "type": "SIGNATURE",
                    "id": 1,
                    "secondaryId": "x",
                    "recipientId": 1,
                    "page": 1,
                    "customText": "x",
                    "inserted": true,
                    "fieldMeta": {
                        "label": "x",
                        "placeholder": "x",
                        "required": true,
                        "readOnly": true,
                        "fontSize": 1,
                        "overflow": "auto",
                        "type": "signature"
                    },
                    "documentId": 1,
                    "templateId": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "template",
        "accessor": "Template",
        "op": "list",
        "method": "GET",
        "path": "/template",
        "args": [],
        "select": {
            "folder_id": "v1",
            "page": "v1",
            "per_page": "v1",
            "query": "v1",
            "type": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "page",
            "perPage",
            "type",
            "folderId"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "authOptions": {
                        "globalAccessAuth": [
                            "ACCOUNT"
                        ],
                        "globalActionAuth": [
                            "ACCOUNT"
                        ]
                    },
                    "createdAt": "x",
                    "directLink": {
                        "enabled": true,
                        "token": "x"
                    },
                    "envelopeId": "x",
                    "externalId": "x",
                    "fields": [
                        {
                            "customText": "x",
                            "documentId": 1,
                            "envelopeId": "x",
                            "envelopeItemId": "x",
                            "fieldMeta": {},
                            "id": 1,
                            "inserted": true,
                            "page": 1,
                            "recipientId": 1,
                            "secondaryId": "x",
                            "templateId": 1,
                            "type": "SIGNATURE"
                        }
                    ],
                    "folderId": "x",
                    "id": 1,
                    "publicDescription": "x",
                    "publicTitle": "x",
                    "recipients": [
                        {
                            "authOptions": {
                                "accessAuth": [],
                                "actionAuth": []
                            },
                            "documentDeletedAt": "x",
                            "documentId": 1,
                            "email": "x",
                            "envelopeId": "x",
                            "expirationNotifiedAt": "x",
                            "expired": "x",
                            "expiresAt": "x",
                            "id": 1,
                            "name": "x",
                            "readStatus": "NOT_OPENED",
                            "rejectionReason": "x",
                            "role": "CC",
                            "sendStatus": "NOT_SENT",
                            "signedAt": "x",
                            "signingOrder": 1,
                            "signingStatus": "NOT_SIGNED",
                            "templateId": 1,
                            "token": "x"
                        }
                    ],
                    "team": {
                        "id": 1,
                        "name": "x",
                        "url": "x"
                    },
                    "teamId": 1,
                    "templateDocumentDataId": "x",
                    "templateMeta": {
                        "distributionMethod": "EMAIL",
                        "signingOrder": "PARALLEL"
                    },
                    "title": "x",
                    "type": "PUBLIC",
                    "updatedAt": "x",
                    "useLegacyFieldInsertion": true,
                    "userId": 1,
                    "visibility": "EVERYONE"
                }
            ],
            "count": 1,
            "currentPage": 1,
            "perPage": 1,
            "totalPages": 1
        },
        "idField": "id"
    },
    {
        "entity": "template",
        "accessor": "Template",
        "op": "load",
        "method": "GET",
        "path": "/template/{templateId}",
        "args": [
            {
                "name": "id",
                "wire": "templateId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "type": "PUBLIC",
            "visibility": "EVERYONE",
            "id": 1,
            "externalId": "x",
            "title": "x",
            "userId": 1,
            "teamId": 1,
            "authOptions": {
                "globalAccessAuth": [
                    "ACCOUNT"
                ],
                "globalActionAuth": [
                    "ACCOUNT"
                ]
            },
            "createdAt": "x",
            "updatedAt": "x",
            "publicTitle": "x",
            "publicDescription": "x",
            "folderId": "x",
            "envelopeId": "x",
            "templateDocumentDataId": "x",
            "templateDocumentData": {
                "type": "S3_PATH",
                "id": "x",
                "data": "x",
                "initialData": "x",
                "envelopeItemId": "x"
            },
            "templateMeta": {
                "id": "x",
                "subject": "x",
                "message": "x",
                "timezone": "x",
                "dateFormat": "x",
                "signingOrder": "PARALLEL",
                "typedSignatureEnabled": true,
                "uploadSignatureEnabled": true,
                "drawSignatureEnabled": true,
                "allowDictateNextSigner": true,
                "distributionMethod": "EMAIL",
                "redirectUrl": "x",
                "language": "x",
                "emailSettings": {
                    "recipientSigningRequest": true,
                    "recipientRemoved": true,
                    "recipientSigned": true,
                    "documentPending": true,
                    "documentCompleted": true,
                    "documentDeleted": true,
                    "ownerDocumentCompleted": true,
                    "ownerRecipientExpired": true,
                    "ownerDocumentCreated": true
                },
                "emailId": "x",
                "emailReplyTo": "x",
                "templateId": 1
            },
            "directLink": {
                "id": "x",
                "envelopeId": "x",
                "token": "x",
                "createdAt": "x",
                "enabled": true,
                "directTemplateRecipientId": 1,
                "templateId": 1
            },
            "user": {
                "id": 1,
                "name": "x",
                "email": "x"
            },
            "recipients": [
                {
                    "envelopeId": "x",
                    "role": "CC",
                    "readStatus": "NOT_OPENED",
                    "signingStatus": "NOT_SIGNED",
                    "sendStatus": "NOT_SENT",
                    "id": 1,
                    "email": "x",
                    "name": "x",
                    "token": "x",
                    "documentDeletedAt": "x",
                    "expired": "x",
                    "expiresAt": "x",
                    "expirationNotifiedAt": "x",
                    "signedAt": "x",
                    "authOptions": {
                        "accessAuth": [
                            "ACCOUNT"
                        ],
                        "actionAuth": [
                            "ACCOUNT"
                        ]
                    },
                    "signingOrder": 1,
                    "rejectionReason": "x",
                    "documentId": 1,
                    "templateId": 1
                }
            ],
            "fields": [
                {
                    "envelopeId": "x",
                    "envelopeItemId": "x",
                    "type": "SIGNATURE",
                    "id": 1,
                    "secondaryId": "x",
                    "recipientId": 1,
                    "page": 1,
                    "customText": "x",
                    "inserted": true,
                    "fieldMeta": {
                        "label": "x",
                        "placeholder": "x",
                        "required": true,
                        "readOnly": true,
                        "fontSize": 1,
                        "overflow": "auto",
                        "type": "signature"
                    },
                    "documentId": 1,
                    "templateId": 1
                }
            ],
            "folder": {
                "id": "x",
                "name": "x",
                "type": "DOCUMENT",
                "visibility": "EVERYONE",
                "userId": 1,
                "teamId": 1,
                "pinned": true,
                "parentId": "x",
                "createdAt": "x",
                "updatedAt": "x"
            },
            "envelopeItems": [
                {
                    "id": "x",
                    "envelopeId": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "template_field",
        "accessor": "TemplateField",
        "op": "load",
        "method": "GET",
        "path": "/template/field/{fieldId}",
        "args": [
            {
                "name": "id",
                "wire": "fieldId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "envelopeId": "x",
            "envelopeItemId": "x",
            "type": "SIGNATURE",
            "id": 1,
            "secondaryId": "x",
            "recipientId": 1,
            "page": 1,
            "customText": "x",
            "inserted": true,
            "fieldMeta": {
                "label": "x",
                "placeholder": "x",
                "required": true,
                "readOnly": true,
                "fontSize": 1,
                "overflow": "auto",
                "type": "signature"
            },
            "documentId": 1,
            "templateId": 1
        },
        "idField": "id"
    },
    {
        "entity": "template_recipient",
        "accessor": "TemplateRecipient",
        "op": "load",
        "method": "GET",
        "path": "/template/recipient/{recipientId}",
        "args": [
            {
                "name": "id",
                "wire": "recipientId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "envelopeId": "x",
            "role": "CC",
            "readStatus": "NOT_OPENED",
            "signingStatus": "NOT_SIGNED",
            "sendStatus": "NOT_SENT",
            "id": 1,
            "email": "x",
            "name": "x",
            "token": "x",
            "documentDeletedAt": "x",
            "expired": "x",
            "expiresAt": "x",
            "expirationNotifiedAt": "x",
            "signedAt": "x",
            "authOptions": {
                "accessAuth": [
                    "ACCOUNT"
                ],
                "actionAuth": [
                    "ACCOUNT"
                ]
            },
            "signingOrder": 1,
            "rejectionReason": "x",
            "fields": [
                {
                    "envelopeId": "x",
                    "envelopeItemId": "x",
                    "type": "SIGNATURE",
                    "id": 1,
                    "secondaryId": "x",
                    "recipientId": 1,
                    "page": 1,
                    "customText": "x",
                    "inserted": true,
                    "fieldMeta": {
                        "label": "x",
                        "placeholder": "x",
                        "required": true,
                        "readOnly": true,
                        "fontSize": 1,
                        "overflow": "auto",
                        "type": "signature"
                    },
                    "documentId": 1,
                    "templateId": 1
                }
            ],
            "documentId": 1,
            "templateId": 1
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map