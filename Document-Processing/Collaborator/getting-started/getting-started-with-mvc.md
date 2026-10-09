---
layout: post
title: Getting Started with ASP.NET MVC Collaboration Server | Syncfusion
description: Learn how to create a collaborative DOCX Editor in an ASP.NET MVC application using the Collaboration Server with WebSocket transport and Redis storage.
control: Collaborator
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---
# Getting Started with ASP.NET MVC Collaboration Server

This walk-through demonstrates how to create a collaborative DOCX Editor application using the ASP.NET MVC Collaboration Server. It uses the common collaboration services on the server and the shared `@syncfusion/ej2-collaborator` client package in the browser.

This guide uses **DOCX Editor** as the reference component. The same collaboration infrastructure can be used with PDF Viewer and Spreadsheet, with only the control-specific adapter implementation changing for each component.

The ASP.NET MVC Collaboration Server uses **WebSocket** transport for real-time communication and is hosted through an OWIN-based startup configuration. SignalR is not required.

## Client Side

### Step 1 — Install the client packages

In your front\-end project:
{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-collaborator 

{% endhighlight %}
{% endtabs %}

### Step 2 - Reference Adapter (DocumentEditorAdapter.ts)

The adapter acts as a bridge between the Collaboration Client and the EJ2 Document Editor. It implements the `ICollaborationProvider` interface and is responsible for applying remote collaboration actions to the editor.

This guide uses the Document Editor adapter as an example. The same integration pattern can be used for PDF Viewer and Spreadsheet by implementing a control-specific adapter that conforms to the `ICollaborationProvider` interface.

 ```ts
import {
    DocumentEditor,
    DocumentEditorContainer,
    Operation
} from "@syncfusion/ej2-documenteditor";

import { ICollaborationProvider, ICollaborationActionData } from "@syncfusion/ej2-collaborator";

export class DocumentEditorAdapter implements ICollaborationProvider {

    constructor(
        private container: DocumentEditorContainer,
        private serviceUrl: string,
    ) { }
 // Fetch the document from the product's REST API and return the room name. 
    public async loadFromServer(fileName: string): Promise<string> {
        const roomName: string = this.getRoomName(fileName);
        const response: Response = await fetch(
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
        const responseText: string = await response.text();
        await this.open(responseText, roomName);
        return roomName;
    }
   // Seed the editor and bridge local edits to the editor's sender. 
    public async open(responseText: string, roomName: string): Promise<void> {
        const data: any = JSON.parse(responseText);
        this.container?.documentEditor.collaborativeEditingHandlerModule?.updateRoomInfo(roomName, data.version, this.serviceUrl + 'api/CollaborativeEditing/');
        this.container.documentEditor.open(data.sfdt);
        this.container.contentChange = (args: any) => {
            console.log('[SENT]', new Date().toISOString());
            this.container.documentEditor.collaborativeEditingHandlerModule?.sendActionToServer(args.operations as Operation[]);
        }
    }
    // The only ICollaborationProvider method — applied for every remote action. 
    public applyRemoteAction(action: string, data: ICollaborationActionData): void {

        this.container.documentEditor.collaborativeEditingHandlerModule?.applyRemoteAction(action, data.payload);
    }
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

### Step 3 — DOCX Editor initialization and collaborator client wiring

```ts

// Import the required Document Editor and collaboration client APIs.
import { DocumentEditorContainer, DocumentEditor, Toolbar, CollaborativeEditingHandler }from '@syncfusion/ej2-documenteditor';
import { CollaborationClient, UserInfo } from '@syncfusion/ej2\-collaborator';
import { DocumentEditorAdapter } from '../collaboration/DocumentEditorAdapter';
import { TitleBar } from './title-bar';

// Register the Document Editor services used by the sample.
DocumentEditor.Inject(CollaborativeEditingHandler);
DocumentEditorContainer.Inject(Toolbar);

// Set the backend service URL used by the adapter and editor.
const serviceUrl: string = 'http://localhost:62870/';

// Create the Document Editor container and enable collaborative editing.
const documenteditor: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true,
    height: '590px',
    currentUser: currentUser,
    serviceUrl: serviceUrl + 'api/documenteditor'   // product REST API (open/save SFDT)
});
documenteditor.appendTo('#DocumentEditor');
documenteditor.documentEditor.enableCollaborativeEditing = true;

