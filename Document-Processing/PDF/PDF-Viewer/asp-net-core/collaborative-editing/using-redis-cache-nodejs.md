---
layout: post
title: Collaborative Editing in ASP.NET Core PDF Viewer with Node.js | Syncfusion
description: Learn how to implement ASP.NET Core PDF Viewer collaborative editing with the Syncfusion Collaborator client and Node.js server packages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in ASP.NET Core PDF Viewer with Node.js

This topic explains how to connect the ASP.NET Core PDF Viewer to the Node.js Collaboration Server. The server provides WebSocket communication, Redis operation storage, room management, synchronization, and save processing.

## Prerequisites

- An ASP.NET Core web application.
- Node.js 18 or later.
- A Redis instance.
- Script(ej2.min.js) and resources.

## Client-side setup

### Step 1: Add CSS and script references from CDN

In your Razor view (e.g., `Index.cshtml`), add the following CDN links:

{% tabs %}
{% highlight html tabtitle="Index.cshtml" %}
{% raw %}
  <script src="https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2.min.js" type="text/javascript"></script>
  <link href="https://cdn.syncfusion.com/ej2/35.1.37/tailwind3.css" rel="stylesheet" />
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Create the PDF Viewer adapter

Create `pdfViewerAdapter.js` with the following client adapter:

{% tabs %}
{% highlight javascript tabtitle="pdfViewerAdapter.js" %}
{% raw %}
/**
 * PdfViewerAdapter - Implements ICollaborationProvider for Syncfusion PDF Viewer
 * 
 * This adapter acts as a bridge between the PDF Viewer and the CollaborationClient.
 * It manages:
 * - Document loading and state initialization
 * - Collaborative editing operations
 * - Server communication for real-time synchronization
 */

function PdfViewerAdapter(viewer, serviceUrl, currentUser) {
    this.viewer = viewer;
    this.serviceUrl = serviceUrl;
    this.currentUser = currentUser;
    this.fileName = '';
    this.currentRoomName = '';
    this.isDocumentLoaded = false;
    this.pendingOperations = [];

    // Initialize the collaborative editing handler
    this.collaborativeEditingHandler = new ej.pdfviewer.CollaborativeEditingHandler(
        viewer,
        currentUser
    );

    console.log('[PdfViewerAdapter] Initialized for user:', currentUser);
}

/**
 * Extracts or generates room ID from URL query parameters.
 * Ensures a unique room ID is set for the collaboration session.
 * Updates the browser URL history with the generated room ID.
 * 
 * @returns {string} Room identifier
 */
PdfViewerAdapter.prototype.getRoomName = function() {
    if (typeof window !== 'undefined') {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var roomId = urlParams.get('id');

        if (!roomId) {
            roomId = Math.random().toString(32).slice(2);
            window.history.replaceState({}, '', '?id=' + roomId);
        }

        return roomId;
    }

    return Math.random().toString(32).slice(2);
};

/**
 * Fetches the document from the product's REST API and joins a collaboration room.
 * Returns the room name to be used by collaboration client.
 * 
 * @param {string} fileName - Optional file name to load
 * @returns {Promise<string>} The room name
 */
PdfViewerAdapter.prototype.loadFromServer = function(fileName) {
    var self = this;
    this.isDocumentLoaded = false;
    fileName = fileName || 'document.pdf';

    var roomName = this.getRoomName();
    this.currentRoomName = roomName;

    return fetch(this.serviceUrl + 'api/CollaborativeEditing/ImportFile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            roomName: roomName,
            fileName: fileName,
            currentUser: this.currentUser
        })
    })
    .then(function(response) {
        if (!response.ok) throw new Error('Failed to join collaboration room: ' + response.statusText);
        return response.text();
    })
    .then(function(responseText) {
        return self.open(responseText, roomName).then(function() {
            return roomName;
        });
    })
    .catch(function(error) {
        console.error('[PdfViewerAdapter] Error loading from server:', error);
        throw error;
    });
};

