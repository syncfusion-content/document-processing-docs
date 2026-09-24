---
layout: post
title: Collaborative Editing in React PDF Viewer with Node.js | Syncfusion
description: Learn how to implement React PDF Viewer collaborative editing with the Syncfusion Collaborator client and Node.js server packages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in React PDF Viewer with Node.js

This topic explains how to connect the React PDF Viewer to the Node.js Collaboration Server. The common Collaborator server provides the WebSocket transport, Redis operation storage, room management, synchronization, and save worker. Node.js currently supports collaborative editing for PDF Viewer.

## Prerequisites

- A React PDF Viewer application.
- Node.js 18 or later.
- A Redis instance.

## Client-side integration

### 1. Install the client package

```bash
npm install @syncfusion/ej2-collaborator
```

### 2. Add the PDF Viewer adapter

Create `PdfViewerAdapter.ts` in the React application. It implements `ICollaborationProvider` and bridges the PDF Viewer collaborative editing handler with the common Collaboration Client. The adapter must load the PDF state from the application's `ImportFile` endpoint and apply remote actions to the viewer.

Use the complete [PDF Viewer adapter example](../../../../Collaborator/getting-started/getting-started-with-node) as the reference implementation. The adapter creates a connection ID, posts to `/api/CollaborativeEditing/ImportFile`, updates the PDF Viewer room information, sends operations through the PDF Viewer collaborative editing handler, filters its own broadcast operations, and applies remote actions by type.

```ts
import { PdfViewer, CollaborativeEditingHandler } from '@syncfusion/ej2-react-pdfviewer';
import { ICollaborationActionData, ICollaborationProvider } from '@syncfusion/ej2-collaborator';

export class PdfViewerAdapter implements ICollaborationProvider {
    private collaborativeEditingHandler: CollaborativeEditingHandler;
    private pendingOperations: any[] = [];

    public constructor(
        private viewer: PdfViewer,
        private serviceUrl: string,
        private currentUser: string
    ) {
        this.collaborativeEditingHandler = new CollaborativeEditingHandler(viewer, currentUser);
    }

    public async loadFromServer(fileName = 'document.pdf'): Promise<string> {
        const roomName = new URLSearchParams(window.location.search).get('id')
            ?? Math.random().toString(32).slice(2);
        const response = await fetch(`${this.serviceUrl}api/CollaborativeEditing/ImportFile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roomName, fileName, currentUser: this.currentUser })
        });
        if (!response.ok) {
            throw new Error(`Failed to join collaboration room: ${response.statusText}`);
        }
        const state = await response.json();
        this.collaborativeEditingHandler.updateRoomInfo(
            roomName,
            state.version ?? 0,
            `${this.serviceUrl}api/CollaborativeEditing/`
        );
        this.pendingOperations = state.operations || [];
        for (const operation of this.pendingOperations) {
            this.collaborativeEditingHandler.applyRemoteAction(operation.type, operation);
        }
        return roomName;
    }

    public applyRemoteAction(action: string, data: ICollaborationActionData): void {
        const payload = data.payload ?? data;
        if (action === 'addUser' || action === 'removeUser') {
            console.log(action, payload);
            return;
        }
        if (payload.type === 'annotation' || payload.type === 'formField' ||
            payload.type === 'formFieldAction' || payload.type === 'pageOrganizer') {
            this.collaborativeEditingHandler.applyRemoteAction(payload.type, payload);
        }
    }

    public sendActionToServer(operations: unknown[]): Promise<void> {
        return this.collaborativeEditingHandler.sendActionToServer(operations);
    }
}
```

### 3. Initialize the Collaboration Client

Create the adapter and join the room after the document has loaded:

```ts
import React, { useRef } from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
    BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch,
    FormFields, FormDesigner, PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { CollaborationClient, UserInfo } from '@syncfusion/ej2-collaborator';
import { PdfViewerAdapter } from './PdfViewerAdapter';

