---
layout: post
title: TypeScript PDF Viewer Collaborative Editing with Node.js | Syncfusion
description: Learn how to implement TypeScript PDF Viewer collaborative editing with the Syncfusion Collaborator client and Node.js server packages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in TypeScript PDF Viewer with Node.js

This topic explains how to connect the TypeScript PDF Viewer to the Node.js Collaboration Server. The server provides WebSocket communication, Redis operation storage, room management, synchronization, and save processing. Node.js collaborative editing currently supports PDF Viewer.

## Prerequisites

- A TypeScript PDF Viewer application.
- Node.js 18 or later.
- A Redis instance.

## Client-side integration

### 1. Install the client packages

```bash
npm install @syncfusion/ej2-collaborator
```

### 2. Add the PDF Viewer adapter

Create `pdfViewerAdapter.ts` with the following TypeScript adapter implementation:

{% tabs %}
{% highlight typescript tabtitle="pdfViewerAdapter.ts" %}
{% raw %}

import { PdfViewer, CollaborativeEditingHandler } from '@syncfusion/ej2-pdfviewer';
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

        try {
            const response = await fetch(
                `${this.serviceUrl}api/CollaborativeEditing/ImportFile`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        roomName,
                        fileName: this.fileName,
                        currentUser: this.currentUser
                    })
                }
            );

            if (!response.ok) {
                throw new Error(`Failed to join collaboration room: ${response.statusText}`);
            }

            const responseText: string = await response.text();
            await this.open(responseText, roomName);
            return roomName;
        } catch (error) {
            console.error('[PdfViewerAdapter] Error loading from server:', error);
            throw error;
        }
    }

    public async open(responseText: string, roomName: string): Promise<void> {
        try {
            const data: any = JSON.parse(responseText);
            const version = data.version || data.currentVersion || 0;

            this.collaborativeEditingHandler.updateRoomInfo(
                roomName,
                version,
                `${this.serviceUrl}api/CollaborativeEditing/`
            );

            this.pendingOperations = data.operations;
            if (data.operations && data.operations.length > 0) {
                for (const op of data.operations) {
                    this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
                }
            }

            this.isDocumentLoaded = true;
        } catch (error) {
            console.error('[PdfViewerAdapter] Error initializing document:', error);
            throw error;
        }
    }

    public async sendActionToServer(operations: any[]): Promise<void> {
        try {
            if (!operations || operations.length === 0) {
                console.warn('[PdfViewerAdapter] No operations to send');
                return;
            }

            await this.collaborativeEditingHandler.sendActionToServer(operations);
        } catch (error) {
            console.error('[PdfViewerAdapter] Error sending operations:', error);
            throw error;
        }
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

### 3. Initialize the TypeScript PDF Viewer

Create `app.ts` with the complete TypeScript implementation. It initializes collaboration from `resourcesLoaded`, loads the room, joins it, retrieves the current PDF, and handles all PDF Viewer actions:

{% tabs %}
{% highlight typescript tabtitle="app.ts" %}
{% raw %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-pdfviewer';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';
import { PdfViewerAdapter } from './pdfViewerAdapter';

const userList: string[] = ['RIO', 'JOHN', 'MAXY', 'SHAI', 'SRI'];
const currentUserName: string = userList[Math.floor(Math.random() * userList.length)];
const SERVICE_URL: string = 'http://localhost:8081/';

interface CollaborationState {
    isDocumentLoaded: boolean;
    collaborationStatus: 'initializing' | 'loading' | 'connected' | 'error';
    currentUser: string;
    connectedUsers: string[];
    roomName: string;
    adapter: PdfViewerAdapter | null;
    client: CollaborationClient | null;
}

const collaborationState: CollaborationState = {
    isDocumentLoaded: false,
    collaborationStatus: 'initializing',
    currentUser: currentUserName,
    connectedUsers: [],
    roomName: '',
    adapter: null,
    client: null
};

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer);

let pdfViewer: PdfViewer = new PdfViewer({
    enableCollaborativeEditing: true,
    resourceUrl: 'https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2-pdfviewer-lib'
});

pdfViewer.appendTo('#PdfViewer');

async function loadPDFBlobIntoViewer(pdfBlob: Blob): Promise<void> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const arrayBuffer = reader.result as ArrayBuffer;
                const uint8Array = new Uint8Array(arrayBuffer);
                if (pdfViewer && pdfViewer.load) {
                    pdfViewer.load(uint8Array, '');
                    resolve();
                } else {
                    reject(new Error('Viewer load method not available'));
                }
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = () => reject(new Error('Failed to read blob'));
        reader.readAsArrayBuffer(pdfBlob);
    });
}

