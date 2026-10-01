---
layout: post
title: Collaborative Editing in ES5 PDF Viewer with Node.js | Syncfusion
description: Learn how to implement ES5 JavaScript PDF Viewer collaborative editing with Syncfusion CDN scripts and Node.js server packages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in ES5 JavaScript PDF Viewer with Node.js

This topic explains how to connect the ES5 JavaScript PDF Viewer to the Node.js Collaboration Server. The server provides WebSocket communication, Redis operation storage, room management, synchronization, and save processing. Node.js collaborative editing currently supports PDF Viewer.

## Prerequisites

- An ES5 JavaScript PDF Viewer application.
- Node.js 18 or later.
- A Redis instance.
- Updated `ej2.min.js` script from CDN or CRG.

## Client-side integration

### 1. Add CDN scripts

Include the following scripts in your HTML file:

```html
<!-- Syncfusion EJ2 Script -->
<script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js"></script>
```

### 2. Add the PDF Viewer adapter

Create `pdfViewerAdapter.js` with the following production-ready client adapter:

{% tabs %}
{% highlight js tabtitle="pdfViewerAdapter.js" %}
{% raw %}

class PdfViewerAdapter {
    constructor(viewer, serviceUrl, currentUser) {
        this.viewer = viewer;
        this.serviceUrl = serviceUrl;
        this.currentUser = currentUser;
        this.fileName = '';
        this.currentRoomName = '';
        this.isDocumentLoaded = false;
        this.pendingOperations = [];

        this.collaborativeEditingHandler = new ej.pdfviewer.CollaborativeEditingHandler(viewer, currentUser);
    }

    getRoomName() {
        if (typeof window !== 'undefined') {
            var urlParams = new URLSearchParams(window.location.search);
            var roomId = urlParams.get('id');
            if (!roomId) {
                roomId = Math.random().toString(32).slice(2);
                window.history.replaceState({}, '', '?id=' + roomId);
            }
            return roomId;
        }
        return Math.random().toString(32).slice(2);
    }

    async loadFromServer(fileName) {
        this.isDocumentLoaded = false;
        this.fileName = fileName || 'document.pdf';
        var roomName = this.getRoomName();
        this.currentRoomName = roomName;

        try {
            var response = await fetch(this.serviceUrl + 'api/CollaborativeEditing/ImportFile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    roomName: roomName,
                    fileName: this.fileName,
                    currentUser: this.currentUser
                })
            });

            if (!response.ok) throw new Error('Failed to join collaboration room: ' + response.statusText);

            var responseText = await response.text();
            await this.open(responseText, roomName);
            return roomName;
        } catch (error) {
            console.error('[PdfViewerAdapter] Error loading from server:', error);
            throw error;
        }
    }

    async open(responseText, roomName) {
        try {
            var data = JSON.parse(responseText);
            var version = data.version || data.currentVersion || 0;

            this.collaborativeEditingHandler.updateRoomInfo(
                roomName,
                version,
                this.serviceUrl + 'api/CollaborativeEditing/'
            );

            this.pendingOperations = data.operations || [];
            if (data.operations && data.operations.length > 0) {
                for (var i = 0; i < data.operations.length; i++) {
                    try {
                        this.collaborativeEditingHandler.applyRemoteAction(data.operations[i].type, data.operations[i]);
                    } catch (e) {}
                }
            }
            this.isDocumentLoaded = true;
        } catch (error) {
            console.error('[PdfViewerAdapter] Error initializing document:', error);
            throw error;
        }
    }

    async sendActionToServer(operations) {
        if (!operations || operations.length === 0) return;
        try {
            await this.collaborativeEditingHandler.sendActionToServer(operations);
        } catch (error) {
            console.error('[PdfViewerAdapter] Error sending operations:', error);
        }
    }

    applyRemoteAction(action, data) {
        try {
            if (action === 'addUser' && data && data.payload) {
                if (Array.isArray(data.payload)) {
                    for (var i = 0; i < data.payload.length; i++) {
                        if (data.payload[i].currentUser) {
                            data.payload[i].image = this._getUserImage(data.payload[i].currentUser);
                        }
                    }
                } else if (data.payload.currentUser) {
                    data.payload.image = this._getUserImage(data.payload.currentUser);
                }
            }
            if (this.collaborativeEditingHandler && this.collaborativeEditingHandler.applyRemoteAction) {
                var payload = (data && data.payload) ? data.payload : data;
                this.collaborativeEditingHandler.applyRemoteAction(action, payload);
            }
        } catch (error) {
            console.error('[PdfViewerAdapter] Error applying remote action:', error);
        }
    }

    _getUserImage(userName) {
        var avatarMap = {
            'RIO': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic01.png',
            'JOHN': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic03.png',
            'MAXY': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic02.png',
            'SHAI': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic04.png',
            'SRI': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic05.png'
        };
        return avatarMap[userName] || '';
    }
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

