---
layout: post
title: Collaborative Editing in DOCX Editor Control | Syncfusion
component: DocumentEditor
description: Learn how to enable and perform the collaborative editing in ASP.NET Core Syncfusion DOCX Editor Component.
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing with Redis in ASP.NET Core DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) supports collaborative editing, which allows multiple users to work on the same document simultaneously. This can be done in real-time, so that collaborators can see the changes as they are made.

## Prerequisites

The following are needed to enable collaborative editing in the DOCX Editor:

- SignalR
- Redis

## SignalR

SignalR enables real-time communication by instantly sending and receiving document changes between clients and the server, ensuring seamless collaboration. In distributed environments, it can be scaled using Azure SignalR Service or a Redis backplane.

### Scale-out SignalR using Azure SignalR service

Azure SignalR Service is a scalable, managed service for real-time communication in web applications. It enables real-time messaging between web clients (browsers) and your server-side application (across multiple servers).

The following code snippet demonstrates how to configure Azure SignalR in an ASP.NET Core application using the `AddAzureSignalR` method in the `Program.cs` file of the web service project.

```csharp
builder.Services.AddSignalR().AddAzureSignalR("<your-azure-signalr-service-connection-string>", options => {
    // Specify the channel name
    options.Channels.Add("document-editor");
});
```

### Scale-out SignalR using Redis

A Redis backplane enables horizontal scaling in a SignalR application. SignalR uses Redis to efficiently broadcast messages across multiple servers, allowing the application to support a large number of users with minimal latency.

In the SignalR application, install the following NuGet package:

- Microsoft.AspNetCore.SignalR.StackExchangeRedis

The following code snippet demonstrates how to configure the Redis backplane in an ASP.NET Core application using the `AddStackExchangeRedis` method in the `Program.cs` file of the web service project.

```csharp
builder.Services.AddSignalR().AddStackExchangeRedis("<your_redis_connection_string>");
```

Configure the options as required.

The following example demonstrates how to add a channel prefix using the `ConfigurationOptions` object.

```csharp
builder.Services.AddDistributedMemoryCache().AddSignalR().AddStackExchangeRedis(connectionString, options =>
{
    options.Configuration.ChannelPrefix = "document-editor";
});
```

## Redis

In collaborative editing, Redis is used to store temporary data that helps queue editing operations and resolve conflicts using the `Operational Transformation` algorithm.

All editing operations are stored in the Redis cache. To prevent memory buildup, a `SaveThreshold` limit can be configured at the application level. For example, if the SaveThreshold is set to 100, up to twice that number of editing operations are retained in Redis per document. When this limit is exceeded, the first 100 operations (as defined by the save threshold) are removed from the cache and automatically saved to the source document.

The configuration and storage size of the Redis cache can be adjusted based on the following considerations:

- *Storage Requirements*: A minimum of 400 KB of cache memory is required to edit a single document, with the capacity to store up to 100 editing operations. Storage requirements may increase based on the following factors:

   - *Images*: Increases with the number of images added to the document.

   - *Pasted content*: Depends on the size of the SFDT content.

- *Connection Limits*: Redis has a limit on concurrent connections. The Redis configuration should be selected based on the user base to ensure optimal performance.

> For better performance, a minimum `SaveThreshold` value of 100 is recommended.

## Integrate collaborative editing in client side

### Step 1: Integrate DOCX Editor

Refer to the following documentation to get started with the [ASP.NET Core DOCX Editor](https://help.syncfusion.com/document-processing/word/word-processor/asp-net-core/getting-started-core).

### Step 2: Enable collaborative editing

To enable collaborative editing, inject `CollaborativeEditingHandler` and set the `enableCollaborativeEditing` property to true in the DOCX Editor.

The following code snippet demonstrates how to enable collaborative editing in the DOCX Editor.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/collaborative-editing/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/collaborative-editing/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

### Step 3: Configure SignalR to send and receive changes

To broadcast changes and receive updates from remote users, configure SignalR in the DOCX Editor.

The following code snippet demonstrates how to configure SignalR in the DOCX Editor.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/collaborative-editing/script-1 %}
{% endhighlight %}
{% endtabs %}


### Step 4: Join SignalR room while opening the document

When opening a document, a unique ID must be generated for each document. These unique IDs are then used to create rooms using SignalR, which facilitates real-time communication and collaborative editing among multiple users.