async function fetchAndLoadPDFDocument(): Promise<void> {
    const queryParams = new URLSearchParams({
        roomName: collaborationState.roomName || 'default'
    });

    const response = await fetch(
        `${SERVICE_URL}api/CollaborativeEditing/GetPDFDocument?${queryParams.toString()}`,
        { headers: { 'Accept': 'application/json' } }
    );

    const result = await response.json();
    if (!result.success) throw new Error(`Server error: ${result.error}`);

    const binaryString = atob(result.content);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const pdfBlob = new Blob([bytes], { type: 'application/pdf' });
    await loadPDFBlobIntoViewer(pdfBlob);
}

pdfViewer.resourcesLoaded = async (): Promise<void> => {
    if (collaborationState.isDocumentLoaded) return;
    collaborationState.isDocumentLoaded = true;
    collaborationState.collaborationStatus = 'loading';
    
    try {
        const adapter = new PdfViewerAdapter(pdfViewer, SERVICE_URL, collaborationState.currentUser);
        collaborationState.adapter = adapter;

        const client = new CollaborationClient(adapter, {
            serviceUrl: SERVICE_URL,
            connectionType: 'websocket',
            currentUser: collaborationState.currentUser,
            onUserJoined: (user: any) => {
                const userName = user.userName || user.currentUser;
                if (!collaborationState.connectedUsers.includes(userName)) {
                    collaborationState.connectedUsers.push(userName);
                }
            },
            onUserLeft: (user: any) => {
                const userName = user.userName || user.currentUser;
                collaborationState.connectedUsers = collaborationState.connectedUsers.filter(u => u !== userName);
            }
        });
        collaborationState.client = client;

        const roomName = await adapter.loadFromServer();
        collaborationState.roomName = roomName;

        await client.joinRoomAsync(roomName);
        await fetchAndLoadPDFDocument();

        collaborationState.collaborationStatus = 'connected';
        if (!collaborationState.connectedUsers.includes(collaborationState.currentUser)) {
            collaborationState.connectedUsers.push(collaborationState.currentUser);
        }
    } catch (error) {
        console.error('[App] Error during collaboration initialization:', error);
        collaborationState.collaborationStatus = 'error';
    }
};

pdfViewer.documentChanged = (args: any): void => {
    try {
        let operations: any[] = [];

        if (args && 'annotationId' in args) {
            operations = args.action
                ? [{ action: args.action, annotation: args.annotationId, type: 'annotation', isRedacted: args.isRedacted }]
                : [{ type: 'removeUser', currentUser: collaborationState.currentUser }];
        }
        else if (args && 'formField' in args && !('fieldName' in args)) {
            operations = [{ action: args.action, formField: args.formField, type: 'formField' }];
        }
        else if (args && 'fieldName' in args) {
            operations = [{ action: 'formFieldUpdate', data: args, type: 'formField' }];
        }
        else if (args && 'organizePageActions' in args) {
            const actionDetails = typeof args.organizePageActions === 'string'
                ? JSON.parse(args.organizePageActions) : '';
            if (args.savedDocument === null && actionDetails.action === 'applyCancelled') {
                operations = [{ type: 'removeUser', currentUser: collaborationState.currentUser }];
            } else if (args.savedDocument !== null && actionDetails.length > 0 && actionDetails[0].action !== 'applyCancelled') {
                operations = [{ action: 'pageOrganizerUpdate', data: args.organizePageActions, type: 'pageOrganizer' }];
            }
        }

        if (operations.length > 0 && collaborationState.adapter) {
            collaborationState.adapter.sendActionToServer(operations).catch((err: Error) =>
                console.error('Error sending operation:', err)
            );
        }
    } catch (error) {
        console.error('[App] Error processing document change:', error);
    }
};