### 3. Initialize the ES5 JavaScript PDF Viewer

Create an HTML file `index.html` with the complete ES5 JavaScript implementation. It uses the full life cycle: initializes collaboration from `resourcesLoaded`, loads the room, joins it, retrieves the current PDF, and sends every supported PDF Viewer action from `documentChanged`.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% raw %}

<!DOCTYPE html>
<html>
<head>
    <title>Collaborative PDF Viewer - ES5</title>
    <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/dist/ej2.css">
    <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js"></script>
    <script src="pdfViewerAdapter.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        #container {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }
        #collaborationStatusBar {
            padding: 10px 15px;
            background-color: #f0f0f0;
            border-bottom: 1px solid #ddd;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    </style>
</head>
<body>
    <div id="container"></div>
      <!-- Load adapter first, then main app -->
    <script src="pdfViewerAdapter.js" type="text/javascript"></script>
    <script src="app.js" type="text/javascript"></script>
</body>
</html>

{% endraw %}
{% endhighlight %}
{% endtabs %}

Create the application logic in `app.js`:

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% raw %}

var userList = ['RIO', 'JOHN', 'MAXY', 'SHAI', 'SRI'];
var currentUserName = userList[Math.floor(Math.random() * userList.length)];
var SERVICE_URL = 'http://localhost:8081/';

var appState = {
    isDocumentLoaded: false,
    collaborationStatus: 'initializing',
    currentUser: currentUserName,
    connectedUsers: [currentUserName],
    roomName: '',
    pdfViewer: null,
    adapter: null,
    client: null,
    roomNameRef: ''
};

async function loadPDFBlobIntoViewer(pdfBlob) {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.onload = function() {
            try {
                var uint8Array = new Uint8Array(reader.result);
                if (appState.pdfViewer && typeof appState.pdfViewer.load === 'function') {
                    appState.pdfViewer.load(uint8Array, '');
                    resolve();
                } else {
                    reject(new Error('Viewer load method not available'));
                }
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = function() { reject(new Error('Failed to read blob')); };
        reader.readAsArrayBuffer(pdfBlob);
    });
}

async function fetchAndLoadPDFDocument() {
    var response = await fetch(SERVICE_URL + 'api/CollaborativeEditing/GetPDFDocument?roomName=' + (appState.roomNameRef || 'default'));
    var result = await response.json();
    if (!result.success) throw new Error(result.error);
    
    var bytes = new Uint8Array(atob(result.content).split('').map(function(c) { return c.charCodeAt(0); }));
    var pdfBlob = new Blob([bytes], { type: 'application/pdf' });
    await loadPDFBlobIntoViewer(pdfBlob);
}

function updateStatusBar() {
    var statusBar = document.getElementById('collaborationStatusBar');
    if (statusBar) {
        var statusColor = appState.collaborationStatus === 'connected' ? '#28a745' : appState.collaborationStatus === 'error' ? '#dc3545' : '#ffc107';
        statusBar.innerHTML = '<div style="display: flex; justify-content: space-between; width: 100%;"><div><strong>User:</strong> ' + appState.currentUser + ' | <strong>Status:</strong> <span style="color: ' + statusColor + '">' + appState.collaborationStatus + '</span></div><div><strong>Connected Users:</strong> ' + (appState.connectedUsers.join(', ') || 'None') + '</div></div>';
    }
}

