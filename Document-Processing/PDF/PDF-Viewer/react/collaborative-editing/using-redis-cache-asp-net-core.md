---
layout: post
title: Collaborative Editing React PDF Viewer with ASP.NET Core | Syncfusion
description: Learn how to implement collaborative editing in React PDF Viewer using ASP.NET Core with Redis for real-time multi-user PDF annotation and interaction.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in React PDF Viewer with Redis in ASP.NET Core

The React PDF Viewer supports collaborative editing which allows multiple users to work on the same PDF document simultaneously. This can be done in real-time so that collaborators can see the annotations and interactions as they are made.

## Prerequisites

The following are needed to enable collaborative editing in PDF Viewer:

- **SignalR** - For real-time communication
- **Redis** - For distributed caching and operation storage

## SignalR

SignalR enables real-time communication by instantly sending and receiving document changes between clients and the server, ensuring seamless collaboration. In distributed environments, it can be scaled using Azure SignalR Service or a Redis backplane.

### Scale-out SignalR using Azure SignalR service

Azure SignalR Service is a scalable, managed service for real-time communication in web applications. It enables real-time messaging between web clients (browsers) and your server-side application (across multiple servers).

The following code snippet demonstrates how to configure Azure SignalR in an ASP.NET Core application using the `AddAzureSignalR` method in the "Program.cs" file of the web service project.

