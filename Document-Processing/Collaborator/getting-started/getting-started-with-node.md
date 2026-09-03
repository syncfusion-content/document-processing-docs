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

    adapter

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
|ImportFile|Called by a joining client to load the source document and replay any pending actions. Returns the document content and current server version.|
|UpdateAction|Called by an editing client to send a new collaboration action. The server persists and transforms the action, then broadcasts it to everyone in the same room.|
|GetActionsFromServer|Called by a joining client to fetch actions newer than its last\-known version, so it can catch up to the current document state.|


```jaavscript
// controllers/collaborative\-editing\-controller.js


/\*\*

 \* Registers the consumer\-facing collaborative editing routes on the

 \* supplied Express app.

 \*

 \* @param {import('express').Express} app

 \* @param {import('ej2\-collaborator\-server').ActionService} actionService

 \* @param {import('ej2\-collaborator\-server').ICollaborationAdapter} adapter

 \*/

function registerCollaborativeEditingRoutes(app, actionService, adapter) {


    app.post('/api/CollaborativeEditing/ImportFile', async (req, res) \=\> {

        try {

            const { roomName, fileName } \= req.body;

            console.log('\[ImportFile]', roomName, fileName);


            const actions \= await actionService.getPendingOperations(

                roomName, 0, \-1

            );


            // TODO:

            //   1. Load the seed document for \`roomName\` / \`fileName\`.

            //   2. Map stored \`CollaborationAction\`s back via

            //      \`adapter.mapGenericToControlAction(...)\`.

            //   3. Replay them on the freshly loaded document.

            //   4. Return the serialized payload.


            res.json({ version: 0, sfdt: '', actions });

        } catch (e) {

            console.error(e);

            res.status(500).json({ error: e.message });

        }

    });


    app.post('/api/CollaborativeEditing/UpdateAction', async (req, res) => {

        try {

            const action = await actionService.addOperation(

                req.body, adapter

            );

            res.json(adapter.mapGenericToControlAction(action));

        } catch (e) {

            console.error(e);

            res.status(500).json({ error: e.message });

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


|**Method \& path**|**Body**|**Returns**|
|:---|:---|:---|
|POST /api/CollaborativeEditing/ImportFile|{ roomName, fileName }|{ version, document data, actions\[] }|
|POST /api/CollaborativeEditing/UpdateAction|Partial\<CollaborationAction\>|The editor\-specific action produced by adapter.mapGenericToControlAction(...)|
|POST /api/CollaborativeEditing/GetActionsFromServer|{ roomName, version }|actions[] (each mapped back through the adapter)|


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