async function handleResourcesLoaded() {
    if (appState.isDocumentLoaded) return;
    appState.isDocumentLoaded = true;
    appState.collaborationStatus = 'loading';
    updateStatusBar();

    (async function() {
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
                },
                onUserJoined: function(user) {
                    var userName = user.userName || user.currentUser;
                    if (!appState.connectedUsers.includes(userName)) {
                        appState.connectedUsers.push(userName);
                        updateStatusBar();
                    }
                },
                onUserLeft: function(user) {
                    var userName = user.userName || user.currentUser;
                    appState.connectedUsers = appState.connectedUsers.filter(function(u) { return u !== userName; });
                    updateStatusBar();
                }
            });
            appState.client = client;

            var roomName = await adapter.loadFromServer();
            appState.roomNameRef = roomName;
            appState.roomName = roomName;
            updateStatusBar();

            await client.joinRoomAsync(roomName);
            await fetchAndLoadPDFDocument();

            appState.collaborationStatus = 'connected';
            updateStatusBar();
        } catch (error) {
            console.error('Error initializing collaboration:', error);
            appState.collaborationStatus = 'error';
            updateStatusBar();
        }
    })();
}

function handleDocumentChanged(args) {
    var operations = [];
    
    if (args && 'annotationId' in args) {
        operations = args.action ? [{ action: args.action, annotation: args.annotationId, type: 'annotation', isRedacted: args.isRedacted }] : [];
    }
    else if (args && 'formField' in args && !('fieldName' in args)) {
        operations = [{ action: args.action, formField: args.formField, type: 'formField' }];
    }
    else if (args && 'fieldName' in args) {
        operations = [{ action: 'formFieldUpdate', data: args, type: 'formField' }];
    }
    else if (args && 'organizePageActions' in args) {
        var actionDetails = typeof args.organizePageActions === 'string' ? JSON.parse(args.organizePageActions) : '';
        if (args.savedDocument !== null && actionDetails.length > 0) {
            operations = [{ action: 'pageOrganizerUpdate', data: args.organizePageActions, type: 'pageOrganizer' }];
        }
    }

    if (operations.length > 0 && appState.adapter) {
        appState.adapter.sendActionToServer(operations).catch(function(err) {
            console.error('Error sending operation:', err);
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var containerDiv = document.getElementById('container');
    if (containerDiv) {
        var statusBar = document.createElement('div');
        statusBar.id = 'collaborationStatusBar';
        statusBar.style.cssText = 'padding: 10px 15px; background-color: #f0f0f0; border-bottom: 1px solid #ddd; font-size: 12px;';
        containerDiv.insertBefore(statusBar, containerDiv.firstChild);

        var pdfViewerDiv = document.createElement('div');
        pdfViewerDiv.id = 'PdfViewer';
        pdfViewerDiv.style.cssText = 'height: calc(100% - 51px); width: 100%;';
        containerDiv.appendChild(pdfViewerDiv);
    }

    appState.pdfViewer = new ej.pdfviewer.PdfViewer({
        enableCollaborativeEditing: true,
        resourceUrl: 'https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib',
        resourcesLoaded: handleResourcesLoaded,
        documentChanged: handleDocumentChanged
    });

    ej.pdfviewer.PdfViewer.Inject(
        ej.pdfviewer.TextSelection,
        ej.pdfviewer.TextSearch,
        ej.pdfviewer.Print,
        ej.pdfviewer.Navigation,
        ej.pdfviewer.Toolbar,
        ej.pdfviewer.Magnification,
        ej.pdfviewer.Annotation,
        ej.pdfviewer.FormDesigner,
        ej.pdfviewer.FormFields,
        ej.pdfviewer.LinkAnnotation,
        ej.pdfviewer.BookmarkView,
        ej.pdfviewer.ThumbnailView,
        ej.pdfviewer.PageOrganizer
    );

    appState.pdfViewer.appendTo('#PdfViewer');
    updateStatusBar();
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

Create `adapters/PdfViewerAdapter.js` with the essential server adapter functions:

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

  // Map PDF Viewer control actions to generic collaboration actions
  mapControlToGenericAction(controlAction) {
    return {
      roomName: controlAction.roomName || '',
      connectionId: controlAction.connectionId || '',
      currentUser: controlAction.userName || '',
      version: controlAction.currentVersion || 0,
      data: JSON.stringify(controlAction)
    };
  }

  // Map generic collaboration actions back to PDF Viewer format
  mapGenericToControlAction(collaborationAction) {
    try {
      return collaborationAction.data ? JSON.parse(collaborationAction.data) : {};
    } catch (e) {
      return {};
    }
  }

  // Apply operations to the PDF document
  async applyOperationToDocument(document, operation) {
    const type = (operation.type || '').toLowerCase();
    if (type === 'annotation') {
      const xmlDoc = new DOMParser().parseFromString(operation.data, 'text/xml');
      const serialized = new XMLSerializer().serializeToString(xmlDoc);
      if (serialized) document.importAnnotations(new TextEncoder().encode(serialized), DataFormat.xfdf);
    } else if (type === 'pageorganizer') {
      if (operation.data.action === 'delete') document.removePage(operation.data.originalPageIndex);
      else if (operation.data.action === 'reorder') document.reorderPages(operation.data.pageIndices);
      else if (operation.data.action === 'rotate') document.getPage(operation.data.originalPageIndex).rotation = PdfRotationAngle[`angle${operation.data.rotateAngle}`];
    }
    // For form field handling and advanced operations, refer to GitHub sample
  }

  // Process save request and update document
  async processSaveRequestAsync(request) {
    const result = await this.storageService.getPdfAsync(request.fileName || 'document.pdf', request.roomName);
    if (!result.success) throw new Error('Failed to retrieve PDF');
    const document = new PdfDocument(Buffer.from(result.content, 'base64'));
    // Apply pending operations to document
    const updatedPdf = await document.save();
    if (!updatedPdf || updatedPdf.length === 0) throw new Error('Failed to save PDF');
    const buffer = Buffer.from(updatedPdf);
    await this.storageService.storePdfAsync(buffer, request.fileName || 'document.pdf', request.roomName);
  }
}

module.exports = PdfViewerAdapter;

{% endraw %}
{% endhighlight %}
{% endtabs %}

> **Note:** For complete production implementation including form field handling, XFDF annotation import, signature rendering, and advanced page organizer operations, refer to the [GitHub sample](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Collaborative%20Editing).

### 3. Register the collaboration routes

Create `controllers/collaborative-editing-controller.js` with essential API routes:

{% tabs %}
{% highlight js tabtitle="collaborative-editing-controller.js" %}
{% raw %}

function registerRoutes(app, actionService, adapter, transport) {
  // ImportFile endpoint - Load room state and pending operations
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

  // UpdateAction endpoint - Receive and broadcast operations
  app.post('/api/CollaborativeEditing/UpdateAction', async (req, res) => {
    try {
      const request = req.body;
      if (!request.roomName) return res.status(400).json({ error: 'RoomName is required' });

      const collaborationAction = adapter.mapControlToGenericAction(request);
      await actionService.addOperation(collaborationAction, adapter);

      // Broadcast to other users in the room
      if (transport?.broadcastToRoom) {
        transport.broadcastToRoom(request.roomName, { 
          event: 'action', 
          data: request 
        }).catch(() => {});
      }

      return res.json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update action', details: error.message });
    }
  });

  // GetPDFDocument endpoint - Retrieve current PDF state
  app.get('/api/CollaborativeEditing/GetPDFDocument', async (req, res) => {
    try {
      const { fileName, roomName } = req.query;
      const result = await pdfStorageService.getPdfAsync(fileName, roomName);
      return result.success ? res.json(result) : res.status(404).json(result);
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Failed to retrieve PDF' });
    }
  });
}

module.exports = { registerRoutes };

{% endraw %}
{% endhighlight %}
{% endtabs %}

> **Note:** For comprehensive validation, form field handling, and error management, refer to the [GitHub sample](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Collaborative%20Editing).

### 4. Start the server

{% tabs %}
{% highlight js tabtitle="server.js" %}
{% raw %}

const cors = require('cors');
const { CollaborationServer } = require('ej2-collaborator-server');
const PdfViewerAdapter = require('./adapters/PdfViewerAdapter');
const { registerRoutes } = require('./controllers/collaborative-editing-controller');

const adapter = new PdfViewerAdapter({ storageService: pdfStorageService });
const server = new CollaborationServer({
  port: 8081,
  redis: { 
    host: 'localhost',        // Redis host
    port: 6379,               // Redis port
    username: 'default',
    password: '<your-password>',
    tls: {}
  },
  adapter
});

server.app.use(cors());
registerRoutes(server.app, server.actionService, adapter, server);
server.start();

console.log('Collaboration Server running on http://localhost:8081');

{% endraw %}
{% endhighlight %}
{% endtabs %}

> **Complete Implementation:** For the full production-ready implementation including PdfStorageService, form field handling, XFDF annotation import, signature rendering, and advanced page organizer operations, refer to the [GitHub sample](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Collaborative%20Editing).

## See Also

- [Getting Started with Node.js Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-node)