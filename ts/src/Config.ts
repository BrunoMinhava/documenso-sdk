
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Documenso2',
        slug: "documenso2",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "https://app.documenso.com/api/v2",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        document: {
        },
  
        document_field: {
        },
  
        document_recipient: {
        },
  
        embedding: {
        },
  
        envelope: {
        },
  
        envelope_attachment: {
        },
  
        envelope_field: {
        },
  
        envelope_item: {
        },
  
        envelope_recipient: {
        },
  
        folder: {
        },
  
        template: {
        },
  
        template_field: {
        },
  
        template_recipient: {
        },
  
    }
  }


  entity = {
    "document": {
      "fields": [
        {
          "name": "attachments",
          "title": "Attachments",
          "type": "`$ARRAY`"
        },
        {
          "name": "authOptions",
          "title": "Auth Options",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "completedAt",
          "title": "Completed At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "deletedAt",
          "title": "Deleted At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "document",
          "title": "Document",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "documentData",
          "title": "Document Data",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "documentDataId",
          "title": "Document Data Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "documentId",
          "title": "Document Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "documentMeta",
          "title": "Document Meta",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "envelopeId",
          "title": "Envelope Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "envelopeItems",
          "title": "Envelope Items",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "externalId",
          "title": "External Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "fields",
          "title": "Fields",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "folder",
          "title": "Folder",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "folderId",
          "title": "Folder Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "formValues",
          "title": "Form Values",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true,
          "op": {
            "create": {
              "type": "`$OBJECT`"
            }
          }
        },
        {
          "name": "globalAccessAuth",
          "title": "Global Access Auth",
          "type": "`$ARRAY`"
        },
        {
          "name": "globalActionAuth",
          "title": "Global Action Auth",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "internalVersion",
          "title": "Internal Version",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "meta",
          "title": "Meta",
          "type": "`$OBJECT`"
        },
        {
          "name": "recipients",
          "title": "Recipients",
          "type": "`$ARRAY`",
          "req": true,
          "op": {
            "create": {
              "type": "`$ARRAY`"
            }
          }
        },
        {
          "name": "source",
          "title": "Source",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "team",
          "title": "Team",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "teamId",
          "title": "Team Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "templateId",
          "title": "Template Id",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "uploadUrl",
          "title": "Upload Url",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "useLegacyFieldInsertion",
          "title": "Use Legacy Field Insertion",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "user",
          "title": "User",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "userId",
          "title": "User Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          }
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "document",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/attachment/create",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "attachment"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "document",
                "attachment",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/attachment/delete",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "attachment"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "document",
                "attachment",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/attachment/update",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "attachment"
                },
                {
                  "lit": "update"
                }
              ],
              "parts": [
                "document",
                "attachment",
                "update"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/create",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "document",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "create"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/create/beta",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "create"
                },
                {
                  "lit": "beta"
                }
              ],
              "parts": [
                "document",
                "create",
                "beta"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.document`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/delete",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "document",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "delete"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/distribute",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "distribute"
                }
              ],
              "parts": [
                "document",
                "distribute"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "distribute"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/duplicate",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "duplicate"
                }
              ],
              "parts": [
                "document",
                "duplicate"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "duplicate"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/get-many",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "get-many"
                }
              ],
              "parts": [
                "document",
                "get-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "get_many"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/redistribute",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "redistribute"
                }
              ],
              "parts": [
                "document",
                "redistribute"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "redistribute"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/update",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "update"
                }
              ],
              "parts": [
                "document",
                "update"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "update"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/document",
              "segments": [
                {
                  "lit": "document"
                }
              ],
              "parts": [
                "document"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "folder_id",
                    "orig": "folderId",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "has_expired_recipient",
                    "orig": "hasExpiredRecipients",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by_column",
                    "orig": "orderByColumn",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by_direction",
                    "orig": "orderByDirection",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "desc"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "per_page",
                    "orig": "perPage",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "query",
                    "orig": "query",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "source",
                    "orig": "source",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "template_id",
                    "orig": "templateId",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "folder_id",
                  "has_expired_recipient",
                  "order_by_column",
                  "order_by_direction",
                  "page",
                  "per_page",
                  "query",
                  "source",
                  "status",
                  "template_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/document/attachment",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "attachment"
                }
              ],
              "parts": [
                "document",
                "attachment"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "document_id",
                    "orig": "documentId",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "attachment",
                "exist": [
                  "document_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/document/{documentId}/download",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "download"
                }
              ],
              "parts": [
                "document",
                "{id}",
                "download"
              ],
              "rename": {
                "param": {
                  "documentId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "documentId",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "version",
                    "orig": "version",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "signed"
                  }
                ]
              },
              "select": {
                "$action": "download",
                "exist": [
                  "id",
                  "version"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/document/{documentId}/download-beta",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "download-beta"
                }
              ],
              "parts": [
                "document",
                "{id}",
                "download-beta"
              ],
              "rename": {
                "param": {
                  "documentId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "documentId",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "version",
                    "orig": "version",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "signed"
                  }
                ]
              },
              "select": {
                "$action": "download_beta",
                "exist": [
                  "id",
                  "version"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/document/{documentId}",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "document",
                "{id}"
              ],
              "rename": {
                "param": {
                  "documentId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "documentId",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "document_field": {
      "fields": [
        {
          "name": "customText",
          "title": "Custom Text",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "documentId",
          "title": "Document Id",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ],
          "op": {
            "create": {
              "req": true,
              "type": "`$NUMBER`"
            }
          }
        },
        {
          "name": "envelopeId",
          "title": "Envelope Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "envelopeItemId",
          "title": "Envelope Item Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "field",
          "title": "Field",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "fieldId",
          "title": "Field Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "fieldMeta",
          "title": "Field Meta",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "fields",
          "title": "Fields",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "height",
          "title": "Height",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "inserted",
          "title": "Inserted",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "page",
          "title": "Page",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "positionX",
          "title": "Position X",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "positionY",
          "title": "Position Y",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "recipientId",
          "title": "Recipient Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "secondaryId",
          "title": "Secondary Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "templateId",
          "title": "Template Id",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "width",
          "title": "Width",
          "type": "`$NUMBER`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "document_field",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/field/create",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "document",
                "field",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/field/create-many",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "create-many"
                }
              ],
              "parts": [
                "document",
                "field",
                "create-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/field/delete",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "document",
                "field",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/field/update",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "update"
                }
              ],
              "parts": [
                "document",
                "field",
                "update"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/field/update-many",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "update-many"
                }
              ],
              "parts": [
                "document",
                "field",
                "update-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/document/field/{fieldId}",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "field"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "document",
                "field",
                "{id}"
              ],
              "rename": {
                "param": {
                  "fieldId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "fieldId",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "document_recipient": {
      "fields": [
        {
          "name": "authOptions",
          "title": "Auth Options",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "documentDeletedAt",
          "title": "Document Deleted At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "documentId",
          "title": "Document Id",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ],
          "op": {
            "create": {
              "req": true,
              "type": "`$NUMBER`"
            }
          }
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "envelopeId",
          "title": "Envelope Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "expirationNotifiedAt",
          "title": "Expiration Notified At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "expired",
          "title": "Expired",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "expiresAt",
          "title": "Expires At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "fields",
          "title": "Fields",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "readStatus",
          "title": "Read Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "recipient",
          "title": "Recipient",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "recipientId",
          "title": "Recipient Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "recipients",
          "title": "Recipients",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "rejectionReason",
          "title": "Rejection Reason",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "role",
          "title": "Role",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "sendStatus",
          "title": "Send Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "signedAt",
          "title": "Signed At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "signingOrder",
          "title": "Signing Order",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "signingStatus",
          "title": "Signing Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "templateId",
          "title": "Template Id",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "token",
          "title": "Token",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "document_recipient",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/recipient/create",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "document",
                "recipient",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/recipient/create-many",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "create-many"
                }
              ],
              "parts": [
                "document",
                "recipient",
                "create-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/recipient/delete",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "document",
                "recipient",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/recipient/update",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "update"
                }
              ],
              "parts": [
                "document",
                "recipient",
                "update"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/document/recipient/update-many",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "update-many"
                }
              ],
              "parts": [
                "document",
                "recipient",
                "update-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/document/recipient/{recipientId}",
              "segments": [
                {
                  "lit": "document"
                },
                {
                  "lit": "recipient"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "document",
                "recipient",
                "{id}"
              ],
              "rename": {
                "param": {
                  "recipientId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "recipientId",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "embedding": {
      "fields": [],
      "name": "embedding",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/embedding/create-presign-token",
              "segments": [
                {
                  "lit": "embedding"
                },
                {
                  "lit": "create-presign-token"
                }
              ],
              "parts": [
                "embedding",
                "create-presign-token"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "create_presign_token"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/embedding/verify-presign-token",
              "segments": [
                {
                  "lit": "embedding"
                },
                {
                  "lit": "verify-presign-token"
                }
              ],
              "parts": [
                "embedding",
                "verify-presign-token"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "verify_presign_token"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "envelope": {
      "fields": [
        {
          "name": "authOptions",
          "title": "Auth Options",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "completedAt",
          "title": "Completed At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "deletedAt",
          "title": "Deleted At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "directLink",
          "title": "Direct Link",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "documentMeta",
          "title": "Document Meta",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "envelopeItems",
          "title": "Envelope Items",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "externalId",
          "title": "External Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "fields",
          "title": "Fields",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "folderId",
          "title": "Folder Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "formValues",
          "title": "Form Values",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "internalVersion",
          "title": "Internal Version",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "publicDescription",
          "title": "Public Description",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "publicTitle",
          "title": "Public Title",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "recipients",
          "title": "Recipients",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "secondaryId",
          "title": "Secondary Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "source",
          "title": "Source",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "team",
          "title": "Team",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "teamId",
          "title": "Team Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "templateId",
          "title": "Template Id",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "templateType",
          "title": "Template Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "user",
          "title": "User",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "userId",
          "title": "User Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "envelope",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/cancel",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "cancel"
                }
              ],
              "parts": [
                "envelope",
                "cancel"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "cancel"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/create",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "envelope",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "create"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/delete",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "envelope",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "delete"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/distribute",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "distribute"
                }
              ],
              "parts": [
                "envelope",
                "distribute"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "distribute"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/duplicate",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "duplicate"
                }
              ],
              "parts": [
                "envelope",
                "duplicate"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "duplicate"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/get-many",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "get-many"
                }
              ],
              "parts": [
                "envelope",
                "get-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "get_many"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/redistribute",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "redistribute"
                }
              ],
              "parts": [
                "envelope",
                "redistribute"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "redistribute"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/update",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "update"
                }
              ],
              "parts": [
                "envelope",
                "update"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "update"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/use",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "use"
                }
              ],
              "parts": [
                "envelope",
                "use"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "use"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/envelope",
              "segments": [
                {
                  "lit": "envelope"
                }
              ],
              "parts": [
                "envelope"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "folder_id",
                    "orig": "folderId",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "has_expired_recipient",
                    "orig": "hasExpiredRecipients",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by_column",
                    "orig": "orderByColumn",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by_direction",
                    "orig": "orderByDirection",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "desc"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "per_page",
                    "orig": "perPage",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "query",
                    "orig": "query",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "source",
                    "orig": "source",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "template_id",
                    "orig": "templateId",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "folder_id",
                  "has_expired_recipient",
                  "order_by_column",
                  "order_by_direction",
                  "page",
                  "per_page",
                  "query",
                  "source",
                  "status",
                  "template_id",
                  "type"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/envelope/{envelopeId}/audit-log",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "audit-log"
                }
              ],
              "parts": [
                "envelope",
                "{id}",
                "audit-log"
              ],
              "rename": {
                "param": {
                  "envelopeId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "envelopeId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "order_by_column",
                    "orig": "orderByColumn",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by_direction",
                    "orig": "orderByDirection",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "per_page",
                    "orig": "perPage",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "audit_log",
                "exist": [
                  "id",
                  "order_by_column",
                  "order_by_direction",
                  "page",
                  "per_page"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/envelope/{envelopeId}",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "envelope",
                "{id}"
              ],
              "rename": {
                "param": {
                  "envelopeId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "envelopeId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/envelope/{envelopeId}/audit-log/download",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "audit-log"
                },
                {
                  "lit": "download"
                }
              ],
              "parts": [
                "envelope",
                "{id}",
                "audit-log",
                "download"
              ],
              "rename": {
                "param": {
                  "envelopeId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "envelopeId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "audit_log_download",
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/envelope/{envelopeId}/certificate/download",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "certificate"
                },
                {
                  "lit": "download"
                }
              ],
              "parts": [
                "envelope",
                "{id}",
                "certificate",
                "download"
              ],
              "rename": {
                "param": {
                  "envelopeId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "envelopeId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "certificate_download",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "envelope_attachment": {
      "fields": [
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "envelopeId",
          "title": "Envelope Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "label",
          "title": "Label",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "envelope_attachment",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/attachment/create",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "attachment"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "envelope",
                "attachment",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/attachment/delete",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "attachment"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "envelope",
                "attachment",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/attachment/update",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "attachment"
                },
                {
                  "lit": "update"
                }
              ],
              "parts": [
                "envelope",
                "attachment",
                "update"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/envelope/attachment",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "attachment"
                }
              ],
              "parts": [
                "envelope",
                "attachment"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "envelope_id",
                    "orig": "envelopeId",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "token",
                    "orig": "token",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "envelope_id",
                  "token"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "envelope_field": {
      "fields": [
        {
          "name": "customText",
          "title": "Custom Text",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "envelopeId",
          "title": "Envelope Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "envelopeItemId",
          "title": "Envelope Item Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "fieldId",
          "title": "Field Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "fieldMeta",
          "title": "Field Meta",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "height",
          "title": "Height",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "inserted",
          "title": "Inserted",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "page",
          "title": "Page",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "positionX",
          "title": "Position X",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "positionY",
          "title": "Position Y",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "recipientId",
          "title": "Recipient Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "secondaryId",
          "title": "Secondary Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "width",
          "title": "Width",
          "type": "`$NUMBER`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "envelope_field",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/field/create-many",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "create-many"
                }
              ],
              "parts": [
                "envelope",
                "field",
                "create-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/field/delete",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "envelope",
                "field",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/field/update-many",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "update-many"
                }
              ],
              "parts": [
                "envelope",
                "field",
                "update-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/envelope/field/{fieldId}",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "field"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "envelope",
                "field",
                "{id}"
              ],
              "rename": {
                "param": {
                  "fieldId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "fieldId",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "envelope_item": {
      "fields": [
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "envelopeId",
          "title": "Envelope Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "envelopeItemId",
          "title": "Envelope Item Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "envelope_item",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/item/create-many",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "item"
                },
                {
                  "lit": "create-many"
                }
              ],
              "parts": [
                "envelope",
                "item",
                "create-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/item/delete",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "item"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "envelope",
                "item",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/item/update-many",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "item"
                },
                {
                  "lit": "update-many"
                }
              ],
              "parts": [
                "envelope",
                "item",
                "update-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/envelope/item/{envelopeItemId}/download",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "item"
                },
                {
                  "var": "item_id"
                },
                {
                  "lit": "download"
                }
              ],
              "parts": [
                "envelope",
                "item",
                "{item_id}",
                "download"
              ],
              "rename": {
                "param": {
                  "envelopeItemId": "item_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "item_id",
                    "orig": "envelopeItemId",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "version",
                    "orig": "version",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "signed"
                  }
                ]
              },
              "select": {
                "exist": [
                  "item_id",
                  "version"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "envelope_recipient": {
      "fields": [
        {
          "name": "authOptions",
          "title": "Auth Options",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "documentDeletedAt",
          "title": "Document Deleted At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "envelopeId",
          "title": "Envelope Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "expirationNotifiedAt",
          "title": "Expiration Notified At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "expired",
          "title": "Expired",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "expiresAt",
          "title": "Expires At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "fields",
          "title": "Fields",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "readStatus",
          "title": "Read Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "recipientId",
          "title": "Recipient Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "rejectionReason",
          "title": "Rejection Reason",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "role",
          "title": "Role",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "sendStatus",
          "title": "Send Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "signedAt",
          "title": "Signed At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "signingOrder",
          "title": "Signing Order",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "signingStatus",
          "title": "Signing Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "token",
          "title": "Token",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "envelope_recipient",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/recipient/{recipientId}/reject",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "recipient"
                },
                {
                  "var": "recipient_id"
                },
                {
                  "lit": "reject"
                }
              ],
              "parts": [
                "envelope",
                "recipient",
                "{recipient_id}",
                "reject"
              ],
              "rename": {
                "param": {
                  "recipientId": "recipient_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "recipient_id",
                    "orig": "recipientId",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "reject",
                "exist": [
                  "recipient_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/recipient/create-many",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "create-many"
                }
              ],
              "parts": [
                "envelope",
                "recipient",
                "create-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/recipient/delete",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "envelope",
                "recipient",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/envelope/recipient/update-many",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "update-many"
                }
              ],
              "parts": [
                "envelope",
                "recipient",
                "update-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/envelope/recipient/{recipientId}",
              "segments": [
                {
                  "lit": "envelope"
                },
                {
                  "lit": "recipient"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "envelope",
                "recipient",
                "{id}"
              ],
              "rename": {
                "param": {
                  "recipientId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "recipientId",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "folder": {
      "fields": [
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "parentId",
          "title": "Parent Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "pinned",
          "title": "Pinned",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "teamId",
          "title": "Team Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "userId",
          "title": "User Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "folder",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/folder/create",
              "segments": [
                {
                  "lit": "folder"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "folder",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "create"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/folder/delete",
              "segments": [
                {
                  "lit": "folder"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "folder",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "delete"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/folder/update",
              "segments": [
                {
                  "lit": "folder"
                },
                {
                  "lit": "update"
                }
              ],
              "parts": [
                "folder",
                "update"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "update"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/folder",
              "segments": [
                {
                  "lit": "folder"
                }
              ],
              "parts": [
                "folder"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "parent_id",
                    "orig": "parentId",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "per_page",
                    "orig": "perPage",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "query",
                    "orig": "query",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "page",
                  "parent_id",
                  "per_page",
                  "query",
                  "type"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "template": {
      "fields": [
        {
          "name": "attachments",
          "title": "Attachments",
          "type": "`$ARRAY`"
        },
        {
          "name": "authOptions",
          "title": "Auth Options",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "directLink",
          "title": "Direct Link",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "directRecipientId",
          "title": "Direct Recipient Id",
          "type": "`$NUMBER`"
        },
        {
          "name": "directTemplateRecipientId",
          "title": "Direct Template Recipient Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "enabled",
          "title": "Enabled",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "envelopeId",
          "title": "Envelope Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "envelopeItems",
          "title": "Envelope Items",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "externalId",
          "title": "External Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true,
          "op": {
            "create": {
              "type": [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`"
                ]
              ]
            }
          }
        },
        {
          "name": "fields",
          "title": "Fields",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "folder",
          "title": "Folder",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "folderId",
          "title": "Folder Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "globalAccessAuth",
          "title": "Global Access Auth",
          "type": "`$ARRAY`"
        },
        {
          "name": "globalActionAuth",
          "title": "Global Action Auth",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "meta",
          "title": "Meta",
          "type": "`$OBJECT`"
        },
        {
          "name": "publicDescription",
          "title": "Public Description",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "publicTitle",
          "title": "Public Title",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "recipients",
          "title": "Recipients",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "team",
          "title": "Team",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "teamId",
          "title": "Team Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "template",
          "title": "Template",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "templateDocumentData",
          "title": "Template Document Data",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "templateDocumentDataId",
          "title": "Template Document Data Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "templateId",
          "title": "Template Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "templateMeta",
          "title": "Template Meta",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "token",
          "title": "Token",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "uploadUrl",
          "title": "Upload Url",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "useLegacyFieldInsertion",
          "title": "Use Legacy Field Insertion",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "user",
          "title": "User",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "userId",
          "title": "User Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          }
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "template",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/create",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "template",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "create"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/create/beta",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "create"
                },
                {
                  "lit": "beta"
                }
              ],
              "parts": [
                "template",
                "create",
                "beta"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.template`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/delete",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "template",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "delete"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/direct/create",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "direct"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "template",
                "direct",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/direct/delete",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "direct"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "template",
                "direct",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/direct/toggle",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "direct"
                },
                {
                  "lit": "toggle"
                }
              ],
              "parts": [
                "template",
                "direct",
                "toggle"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/duplicate",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "duplicate"
                }
              ],
              "parts": [
                "template",
                "duplicate"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "duplicate"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/get-many",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "get-many"
                }
              ],
              "parts": [
                "template",
                "get-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "get_many"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/update",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "update"
                }
              ],
              "parts": [
                "template",
                "update"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "update"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/use",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "use"
                }
              ],
              "parts": [
                "template",
                "use"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "use"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/template",
              "segments": [
                {
                  "lit": "template"
                }
              ],
              "parts": [
                "template"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "folder_id",
                    "orig": "folderId",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "per_page",
                    "orig": "perPage",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "query",
                    "orig": "query",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "folder_id",
                  "page",
                  "per_page",
                  "query",
                  "type"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/template/{templateId}",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "template",
                "{id}"
              ],
              "rename": {
                "param": {
                  "templateId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "templateId",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "template_field": {
      "fields": [
        {
          "name": "customText",
          "title": "Custom Text",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "documentId",
          "title": "Document Id",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "envelopeId",
          "title": "Envelope Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "envelopeItemId",
          "title": "Envelope Item Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "field",
          "title": "Field",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "fieldId",
          "title": "Field Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "fieldMeta",
          "title": "Field Meta",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "fields",
          "title": "Fields",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "height",
          "title": "Height",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "inserted",
          "title": "Inserted",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "page",
          "title": "Page",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "positionX",
          "title": "Position X",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "positionY",
          "title": "Position Y",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "recipientId",
          "title": "Recipient Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "secondaryId",
          "title": "Secondary Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "templateId",
          "title": "Template Id",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ],
          "op": {
            "create": {
              "req": true,
              "type": "`$NUMBER`"
            }
          }
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "width",
          "title": "Width",
          "type": "`$NUMBER`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "template_field",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/field/create",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "template",
                "field",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/field/create-many",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "create-many"
                }
              ],
              "parts": [
                "template",
                "field",
                "create-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/field/delete",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "template",
                "field",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/field/update",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "update"
                }
              ],
              "parts": [
                "template",
                "field",
                "update"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/field/update-many",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "field"
                },
                {
                  "lit": "update-many"
                }
              ],
              "parts": [
                "template",
                "field",
                "update-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/template/field/{fieldId}",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "field"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "template",
                "field",
                "{id}"
              ],
              "rename": {
                "param": {
                  "fieldId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "fieldId",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "template_recipient": {
      "fields": [
        {
          "name": "authOptions",
          "title": "Auth Options",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "documentDeletedAt",
          "title": "Document Deleted At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "documentId",
          "title": "Document Id",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "envelopeId",
          "title": "Envelope Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "expirationNotifiedAt",
          "title": "Expiration Notified At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "expired",
          "title": "Expired",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "expiresAt",
          "title": "Expires At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "fields",
          "title": "Fields",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "readStatus",
          "title": "Read Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "recipient",
          "title": "Recipient",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "recipientId",
          "title": "Recipient Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "recipients",
          "title": "Recipients",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "rejectionReason",
          "title": "Rejection Reason",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "role",
          "title": "Role",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "sendStatus",
          "title": "Send Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "signedAt",
          "title": "Signed At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "signingOrder",
          "title": "Signing Order",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ],
          "req": true
        },
        {
          "name": "signingStatus",
          "title": "Signing Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "templateId",
          "title": "Template Id",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ],
          "op": {
            "create": {
              "req": true,
              "type": "`$NUMBER`"
            }
          }
        },
        {
          "name": "token",
          "title": "Token",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "template_recipient",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/recipient/create",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "template",
                "recipient",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/recipient/create-many",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "create-many"
                }
              ],
              "parts": [
                "template",
                "recipient",
                "create-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/recipient/delete",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "template",
                "recipient",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/recipient/update",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "update"
                }
              ],
              "parts": [
                "template",
                "recipient",
                "update"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/template/recipient/update-many",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "recipient"
                },
                {
                  "lit": "update-many"
                }
              ],
              "parts": [
                "template",
                "recipient",
                "update-many"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/template/recipient/{recipientId}",
              "segments": [
                {
                  "lit": "template"
                },
                {
                  "lit": "recipient"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "template",
                "recipient",
                "{id}"
              ],
              "rename": {
                "param": {
                  "recipientId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "recipientId",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