const serviceUrl = 'http://localhost:8080/';
export default function App() {
    const viewerRef = useRef<any>(null);
    const adapterRef = useRef<PdfViewerAdapter | null>(null);
    const clientRef = useRef<CollaborationClient | null>(null);
    const currentUser = 'John';

    const resourcesLoaded = async () => {
        const viewer = viewerRef.current;
        const adapter = new PdfViewerAdapter(viewer, serviceUrl, currentUser);
        adapterRef.current = adapter;
        const client = new CollaborationClient(adapter, {
            serviceUrl,
            connectionType: 'websocket',
            currentUser,
            onUserJoined: (user: UserInfo) => console.log('User joined', user),
            onUserLeft: (user: UserInfo) => console.log('User left', user)
        });
        clientRef.current = client;
        const roomName = await adapter.loadFromServer();
        await client.joinRoomAsync(roomName);
        await loadCurrentPdf(viewer, roomName);
    };

    const documentChanged = (args: any) => {
        const operation = operationFromChange(args);
        if (operation) {
            void adapterRef.current?.sendActionToServer([operation]);
        }
    };

    return <PdfViewerComponent
        ref={viewerRef}
        enableCollaborativeEditing={true}
        resourcesLoaded={resourcesLoaded}
        documentChanged={documentChanged}
        resourceUrl="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib">
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
            BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields,
            FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>;
}

function operationFromChange(args: any): any | null {
    if ('annotationId' in args && args.action) return { action: args.action, annotation: args.annotationId, type: 'annotation', isRedacted: args.isRedacted };
    if ('formField' in args && !('fieldName' in args)) return { action: args.action, formField: args.formField, type: 'formField' };
    if ('fieldName' in args) return { action: 'formFieldUpdate', data: args, type: 'formField' };
    if ('organizePageActions' in args && args.savedDocument !== null) return { action: 'pageOrganizerUpdate', data: args.organizePageActions, type: 'pageOrganizer' };
    return null;
}

async function loadCurrentPdf(viewer: any, roomName: string): Promise<void> {
    const response = await fetch(`${serviceUrl}api/CollaborativeEditing/GetPDFDocument?roomName=${encodeURIComponent(roomName)}`);
    const result = await response.json();
    const binary = atob(result.content);
    viewer.load(Uint8Array.from(binary, character => character.charCodeAt(0)), '');
}
```

The running sample initializes this flow from the PDF Viewer's `resourcesLoaded` event. It keeps the adapter and client in React refs, loads the room, joins it, and then loads the current PDF from `GetPDFDocument`.

### 4. Load the current PDF document

`GetPDFDocument` returns Base64-encoded PDF content. Decode it and load it into the viewer after joining the room:

```ts
const response = await fetch(
    `${serviceUrl}api/CollaborativeEditing/GetPDFDocument?roomName=${encodeURIComponent(roomName)}`
);
const result = await response.json();
const binary = atob(result.content);
const bytes = Uint8Array.from(binary, character => character.charCodeAt(0));
viewer.load(bytes, '');
```

## Server-side integration

### 1. Install the Collaboration Server package

```bash
npm install ej2-collaborator-server
```

### 2. Add the PDF Viewer server adapter

Create `adapters/PdfViewerAdapter.js`. The adapter stores the complete `CollaborativeEditingRequest` envelope, keeps PDF Viewer actions unchanged during synchronization, and replays pending operations against the source PDF during save:

```js
const { PdfDocument, PdfTextBoxField, PdfCheckBoxField, PdfRadioButtonListField,
    PdfComboBoxField, PdfListBoxField, PdfPageSettings, PdfPageImportOptions,
    PdfRotationAngle, DataFormat } = require('@syncfusion/ej2-pdf');
const { DOMParser, XMLSerializer } = require('@xmldom/xmldom');

class PdfViewerAdapter {
    mapControlToGenericAction(controlAction) {
        return {
            roomName: controlAction.roomName,
            connectionId: controlAction.connectionId,
            currentUser: controlAction.userName || controlAction.currentUser || '',
            version: controlAction.currentVersion || 0,
            data: JSON.stringify(controlAction)
        };
    }

    mapGenericToControlAction(collaborationAction) {
        return collaborationAction.data ? JSON.parse(collaborationAction.data) : {};
    }

    transformOperations(actions) {
        // PDF Viewer uses independent snapshots and last-write-wins for page organizer actions.
    }

    async processSaveRequestAsync(request) {
        const pdfResult = await this.storageService.getPdfAsync(
            request.fileName || 'document.pdf', request.roomName);
        const masterPdf = Buffer.from(pdfResult.content, 'base64');
        const document = new PdfDocument(masterPdf);

        for (const operation of this.extractValidOperations(request.actions)) {
            await this.applyOperationToDocument(document, operation);
        }

        const updatedPdf = await document.save();
        await this.storageService.storePdfAsync(
            Buffer.from(updatedPdf), request.fileName || 'document.pdf', request.roomName);
    }

