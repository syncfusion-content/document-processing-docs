---
layout: post
title: Collaborative Editing in JavaScript using ASP.NET Core | Syncfusion
description: The collaborative editing feature in JavaScript DOCX Editor supports real-time multi-user document editing using Redis with ASP.NET Core.
platform: document-processing
control: Collaborative Editing
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in JavaScript DOCX Editor using ASP.NET Core

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) supports collaborative editing which allows multiple users to work on the same document simultaneously. This can be done in real-time, so that collaborators can see the changes as they are made.

This topic walks through integrating collaborative editing in a JavaScript DOCX Editor using the [Syncfusion Collaborator](https://help.syncfusion.com/document-processing/collaborator/overview) common packages — the `@syncfusion/ej2-collaborator` client library and the `Syncfusion.Collaborator.Server.AspNet.Core` ASP.NET Core Collaboration Server with Redis as the distributed cache.

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

The browser side uses the shared [Collaboration Client](https://help.syncfusion.com/document-processing/collaborator/collaboration-client) (`@syncfusion/ej2-collaborator`) wired to the JavaScript DOCX Editor through a control-specific **adapter** that implements the `ICollaborationProvider` interface.

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


### Step 1: Integrate DOCX Editor in JavaScript ES5 sample

Refer to the following documentation to get started with the [JavaScript ES5 DOCX Editor](../getting-started).

### Step 2: Enable collaborative editing

To enable collaborative editing, inject [CollaborativeEditingHandler](https://ej2.syncfusion.com/documentation/api/document-editor/collaborativeeditinghandler) and set the [enableCollaborativeEditing](https://ej2.syncfusion.com/documentation/api/document-editor/index-default#enablecollaborativeediting) property to true in the DOCX Editor.

The following code snippet demonstrates how to enable collaborative editing in the DOCX Editor.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/collaborative-editing-cs1/index.js %}
{% endhighlight %}
{% endtabs %}

### Step 3: Install the Collaboration Client package

Install the shared [Collaboration Client](https://www.npmjs.com/package/@syncfusion/ej2-collaborator) npm package in your JavaScript application.

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-collaborator

{% endhighlight %}
{% endtabs %}

### Step 4: Create the Document Editor adapter

The adapter acts as a bridge between the Collaboration Client and the JavaScript DOCX Editor. It implements the `ICollaborationProvider` interface and is responsible for loading the document from the server, bridging local edits to the editor's sender, and applying remote collaboration actions to the editor.

The following code snippet demonstrates the `DocumentEditorAdapter`.

 ```js

export class DocumentEditorAdapter {
    constructor(container, serviceUrl) {
        this.container = container;
        this.serviceUrl = serviceUrl;
    }

    // The only ICollaborationProvider method — applied for every remote action. 
    applyRemoteAction(action, data) {
        this.container.documentEditor.collaborativeEditingHandlerModule?.applyRemoteAction(action, data.payload);
    }

    // Fetch the document from the product's REST API and return the room name. 
    async loadFromServer(fileName) {
        const roomName = this.getRoomName(fileName);
        const response = await fetch(
            this.serviceUrl + 'api/CollaborativeEditing/ImportFile',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fileName, roomName })
            }
        );
        if (!response.ok) {
            throw new Error('Failed to load document');
        }
        const responseText = await response.text();
        await this.open(responseText, roomName);
        return roomName;
    }

    // Seed the editor and bridge local edits to the editor's sender. 
    async open(responseText, roomName) {
        const data = JSON.parse(responseText);
        this.container?.documentEditor.collaborativeEditingHandlerModule?.updateRoomInfo(roomName, data.version, this.serviceUrl + 'api/CollaborativeEditing/');
        this.container.documentEditor.open(data.sfdt);
        this.container.contentChange = (args) => {
            console.log('[SENT]', new Date().toISOString());
            this.container.documentEditor.collaborativeEditingHandlerModule?.sendActionToServer(args.operations);
        }
    }

    getRoomName(fileName) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let roomId = urlParams.get('id');

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

```js

var container = new ej.documenteditor.DocumentEditorContainer({ height: "590px", enableToolbar: true, showPropertiesPane: false, currentUser: 'Guest User' });
container.serviceUrl = serviceUrl + 'api/documenteditor/';
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
container.appendTo('#container');

//Injecting collaborative editing module
ej.documenteditor.DocumentEditor.Inject(ej.documenteditor.CollaborativeEditingHandler);
//Enable collaborative editing in DocumentEditor
container.documentEditor.enableCollaborativeEditing = true;

container.documentEditor.documentName = 'Getting Started';

const adapter = new DocumentEditorAdapter(container, 'http://localhost:5212/');
const client = new CollaborationClient(adapter, {
    serviceUrl: 'http://localhost:5212/',
    currentUser: 'Guest User',
    connectionType: "signalr",
    onUserJoined: (user) => {
        console.log("User Joined", user);
    },
    onUserLeft: (user) => {
        console.log("User Left", user);
    }
});

(async () => {
    const roomName = await adapter.loadFromServer("Giant Panda.docx");
    await client.joinRoomAsync(roomName);
    console.log("Loaded document from room:", roomName);
})();

```

The Collaboration Client internally manages the transport connection, room joining, and the `dataReceived` events (`connectionId`, `addUser`, `removeUser`, and `action`). For each remote action received from the server, it calls the adapter's `applyRemoteAction` method, which applies the action to the DOCX Editor through the `CollaborativeEditingHandler`. Local edits are bridged to the editor's sender through the `contentChange` handler in the adapter, so there is no need to configure SignalR or WebSocket manually.

The complete version of the code discussed above is available at the following [GitHub repository](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collaborative-Editing/tree/master/Client%20side%20with%20dotnet/Javascript).

## Integrate collaborative editing in server side

### Step 1: Create the DOCX Editor web service project 

Create an ASP.NET Core web service to handle server-side operations.

### Step 2: Install required NuGet packages

In the web service app, install the following NuGet package:

- Microsoft.Azure.SignalR

- Microsoft.AspNetCore.SignalR.StackExchangeRedis

- Syncfusion.EJ2.WordEditor.AspNet.Core

### Step 3: Configure Redis connection

Configure the Redis that stores temporary data for the collaborative editing session. Provide the Redis connection string in `appsettings.json` file.

```json

// other code snippet
"ConnectionStrings": {
 "RedisConnectionString": "<<Your Redis connection string>>"
}
// other code snippet

``` 

### Step 4:  Configure SignalR in ASP.NET Core

Microsoft SignalR is used to broadcast changes. Add the following configuration to the application's "Program.cs" file.

{% tabs %}
{% highlight C# tabtitle="C#" %}

using Microsoft.Azure.SignalR;

// other Services

// Add signalR services to the container.

builder.Services.AddSignalR().AddStackExchangeRedis("Your Redis Connection String");

// other Services

{% endhighlight %}
{% endtabs %}

### Step 5: Configure SignalR Hub to create room for collaborative editing session

To manage groups for each document, create a folder named "Hub" and add a file named `DocumentEditorHub.cs` inside it.

#### 1. Mapping Hub details

Map DocumentEditorHub in the "Program.cs" file using the following code.

{% tabs %}
{% highlight C# tabtitle="C#" %}

app.MapHub<DocumentEditorHub>("/documenteditorhub");

{% endhighlight %}
{% endtabs %}

#### 2. Join room

Join the group using the unique ID of the document with the `JoinGroup` method.

Add the following code to the file to manage SignalR groups using room names.

{% tabs %}
{% highlight C# tabtitle="C#" %}

// Join group based on the room name and store the user details in Redis cache.
public async Task JoinGroup(ActionInfo info)
{
  // Set the connection ID to info
  info.ConnectionId = Context.ConnectionId;
  // Add the connection ID to the group
  await Groups.AddToGroupAsync(Context.ConnectionId, info.RoomName);

  // To ensure whether the room exists in the Redis cache
  bool roomExists = await _db.KeyExistsAsync(info.RoomName + CollaborativeEditingHelper.UserInfoSuffix);
  if (roomExists) {
    // Fetch all connected users from Redis
    var allUsers = await _db.HashGetAllAsync(info.RoomName + CollaborativeEditingHelper.UserInfoSuffix);
    var userList = allUsers.Select(u => JsonConvert.DeserializeObject<ActionInfo>(u.Value)).ToList();

    // Send the existing user details to the newly joined user. 
    await Clients.Caller.SendAsync("dataReceived", "addUser", userList);
  }

  // Add user to Redis           
  await _db.HashSetAsync(info.RoomName + CollaborativeEditingHelper.UserInfoSuffix, Context.ConnectionId, JsonConvert.SerializeObject(info));

  // Store the room name with the connection ID
  await _db.HashSetAsync(CollaborativeEditingHelper.ConnectionIdRoomMappingKey, Context.ConnectionId, info.RoomName);

  // Notify all the existing users in the group about the new user
  await Clients.GroupExcept(info.RoomName, Context.ConnectionId).SendAsync("dataReceived", "addUser", info);
}

{% endhighlight %}
{% endtabs %}

#### 3. Handle user disconnection 

The following code snippet demonstrates how to disconnect a connection using SignalR.

{% tabs %}
{% highlight C# tabtitle="C#" %}

public override async Task OnDisconnectedAsync(Exception ? e)
{
  // Get the room name associated with the connection ID
  string roomName = await _db.HashGetAsync(CollaborativeEditingHelper.ConnectionIdRoomMappingKey, Context.ConnectionId);
  // Remove user from Redis       
  await _db.HashDeleteAsync(roomName + CollaborativeEditingHelper.UserInfoSuffix, Context.ConnectionId);

  // Fetch all connected users from Redis
  var allUsers = await _db.HashGetAllAsync(roomName + CollaborativeEditingHelper.UserInfoSuffix);
  var userList = allUsers.Select(u => JsonConvert.DeserializeObject<ActionInfo>(u.Value)).ToList();

  // Remove connection to room name mapping
  await _db.HashDeleteAsync(CollaborativeEditingHelper.ConnectionIdRoomMappingKey, Context.ConnectionId);

  if (userList.Count == 0) {
    // Auto save the pending operations to source document
    RedisValue[] pendingOps = await _db.ListRangeAsync(roomName, 0, -1);
    if (pendingOps.Length > 0) {
      List < ActionInfo > actions = new List<ActionInfo>();
      // Prepare the message for adding it in background service queue.
      foreach(var element in pendingOps)
      {
        actions.Add(JsonConvert.DeserializeObject<ActionInfo>(element.ToString()));
      }
      var message = new SaveInfo
      {
        Action = actions,
          PartialSave = false,
          RoomName = roomName,
                    };
      // Queue the message for background processing and save the operations to source document in background task
      _ = saveTaskQueue.QueueBackgroundWorkItemAsync(message);
    }
  }
  else {
    // Notify remaining clients about the user disconnection              
    await Clients.Group(roomName).SendAsync("dataReceived", "removeUser", Context.ConnectionId);
  }
  await base.OnDisconnectedAsync(e);
}

{% endhighlight %}
{% endtabs %}

### Step 6: Configure Web API actions for collaborative editing

Create "CollaborativeEditingController.cs" in the "Controllers" folder. 

This file includes the code snippets that handle server-side interactions for collaborative editing.

#### Import File

Used to open DOCX documents, verify the Redis cache for pending operations, and retrieve them for the collaborative editing session.

The following code snippet demonstrates how to open the document.

{% tabs %}
{% highlight C# tabtitle="C#" %}

public async Task < string > ImportFile([FromBody] FileInfo param)
{
  try {
    // Create a new instance of DocumentContent to hold the document data
    DocumentContent content = new DocumentContent();
    // Retrieve the source document to be edited
    // In this case, the file from the wwwroot folder is opened.
    // We can modify the code to retrieve the document from a different location or source.
    Syncfusion.EJ2.DocumentEditor.WordDocument document = GetSourceDocument();
    // Get the list of pending operations for the document
    List < ActionInfo > actions = await GetPendingOperations(param.fileName, 0, -1);
    if (actions != null && actions.Count > 0) {
      // If there are any pending actions, update the document with these actions
      document.UpdateActions(actions);
    }
    // Serialize the updated document to SFDT format
    string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(document);
    content.version = 0;
    content.sfdt = sfdt;
    // Dispose of the document to free resources
    document.Dispose();
    // Return the serialized content as a JSON string
    return Newtonsoft.Json.JsonConvert.SerializeObject(content);
  }
  catch {
    return null;
  }
}

{% endhighlight %}
{% endtabs %}

#### Update editing records to Redis cache

Each edit operation made by the user is sent to the server and pushed into a Redis list data structure. Each operation is assigned a version number upon insertion into Redis.

The following code snippet demonstrates how the operations are cached and updated.

{% tabs %}
{% highlight C# tabtitle="C#" %}

public async Task < ActionInfo > UpdateAction([FromBody] ActionInfo param)
{
  try {
    ActionInfo modifiedAction = await AddOperationsToCache(param);
    //After transformation broadcast changes to all users in the group
    await _hubContext.Clients.Group(param.RoomName).SendAsync("dataReceived", "action", modifiedAction);
    return modifiedAction;
  }
  catch {
    return null;
  }
}

private async Task < ActionInfo > AddOperationsToCache(ActionInfo action)
{
  int clientVersion = action.Version;
  // Initialize the database connection
  IDatabase database = _redisConnection.GetDatabase();
  // Define the keys for Redis operations based on the action's room name
  RedisKey[] keys = new RedisKey[] { action.RoomName + CollaborativeEditingHelper.VersionInfoSuffix, action.RoomName, action.RoomName + CollaborativeEditingHelper.RevisionInfoSuffix, action.RoomName + CollaborativeEditingHelper.ActionsToRemoveSuffix };
  // Serialize the action and prepare values for the Redis script
  RedisValue[] values = new RedisValue[] { JsonConvert.SerializeObject(action), clientVersion.ToString(), CollaborativeEditingHelper.SaveThreshold.ToString() };
  // Execute the Lua script in Redis and store the results
  RedisResult[] results = (RedisResult[])await database.ScriptEvaluateAsync(CollaborativeEditingHelper.InsertScript, keys, values);

  // Parse the version number from the script results
  int version = int.Parse(results[0].ToString());
  // Deserialize the list of previous operations from the script results
  List<ActionInfo> previousOperations = ((RedisResult[])results[1]).Select(value => JsonConvert.DeserializeObject<ActionInfo>(value.ToString())).ToList();
  // Increment the version for each previous operation
  previousOperations.ForEach(op => op.Version = ++clientVersion);

  // Check if there are multiple previous operations to determine if transformation is needed
  if (previousOperations.Count > 1) {
    // Set the current action to the last operation in the list
    action = previousOperations.Last();
    // Transform operations that have not been transformed yet
    previousOperations.Where(op => !op.IsTransformed).ToList().ForEach(op => CollaborativeEditingHandler.TransformOperation(op, previousOperations));
  }
  // Update the action's version and mark it as transformed
  action.Version = version;
  action.IsTransformed = true;

  // Other code snippets

  // Return the updated action
  return action;
}

{% endhighlight %}
{% endtabs %}

#### Web API to retrieve previous operations (Backup for lost operations)

On the client side, messages broadcast using SignalR may be received out of order or lost due to network issues. In such cases, a backup mechanism is required to retrieve missing operations from Redis.

Using the following method, all operations performed after the last successfully synchronized client version can be retrieved, ensuring that any missing operations are returned to the requesting client.

The following code snippet demonstrates how to track and retrieve pending operations.

{% tabs %}
{% highlight C# tabtitle="C#" %}

  public async Task<string> GetActionsFromServer(ActionInfo param)
  {
      try
      {
          // Initialize necessary variables from the parameters and helper class
          int saveThreshold = CollaborativeEditingHelper.SaveThreshold;
          string roomName = param.RoomName;
          int lastSyncedVersion = param.Version;
          int clientVersion = param.Version;

          // Retrieve the database connection
          IDatabase database = _redisConnection.GetDatabase();

          // Fetch actions that are effective and pending based on the last synced version
          List<ActionInfo> actions = await GetEffectivePendingVersion(roomName, lastSyncedVersion, database);

          // Increment the version for each action sequentially
          actions.ForEach(action => action.Version = ++clientVersion);

          // Filter actions to only include those that are newer than the client's last known version
          actions = actions.Where(action => action.Version > lastSyncedVersion).ToList();

          // Transform actions that have not been transformed yet
          actions.Where(action => !action.IsTransformed).ToList()
              .ForEach(action => CollaborativeEditingHandler.TransformOperation(action, actions));

          // Serialize the filtered and transformed actions to JSON and return
          return Newtonsoft.Json.JsonConvert.SerializeObject(actions);
      }
      catch
      {
          // In case of an exception, return an empty JSON object
          return "{}";
      }
  }

{% endhighlight %}
{% endtabs %}

### Step 7: Create helper models and constants

This step defines Redis key naming conventions, constants, and helper models to ensure consistency and maintainability across the application. It also sets a save threshold of 100 operations, enabling automatic persistence of changes at optimal intervals without affecting performance. To ensure reliability, a Lua script is used to execute Redis operations atomically, preventing conflicts when multiple users edit the document simultaneously.

For more details about code snippet, please refer this [link](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collaborative-Editing/blob/master/Server%20side%20with%20distributed%20cache/ASP.NET%20Core/Using%20Redis/Model/CollaborativeEditingHelper.cs)

### Step 8: Implement background task queue

This step implements a thread-safe, bounded queue to handle document save requests asynchronously without blocking the main application flow. It uses a channel-based approach with a fixed capacity to efficiently manage concurrent operations. The background service processes each save request by loading the document, applying changes, saving the updated file, and clearing the cache to maintain consistency.

For more details about this code logic, please refer this [link](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collaborative-Editing/tree/master/Server%20side%20with%20distributed%20cache/ASP.NET%20Core/Using%20Redis/Services)

N> [View sample in GitHub](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collaborative-Editing/tree/master/Server%20side%20with%20distributed%20cache/ASP.NET%20Core/Using%20Redis).