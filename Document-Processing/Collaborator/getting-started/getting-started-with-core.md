# Getting Started with ASP.NET Core Collaboration Server

This walk\-through creates a collaborative Document Editor backed by the ASP.NET Core Collaboration Server (SignalR transport, the default). It uses the Common Collaborator services on the server and the shared @syncfusion/ej2\-collaborator client on the browser.

The walk\-through uses the **DOCX Editor** as the reference editor component. The same pattern applies to the **PDF Viewer** and the **Spreadsheet** only the control\-specific adapter class changes.

# Client Side

## Step 1 — Install the client packages

In your front\-end project:
{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2\-documenteditor
npm install @syncfusion/ej2\-collaborator 

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

} from '@syncfusion/ej2\-documenteditor';


import {

    ICollaborationProvider,

    ICollaborationActionData

} from '@syncfusion/ej2\-collaborator';


export class DocumentEditorAdapter implements ICollaborationProvider {


    constructor(

        private container: DocumentEditorContainer,

        private serviceUrl: string,

    ) { }


  // Fetch the document from the product's REST API and return the room name. 

    public async loadFromServer(fileName: string): Promise\<string\> {

        const roomName: string \= this.getRoomName(fileName);

        const response: Response \= await fetch(

            this.serviceUrl \+ 'api/CollaborativeEditing/ImportFile',

            {

                method: 'POST',

                headers: { 'Content\-Type': 'application/json' },

                body: JSON.stringify({ fileName, roomName })

            }

        );

        if (!response.ok) {

            throw new Error('Failed to load document');

        }

        const responseText: string \= await response.text();

        await this.open(responseText, roomName);

        return roomName;

    }


   // Seed the editor and bridge local edits to the editor's sender. 

    public async open(responseText: string, roomName: string): Promise\<void\> {

        const data: any \= JSON.parse(responseText);

        this.container?.documentEditor.collaborativeEditingHandlerModule

            ?.updateRoomInfo(roomName, data.version, this.serviceUrl \+ 'api/CollaborativeEditing/');

        this.container.documentEditor.open(data.sfdt);

        this.container.contentChange \= (args: any) \=\> {

            this.container.documentEditor.collaborativeEditingHandlerModule

                ?.sendActionToServer(args.operations as Operation\[]);

        };

    }


    // The only ICollaborationProvider method — applied for every remote action. 

    public applyRemoteAction(action: string, data: ICollaborationActionData): void {

        this.container.documentEditor.collaborativeEditingHandlerModule

            ?.applyRemoteAction(action, data.payload);

    }


    private getRoomName(fileName: string): string {

        const urlParams: URLSearchParams \= new URLSearchParams(window.location.search);

        let roomId: string | null \= urlParams.get('id');


        if (!roomId) {

            roomId \= Math.random().toString(32).slice(2);

            window.history.replaceState({}, '', '?id\=' \+ roomId);

        }

        return roomId;

    }

}
```

## Step 3 — Client Wiring (app.ts)

```ts

import { DocumentEditorContainer, DocumentEditor, Toolbar, CollaborativeEditingHandler }

    from '@syncfusion/ej2\-documenteditor';

import { CollaborationClient, UserInfo } from '@syncfusion/ej2\-collaborator';

import { DocumentEditorAdapter } from '../collaboration/DocumentEditorAdapter';

import { TitleBar } from './title\-bar';


DocumentEditor.Inject(CollaborativeEditingHandler);

DocumentEditorContainer.Inject(Toolbar);


const serviceUrl: string \= 'http://localhost:62870/';


const documenteditor: DocumentEditorContainer \= new DocumentEditorContainer({

    enableToolbar: true,

    height: '590px',

    currentUser: currentUser,

    serviceUrl: serviceUrl \+ 'api/documenteditor'   // product REST API (open/save SFDT)

});

documenteditor.appendTo('\#DocumentEditor');


documenteditor.documentEditor.enableCollaborativeEditing \= true;


const titleBar: TitleBar \= new TitleBar(

    document.getElementById('documenteditor_titlebar') as HTMLElement,

    documenteditor.documentEditor,

    true

);

titleBar.updateDocumentTitle();


const adapter: DocumentEditorAdapter \= new DocumentEditorAdapter(documenteditor, serviceUrl);


const client: CollaborationClient \= new CollaborationClient(adapter, {
    
    serviceUrl: "http://localhost:62870",

    connectionType: "signalr",                      // default

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

    const roomName: string \= await adapter.loadFromServer("Giant Panda.docx");

    await client.joinRoomAsync(roomName);

})();

