---
layout: post
title: Collaborative Editing in React PDF Viewer with ASP.NET Core | Syncfusion
description: Learn how to implement real-time collaborative editing in the Syncfusion React PDF Viewer using the ASP.NET Core Collaboration Server with Redis.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in React PDF Viewer with ASP.NET Core

This topic explains how to connect the React PDF Viewer to the ASP.NET Core Collaboration Server. The server provides SignalR communication, Redis operation storage, room management, synchronization, and save processing.

Use this server when the PDF Viewer sample or your application is hosted on ASP.NET Core. To host the PDF Viewer with the Node.js Collaboration Server, refer to the [Collaborative editing with Node.js](./using-redis-cache-nodejs) topic. Both servers expose the same REST routes and use the same client-side adapter, so only the `connectionType` option and the server project differ.

## Prerequisites

- A React PDF Viewer application.
- The .NET SDK 6.0 or later to run the ASP.NET Core Collaboration Server.
- A Redis instance reachable from the server.
- Two or more browser tabs or windows for testing collaboration.

## Choose a Collaboration Server

| Option | Language | Transport | Client `connectionType` |
| --- | --- | --- | --- |
| Node.js Web Service | Node.js | WebSocket | `websocket` |
| ASP.NET Core Web Service | C# / ASP.NET Core | SignalR | `signalr` |

## Client-side integration

### Step 1: Install the client packages

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-collaborator @syncfusion/ej2-pdf @xmldom/xmldom

{% endhighlight %}
{% endtabs %}

### Step 2: Add the PDF Viewer adapter

Create `pdfViewerAdapter.ts` that implements the `ICollaborationProvider` interface. The adapter is the bridge between the Collaboration Client and the PDF Viewer. It loads the room state from the server, sends local PDF Viewer actions to the Collaboration Server, and applies remote actions through the `CollaborativeEditingHandler`.

The following code snippet demonstrates the `PdfViewerAdapter`.

{% tabs %}
{% highlight ts tabtitle="pdfViewerAdapter.ts" %}
{% raw %}
import { PdfViewer, CollaborativeEditingHandler } from '@syncfusion/ej2-react-pdfviewer';
import { ICollaborationProvider, ICollaborationActionData } from '@syncfusion/ej2-collaborator';

export class PdfViewerAdapter implements ICollaborationProvider {
    private collaborativeEditingHandler: CollaborativeEditingHandler;
    private fileName: string = '';
    public currentRoomName: string = '';
    private isDocumentLoaded: boolean = false;
    private currentUser: string = '';
    private pendingOperations: any;

    constructor(
        private viewer: PdfViewer,
        private serviceUrl: string,
        currentUser: string
    ) {
        this.currentUser = currentUser;
        this.collaborativeEditingHandler = new CollaborativeEditingHandler(viewer, currentUser);
    }