/**
 * Initializes collaboration context and applies initial document state.
 * 
 * @param {string} responseText - JSON response text from ImportFile endpoint
 * @param {string} roomName - Current collaboration room name
 */
PdfViewerAdapter.prototype.open = function(responseText, roomName) {
    var self = this;
    try {
        var data = JSON.parse(responseText);
        var version = data.version || data.currentVersion || 0;

        console.log('[PdfViewerAdapter] Opening document - Version:', version, '- Operations count:', data.operations ? data.operations.length : 0);

        // Update collaboration handler with room info and version tracking
        this.collaborativeEditingHandler.updateRoomInfo(
            roomName,
            version,
            this.serviceUrl + 'api/CollaborativeEditing/'
        );

        // Apply initial state: annotations, form fields, page organizer snapshots
        this.pendingOperations = data.operations || [];
        if (data.operations && data.operations.length > 0) {
            console.log('[PdfViewerAdapter] Applying', data.operations.length, 'pending operations');
            for (var i = 0; i < data.operations.length; i++) {
                var op = data.operations[i];
                try {
                    this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
                } catch (opError) {
                    console.warn('[PdfViewerAdapter] Error applying operation:', op, opError);
                }
            }
        }

        this.isDocumentLoaded = true;
        console.log('[PdfViewerAdapter] Document initialization complete');
        return Promise.resolve();
    } catch (error) {
        console.error('[PdfViewerAdapter] Error initializing document:', error);
        return Promise.reject(error);
    }
};

/**
 * Sends local changes to the collaboration service via UpdateAction endpoint.
 * 
 * @param {Array} operations - Array of operations/changes from the local user
 */
PdfViewerAdapter.prototype.sendActionToServer = function(operations) {
    if (!operations || operations.length === 0) {
        console.warn('[PdfViewerAdapter] No operations to send');
        return Promise.resolve();
    }

    console.log('[PdfViewerAdapter] Sending', operations.length, 'operations to server');

    // Delegate to handler which manages routing and UpdateAction API calls
    return this.collaborativeEditingHandler.sendActionToServer(operations);
};

/**
 * Applies remote changes received from other collaborators.
 * Handles user profile images and delegates logic to the collaborative editing handler.
 * 
 * @param {string} action - Type of action being applied
 * @param {Object} data - Object containing action data with ICollaborationActionData interface
 */
PdfViewerAdapter.prototype.applyRemoteAction = function(action, data) {
    try {
        if (action === 'addUser') {
            // Handle multiple users
            if (data && data.payload && Array.isArray(data.payload) && data.payload.length > 0) {
                for (var i = 0; i < data.payload.length; i++) {
                    this._assignUserImage(data.payload[i]);
                }
            }
            // Handle single user
            else if (data && data.payload) {
                this._assignUserImage(data.payload);
            }
        }
        else if (action === 'connectionId') {
            // Handle connection ID - assign image to current user
            var image = this._getUserImage(this.currentUser);
            if (data && typeof data.payload !== 'undefined') {
                data.payload = { payload: data.payload, image: image };
            }
        }

        // Delegate to handler for actual action application
        if (this.collaborativeEditingHandler && this.collaborativeEditingHandler.applyRemoteAction) {
            var payloadToApply = (data && data.payload) ? data.payload : data;
            this.collaborativeEditingHandler.applyRemoteAction(action, payloadToApply);
        }
    } catch (error) {
        console.error('[PdfViewerAdapter] Error applying remote action:', error);
    }
};

/**
 * Helper: Assign user image based on username
 * @private
 * @param {Object} user - User object to assign image to
 */
PdfViewerAdapter.prototype._assignUserImage = function(user) {
    if (user && user.currentUser) {
        user.image = this._getUserImage(user.currentUser);
    }
};

/**
 * Helper: Get avatar image URL for a user
 * @private
 * @param {string} userName - The username
 * @returns {string} Avatar image URL
 */
PdfViewerAdapter.prototype._getUserImage = function(userName) {
    var avatarMap = {
        'RIO': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic01.png',
        'JOHN': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic03.png',
        'MAXY': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic02.png',
        'SHAI': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic04.png',
        'SRI': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic05.png'
    };
    return avatarMap[userName] || 'https://ej2.syncfusion.com/demos/src/avatar/images/default.png';
};