window.addEventListener('beforeunload', () => {
    if (collaborationState.client) {
        console.log('[App] Cleaning up collaboration client');
        collaborationState.client = null;
    }
    if (collaborationState.adapter) {
        console.log('[App] Cleaning up collaboration adapter');
        collaborationState.adapter = null;
    }
});

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Server-side integration

### 1. Install the Collaboration Server

```bash
npm install ej2-collaborator-server
```

### 2. Add the PDF Viewer server adapter

Create `adapters/PdfViewerAdapter.js` with the server adapter. For complete implementation with form field handling, XFDF import, signature rendering, and page organizer operations, refer to the [GitHub sample](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/Collaborative%20Editing).

{% tabs %}
{% highlight js tabtitle="PdfViewerAdapter.js" %}
{% raw %}

const { PdfDocument, PdfRotationAngle, DataFormat } = require('@syncfusion/ej2-pdf');
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
    } catch (e) {
      return {};
    }
  }

  async replayOperationsAndUpdateDocument(masterPdfBase64, operations) {
    if (!masterPdfBase64) throw new Error('Master PDF empty');
    const document = new PdfDocument(Buffer.from(masterPdfBase64, 'base64'));
    const validOperations = this._extractValidOperations(operations);
    for (const operation of validOperations) {
      try {
        await this.applyOperationToDocument(document, operation);
      } catch (e) {}
    }
    const updatedPdf = await document.save();
    if (!updatedPdf || updatedPdf.length === 0) throw new Error('Failed to save PDF');
    return new Blob([updatedPdf], { type: 'application/pdf' });
  }

  _extractValidOperations(operations) {
    if (!Array.isArray(operations)) return [];
    return operations.flatMap(op => {
      if (!op?.data || typeof op.data !== 'string') return [];
      try {
        const req = JSON.parse(op.data);
        if (req.type === 'annotation') return [{ type: 'annotation', data: req.data.xfdfData, action: req.data.action }];
        if (req.type === 'formField') return [{ type: 'formField', data: JSON.parse(req.data.jsonData), action: req.data.action }];
        if (req.type === 'formFieldAction') {
          const changes = JSON.parse(req.data.changes);
          const data = changes.created?.[0] || changes.updated?.[0] || changes.deleted?.[0];
          const action = changes.created?.length ? 'created' : changes.updated?.length ? 'updated' : 'deleted';
          return data ? [{ type: 'formFieldAction', data, action }] : [];
        }
        if (req.type === 'pageOrganizer') {
          const data = typeof req.data === 'string' ? JSON.parse(req.data) : req.data;
          return [{ type: 'pageOrganizer', data: Array.isArray(data) ? data[0] : data }];
        }
      } catch (e) {}
      return [];
    });
  }

  async applyOperationToDocument(document, operation) {
    const type = (operation.type || '').toLowerCase();
    if (type === 'annotation') {
      const xmlDoc = new DOMParser().parseFromString(operation.data, 'text/xml');
      const serialized = new XMLSerializer().serializeToString(xmlDoc);
      if (serialized) document.importAnnotations(new TextEncoder().encode(serialized), DataFormat.xfdf);
    } else if (type === 'formfield' || type === 'formfieldaction') {
      // Implement form field handling or refer to GitHub sample
    } else if (type === 'pageorganizer') {
      if (operation.data.action === 'delete') document.removePage(operation.data.originalPageIndex);
      else if (operation.data.action === 'reorder') document.reorderPages(operation.data.pageIndices);
      else if (operation.data.action === 'rotate') document.getPage(operation.data.originalPageIndex).rotation = PdfRotationAngle[`angle${operation.data.rotateAngle}`];
    }
  }

  async processSaveRequestAsync(request) {
    const result = await this.storageService.getPdfAsync(request.fileName || 'document.pdf', request.roomName);
    if (!result.success) throw new Error('Failed to retrieve PDF');
    const updatedPdf = await this.replayOperationsAndUpdateDocument(result.content, request.actions);
    const buffer = Buffer.from(await updatedPdf.arrayBuffer());
    await this.storageService.storePdfAsync(buffer, request.fileName || 'document.pdf', request.roomName);
  }
}