    // Loads the room state and returns the room name.
    public async loadFromServer(fileName?: string): Promise<string> {
        this.isDocumentLoaded = false;
        this.fileName = fileName || 'document.pdf';
        const roomName: string = this.getRoomName();
        this.currentRoomName = roomName;

        try {
            const response = await fetch(
                `${this.serviceUrl}api/CollaborativeEditing/ImportFile`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        roomName,
                        fileName: this.fileName,
                        currentUser: this.currentUser
                    })
                }
            );

            if (!response.ok) {
                throw new Error(`Failed to join collaboration room: ${response.statusText}`);
            }

            const responseText: string = await response.text();
            await this.open(responseText, roomName);
            return roomName;
        } catch (error) {
            console.error('[PdfViewerAdapter] Error loading from server:', error);
            throw error;
        }
    }

    // Applies the pending PDF Viewer action snapshots sent by the server.
    public async open(responseText: string, roomName: string): Promise<void> {
        try {
            const data: any = JSON.parse(responseText);
            const version = data.version || data.currentVersion || 0;

            this.collaborativeEditingHandler.updateRoomInfo(
                roomName,
                version,
                `${this.serviceUrl}api/CollaborativeEditing/`
            );

            this.pendingOperations = data.operations;
            if (data.operations && data.operations.length > 0) {
                for (const op of data.operations) {
                    this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
                }
            }

            this.isDocumentLoaded = true;
        } catch (error) {
            console.error('[PdfViewerAdapter] Error initializing document:', error);
            throw error;
        }
    }

    // Sends the local PDF Viewer actions to the Collaboration Server.
    public async sendActionToServer(operations: any[]): Promise<void> {
        try {
            if (!operations || operations.length === 0) {
                console.warn('[PdfViewerAdapter] No operations to send');
                return;
            }

            await this.collaborativeEditingHandler.sendActionToServer(operations);
        } catch (error) {
            console.error('[PdfViewerAdapter] Error sending operations:', error);
            throw error;
        }
    }

    // Applies each remote action received from the Collaboration Server.
    public applyRemoteAction(action: string, data: ICollaborationActionData): void {
        if (action === 'addUser') {
            if ((data as any).payload.length > 0) {
                ((data as any).payload as any[]).forEach((user: any) => {
                    user.image = this.getUserImage(user.currentUser);
                });
            } else {
                (data as any).payload.image = this.getUserImage((data as any).payload.currentUser);
            }
        } else if (action === 'connectionId') {
            data.payload = { payload: data.payload, image: this.getUserImage(this.currentUser) } as any;
        }
        this.collaborativeEditingHandler.applyRemoteAction(action, data.payload);
    }

    // Generates a room name from the query string, or creates a new room.
    private getRoomName(fileName?: string): string {
        if (typeof window !== 'undefined') {
            const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
            let roomId: string | null = urlParams.get('id');

            if (!roomId) {
                roomId = Math.random().toString(32).slice(2);
                window.history.replaceState({}, '', `?id=${roomId}`);
            }

            return roomId;
        }

        return Math.random().toString(32).slice(2);
    }

    private getUserImage(userName: string): string {
        const images: { [key: string]: string } = {
            RIO: 'https://ej2.syncfusion.com/demos/src/avatar/images/pic01.png',
            JOHN: 'https://ej2.syncfusion.com/demos/src/avatar/images/pic03.png',
            MAXY: 'https://ej2.syncfusion.com/demos/src/avatar/images/pic02.png',
            SHAI: 'https://ej2.syncfusion.com/demos/src/avatar/images/pic04.png'
        };
        return images[userName] || '';
    }

    public updatePendingOperations(): any {
        if (this.pendingOperations && this.pendingOperations.length > 0) {
            for (const op of this.pendingOperations) {
                this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
            }
        }
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 3: Initialize the React PDF Viewer

Create `App.jsx` with the complete React component. It enables the `enableCollaborativeEditing` property, initializes collaboration when the viewer resources are loaded, joins the room, retrieves the current PDF from `GetPDFDocument`, and sends every supported PDF Viewer action from the `documentChanged` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
  PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';
import React, { useRef, useState, useEffect } from 'react';
import { PdfViewerAdapter } from './pdfViewerAdapter';

const userList = ['RIO', 'JOHN', 'MAXY', 'SHAI', 'SRI'];
const currentUserName = userList[Math.floor(Math.random() * userList.length)];

// REPLACE THIS WITH THE SERVICE URL OF THE SERVER CURRENTLY RUNNING
const SERVICE_URL = 'http://localhost:8081/';

export default function App() {
  const viewerRef = useRef(null);
  const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);
  const [collaborationStatus, setCollaborationStatus] = useState('initializing');
  const [currentUser] = useState(currentUserName);
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [roomName, setRoomName] = useState('');

  const adapterRef = useRef(null);
  const clientRef = useRef(null);
  const roomNameRef = useRef('');

  const loadPDFBlobIntoViewer = async (pdfBlob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const arrayBuffer = reader.result;
          const uint8Array = new Uint8Array(arrayBuffer);
          if (viewerRef.current && viewerRef.current.load && typeof viewerRef.current.load === 'function') {
            viewerRef.current.load(uint8Array, '');
            resolve();
          } else {
            reject(new Error('Viewer load method not available'));
          }
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read blob'));
      reader.readAsArrayBuffer(pdfBlob);
    });
  };

  const fetchAndLoadPDFDocument = async () => {
    const queryParams = new URLSearchParams({
      roomName: roomNameRef.current || 'default'
    });

    const response = await fetch(
      `${SERVICE_URL}api/CollaborativeEditing/GetPDFDocument?${queryParams.toString()}`,
      { headers: { 'Accept': 'application/json' } }
    );

    const result = await response.json();
    if (!result.success) throw new Error(`Server error: ${result.error}`);

    const binaryString = atob(result.content);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const pdfBlob = new Blob([bytes], { type: 'application/pdf' });
    await loadPDFBlobIntoViewer(pdfBlob);
  };

  const handleResourcesLoaded = async () => {
    if (isDocumentLoaded) return;
    setIsDocumentLoaded(true);
    setCollaborationStatus('loading');
    try {
      const adapter = new PdfViewerAdapter(viewerRef.current, SERVICE_URL, currentUser);
      adapterRef.current = adapter;

      const client = new CollaborationClient(adapter, {
        serviceUrl: SERVICE_URL,
        // USE BELOW IF YOU USE THE ASP.NET CORE WEB SERVICE
        connectionType: 'signalr',
        // USE BELOW IF YOU USE THE NODE JS WEB SERVICE
        // connectionType: 'websocket',
        currentUser,
        onUserJoined: (user) => {
          const userName = user.userName || user.currentUser;
          setConnectedUsers(prev => [...new Set([...prev, userName])]);
        },
        onUserLeft: (user) => {
          const userName = user.userName || user.currentUser;
          setConnectedUsers(prev => prev.filter(u => u !== userName));
        }
      });
      clientRef.current = client;

      const roomName = await adapter.loadFromServer();
      roomNameRef.current = roomName;
      setRoomName(roomName);

      await client.joinRoomAsync(roomName);
      await fetchAndLoadPDFDocument();

      setCollaborationStatus('connected');
      setConnectedUsers([currentUser]);
    } catch (error) {
      console.error('[App] Error during collaboration initialization:', error);
      setCollaborationStatus('error');
    }
  };

  const handleDocumentChanged = (args) => {
    try {
      let operations = [];

      if (args && 'annotationId' in args) {
        operations = args.action
          ? [{ action: args.action, annotation: args.annotationId, type: 'annotation', isRedacted: args.isRedacted }]
          : [{ type: 'removeUser', currentUser }];
      }
      else if (args && 'formField' in args && !('fieldName' in args)) {
        operations = [{ action: args.action, formField: args.formField, type: 'formField' }];
      }
      else if (args && 'fieldName' in args) {
        operations = [{ action: 'formFieldUpdate', data: args, type: 'formField' }];
      }
      else if (args && 'organizePageActions' in args) {
        const actionDetails = typeof args.organizePageActions === 'string'
          ? JSON.parse(args.organizePageActions) : '';
        if (args.savedDocument === null && actionDetails.action === 'applyCancelled') {
          operations = [{ type: 'removeUser', currentUser }];
        } else if (args.savedDocument !== null && actionDetails.length > 0 && actionDetails[0].action !== 'applyCancelled') {
          operations = [{ action: 'pageOrganizerUpdate', data: args.organizePageActions, type: 'pageOrganizer' }];
        }
      }

      if (operations.length > 0 && adapterRef.current) {
        adapterRef.current.sendActionToServer(operations).catch((err) =>
          console.error('Error sending operation:', err)
        );
      }
    } catch (error) {
      console.error('[App] Error processing document change:', error);
    }
  };

  useEffect(() => {
    return () => {
      if (clientRef.current) {
        console.log('[App] Cleaning up collaboration client');
      }
    };
  }, []);

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        padding: '10px 15px',
        backgroundColor: '#f0f0f0',
        borderBottom: '1px solid #ddd',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <strong>User:</strong> {currentUser} |
          <strong> Status:</strong> <span style={{
            color: collaborationStatus === 'connected' ? '#28a745' :
              collaborationStatus === 'error' ? '#dc3545' : '#ffc107'
          }}>
            {collaborationStatus}
          </span> |
          <strong> Room:</strong> {roomName || 'N/A'}
        </div>
        <div>
          <strong>Connected Users:</strong> {connectedUsers.join(', ') || 'None'}
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden' }}>
        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          enableCollaborativeEditing={true}
          resourceUrl="https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2-pdfviewer-lib"
          resourcesLoaded={handleResourcesLoaded}
          documentChanged={handleDocumentChanged}
          style={{ height: '100%', width: '100%' }}
        >
          <Inject services={[
            Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
            BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
            FormFields, FormDesigner, PageOrganizer
          ]} />
        </PdfViewerComponent>
      </div>
    </div>
  );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