    // Implement extractValidOperations and applyOperationToDocument for
    // annotation XFDF, form fields, form field actions, and page organizer actions.
}

module.exports = PdfViewerAdapter;
```

The adapter must also initialize `DOMParser` and `XMLSerializer` from `@xmldom/xmldom` for XFDF parsing. Its `applyOperationToDocument` implementation uses `@syncfusion/ej2-pdf` to import XFDF annotations, update or create form fields, and apply page deletion, reordering, rotation, insertion, and copy actions. The common server handles Redis, transport, room membership, versioning, and the background save worker.

### 3. Add the collaboration routes

Create `controllers/collaborative-editing-controller.js` and register the routes used by the React adapter. The running implementation has these behaviors:

```js
function registerRoutes(app, actionService, adapter, transport) {
    app.post('/api/CollaborativeEditing/ImportFile', async (req, res) => {
        const { roomName } = req.body;
        if (!roomName) {
            return res.status(400).json({ error: 'Room name is required' });
        }

        const allActions = await actionService.getPendingOperations(roomName, 0, -1);
        const operations = (allActions || []).map(action =>
            adapter.mapGenericToControlAction(action)
        );
        return res.json({ roomName, version: allActions.length, operations });
    });

    app.post('/api/CollaborativeEditing/UpdateAction', async (req, res) => {
        const request = req.body;
        if (!request.roomName || !request.type) {
            return res.status(400).json({ error: 'RoomName and Type are required' });
        }

        const collaborationAction = adapter.mapControlToGenericAction(request);
        await actionService.addOperation(collaborationAction, adapter);

        const broadcastRequest = {
            roomName: request.roomName,
            connectionId: request.connectionId,
            userName: request.userName,
            type: request.type,
            currentVersion: request.currentVersion,
            data: request.data
        };
        await transport.broadcastToRoom(request.roomName, {
            event: 'action',
            data: broadcastRequest
        });
        return res.json({ success: true, data: request.data });
    });
}
```

The production route validates the type-specific payload before storing it. Supported types are `annotation` with `data.xfdfData`, `formField` with `data.jsonData`, `formFieldAction` with `data.changes`, and `pageOrganizer` with `data`. It broadcasts the original clean request so clients receive strongly typed data.

Register the PDF document route as well. It calls the application's PDF storage service and returns `{ success, fileName, roomName, content, contentLength, isDefault }`, where `content` is Base64 encoded:

```js
function registerPdfDocumentRoutes(app, pdfStorageService) {
    app.get('/api/CollaborativeEditing/GetPDFDocument', async (req, res) => {
        const result = await pdfStorageService.getPdfAsync(
            req.query.fileName,
            req.query.roomName
        );
        return result.success ? res.json(result) : res.status(404).json(result);
    });
}
```

### 4. Create and start the Collaboration Server

```js
const cors = require('cors');
const { CollaborationServer } = require('ej2-collaborator-server');
const PdfViewerAdapter = require('./adapters/PdfViewerAdapter');

const pdfStorageService = new PdfStorageService();
const adapter = new PdfViewerAdapter({ storageService: pdfStorageService });
const server = new CollaborationServer({
    port: 8080,
    redis: {
        host: '<redis-host>',
        port: 6379,
        username: 'default',
        password: '<redis-password>',
        tls: {}
    },
    adapter
});

server.app.use(cors());
registerRoutes(server.app, server.actionService, adapter, server);
registerPdfDocumentRoutes(server.app, pdfStorageService);
server.start();
```

The server exposes the collaboration WebSocket endpoint and the REST routes used by the PDF Viewer adapter. Register the document routes before calling `server.start()`.

## Redis configuration

Redis is required by `ej2-collaborator-server`. Configure the host, port, credentials, and TLS options in the `CollaborationServer` constructor. Do not add a separate Socket.IO Redis adapter or implement the operation queue in the PDF Viewer application.

## See Also

- [Getting Started with Node.js Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-node)
- [Collaborative editing with ASP.NET Core](./using-redis-cache-asp-net-core)