module.exports = PdfViewerAdapter;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### 3. Register the collaboration routes

Create `controllers/collaborative-editing-controller.js` with comprehensive validation and error handling:

{% tabs %}
{% highlight js tabtitle="collaborative-editing-controller.js" %}
{% raw %}

function registerRoutes(app, actionService, adapter, transport) {
  app.post('/api/CollaborativeEditing/ImportFile', async (req, res) => {
    try {
      const { roomName } = req.body;
      if (!roomName) return res.status(400).json({ error: 'RoomName is required' });

      const allActions = await actionService.getPendingOperations(roomName, 0, -1);
      const operations = (allActions || []).map(action =>
        adapter.mapGenericToControlAction(action)
      );
      return res.json({ roomName, version: allActions.length, operations });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to import file', details: error.message });
    }
  });

  app.post('/api/CollaborativeEditing/UpdateAction', async (req, res) => {
    try {
      const request = req.body;
      if (!request.roomName) return res.status(400).json({ error: 'RoomName is required' });
      if (!request.type) return res.status(400).json({ error: 'Type is required' });

      let data = null;
      switch (request.type) {
        case 'annotation':
          if (!request.data?.xfdfData) return res.status(400).json({ error: 'Data.xfdfData is required' });
          data = request.data;
          break;
        case 'formField':
          if (!request.data?.jsonData) return res.status(400).json({ error: 'Data.jsonData is required' });
          data = request.data;
          break;
        case 'formFieldAction':
          if (!request.data?.changes) return res.status(400).json({ error: 'Data.changes is required' });
          try { JSON.parse(request.data.changes); } catch (e) {
            return res.status(400).json({ error: 'Invalid changes JSON', details: e.message });
          }
          data = request.data;
          break;
        case 'pageOrganizer':
          if (!request.data) return res.status(400).json({ error: 'Data is required' });
          data = request.data;
          break;
        default:
          return res.status(400).json({ error: `Invalid type: ${request.type}` });
      }

      const collaborationAction = adapter.mapControlToGenericAction(request);
      await actionService.addOperation(collaborationAction, adapter);

      const broadcastRequest = {
        roomName: request.roomName,
        connectionId: request.connectionId,
        userName: request.userName,
        type: request.type,
        currentVersion: request.currentVersion,
        data
      };

      if (transport?.broadcastToRoom) {
        transport.broadcastToRoom(request.roomName, { event: 'action', data: broadcastRequest }).catch(() => {});
      }

      return res.json({ success: true, data });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update action', details: error.message });
    }
  });
}

function registerPdfDocumentRoutes(app, pdfStorageService) {
  app.get('/api/CollaborativeEditing/GetPDFDocument', async (req, res) => {
    try {
      const { fileName, roomName } = req.query;
      if (!pdfStorageService) return res.status(500).json({ success: false, error: 'Storage service not initialized' });

      const result = await pdfStorageService.getPdfAsync(fileName, roomName);
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
{% highlight js tabtitle="server.js" %}
{% raw %}

const cors = require('cors');
const { CollaborationServer } = require('ej2-collaborator-server');
const PdfViewerAdapter = require('./adapters/PdfViewerAdapter');
const { registerRoutes, registerPdfDocumentRoutes } = require('./controllers/collaborative-editing-controller');

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

>N For complete production implementation with comprehensive form field handling, XFDF annotation import, signature rendering with path/image/text support, and advanced page organizer operations, refer to the [GitHub sample](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/Collaborative%20Editing).

## See Also

- [Getting Started with Node.js Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-node)