The `connectionType` option selects the transport:

- `signalr` - uses SignalR. Use this value with the ASP.NET Core Web Service.
- `websocket` - uses WebSocket. Use this value with the Node.js Web Service.

## Server-side integration

### Step 1: Create the ASP.NET Core web service project

Create an ASP.NET Core web application that hosts the Collaboration Server. The sample server project is available in the `Server/ASP.NET Core` folder of the [Collaborative Editing sample](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Collaborative%20Editing).

The project contains the following folders and files:

```text
ASP.NET Core/
├── Adapter/
│   └── PdfViewerCollaborationAdapter.cs    # Maps PDF Viewer actions to collaboration actions
├── Controllers/
│   └── CollaborativeEditingController.cs   # REST API endpoints
├── Models/
│   └── UpdateActionRequest.cs              # Strongly-typed request models
├── Services/
│   ├── IPdfStorageService.cs               # PDF storage abstraction
│   └── PdfStorageService.cs                # Local file system storage
├── Program.cs                              # Dependency injection and middleware
└── appsettings.json                        # Redis and PDF storage configuration
```

### Step 2: Install the NuGet packages

In the web service app, install the following NuGet packages:

```xml
<ItemGroup>
    <PackageReference Include="Syncfusion.Collaborator.Server.AspNet.Core" Version="35.1.37" />
    <PackageReference Include="Syncfusion.Pdf.Net.Core" Version="35.1.37" />
    <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />
    <PackageReference Include="Microsoft.AspNetCore.Mvc.NewtonsoftJson" Version="6.0.0" />
</ItemGroup>
```

`Syncfusion.Collaborator.Server.AspNet.Core` provides SignalR, the Redis-backed action service, the active transport, and the background save worker, so separate SignalR or Redis packages do not need to be referenced manually for the collaboration workflow. `Syncfusion.Pdf.Net.Core` is used by the server adapter to import XFDF annotations, update form fields, and reorganize pages while replaying operations.

> Use the same `Microsoft.AspNetCore.Mvc.NewtonsoftJson` version that matches the target framework of your project.

### Step 3: Configure the Redis connection

Redis stores the temporary PDF Viewer operations for each room, maintains the order of changes, and distributes the operations across the connected clients. Provide the Redis connection string in the `appsettings.json` file.

```json
{
  "ConnectionStrings": {
    "Redis": "<Provide your redis connection string>"
  },
  "PdfStorage": {
    "StoragePath": "storage/pdfs",
    "DefaultPdfPath": "wwwroot/PDF/pdf-succinctly.pdf"
  }
}
```

The `SaveThreshold` option controls how many operations are retained in Redis per document. When the threshold is exceeded, the first set of operations is removed from the cache and applied to the source document during the background save. For example, when the `SaveThreshold` is set to `100`, up to twice that number of operations are retained in Redis per document.

### Step 4: Register the Collaboration Server

Register the Collaboration Server, the PDF storage service, and the PDF Viewer server adapter in the `Program.cs` file.

```C#
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Serialization;
using Syncfusion.Collaboration.Core.Extensions;
using Syncfusion.Collaboration.Core.Interfaces;
using PdfViewerCollaborativeEditingServer.Adapter;
using PdfViewerCollaborativeEditingServer.Services;

var builder = WebApplication.CreateBuilder(args);

// Use Newtonsoft.Json for MVC so the collaborative editing payloads bind correctly.
builder.Services
    .AddControllersWithViews()
    .AddNewtonsoftJson(options =>
    {
        options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
    });

builder.Services.Configure<ApiBehaviorOptions>(options =>
{
    options.SuppressModelStateInvalidFilter = true;
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", corsBuilder =>
    {
        corsBuilder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

// Configure the Redis connection.
var redisConnectionString = builder.Configuration.GetConnectionString("Redis")
    ?? "localhost:6379";

builder.Services.AddCollaborationServer(options =>
{
    options.ConnectionString = redisConnectionString;
    options.ConnectionType = CollaborationConnectionType.SignalR; // default
    options.SaveThreshold = 100; // default
});

// Register the PDF storage service.
builder.Services.AddSingleton<IPdfStorageService, PdfStorageService>();

// Register the PDF Viewer server adapter.
builder.Services.AddSingleton<ICollaborationAdapter, PdfViewerCollaborationAdapter>();

var app = builder.Build();

// Configure the middleware.
app.UseStaticFiles();
app.UseRouting();
app.UseCors("AllowAllOrigins");
app.UseWebSockets();

// Map the collaboration endpoints.
app.MapControllers();
app.MapCollaborationServer(); // maps the SignalR collaboration endpoint

app.Run();
```

