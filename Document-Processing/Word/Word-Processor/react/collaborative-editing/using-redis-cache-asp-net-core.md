---
layout: post
title: Collaborative Editing in React DOCX Editor | Syncfusion
description: Learn how to enable collaborative editing in React DOCX Editor to allow multiple users to work on a document simultaneously.
platform: document-processing
control: Collaborative Editing 
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in React with Redis in ASP.NET Core

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) supports collaborative editing which allows multiple users to work on the same document simultaneously. This can be done in real-time, so that collaborators can see the changes as they are made

## Prerequisites

The following are needed to enable collaborative editing in Document Editor.

- SignalR
- Redis

## SignalR

SignalR enables real-time communication by instantly sending and receiving document changes between clients and the server, ensuring seamless collaboration. In distributed environments, it can be scaled using Azure SignalR Service or a Redis backplane.

### Scale-out SignalR using Azure SignalR service

Azure SignalR Service is a scalable, managed service for real-time communication in web applications. It enables real-time messaging between web clients (browsers) and your server-side application (across multiple servers).

The following code snippet demonstrates how to configure Azure SignalR in an ASP.NET Core application using the `AddAzureSignalR` method in the "Program.cs" file of the web service project.

{% tabs %}
{% highlight C# tabtitle="C#" %}

builder.Services.AddSignalR().AddAzureSignalR("<your-azure-signalr-service-connection-string>", options => { 
    // Specify the channel name 
    options.Channels.Add("document-editor");
});

{% endhighlight %}
{% endtabs %}

### Scale-out SignalR using Redis

A Redis backplane enables horizontal scaling in a SignalR application. SignalR uses Redis to efficiently broadcast messages across multiple servers, allowing the application to support a large number of users with minimal latency.

In the SignalR application, install the following NuGet package:

- Microsoft.AspNetCore.SignalR.StackExchangeRedis

The following code snippet demonstrates how to configure the Redis backplane in an ASP.NET Core application using the `AddStackExchangeRedis` method in the "Program.cs" file of the web service project.

{% tabs %}
{% highlight C# tabtitle="C#" %}

builder.Services.AddSignalR().AddStackExchangeRedis("<your_redis_connection_string>");

{% endhighlight %}
{% endtabs %}

Configure the options as required.
 
The following example demonstrates how to add a channel prefix using the ConfigurationOptions object.

{% tabs %}
{% highlight C# tabtitle="C#" %}

builder.Services.AddDistributedMemoryCache().AddSignalR().AddStackExchangeRedis(connectionString, options =>
{
   options.Configuration.ChannelPrefix = "document-editor";
});

{% endhighlight %}
{% endtabs %}

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

Collaborative editing is built using three main components:

### Client (React Document Editor)

- Captures user edits in the document

- Converts edits into operations and sends them to the server

- Receives updates from other users and applies them to stay in sync

### Real-time communication (SignalR)

- Acts as the communication layer between clients and server

- Sends and receives changes instantly

- Broadcasts updates to all connected users in real time 

### Distributed cache (Redis)

- Temporarily stores all editing operations

- Maintains the correct order of changes

- Resolves conflicts between multiple users using the OT algorithm

## Integrate collaborative editing in client side

### Step 1: Integrate Document Editor in React sample

Refer to the following documentation to get started with the [React Document Editor](https://help.syncfusion.com/document-processing/word/word-processor/react/getting-started)

### Step 2: Enable collaborative editing

To enable collaborative editing, inject [CollaborativeEditingHandler](https://ej2.syncfusion.com/documentation/api/document-editor/collaborativeeditinghandler) and set the [enableCollaborativeEditing](https://ej2.syncfusion.com/documentation/api/document-editor/index-default#enablecollaborativeediting) property to true in the Document Editor.

The following code snippet demonstrates how to enable collaborative editing in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="TS" %}

import { DocumentEditorContainerComponent, CollaborativeEditingHandler, DocumentEditorComponent } from '@syncfusion/ej2-react-documenteditor';

// Inject collaborative editing module.
DocumentEditorComponent.Inject(CollaborativeEditingHandler);

// Add component intialization logics

// initialization of variables
public collaborativeEditingHandler ?: CollaborativeEditingHandler;

 
public componentDidMount(): void {
    if (this.container) {
        this.container.documentEditor.enableCollaborativeEditing = true;
        this.collaborativeEditingHandler = this.container.documentEditor.collaborativeEditingHandlerModule;
    }
    if (!this.connection) {
        this.initializeSignalR();
        this.loadDocumentFromServer();
    }
}

// Other code snippets

render() {
  return (<div className='control-pane'>
    <div>
      <div id='documenteditor_titlebar' className="e-de-ctn-title"></div>
      <div id="documenteditor_container_body">
        <DocumentEditorContainerComponent id="container" created={this.onCreated.bind(this)} ref={(scope: DocumentEditorContainerComponent) => { this.container = scope; }}
          height={'590px'} currentUser={this.currentUser} serviceUrl={this.serviceUrl + 'api/documenteditor'} enableToolbar={true} locale='en-US' >
          <Inject services={[Toolbar]} />
        </DocumentEditorContainerComponent>
      </div>
    </div>
  </div>);
}

{% endhighlight %}
{% endtabs %}

### Step 3: Configure SignalR to send and receive changes

To broadcast changes and receive updates from remote users, install the [Microsoft SignalR npm](https://www.npmjs.com/package/@microsoft/signalr) package in your React application.

The following code snippet demonstrates how to configure SignalR in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="TS" %}

import { HubConnectionBuilder, HttpTransportType, HubConnectionState, HubConnection } from '@microsoft/signalr';

// Component initialization logic

// Declare variables
public connectionId: string = '';
public connection ?: HubConnection;

public initializeSignalR = (): void => {
  // SignalR connection
  this.connection = new HubConnectionBuilder().withUrl(this.serviceUrl + 'documenteditorhub', {
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets
  }).withAutomaticReconnect().build();
  // Event handler for signalR connection
  this.connection.on('dataReceived', this.onDataRecived.bind(this));

  this.connection.onclose(async () => {
    if (this.connection && this.connection.state === HubConnectionState.Disconnected) {
      alert('Connection lost. Please relod the browser to continue.');
    }
  });
}

public onDataRecived(action: string, data: any) {
  if (this.collaborativeEditingHandler) {
    debugger;
    if (action == 'connectionId') {
      // Update the current connection id to track other users
      this.connectionId = data;
    } else if (this.connectionId != data.connectionId) {
      if (this.titleBar) {
        if (action == 'action' || action == 'addUser') {
          // Add the user to title bar when user joins the room
          this.titleBar.addUser(data);
        } else if (action == 'removeUser') {
          // Remove the user from title bar when user leaves the room
          this.titleBar.removeUser(data);
        }
      }
    }
    // Apply the remote action in DocumentEditor
    this.collaborativeEditingHandler.applyRemoteAction(action, data);
  }
}

public connectToRoom(data: any) {
  try {
    if (this.connection) {
      // start the connection.
      this.connection.start().then(() => {
        // Join the room.
        if (this.connection) {
          this.connection.send('JoinGroup', { roomName: data.roomName, currentUser: data.currentUser });
        }
        console.log('server connected!!!');
      });
    }
  } catch (err) {
    console.log(err);
    // Attempting to reconnect in 5 seconds
    setTimeout(this.connectToRoom, 5000);
  }
};

// Other code snippets

{% endhighlight %}
{% endtabs %}

### Step 4: Join SignalR room while opening the document

When opening a document, a unique ID must be generated for each document. These unique IDs are then used to create rooms using SignalR, which facilitates real-time communication and collaborative editing among multiple users.

The following code snippet demonstrates how to generate a unique ID and open a document.

{% tabs %}
{% highlight ts tabtitle="TS" %}

public loadDocumentFromServer() {
  createSpinner({ target: document.body });
  showSpinner(document.body);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let roomId = urlParams.get('id');
  if (roomId == null) {
    roomId = Math.random().toString(32).slice(2)
    window.history.replaceState({}, "", `?id=` + roomId);
  }
  var httpRequest = new XMLHttpRequest();
  httpRequest.open('Post', this.serviceUrl + 'api/CollaborativeEditing/ImportFile', true);
  httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200 || httpRequest.status === 304) {
        this.openDocument(httpRequest.responseText, roomId as string);
        hideSpinner(document.body);
      }
      else {
        hideSpinner(document.body);
        alert('Fail to load the document');
      }
    }
  };
  httpRequest.send(JSON.stringify({ "fileName": "Giant Panda.docx", "roomName": roomId }));
}

public openDocument(responseText: string, roomName: string): void {
  showSpinner(document.getElementById('container') as HTMLElement);
  let data = JSON.parse(responseText);
  if(this.container) {
  this.collaborativeEditingHandler = this.container.documentEditor.collaborativeEditingHandlerModule;
  // Update the room and version information to collaborative editing handler.
  this.collaborativeEditingHandler?.updateRoomInfo(roomName, data.version, this.serviceUrl + 'api/CollaborativeEditing/');

  // Open the document
  this.container.documentEditor.open(data.sfdt);

  setTimeout(() => {
    if (this.container) {
      // connect to server using signalR
      this.connectToRoom({ action: 'connect', roomName: roomName, currentUser: this.container.currentUser });
    }
  });
  }
  hideSpinner(document.getElementById('container') as HTMLElement);
}

{% endhighlight %}
{% endtabs %}

### Step 5: Broadcast current editing changes to remote users

Changes made on the client side must be transmitted to the server to be broadcast to other connected users. 

The following code snippet demonstrates how to send changes to the server using the [contentChange](https://ej2.syncfusion.com/documentation/api/document-editor/index-default#contentchange) event in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="TS" %}

this.container.contentChange = (args: ContainerContentChangeEventArgs) => {
  if (this.collaborativeEditingHandler) {
    // Send the editing action to server
    this.collaborativeEditingHandler.sendActionToServer(args.operations as Operation[])
  }
}

{% endhighlight %}
{% endtabs %}

The complete version of the code discussed above is available at the following [GitHub repository](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collaborative-Editing/tree/master/Client%20side%20with%20dotnet/React)

## Integrate collaborative editing in server side

### Step 1: Create the Document Editor web service project 

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

Microsoft SignalR is used to broadcast changes. Add the following configuration to the application’s "Program.cs" file.

{% tabs %}
{% highlight C# tabtitle="C#" %}

using Microsoft.Azure.SignalR;

// other Services

// Add signalR services to the container.

builder.Services.AddSignalR().AddStackExchangeRedis(“Your Redis Connection String”);

// other Services

{% endhighlight %}
{% endtabs %}

### Step 5: Configure SignalR Hub to create room for collaborative editing session

To manage groups for each document, create a folder named "Hub" and add a file named "DocumentEditorHub.cs" inside it.

#### 1. Mapping Hub details

Map DocumentEditorHub in "Program.cs" file using the below code

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
    // In this case, 'Giant Panda.docx' file from the wwwroot folder is opened.
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
    //After transformation broadcast changes to all users in the gropu
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
  List < ActionInfo > previousOperations = ((RedisResult[])results[1]).Select(value => JsonConvert.DeserializeObject<ActionInfo>(value.ToString())).ToList();

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

public async Task < string > GetActionsFromServer(ActionInfo param)
{
  try {
    // Initialize necessary variables from the parameters and helper class
    int saveThreshold = CollaborativeEditingHelper.SaveThreshold;
    string roomName = param.RoomName;
    int lastSyncedVersion = param.Version;
    int clientVersion = param.Version;

    // Retrieve the database connection
    IDatabase database = _redisConnection.GetDatabase();

    // Fetch actions that are effective and pending based on the last synced version
    List < ActionInfo > actions = await GetEffectivePendingVersion(roomName, lastSyncedVersion, database);

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
  catch {
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