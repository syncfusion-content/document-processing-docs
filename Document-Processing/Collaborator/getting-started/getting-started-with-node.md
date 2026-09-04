---
layout: post
title: Getting Started with Node.js Collaboration Server | Syncfusion
description: Learn how to create a collaborative PDF Viewer backed by the Node.js Collaboration Server using WebSocket transport and Redis storage.
control: Collaborator
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---
# Getting Started with Node.js Collaboration Server

This walk\-through creates a collaborative PDF Viewer backed by the Node.js Collaboration Server. It uses the common collaborator services on the server and the shared @syncfusion/ej2\-collaborator client on the browser.

The walk\-through uses the **PDF Viewer** as the reference editor component. The DOCX Editor and Spreadsheet do not currently have a Node.js  Server implementation, so this Node.js applies only to the **PDF Viewer**.

## Client Side

### Step 1 — Install the client packages

In your front\-end project:
{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-collaborator 

{% endhighlight %}
{% endtabs %}

### Step 2 — Reference Adapter (PdfViewerAdapter.ts)
The control\-specific translator on the client side. It implements ICollaborationProvider for the EJ2 PDF Viewer

```ts
import { PdfViewer } from '"@syncfusion/ej2-pdfviewer"';
import { CollaborativeEditingHandler } from '../collaboration/collaborative-editing-handler';
import { ICollaborationProvider, ICollaborationActionData } from '@syncfusion/ej2-collaborator';

export class PdfViewerAdapter implements ICollaborationProvider {
    private collaborativeEditingHandler: CollaborativeEditingHandler;
    private fileName: string = '';
    public currentRoomName: string = '';
    private isDocumentLoaded: boolean = false;
    private currentUser: string = '';
    private connectionId: string = '';

    constructor(
        private viewer: PdfViewer,
        private serviceUrl: string,
        currentUser: string
    ) {
        this.currentUser = currentUser;
        this.connectionId = this.generateConnectionId();
        
        // Initialize the source-level collaboration handler
        this.collaborativeEditingHandler = new CollaborativeEditingHandler(
            viewer,
            currentUser
        );
        
        console.log(
            `[PdfViewerAdapter] Initialized - User: ${this.currentUser}, ConnectionId: ${this.connectionId}, ServiceUrl: ${this.serviceUrl}`
        );
    }
 
    private generateConnectionId(): string {
        return `conn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    public async loadFromServer(fileName?: string): Promise<string> {
        this.isDocumentLoaded = false;
        this.fileName = fileName || 'document.pdf';

        const roomName: string = this.getRoomName();
        this.currentRoomName = roomName;

        try {
            console.log(
                `[PdfViewerAdapter] Joining collaboration - Room: ${roomName}, File: ${this.fileName}, User: ${this.currentUser}`
            );

            const response = await fetch(
                `${this.serviceUrl}api/collaboration/ImportFile`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        roomName: roomName,
                        fileName: this.fileName,
                        currentUser: this.currentUser,
                        connectionId: this.connectionId
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

            console.log(
                `[PdfViewerAdapter] Successfully joined collaboration room and loaded document state`
            );

            return roomName;
        } catch (error) {
            console.error('[PdfViewerAdapter] Error loading from server:', error);
            throw error;
        }
    }

    public async open(responseText: string, roomName: string): Promise<void> {
        try {
            const data: any = JSON.parse(responseText);

            // Extract version for document state
            const version = data.version || data.currentVersion || 0;
            
            // Update collaboration handler with room info and version tracking
            this.collaborativeEditingHandler.updateRoomInfo(
                roomName,
                version,
                `${this.serviceUrl}api/collaboration/`
            );

            console.log(
                `[PdfViewerAdapter] Collaboration context initialized - Room: ${roomName}, Version: ${version}, Operations: ${data.operations.length || 0}`
            );

            // Apply initial state: annotations, form fields, page organizer snapshots
            // These are stored as snapshots, not incremental operations
            if (data.operations && data.operations.length > 0) {
                console.log(
                    `[PdfViewerAdapter] Applying ${data.operations.length} pending operation(s)`
                );
                for (const op of data.operations) {
                    this.applyRemoteAction(op.type, op);
                }
            }

            this.isDocumentLoaded = true;
            console.log('[PdfViewerAdapter] Document loaded and collaboration initialized');
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

            console.log(
                `[PdfViewerAdapter] Sending ${operations.length} operation(s) to server`
            );

            // Delegate to handler which manages routing and UpdateAction API calls
            await this.collaborativeEditingHandler.sendActionToServer(operations);

            console.log('[PdfViewerAdapter] Successfully sent operations to server');
        } catch (error) {
            console.error('[PdfViewerAdapter] Error sending operations:', error);
            throw error;
        }
    }

    
    public applyRemoteAction(action: string, data: ICollaborationActionData | any): void {
        try {
            if (!data) {
                console.warn('[PdfViewerAdapter] Empty data received');
                return;
            }

            // Extract payload if wrapped in ICollaborationActionData
            const payload = (data as ICollaborationActionData).payload || data;
            const actionType = action || payload.type || 'unknown';

            console.log(
                `[PdfViewerAdapter] Applying remote action - Type: ${actionType}, User: ${payload.userName}`
            );

            // Echo detection: filter out sender's own operations
            if (payload.connectionId === this.connectionId) {
                console.log('[PdfViewerAdapter] Filtering out echo operation from self');
                return;
            }

            // Route based on action type
            if (actionType === 'addUser') {
                this.handleUserPresence('addUser', payload);
            } else if (actionType === 'removeUser') {
                this.handleUserPresence('removeUser', payload);
            } else if (actionType === 'connectionId') {
                this.handleConnectionId(payload);
            } else if (actionType === 'Save' || payload.action === 'Save') {
                // Save actions bypass echo filtering and standard routing
                console.log(
                    '[PdfViewerAdapter] Processing Save action from collaboration server'
                );
                this.handleRemoteSaveRequest(payload);
            } else if (payload.type === 'annotation' || payload.type === 'formField' || 
                       payload.type === 'formFieldAction' || payload.type === 'pageOrganizer') {
                // Standard collaboration operations: delegate to handler
                this.collaborativeEditingHandler.applyRemoteAction(payload.type, payload);
            } else {
                console.warn(`[PdfViewerAdapter] Unknown action type: ${actionType}`);
            }
        } catch (error) {
            console.error('[PdfViewerAdapter] Error applying remote action:', error);
        }
    }

   
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
   
}
```


### Step 3- PDF Viewer initalization and collaborator client wiring
```ts
import {
    PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner, PageOrganizer,
    AnnotationChangedEventArgs, FormFieldChangedEventArgs, FormFieldFocusOutEventArgs, PageOrganizerSavedEventArgs
} from "@syncfusion/ej2-pdfviewer";
import { PdfViewerAdapter } from "./collaboration/pdfViewerAdapter";
import { CollaborationClient } from '@syncfusion/ej2-collaborator';

// Initialize PDF Viewer with all necessary modules
PdfViewer.Inject(
    Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner, PageOrganizer
);
// Create PdfViewer instance
const viewer: PdfViewer = new PdfViewer();
// Enable collaborative editing on the viewer
viewer.enableCollaborativeEditing = true;
// Append viewer to DOM
viewer.appendTo("#pdfViewer");
let adapter: PdfViewerAdapter;
let client: CollaborationClient;

viewer.resourcesLoaded = async function () {
    console.log('[Index] Viewer resourcesLoaded event triggered');

        try {
            // Get collaboration service URL from environment or use default
            const serviceUrl = 'http://localhost:3000/';
            adapterServiceUrl = serviceUrl;

            console.log(`[Index] Initializing collaboration - User: ${currentUserName}, Service: ${serviceUrl}`);

            // Create adapter to bridge PdfViewer with collaboration service
            adapter = new PdfViewerAdapter(viewer, serviceUrl, currentUserName);

            // Create and configure collaboration client
            client = new CollaborationClient(adapter, {
                serviceUrl,
                connectionType: 'websocket',
                currentUser: currentUserName,
                onUserJoined: (user: any) => {
                    console.log('[Index] User joined collaboration:', user);
                },
                onUserLeft: (user: any) => {
                    console.log('[Index] User left collaboration:', user);
                }
            });           

            // Load document from server and join room asynchronously
            (async () => {
                try {
                    // Step 1: Load from server (gets room name and pending operations)
                    const roomName = await adapter.loadFromServer();
                    adapterCurrentRoomName = roomName;
                    console.log(`[Index] Loaded from server - Room: ${roomName}`);

                    // Step 2: Join the collaboration room with the client
                    await client.joinRoomAsync(roomName);
                    console.log(`[Index] Joined collaboration room: ${roomName}`);

                    // Step 3: Fetch and load the current PDF document state
                    await fetchAndLoadPDFDocument();
                    console.log('[Index] PDF document loaded successfully');

                } catch (error) {
                    console.error('[Index] Error during collaboration initialization:', error);
                }
            })();

        } catch (error) {
            console.error('[Index] Error initializing collaboration:', error);            
        }
    
};
viewer.documentChanged = (args: AnnotationChangedEventArgs | FormFieldChangedEventArgs | FormFieldFocusOutEventArgs | PageOrganizerSavedEventArgs) => {
    try {
        // Handle annotation changes
        if ('annotationId' in args) {
            console.log('[Index] Annotation changed:', (args as any).annotationId);

            let operations: any[];
            if ((args as any).action) {
                operations = [{
                    action: (args as any).action,
                    annotation: (args as any).annotationId,
                    type: 'annotation',
                    isRedacted: (args as any).isRedacted
                }];
            } else {
                // Handle annotation removal or cleanup
                operations = [{
                    type: 'removeUser',
                    client: client,
                    currentUser: currentUserName
                }];
            }

            adapter.sendActionToServer(operations);
            console.log('[Index] Sent annotation operation to server');
        }
        // Handle form field changes
        else if ('formField' in args) {
            console.log('[Index] Form field changed:', (args as any).formField);

            const operations = [{
                action: (args as any).action,
                formField: (args as any).formField,
                type: 'formField'
            }];

            adapter.sendActionToServer(operations);
            console.log('[Index] Sent form field operation to server');
        }
        // Handle form field value updates (focus out)
        else if ('fieldName' in args) {
            console.log('[Index] Form field updated:', (args as any).fieldName);

            const field: any = args;
            const operations = [{
                action: 'formFieldUpdate',
                data: field,
                type: 'formField'
            }];

            adapter.sendActionToServer(operations);
            console.log('[Index] Sent form field update to server');
        }
        // Handle page organizer changes
        else if ('organizePageActions' in args) {
            console.log('[Index] Page organizer changed');

            const eventData: any = args;
            const actionDetails: any = (args as any).organizePageActions && typeof ((args as any).organizePageActions) === 'string' 
                ? JSON.parse((args as any).organizePageActions) 
                : "";

            let operations: any[];

            if (eventData && eventData.savedDocument === null && actionDetails.action && actionDetails.action === 'applyCancelled') {
                // User cancelled the page organizer operation
                operations = [{
                    type: 'removeUser',
                    client: client,
                    currentUser: currentUserName
                }];
            }
            else if (eventData && eventData.savedDocument !== null && actionDetails.length > 0 && actionDetails[0].action !== 'applyCancelled') {
                // Page organizer operation applied successfully
                operations = [{
                    action: 'pageOrganizerUpdate',
                    data: (args as any).organizePageActions,
                    type: 'pageOrganizer'
                }];
            } else {
                // No valid operation to send
                return;
            }

            adapter.sendActionToServer(operations);
            console.log('[Index] Sent page organizer operation to server');
        }

    } catch (error) {
        console.error('[Index] Error processing document change:', error);
    }
};

async function fetchAndLoadPDFDocument(): Promise<void> {
    try {
        console.log(`[Index] Fetching PDF from room: ${adapterCurrentRoomName}`);

        // Build query parameters for GetPDFDocument endpoint
        const queryParams = new URLSearchParams({
            roomName: adapterCurrentRoomName || 'default'
        });

        // Fetch PDF document from collaboration service
        const response = await fetch(
            `${adapterServiceUrl}api/collaboration/GetPDFDocument?${queryParams.toString()}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        if (!result.success) {
            throw new Error(`Server error: ${result.error}`);
        }

        console.log(`[Index] PDF retrieved successfully - Size: ${result.contentLength} bytes`);

        // Step 1: Decode Base64 content to binary string
        const binaryString = atob(result.content);

        // Step 2: Convert binary string to Uint8Array
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        // Step 3: Create Blob from Uint8Array
        const pdfBlob = new Blob([bytes], { type: 'application/pdf' });
        console.log(`[Index] Converted to Blob - Size: ${pdfBlob.size} bytes`);

        // Step 4: Load the PDF into the viewer
        await loadPDFBlobIntoViewer(pdfBlob);
        console.log('[Index] PDF loaded into viewer');

    } catch (error) {
        console.error('[Index] Error fetching PDF document:', error);
        throw error;
    }
}

/**
 * Loads a PDF blob into the viewer
 * 
 * Attempts to load using viewer.load() method with Uint8Array,
 * with fallback to data URL if needed.
 * 
 * @param pdfBlob - The PDF blob to load
 * @returns Promise that resolves when PDF is loaded
 */
async function loadPDFBlobIntoViewer(pdfBlob: Blob): Promise<void> {
    try {
        return new Promise<void>((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                try {
                    const arrayBuffer = reader.result as ArrayBuffer;
                    const uint8Array = new Uint8Array(arrayBuffer);

                    // Attempt to load using viewer.load() with Uint8Array
                    if (viewer.load && typeof viewer.load === 'function') {
                        viewer.load(uint8Array, '');
                        console.log('[Index] Loaded PDF using viewer.load(Uint8Array)');
                        resolve();
                        return;
                    }

                    // Fallback: Try loading via data URL
                    const dataReader = new FileReader();
                    dataReader.onload = () => {
                        try {
                            const dataUrl = dataReader.result as string;

                            if (viewer.load && typeof viewer.load === 'function') {
                                viewer.load(dataUrl, '');
                                console.log('[Index] Loaded PDF using viewer.load(dataUrl)');
                                resolve();
                            } else {
                                console.error('[Index] Viewer does not support load method');
                                reject(new Error('Viewer load method not available'));
                            }
                        } catch (error) {
                            reject(error);
                        }
                    };

                    dataReader.onerror = () => {
                        reject(new Error('Failed to read blob as data URL'));
                    };

                    dataReader.readAsDataURL(pdfBlob);

                } catch (error) {
                    reject(error);
                }
            };

            reader.onerror = () => {
                reject(new Error('Failed to read blob as array buffer'));
            };

            reader.readAsArrayBuffer(pdfBlob);
        });

    } catch (error) {
        console.error('[Index] Error loading PDF blob:', error);
        throw error;
    }
}

```


### Step 4 — Serve the client

Build and serve the front\-end application so the page is reachable at, for example, http://localhost:4000

## Integrate Collaboration Server

### Step 5 — Install the Node.js package

In your Node.js project, install the Node.js Collaboration Server:

npm install ej2\-collaborator\-server

### Step 6 — Create the Node.js server

CollaborationServer is the entry point for the Node.js Collaboration Server. It hosts the HTTP \+ WebSocket server, mounts the REST routes under /api/collaboration/\*, and runs the background save worker.

```javascript

// server.js

const { CollaborationServer } \= require('ej2\-collaborator\-server');

const PdfViewerAdapter = require('./adapters/PdfViewerAdapter');


const adapter 


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
registerDocumentEditorRoutes(
    server.app,
    server.actionService,
    adapter,
    server

);

server.app.get('/api/test', (req, res) => {res.json({status: 'Node Server Running'});
});

server.start();
```


### Step 7 — Add the PDF Viewer adapter 

PdfViewerAdapter is the control\-specific translator on the server side. 

```javascript

// adapters/ PdfViewerAdapter.js

const {
    ICollaborationAdapter,
    CollaborationServer
} = require('@syncfusion/ej2-collaborator-server');

    mapControlToGenericAction(controlAction) {

        return {

            roomName: controlAction.roomName,

            connectionId: controlAction.connectionId,

            currentUser: controlAction.currentUser,

            version: controlAction.version,

            clientVersion: controlAction.clientVersion,

            isTransformed: controlAction.isTransformed,

            data: JSON.stringify(controlAction.operations)

        };

    }


    mapGenericToControlAction(collaborationAction) {

        return {

            roomName: collaborationAction.roomName,

            connectionId: collaborationAction.connectionId,

            currentUser: collaborationAction.currentUser,

            version: collaborationAction.version,

            clientVersion: collaborationAction.clientVersion,

            isTransformed: collaborationAction.isTransformed,

            operations: collaborationAction.data

                ? JSON.parse(collaborationAction.data)

                : []

        };

    }


    async transformOperations(actions) {

        // The PDF Viewer runs its own OT via its collaborative editing handler.

        // Replace this with the control-specific transform routine.

        
    }


    async processSaveRequestAsync(request) {

        // Replace this with the control-specific save routine.
      

    }

}


module.exports = PdfViewerAdapter;
```

## Step 9 — Add the collaborative editing controller (web service methods)

The Node.js server exposes built\-in REST routes under /api/collaboration/\*, but most consumer apps also add their own surface to bridge their editor's native action shape with the shared CollaborationAction envelope. Every EJ2 content editor component that supports collaboration (Document Editor, PDF Viewer, Spreadsheet) exposes the same three web service methods on its collaboration controller. Each method is required:
|**Web service method**|**Why it is needed**|
|:---|:---|
|ImportFile|Loads the source document and applies any pending collaboration actions before sending the latest document state to a newly connected client. Returns the document content and current server version.|
|UpdateAction|Receives editing actions from connected clients, processes operational transformation, persists the action, and broadcasts the updated action to other participants.|
|GetActionsFromServer|Retrieves collaboration actions created after the client's last synchronized version so the client can catch up with the latest document state.|


```ts
// controllers/collaborative\-editing\-controller.js

function registerCollaborativeEditingRoutes(app, actionService, adapter,server) {


   app.post('/api/CollaborativeEditing/ImportFile', async (req, res) => {
        try {
            const { roomName, fileName } = req.body;
 
            if (!roomName) {
                return res.status(400).json({ error: 'Room name is required' });
            }
 
            console.log('[ImportFile] Room:', roomName, 'File:', fileName);
 
            // Get all pending operations for this room
            const allActions = await actionService.getPendingOperations(roomName, 0, -1);
 
            // Return raw operations - client handles filtering/reconstruction
            const operations = (allActions || []).map((x) =>
                adapter.mapGenericToControlAction(x)
            );
 
            return res.json({ roomName, version: allActions.length, operations });
        } catch (e) {
            console.error('[ImportFile] Error:', e.message);
            return res.status(500).json({
                error: 'Failed to import file',
                details: e.message
            });
        }
    }); 
  
    app.post('/api/CollaborativeEditing/UpdateAction', async (req, res) => {
        try {
            console.log('updateAction');
            const request = req.body;
 
            if (!request.roomName) {
                return res.status(400).json({ error: 'RoomName is required' });
            }
 
            if (!request.type) {
                return res.status(400).json({ error: 'Type is required' });
            }
 
            console.log(
                '[UpdateAction] Room:', request.roomName,
                'Type:', request.type,
                'Connection:', request.connectionId
            );
 
            let data = null;
            let actionDescription = '';
 
            // Validate and extract type-specific data
            switch (request.type) {
                case 'annotation': {
                    const annotationData = request.data;
                    if (!annotationData || !annotationData.xfdfData) {
                        return res.status(400).json({
                            error: 'Data.xfdfData is required for annotation type'
                        });
                    }
                    data = annotationData;
                    actionDescription = 'Annotation updated';
                    break;
                }
 
                case 'formField': {
                    const formFieldData = request.data;
                    if (!formFieldData || !formFieldData.jsonData) {
                        return res.status(400).json({
                            error: 'Data.jsonData is required for formField type'
                        });
                    }
                    data = formFieldData;
                    actionDescription = 'Form field updated';
                    break;
                }
 
                case 'formFieldAction': {
                    const formFieldActionData = request.data;
                    if (!formFieldActionData || !formFieldActionData.changes) {
                        return res.status(400).json({
                            error: 'Data.changes is required for formFieldAction type'
                        });
                    }
 
                    // Validate changes JSON format
                    try {
                        const changesObj = JSON.parse(formFieldActionData.changes);
                        if (!changesObj) {
                            return res.status(400).json({
                                error: 'Invalid changes JSON format'
                            });
                        }
                    } catch (ex) {
                        return res.status(400).json({
                            error: 'Failed to parse changes JSON',
                            details: ex.message
                        });
                    }
 
                    data = formFieldActionData;
                    actionDescription = 'Form field action updated';
                    break;
                }
 
                case 'pageOrganizer': {
                    if (!request.data) {
                        return res.status(400).json({
                            error: 'Data is required for pageOrganizer type'
                        });
                    }
                    data = request.data;
                    actionDescription = 'Page organizer updated';
                    break;
                }
 
                default:
                    return res.status(400).json({
                        error: `Invalid action type: ${request.type}`
                    });
            }
 
            // Convert to CollaborationAction
            const collaborationAction = adapter.mapControlToGenericAction(request);
 
            // Store in Redis
            await actionService.addOperation(collaborationAction, adapter);
            console.log('addOperation');
 
            // Get all pending operations for this room
            const allActions = await actionService.getPendingOperations(request.roomName, 0, -1);
 
            // Broadcast: Reconstruct a clean request with strongly-typed data
            // This ensures the transport layer receives properly formatted data that serializes correctly
            const broadcastRequest = {
                roomName: request.roomName,
                connectionId: request.connectionId,
                userName: request.userName,
                type: request.type,
                currentVersion: request.currentVersion,
                data: data
            };
 
            console.log('broadcastToRoom');
            // Broadcast to other clients in room
            // Clients filter via connectionId to ignore their own updates
            if (transport && typeof transport.broadcastToRoom === 'function') {
                try {
                    await transport.broadcastToRoom(
                        request.roomName,
                        {
                            event: 'action',
                            data: broadcastRequest
                        }
                    );
                    console.log('broadcastToRoom   1');
                } catch (broadcastError) {
                    console.error('[UpdateAction] Broadcast error:', broadcastError.message);
                    // Continue even if broadcast fails - action is already stored
                }
            }
 
            return res.json({
                success: true,
                message: actionDescription,
                data: data
            });
        } catch (e) {
            console.error('[UpdateAction] Error:', e.message, e.stack);
            return res.status(500).json({
                error: 'Failed to update action',
                details: e.message
            });
        }
    });


    app.post('/api/CollaborativeEditing/GetActionsFromServer', async (req, res) => {

        try {

            const { roomName, version } = req.body;

            const actions = await actionService.getEffectivePendingVersion(

                roomName, version

            );

            res.json(

                actions.map(x => adapter.mapGenericToControlAction(x))

            );

        } catch (e) {

            console.error(e);

            res.status(500).json({ error: e.message });

        }

    });

}


module.exports = { registerCollaborativeEditingRoutes };

```

### Step 10 — Run the application

After completing the client and server setup:

1. Start the Redis server.

1. Run the Node.js server:

1. Run the client application:

1. Open the application in multiple browser windows or tabs.

1. Open the same document and make changes in one window.

**Result**

- Changes are synchronized automatically across all connected users.

- User join and leave events are reflected in real time.

- Editing operations are stored in Redis and processed by the Node.js Collaboration Server.

- Document changes are automatically saved when the configured saveThreshold is reached.