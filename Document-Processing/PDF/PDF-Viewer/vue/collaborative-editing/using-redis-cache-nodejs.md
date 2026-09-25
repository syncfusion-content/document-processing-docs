---
layout: post
title: Collaborative Editing in Vue PDF Viewer with Node.js | Syncfusion
description: Learn how to implement Vue PDF Viewer collaborative editing with the Syncfusion Collaborator client and Node.js server packages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in Vue PDF Viewer with Node.js

This topic explains how to connect the Vue PDF Viewer to the Node.js Collaboration Server. The server provides WebSocket communication, Redis operation storage, room management, synchronization, and save processing. Node.js collaborative editing currently supports PDF Viewer.

## Prerequisites

- A Vue PDF Viewer application.
- Node.js 18 or later.
- A Redis instance.

## Client-side integration

### 1. Install the client packages

{% tabs %}
{% highlight bash tabtitle="Shell" %}
{% raw %}
npm install ej2-collaborator-server
{% endraw %}
{% endhighlight %}
{% endtabs %}

### 2. Add the PDF Viewer adapter

Create `pdfViewerAdapter.ts` with the following client adapter:

{% tabs %}
{% highlight ts tabtitle="TS" %}
{% raw %}
import { PdfViewer, CollaborativeEditingHandler } from '@syncfusion/ej2-vue-pdfviewer';
import { ICollaborationProvider, ICollaborationActionData } from '@syncfusion/ej2-collaborator';

export class PdfViewerAdapter implements ICollaborationProvider {
    private collaborativeEditingHandler: CollaborativeEditingHandler;
    private fileName: string = '';
    public currentRoomName: string = '';
    private isDocumentLoaded: boolean = false;
    private currentUser: string = '';
    private pendingOperations: any;

    constructor(
        private viewer: PdfViewer,
        private serviceUrl: string,
        currentUser: string
    ) {
        this.currentUser = currentUser;
        this.collaborativeEditingHandler = new CollaborativeEditingHandler(viewer, currentUser);
    }

