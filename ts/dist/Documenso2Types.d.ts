export interface Document {
    attachments?: any[];
    authOptions: Record<string, any> | null;
    completedAt: string | null;
    createdAt: string;
    data: Record<string, any>;
    deletedAt: string | null;
    document: Record<string, any>;
    documentData: Record<string, any>;
    documentDataId: string;
    documentId: number;
    documentMeta: Record<string, any>;
    envelopeId: string;
    envelopeItems: any[];
    externalId: string | null;
    fields: any[];
    folder: Record<string, any> | null;
    folderId: string | null;
    formValues: Record<string, any> | null;
    globalAccessAuth?: any[];
    globalActionAuth?: any[];
    id: number;
    internalVersion: number;
    meta?: Record<string, any>;
    recipients: any[];
    source: string;
    status: string;
    success: boolean;
    team: Record<string, any> | null;
    teamId: number;
    templateId?: number | null;
    title: string;
    updatedAt: string;
    uploadUrl: string;
    useLegacyFieldInsertion: boolean;
    user: Record<string, any>;
    userId: number;
    visibility: string;
}
export interface DocumentLoadMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface DocumentListMatch {
    folder_id?: string;
    has_expired_recipient?: boolean;
    order_by_column?: string;
    order_by_direction?: string;
    page?: number;
    per_page?: number;
    query?: string;
    source?: string;
    status?: string;
    template_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface DocumentCreateData {
    attachments?: any[];
    authOptions: Record<string, any> | null;
    completedAt: string | null;
    createdAt: string;
    data: Record<string, any>;
    deletedAt: string | null;
    document: Record<string, any>;
    documentData: Record<string, any>;
    documentDataId: string;
    documentId: number;
    documentMeta: Record<string, any>;
    envelopeId: string;
    envelopeItems: any[];
    externalId: string | null;
    fields: any[];
    folder: Record<string, any> | null;
    folderId: string | null;
    formValues: Record<string, any> | null;
    globalAccessAuth?: any[];
    globalActionAuth?: any[];
    id: number;
    internalVersion: number;
    meta?: Record<string, any>;
    recipients: any[];
    source: string;
    status: string;
    success: boolean;
    team: Record<string, any> | null;
    teamId: number;
    templateId?: number | null;
    title: string;
    updatedAt: string;
    uploadUrl: string;
    useLegacyFieldInsertion: boolean;
    user: Record<string, any>;
    userId: number;
    visibility: string;
    $action?: string;
    [action: string]: any;
}
export interface DocumentField {
    customText: string;
    documentId?: number | null;
    envelopeId: string;
    envelopeItemId: string;
    field: any;
    fieldId: number;
    fieldMeta: any;
    fields: any[];
    height: number;
    id: number;
    inserted: boolean;
    page: number;
    positionX: any;
    positionY: any;
    recipientId: number;
    secondaryId: string;
    success: boolean;
    templateId?: number | null;
    type: string;
    width: number;
}
export interface DocumentFieldLoadMatch {
    id: number;
}
export interface DocumentFieldCreateData {
    customText: string;
    documentId?: number | null;
    envelopeId: string;
    envelopeItemId: string;
    field: any;
    fieldId: number;
    fieldMeta: any;
    fields: any[];
    height: number;
    id: number;
    inserted: boolean;
    page: number;
    positionX: any;
    positionY: any;
    recipientId: number;
    secondaryId: string;
    success: boolean;
    templateId?: number | null;
    type: string;
    width: number;
}
export interface DocumentRecipient {
    authOptions: Record<string, any> | null;
    documentDeletedAt: string | null;
    documentId?: number | null;
    email: string;
    envelopeId: string;
    expirationNotifiedAt: string | null;
    expired: string | null;
    expiresAt: string | null;
    fields: any[];
    id: number;
    name: string;
    readStatus: string;
    recipient: Record<string, any>;
    recipientId: number;
    recipients: any[];
    rejectionReason: string | null;
    role: string;
    sendStatus: string;
    signedAt: string | null;
    signingOrder: number | null;
    signingStatus: string;
    success: boolean;
    templateId?: number | null;
    token: string;
}
export interface DocumentRecipientLoadMatch {
    id: number;
}
export interface DocumentRecipientCreateData {
    authOptions: Record<string, any> | null;
    documentDeletedAt: string | null;
    documentId?: number | null;
    email: string;
    envelopeId: string;
    expirationNotifiedAt: string | null;
    expired: string | null;
    expiresAt: string | null;
    fields: any[];
    id: number;
    name: string;
    readStatus: string;
    recipient: Record<string, any>;
    recipientId: number;
    recipients: any[];
    rejectionReason: string | null;
    role: string;
    sendStatus: string;
    signedAt: string | null;
    signingOrder: number | null;
    signingStatus: string;
    success: boolean;
    templateId?: number | null;
    token: string;
}
export interface Embedding {
}
export interface EmbeddingCreateData {
    $action?: string;
    [action: string]: any;
}
export interface Envelope {
    authOptions: Record<string, any> | null;
    completedAt: string | null;
    createdAt: string;
    deletedAt: string | null;
    directLink: Record<string, any> | null;
    documentMeta: Record<string, any>;
    envelopeItems: any[];
    externalId: string | null;
    fields: any[];
    folderId: string | null;
    formValues: Record<string, any> | null;
    id: string;
    internalVersion: number;
    publicDescription: string;
    publicTitle: string;
    recipients: any[];
    secondaryId: string;
    source: string;
    status: string;
    team: Record<string, any>;
    teamId: number;
    templateId: number | null;
    templateType: string;
    title: string;
    type: string;
    updatedAt: string;
    user: Record<string, any>;
    userId: number;
    visibility: string;
}
export interface EnvelopeLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface EnvelopeListMatch {
    folder_id?: string;
    has_expired_recipient?: boolean;
    order_by_column?: string;
    order_by_direction?: string;
    page?: number;
    per_page?: number;
    query?: string;
    source?: string;
    status?: string;
    template_id?: number;
    type?: string;
    $action?: string;
    [action: string]: any;
}
export interface EnvelopeCreateData {
    authOptions: Record<string, any> | null;
    completedAt: string | null;
    createdAt: string;
    deletedAt: string | null;
    directLink: Record<string, any> | null;
    documentMeta: Record<string, any>;
    envelopeItems: any[];
    externalId: string | null;
    fields: any[];
    folderId: string | null;
    formValues: Record<string, any> | null;
    id: string;
    internalVersion: number;
    publicDescription: string;
    publicTitle: string;
    recipients: any[];
    secondaryId: string;
    source: string;
    status: string;
    team: Record<string, any>;
    teamId: number;
    templateId: number | null;
    templateType: string;
    title: string;
    type: string;
    updatedAt: string;
    user: Record<string, any>;
    userId: number;
    visibility: string;
    $action?: string;
    [action: string]: any;
}
export interface EnvelopeAttachment {
    data: Record<string, any>;
    envelopeId: string;
    id: string;
    label: string;
    success: boolean;
    type: string;
}
export interface EnvelopeAttachmentListMatch {
    envelope_id: string;
    token?: string;
}
export interface EnvelopeAttachmentCreateData {
    data: Record<string, any>;
    envelopeId: string;
    id: string;
    label: string;
    success: boolean;
    type: string;
}
export interface EnvelopeField {
    customText: string;
    data: any[];
    envelopeId: string;
    envelopeItemId: string;
    fieldId: number;
    fieldMeta: any;
    height: number;
    id: number;
    inserted: boolean;
    page: number;
    positionX: any;
    positionY: any;
    recipientId: number;
    secondaryId: string;
    success: boolean;
    type: string;
    width: number;
}
export interface EnvelopeFieldLoadMatch {
    id: number;
}
export interface EnvelopeFieldCreateData {
    customText: string;
    data: any[];
    envelopeId: string;
    envelopeItemId: string;
    fieldId: number;
    fieldMeta: any;
    height: number;
    id: number;
    inserted: boolean;
    page: number;
    positionX: any;
    positionY: any;
    recipientId: number;
    secondaryId: string;
    success: boolean;
    type: string;
    width: number;
}
export interface EnvelopeItem {
    data: any[];
    envelopeId: string;
    envelopeItemId: string;
    success: boolean;
}
export interface EnvelopeItemLoadMatch {
    item_id: string;
    version?: string;
}
export interface EnvelopeItemCreateData {
    data: any[];
    envelopeId: string;
    envelopeItemId: string;
    success: boolean;
}
export interface EnvelopeRecipient {
    authOptions: Record<string, any> | null;
    data: any[];
    documentDeletedAt: string | null;
    email: string;
    envelopeId: string;
    expirationNotifiedAt: string | null;
    expired: string | null;
    expiresAt: string | null;
    fields: any[];
    id: number;
    name: string;
    readStatus: string;
    recipientId: number;
    rejectionReason: string | null;
    role: string;
    sendStatus: string;
    signedAt: string | null;
    signingOrder: number | null;
    signingStatus: string;
    success: boolean;
    token: string;
}
export interface EnvelopeRecipientLoadMatch {
    id: number;
}
export interface EnvelopeRecipientCreateData {
    authOptions: Record<string, any> | null;
    data: any[];
    documentDeletedAt: string | null;
    email: string;
    envelopeId: string;
    expirationNotifiedAt: string | null;
    expired: string | null;
    expiresAt: string | null;
    fields: any[];
    id: number;
    name: string;
    readStatus: string;
    recipientId: number;
    rejectionReason: string | null;
    role: string;
    sendStatus: string;
    signedAt: string | null;
    signingOrder: number | null;
    signingStatus: string;
    success: boolean;
    token: string;
    $action?: string;
    [action: string]: any;
}
export interface Folder {
    createdAt: string;
    id: string;
    name: string;
    parentId: string | null;
    pinned: boolean;
    teamId: number;
    type: string;
    updatedAt: string;
    userId: number;
    visibility: string;
}
export interface FolderListMatch {
    page?: number;
    parent_id?: string;
    per_page?: number;
    query?: string;
    type?: string;
}
export interface FolderCreateData {
    createdAt: string;
    id: string;
    name: string;
    parentId: string | null;
    pinned: boolean;
    teamId: number;
    type: string;
    updatedAt: string;
    userId: number;
    visibility: string;
    $action?: string;
    [action: string]: any;
}
export interface Template {
    attachments?: any[];
    authOptions: Record<string, any> | null;
    createdAt: string;
    directLink: Record<string, any> | null;
    directRecipientId?: number;
    directTemplateRecipientId: number;
    enabled: boolean;
    envelopeId: string;
    envelopeItems: any[];
    externalId: string | null;
    fields: any[];
    folder: Record<string, any> | null;
    folderId: string | null;
    globalAccessAuth?: any[];
    globalActionAuth?: any[];
    id: number;
    meta?: Record<string, any>;
    publicDescription: string;
    publicTitle: string;
    recipients: any[];
    success: boolean;
    team: Record<string, any> | null;
    teamId: number;
    template: Record<string, any>;
    templateDocumentData: Record<string, any>;
    templateDocumentDataId: string;
    templateId: number;
    templateMeta: Record<string, any>;
    title: string;
    token: string;
    type: string;
    updatedAt: string;
    uploadUrl: string;
    useLegacyFieldInsertion: boolean;
    user: Record<string, any>;
    userId: number;
    visibility: string;
}
export interface TemplateLoadMatch {
    id: number;
}
export interface TemplateListMatch {
    folder_id?: string;
    page?: number;
    per_page?: number;
    query?: string;
    type?: string;
}
export interface TemplateCreateData {
    attachments?: any[];
    authOptions: Record<string, any> | null;
    createdAt: string;
    directLink: Record<string, any> | null;
    directRecipientId?: number;
    directTemplateRecipientId: number;
    enabled: boolean;
    envelopeId: string;
    envelopeItems: any[];
    externalId: string | null;
    fields: any[];
    folder: Record<string, any> | null;
    folderId: string | null;
    globalAccessAuth?: any[];
    globalActionAuth?: any[];
    id: number;
    meta?: Record<string, any>;
    publicDescription: string;
    publicTitle: string;
    recipients: any[];
    success: boolean;
    team: Record<string, any> | null;
    teamId: number;
    template: Record<string, any>;
    templateDocumentData: Record<string, any>;
    templateDocumentDataId: string;
    templateId: number;
    templateMeta: Record<string, any>;
    title: string;
    token: string;
    type: string;
    updatedAt: string;
    uploadUrl: string;
    useLegacyFieldInsertion: boolean;
    user: Record<string, any>;
    userId: number;
    visibility: string;
    $action?: string;
    [action: string]: any;
}
export interface TemplateField {
    customText: string;
    documentId?: number | null;
    envelopeId: string;
    envelopeItemId: string;
    field: any;
    fieldId: number;
    fieldMeta: any;
    fields: any[];
    height: number;
    id: number;
    inserted: boolean;
    page: number;
    positionX: any;
    positionY: any;
    recipientId: number;
    secondaryId: string;
    success: boolean;
    templateId?: number | null;
    type: string;
    width: number;
}
export interface TemplateFieldLoadMatch {
    id: number;
}
export interface TemplateFieldCreateData {
    customText: string;
    documentId?: number | null;
    envelopeId: string;
    envelopeItemId: string;
    field: any;
    fieldId: number;
    fieldMeta: any;
    fields: any[];
    height: number;
    id: number;
    inserted: boolean;
    page: number;
    positionX: any;
    positionY: any;
    recipientId: number;
    secondaryId: string;
    success: boolean;
    templateId?: number | null;
    type: string;
    width: number;
}
export interface TemplateRecipient {
    authOptions: Record<string, any> | null;
    documentDeletedAt: string | null;
    documentId?: number | null;
    email: string;
    envelopeId: string;
    expirationNotifiedAt: string | null;
    expired: string | null;
    expiresAt: string | null;
    fields: any[];
    id: number;
    name: string;
    readStatus: string;
    recipient: Record<string, any>;
    recipientId: number;
    recipients: any[];
    rejectionReason: string | null;
    role: string;
    sendStatus: string;
    signedAt: string | null;
    signingOrder: number | null;
    signingStatus: string;
    success: boolean;
    templateId?: number | null;
    token: string;
}
export interface TemplateRecipientLoadMatch {
    id: number;
}
export interface TemplateRecipientCreateData {
    authOptions: Record<string, any> | null;
    documentDeletedAt: string | null;
    documentId?: number | null;
    email: string;
    envelopeId: string;
    expirationNotifiedAt: string | null;
    expired: string | null;
    expiresAt: string | null;
    fields: any[];
    id: number;
    name: string;
    readStatus: string;
    recipient: Record<string, any>;
    recipientId: number;
    recipients: any[];
    rejectionReason: string | null;
    role: string;
    sendStatus: string;
    signedAt: string | null;
    signingOrder: number | null;
    signingStatus: string;
    success: boolean;
    templateId?: number | null;
    token: string;
}
