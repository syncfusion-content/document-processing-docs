---
layout: post
title: Collaborative Editing in React using ASP.NET Core | Syncfusion
description: The collaborative editing feature in React DOCX Editor supports real-time multi-user document editing using Redis with ASP.NET Core.
platform: document-processing
control: Collaborative Editing 
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in React DOCX Editor with Redis in ASP.NET Core

[React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) supports collaborative editing which allows multiple users to work on the same document simultaneously. This can be done in real-time, so that collaborators can see the changes as they are made.

This topic walks through integrating collaborative editing in a React DOCX Editor using the [Syncfusion Collaborator](https://help.syncfusion.com/document-processing/collaborator/overview) common packages — the `@syncfusion/ej2-collaborator` client library and the `Syncfusion.Collaborator.Server.AspNet.Core` ASP.NET Core Collaboration Server with Redis as the distributed cache.

## Prerequisites

The following are needed to enable collaborative editing in DOCX Editor using the Syncfusion Collaborator (common collaboration packages).

- [Syncfusion Collaborator](https://www.syncfusion.com/document-processing/word/collaborator) client and server packages:
   - `@syncfusion/ej2-collaborator` (client library)
   - `Syncfusion.Collaborator.Server.AspNet.Core` (ASP.NET Core Collaboration Server)
- Redis

## Redis

In collaborative editing, Redis is used to store temporary data that helps queue editing operations and resolve conflicts using the `Operational Transformation` algorithm.

All editing operations are stored in the Redis cache. To prevent memory buildup, a `SaveThreshold` limit can be configured at the application level. For example, if the SaveThreshold is set to 100, up to twice that number of editing operations are retained in Redis per document. When this limit is exceeded, the first 100 operations (as defined by the save threshold) are removed from the cache and automatically saved to the source document.

The configuration and storage size of the Redis cache can be adjusted based on the following considerations:

- *Storage Requirements*: A minimum of 400 KB of cache memory is required to edit a single document, with the capacity to store up to 100 editing operations. Storage requirements may increase based on the following factors:

   - *Images*: Increases with the number of images added to the document.

   - *Pasted content*: Depends on the size of the SFDT content.

- *Connection Limits*: Redis has a limit on concurrent connections. The Redis configuration should be selected based on the user base to ensure optimal performance.

> For better performance, a minimum `SaveThreshold` value of 100 is recommended.

## Collaborative editing architecture 

Collaborative editing with the common Syncfusion Collaborator packages is built using three main components:

### Client (Collaboration Client + DOCX Editor adapter)

The browser side uses the shared [Collaboration Client](https://help.syncfusion.com/document-processing/collaborator/collaboration-client) (`@syncfusion/ej2-collaborator`) wired to the React DOCX Editor through a control-specific **adapter** that implements the `ICollaborationProvider` interface.

- Captures user edits in the DOCX Editor.
- Bridges local edits to the Collaboration Client through a `DocumentEditorAdapter`.
- Sends local editing actions to the Collaboration Server.
- Receives remote actions and applies them to the editor through `applyRemoteAction`.
- Keeps the document synchronized across all connected users.

### Collaboration Server (common collaborator framework)

The ASP.NET Core [Collaboration Server](https://help.syncfusion.com/document-processing/collaborator/collaboration-server) (`Syncfusion.Collaborator.Server.AspNet.Core`) hosts the shared, control-agnostic collaboration services and uses a control-specific **server adapter** (`ICollaborationAdapter`) to translate Document Editor actions to and from the common collaboration model.

- Receives editing actions from the Collaboration Client.
- Runs Operational Transformation through the server adapter and common `IActionService`.
- Persists actions and assigns version numbers.
- Broadcasts the transformed action to all participants in the room using `IActiveTransport`.

### Real-time communication (transport layer)

Acts as the transport layer between the Collaboration Client and the Collaboration Server. The common Collaborator framework supports two transports — **SignalR** (default) and **WebSocket**. Both transports deliver the same collaboration behavior; only the connection configuration differs.

- Sends and receives editing changes instantly between clients and server.
- Broadcasts updates to all connected users in real time.
- With SignalR, scaling across multiple servers can be achieved using the Redis backplane.
- With WebSocket, ensure WebSocket support is enabled on the host (`app.UseWebSockets()`) before mapping the collaboration server.

The transport is selected when constructing the `CollaborationClient` on the client side (`connectionType: 'signalr' | 'websocket'`) and through `CollaborationOptions.ConnectionType` on the server side. Refer to the [Collaboration Client](https://help.syncfusion.com/document-processing/collaborator/collaboration-client) and [Collaboration Server](https://help.syncfusion.com/document-processing/collaborator/collaboration-server) topics for more details.

### Distributed cache (Redis)

- Temporarily stores all editing operations.
- Maintains the correct order of changes.
- Resolves conflicts between multiple users using the OT algorithm.

## Integrate collaborative editing in client side

The client side uses the shared [Collaboration Client](https://help.syncfusion.com/document-processing/collaborator/collaboration-client) (`@syncfusion/ej2-collaborator`) together with a DOCX Editor adapter that implements the `ICollaborationProvider` interface. The Collaboration Client handles transport connectivity, room management, and synchronization, while the adapter bridges the DOCX Editor to the common collaboration framework.

### Step 1: Integrate DOCX Editor in React sample

Refer to the following documentation to get started with the [React DOCX Editor](https://help.syncfusion.com/document-processing/word/word-processor/react/getting-started)

### Step 2: Enable collaborative editing in the DOCX Editor

To enable collaborative editing, inject the [CollaborativeEditingHandler](https://ej2.syncfusion.com/documentation/api/document-editor/collaborativeeditinghandler) module and set the [enableCollaborativeEditing](https://ej2.syncfusion.com/documentation/api/document-editor/index-default#enablecollaborativeediting) property to `true` in the DOCX Editor.

The following code snippet demonstrates how to enable collaborative editing in the DOCX Editor.

```ts

import { DocumentEditorContainerComponent, CollaborativeEditingHandler, DocumentEditorComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';

// Inject collaborative editing module.
DocumentEditorComponent.Inject(CollaborativeEditingHandler);

// Component initialization logic

public componentDidMount(): void {
  if (this.container) {
    // Enable collaborative editing in the DOCX Editor.
    this.container.documentEditor.enableCollaborativeEditing = true;
  }
}

 render() {
        return (<div className='control-pane'>
            <div>
                <div id='documenteditor_titlebar' className="e-de-ctn-title"></div>
                <div id="documenteditor_container_body">
                    <DocumentEditorContainerComponent id="container" created={this.onCreated.bind(this)} ref={(scope: DocumentEditorContainerComponent) => { this.container = scope; }} style={{ 'display': 'block' }}
                        height={'590px'} currentUser={this.currentUser} serviceUrl={this.serviceUrl + 'api/documenteditor'} enableToolbar={true} locale='en-US'
                        toolbarMode={"Ribbon"}    >
                    </DocumentEditorContainerComponent>
                </div>
            </div>
        </div>);
    }

```

### Step 3: Install the Collaboration Client package

Install the shared [Collaboration Client](https://www.npmjs.com/package/@syncfusion/ej2-collaborator) npm package in your React application.

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-collaborator

{% endhighlight %}
{% endtabs %}

### Step 4: Create the Document Editor adapter

The adapter acts as a bridge between the Collaboration Client and the React DOCX Editor. It implements the `ICollaborationProvider` interface and is responsible for loading the document from the server, bridging local edits to the editor's sender, and applying remote collaboration actions to the editor.

The following code snippet demonstrates the `DocumentEditorAdapter`.

 ```ts

import { DocumentEditor, DocumentEditorContainer, Operation } from '@syncfusion/ej2-react-documenteditor';
import { ICollaborationProvider, ICollaborationActionData } from '@syncfusion/ej2-collaborator';

export class DocumentEditorAdapter implements ICollaborationProvider {

  constructor(
    private container: DocumentEditorContainer,
    private serviceUrl: string,
  ) { }

 // The only ICollaborationProvider method — applied for every remote action.
  public applyRemoteAction(action: string, data: ICollaborationActionData): void {
    this.container.documentEditor.collaborativeEditingHandlerModule?.applyRemoteAction(action, data.payload);
  }

  // Fetch the document from the product's REST API and return the room name.
  public async loadFromServer(fileName: string): Promise<string> {
    const roomName: string = this.getRoomName(fileName);
    const response: Response = await fetch(
      this.serviceUrl + 'api/CollaborativeEditing/ImportFile',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName, roomName })
      }
    );
    if (!response.ok) {
      throw new Error('Failed to load document');
    }
    const responseText: string = await response.text();
    await this.open(responseText, roomName);
    return roomName;
  }

  // Seed the editor and bridge local edits to the editor's sender.
  public async open(responseText: string, roomName: string): Promise<void> {
    const data: any = JSON.parse(responseText);
    this.container?.documentEditor.collaborativeEditingHandlerModule?.updateRoomInfo(
      roomName, data.version, this.serviceUrl + 'api/CollaborativeEditing/'
    );
    this.container.documentEditor.open(data.sfdt);
    this.container.contentChange = (args: any) => {
      // Send the editing action to server
      this.container.documentEditor.collaborativeEditingHandlerModule?.sendActionToServer(args.operations as Operation[]);
    }
  } 

  // Generate a unique room name from the query string (or create one).
  private getRoomName(fileName: string): string {
    const queryString: string = window.location.search;
    const urlParams: URLSearchParams = new URLSearchParams(queryString);
    let roomId: string | null = urlParams.get('id');
    if (!roomId) {
      roomId = Math.random().toString(32).slice(2);
      window.history.replaceState({}, '', '?id=' + roomId);
    }
    return roomId;
  }
}

```

### Step 5: Wire the Collaboration Client

With collaborative editing enabled in the DOCX Editor (Step 2), create the adapter and initialize the [Collaboration Client](https://www.syncfusion.com/document-processing/word/collaborator/collaboration-client) with the desired transport. The Collaboration Client connects to the server, joins the collaboration room, and tracks user join/leave events. After the document is loaded through the adapter, join the collaboration room.

The `connectionType` option selects the transport:
- `'signalr'` — uses SignalR (default). The server must be registered with `AddCollaborationServer` (default transport) and mapped with `app.MapCollaborationServer()`.
- `'websocket'` — uses WebSocket. The server must be registered with `ConnectionType = CollaborationConnectionType.WebSocket`, WebSocket support enabled with `app.UseWebSockets()`, and mapped with `app.MapCollaborationServer()`.

The following code snippet demonstrates how to wire the Collaboration Client with SignalR transport in the DOCX Editor.

```ts

import { DocumentEditorContainer, DocumentEditor, Toolbar, CollaborativeEditingHandler } from '@syncfusion/ej2-react-documenteditor';
import { CollaborationClient, UserInfo } from '@syncfusion/ej2-collaborator';
import { DocumentEditorAdapter } from './DocumentEditorAdapter';

// Set the backend service URL used by the adapter and editor.
const serviceUrl: string = 'http://localhost:5212/';

// Create the adapter that bridges the DOCX Editor and the Collaboration Client.
const adapter: DocumentEditorAdapter = new DocumentEditorAdapter(this.container, serviceUrl);

// Create the Collaboration Client with SignalR transport.
// Use connectionType: 'websocket' to use the WebSocket transport instead.
const client: CollaborationClient = new CollaborationClient(adapter, {
  serviceUrl: 'http://localhost:5212/',
  connectionType: 'signalr',
  currentUser: this.currentUser,
  onUserJoined: (user: UserInfo) => {
    // Add the user to title bar when user joins the room
    if (this.titleBar) { this.titleBar.addUser(user); }
  },
  onUserLeft: (user: UserInfo) => {
    // Remove the user from title bar when user leaves the room
    if (this.titleBar) { this.titleBar.removeUser(user); }
  }
});

// Load the document, then join the collaboration room.
(async () => {
  const roomName: string = await adapter.loadFromServer('Giant Panda.docx');
  await client.joinRoomAsync(roomName);
})();

```

The Collaboration Client internally manages the transport connection, room joining, and the `dataReceived` events (`connectionId`, `addUser`, `removeUser`, and `action`). For each remote action received from the server, it calls the adapter's `applyRemoteAction` method, which applies the action to the DOCX Editor through the `CollaborativeEditingHandler`. Local edits are bridged to the editor's sender through the `contentChange` handler in the adapter, so there is no need to configure SignalR or WebSocket manually.

The complete version of the code discussed above is available at the following [GitHub repository](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collaborative-Editing/tree/master/Client%20side%20with%20dotnet/React)

## Integrate collaborative editing in server side

The server side uses the shared [Collaboration Server](https://www.syncfusion.com/document-processing/word/collaborator/collaboration-server) (`Syncfusion.Collaborator.Server.AspNet.Core`) and a DOCX Editor-specific server adapter that implements the `ICollaborationAdapter` interface. The common collaboration framework handles Redis storage, Operational Transformation, versioning, and broadcast, while the adapter translates Document Editor actions to and from the common collaboration model.

### Step 1: Create the DOCX Editor web service project 

Create an ASP.NET Core web service to handle server-side operations. Refer to the [ASP.NET Core web service for React DOCX Editor](https://help.syncfusion.com/document-processing/word/word-processor/react/web-services/core) documentation to create the web service project.

### Step 2: Install required NuGet packages

In the web service app, install the following NuGet packages:

- Syncfusion.Collaborator.Server.AspNet.Core
- [Syncfusion.EJ2.WordEditor.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Core)

The common Collaboration Server package internally takes care of SignalR, the Redis backplane, the action service, and the background save worker, so separate SignalR/Redis NuGet packages no longer need to be referenced manually for the collaboration workflow.

### Step 3: Configure Redis connection

Configure the Redis that stores temporary data for the collaborative editing session. Provide the Redis connection string in `appsettings.json` file.

```json

// other code snippet
"ConnectionStrings": {
 "Redis": "<Provide your redis connection string>"
}
// other code snippet

``` 

### Step 4: Register the Collaboration Server

Register the Collaboration Server and configure the Redis connection string during application startup. The common `AddCollaborationServer` extension registers the shared collaboration services, the SignalR transport (default), the Redis-backed `IActionService`, the `IActiveTransport` broadcast, and the background save worker. SignalR is configured internally by the common package.

The following code snippet demonstrates the configuration in the "Program.cs" file.

```C#

using Syncfusion.Collaboration.Core.Extensions;
// other usings

var builder = WebApplication.CreateBuilder(args);

// other Services

// Register the Collaboration Server with the Redis connection string.
// SignalR transport is used by default.
builder.Services.AddCollaborationServer(options =>
{
    options.ConnectionString =
        builder.Configuration.GetConnectionString("Redis")
        ?? "localhost:6379";

    // options.ConnectionType = CollaborationConnectionType.SignalR; // default
    // options.SaveThreshold = 100; // default
});

// Register the control-specific server adapter that translates
// Document Editor actions to and from the common collaboration model.
builder.Services.AddSingleton<ICollaborationAdapter, DocumentEditorCollaborationAdapter>();

builder.Services.AddControllers();

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();
app.MapControllers();

// Map the collaboration hub ( SignalR endpoint used by the Collaboration Client ).
app.MapCollaborationServer();  // maps /collaborationhub

app.Run();

```

By default, the ASP.NET Core Collaboration Server uses SignalR. To use WebSocket transport, configure `ConnectionType` as `WebSocket` and call `app.UseWebSockets()` before `MapCollaborationServer()`.

### Step 5: Add the DOCX Editor server adapter

Create a folder named "Adapter" and add a file named `DocumentEditorCollaborationAdapter.cs` inside it. This adapter is the control-specific translator on the server side. It implements `ICollaborationAdapter` and converts Document Editor actions to and from the common `CollaborationAction`, runs Operational Transformation, and queues save requests for background processing.

```C#

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using WebApplication1.Controllers;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using Syncfusion.Collaboration.Core.Interfaces;
using Syncfusion.Collaboration.Core.Models;
using Syncfusion.Collaboration.Core.Services;
using Syncfusion.EJ2.DocumentEditor;

namespace WebApplication1.Adapters;

// Translates Document Editor actions to and from the common collaboration model.
public class DocumentEditorCollaborationAdapter : ICollaborationAdapter
{
    // Used to load the source document and persist the merged result.
    private readonly IActionService actionService;
    // Queues save operations so document persistence can happen in the background.
    private readonly IBackgroundTaskQueue saveTaskQueue;
    // Stores the wwwroot path for saving generated documents.
    static string fileLocation;

    private readonly IWebHostEnvironment _hostingEnvironment;

    public DocumentEditorCollaborationAdapter(IWebHostEnvironment hostingEnvironment, IBackgroundTaskQueue saveTaskQueue)
    {
        _hostingEnvironment = hostingEnvironment;
        fileLocation = _hostingEnvironment.WebRootPath;
        this.saveTaskQueue = saveTaskQueue;
    }

    // Converts a control-specific action into the shared collaboration action format.
    public CollaborationAction MapControlToGenericAction(object controlAction)
    {
        var action = (Syncfusion.EJ2.DocumentEditor.ActionInfo)controlAction;
        return new CollaborationAction
        {
            RoomName = action.RoomName,
            ConnectionId = action.ConnectionId,
            CurrentUser = action.CurrentUser,
            Version = action.Version,
            ClientVersion = action.ClientVersion,
            IsTransformed = action.IsTransformed,
            Data = JsonConvert.SerializeObject(action.Operations)
        };
    }

    // Converts a shared collaboration action back into a Document Editor action.
    public object MapGenericToControlAction(CollaborationAction action)
    {
        return new Syncfusion.EJ2.DocumentEditor.ActionInfo
        {
            RoomName = action.RoomName,
            ConnectionId = action.ConnectionId,
            CurrentUser = action.CurrentUser,
            Version = action.Version,
            ClientVersion = action.ClientVersion,
            IsTransformed = action.IsTransformed,
            Operations = JsonConvert.DeserializeObject<List<DocumentOperation>>(action.Data)
        };
    }

    // Transforms the incoming actions before they are applied to the document.
    public void TransformOperations(List<CollaborationAction> actions)
    {
        var documentActions = actions
            .Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)MapGenericToControlAction(x)).ToList();
        documentActions
            .Where(x => !x.IsTransformed).ToList()
            .ForEach(x => CollaborativeEditingHandler.TransformOperation(x, documentActions));
    }

    // Queues a save request so the updated document can be processed in the background.
    public async Task SaveOperationsAsync(List<CollaborationAction> actions, string roomName, bool partialSave)
    {
        var message = new SaveRequest
        {
            Actions = actions,
            PartialSave = partialSave,
            RoomName = roomName
        };
        await saveTaskQueue.QueueBackgroundWorkItemAsync(message);
    }

    // Applies the pending collaboration actions and saves the updated document.
    public async Task ProcessSaveRequestAsync(SaveRequest request, CancellationToken ct)
    {
        // Load the source document.
        Syncfusion.EJ2.DocumentEditor.WordDocument document = CollaborativeEditingController.GetSourceDocument();
        CollaborativeEditingHandler handler = new CollaborativeEditingHandler(document);

        // Get actions from Redis through the common action service.
        var actions = request.Actions
            .Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)MapGenericToControlAction(x)).ToList();

        if (actions.Count > 0)
        {
            foreach (var action in actions)
            {
                if (!action.IsTransformed)
                {
                    CollaborativeEditingHandler.TransformOperation(action, actions);
                }
            }
            // Apply the actions to the document.
            foreach (var action in actions)
            {
                handler.UpdateAction(action);
            }

            MemoryStream stream = new MemoryStream();
            // Save the updated document in the location as per your need.
            Syncfusion.DocIO.DLS.WordDocument doc =
                WordDocument.Save(Newtonsoft.Json.JsonConvert.SerializeObject(handler.Document));
            doc.Save(stream, Syncfusion.DocIO.FormatType.Docx);
            SaveDocument(stream, "Getting Started.docx");
            stream.Close();
        }

        document.Dispose();

        // Clear the processed actions for the room in Redis.
        await actionService.ClearRecordsAsync(request.RoomName, request.PartialSave);
    }

    // Document is stored in file stream. Modify this to store the document to any location based on your requirement.
    private void SaveDocument(Stream document, string fileName)
    {
        string filePath = Path.IsPathRooted(fileName) ? fileName : Path.Combine(fileLocation, fileName);

        var dir = Path.GetDirectoryName(filePath);
        if (!string.IsNullOrEmpty(dir) && !Directory.Exists(dir))
        {
            Directory.CreateDirectory(dir);
        }

        using (FileStream file = new FileStream(filePath, FileMode.Create, FileAccess.Write))
        {
            document.Position = 0;
            document.CopyTo(file);
        }
    }
}

```

### Step 6: Configure Web API actions for collaborative editing

Create "CollaborativeEditingController.cs" in the "Controllers" folder. 

This controller is the HTTP bridge between the client control and the common Collaboration Server. It depends on the shared `IActionService`, the control-specific `ICollaborationAdapter`, and the `IActiveTransport` for broadcasting. The three required web service methods are:

| Web service method | Why it is needed |
| --- | --- |
| ImportFile | Loads the source document and applies any pending collaboration actions before sending the latest document state to a newly connected client. Returns the document content and current server version. |
| UpdateAction | Receives editing actions from connected clients, processes operational transformation, persists the action, and broadcasts the updated action to other participants. |
| GetActionsFromServer | Retrieves collaboration actions created after the client's last synchronized version so the client can catch up with the latest document state. |

```C#

using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Syncfusion.Collaboration.Core.Interfaces;
using Syncfusion.Collaboration.Core.Models;
using Syncfusion.Collaboration.Core.Services;
using Syncfusion.Collaboration.Core.Transports;
using Syncfusion.EJ2.DocumentEditor;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace WebApplication1.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CollaborativeEditingController : ControllerBase
{
    private static string fileLocation;
    private readonly IWebHostEnvironment _hostingEnvironment;
    // Stores and retrieves collaboration actions through the common action service.
    private readonly IActionService actionService;
    // Converts between Document Editor actions and common collaboration actions.
    private readonly ICollaborationAdapter adapter;
    // Broadcasts updated actions to other connected clients.
    private readonly IActiveTransport _transport;

    public CollaborativeEditingController(IWebHostEnvironment hostingEnvironment,
        IConfiguration config, IActionService actionService, ICollaborationAdapter adapter, IActiveTransport transport)
    {
        _hostingEnvironment = hostingEnvironment;
        fileLocation = _hostingEnvironment.WebRootPath;
        this.adapter = adapter;
        this.actionService = actionService;
        _transport = transport;
    }

    // Loads the source document and applies any pending collaboration actions.
    [HttpPost]
    [Route("ImportFile")]
    [EnableCors("AllowAllOrigins")]
    public async Task<string> ImportFile([FromBody] FileInfo param)
    {
        try
        {
            DocumentContent content = new DocumentContent();
            Syncfusion.EJ2.DocumentEditor.WordDocument document = GetSourceDocument();

            // Get the pending operations for the room from Redis through the common action service.
            List<CollaborationAction> collaborationActions =
                await actionService.GetPendingOperationsAsync(param.roomName, 0, -1);

            List<Syncfusion.EJ2.DocumentEditor.ActionInfo> actions =
                collaborationActions
                    .Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)adapter.MapGenericToControlAction(x))
                    .ToList();

            if (actions != null && actions.Count > 0)
            {
                // Apply any pending actions to the document.
                document.UpdateActions(actions);
            }
            // Serialize the updated document to SFDT format.
            string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(document);
            content.version = 0;
            content.sfdt = sfdt;
            document.Dispose();
            return Newtonsoft.Json.JsonConvert.SerializeObject(content);
        }
        catch
        {
            return null;
        }
    }

    // Receives a local editing action, transforms it, stores it, and broadcasts it.
    [HttpPost]
    [Route("UpdateAction")]
    [EnableCors("AllowAllOrigins")]
    public async Task<Syncfusion.EJ2.DocumentEditor.ActionInfo> UpdateAction(
        Syncfusion.EJ2.DocumentEditor.ActionInfo param)
    {
        // Convert the Document Editor action to the common collaboration action.
        CollaborationAction collaborationAction =
            (CollaborationAction)adapter.MapControlToGenericAction(param);

        // Persist + transform through the common action service and server adapter.
        CollaborationAction modifiedAction =
            await actionService.AddOperationAsync(collaborationAction, adapter);

        // Convert the transformed action back to the Document Editor action.
        var documentAction =
            (Syncfusion.EJ2.DocumentEditor.ActionInfo)adapter.MapGenericToControlAction(modifiedAction);

        // Broadcast the transformed action to all participants in the room.
        await _transport.SendToGroupAsync(param.RoomName, "action", documentAction);
        return documentAction;
    }

    // Returns actions that the client has not yet synchronized.
    [HttpPost]
    [Route("GetActionsFromServer")]
    [EnableCors("AllowAllOrigins")]
    public async Task<string> GetActionsFromServer(Syncfusion.EJ2.DocumentEditor.ActionInfo param)
    {
        try
        {
            string roomName = param.RoomName;
            int lastSyncedVersion = param.Version;
            int clientVersion = param.Version;

            // Fetch actions newer than the last synced version from Redis.
            List<CollaborationAction> collaborationActions =
                await actionService.GetEffectivePendingVersionAsync(roomName, lastSyncedVersion);

            List<Syncfusion.EJ2.DocumentEditor.ActionInfo> actions =
                collaborationActions
                    .Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)adapter.MapGenericToControlAction(x))
                    .ToList();

            // Increment the version for each action sequentially.
            actions.ForEach(action => action.Version = ++clientVersion);

            // Keep only actions newer than the client's last known version.
            actions = actions.Where(action => action.Version > lastSyncedVersion).ToList();

            // Transform actions that have not been transformed yet.
            actions.Where(action => !action.IsTransformed).ToList()
                .ForEach(action => CollaborativeEditingHandler.TransformOperation(action, actions));

            return Newtonsoft.Json.JsonConvert.SerializeObject(actions);
        }
        catch
        {
            return "{}";
        }
    }

    internal static Syncfusion.EJ2.DocumentEditor.WordDocument GetSourceDocument()
    {
        string path = fileLocation + "\\Giant Panda.docx";
        Stream stream = System.IO.File.Open(path, FileMode.Open, FileAccess.Read, FileShare.Read);
        Syncfusion.EJ2.DocumentEditor.WordDocument document =
            Syncfusion.EJ2.DocumentEditor.WordDocument.Load(stream, FormatType.Docx);
        stream.Dispose();
        return document;
    }

    public class DocumentContent
    {
        public int version { get; set; }
        public string sfdt { get; set; }
    }

    public class FileInfo
    {
        public string fileName { get; set; }
        public string roomName { get; set; }
    }
}

```

### Step 7: Run the Application

After completing the client and server setup:

1. Run the ASP.NET Core application using `dotnet run`.
2. Run the client application using `npm start`
3. Open the application in multiple browser windows or tabs.
4. Open the same document and make changes in one window; the changes will be synced to other users.

N> [View sample in GitHub](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collaborative-Editing/tree/master/Server%20side%20with%20distributed%20cache/ASP.NET%20Core/Using%20Redis).