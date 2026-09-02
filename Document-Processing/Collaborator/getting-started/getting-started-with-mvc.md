# Getting Started with ASP.NET MVC Collaboration Server

This walk\-through creates a collaborative Document Editor backed by the ASP.NET MVC 5 Collaboration Server. It uses the same Common Collaborator services on the server and the shared @syncfusion/ej2\-collaborator client on the browser.

The walk\-through uses the **DOCX Editor** as the reference editor component. The same pattern applies to the **PDF Viewer** and the **Spreadsheet** — only the control\-specific adapter class changes.

The ASP.NET MVC server uses the **WebSocket** transport, mounted through an OWIN startup at /ws. No SignalR is required.

# Client Side

## Step 1 — Install the client packages

In your front\-end project:
{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-collaborator 

{% endhighlight %}
{% endtabs %}

@microsoft/signalr is installed automatically as a transitive dependency.


## Step 2 — Reference Adapter (DocumentEditorAdapter.ts)

The control\-specific translator on the client side. It implements ICollaborationProvider for the EJ2 Document Editor. PDF Viewer / Spreadsheet teams replace this with their own, but the shape is identical. 
 ```ts
import {

    DocumentEditor,

    DocumentEditorContainer,

    Operation

} from '@syncfusion/ej2-documenteditor';


import {

    ICollaborationProvider,

    ICollaborationActionData

} from '@syncfusion/ej2-collaborator';


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

        this.container?.documentEditor.collaborativeEditingHandlerModule

            ?.updateRoomInfo(roomName, data.version, this.serviceUrl + 'api/CollaborativeEditing/');

        this.container.documentEditor.open(data.sfdt);

        this.container.contentChange = (args: any) => {

            this.container.documentEditor.collaborativeEditingHandlerModule

                ?.sendActionToServer(args.operations as Operation[]);

        };

    }


    // The only ICollaborationProvider method — applied for every remote action. 

    public applyRemoteAction(action: string, data: ICollaborationActionData): void {

        this.container.documentEditor.collaborativeEditingHandlerModule

            ?.applyRemoteAction(action, data.payload);

    }


    private getRoomName(fileName: string): string {

        const urlParams: URLSearchParams = new URLSearchParams(window.location.search);

        let roomId: string | null = urlParams.get('id');


        if (!roomId) {

            roomId = Math.random().toString(32).slice(2);

            window.history.replaceState({}, '', '?id=' + roomId);

        }

        return roomId;

    }

}
```

## Step 3 — Client Wiring (app.ts)

```ts

import { DocumentEditorContainer, DocumentEditor, Toolbar, CollaborativeEditingHandler }

    from '@syncfusion/ej2-documenteditor';

import { CollaborationClient, UserInfo } from '@syncfusion/ej2\-collaborator';

import { DocumentEditorAdapter } from '../collaboration/DocumentEditorAdapter';

import { TitleBar } from './title-bar';


DocumentEditor.Inject(CollaborativeEditingHandler);

DocumentEditorContainer.Inject(Toolbar);


const serviceUrl: string = 'http://localhost:62870/';


const documenteditor: DocumentEditorContainer = new DocumentEditorContainer({

    enableToolbar: true,

    height: '590px',

    currentUser: currentUser,

    serviceUrl: serviceUrl + 'api/documenteditor'   // product REST API (open/save SFDT)

});

documenteditor.appendTo('#DocumentEditor');


documenteditor.documentEditor.enableCollaborativeEditing = true;


const titleBar: TitleBar = new TitleBar(

    document.getElementById('documenteditor_titlebar') as HTMLElement,

    documenteditor.documentEditor,

    true

);

titleBar.updateDocumentTitle();


const adapter: DocumentEditorAdapter = new DocumentEditorAdapter(documenteditor, serviceUrl);


const client: CollaborationClient = new CollaborationClient(adapter, {
    
    serviceUrl: "http://localhost:62870",

    connectionType: "websocket",                     

    currentUser: currentUser,

    onUserJoined: (user: UserInfo) => {

        console.log("User Joined", user);

        titleBar.addUser(user);

    },

    onUserLeft: (user: UserInfo) => {

        console.log("User Left", user);

        titleBar.removeUser(user);

    }

});


(async () => {

    const roomName: string = await adapter.loadFromServer("Giant Panda.docx");

    await client.joinRoomAsync(roomName);

})();

```
## Step 4 — Serve the client

Build and serve the front\-end application so the page is reachable at, for example, http://localhost:4000

## Integrate Collaboration Server

### Step 5 — Install the NuGet packages

In your ASP.NET MVC 5 project, add the MVC Collaboration Server and the Document Editor server\-side helper

Install\-Package Syncfusion.Collaborator.Server.MVC

Install\-Package Syncfusion.EJ2.WordEditor.AspNet.MVC

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

### Step 7 — Mount the WebSocket endpoint (Startup.cs)

Add an OWIN startup class to expose the Collaboration Server WebSocket endpoint. Incoming WebSocket requests are forwarded to the Collaboration Server transport handler.
```C#

using Microsoft.Owin;
using Owin;
using Syncfusion.Collaboration.Core.Extensions;
using System.Threading.Tasks;
using System.Web;

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

### Step 8 — Add the Document Editor adapter

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
    public class DocumentEditorCollaborationAdapter : ICollaborationAdapter
    {
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

        public Task ProcessSaveRequestAsync(SaveRequest request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task SaveOperationsAsync(List<CollaborationAction> actions, string roomName, bool partialSave)
        {
            throw new NotImplementedException();
        }

        public void TransformOperations(List<CollaborationAction> actions)
        {
            var documentActions = actions.Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)MapGenericToControlAction(x)).ToList();

            documentActions.Where(x => !x.IsTransformed).ToList().ForEach(x => CollaborativeEditingHandler.TransformOperation(x, documentActions));

        }
    }
}
```

### Step 9 — Add the collaborative editing controller (web service methods)

CollaborativeEditingController is the HTTP bridge between the client control and the Common Collaborator. Every EJ2 content editor component that supports collaboration (Document Editor, PDF Viewer, Spreadsheet) exposes the same three web service methods on its collaboration controller. Each method is required:
|**Web service method**|**Why it is needed**|
|:---|:---|
|ImportFile|Loads the source document and applies any pending collaboration actions before sending the latest document state to a newly connected client. Returns the document content and current server version.|
|UpdateAction|Receives editing actions from connected clients, processes operational transformation, persists the action, and broadcasts the updated action to other participants.|
|GetActionsFromServer|Retrieves collaboration actions created after the client's last synchronized version so the client can catch up with the latest document state.|


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
        private static string fileLocation;

        private readonly IActionService actionService;
        private readonly ICollaborationAdapter adapter;
        private readonly IActiveTransport transport;
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
