---
layout: post
title: Collaborative Editing in ASP.NET MVC DOCX Editor | Syncfusion
component: DocumentEditor
description: The collaborative editing feature in ASP.NET MVC DOCX Editor supports real-time multi-user document editing using Redis with ASP.NET.
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in ASP.NET MVC DOCX Editor with Redis

[ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor) supports collaborative editing, which allows multiple users to work on the same document simultaneously. This can be done in real-time, so that collaborators can see the changes as they are made.

This topic walks through integrating collaborative editing in a ASP.NET MVC DOCX Editor using the [Syncfusion Collaborator](https://help.syncfusion.com/document-processing/collaborator/overview) common packages — the `@syncfusion/ej2-collaborator` client library and the `Syncfusion.Collaborator.Server.AspNet.MVC` ASP.NET MVC Collaboration Server with Redis as the distributed cache.

## Prerequisites

The following are needed to enable collaborative editing in DOCX Editor using the Syncfusion Collaborator (common collaboration packages).

- [Syncfusion Collaborator](https://www.syncfusion.com/document-processing/word/collaborator) client and server packages:
   - `@syncfusion/ej2-collaborator` (client library)
   - `Syncfusion.Collaborator.Server.AspNet.Mvc` (ASP.NET MVC Collaboration Server)
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

The browser side uses the shared [Collaboration Client](https://help.syncfusion.com/document-processing/collaborator/collaboration-client) (`@syncfusion/ej2-collaborator`) wired to the ASP.NET MVC DOCX Editor through a control-specific **adapter** that implements the `ICollaborationProvider` interface.

- Captures user edits in the DOCX Editor.
- Bridges local edits to the Collaboration Client through a `DocumentEditorAdapter`.
- Sends local editing actions to the Collaboration Server.
- Receives remote actions and applies them to the editor through `applyRemoteAction`.
- Keeps the document synchronized across all connected users.

### Collaboration Server (common collaborator framework)

The ASP.NET MVC [Collaboration Server](https://help.syncfusion.com/document-processing/collaborator/collaboration-server#aspnet-mvc-server) (`Syncfusion.Collaborator.Server.AspNet.Mvc`) hosts the shared, control-agnostic collaboration services and uses a control-specific **server adapter** (`ICollaborationAdapter`) to translate Document Editor actions to and from the common collaboration model.

- Receives editing actions from the Collaboration Client.
- Runs Operational Transformation through the server adapter and common `IActionService`.
- Persists actions and assigns version numbers.
- Broadcasts the transformed action to all participants in the room using `IActiveTransport`.

### Real-time communication (transport layer)

Acts as the transport layer between the Collaboration Client and the Collaboration Server. The common Collaborator framework supports  transport by **WebSocket**.

- Sends and receives editing changes instantly between clients and server.
- Broadcasts updates to all connected users in real time.
- With WebSocket, ensure WebSocket support is enabled on the host (`app.UseWebSockets()`) before mapping the collaboration server.

The transport is selected when constructing the `CollaborationClient` on the client side (`connectionType: 'websocket'`) and through `CollaborationOptions.ConnectionType` on the server side. 

### Distributed cache (Redis)

- Temporarily stores all editing operations.
- Maintains the correct order of changes.
- Resolves conflicts between multiple users using the OT algorithm.

## Integrate collaborative editing in client side

### Step 1: Enable collaborative editing in DOCX Editor

To enable collaborative editing, inject `CollaborativeEditingHandler` and set the `enableCollaborativeEditing` property to true in the DOCX Editor.

The following code snippet demonstrates how to enable collaborative editing in the DOCX Editor.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/collaborative-editing-cs1/index.ts %}
{% endhighlight %}
{% endtabs %}

### Step 2: Install the Collaboration Client package

Install the shared [Collaboration Client](https://www.npmjs.com/package/@syncfusion/ej2-collaborator) npm package in your application.

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-collaborator

{% endhighlight %}
{% endtabs %}

### Step 3: Create the Document Editor adapter

The adapter acts as a bridge between the Collaboration Client and the DOCX Editor. It implements the `ICollaborationProvider` interface and is responsible for loading the document from the server, bridging local edits to the editor's sender, and applying remote collaboration actions to the editor.

The following code snippet demonstrates the `DocumentEditorAdapter`.

 ```ts
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

### Step 4: Wire the Collaboration Client

With collaborative editing enabled in the DOCX Editor (Step 2), create the adapter and initialize the [Collaboration Client](https://www.syncfusion.com/document-processing/word/collaborator/collaboration-client) with the desired transport. The Collaboration Client connects to the server, joins the collaboration room, and tracks user join/leave events. After the document is loaded through the adapter, join the collaboration room.

The `connectionType` option selects the transport:
- `'websocket'` — uses WebSocket. The server must be registered with `ConnectionType = CollaborationConnectionType.WebSocket`

The following code snippet demonstrates how to wire the Collaboration Client with websocket transport in the DOCX Editor.

```ts
import { CollaborationClient, UserInfo } from '@syncfusion/ej2-collaborator';
import { DocumentEditorAdapter } from './DocumentEditorAdapter';

// Set the backend service URL used by the adapter and editor.
const serviceUrl: string = 'https://localhost:44387/';

// Create the adapter that bridges the DOCX Editor and the Collaboration Client.
const adapter: DocumentEditorAdapter = new DocumentEditorAdapter(this.container, serviceUrl);

// Use connectionType: 'websocket' to use the WebSocket transport.
const client: CollaborationClient = new CollaborationClient(adapter, {
  serviceUrl: 'https://localhost:44387/',
  connectionType: 'websocket',
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

The Collaboration Client internally manages the transport connection, room joining, and the `dataReceived` events (`connectionId`, `addUser`, `removeUser`, and `action`). For each remote action received from the server, it calls the adapter's `applyRemoteAction` method, which applies the action to the DOCX Editor through the `CollaborativeEditingHandler`. Local edits are bridged to the editor's sender through the `contentChange` handler in the adapter, so there is no need to configure WebSocket manually.

## Integrate collaborative editing in server side

The server side uses the shared [Collaboration Server](https://www.syncfusion.com/document-processing/word/collaborator/collaboration-server) (`Syncfusion.Collaborator.Server.AspNet.Mvc`) and a DOCX Editor-specific server adapter that implements the `ICollaborationAdapter` interface. The common collaboration framework handles Redis storage, Operational Transformation, versioning, and broadcast, while the adapter translates Document Editor actions to and from the common collaboration model.

### Step 1: Create the DOCX Editor web service project 

Create an ASP.NET MVC web service to handle server-side operations. Refer to the [ASP.NET MVC web service for ASP.NET MVC DOCX Editor](https://help.syncfusion.com/document-processing/word/word-processor/javascript-es6/web-services/mvc) documentation to create the web service project.

### Step 2: Install required NuGet packages

In the web service app, install the following NuGet packages:

- Syncfusion.Collaborator.Server.AspNet.Mvc
- [Syncfusion.EJ2.WordEditor.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Mvc5)

### Step 3: Register the Collaboration Server and provide Redis connection string

Open Global.asax.cs and register the Collaboration Server services during application startup. Configure the Redis connection and select WebSocket as the transport type. For ASP.NET MVC, the WebSocket transport is selected by setting CollaborationConnectionType.WebSocket. The adapter is registered through ServiceCollectionExtensions.RegisterAdapter(…).

The following code snippet demonstrates the configuration in the "Global.asax.cs " file.

```C#

namespace WebApplication1
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);           
            ServiceCollectionExtensions.RegisterAdapter(
                new DocumentEditorCollaborationAdapter());
            ServiceCollectionExtensions.AddCollaborationServer(options =>{
            options.ConnectionString = "Your Redis Connection string";
            options.ConnectionType = CollaborationConnectionType.WebSocket;            
            });
           
        }
    }
}


```

### Step 4: Mount the WebSocket endpoint (Startup.cs)
Add an startup class to expose the Collaboration Server WebSocket endpoint. Incoming WebSocket requests are forwarded to the Collaboration Server transport handler.

```C#
 public class Startup
 {
     public void Configuration(IAppBuilder app)
     {
         app.Map("/ws", map =>
         {
             map.Run(context =>
             {
                 var httpContext = HttpContext.Current;

                 if (httpContext == null)
                 {
                     context.Response.StatusCode = 500;
                     return Task.CompletedTask;
                 }

                 if (!httpContext.IsWebSocketRequest)
                 {
                     context.Response.StatusCode = 400;
                     return context.Response.WriteAsync(
                         "WebSocket connection required.");
                 }                    
                 httpContext.AcceptWebSocketRequest(ServiceCollectionExtensions.MapCollaborationServer());
                 return Task.CompletedTask;
             });
         });
     }
    
 }
```

### Step 5: Add the DOCX Editor server adapter

Create a folder named "Adapter" and add a file named `DocumentEditorCollaborationAdapter.cs` inside it. This adapter is the control-specific translator on the server side. It implements `ICollaborationAdapter` and converts Document Editor actions to and from the common `CollaborationAction`, runs Operational Transformation, and queues save requests for background processing.

```C#
namespace WebApplication1.Adapter
{
    public class DocumentEditorCollaborationAdapter : ICollaborationAdapter
    {
        public DocumentEditorCollaborationAdapter()
        {
        }

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

        public async Task ProcessSaveRequestAsync(SaveRequest request, CancellationToken cancellationToken)
        {
            //throw new NotImplementedException();
            Console.WriteLine("save called");
            // You can get the document master document 
            Syncfusion.EJ2.DocumentEditor.WordDocument document = CollaborativeEditingController.GetSourceDocument();
            CollaborativeEditingHandler handler = new CollaborativeEditingHandler(document);
            //Get actions from Redis
            var actions = request.Actions.Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)MapGenericToControlAction(x)).ToList();


            if (actions.Count > 0)
            {
                foreach (var action in actions)
                {
                    if (!action.IsTransformed)
                    {
                        CollaborativeEditingHandler.TransformOperation(action, actions);
                    }
                }
                //Apply the actions to document 
                foreach (var action in actions)
                {
                    handler.UpdateAction(action);
                }

                MemoryStream stream = new MemoryStream();
                //save the updated document in the loaction as per your need. 

                Syncfusion.DocIO.DLS.WordDocument doc = WordDocument.Save(Newtonsoft.Json.JsonConvert.SerializeObject(handler.Document));

                doc.Save(stream, Syncfusion.DocIO.FormatType.Docx);

               // SaveDocument(stream, "Getting Started.docx");

                stream.Close();
            }

            document.Dispose();

            var actionService = CollaborationServiceContainer.Resolve<IActionService>();
            await actionService.ClearRecordsAsync(request.RoomName, request.PartialSave);
        }

        public async Task SaveOperationsAsync(List<CollaborationAction> actions, string roomName, bool partialSave)
        {
            var message = new SaveRequest
            {
                Actions = actions,
                PartialSave = partialSave,
                RoomName = roomName
            };

            var queue = CollaborationServiceContainer.Resolve<IBackgroundTaskQueue>();
            await queue.QueueBackgroundWorkItemAsync(message);
        }

        public void TransformOperations(List<CollaborationAction> actions)
        {
            var documentActions = actions.Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)MapGenericToControlAction(x)).ToList();

            documentActions.Where(x => !x.IsTransformed).ToList().ForEach(x => CollaborativeEditingHandler.TransformOperation(x, documentActions));

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

namespace WebApplication1.Controllers
{
     [RoutePrefix("api/CollaborativeEditing")]
    public class CollaborativeEditingController : ApiController
    {
        private static string fileLocation;

        private readonly IActionService actionService;
        private readonly ICollaborationAdapter adapter;
        private readonly IActiveTransport transport;
        public CollaborativeEditingController()
        {
            fileLocation = HostingEnvironment.MapPath("~/App_Data");

            actionService = CollaborationServiceContainer.Resolve<IActionService>();

            adapter = CollaborationServiceContainer.Resolve<ICollaborationAdapter>();

            transport = CollaborationServiceContainer.Resolve<IActiveTransport>();
        }
        public CollaborativeEditingController(
            IActionService actionService,
            ICollaborationAdapter adapter,
            IActiveTransport transport)
        {
            fileLocation = HostingEnvironment.MapPath("~/App_Data");
            this.actionService = actionService;
            this.adapter = adapter;
            this.transport = transport;
        }

        [HttpPost]
        [Route("ImportFile")]
        public async Task<HttpResponseMessage> ImportFile(FileInfo param)
        {
            try
            {
                DocumentContent content = new DocumentContent();

                EJ2WordDocument document = GetSourceDocument();

                List<CollaborationAction> collaborationActions = await actionService.GetPendingOperationsAsync( param.roomName,  0, -1);

                List<ActionInfo> actions = collaborationActions.Select(x => (ActionInfo)adapter.MapGenericToControlAction(x)).ToList();

                if (actions != null && actions.Count > 0)
                {
                    document.UpdateActions(actions);
                }

                string sfdt = JsonConvert.SerializeObject(document);

                content.version = 0;
                content.sfdt = sfdt;

                document.Dispose();

                return Request.CreateResponse(HttpStatusCode.OK, content);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse( System.Net.HttpStatusCode.InternalServerError, ex);
            }
        }



        [HttpPost]
        [Route("UpdateAction")]
        public async Task<Syncfusion.EJ2.DocumentEditor.ActionInfo> UpdateAction(Syncfusion.EJ2.DocumentEditor.ActionInfo param)
        {
            // Convert DocumentEditor ActionInfo to CollaborationAction
            CollaborationAction collaborationAction = (CollaborationAction)adapter.MapControlToGenericAction(param);
            // Process through common package
            CollaborationAction modifiedAction = await actionService.AddOperationAsync(collaborationAction, adapter);
            // Convert back to DocumentEditor ActionInfo
            var documentAction = (Syncfusion.EJ2.DocumentEditor.ActionInfo)adapter.MapGenericToControlAction(modifiedAction);           
            await transport.SendToGroupAsync(param.RoomName, "action", documentAction);
            return documentAction;

        }

        [HttpPost]
        [Route("GetActionsFromServer")]       
        public async Task<string> GetActionsFromServer(Syncfusion.EJ2.DocumentEditor.ActionInfo param)
        {
            try
            {
                // Initialize necessary variables from the parameters and helper class
                string roomName = param.RoomName;
                int lastSyncedVersion = param.Version;
                int clientVersion = param.Version;

                // Retrieve the database connection
                // IDatabase database = _redisConnection.GetDatabase();

                // Fetch actions that are effective and pending based on the last synced version
                List<CollaborationAction> collaborationActions = await actionService.GetEffectivePendingVersionAsync(roomName, lastSyncedVersion);


                List<Syncfusion.EJ2.DocumentEditor.ActionInfo> actions = collaborationActions.Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)adapter.MapGenericToControlAction(x)).ToList();

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
        internal static EJ2WordDocument GetSourceDocument()
        {
            string path = HostingEnvironment.MapPath("~/App_Data/Giant Panda.docx");

            string extension = Path.GetExtension(path);

            Stream stream = File.Open(
                path,
                FileMode.Open,
                FileAccess.Read,
                FileShare.Read);

            EJ2WordDocument document =
                EJ2WordDocument.Load(
                    stream,
                    GetFormatType(extension));

            stream.Dispose();

            return document;
        }


        internal static Syncfusion.EJ2.DocumentEditor.FormatType GetFormatType(string format)
        {
            if (string.IsNullOrEmpty(format))
                throw new NotSupportedException("EJ2 DocumentEditor does not support this file format.");
            switch (format.ToLower())
            {
                case ".dotx":
                case ".docx":
                case ".docm":
                case ".dotm":
                    return Syncfusion.EJ2.DocumentEditor.FormatType.Docx;
                case ".dot":
                case ".doc":
                    return Syncfusion.EJ2.DocumentEditor.FormatType.Doc;
                case ".rtf":
                    return Syncfusion.EJ2.DocumentEditor.FormatType.Rtf;
                case ".txt":
                    return Syncfusion.EJ2.DocumentEditor.FormatType.Txt;
                case ".xml":
                    return Syncfusion.EJ2.DocumentEditor.FormatType.WordML;
                case ".html":
                    return Syncfusion.EJ2.DocumentEditor.FormatType.Html;
                default:
                    throw new NotSupportedException("EJ2 DocumentEditor does not support this file format.");
            }
        }
    }

```

N> [View sample in GitHub](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collaborative-Editing/tree/master/Server%20side%20with%20distributed%20cache/).