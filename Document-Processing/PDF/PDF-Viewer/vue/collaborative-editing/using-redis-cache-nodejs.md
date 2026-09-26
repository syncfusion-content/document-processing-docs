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

Create `pdfViewerAdapter.ts` with the following basic structure:

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

        const response = await fetch(
            `${this.serviceUrl}api/CollaborativeEditing/ImportFile`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ roomName, fileName: this.fileName, currentUser: this.currentUser })
            }
        );

        if (!response.ok) throw new Error(`Failed to join room: ${response.statusText}`);
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
        if (!operations || operations.length === 0) return;
        await this.collaborativeEditingHandler.sendActionToServer(operations);
    }

    public applyRemoteAction(action: string, data: ICollaborationActionData): void {
        if (action === 'addUser' || action === 'connectionId') {
            this._assignUserImages(data);
        }
        this.collaborativeEditingHandler.applyRemoteAction(action, (data as any).payload || data);
    }

    private _assignUserImages(data: ICollaborationActionData): void {
        const images: { [key: string]: string } = {
            'RIO': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic01.png',
            'JOHN': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic03.png',
            'MAXY': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic02.png',
            'SHAI': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic04.png'
        };

        const payload = (data as any).payload;
        if (Array.isArray(payload)) {
            payload.forEach((user: any) => { user.image = images[user.currentUser]; });
        } else if (payload) {
            payload.image = images[payload.currentUser] || images[this.currentUser];
        }
    }

    private getRoomName(): string {
        if (typeof window !== 'undefined') {
            const roomId = new URLSearchParams(window.location.search).get('id');
            if (roomId) return roomId;
            const newId = Math.random().toString(36).substring(2, 15);
            window.history.replaceState({}, '', `?id=${newId}`);
            return newId;
        }
        return Math.random().toString(36).substring(2, 15);
    }

    public updatePendingOperations(): void {
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

N>For the complete adapter implementation with error handling and detailed logging, refer to the [Vue PDF Viewer Collaborative Editing Sample](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples).

### 3. Initialize the Vue PDF Viewer

Create `App.vue` to initialize the PDF Viewer with collaboration support:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<template>
  <div>
    <div style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #ddd;">
      <strong>User:</strong> {{ currentUser }} | 
      <strong>Status:</strong> {{ collaborationStatus }} |
      <strong>Room:</strong> {{ roomName }}
    </div>
    <ejs-pdfviewer
      ref="pdfViewerRef"
      id="pdfViewer"
      :resourceUrl="resourceUrl"
      :enableCollaborativeEditing="true"
      @resourcesLoaded="handleResourcesLoaded"
      @documentChanged="handleDocumentChanged"
      style="height: calc(100vh - 50px);">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, 
         FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';
import { PdfViewerAdapter } from './pdfViewerAdapter';

const SERVICE_URL = 'http://localhost:8081/';

export default {
    components: { 'ejs-pdfviewer': PdfViewerComponent },
    data() {
        return {
            resourceUrl: 'https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib',
            currentUser: ['RIO', 'JOHN', 'MAXY', 'SHAI'][Math.floor(Math.random() * 4)],
            collaborationStatus: 'initializing',
            roomName: '',
            adapter: null,
            client: null,
            isDocumentLoaded: false
        };
    },
    provide() {
        return { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
                            BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
                            FormFields, FormDesigner, PageOrganizer] };
    },
    methods: {
        getViewer() {
            return this.$refs.pdfViewerRef?.ej2Instances || null;
        },
        
        async fetchAndLoadPDF() {
            const response = await fetch(
                `${SERVICE_URL}api/CollaborativeEditing/GetPDFDocument?roomName=${this.roomName}`,
                { headers: { 'Accept': 'application/json' } }
            );
            const result = await response.json();
            if (!result.success) throw new Error(result.error);
            
            const bytes = new Uint8Array(atob(result.content).split('').map(c => c.charCodeAt(0)));
            const blob = new Blob([bytes], { type: 'application/pdf' });
            const reader = new FileReader();
            
            await new Promise((resolve, reject) => {
                reader.onload = () => {
                    this.getViewer().load(new Uint8Array(reader.result), '');
                    resolve();
                };
                reader.onerror = reject;
                reader.readAsArrayBuffer(blob);
            });
        },

        async handleResourcesLoaded() {
            if (this.isDocumentLoaded) return;
            this.isDocumentLoaded = true;
            this.collaborationStatus = 'connecting...';

            try {
                const viewer = this.getViewer();
                const adapter = new PdfViewerAdapter(viewer, SERVICE_URL, this.currentUser);
                this.adapter = adapter;

                this.client = new CollaborationClient(adapter, {
                    serviceUrl: SERVICE_URL,
                    connectionType: 'websocket',
                    currentUser: this.currentUser
                });

                this.roomName = await adapter.loadFromServer();
                await this.client.joinRoomAsync(this.roomName);
                await this.fetchAndLoadPDF();
                
                this.collaborationStatus = 'connected';
            } catch (error) {
                console.error('Collaboration error:', error);
                this.collaborationStatus = 'error';
            }
        },

        handleDocumentChanged(args) {
            let operations = [];
            if (args && 'annotationId' in args) {
                operations = [{ action: args.action, annotation: args.annotationId, type: 'annotation' }];
            } else if (args && 'formField' in args) {
                operations = [{ action: args.action, formField: args.formField, type: 'formField' }];
            } else if (args && 'organizePageActions' in args) {
                operations = [{ action: 'pageOrganizerUpdate', data: args.organizePageActions, type: 'pageOrganizer' }];
            }
            if (operations.length > 0 && this.adapter) {
                this.adapter.sendActionToServer(operations).catch(err => console.error('Error:', err));
            }
        }
    },
    beforeUnmount() {
        if (this.client) {
            this.client.leaveRoomAsync(this.roomName);
        }
    }
};
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