// Create the adapter and collaboration client.
const adapter: DocumentEditorAdapter = new DocumentEditorAdapter(documenteditor, serviceUrl);
const client: CollaborationClient = new CollaborationClient(adapter, {    
    serviceUrl: "http://localhost:62870",
    connectionType: "websocket",                   
    currentUser: currentUser,
    onUserJoined: (user: UserInfo) => {
        console.log("User Joined", user);
       // titleBar.addUser(user);
    },
    onUserLeft: (user: UserInfo) => {
        console.log("User Left", user);
        //titleBar.removeUser(user);
    }
});

// Load the document, then join the collaboration room.
(async () => {
    const roomName: string = await adapter.loadFromServer("Giant Panda.docx");
    await client.joinRoomAsync(roomName);
})();

```

### Step 4 — Run the client

Build and serve the front\-end application so the page is reachable at, for example, http://localhost:4000

## Integrate Collaboration Server

### Step 5 — Install the NuGet packages

In your ASP.NET MVC 5 project, install the MVC Collaboration Server package and the DOCX Editor server-side helper package.

```powershell
Install-Package Syncfusion.Collaborator.Server.AspNet.Mvc

Install-Package Syncfusion.EJ2.WordEditor.AspNet.Mvc
```

### Step 6 — Register the Collaboration Server

Open Global.asax.cs and register the Collaboration Server services during application startup. Configure the Redis connection and select WebSocket as the transport type. For ASP.NET MVC, the WebSocket transport is selected by setting CollaborationConnectionType.WebSocket. The adapter is registered through ServiceCollectionExtensions.RegisterAdapter(...).

```C#
using Syncfusion.Collaboration.Core.Extensions;
using Syncfusion.Collaboration.Core.Interfaces;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using WebApplication1.Adapter;

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
            ServiceCollectionExtensions.AddCollaborationServer(options =>
            {
                options.ConnectionString =
                    System.Configuration.ConfigurationManager
                        .ConnectionStrings["Redis"]?.ConnectionString
                    ?? "localhost:6379";
                options.ConnectionType = CollaborationConnectionType.WebSocket;
            });
        }
    }
}
```
### Step 7 — Mount the WebSocket endpoint (Startup.cs)

Add an OWIN startup class to expose the Collaboration Server WebSocket endpoint. Incoming WebSocket requests are forwarded to the Collaboration Server transport handler.

```C#
[assembly: OwinStartup(typeof(WebApplication1.Startup))]
namespace WebApplication1
{
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
                    httpContext.AcceptWebSocketRequest(
     ServiceCollectionExtensions.MapCollaborationServer());
                    return Task.CompletedTask;
                });
            });
        }       
    }
}
```

### Step 8 — Add the DOCX Editor adapter

The collaboration adapter acts as a bridge between control\-specific collaboration actions and the Common Collaborator data model. Each collaborative component implements its own adapter while sharing the same server infrastructure.
```C#

using Newtonsoft.Json;
using Syncfusion.Collaboration.Core.Interfaces;
using Syncfusion.Collaboration.Core.Models;
using Syncfusion.EJ2.DocumentEditor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace WebApplication1.Adapter
{
    // Translates between Document Editor actions and the common collaboration model.
    public class DocumentEditorCollaborationAdapter : ICollaborationAdapter
    {
        // Converts a control-specific action into a generic collaboration action.
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

        // Converts a generic collaboration action back to a Document Editor action.
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

        // Saves incoming changes to the server-side store.
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


        // Replays untransformed operations so concurrent edits stay in sync.
        public void TransformOperations(List<CollaborationAction> actions)
        {
            var documentActions = actions.Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)MapGenericToControlAction(x)).ToList();

            documentActions.Where(x => !x.IsTransformed).ToList().ForEach(x => CollaborativeEditingHandler.TransformOperation(x, documentActions));

        }
    }
}
```

### Step 9 — Add the Collaborative Editing Controller (Web Service Methods)

`CollaborativeEditingController` acts as the HTTP bridge between the client control and the Common Collaborator. Every EJ2 content editor component that supports collaboration (DOCX Editor, PDF Viewer, and Spreadsheet) exposes the same three web service methods through its collaboration controller. Each method serves a specific purpose:

| Web Service Method | Purpose |
| --- | --- |
| ImportFile | Loads the source document, applies any pending collaboration actions, and returns the latest document state and server version to a newly connected client. |
| UpdateAction | Receives editing actions from connected clients, performs operational transformation, persists the action, and broadcasts the updated action to other participants. |
| GetActionsFromServer | Retrieves collaboration actions created after the client's last synchronized version, allowing the client to catch up with the latest document state. |


```C#