By default, the ASP.NET Core Collaboration Server uses SignalR. To use the WebSocket transport instead, set `options.ConnectionType = CollaborationConnectionType.WebSocket`, keep `app.UseWebSockets()` enabled, and map the server with `app.MapCollaborationServer()`.

### Step 5: Add the PDF Viewer server adapter

Create the `Adapter` folder and add the `PdfViewerCollaborationAdapter.cs` file inside it. This adapter is the control-specific translator on the server side. It implements `ICollaborationAdapter`, converts PDF Viewer actions to and from the common `CollaborationAction`, replays the stored operations against the PDF document using Syncfusion PDF Library, and queues the save requests for background processing.

The following code snippet demonstrates the mapping and save workflow of the adapter.

{% tabs %}
{% highlight csharp tabtitle="PdfViewerCollaborationAdapter.cs" %}
{% raw %}
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Syncfusion.Collaboration.Core.Interfaces;
using Syncfusion.Collaboration.Core.Models;
using Syncfusion.Collaboration.Core.Services;
using Syncfusion.Collaboration.Core.Transports;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using PdfViewerCollaborativeEditingServer.Models;
using PdfViewerCollaborativeEditingServer.Services;

namespace PdfViewerCollaborativeEditingServer.Adapter;

public class PdfViewerCollaborationAdapter : ICollaborationAdapter
{
    public object? SaveTaskQueue { get; set; }
    public IActiveTransport? Transport { get; set; }
    public object? StorageService { get; set; }

    private readonly IBackgroundTaskQueue? _backgroundTaskQueue;
    private readonly IServiceScopeFactory? _serviceScopeFactory;
    private readonly IPdfStorageService? _pdfStorageService;
    private readonly ILogger<PdfViewerCollaborationAdapter>? _logger;

    public PdfViewerCollaborationAdapter(
        IBackgroundTaskQueue? backgroundTaskQueue = null,
        IServiceScopeFactory? serviceScopeFactory = null,
        IPdfStorageService? pdfStorageService = null,
        ILogger<PdfViewerCollaborationAdapter>? logger = null)
    {
        _backgroundTaskQueue = backgroundTaskQueue;
        _serviceScopeFactory = serviceScopeFactory;
        _pdfStorageService = pdfStorageService;
        _logger = logger;

        this.SaveTaskQueue = _backgroundTaskQueue;
        this.StorageService = _pdfStorageService;
    }

    // Converts a PDF Viewer action into the shared collaboration action format.
    public CollaborationAction MapControlToGenericAction(object controlAction)
    {
        var request = (UpdateActionRequest)controlAction;

        return new CollaborationAction
        {
            RoomName = request.RoomName ?? "",
            ConnectionId = request.ConnectionId ?? "",
            CurrentUser = request.UserName ?? "",
            Version = request.CurrentVersion ?? 0,
            Data = JsonConvert.SerializeObject(request)
        };
    }

    // Converts a shared collaboration action back into the PDF Viewer action format.
    public object MapGenericToControlAction(CollaborationAction action)
    {
        if (string.IsNullOrEmpty(action.Data))
        {
            return new UpdateActionRequest();
        }

        return JsonConvert.DeserializeObject<UpdateActionRequest>(action.Data)
            ?? new UpdateActionRequest();
    }

    // No operation transformation is required for the PDF Viewer.
    // Each action is stored and broadcast independently.
    public void TransformOperations(List<CollaborationAction> actions)
    {
        // No-op: the PDF Viewer uses the last-write-wins approach.
    }

    // Replays the collaborative operations against the master PDF document.
    public async Task<byte[]> ReplayOperationsAndUpdateDocumentAsync(
        string masterPdfBase64,
        List<CollaborationAction> operations,
        string roomName)
    {
        byte[] pdfBuffer = Convert.FromBase64String(masterPdfBase64);
        PdfLoadedDocument document = new PdfLoadedDocument(pdfBuffer);

        var validOperations = ExtractValidOperations(operations);
        foreach (var operation in validOperations)
        {
            await ApplyOperationToDocumentAsync(document, operation);
        }

        byte[] updatedPdf;
        using (MemoryStream outputStream = new MemoryStream())
        {
            document.Save(outputStream);
            updatedPdf = outputStream.ToArray();
        }

        document.Close(true);
        document.Dispose();
        return updatedPdf;
    }

    // Queues the save request so the document can be persisted in the background.
    public async Task SaveOperationsAsync(
        List<CollaborationAction> actions, string roomName, bool partialSave)
    {
        var saveRequest = new SaveRequest
        {
            Actions = actions,
            RoomName = roomName,
            PartialSave = partialSave
        };

        if (_backgroundTaskQueue != null)
        {
            await _backgroundTaskQueue.QueueBackgroundWorkItemAsync(saveRequest);
        }

        await Task.CompletedTask;
    }