```
## Step 4 — Serve the client

Build and serve the front\-end application so the page is reachable at, for example, [http://localhost:4000](http://localhost:4000).

# Integrate Collaboration Server

## Step 5 — Install the NuGet packages

In your ASP.NET Core project, add the Collaboration Server and the Document Editor server\-side helper

dotnet add package Syncfusion.Collaborator.Server

dotnet add package [Syncfusion.EJ2.WordEditor.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Core).


## Step 6 — Configure Redis

Add the connection string in appsettings.json
```C#

{

  "ConnectionStrings": {

    "Redis": "<Provide your redis connection string>"

  }

}
```
**Step 7 — Register the Collaboration Server**

Register the Collaboration Server and configure the Redis connection string during application startup.
```C#
using Syncfusion.Collaboration.Core.Extensions;


var builder = WebApplication.CreateBuilder(args);
..
..
builder.Services.AddCollaborationServer(options =>

{

    options.ConnectionString =

        builder.Configuration.GetConnectionString("Redis")

        ?? "localhost:6379";

    // ConnectionType = ConnectionType.SignalR is the default. Switch to WebSocket to use /ws.

});


builder.Services.AddSingleton<ICollaborationAdapter, DocumentEditorAdapter>();


builder.Services.AddControllers();


var app = builder.Build();


app.UseStaticFiles();

app.UseRouting();

app.MapControllers();

app.MapCollaborationServer();  // maps /collaborationhub


app.Run();
```
By default, the ASP.NET Core Collaboration Server uses SignalR. To use WebSocket transport, configure ConnectionType as WebSocket and enable WebSocket support in the application pipeline and  and call app.UseWebSockets(); before MapCollaborationServer()

## Step 8 — Add the Document Editor adapter

DocumentEditorAdapter is the control\-specific translator on the server side. PDF Viewer and Spreadsheet applications provide their own adapter implementation, but the overall structure remains the same.

```C#
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using EJ2DocumentEditorServer.Controllers;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using Syncfusion.Collaboration.Core.Interfaces;
using Syncfusion.Collaboration.Core.Models;
using Syncfusion.Collaboration.Core.Services;
using Syncfusion.EJ2.DocumentEditor;

namespace EJ2DocumentEditorServer.Adapters;

public class DocumentEditorCollaborationAdapter : ICollaborationAdapter
{
    private readonly IActionService actionService;
    private readonly IBackgroundTaskQueue saveTaskQueue;
    static string fileLocation;
        private readonly IWebHostEnvironment _hostingEnvironment;
    public DocumentEditorCollaborationAdapter(IWebHostEnvironment hostingEnvironment, IBackgroundTaskQueue saveTaskQueue)
    { _hostingEnvironment = hostingEnvironment;
            fileLocation = _hostingEnvironment.WebRootPath;
        this.saveTaskQueue = saveTaskQueue;
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


    public void TransformOperations(List<CollaborationAction> actions)
    {
        var documentActions = actions.Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)MapGenericToControlAction(x)).ToList();

        documentActions.Where(x => !x.IsTransformed).ToList().ForEach(x => CollaborativeEditingHandler.TransformOperation(x, documentActions));
    }

    public async Task SaveOperationsAsync(List<CollaborationAction> actions, string roomName, bool partialSave)
    {
        var documentActions = actions.Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)MapGenericToControlAction(x)).ToList();

        var message = new SaveRequest
        {
            Actions = actions,
            PartialSave = partialSave,
            RoomName = roomName
        };

        await saveTaskQueue.QueueBackgroundWorkItemAsync(message);


    }
    public async Task ProcessSaveRequestAsync(SaveRequest request, CancellationToken ct)
    {
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

            SaveDocument(stream, "Getting Started.docx");

            stream.Close();
        }

        document.Dispose();

        await actionService.ClearRecordsAsync(request.RoomName, request.PartialSave);
    }

    //Document is store in file stream, We can modify the code to store the document to any location based on your requirment.
    private void SaveDocument(Stream document, string fileName)
    {
        string filePath;
        if (Path.IsPathRooted(fileName))
        {
            filePath = fileName;
        }
        else
        {
            filePath = Path.Combine(fileLocation, fileName);
        }

        // Ensure target directory exists
        var dir = Path.GetDirectoryName(filePath);
        if (!string.IsNullOrEmpty(dir) && !Directory.Exists(dir))
        {
            Directory.CreateDirectory(dir);
        }

        using (FileStream file = new FileStream(filePath, FileMode.Create, FileAccess.Write))
        {
            document.Position = 0; // Ensure the stream is at the start
            document.CopyTo(file);
        }
    }

}