{% tabs %}
{% highlight C# tabtitle="C#" %}

builder.Services.AddSignalR().AddAzureSignalR("<your-azure-signalr-service-connection-string>", options => { 
    // Specify the channel name 
    options.Channels.Add("pdf-viewer-collaboration");
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
   options.Configuration.ChannelPrefix = "pdf-viewer-collaboration";
});

{% endhighlight %}
{% endtabs %}

## Redis

In collaborative editing, Redis is used to store temporary data that helps queue editing operations and resolve conflicts using the `Operational Transformation` algorithm.

All editing operations are stored in the Redis cache. To prevent memory buildup, a `SaveThreshold` limit can be configured at the application level. For example, if the SaveThreshold is set to 100, up to twice that number of editing operations are retained in Redis per document. When this limit is exceeded, the first 100 operations (as defined by the save threshold) are removed from the cache and automatically saved to the source document.

### Configuration

The configuration and storage size of the Redis cache can be adjusted based on the following considerations:

- **Storage Requirements** - A minimum of 400 KB of cache memory is required per document to store up to 100 editing operations

- **Operation Size** - Increases with the complexity of PDF annotations and markups

- **Connection Limits** - Redis has a limit on concurrent connections that should be configured based on your user base

> For better performance, a minimum `SaveThreshold` value of 100 is recommended.

## Collaborative Editing Architecture

Collaborative editing is built using three main components:

### Client (React PDF Viewer)

- Captures user interactions in the PDF document
- Converts interactions into operations and sends them to the server
- Receives updates from other users and applies them to stay in sync
- Manages user presence and awareness of other collaborators

### Real-Time Communication (SignalR)

- Acts as the communication layer between clients and server
- Sends and receives changes instantly
- Broadcasts updates to all connected users in real-time
- Handles connection management and user presence tracking

### Distributed Cache (Redis)

- Temporarily stores all editing operations
- Maintains the correct order of changes
- Resolves conflicts between multiple users using the OT (Operational Transformation) algorithm
- Provides operation history for consistency

## Integrate Collaborative Editing in Client Side

### Step 1: Set up React PDF Viewer

Refer to the [React PDF Viewer getting started](../getting-started) documentation to set up the PDF Viewer component in your React application.

### Step 2: Enable collaborative editing

To enable collaborative editing, configure the PDF Viewer component to support real-time collaboration and set up connection parameters for the collaborative session.

### Step 3: Configure SignalR to send and receive changes

To broadcast changes and receive updates from remote users, install the [Microsoft SignalR npm](https://www.npmjs.com/package/@microsoft/signalr) package in your React application.

### Step 4: Initialize SignalR connection

Set up the SignalR connection to establish real-time communication with the ASP.NET Core server.

### Step 5: Join collaborative session

Implement logic to join a collaborative editing session using a unique document ID. Users joining the same session will be able to see each other's annotations and interactions in real-time.

### Step 6: Handle real-time updates

Set up event handlers to receive and process updates from other collaborators, including:

- New annotations added by other users
- Modifications to existing annotations
- User presence updates
- Document page navigation and zoom changes

### Step 7: Broadcast local changes

Send local user changes to the server using SignalR so they can be broadcast to all other collaborators in the session.

## Integrate Collaborative Editing in Server Side

### Step 1: Create the ASP.NET Core web service project

Create an ASP.NET Core web service to handle server-side operations for collaborative PDF editing.

### Step 2: Install required NuGet packages

In the web service app, install the following NuGet packages:

- Microsoft.Azure.SignalR
- Microsoft.AspNetCore.SignalR.StackExchangeRedis
- Syncfusion.EJ2.PdfViewer.AspNet.Core

### Step 3: Configure Redis connection

Configure the Redis cache that stores temporary data for the collaborative editing session. Provide the Redis connection string in the `appsettings.json` file.

```json

// other code snippet
"ConnectionStrings": {
 "RedisConnectionString": "<<Your Redis connection string>>"
}
// other code snippet

```

### Step 4: Configure SignalR in ASP.NET Core

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

To manage groups for each PDF document, create a folder named "Hub" and add a file named "PdfViewerHub.cs" inside it.

#### 1. Mapping Hub details

Map PdfViewerHub in "Program.cs" file using the below code

{% tabs %}
{% highlight C# tabtitle="C#" %}

app.MapHub<PdfViewerHub>("/pdfviewerhub");

{% endhighlight %}
{% endtabs %}

#### 2. Join room

Join the group using the unique ID of the document with the `JoinGroup` method.

Add the following code to manage SignalR groups using room names for collaborative PDF viewing.

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

This file includes the code snippets that handle server-side interactions for collaborative PDF editing.

#### Import PDF Document

Used to open PDF documents, verify the Redis cache for pending operations, and retrieve them for the collaborative editing session.

### Step 7: Create helper models and constants

This step defines Redis key naming conventions, constants, and helper models to ensure consistency and maintainability across the application. It also sets a save threshold of 100 operations, enabling automatic persistence of changes at optimal intervals without affecting performance. To ensure reliability, a Lua script is used to execute Redis operations atomically, preventing conflicts when multiple users edit the document simultaneously.

### Step 8: Implement background task queue

This step implements a thread-safe, bounded queue to handle document save requests asynchronously without blocking the main application flow. It uses a channel-based approach with a fixed capacity to efficiently manage concurrent operations. The background service processes each save request by loading the document, applying changes, saving the updated file, and clearing the cache to maintain consistency.

## Save and Recovery

### Auto-Save Mechanism

Collaborative editing includes an automatic save mechanism that:

- Periodically saves pending operations to the PDF document
- Clears Redis cache after successful save
- Recovers unsaved changes if connection is lost
- Maintains document consistency across all users

### Operation History

All editing operations are maintained in order:

- New users joining a session receive the full operation history
- Version numbers track operation sequence
- Operational transformation ensures consistency
- Lost messages can be recovered from Redis

## Troubleshooting

### Connection Issues

- Verify SignalR server is running and accessible
- Check firewall and network configuration
- Ensure Redis is accessible from the server
- Review server logs for connection errors

### Data Consistency

- Verify Redis connection and operation storage
- Check operational transformation logic
- Review version numbering and conflict resolution
- Monitor save threshold and operation cleanup

### Performance

- Monitor Redis memory usage
- Track operation queue size
- Review SignalR message throughput
- Adjust SaveThreshold if needed

## See Also

- [Collaborative editing overview](./overview)
- [Collaborative editing using Node.js with Redis](./using-redis-cache-nodejs)
- [PDF Viewer annotations](../annotation)
- [PDF Viewer getting started](../getting-started)