/**
 * Updates pending operations by applying them to the document.
 * This is used to sync initial state from server.
 */
PdfViewerAdapter.prototype.updatePendingOperations = function() {
    try {
        if (this.pendingOperations && this.pendingOperations.length > 0) {
            console.log('[PdfViewerAdapter] Updating', this.pendingOperations.length, 'pending operations');
            for (var i = 0; i < this.pendingOperations.length; i++) {
                var op = this.pendingOperations[i];
                try {
                    this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
                } catch (opError) {
                    console.warn('[PdfViewerAdapter] Error applying pending operation:', op, opError);
                }
            }
        }
    } catch (error) {
        console.error('[PdfViewerAdapter] Error updating pending operations:', error);
    }
};

/**
 * Gets the current document state
 * Used for snapshots and sync operations
 * 
 * @returns {Object} Current document state
 */
PdfViewerAdapter.prototype.getDocumentState = function() {
    try {
        return {
            currentUser: this.currentUser,
            roomName: this.currentRoomName,
            isDocumentLoaded: this.isDocumentLoaded,
            fileName: this.fileName
        };
    } catch (error) {
        console.error('[PdfViewerAdapter] Error getting document state:', error);
        return null;
    }
};

/**
 * Cleans up resources
 */
PdfViewerAdapter.prototype.dispose = function() {
    try {
        console.log('[PdfViewerAdapter] Disposing resources');
        if (this.collaborativeEditingHandler) {
            this.collaborativeEditingHandler = null;
        }
        this.viewer = null;
        this.pendingOperations = [];
    } catch (error) {
        console.error('[PdfViewerAdapter] Error disposing:', error);
    }
};
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 3: Create the Razor view

Create `Index.cshtml` with the PDF Viewer tag helper and initialization script:

{% tabs %}
{% highlight html tabtitle="Index.cshtml" %}
{% raw %}
@page
@model IndexModel
@{
    ViewData["Title"] = "PDF Collaboration";
}

<div id="container">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib"
                   resourcesLoaded="handleResourcesLoaded"
                   documentChanged="handleDocumentChanged">
    </ejs-pdfviewer>
</div>

<script src="~/js/pdfViewerAdapter.js"></script>
<script>
var userList = ['RIO', 'JOHN', 'MAXY', 'SHAI', 'SRI'];
var currentUserName = userList[Math.floor(Math.random() * userList.length)];
var SERVICE_URL = 'http://localhost:8081/';

var appState = {
    isDocumentLoaded: false,
    currentUser: currentUserName,
    pdfViewer: null,
    adapter: null,
    client: null,
    roomNameRef: ''
};

function loadPDFBlobIntoViewer(pdfBlob) {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.onload = function() {
            try {
                var blobUrl = URL.createObjectURL(pdfBlob);
                if (appState.pdfViewer) {
                    appState.pdfViewer.load(blobUrl, '');
                    resolve();
                } else {
                    reject(new Error('Viewer not available'));
                }
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = function() {
            reject(new Error('Failed to read blob'));
        };
        reader.readAsArrayBuffer(pdfBlob);
    });
}

function fetchAndLoadPDFDocument() {
    var queryParams = new URLSearchParams({ roomName: appState.roomNameRef || 'default' });
    return fetch(SERVICE_URL + 'api/CollaborativeEditing/GetPDFDocument?' + queryParams.toString(), {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    })
    .then(function(response) {
        if (!response.ok) throw new Error('HTTP Error: ' + response.status);
        return response.json();
    })
    .then(function(result) {
        if (!result.success) throw new Error('Server error: ' + result.error);
        var binaryString = atob(result.content);
        var bytes = new Uint8Array(binaryString.length);
        for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        var pdfBlob = new Blob([bytes], { type: 'application/pdf' });
        return loadPDFBlobIntoViewer(pdfBlob);
    });
}