```


## Step 9 — Add the collaborative editing controller (web service methods)

CollaborativeEditingController is the HTTP bridge between the client control and the Common Collaborator. Every EJ2 content editor component that supports collaboration (Document Editor, PDF Viewer, Spreadsheet) exposes the same three web service methods on its collaboration controller. Each method is required:
|**Web service method**|**Why it is needed**|
|:---|:---|
|ImportFile|Called by a joining client to load the source document and replay any pending actions. Returns the document content and current server version.|
|UpdateAction|Called by an editing client to send a new collaboration action. The server persists and transforms the action, then broadcasts it to everyone in the same room.|
|GetActionsFromServer|Called by a joining client to fetch actions newer than its last\-known version, so it can catch up to the current document state.|

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
namespace EJ2DocumentEditorServer.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CollaborativeEditingController : ControllerBase
{
    private static string fileLocation;
    private readonly IWebHostEnvironment _hostingEnvironment;
    private readonly IActionService actionService;
    private readonly ICollaborationAdapter adapter;
    private readonly IActiveTransport _transport;

    // Constructor for the CollaborativeEditingController
    public CollaborativeEditingController(IWebHostEnvironment hostingEnvironment,
        IConfiguration config, IActionService actionService, ICollaborationAdapter adapter, IActiveTransport transport)
    {
        _hostingEnvironment = hostingEnvironment;
        fileLocation = _hostingEnvironment.WebRootPath;
        this.adapter = adapter;
        this.actionService = actionService;
        _transport = transport;
    }

    //Import document from wwwroot folder in web server.
    [HttpPost]
    [Route("ImportFile")]
    [EnableCors("AllowAllOrigins")]
    public async Task<string> ImportFile([FromBody] FileInfo param)
    {
        try
        {
            // Create a new instance of DocumentContent to hold the document data
            DocumentContent content = new DocumentContent();

            Syncfusion.EJ2.DocumentEditor.WordDocument document = GetSourceDocument();
            // Get the list of pending operations for the document
           List<CollaborationAction> collaborationActions = await actionService.GetPendingOperationsAsync(param.roomName, 0, -1);
          
            List<Syncfusion.EJ2.DocumentEditor.ActionInfo> actions =
                collaborationActions.Select(x => (Syncfusion.EJ2.DocumentEditor.ActionInfo)adapter.MapGenericToControlAction(x)).ToList();

            if (actions != null && actions.Count > 0)
            {
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
        catch
        {
            return null;
        }
    }

    [HttpPost]
    [Route("UpdateAction")]
    [EnableCors("AllowAllOrigins")]
    public async Task<Syncfusion.EJ2.DocumentEditor.ActionInfo> UpdateAction(Syncfusion.EJ2.DocumentEditor.ActionInfo param)
    {
        // Convert DocumentEditor ActionInfo to CollaborationAction
        CollaborationAction collaborationAction = (CollaborationAction)adapter.MapControlToGenericAction(param);
        // Process through common package
         CollaborationAction modifiedAction = await actionService.AddOperationAsync(collaborationAction, adapter);
        // Convert back to DocumentEditor ActionInfo
        var documentAction = (Syncfusion.EJ2.DocumentEditor.ActionInfo)adapter.MapGenericToControlAction(modifiedAction);    

        await _transport.SendToGroupAsync(param.RoomName, "action", documentAction);
        return documentAction;

    }
   
    [HttpPost]
    [Route("GetActionsFromServer")]
    [EnableCors("AllowAllOrigins")]
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

    internal static Syncfusion.EJ2.DocumentEditor.WordDocument GetSourceDocument()
    {
        string path = fileLocation + "\\Giant Panda.docx";
        int index = path.LastIndexOf('.');
        string type = index > -1 && index < path.Length - 1 ?
          path.Substring(index) : ".docx";
        Stream stream = System.IO.File.Open(path, FileMode.Open, FileAccess.Read, FileShare.Read);
        Syncfusion.EJ2.DocumentEditor.WordDocument document = Syncfusion.EJ2.DocumentEditor.WordDocument.Load(stream, FormatType.Docx);
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
        public string fileName
        {
            get;
            set;
        }
        public string roomName
        {
            get;
            set;
        }
    }
}
```
## Step 10 - Run the Application

After completing the client and server setup:

1. Start the Redis server.
2. Run the ASP.NET Core application.

```bash
dotnet run
```

3. Run the client application.

```bash
npm start
```

4. Open the application in multiple browser windows or tabs.

Example:

```text
http://localhost:4000/?name=User1
```

```text
http://localhost:4000/?name=User2
```

5. Open the same document and make changes in one window.

### Result

- Changes are synchronized automatically across all connected users.
- User join and leave events are reflected in real time.
- Editing operations are stored in Redis and processed by the Collaboration Server.
- Document changes are automatically saved when the configured `SaveThreshold` is reached.
