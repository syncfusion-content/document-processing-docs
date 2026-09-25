---
layout: post
title: Collaborative Editing in Angular PDF Viewer with Node.js | Syncfusion
description: Learn how to implement Angular PDF Viewer collaborative editing with the Syncfusion Collaborator client and Node.js server packages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in Angular PDF Viewer with Node.js

This topic explains how to connect the Angular PDF Viewer to the Node.js Collaboration Server. The server provides WebSocket communication, Redis operation storage, room management, synchronization, and save processing. Node.js collaborative editing currently supports PDF Viewer.

## Prerequisites

- An Angular PDF Viewer application.
- Node.js 18 or later.
- A Redis instance.

## Client-side integration

### 1. Install the client packages

```bash
npm install @syncfusion/ej2-collaborator @syncfusion/ej2-pdf @xmldom/xmldom
```

### 2. Add the PDF Viewer adapter

Create `pdfViewerAdapter.ts` with the following production-ready client adapter:

```ts
import {
    PdfViewer, CollaborativeEditingHandler
} from '@syncfusion/ej2-angular-pdfviewer';
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

        // Initialize the source-level collaboration handler
        this.collaborativeEditingHandler = new CollaborativeEditingHandler(
            viewer,
            currentUser
        );
    }

    /**
     * Fetches the document from the product's REST API and joins a collaboration room.
     * Returns the room name to be used by `client.open(...)`.
     * 
     * Flow:
     * 1. Generate or extract room name from URL
     * 2. POST to ImportFile endpoint with roomName
     * 3. Server returns all pending operations for state reconstruction
     * 4. Initialize collaboration context with room info and version
     * 5. Apply initial state snapshots (annotations, form fields, etc.)
     * 
     * @param fileName - Optional file name to load
     * @returns - Promise that resolves to the room name
     */
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
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        roomName: roomName,
                        fileName: this.fileName,
                        currentUser: this.currentUser
                    })
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Failed to join collaboration room: ${response.statusText}`
                );
            }

            const responseText: string = await response.text();
            await this.open(responseText, roomName);

            return roomName;
        } catch (error) {
            console.error('[PdfViewerAdapter] Error loading from server:', error);
            throw error;
        }
    }

    /**
     * Initializes collaboration context and applies initial document state.
     * 
     * Process:
     * 1. Parse server response containing version and pending operations
     * 2. Update handler with room info and version tracking
     * 3. Apply initial state snapshots (annotations, form fields, page organizer)
     * 4. Mark document as loaded for subsequent operations
     * 
     * @param responseText - JSON response text from ImportFile endpoint
     * @param roomName - Current collaboration room name
     */
    public async open(responseText: string, roomName: string): Promise<void> {
        try {
            const data: any = JSON.parse(responseText);

            // Extract version for document state
            const version = data.version || data.currentVersion || 0;

            // Update collaboration handler with room info and version tracking
            this.collaborativeEditingHandler.updateRoomInfo(
                roomName,
                version,
                `${this.serviceUrl}api/CollaborativeEditing/`
            );

            // Apply initial state: annotations, form fields, page organizer snapshots
            // These are stored as snapshots, not incremental operations
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

    /**
     * Sends local changes to the collaboration service via UpdateAction endpoint.
     * 
     * Flow:
     * 1. Validate operations array
     * 2. Delegate to handler for routing by operation type
     * 3. Handler increments version and sends to UpdateAction endpoint
     * 4. Server broadcasts operation to other clients (except sender)
     * 
     * @param operations - Array of operations/changes from the local user
     */
    public async sendActionToServer(operations: any[]): Promise<void> {
        try {
            if (!operations || operations.length === 0) {
                console.warn('[PdfViewerAdapter] No operations to send');
                return;
            }

            // Delegate to handler which manages routing and UpdateAction API calls
            await this.collaborativeEditingHandler.sendActionToServer(operations);
        } catch (error) {
            console.error('[PdfViewerAdapter] Error sending operations:', error);
            throw error;
        }
    }

    /**
     * Applies remote changes received from other collaborators.
     * Delegates all logic to the source-level collaborative editing handler.
     *
     * @param action - Type of action being applied (e.g., 'annotationUpdate', 'formFieldUpdate', 'removeUser')
     * @param obj - Object containing action data
     */
    public applyRemoteAction(action: string, data: ICollaborationActionData): void {
        if (
            action === 'addUser') {
            if ((data as any).payload.length > 0) {
                ((data as any).payload as any[]).forEach((user: any) => {
                    switch (user.currentUser) {
                        case 'RIO':
                            user.image = 'https://ej2.syncfusion.com/demos/src/avatar/images/pic01.png';
                            break;
                        case 'JOHN':
                            user.image = 'https://ej2.syncfusion.com/demos/src/avatar/images/pic03.png';
                            break;
                        case 'MAXY':
                            user.image = 'https://ej2.syncfusion.com/demos/src/avatar/images/pic02.png';
                            break;
                        case 'SHAI':
                            user.image = "https://ej2.syncfusion.com/demos/src/avatar/images/pic04.png";
                            break;
                    }
                });
            }
            else {
                if ((data as any).payload.currentUser === 'RIO') {
                    (data as any).payload.image = "https://ej2.syncfusion.com/demos/src/avatar/images/pic01.png";
                } else if ((data as any).payload.currentUser === 'JOHN') {
                    (data as any).payload.image = "https://ej2.syncfusion.com/demos/src/avatar/images/pic03.png";
                }
                else if ((data as any).payload.currentUser === 'MAXY') {
                    (data as any).payload.image = "https://ej2.syncfusion.com/demos/src/avatar/images/pic02.png"
                }
                else if ((data as any).payload.currentUser === 'SHAI') {
                    (data as any).payload.image = "https://ej2.syncfusion.com/demos/src/avatar/images/pic04.png"
                }
            }
        }
        else if (action === 'connectionId') {
            let image = '';
            if (this.currentUser === 'RIO') {
                image = "https://ej2.syncfusion.com/demos/src/avatar/images/pic01.png";
            } else if (this.currentUser === 'JOHN') {
                image = "https://ej2.syncfusion.com/demos/src/avatar/images/pic03.png";
            }
            else if (this.currentUser === 'MAXY') {
                image = "https://ej2.syncfusion.com/demos/src/avatar/images/pic02.png"
            }
            else if (this.currentUser === 'SHAI') {
                image = "https://ej2.syncfusion.com/demos/src/avatar/images/pic04.png"
            }
            data.payload = { payload: data.payload, image: image }
        }
        this.collaborativeEditingHandler.applyRemoteAction(action, data.payload);
    }

    /**
     * Extracts or generates room ID from URL query parameters.
     * Ensures a unique room ID is set for the collaboration session.
     * 
     * @param fileName - Document file name (used for room naming)
     * @returns - Room identifier
     */
    private getRoomName(fileName?: string): string {
        // Check for browser environment
        if (typeof window !== 'undefined') {
            const queryString: string = window.location.search;
            const urlParams: URLSearchParams = new URLSearchParams(queryString);
            let roomId: string | null = urlParams.get('id');

            if (!roomId) {
                roomId = Math.random().toString(32).slice(2);
                window.history.replaceState({}, '', `?id=${roomId}`);
            }

            return roomId;
        }

        // Server-side environment or fallback
        return Math.random().toString(32).slice(2);
    }

    public updatePendingOperations(): any {
        // Apply initial state: annotations, form fields, page organizer snapshots
        // These are stored as snapshots, not incremental operations
        if (this.pendingOperations && this.pendingOperations.length > 0) {
            for (const op of this.pendingOperations) {
                this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
            }
        }
    }
}
```

### 3. Initialize the Angular PDF Viewer

Create `app.component.ts` with the complete Angular standalone component:

```ts
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule, PdfViewerComponent } from '@syncfusion/ej2-angular-pdfviewer';
import {
  LinkAnnotationService, BookmarkViewService, MagnificationService,
  ThumbnailViewService, ToolbarService, NavigationService,
  TextSearchService, TextSelectionService, PrintService,
  FormDesignerService, FormFieldsService, AnnotationService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';
import { PdfViewerAdapter } from './pdfViewerAdapter';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';

const userList = ['RIO', 'JOHN', 'MAXY', 'SHAI', 'SRI'];
const currentUserName = userList[Math.floor(Math.random() * userList.length)];
const SERVICE_URL = 'http://localhost:8081/';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  providers: [
    LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    TextSearchService, TextSelectionService, PrintService,
    FormDesignerService, FormFieldsService, AnnotationService,
    PageOrganizerService
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('pdfViewer') pdfViewerComponent!: PdfViewerComponent;

  isDocumentLoaded = false;
  collaborationStatus = 'initializing';
  currentUser = currentUserName;
  connectedUsers: string[] = [];
  roomName = '';
  adapterRef: PdfViewerAdapter | null = null;
  clientRef: CollaborationClient | null = null;
  roomNameRef = '';
  resourceUrl = 'https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    console.log('[App] Component initialized');
  }

  ngOnDestroy(): void {
    if (this.clientRef) {
      console.log('[App] Cleaning up collaboration client');
    }
  }

  async loadPDFBlobIntoViewer(pdfBlob: Blob): Promise<void> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const arrayBuffer = reader.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          if (this.pdfViewerComponent && typeof (this.pdfViewerComponent as any).load === 'function') {
            (this.pdfViewerComponent as any).load(uint8Array, '');
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

  async fetchAndLoadPDFDocument(): Promise<void> {
    const queryParams = new URLSearchParams({
      roomName: this.roomNameRef || 'default'
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
    await this.loadPDFBlobIntoViewer(pdfBlob);
  }

  async onResourcesLoaded(): Promise<void> {
    if (this.isDocumentLoaded) return;
    this.isDocumentLoaded = true;
    this.collaborationStatus = 'loading';
    try {
      await this.initializeCollaboration();
    } catch (error) {
      console.error('[App] Error initializing collaboration:', error);
      this.collaborationStatus = 'error';
    }
  }

  private async initializeCollaboration(): Promise<void> {
    this.adapterRef = new PdfViewerAdapter(this.pdfViewerComponent, SERVICE_URL, this.currentUser);
    
    this.clientRef = new CollaborationClient(this.adapterRef, {
      serviceUrl: SERVICE_URL,
      connectionType: 'websocket',
      currentUser: this.currentUser,
      onUserJoined: (user: any) => {
        const userName = user.userName || user.currentUser;
        if (!this.connectedUsers.includes(userName)) {
          this.connectedUsers = [...this.connectedUsers, userName];
        }
      },
      onUserLeft: (user: any) => {
        const userName = user.userName || user.currentUser;
        this.connectedUsers = this.connectedUsers.filter(u => u !== userName);
      }
    });

    const roomName = await this.adapterRef.loadFromServer();
    this.roomNameRef = roomName;
    this.roomName = roomName;

    await this.clientRef.joinRoomAsync(roomName);
    await this.fetchAndLoadPDFDocument();

    this.collaborationStatus = 'connected';
    this.connectedUsers = [this.currentUser];
  }

  onDocumentChanged(args: any): void {
    let operations: any[] = [];

    if (args && 'annotationId' in args) {
      operations = args.action
        ? [{ action: args.action, annotation: args.annotationId, type: 'annotation', isRedacted: args.isRedacted }]
        : [{ type: 'removeUser', currentUser: this.currentUser }];
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
        operations = [{ type: 'removeUser', currentUser: this.currentUser }];
      } else if (args.savedDocument !== null && actionDetails.length > 0 && actionDetails[0].action !== 'applyCancelled') {
        operations = [{ action: 'pageOrganizerUpdate', data: args.organizePageActions, type: 'pageOrganizer' }];
      }
    }

    if (operations.length > 0 && this.adapterRef) {
      (this.adapterRef as any).sendActionToServer(operations).catch((err: any) =>
        console.error('Error sending operation:', err)
      );
    }
  }
}
```

Create `app.html` template:

```html
<ejs-pdfviewer 
  #pdfViewer 
  [resourceUrl]="resourceUrl"
  (resourcesLoaded)="onResourcesLoaded()" 
  (documentChanged)="onDocumentChanged($event)">
</ejs-pdfviewer>
```

Create `app.css` stylesheet:

```css
:host {
  display: block;
  height: 100vh;
}

ejs-pdfviewer {
  display: block;
  height: 100%;
}
```

## Server-side integration

### 1. Install the Collaboration Server

```bash
npm install ej2-collaborator-server
```

### 2. Add the PDF Viewer server adapter

Create `adapters/PdfViewerAdapter.js`. The adapter stores complete request envelopes, broadcasts them unchanged, and replays operations during save. It implements form field and annotation handling via XFDF, handles page organizer operations, and manages signature rendering.

**Key responsibilities:**
- Map between unified request format and generic collaboration actions
- Extract and validate typed data from requests
- Replay operations against PDFs during save processing
- Apply annotations (XFDF), form fields (create/update/delete), page organizer actions, and signatures

See the [GitHub sample](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Collaborative%20Editing) for the complete `PdfViewerAdapter.js` implementation including:
- `_importAnnotationsFromXfdf()` - XFDF parsing, element filtering, and import
- `_updateFormFieldValues()` - TextBox, CheckBox, RadioButton, ComboBox, ListBox field updates
- `_createFormField()` - Create TextBox, CheckBox, RadioButton, DropDown, ListBox, Signature fields with full property support
- `_drawPathSignature()` - Render ink annotations with page rotation and zoom handling
- `_applyPageOrganizerActions()` - Delete, reorder, rotate, insert, and copy page operations

### 3. Register the collaboration routes

Create `controllers/collaborative-editing-controller.js` to handle PDF-specific collaboration endpoints:

```js
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
```

### 4. Start the server

```js
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
```

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Collaborative%20Editing).

## See Also

- [Getting Started with Node.js Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-node)