    // Loads the master PDF, replays the operations, persists the result,
    // and then clears the processed actions from Redis.
    public async Task ProcessSaveRequestAsync(SaveRequest request, CancellationToken cancellationToken)
    {
        string roomName = request.RoomName ?? "default";

        if (request.Actions == null || request.Actions.Count == 0)
        {
            await ClearRecordsAsync(roomName, request.PartialSave);
            return;
        }

        if (StorageService is IPdfStorageService storage)
        {
            var masterPdf = await storage.GetPdfAsync("document.pdf", roomName);
            byte[] updatedPdf = await ReplayOperationsAndUpdateDocumentAsync(
                masterPdf.Content!, request.Actions, roomName);

            await storage.StorePdfAsync(updatedPdf, "document.pdf", roomName);
        }

        // Clear the processed actions for the room in Redis.
        await ClearRecordsAsync(roomName, request.PartialSave);
    }

    // Resolves the action service from a new scope because IActionService
    // is registered as a scoped service in the Collaboration Server.
    private async Task ClearRecordsAsync(string roomName, bool partialSave)
    {
        if (_serviceScopeFactory == null)
        {
            return;
        }

        using (var scope = _serviceScopeFactory.CreateScope())
        {
            var actionService = scope.ServiceProvider.GetRequiredService<IActionService>();
            await actionService.ClearRecordsAsync(roomName, partialSave);
        }
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

The adapter also includes the operation replay logic that applies each stored action to the PDF document.

```C#
private List<dynamic> ExtractValidOperations(List<CollaborationAction> operations)
{
    var validOperations = new List<dynamic>();

    foreach (var op in operations)
    {
        if (op?.Data == null || string.IsNullOrEmpty(op.Data))
        {
            continue;
        }

        var fieldData = JsonConvert.DeserializeObject<dynamic>(op.Data);
        string? type = fieldData?["type"]?.ToString();

        if (type == "annotation")
        {
            validOperations.Add(new
            {
                type = "annotation",
                data = fieldData["data"]?["xfdfData"],
                action = fieldData["data"]?["action"]
            });
        }
        else if (type == "formField")
        {
            validOperations.Add(new
            {
                type = "formField",
                data = JsonConvert.DeserializeObject<dynamic>(fieldData["data"]?["jsonData"]?.ToString()),
                action = fieldData["data"]?["action"]
            });
        }
        else if (type == "pageOrganizer")
        {
            var parsedData = JsonConvert.DeserializeObject<dynamic>(fieldData["data"].ToString());
            validOperations.Add(new
            {
                type = "pageOrganizer",
                data = ((JArray)parsedData)?[0],
                action = ((JArray)parsedData)?[0]?["action"]
            });
        }
    }

    return validOperations;
}

private async Task ApplyOperationToDocumentAsync(PdfLoadedDocument document, dynamic operation)
{
    string? opType = operation?.type?.ToString()?.ToLower();
    var opData = operation?.data;

    switch (opType)
    {
        case "annotation":
        case "annotationupdate":
            // Import the XFDF annotation data into the document.
            if (opData != null)
            {
                await ImportAnnotationsFromXfdfAsync(document, opData.ToString(), operation?.action?.ToString());
            }
            break;

        case "formfield":
        case "formfieldaction":
        case "formfieldupdate":
            // Apply the form field value, property, and structural changes.
            await ApplyFormFieldUpdatesAsync(document, opData, opType, operation?.action?.ToString());
            break;

        case "pageorganizer":
        case "pageorganizeractions":
            // Apply the page reorder, rotate, insert, and delete actions.
            await ApplyPageOrganizerActionsAsync(document, opData);
            break;

        // The presence and connection operations are ignored during replay.
        case "adduser":
        case "removeuser":
        case "connectionid":
            break;
    }
}
```

N> For the complete implementation with form field creation for text box, check box, radio button, drop-down, list box, and signature fields, XFDF annotation parsing, signature rendering with path, image, and text support, and page organizer operations, refer to the [GitHub sample](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Collaborative%20Editing).

### Step 6: Add the strongly-typed request models

Create the `Models` folder and add the `UpdateActionRequest.cs` file inside it. The strongly-typed models ensure the broadcast payload contains only the properties required by each PDF Viewer action type.

```C#
using Newtonsoft.Json;

namespace PdfViewerCollaborativeEditingServer.Models;

public class UpdateActionRequest
{
    [JsonProperty("roomName")]
    public string? RoomName { get; set; }

    [JsonProperty("connectionId")]
    public string? ConnectionId { get; set; }

    [JsonProperty("userName")]
    public string? UserName { get; set; }

    [JsonProperty("type")]
    public string? Type { get; set; }

    [JsonProperty("currentVersion")]
    public int? CurrentVersion { get; set; }

    [JsonProperty("data")]
    public object? Data { get; set; }
}

public class AnnotationData
{
    [JsonProperty("xfdfData")]
    public string? XfdfData { get; set; }

    [JsonProperty("action")]
    public string? Action { get; set; }

    [JsonProperty("isRedacted")]
    public bool? IsRedacted { get; set; }
}

public class FormFieldData
{
    [JsonProperty("jsonData")]
    public string? JsonData { get; set; }

    [JsonProperty("action")]
    public string? Action { get; set; }
}

public class FormFieldActionData
{
    [JsonProperty("changes")]
    public string? Changes { get; set; }

    [JsonProperty("action")]
    public string? Action { get; set; }
}

public class PageOrganizerData
{
    [JsonProperty("data")]
    public List<PageOrganizerEntry>? Data { get; set; }
}
```

### Step 7: Add the PDF storage service

Create the `Services` folder and add the `IPdfStorageService.cs` file inside it. The storage service persists the finalized PDF for each room and provides the master PDF that the adapter replays the operations against. The sample stores one PDF per room in the configured storage path.

```C#
namespace PdfViewerCollaborativeEditingServer.Services;

public interface IPdfStorageService
{
    // Retrieves a stored PDF document as Base64 encoded content.
    Task<PdfStorageResult> GetPdfAsync(string fileName = "document.pdf", string roomName = "default");

    // Stores a PDF document for a specific room.
    Task<StorageResult> StorePdfAsync(byte[] pdfBuffer, string fileName = "document.pdf", string roomName = "default");

    // Checks whether a PDF exists for a specific room.
    Task<bool> PdfExistsForRoomAsync(string fileName = "document.pdf", string roomName = "default");

    // Deletes a PDF document for a specific room.
    Task<StorageResult> DeletePdfAsync(string fileName = "document.pdf", string roomName = "default");
}

public class PdfStorageResult
{
    public bool Success { get; set; }
    public string? FileName { get; set; }
    public string? RoomName { get; set; }
    public string? Content { get; set; } // Base64 encoded PDF
    public int ContentLength { get; set; }
    public bool IsDefault { get; set; }
    public string? Error { get; set; }
    public string? Message { get; set; }
}

public class StorageResult
{
    public bool Success { get; set; }
    public string? FilePath { get; set; }
    public string? BlobPath { get; set; }
    public int Size { get; set; }
    public string? Error { get; set; }
    public string? Message { get; set; }
}
```

The `PdfStorageService` implementation reads the room-specific PDF from the storage path. When the room has no saved document, it falls back to the default PDF so that a newly created room always opens a document.

```C#
namespace PdfViewerCollaborativeEditingServer.Services;

public class PdfStorageService : IPdfStorageService
{
    private readonly string _baseStoragePath;
    private readonly string _defaultPdfPath;
    private readonly ILogger<PdfStorageService> _logger;

    public PdfStorageService(
        IConfiguration configuration,
        IWebHostEnvironment hostingEnvironment,
        ILogger<PdfStorageService> logger)
    {
        _logger = logger;

        _baseStoragePath = configuration["PdfStorage:StoragePath"]
            ?? Path.Combine(hostingEnvironment.ContentRootPath, "storage", "pdfs");

        _defaultPdfPath = configuration["PdfStorage:DefaultPdfPath"]
            ?? Path.Combine(hostingEnvironment.WebRootPath, "PDF", "pdf-succinctly.pdf");

        EnsureDirectoryExists(_baseStoragePath);
    }

    public async Task<PdfStorageResult> GetPdfAsync(string fileName = "document.pdf", string roomName = "default")
    {
        string roomStoragePath = Path.Combine(_baseStoragePath, roomName ?? "default");
        string pdfPath = Path.Combine(roomStoragePath, fileName ?? "document.pdf");

        if (File.Exists(pdfPath))
        {
            byte[] buffer = await File.ReadAllBytesAsync(pdfPath);
            return new PdfStorageResult
            {
                Success = true,
                FileName = fileName,
                RoomName = roomName,
                Content = Convert.ToBase64String(buffer),
                ContentLength = buffer.Length,
                IsDefault = false
            };
        }

        // Fall back to the default PDF for a new room.
        if (File.Exists(_defaultPdfPath))
        {
            byte[] buffer = await File.ReadAllBytesAsync(_defaultPdfPath);
            return new PdfStorageResult
            {
                Success = true,
                FileName = fileName,
                RoomName = roomName,
                Content = Convert.ToBase64String(buffer),
                ContentLength = buffer.Length,
                IsDefault = true,
                Message = "Using default PDF"
            };
        }

        return new PdfStorageResult
        {
            Success = false,
            FileName = fileName,
            RoomName = roomName,
            Error = "PDF document not found"
        };
    }

    public async Task<StorageResult> StorePdfAsync(byte[] pdfBuffer, string fileName = "document.pdf", string roomName = "default")
    {
        string roomStoragePath = Path.Combine(_baseStoragePath, roomName ?? "default");
        EnsureDirectoryExists(roomStoragePath);

        string filePath = Path.Combine(roomStoragePath, fileName ?? "document.pdf");
        await File.WriteAllBytesAsync(filePath, pdfBuffer);

        return new StorageResult
        {
            Success = true,
            FilePath = filePath,
            Size = pdfBuffer.Length
        };
    }

    public Task<bool> PdfExistsForRoomAsync(string fileName = "document.pdf", string roomName = "default")
    {
        string pdfPath = Path.Combine(_baseStoragePath, roomName ?? "default", fileName ?? "document.pdf");
        return Task.FromResult(File.Exists(pdfPath));
    }

    public Task<StorageResult> DeletePdfAsync(string fileName = "document.pdf", string roomName = "default")
    {
        string pdfPath = Path.Combine(_baseStoragePath, roomName ?? "default", fileName ?? "document.pdf");
        if (File.Exists(pdfPath))
        {
            File.Delete(pdfPath);
        }

        return Task.FromResult(new StorageResult { Success = true, FilePath = pdfPath });
    }

    private void EnsureDirectoryExists(string directory)
    {
        if (!Directory.Exists(directory))
        {
            Directory.CreateDirectory(directory);
        }
    }
}
```

### Step 8: Add the collaborative editing controller

Create the `Controllers` folder and add the `CollaborativeEditingController.cs` file inside it. The controller is the HTTP bridge between the PDF Viewer and the Collaboration Server. It depends on the shared `IActionService`, the control-specific `ICollaborationAdapter`, the `IActiveTransport` for broadcasting, and the `IPdfStorageService` for the PDF content. The three web service methods are:

| Web service method | Why it is needed |
| --- | --- |
| ImportFile | Loads the room state from Redis and returns the current version and the pending PDF Viewer action snapshots to a newly connected client. |
| UpdateAction | Receives a PDF Viewer action from a connected client, validates the type-specific payload, persists the action in Redis, and broadcasts it to the other participants in the room. |
| GetPDFDocument | Retrieves the PDF content for a room as Base64, including the finalized document when the background save has completed. |

The following code snippet demonstrates the `CollaborativeEditingController`.

{% tabs %}
{% highlight csharp tabtitle="CollaborativeEditingController.cs" %}
{% raw %}
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Syncfusion.Collaboration.Core.Interfaces;
using Syncfusion.Collaboration.Core.Transports;
using PdfViewerCollaborativeEditingServer.Models;
using PdfViewerCollaborativeEditingServer.Services;

namespace PdfViewerCollaborativeEditingServer.Controllers;

[Route("api/[controller]")]
[ApiController]
[EnableCors("AllowAllOrigins")]
public class CollaborativeEditingController : ControllerBase
{
    private readonly IActionService _actionService;
    private readonly ICollaborationAdapter _adapter;
    private readonly IActiveTransport _transport;
    private readonly IPdfStorageService _pdfStorageService;
    private readonly ILogger<CollaborativeEditingController> _logger;

    public CollaborativeEditingController(
        IActionService actionService,
        ICollaborationAdapter adapter,
        IActiveTransport transport,
        IPdfStorageService pdfStorageService,
        ILogger<CollaborativeEditingController> logger)
    {
        _actionService = actionService;
        _adapter = adapter;
        _transport = transport;
        _pdfStorageService = pdfStorageService;
        _logger = logger;
    }

    // Imports the room state and returns the pending PDF Viewer actions.
    [HttpPost("ImportFile")]
    public async Task<IActionResult> ImportFile([FromBody] ImportFileRequest request)
    {
        try
        {
            if (string.IsNullOrEmpty(request?.RoomName))
            {
                return BadRequest(new { error = "RoomName is required" });
            }

            var allActions = await _actionService.GetPendingOperationsAsync(
                request.RoomName, 0, -1);

            var operations = allActions?
                .Select(x => _adapter.MapGenericToControlAction(x))
                .ToList() ?? new List<object>();

            return Ok(new
            {
                roomName = request.RoomName,
                version = allActions?.Count ?? 0,
                operations = operations
            });
        }
        catch (Exception ex)
        {
            _logger.LogError($"[ImportFile] Error: {ex.Message}");
            return StatusCode(500, new { error = "Failed to import file", details = ex.Message });
        }
    }

    // Validates, stores, and broadcasts a PDF Viewer action.
    [HttpPost("UpdateAction")]
    public async Task<IActionResult> UpdateAction([FromBody] UpdateActionRequest request)
    {
        try
        {
            if (request == null)
            {
                return BadRequest(new { error = "Request body is required" });
            }

            if (string.IsNullOrEmpty(request.RoomName))
            {
                return BadRequest(new { error = "RoomName is required" });
            }

            if (string.IsNullOrEmpty(request.Type))
            {
                return BadRequest(new { error = "Type is required" });
            }

            object typedData;
            string actionDescription;

            switch (request.Type.ToLowerInvariant())
            {
                case "annotation":
                    var annotationData = ToTypedModel<AnnotationData>(request.Data);
                    if (annotationData == null || string.IsNullOrEmpty(annotationData.XfdfData))
                    {
                        return BadRequest(new { error = "Data.xfdfData is required for annotation type" });
                    }
                    typedData = annotationData;
                    actionDescription = "Annotation updated";
                    break;

                case "formfield":
                    var formFieldData = ToTypedModel<FormFieldData>(request.Data);
                    if (formFieldData == null || string.IsNullOrEmpty(formFieldData.JsonData))
                    {
                        return BadRequest(new { error = "Data.jsonData is required for formField type" });
                    }
                    typedData = formFieldData;
                    actionDescription = "Form field updated";
                    break;

                case "formfieldaction":
                    var formFieldActionData = ToTypedModel<FormFieldActionData>(request.Data);
                    if (formFieldActionData == null || string.IsNullOrEmpty(formFieldActionData.Changes))
                    {
                        return BadRequest(new { error = "Data.changes is required for formFieldAction type" });
                    }
                    try
                    {
                        JToken.Parse(formFieldActionData.Changes);
                    }
                    catch (JsonReaderException ex)
                    {
                        return BadRequest(new { error = "Failed to parse changes JSON", details = ex.Message });
                    }
                    typedData = formFieldActionData;
                    actionDescription = "Form field action updated";
                    break;

                case "pageorganizer":
                    var entries = ExtractPageOrganizerEntries(request.Data);
                    if (entries == null || entries.Count == 0)
                    {
                        return BadRequest(new { error = "Data is required for pageOrganizer type" });
                    }
                    // Use a bare array for the broadcast payload.
                    typedData = JsonConvert.SerializeObject(entries);
                    actionDescription = "Page organizer updated";
                    break;

                default:
                    return BadRequest(new { error = $"Invalid action type: {request.Type}" });
            }

            var envelope = BuildEnvelope(request, typedData);

            // Persist the action in Redis through the common action service.
            await _actionService.AddOperationAsync(_adapter.MapControlToGenericAction(envelope), _adapter);

            // Broadcast the action to the other participants in the room.
            if (_transport != null)
            {
                await _transport.SendToGroupAsync(request.RoomName, "action", envelope);
            }

            return Ok(new
            {
                success = true,
                message = actionDescription,
                data = typedData
            });
        }
        catch (Exception ex)
        {
            _logger.LogError($"[UpdateAction] Error: {ex.Message}");
            return StatusCode(500, new { error = "Failed to update action", details = ex.Message });
        }
    }

    // Retrieves the stored PDF document as Base64 encoded content.
    [HttpGet("GetPDFDocument")]
    public async Task<IActionResult> GetPdfDocument(
        [FromQuery] string? fileName,
        [FromQuery] string? roomName)
    {
        try
        {
            if (_pdfStorageService == null)
            {
                return StatusCode(500, new { success = false, error = "PDF Storage Service not initialized" });
            }

            var result = await _pdfStorageService.GetPdfAsync(
                fileName ?? "document.pdf",
                roomName ?? "default");

            if (!result.Success)
            {
                return NotFound(new { success = false, error = result.Error, message = result.Message });
            }

            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError($"[GetPDFDocument] Error: {ex.Message}");
            return StatusCode(500, new { success = false, error = "Failed to retrieve PDF", details = ex.Message });
        }
    }

    // Converts the incoming data into the strongly-typed model.
    private static T? ToTypedModel<T>(object? data) where T : class
    {
        if (data == null)
        {
            return null;
        }

        if (data is T typed)
        {
            return typed;
        }

        if (data is JToken token)
        {
            return token.ToObject<T>();
        }

        return JsonConvert.DeserializeObject<T>(JsonConvert.SerializeObject(data));
    }

    // Extracts the page organizer entries from the incoming data.
    private List<PageOrganizerEntry>? ExtractPageOrganizerEntries(object? data)
    {
        if (data == null)
        {
            return null;
        }

        if (data is JArray jArray)
        {
            return jArray.ToObject<List<PageOrganizerEntry>>();
        }

        if (data is string dataString && !string.IsNullOrEmpty(dataString))
        {
            if (JToken.Parse(dataString) is JArray parsedArray)
            {
                return parsedArray.ToObject<List<PageOrganizerEntry>>();
            }
        }

        return JsonConvert.DeserializeObject<List<PageOrganizerEntry>>(
            JsonConvert.SerializeObject(data));
    }

    // Builds a clean broadcast envelope for the other participants.
    private static UpdateActionRequest BuildEnvelope(UpdateActionRequest source, object typedData)
    {
        return new UpdateActionRequest
        {
            RoomName = source.RoomName,
            ConnectionId = source.ConnectionId,
            UserName = source.UserName,
            Type = source.Type,
            CurrentVersion = source.CurrentVersion,
            Data = typedData
        };
    }

    public class ImportFileRequest
    {
        public string? RoomName { get; set; }
        public string? FileName { get; set; }
        public string? UserName { get; set; }
        public string? ConnectionId { get; set; }
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 9: Run the ASP.NET Core Collaboration Server

Restore, build, and run the server project.

```bash
dotnet restore
dotnet build
dotnet run
```

The server listens on the configured port. Start it on port `8081` when the React client is configured with `http://localhost:8081/`, or update the `SERVICE_URL` constant in `App.jsx` to match the port you use.

```bash
dotnet run --urls http://localhost:8081
```

### Step 10: Run the React client

In a second terminal, start the React application.

```bash
npm install
npm run dev
```

Vite displays the local client URL, normally similar to `http://localhost:5173`. Open that URL in the browser.

## Test collaborative editing

1. Open the client in the first browser tab.
2. Confirm that the PDF Viewer toolbar includes the user or collaboration icon.
3. Copy the room ID from the collaboration status bar or from the browser URL. The room ID is the `id` query parameter, for example `http://localhost:5173/?id=3tlfqgkp854`.
4. Open the client in another browser tab or window.
5. Replace its URL with the same room ID, for example `http://localhost:5173/?id=3tlfqgkp854`.
6. Confirm that both sessions show the same room ID in the app bar.
7. Make changes from either session and verify that the other session receives them. Test annotations, form fields, and Page Organizer actions.

If no `id` is provided in the URL, the client generates a new room ID. Share the generated URL with other collaborators so that everyone joins the same room.

## Collaboration notes

- The room ID identifies the shared collaboration session. Users with different room IDs are placed in different sessions.
- `connectionType` must match the server you are running. `websocket` is for the Node.js Web Service and `signalr` is for the ASP.NET Core Web Service.
- Keep the Collaboration Server running while testing real-time updates.
- The Collaboration Server uses Redis to store and distribute the PDF Viewer actions. Ensure the Redis configuration is valid before starting the server.
- The `SaveThreshold` value controls how often the pending actions are applied to the source document during the background save.
- The clients filter the broadcast actions by `connectionId` to ignore their own updates. The Page Organizer uses the last-write-wins strategy.
- For a hosted deployment, configure the client with the hosted Collaboration Server URL and use a shared, reachable Redis instance. All users must access the same client deployment and preserve the same `?id=<room-id>` value to remain in one room.
- Do not use `localhost` in a hosted client configuration because it refers to each individual user's computer.

N> [View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Collaborative%20Editing)

## See Also

- [Collaborative editing with Node.js](./using-redis-cache-nodejs)
- [Collaboration Client](../../../../Collaborator/collaboration-client)
- [Collaboration Server](../../../../Collaborator/collaboration-server)
- [Getting Started with the ASP.NET Core Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-core)