The following code snippet demonstrates how to generate a unique ID and open a document.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/collaborative-editing/script-2 %}
{% endhighlight %}
{% endtabs %}


### Step 5: Broadcast current editing changes to remote users

Changes made on the client side must be transmitted to the server to be broadcast to other connected users.

The following code snippet demonstrates how to send changes to the server using the `contentChange` event in the DOCX Editor.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/collaborative-editing/script-3 %}
{% endhighlight %}
{% endtabs %}


## How to enable collaborative editing in ASP.NET Core

### Step 1: Configure SignalR in ASP.NET Core 

We are using Microsoft SignalR to broadcast the changes. Please add the following configuration to your application's Program.cs file.

```csharp
    .....
    builder.Services.AddSignalR();
    .....
    .....
    .....
    app.MapHub<DocumentEditorHub>("/documenteditorhub");
    .....
    .....
```

### Step 2: Configure SignalR hub to create room for collaborative editing session

To manage groups for each document, create a folder named "Hub" and add a file named "DocumentEditorHub.cs" inside it. Add the following code to the file to manage SignalR groups using room names.

Join the group by using unique id of the document by using `JoinGroup` method.

```csharp
static Dictionary<string, ActionInfo> userManager = new Dictionary<string, ActionInfo>();
    internal static Dictionary<string, List<ActionInfo>> groupManager = new Dictionary<string, List<ActionInfo>>();

    // Join to the specified room name
    public async Task JoinGroup(ActionInfo info)
    {
        if (!userManager.ContainsKey(Context.ConnectionId))
        {
            userManager.Add(Context.ConnectionId, info);
        }
        info.ConnectionId = Context.ConnectionId;
        //Add the current connected use to the specified group
        await Groups.AddToGroupAsync(Context.ConnectionId, info.RoomName);
        if (groupManager.ContainsKey(info.RoomName))
        {
            await Clients.Caller.SendAsync("dataReceived", "addUser", groupManager[info.RoomName]);
        }
        lock (groupManager)
        {
            if (groupManager.ContainsKey(info.RoomName))
            {
                groupManager[info.RoomName].Add(info);
            }
            else
            {
                List<ActionInfo> actions = new List<ActionInfo>
                {
                    info
                };
                groupManager.Add(info.RoomName, actions);
            }
        }
       // Notify other users in the group about a new user joining the collaborative editing session.
        Clients.GroupExcept(info.RoomName, Context.ConnectionId).SendAsync("dataReceived", "addUser", info);
    }

```

Handle user disconnection using SignalR.

```csharp
//Handle disconnection from group.
    public override Task OnDisconnectedAsync(Exception? e)
    {
        string roomName = userManager[Context.ConnectionId].RoomName;
        if (groupManager.ContainsKey(roomName))
        {
            groupManager[roomName].Remove(userManager[Context.ConnectionId]);

            if (groupManager[roomName].Count == 0)
            {
                groupManager.Remove(roomName);
//If all user disconnected from current room. Auto save the change to source document.
CollaborativeEditingController.UpdateOperationsToSourceDocument(roomName, "<<documentpath>>", false);
            }
        }

        if (userManager.ContainsKey(Context.ConnectionId))
        {
            //Notify other user in the group about a user exiting the collaborative editing session
            Clients.OthersInGroup(roomName).SendAsync("dataReceived", "removeUser", Context.ConnectionId);
            Groups.RemoveFromGroupAsync(Context.ConnectionId, roomName);
            userManager.Remove(Context.ConnectionId);
        }
        return base.OnDisconnectedAsync(e);
    }

```

### Step 3: Configure Redis cache connection string in application level

Configure the Redis that stores temporary data for the collaborative editing session. Provide the Redis connection string in `appsettings.json` file.

```json
.....
"ConnectionStrings": {
  "RedisConnectionString": "<<Your Redis connection string>>"
}
.....

```

### Step 4: Configure Web API actions for collaborative editing

#### Import File

Used to open DOCX documents, verify the Redis cache for pending operations, and retrieve them for the collaborative editing session.

1. When opening a document, check the Redis cache for pending operations and retrieve them for the collaborative editing session.
2. If pending operations exist, apply them to the `WordDocument` instance using the `UpdateActions` method before converting it to the SFDT format.