function handleResourcesLoaded() {
    if (!appState.isDocumentLoaded) {
        appState.isDocumentLoaded = true;

        (function() {
            try {
                var adapter = new PdfViewerAdapter(appState.pdfViewer, SERVICE_URL, appState.currentUser);
                appState.adapter = adapter;

                var client = new ej.collaborator.CollaborationClient(adapter, {
                    serviceUrl: SERVICE_URL,
                    connectionType: 'websocket',
                    currentUser: appState.currentUser,
                    onRemoteAction: function(action, data) {
                        if (adapter && typeof adapter.applyRemoteAction === 'function') {
                            adapter.applyRemoteAction(action, data);
                        }
                    }
                });
                appState.client = client;

                adapter.loadFromServer().then(function(roomName) {
                    appState.roomNameRef = roomName;
                    return client.joinRoomAsync(roomName);
                })
                .then(function() {
                    return fetchAndLoadPDFDocument();
                })
                .catch(function(error) {
                    console.error('[App] Error during initialization:', error);
                });
            } catch (error) {
                console.error('[App] Error initializing collaboration:', error);
            }
        })();
    }
}

function handleDocumentChanged(args) {
    try {
        var operations = [];

        if (args && 'annotationId' in args) {
            if (args.action) {
                operations = [{
                    action: args.action,
                    annotation: args.annotationId,
                    type: 'annotation',
                    isRedacted: args.isRedacted
                }];
            }
        }
        else if (args && 'formField' in args && !('fieldName' in args)) {
            operations = [{
                action: args.action,
                formField: args.formField,
                type: 'formField'
            }];
        }
        else if (args && 'fieldName' in args) {
            operations = [{
                action: 'formFieldUpdate',
                data: args,
                type: 'formField'
            }];
        }
        else if (args && 'organizePageActions' in args) {
            var actionDetails = typeof args.organizePageActions === 'string'
                ? JSON.parse(args.organizePageActions)
                : '';
            if (args.savedDocument === null && actionDetails.action && actionDetails.action === 'applyCancelled') {
                operations = [{
                    type: 'removeUser',
                    currentUser: appState.currentUser
                }];
            }
            else if (args.savedDocument !== null && actionDetails.length > 0 && actionDetails[0].action !== 'applyCancelled') {
                operations = [{
                    action: 'pageOrganizerUpdate',
                    data: args.organizePageActions,
                    type: 'pageOrganizer'
                }];
            }
        }

        if (operations.length > 0 && appState.adapter && appState.adapter.sendActionToServer) {
            appState.adapter.sendActionToServer(operations).catch(function(err) {
                console.error('[App] Error sending operation:', err);
            });
        }
    } catch (error) {
        console.error('[App] Error processing document change:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var pdfViewerElement = document.getElementById('pdfviewer');
    if (pdfViewerElement && pdfViewerElement.ej2_instances) {
        appState.pdfViewer = pdfViewerElement.ej2_instances[0];
        appState.pdfViewer.enableCollaborativeEditing = true;
        appState.pdfViewer.documentChanged = handleDocumentChanged;
    }
});
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Server-side integration

### 1. Install the Collaboration Server

{% tabs %}
{% highlight bash tabtitle="Install" %}
{% raw %}
npm install ej2-collaborator-server
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 4: Add the PDF Viewer server adapter

Create `adapters/PdfViewerAdapter.js` with the server adapter. For complete implementation with form field handling, XFDF import, signature rendering, and page organizer operations, refer to the [GitHub sample](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/Collaborative%20Editing).

{% tabs %}
{% highlight javascript tabtitle="adapters/PdfViewerAdapter.js" %}
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
{% highlight javascript tabtitle="controllers/collaborative-editing-controller.js" %}
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
{% highlight javascript tabtitle="server.js" %}
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

>N For complete production implementation with comprehensive form field handling, XFDF annotation import, signature rendering with path/image/text support, and advanced page organizer operations, refer to the [GitHub sample](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/Collaborative%20Editing).

## See Also

- [Getting Started with Node.js Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-node)