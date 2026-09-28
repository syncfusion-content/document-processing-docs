---
layout: post
title: Collaborative Editing in MVC PDF Viewer with Node.js | Syncfusion
description: Learn how to implement MVC PDF Viewer collaborative editing with the Syncfusion Collaborator client and Node.js server packages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in MVC PDF Viewer with Node.js

This topic explains how to connect the MVC PDF Viewer to the Node.js Collaboration Server. The server provides WebSocket communication, Redis operation storage, room management, synchronization, and save processing. Node.js collaborative editing currently supports PDF Viewer.

## Prerequisites

- An MVC application with HTML views.
- Node.js 18 or later.
- A Redis instance.

## Client-side integration

### 1. Create the MVC view

Create an MVC view (e.g., `CollaborativeEditing.cshtml`) and load the Syncfusion library from CDN:

{% tabs %}
{% highlight html tabtitle="View.cshtml" %}
{% raw %}
<div id="collaborationStatusBar" style="padding: 10px 15px; background-color: #f0f0f0; border-bottom: 1px solid #ddd; font-size: 12px;">
    Loading collaboration status...
</div>

<link href="https://cdn.syncfusion.com/ej2/35.1.37/tailwind3.css" rel="stylesheet" />
<script src="https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2.min.js"></script>

@Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib").ResourcesLoaded("handleResourcesLoaded").Render()

<script src="~/Scripts/pdfViewerAdapter.js"></script>
<script src="~/Scripts/app.js"></script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### 2. Create the PDF Viewer adapter

Create `pdfViewerAdapter.js` in the Scripts folder with the collaboration adapter implementation:

{% tabs %}
{% highlight javascript tabtitle="pdfViewerAdapter.js" %}
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

    loadFromServer(fileName) {
        var self = this;
        this.isDocumentLoaded = false;
        this.fileName = fileName || 'document.pdf';
        var roomName = this.getRoomName();
        this.currentRoomName = roomName;

        return fetch(this.serviceUrl + 'api/CollaborativeEditing/ImportFile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roomName: roomName,
                fileName: this.fileName,
                currentUser: this.currentUser
            })
        })
        .then(function(response) {
            if (!response.ok) throw new Error('Failed to join collaboration room');
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
    }

    open(responseText, roomName) {
        var self = this;
        try {
            var data = JSON.parse(responseText);
            var version = data.version || data.currentVersion || 0;

            this.collaborativeEditingHandler.updateRoomInfo(
                roomName,
                version,
                this.serviceUrl + 'api/CollaborativeEditing/'
            );

            this.pendingOperations = data.operations;
            if (data.operations && data.operations.length > 0) {
                for (var i = 0; i < data.operations.length; i++) {
                    this.collaborativeEditingHandler.applyRemoteAction(data.operations[i].type, data.operations[i]);
                }
            }

            this.isDocumentLoaded = true;
        } catch (error) {
            console.error('[PdfViewerAdapter] Error initializing document:', error);
            throw error;
        }
    }

    sendActionToServer(operations) {
        if (!operations || operations.length === 0) {
            console.warn('[PdfViewerAdapter] No operations to send');
            return Promise.resolve();
        }
        return this.collaborativeEditingHandler.sendActionToServer(operations)
            .catch(function(error) {
                console.error('[PdfViewerAdapter] Error sending operations:', error);
                throw error;
            });
    }

    applyRemoteAction(action, data) {
        if (action === 'addUser') {
            if (data.payload && Array.isArray(data.payload)) {
                var self = this;
                data.payload.forEach(function(user) {
                    user.image = self.getUserImage(user.currentUser);
                });
            } else if (data.payload) {
                data.payload.image = this.getUserImage(data.payload.currentUser);
            }
        } else if (action === 'connectionId') {
            data.payload = { payload: data.payload, image: this.getUserImage(this.currentUser) };
        }
        this.collaborativeEditingHandler.applyRemoteAction(action, data.payload);
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

    getUserImage(userName) {
        var avatarMap = {
            'RIO': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic01.png',
            'JOHN': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic03.png',
            'MAXY': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic02.png',
            'SHAI': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic04.png',
            'SRI': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic05.png'
        };
        return avatarMap[userName] || 'https://ej2.syncfusion.com/demos/src/avatar/images/default.png';
    }

    updatePendingOperations() {
        if (this.pendingOperations && this.pendingOperations.length > 0) {
            for (var i = 0; i < this.pendingOperations.length; i++) {
                var op = this.pendingOperations[i];
                try {
                    this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
                } catch (e) {
                    console.warn('[PdfViewerAdapter] Error applying operation:', op, e);
                }
            }
        }
    }

    getDocumentState() {
        return {
            currentUser: this.currentUser,
            roomName: this.currentRoomName,
            isDocumentLoaded: this.isDocumentLoaded,
            fileName: this.fileName
        };
    }

    dispose() {
        this.collaborativeEditingHandler = null;
        this.viewer = null;
        this.pendingOperations = [];
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### 3. Create the application initialization file

Create `app.js` with the collaboration initialization and event handlers:

{% tabs %}
{% highlight javascript tabtitle="app.js" %}
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
    adapter: null,
    client: null,
    roomNameRef: ''
};

function getViewer() {
    return document.getElementById('pdfviewer').ej2_instances[0];
}

function loadPDFBlobIntoViewer(pdfBlob) {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.onload = function() {
            try {
                var arrayBuffer = reader.result;
                var uint8Array = new Uint8Array(arrayBuffer);
                var viewer = getViewer();
                if (viewer && typeof viewer.load === 'function') {
                    viewer.load(uint8Array, '');
                    resolve();
                } else {
                    reject(new Error('Viewer load method not available'));
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
    var queryParams = new URLSearchParams();
    queryParams.append('roomName', appState.roomNameRef || 'default');

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

function updateStatusBar() {
    var statusBar = document.getElementById('collaborationStatusBar');
    if (statusBar) {
        var statusColor = appState.collaborationStatus === 'connected' ? '#28a745' :
                         appState.collaborationStatus === 'error' ? '#dc3545' : '#ffc107';

        statusBar.innerHTML = '<div style="display: flex; justify-content: space-between; align-items: center;">' +
            '<div><strong>User:</strong> ' + appState.currentUser + ' | <strong>Status:</strong> ' +
            '<span style="color: ' + statusColor + '; font-weight: bold;">' + appState.collaborationStatus + '</span> | ' +
            '<strong>Room:</strong> ' + (appState.roomName || 'N/A') + '</div>' +
            '<div><strong>Connected Users:</strong> ' + (appState.connectedUsers.join(', ') || 'None') + '</div>' +
            '</div>';
    }
}

function handleResourcesLoaded() {
    if (appState.isDocumentLoaded) return;

    appState.isDocumentLoaded = true;
    appState.collaborationStatus = 'loading';
    updateStatusBar();

    var viewer = getViewer();
    var adapter = new PdfViewerAdapter(viewer, SERVICE_URL, appState.currentUser);
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
            if (appState.connectedUsers.indexOf(userName) === -1) {
                appState.connectedUsers.push(userName);
                updateStatusBar();
            }
        },
        onUserLeft: function(user) {
            var userName = user.userName || user.currentUser;
            appState.connectedUsers = appState.connectedUsers.filter(function(u) {
                return u !== userName;
            });
            updateStatusBar();
        }
    });
    appState.client = client;

    adapter.loadFromServer()
        .then(function(roomName) {
            appState.roomNameRef = roomName;
            appState.roomName = roomName;
            updateStatusBar();
            return client.joinRoomAsync(roomName);
        })
        .then(function() {
            return fetchAndLoadPDFDocument();
        })
        .then(function() {
            appState.collaborationStatus = 'connected';
            updateStatusBar();
        })
        .catch(function(error) {
            console.error('[App] Error during collaboration initialization:', error);
            appState.collaborationStatus = 'error';
            updateStatusBar();
        });
}

function handleDocumentChanged(args) {
    try {
        var operations = [];

        if (args && 'annotationId' in args) {
            if (args.action) {
                operations.push({
                    action: args.action,
                    annotation: args.annotationId,
                    type: 'annotation',
                    isRedacted: args.isRedacted
                });
            } else {
                operations.push({
                    type: 'removeUser',
                    currentUser: appState.currentUser
                });
            }
        } else if (args && 'formField' in args && !('fieldName' in args)) {
            operations.push({
                action: args.action,
                formField: args.formField,
                type: 'formField'
            });
        } else if (args && 'fieldName' in args) {
            operations.push({
                action: 'formFieldUpdate',
                data: args,
                type: 'formField'
            });
        } else if (args && 'organizePageActions' in args) {
            var actionDetails = typeof args.organizePageActions === 'string'
                ? JSON.parse(args.organizePageActions) : '';
            if (args.savedDocument === null && actionDetails.action === 'applyCancelled') {
                operations.push({
                    type: 'removeUser',
                    currentUser: appState.currentUser
                });
            } else if (args.savedDocument !== null && actionDetails.length > 0 && actionDetails[0].action !== 'applyCancelled') {
                operations.push({
                    action: 'pageOrganizerUpdate',
                    data: args.organizePageActions,
                    type: 'pageOrganizer'
                });
            }
        }

        if (operations.length > 0 && appState.adapter) {
            appState.adapter.sendActionToServer(operations).catch(function(err) {
                console.error('Error sending operation:', err);
            });
        }
    } catch (error) {
        console.error('[App] Error processing document change:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var viewer = getViewer();
    if (viewer) {
        viewer.enableCollaborativeEditing = true;
        viewer.documentChanged = handleDocumentChanged;
        updateStatusBar();
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

Create `adapters/PdfViewerAdapter.js` with the server adapter. For complete implementation with form field handling, XFDF import, signature rendering, and page organizer operations, refer to the [GitHub sample](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/Collaborative%20Editing).

{% tabs %}
{% highlight javascript tabtitle="adapters/PdfViewerAdapter.js" %}
{% raw %}
const { PdfDocument, PdfRotationAngle, DataFormat } = require('@syncfusion/ej2-pdf');
const { DOMParser, XMLSerializer } = require('@xmldom/xmldom');

if (typeof global.DOMParser === 'undefined') global.DOMParser = DOMParser;
if (typeof global.XMLSerializer === 'undefined') global.XMLSerializer = XMLSerializer;

class PdfViewerAdapter {
    constructor(options) {
        this.storageService = options && options.storageService;
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
        var document = new PdfDocument(Buffer.from(masterPdfBase64, 'base64'));
        var validOperations = this._extractValidOperations(operations);
        
        for (var i = 0; i < validOperations.length; i++) {
            try {
                await this.applyOperationToDocument(document, validOperations[i]);
            } catch (e) {
                console.warn('Error applying operation:', e);
            }
        }

        var updatedPdf = await document.save();
        if (!updatedPdf || updatedPdf.length === 0) throw new Error('Failed to save PDF');
        return new Blob([updatedPdf], { type: 'application/pdf' });
    }

    _extractValidOperations(operations) {
        if (!Array.isArray(operations)) return [];
        var result = [];
        
        for (var i = 0; i < operations.length; i++) {
            var op = operations[i];
            if (!op || !op.data || typeof op.data !== 'string') continue;
            
            try {
                var req = JSON.parse(op.data);
                if (req.type === 'annotation') {
                    result.push({ type: 'annotation', data: req.data.xfdfData, action: req.data.action });
                } else if (req.type === 'formField') {
                    result.push({ type: 'formField', data: JSON.parse(req.data.jsonData), action: req.data.action });
                } else if (req.type === 'formFieldAction') {
                    var changes = JSON.parse(req.data.changes);
                    var data = changes.created && changes.created[0] || changes.updated && changes.updated[0] || changes.deleted && changes.deleted[0];
                    var action = changes.created && changes.created.length ? 'created' : changes.updated && changes.updated.length ? 'updated' : 'deleted';
                    if (data) result.push({ type: 'formFieldAction', data: data, action: action });
                } else if (req.type === 'pageOrganizer') {
                    var pageOrgData = typeof req.data === 'string' ? JSON.parse(req.data) : req.data;
                    result.push({ type: 'pageOrganizer', data: Array.isArray(pageOrgData) ? pageOrgData[0] : pageOrgData });
                }
            } catch (e) {
                console.warn('Error parsing operation:', e);
            }
        }
        
        return result;
    }

    async applyOperationToDocument(document, operation) {
        var type = (operation.type || '').toLowerCase();
        if (type === 'annotation') {
            var xmlDoc = new DOMParser().parseFromString(operation.data, 'text/xml');
            var serialized = new XMLSerializer().serializeToString(xmlDoc);
            if (serialized) document.importAnnotations(new TextEncoder().encode(serialized), DataFormat.xfdf);
        } else if (type === 'formfield' || type === 'formfieldaction') {
            // Form field handling
        } else if (type === 'pageorganizer') {
            if (operation.data.action === 'delete') {
                document.removePage(operation.data.originalPageIndex);
            } else if (operation.data.action === 'reorder') {
                document.reorderPages(operation.data.pageIndices);
            } else if (operation.data.action === 'rotate') {
                var angle = 'angle' + operation.data.rotateAngle;
                document.getPage(operation.data.originalPageIndex).rotation = PdfRotationAngle[angle];
            }
        }
    }

    async processSaveRequestAsync(request) {
        var result = await this.storageService.getPdfAsync(request.fileName || 'document.pdf', request.roomName);
        if (!result.success) throw new Error('Failed to retrieve PDF');
        var updatedPdf = await this.replayOperationsAndUpdateDocument(result.content, request.actions);
        var buffer = Buffer.from(await updatedPdf.arrayBuffer());
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
{% highlight javascript tabtitle="controllers/collaborative-editing-controller.js" %}
{% raw %}
function registerRoutes(app, actionService, adapter, transport) {
    app.post('/api/CollaborativeEditing/ImportFile', async function(req, res) {
        try {
            var roomName = req.body.roomName;
            if (!roomName) return res.status(400).json({ error: 'RoomName is required' });

            var allActions = await actionService.getPendingOperations(roomName, 0, -1);

            res.json({
                success: true,
                version: allActions.length > 0 ? allActions[allActions.length - 1].version : 0,
                operations: allActions
            });
        } catch (error) {
            console.error('[ImportFile] Error:', error);
            res.status(500).json({ error: 'Failed to import file', details: error.message });
        }
    });

    app.post('/api/CollaborativeEditing/UpdateAction', async function(req, res) {
        try {
            var roomName = req.body.roomName;
            var connectionId = req.body.connectionId;
            var action = req.body.action;

            if (!roomName || !action) {
                return res.status(400).json({ error: 'RoomName and Action are required' });
            }

            await actionService.addOperations(roomName, [{
                action: action,
                connectionId: connectionId,
                type: 'update'
            }]);

            res.json({ success: true, message: 'Action updated' });
        } catch (error) {
            console.error('[UpdateAction] Error:', error);
            res.status(500).json({ error: 'Failed to update action', details: error.message });
        }
    });

    app.get('/api/CollaborativeEditing/GetPDFDocument', async function(req, res) {
        try {
            var roomName = req.query.roomName || 'default';
            
            // Retrieve PDF from storage
            var pdfContent = 'JVBERi0xLjQK...'; // Base64 encoded PDF (truncated for brevity)

            res.json({
                success: true,
                content: pdfContent,
                contentLength: pdfContent.length
            });
        } catch (error) {
            console.error('[GetPDFDocument] Error:', error);
            res.status(500).json({ error: 'Failed to retrieve PDF', details: error.message });
        }
    });
}

module.exports = { registerRoutes };
{% endraw %}
{% endhighlight %}
{% endtabs %}

### 4. Initialize the server

Create `server.js` to start the Collaboration Server:

{% tabs %}
{% highlight javascript tabtitle="server.js" %}
{% raw %}
var express = require('express');
var cors = require('cors');
var redis = require('redis');
var CollaborationServer = require('ej2-collaborator-server').CollaborationServer;
var PdfViewerAdapter = require('./adapters/PdfViewerAdapter');
var registerRoutes = require('./controllers/collaborative-editing-controller').registerRoutes;

var app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());

// Initialize Redis client
var redisClient = redis.createClient({
    host: 'localhost',
    port: 6379
});

redisClient.on('error', function(err) {
    console.error('Redis error:', err);
});

// Storage service for PDFs
var storageService = {
    getPdfAsync: function(fileName, roomName) {
        return new Promise(function(resolve) {
            var key = 'pdf:' + roomName + ':' + fileName;
            redisClient.get(key, function(err, content) {
                if (err) {
                    resolve({ success: false, error: err.message });
                } else {
                    resolve({ success: !!content, content: content });
                }
            });
        });
    },
    storePdfAsync: function(buffer, fileName, roomName) {
        return new Promise(function(resolve, reject) {
            var key = 'pdf:' + roomName + ':' + fileName;
            var base64 = buffer.toString('base64');
            redisClient.set(key, base64, function(err) {
                if (err) reject(err);
                else resolve();
            });
        });
    }
};

// Initialize Collaboration Server
var collaborationServer = new CollaborationServer({
    redisClient: redisClient,
    adapter: new PdfViewerAdapter({ storageService: storageService })
});

// Action service for storing operations
var actionService = {
    operations: {},
    addOperations: function(roomName, operations) {
        if (!this.operations[roomName]) this.operations[roomName] = [];
        this.operations[roomName] = this.operations[roomName].concat(operations);
        return Promise.resolve();
    },
    getPendingOperations: function(roomName, start, end) {
        var ops = this.operations[roomName] || [];
        return Promise.resolve(end === -1 ? ops : ops.slice(start, end));
    }
};

// Register collaboration routes
registerRoutes(app, actionService, collaborationServer.adapter, collaborationServer.transport);

// Start server
var PORT = process.env.PORT || 8081;
app.listen(PORT, function() {
    console.log('Collaboration Server running on http://localhost:' + PORT);
});

process.on('SIGINT', function() {
    console.log('Shutting down server');
    redisClient.quit();
    process.exit(0);
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

Create `adapters/PdfViewerAdapter.js` with the server adapter. For complete implementation with form field handling, XFDF import, signature rendering, and page organizer operations, refer to the [GitHub sample](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/Collaborative%20Editing).

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

>N For complete production implementation with comprehensive form field handling, XFDF annotation import, signature rendering with path/image/text support, and advanced page organizer operations, refer to the [GitHub sample](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/Collaborative%20Editing).

## See Also

- [Getting Started with Node.js Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-node)