```csharp
public async Task<string> ImportFile([FromBody] FileInfo param)
 {
     .....
     .....
     DocumentContent content = new DocumentContent();

     .....
     //Get source document from database/file system/blob storage
     WordDocument document = GetSourceDocument(param.fileName);
     .....
     //Get the temporary operations
     List<ActionInfo> actions = await GetPendingOperations(param.fileName, 0, -1);
     if(actions!=null && actions.Count > 0)
     {
         //Apply temporary data to the document.
         document.UpdateActions(actions);
     }
     string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
     content.version = 0;
     content.sfdt = json;
     return Newtonsoft.Json.JsonConvert.SerializeObject(content);
 }

```

#### Update editing records to Redis cache

Each edit operation made by the user is sent to the server and pushed into a Redis list data structure. Each operation is assigned a version number upon insertion into Redis.

After inserting the records to the server, the position of the current editing operation must be transformed relative to any previous editing operations not yet synced with the client using the `TransformOperation` method to resolve any potential conflicts with the help of the `Operational Transformation` algorithm.

Once the conflict is resolved, the current operation is broadcast to all connected users within the group. The following code snippet demonstrates how the operations are cached and updated.

```csharp
public async Task<ActionInfo> UpdateAction([FromBody] ActionInfo param)
{
    try
    {
        ActionInfo modifiedAction = AddOperationsToCache(param);
        //After transformation broadcast changes to all users in the group
        await _hubContext.Clients.Group(param.RoomName).SendAsync("dataReceived", "action", modifiedAction);
        return modifiedAction;
    }
    catch
    {
        return null;
    }
}

private async Task<ActionInfo> AddOperationsToCache(ActionInfo action)
 {
     int clientVersion = action.Version;
     string insertScript = "-------"
     …………
     …………
     …………
     ………… 

    IDatabase database = _redisConnection.GetDatabase();
    // Define the keys for Redis operations based on the action's room name
    RedisKey[] keys = new RedisKey[] { action.RoomName + CollaborativeEditingHelper.VersionSuffix, action.RoomName, action.RoomName + CollaborativeEditingHelper.RevisionSuffix };
    // Serialize the action and prepare values for the Redis script
    RedisValue[] values = new RedisValue[] { JsonConvert.SerializeObject(action), clientVersion.ToString(), CollaborativeEditingHelper.SaveThreshold.ToString() };
    // Execute the Lua script in Redis and store the results
    RedisResult[] results = (RedisResult[])await database.ScriptEvaluateAsync(insertScript, keys, values);

    List<ActionInfo> previousOperations = ((RedisResult[])results[1]).Select(value => JsonConvert.DeserializeObject<ActionInfo>(value.ToString())).ToList();
     previousOperations.ForEach(op => op.Version = ++clientVersion);
     if (previousOperations.Count > 1)
     {
        // Set the current action to the last operation in the list
        action = previousOperations.Last();
        // Transform operations that have not been transformed yet
        previousOperations.Where(op => !op.IsTransformed).ToList().ForEach(op => CollaborativeEditingHandler.TransformOperation(op, previousOperations));
     }
     action = previousOperations[previousOperations.Count - 1];
     action.Version = clientVersion;
     //Return the transformed operation to broadcast it to other clients.
     return action;
 }

```

#### Web API to retrieve previous operations (Backup for lost operations)

On the client side, messages broadcast using SignalR may be received out of order or lost due to network issues. In such cases, a backup mechanism is required to retrieve missing operations from Redis.

Using the following method, all operations performed after the last successfully synchronized client version can be retrieved, ensuring that any missing operations are returned to the requesting client.

The following code snippet demonstrates how to track and retrieve pending operations.

```csharp
public async Task<string> GetActionsFromServer(ActionInfo param)
  {
      try
      {
          // Initialize necessary variables from the parameters and helper class
          int saveThreshold = CollaborativeEditingHelper.SaveThreshold;
          string tableName = param.RoomName;
          int lastSyncedVersion = param.Version;
          int clientVersion = param.Version;

          // Retrieve the database connection
          IDatabase database = _redisConnection.GetDatabase();

          // Fetch actions that are effective and pending based on the last synced version
          List<ActionInfo> actions = await GetEffectivePendingVersion(tableName, lastSyncedVersion);

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
      catch (Exception ex)
      {
          // In case of an exception, return an empty JSON object
          return "{}";
      }
  }

```

The full version of the code discussed can be found at the following GitHub location.

GitHub Example: [`Collaborative editing examples`](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collabrative-Editing)