    public async loadFromServer(fileName?: string): Promise<string> {
        this.isDocumentLoaded = false;
        this.fileName = fileName || 'document.pdf';
        const roomName: string = this.getRoomName();
        this.currentRoomName = roomName;
        const response = await fetch(`${this.serviceUrl}api/CollaborativeEditing/ImportFile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roomName, fileName: this.fileName, currentUser: this.currentUser })
        });
        if (!response.ok) throw new Error(`Failed to join collaboration room: ${response.statusText}`);
        await this.open(await response.text(), roomName);
        return roomName;
    }

    public async open(responseText: string, roomName: string): Promise<void> {
        const data: any = JSON.parse(responseText);
        const version = data.version || data.currentVersion || 0;
        this.collaborativeEditingHandler.updateRoomInfo(roomName, version, `${this.serviceUrl}api/CollaborativeEditing/`);
        this.pendingOperations = data.operations;
        if (data.operations && data.operations.length > 0) {
            for (const op of data.operations) {
                this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
            }
        }
        this.isDocumentLoaded = true;
    }

    public async sendActionToServer(operations: any[]): Promise<void> {
        if (!operations || operations.length === 0) {
            console.warn('[PdfViewerAdapter] No operations to send');
            return;
        }
        await this.collaborativeEditingHandler.sendActionToServer(operations);
    }

    public applyRemoteAction(action: string, data: ICollaborationActionData): void {
        if (action === 'addUser') {
            if ((data as any).payload.length > 0) {
                ((data as any).payload as any[]).forEach((user: any) => {
                    user.image = this.getUserImage(user.currentUser);
                });
            } else {
                (data as any).payload.image = this.getUserImage((data as any).payload.currentUser);
            }
        } else if (action === 'connectionId') {
            data.payload = { payload: data.payload, image: this.getUserImage(this.currentUser) } as any;
        }
        this.collaborativeEditingHandler.applyRemoteAction(action, data.payload);
    }

    private getRoomName(fileName?: string): string {
        if (typeof window !== 'undefined') {
            const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
            let roomId: string | null = urlParams.get('id');
            if (!roomId) {
                roomId = Math.random().toString(32).slice(2);
                window.history.replaceState({}, '', `?id=${roomId}`);
            }
            return roomId;
        }
        return Math.random().toString(32).slice(2);
    }

    private getUserImage(userName: string): string {
        const images: { [key: string]: string } = {
            RIO: 'https://ej2.syncfusion.com/demos/src/avatar/images/pic01.png',
            JOHN: 'https://ej2.syncfusion.com/demos/src/avatar/images/pic03.png',
            MAXY: 'https://ej2.syncfusion.com/demos/src/avatar/images/pic02.png',
            SHAI: 'https://ej2.syncfusion.com/demos/src/avatar/images/pic04.png'
        };
        return images[userName] || '';
    }

    public updatePendingOperations(): any {
        if (this.pendingOperations && this.pendingOperations.length > 0) {
            for (const op of this.pendingOperations) {
                this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
            }
        }
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### 3. Initialize the Vue PDF Viewer

The following example uses the complete Vue life cycle: it initializes collaboration from `mounted`, loads the room, joins it, retrieves the current PDF, and sends every supported PDF Viewer action from `documentChanged`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<template>
    <ejs-pdfviewer
        ref="pdfViewer"
        id="container"
        :resourceUrl="resourceUrl"
        :enableCollaborativeEditing="true"
        @resourcesLoaded="handleResourcesLoaded"
        @documentChanged="handleDocumentChanged">
    </ejs-pdfviewer>
</template>

<script>
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
    PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';
import { PdfViewerAdapter } from './pdfViewerAdapter';

const userList = ['RIO', 'JOHN', 'MAXY', 'SHAI', 'SRI'];
const currentUserName = userList[Math.floor(Math.random() * userList.length)];
const SERVICE_URL = 'http://localhost:8081/';

export default {
    components: {
        'ejs-pdfviewer': PdfViewerComponent
    },
    data() {
        return {
            resourceUrl: 'https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib',
            adapter: null,
            client: null,
            roomName: '',
            isDocumentLoaded: false,
            currentUser: currentUserName,
            collaborationStatus: 'initializing',
            connectedUsers: []
        };
    },
    mounted() {
        // Component mounted
    },
    methods: {
        async fetchAndLoadPDFDocument() {
            const query = new URLSearchParams({ roomName: this.roomName || 'default' });
            const response = await fetch(`${SERVICE_URL}api/CollaborativeEditing/GetPDFDocument?${query}`, {
                headers: { Accept: 'application/json' }
            });
            if (!response.ok) throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
            const result = await response.json();
            if (!result.success) throw new Error(`Server error: ${result.error}`);
            const binary = atob(result.content);
            const bytes = new Uint8Array(binary.length);
            for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
            const blob = new Blob([bytes], { type: 'application/pdf' });
            const reader = new FileReader();
            await new Promise((resolve, reject) => {
                reader.onload = () => resolve(this.$refs.pdfViewer.load(new Uint8Array(reader.result), ''));
                reader.onerror = reject;
                reader.readAsArrayBuffer(blob);
            });
        },

        async handleResourcesLoaded() {
            if (this.isDocumentLoaded) return;
            this.isDocumentLoaded = true;
            this.collaborationStatus = 'loading';
            try {
                const adapter = new PdfViewerAdapter(this.$refs.pdfViewer, SERVICE_URL, this.currentUser);
                this.adapter = adapter;
                const client = new CollaborationClient(adapter, {
                    serviceUrl: SERVICE_URL,
                    connectionType: 'websocket',
                    currentUser: this.currentUser,
                    onUserJoined: user => this.connectedUsers = [...new Set([...this.connectedUsers, user.userName || user.currentUser])],
                    onUserLeft: user => this.connectedUsers = this.connectedUsers.filter(name => name !== (user.userName || user.currentUser))
                });
                this.client = client;
                const roomName = await adapter.loadFromServer();
                this.roomName = roomName;
                await client.joinRoomAsync(roomName);
                await this.fetchAndLoadPDFDocument();
                this.collaborationStatus = 'connected';
                this.connectedUsers = [this.currentUser];
            } catch (error) {
                console.error('[App] Error during collaboration initialization:', error);
                this.collaborationStatus = 'error';
            }
        },

        handleDocumentChanged(args) {
            try {
                let operations = [];
                if (args && 'annotationId' in args) {
                    operations = args.action
                        ? [{ action: args.action, annotation: args.annotationId, type: 'annotation', isRedacted: args.isRedacted }]
                        : [{ type: 'removeUser', currentUser: this.currentUser }];
                } else if (args && 'formField' in args && !('fieldName' in args)) {
                    operations = [{ action: args.action, formField: args.formField, type: 'formField' }];
                } else if (args && 'fieldName' in args) {
                    operations = [{ action: 'formFieldUpdate', data: args, type: 'formField' }];
                } else if (args && 'organizePageActions' in args) {
                    const actionDetails = typeof args.organizePageActions === 'string'
                        ? JSON.parse(args.organizePageActions) : '';
                    if (args.savedDocument === null && actionDetails.action === 'applyCancelled') {
                        operations = [{ type: 'removeUser', currentUser: this.currentUser }];
                    } else if (args.savedDocument !== null && actionDetails.length > 0 && actionDetails[0].action !== 'applyCancelled') {
                        operations = [{ action: 'pageOrganizerUpdate', data: args.organizePageActions, type: 'pageOrganizer' }];
                    }
                }
                if (operations.length > 0) {
                    this.adapter.sendActionToServer(operations).catch(error =>
                        console.error('[App] Error sending operation:', error));
                }
            } catch (error) {
                console.error('[App] Error processing document change:', error);
            }
        }
    }
};
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Server-side integration

### 1. Install the Collaboration Server

{% tabs %}
{% highlight bash tabtitle="Shell" %}
{% raw %}
npm install ej2-collaborator-server
{% endraw %}
{% endhighlight %}
{% endtabs %}

### 2. Add the PDF Viewer server adapter

Create `adapters/PdfViewerAdapter.js` with the following server adapter structure. It stores each complete request envelope, broadcasts it unchanged, and replays pending operations against the source PDF during save.

{% tabs %}
{% highlight html tabtitle="JS" %}
{% raw %}
const { PdfDocument, PdfRotationAngle, DataFormat } = require('@syncfusion/ej2-pdf');
const { DOMParser, XMLSerializer } = require('@xmldom/xmldom');

if (typeof global.DOMParser === 'undefined') global.DOMParser = DOMParser;
if (typeof global.XMLSerializer === 'undefined') global.XMLSerializer = XMLSerializer;

class PdfViewerAdapter {
    constructor(options = {}) {
        this.saveTaskQueue = options.saveTaskQueue || null;
        this.transport = options.transport || null;
        this.storageService = options.storageService;
    }

    mapControlToGenericAction(controlAction) {
        if (!controlAction || typeof controlAction !== 'object') {
            throw new Error(`Expected CollaborativeEditingRequest, got ${typeof controlAction}`);
        }
        return {
            roomName: controlAction.roomName || '',
            connectionId: controlAction.connectionId || '',
            currentUser: controlAction.userName || '',
            version: controlAction.currentVersion || 0,
            data: JSON.stringify(controlAction)
        };
    }

    mapGenericToControlAction(collaborationAction) {
        try {
            return collaborationAction.data ? JSON.parse(collaborationAction.data) : {};
        } catch (error) {
            console.error('[PdfViewerAdapter] Error parsing action:', error.message);
            return {};
        }
    }

    transformOperations(actions) {
        // PDF Viewer actions are stored as snapshots. Page organizer state uses last-write-wins.
        return actions;
    }

    async replayOperationsAndUpdateDocument(masterPdfBase64, operations) {
        if (!masterPdfBase64) throw new Error('Master PDF is empty or not provided');
        const document = new PdfDocument(Buffer.from(masterPdfBase64, 'base64'));
        const validOperations = this._extractValidOperations(operations);
        for (const operation of validOperations) {
            try {
                await this.applyOperationToDocument(document, operation);
            } catch (error) {
                console.error(`[ReplayOps] Failed to apply ${operation.type}:`, error.message);
            }
        }
        const updatedPdf = await document.save();
        if (!updatedPdf || updatedPdf.length === 0) throw new Error('Failed to save updated PDF');
        return new Blob([updatedPdf], { type: 'application/pdf' });
    }

    _extractValidOperations(operations) {
        if (!Array.isArray(operations)) return [];
        return operations.flatMap(operation => {
            if (!operation) return [];
            if (operation.type && operation.data) return [operation];
            if (!operation.data || typeof operation.data !== 'string') return [];
            try {
                const request = JSON.parse(operation.data);
                if (request.type === 'annotation') {
                    return [{ type: 'annotation', data: request.data.xfdfData, action: request.data.action }];
                }
                if (request.type === 'formField') {
                    return [{ type: 'formField', data: JSON.parse(request.data.jsonData), action: request.data.action }];
                }
                if (request.type === 'formFieldAction') {
                    const changes = JSON.parse(request.data.changes);
                    const data = changes.created?.[0] || changes.updated?.[0] || changes.deleted?.[0];
                    const action = changes.created?.length ? 'created' : changes.updated?.length ? 'updated' : 'deleted';
                    return data ? [{ type: 'formFieldAction', data, action }] : [];
                }
                if (request.type === 'pageOrganizer') {
                    const data = typeof request.data === 'string' ? JSON.parse(request.data) : request.data;
                    return [{ type: 'pageOrganizer', data: Array.isArray(data) ? data[0] : data, action: 'update' }];
                }
            } catch (error) {
                console.warn('[ExtractOps] Invalid operation:', error.message);
            }
            return [];
        });
    }

    async applyOperationToDocument(document, operation) {
        const type = (operation.type || '').toLowerCase();
        if (type === 'annotation' || type === 'annotationupdate') {
            await this._importAnnotationsFromXfdf(document, operation.data, operation.action);
        } else if (type === 'formfield' || type === 'formfieldaction' || type === 'formfieldupdate') {
            await this._applyFormFieldUpdates(document, operation.data, operation.type, operation.action);
        } else if (type === 'pageorganizer' || type === 'pageorganizeractions') {
            await this._applyPageOrganizerActions(document, operation.data);
        }
    }

    async _importAnnotationsFromXfdf(document, xfdfData, action) {
        const xmlDocument = new DOMParser().parseFromString(xfdfData, 'text/xml');
        const serialized = new XMLSerializer().serializeToString(xmlDocument);
        if (serialized) document.importAnnotations(new TextEncoder().encode(serialized), DataFormat.xfdf);
    }

    async _applyFormFieldUpdates(document, data, type, action) {
        // Apply formField values and formFieldAction create/update/delete operations
        // using the PdfTextBoxField, PdfCheckBoxField, PdfComboBoxField,
        // PdfListBoxField, and PdfRadioButtonListField APIs.
    }

    async _applyPageOrganizerActions(document, data) {
        if (data.action === 'delete') document.removePage(data.originalPageIndex);
        if (data.action === 'reorder' || data.action === 'rearrange') document.reorderPages(data.pageIndices);
        if (data.action === 'rotate') document.getPage(data.originalPageIndex).rotation = PdfRotationAngle[`angle${data.rotateAngle}`];
        if (data.action === 'insert') document.addPage(data.targetIndex, data.pageSize);
    }

    async processSaveRequestAsync(request) {
        const result = await this.storageService.getPdfAsync(request.fileName || 'document.pdf', request.roomName);
        if (!result.success) throw new Error(result.error || 'Failed to retrieve PDF');
        const updatedPdf = await this.replayOperationsAndUpdateDocument(result.content, request.actions);
        const buffer = Buffer.from(await updatedPdf.arrayBuffer());
        await this.storageService.storePdfAsync(buffer, request.fileName || 'document.pdf', request.roomName);
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

Complete `_applyFormFieldUpdates` with the PDF-specific form field creation, update, and delete logic from the running server implementation. The common server manages Redis, transport, room membership, versioning, and the save worker.

### 3. Register the collaboration routes

Create `controllers/collaborative-editing-controller.js`:

{% tabs %}
{% highlight html tabtitle="JS" %}
{% raw %}
function registerRoutes(app, actionService, adapter, transport) {
    app.post('/api/CollaborativeEditing/ImportFile', async (req, res) => {
        try {
            const { roomName } = req.body;
            if (!roomName) return res.status(400).json({ error: 'Room name is required' });
            const actions = await actionService.getPendingOperations(roomName, 0, -1);
            const operations = (actions || []).map(action => adapter.mapGenericToControlAction(action));
            return res.json({ roomName, version: actions.length, operations });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to import file', details: error.message });
        }
    });

    app.post('/api/CollaborativeEditing/UpdateAction', async (req, res) => {
        try {
            const request = req.body;
            if (!request.roomName) return res.status(400).json({ error: 'RoomName is required' });
            if (!request.type) return res.status(400).json({ error: 'Type is required' });
            if (request.type === 'annotation' && !request.data?.xfdfData) return res.status(400).json({ error: 'Data.xfdfData is required' });
            if (request.type === 'formField' && !request.data?.jsonData) return res.status(400).json({ error: 'Data.jsonData is required' });
            if (request.type === 'formFieldAction' && !request.data?.changes) return res.status(400).json({ error: 'Data.changes is required' });
            if (request.type === 'pageOrganizer' && !request.data) return res.status(400).json({ error: 'Data is required' });

            await actionService.addOperation(adapter.mapControlToGenericAction(request), adapter);
            const broadcastRequest = {
                roomName: request.roomName,
                connectionId: request.connectionId,
                userName: request.userName,
                type: request.type,
                currentVersion: request.currentVersion,
                data: request.data
            };
            if (transport && typeof transport.broadcastToRoom === 'function') {
                await transport.broadcastToRoom(request.roomName, { event: 'action', data: broadcastRequest });
            }
            return res.json({ success: true, data: request.data });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to update action', details: error.message });
        }
    });
}

function registerPdfDocumentRoutes(app, pdfStorageService) {
    app.get('/api/CollaborativeEditing/GetPDFDocument', async (req, res) => {
        try {
            const result = await pdfStorageService.getPdfAsync(req.query.fileName, req.query.roomName);
            return result.success ? res.json(result) : res.status(404).json(result);
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Failed to retrieve PDF', details: error.message });
        }
    });
}

module.exports = { registerRoutes, registerPdfDocumentRoutes };
{% endraw %}
{% endhighlight %}
{% endtabs %}

### 4. Start the server

{% tabs %}
{% highlight html tabtitle="JS" %}
{% raw %}
const cors = require('cors');
const { CollaborationServer } = require('ej2-collaborator-server');
const PdfViewerAdapter = require('./adapters/PdfViewerAdapter');

const pdfStorageService = new PdfStorageService();
const adapter = new PdfViewerAdapter({ storageService: pdfStorageService });
const server = new CollaborationServer({
    port: 8081,
    redis: { host: '<redis-host>', port: 6379, username: 'default', password: '<redis-password>', tls: {} },
    adapter
});

server.app.use(cors());
registerRoutes(server.app, server.actionService, adapter, server);
registerPdfDocumentRoutes(server.app, pdfStorageService);
server.start();
{% endraw %}
{% endhighlight %}
{% endtabs %}

## See Also

- [Getting Started with Node.js Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-node)