N>For complete implementation details, refer to the [Vue Collaborative PDF Editing Sample on GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples).

## Server-side integration

### 1. Install dependencies

{% tabs %}
{% highlight bash tabtitle="Shell" %}
{% raw %}
npm install express cors @syncfusion/ej2-collaborator-server @syncfusion/ej2-pdf @xmldom/xmldom redis
{% endraw %}
{% endhighlight %}
{% endtabs %}

### 2. Create the PDF Viewer adapter

Create `adapters/PdfViewerAdapter.js` to handle operation replay and PDF manipulation:

{% tabs %}
{% highlight js tabtitle="PdfViewerAdapter.js" %}
{% raw %}
const { PdfDocument, PdfRotationAngle, DataFormat, PdfTextBoxField, PdfCheckBoxField,
        PdfRadioButtonListField, PdfComboBoxField, PdfListBoxField } = require('@syncfusion/ej2-pdf');
const { DOMParser, XMLSerializer } = require('@xmldom/xmldom');

if (typeof global.DOMParser === 'undefined') global.DOMParser = DOMParser;
if (typeof global.XMLSerializer === 'undefined') global.XMLSerializer = XMLSerializer;

class PdfViewerAdapter {
    constructor(options = {}) {
        this.storageService = options.storageService;
    }

    mapControlToGenericAction(controlAction) {
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
            console.error('Error parsing action:', error.message);
            return {};
        }
    }

    transformOperations(actions) {
        return actions;
    }

    async replayOperationsAndUpdateDocument(masterPdfBase64, operations) {
        if (!masterPdfBase64) throw new Error('Master PDF not provided');
        
        const document = new PdfDocument(Buffer.from(masterPdfBase64, 'base64'));
        const validOps = this._extractValidOperations(operations);
        
        for (const op of validOps) {
            try {
                await this.applyOperationToDocument(document, op);
            } catch (error) {
                console.error(`Failed to apply ${op.type}:`, error.message);
            }
        }
        
        const updated = await document.save();
        return new Blob([updated], { type: 'application/pdf' });
    }

    _extractValidOperations(operations) {
        if (!Array.isArray(operations)) return [];
        return operations.filter(op => op && op.type && op.data);
    }

    async applyOperationToDocument(document, operation) {
        switch ((operation.type || '').toLowerCase()) {
            case 'annotation':
                await this._applyAnnotations(document, operation.data);
                break;
            case 'formfield':
            case 'formfieldaction':
                await this._applyFormFields(document, operation.data);
                break;
            case 'pageorganizer':
                await this._applyPageOrganizer(document, operation.data);
                break;
        }
    }

    async _applyAnnotations(document, xfdfData) {
        const xmlDoc = new DOMParser().parseFromString(xfdfData, 'text/xml');
        const serialized = new XMLSerializer().serializeToString(xmlDoc);
        if (serialized) {
            document.importAnnotations(new TextEncoder().encode(serialized), DataFormat.xfdf);
        }
    }

    async _applyFormFields(document, data) {
        // Form field updates applied here
        // Use PdfTextBoxField, PdfCheckBoxField, etc. to update fields
    }

    async _applyPageOrganizer(document, data) {
        if (data.action === 'delete') {
            document.removePage(data.originalPageIndex);
        } else if (data.action === 'reorder') {
            document.reorderPages(data.pageIndices);
        } else if (data.action === 'rotate') {
            document.getPage(data.originalPageIndex).rotation = data.rotateAngle;
        } else if (data.action === 'insert') {
            document.addPage(data.targetIndex);
        }
    }

    async processSaveRequestAsync(request) {
        const pdf = await this.storageService.getPdfAsync(request.fileName || 'document.pdf', request.roomName);
        if (!pdf.success) throw new Error(pdf.error);
        
        const updated = await this.replayOperationsAndUpdateDocument(pdf.content, request.actions);
        const buffer = Buffer.from(await updated.arrayBuffer());
        await this.storageService.storePdfAsync(buffer, request.fileName || 'document.pdf', request.roomName);
    }
}

module.exports = PdfViewerAdapter;
{% endraw %}
{% endhighlight %}
{% endtabs %}

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

> N> The simplified adapter above shows the core patterns. For complete production implementation with:
> - Comprehensive form field handling (all property types)
> - XFDF annotation import with changeset processing
> - Signature rendering (text, image, and freehand draw with zoom/rotation)
> - Advanced page organizer operations (delete, reorder, rotate, insert, copy)
> - Redis cleanup strategies and partial save workflows

> Refer to the [PDF Viewer Collaboration Server sample](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples) on GitHub.

## See Also

- [Getting Started with Node.js Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-node)