using Newtonsoft.Json;
using Syncfusion.Collaboration.Core.Extensions;
using Syncfusion.Collaboration.Core.Interfaces;
using Syncfusion.Collaboration.Core.Models;
using Syncfusion.Collaboration.Core.Services;
using Syncfusion.Collaboration.Core.Transports;
using Syncfusion.EJ2.DocumentEditor;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Cors;
using EJ2WordDocument = Syncfusion.EJ2.DocumentEditor.WordDocument;
namespace WebApplication1.Controllers
{
     [RoutePrefix("api/CollaborativeEditing")]
    public class CollaborativeEditingController : ApiController
    {
        // Stores the source document location under App_Data.
        private static string fileLocation;

        // Handles collaboration operations for the current room.
        private readonly IActionService actionService;
        // Converts between control actions and common collaboration actions.
        private readonly ICollaborationAdapter adapter;
        // Broadcasts updates to all connected clients in the room.
        private readonly IActiveTransport transport;

        // Resolves shared services from the collaboration container.
        public CollaborativeEditingController()
        {
            fileLocation = HostingEnvironment.MapPath("~/App_Data");

            actionService =
                CollaborationServiceContainer.Resolve<IActionService>();

            adapter =
                CollaborationServiceContainer.Resolve<ICollaborationAdapter>();

            transport =
                CollaborationServiceContainer.Resolve<IActiveTransport>();
        }

        // Uses dependency injection when the controller is created by the framework.
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

        // Loads the document and applies any pending collaboration changes.
        [HttpPost]
        [Route("ImportFile")]
        public async Task<HttpResponseMessage> ImportFile(FileInfo param)
        {
            try
            {
                DocumentContent content = new DocumentContent();

                EJ2WordDocument document = GetSourceDocument();

                List<CollaborationAction> collaborationActions =
                    await actionService.GetPendingOperationsAsync(
                        param.roomName,
                        0,
                        -1);

                List<ActionInfo> actions =
                    collaborationActions
                    .Select(x => (ActionInfo)adapter.MapGenericToControlAction(x))
                    .ToList();

                if (actions != null && actions.Count > 0)
                {
                    document.UpdateActions(actions);
                }

                string sfdt = JsonConvert.SerializeObject(document);

                content.version = 0;
                content.sfdt = sfdt;

                document.Dispose();

                return Request.CreateResponse(
    HttpStatusCode.OK,
    content);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(
                    System.Net.HttpStatusCode.InternalServerError,
                    ex);
            }
        }



                // Accepts an editing action, stores it, and sends it to other participants.
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
            //    await _hubContext.Clients.Group(param.RoomName).SendAsync("dataReceived", "action", documentAction);

            await transport.SendToGroupAsync(param.RoomName, "action", documentAction);
            return documentAction;

        }

        // Returns actions that the client has not yet synchronized.
        [HttpPost]
        [Route("GetActionsFromServer")]       
        public async Task<string> GetActionsFromServer(Syncfusion.EJ2.DocumentEditor.ActionInfo param)
        {
            try
            {
                // Initialize necessary variables from the parameters and helper class
                //int saveThreshold = CollaborativeEditingHelper.SaveThreshold;
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

        // Holds the serialized document payload and server version.
        public class DocumentContent
        {
            public int version { get; set; }

            public string sfdt { get; set; }
        }

        // Contains the file name and room name provided by the client.
        public class FileInfo
        {
            public string fileName { get; set; }

            public string roomName { get; set; }
        }

        // Opens the source document from the application data folder.
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
    }
}

```

### Step 10 — Run the application

After completing the client and server setup:

1. Start the Redis server.

1. Run the ASP.NET MVC application.

1. Run the client application: npm start

1. Open the application in multiple browser windows or tabs.

1. Open the same document and make changes in one window.

**Result**

- Changes are synchronized automatically across all connected users. 

- Users joining an existing collaboration session receive the latest document state. 

- Collaboration operations are stored and managed by the ASP.NET MVC Collaboration Server. 

- Real\-time updates are delivered through WebSocket transport.
