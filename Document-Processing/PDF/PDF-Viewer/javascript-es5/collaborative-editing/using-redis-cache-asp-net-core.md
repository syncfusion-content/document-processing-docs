---
layout: post
title: Collaborative Editing in JavaScript PDF Viewer with ASP.NET Core | Syncfusion
description: Learn how to implement real-time collaborative editing in the Syncfusion JavaScript (ES5) PDF Viewer using the ASP.NET Core Collaboration Server with Redis.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in JavaScript PDF Viewer with ASP.NET Core

This topic explains how to connect the JavaScript (ES5) PDF Viewer to the ASP.NET Core Collaboration Server. The server provides SignalR communication, Redis operation storage, room management, synchronization, and save processing.

Use this server when the PDF Viewer sample or your application is hosted on ASP.NET Core. To host the PDF Viewer with the Node.js Collaboration Server, refer to the [Collaborative editing with Node.js](./using-redis-cache-nodejs) topic. Both servers expose the same REST routes and use the same client-side adapter, so only the `connectionType` option and the server project differ.

## Prerequisites

- A JavaScript (ES5) PDF Viewer application loaded from the Syncfusion CDN.
- The .NET SDK 6.0 or later to run the ASP.NET Core Collaboration Server.
- A Redis instance reachable from the server.
- Two or more browser tabs or windows for testing collaboration.

## Choose a Collaboration Server

| Option | Language | Transport | Client `connectionType` |
| --- | --- | --- | --- |
| Node.js Web Service | Node.js | WebSocket | `websocket` |
| ASP.NET Core Web Service | C# / ASP.NET Core | SignalR | `signalr` |

## Client-side integration

### Step 1: Add the CDN scripts and the PDF Viewer container

Reference the Syncfusion CDN scripts in your HTML file. The updated `ej2.min.js` bundle already contains the collaboration client functionality.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Syncfusion PDF Viewer - Collaborative Editing</title>
    <link href="https://cdn.syncfusion.com/ej2/35.1.41/tailwind3.css" rel="stylesheet" />
    <script src="https://cdn.syncfusion.com/ej2/35.1.41/dist/ej2.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type="text/javascript"></script>
    <style>
        html, body { height: 100%; width: 100%; margin: 0; padding: 0; }
        #container { height: 100%; width: 100%; display: flex; flex-direction: column; }
        #collaborationStatusBar { padding: 10px 15px; background-color: #f0f0f0; border-bottom: 1px solid #ddd; font-size: 12px; flex-shrink: 0; }
        #PdfViewer { flex: 1; overflow: hidden; }
    </style>
</head>
<body>
    <div id="container">
        <div id="collaborationStatusBar"></div>
        <div id="PdfViewer"></div>
    </div>
    <script src="pdfViewerAdapter.js"></script>
    <script src="index.js"></script>
</body>
</html>
```

### Step 2: Add the PDF Viewer adapter

Create `pdfViewerAdapter.js` that implements the `ICollaborationProvider` contract. The adapter is the bridge between the Collaboration Client and the PDF Viewer. It loads the room state from the server, sends local PDF Viewer actions to the Collaboration Server, and applies remote actions through the `ej.pdfviewer.CollaborativeEditingHandler`.

The following code snippet demonstrates the `PdfViewerAdapter`.

{% tabs %}
{% highlight js tabtitle="pdfViewerAdapter.js" %}
{% raw %}
class PdfViewerAdapter {
    constructor(viewer, serviceUrl, currentUser) {
        this.viewer = viewer;
        this.serviceUrl = serviceUrl;
        this.currentUser = currentUser;
        this.fileName = '';
        this.currentRoomName = '';
        this.isDocumentLoaded = false;
        this.pendingOperations = [];

        // Initialize the collaborative editing handler
        this.collaborativeEditingHandler = new ej.pdfviewer.CollaborativeEditingHandler(
            viewer,
            currentUser
        );
    }

    // Generates or extracts the room id from the URL ?id=... query string.
    getRoomName() {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            let roomId = urlParams.get('id');
            if (!roomId) {
                roomId = Math.random().toString(32).slice(2);
                window.history.replaceState({}, '', `?id=${roomId}`);
            }
            return roomId;
        }
        return Math.random().toString(32).slice(2);
    }

    // Loads the room state and returns the room name.
    async loadFromServer(fileName) {
        this.isDocumentLoaded = false;
        this.fileName = fileName || 'document.pdf';

        const roomName = this.getRoomName();
        this.currentRoomName = roomName;

        const response = await fetch(
            `${this.serviceUrl}api/CollaborativeEditing/ImportFile`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    roomName: roomName,
                    fileName: this.fileName,
                    currentUser: this.currentUser
                })
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to join collaboration room: ${response.statusText}`);
        }

        const responseText = await response.text();
        await this.open(responseText, roomName);
        return roomName;
    }

    // Applies the pending PDF Viewer action snapshots sent by the server.
    async open(responseText, roomName) {
        const data = JSON.parse(responseText);
        const version = data.version || data.currentVersion || 0;

        this.collaborativeEditingHandler.updateRoomInfo(
            roomName,
            version,
            `${this.serviceUrl}api/CollaborativeEditing/`
        );

        this.pendingOperations = data.operations || [];
        if (data.operations && data.operations.length > 0) {
            for (const op of data.operations) {
                this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
            }
        }

        this.isDocumentLoaded = true;
    }

    // Sends local PDF Viewer actions to the Collaboration Server.
    async sendActionToServer(operations) {
        if (!operations || operations.length === 0) {
            return;
        }
        await this.collaborativeEditingHandler.sendActionToServer(operations);
    }

    // Applies remote actions received from the Collaboration Server.
    applyRemoteAction(action, data) {
        if (action === 'addUser') {
            if (data && data.payload && Array.isArray(data.payload) && data.payload.length > 0) {
                data.payload.forEach((user) => this._assignUserImage(user));
            } else if (data && data.payload) {
                this._assignUserImage(data.payload);
            }
        } else if (action === 'connectionId') {
            const image = this._getUserImage(this.currentUser);
            if (data && typeof data.payload !== 'undefined') {
                data.payload = { payload: data.payload, image: image };
            }
        }

        if (this.collaborativeEditingHandler && this.collaborativeEditingHandler.applyRemoteAction) {
            const payloadToApply = (data && data.payload) ? data.payload : data;
            this.collaborativeEditingHandler.applyRemoteAction(action, payloadToApply);
        }
    }

    _assignUserImage(user) {
        if (user && user.currentUser) {
            user.image = this._getUserImage(user.currentUser);
        }
    }

    _getUserImage(userName) {
        const avatarMap = {
            'RIO': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic01.png',
            'JOHN': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic03.png',
            'MAXY': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic02.png',
            'SHAI': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic04.png',
            'SRI': 'https://ej2.syncfusion.com/demos/src/avatar/images/pic05.png'
        };
        return avatarMap[userName] || 'https://ej2.syncfusion.com/demos/src/avatar/images/default.png';
    }

    // Replays the pending snapshots once the PDF Viewer finishes loading the document.
    updatePendingOperations() {
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

### Step 3: Initialize the PDF Viewer

Create `index.js` with the complete JavaScript (ES5) client. It injects the required PDF Viewer services, wires the `enableCollaborativeEditing` property, initializes collaboration when the viewer resources are loaded, joins the room, retrieves the current PDF from `GetPDFDocument`, and sends every supported PDF Viewer action from the `documentChanged` event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}
// Available user list for demo purposes
const userList = ['RIO', 'JOHN', 'MAXY', 'SHAI', 'SRI'];
const currentUserName = userList[Math.floor(Math.random() * userList.length)];
// REPLACE THIS WITH THE SERVICE URL OF THE SERVER CURRENTLY RUNNING
const SERVICE_URL = 'https://localhost:5001/';

let appState = {
    isDocumentLoaded: false,
    collaborationStatus: 'initializing',
    currentUser: currentUserName,
    connectedUsers: [currentUserName],
    roomName: '',
    pdfViewer: null,
    adapter: null,
    client: null,
    roomNameRef: ''
};

// Loads a PDF blob into the viewer.
async function loadPDFBlobIntoViewer(pdfBlob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            try {
                const uint8Array = new Uint8Array(reader.result);
                if (appState.pdfViewer && typeof appState.pdfViewer.load === 'function') {
                    appState.pdfViewer.load(uint8Array, '');
                    resolve();
                    return;
                }
                reject(new Error('Viewer load method not available'));
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = () => reject(new Error('Failed to read blob as array buffer'));
        reader.readAsArrayBuffer(pdfBlob);
    });
}

// Fetches the current collaborative document from the server.
async function fetchAndLoadPDFDocument() {
    const queryParams = new URLSearchParams({ roomName: appState.roomNameRef || 'default' });

    const response = await fetch(
        `${SERVICE_URL}api/CollaborativeEditing/GetPDFDocument?${queryParams.toString()}`,
        { method: 'GET', headers: { 'Accept': 'application/json' } }
    );

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    if (!result.success) {
        throw new Error(`Server error: ${result.error}`);
    }

    const binaryString = atob(result.content);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    const pdfBlob = new Blob([bytes], { type: 'application/pdf' });
    await loadPDFBlobIntoViewer(pdfBlob);
}

// Handler for viewer.resourcesLoaded event.
async function handleResourcesLoaded() {
    if (appState.isDocumentLoaded) {
        return;
    }

    appState.collaborationStatus = 'loading';
    appState.isDocumentLoaded = true;

    try {
        // Step 1: Initialize PdfViewerAdapter
        const adapter = new PdfViewerAdapter(appState.pdfViewer, SERVICE_URL, appState.currentUser);
        appState.adapter = adapter;

        // Step 2: Create and configure CollaborationClient
        const client = new ej.collaborator.CollaborationClient(adapter, {
            serviceUrl: SERVICE_URL,
            // USE BELOW IF YOU USE THE NODE JS WEB SERVICE
            // connectionType: 'websocket',
            // USE BELOW IF YOU USE THE CORE WEB SERVICE
            connectionType: 'signalr',
            currentUser: appState.currentUser,
            onRemoteAction: (action, data) => {
                if (adapter && typeof adapter.applyRemoteAction === 'function') {
                    adapter.applyRemoteAction(action, data);
                }
            },
            onUserJoined: (user) => {
                const userName = user.userName || user.currentUser;
                if (!appState.connectedUsers.includes(userName)) {
                    appState.connectedUsers.push(userName);
                }
            },
            onUserLeft: (user) => {
                const userName = user.userName || user.currentUser;
                appState.connectedUsers = appState.connectedUsers.filter(u => u !== userName);
            }
        });
        appState.client = client;

        // Step 3: Load from server (gets room name and pending operations)
        const roomName = await adapter.loadFromServer();
        appState.roomNameRef = roomName;
        appState.roomName = roomName;

        // Step 4: Join the collaboration room with the client
        await client.joinRoomAsync(roomName);

        // Step 5: Fetch and load the current PDF document state
        await fetchAndLoadPDFDocument();

        appState.collaborationStatus = 'connected';
    } catch (error) {
        console.error('[App] Error during collaboration initialization:', error);
        appState.collaborationStatus = 'error';
    }
}

function handleDocumentLoaded() {
    appState.adapter.updatePendingOperations();
}

// Handler for viewer.documentChanged event.
function handleDocumentChanged(args) {
    try {
        let operations = [];

        if (args && 'annotationId' in args) {
            if (args.action) {
                operations = [{
                    action: args.action,
                    annotation: args.annotationId,
                    type: 'annotation',
                    isRedacted: args.isRedacted
                }];
            } else {
                operations = [{
                    type: 'removeUser',
                    currentUser: appState.currentUser
                }];
            }
        }
        else if (args && 'formField' in args && !('fieldName' in args)) {
            operations = [{
                action: args.action,
                formField: args.formField,
                type: 'formField'
            }];
        }
        else if (args && 'fieldName' in args) {
            operations = [{
                action: 'formFieldUpdate',
                data: args,
                type: 'formField'
            }];
        }
        else if (args && 'organizePageActions' in args) {
            const actionDetails = args.organizePageActions && typeof args.organizePageActions === 'string'
                ? JSON.parse(args.organizePageActions)
                : '';

            if (args.savedDocument === null && actionDetails.action === 'applyCancelled') {
                operations = [{
                    type: 'removeUser',
                    currentUser: appState.currentUser
                }];
            } else if (args.savedDocument !== null && actionDetails.length > 0 && actionDetails[0].action !== 'applyCancelled') {
                operations = [{
                    action: 'pageOrganizerUpdate',
                    data: args.organizePageActions,
                    type: 'pageOrganizer'
                }];
            } else {
                return;
            }
        }

        if (operations.length > 0 && appState.adapter && appState.adapter.sendActionToServer) {
            appState.adapter.sendActionToServer(operations).catch(err =>
                console.error('[App] Error sending operation:', err)
            );
        }
    } catch (error) {
        console.error('[App] Error processing document change:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize PDF Viewer
    appState.pdfViewer = new ej.pdfviewer.PdfViewer({
        enableCollaborativeEditing: true,
        resourceUrl: 'https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib',
        resourcesLoaded: handleResourcesLoaded,
        documentChanged: handleDocumentChanged,
        documentLoad: handleDocumentLoaded
    });

    // Inject required services
    ej.pdfviewer.PdfViewer.Inject(
        ej.pdfviewer.TextSelection,
        ej.pdfviewer.TextSearch,
        ej.pdfviewer.Print,
        ej.pdfviewer.Navigation,
        ej.pdfviewer.Toolbar,
        ej.pdfviewer.Magnification,
        ej.pdfviewer.Annotation,
        ej.pdfviewer.FormDesigner,
        ej.pdfviewer.FormFields,
        ej.pdfviewer.LinkAnnotation,
        ej.pdfviewer.BookmarkView,
        ej.pdfviewer.ThumbnailView,
        ej.pdfviewer.PageOrganizer
    );

    appState.pdfViewer.appendTo('#PdfViewer');
});
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Server-side integration

The ASP.NET Core Collaboration Server is a .NET 6+ Web API project that uses SignalR, Redis, and the Syncfusion PDF Library to store and replay PDF Viewer operations. The Node.js and ASP.NET Core servers expose the same REST routes, so only the `connectionType` option on the client differs.

### Step 1: Create the ASP.NET Core project

Create a new ASP.NET Core Web API project named `PdfViewerCollaborativeEditingServer` and target **.NET 6.0** or later. Add the following NuGet packages:

| Package | Purpose |
| --- | --- |
| `Syncfusion.Collaborator.Server.AspNet.Core` | Syncfusion ASP.NET Core Collaboration Server with SignalR transport. |
| `Syncfusion.Pdf.Net.Core` | Syncfusion PDF Library for replaying annotation, form field, and page organizer operations on the server. |
| `Newtonsoft.Json` + `Microsoft.AspNetCore.Mvc.NewtonsoftJson` | Used by the controller to deserialize the loosely-typed action payloads. |
| `StackExchange.Redis` | Redis client used by the Collaboration Server for operation storage. |

### Step 2: Configure Redis in `appsettings.json`

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "Redis": "localhost:6379"
  },
  "PdfStorage": {
    "StoragePath": "storage/pdfs",
    "DefaultPdfPath": "wwwroot/PDF/pdf-succinctly.pdf"
  }
}
```

### Step 3: Register the Collaboration Server in `Program.cs`

Update `Program.cs` to use the Newtonsoft.Json serializer (required for the loosely-typed action payloads), register Redis, register the Collaboration Server with the SignalR transport, and map the controllers and the collaboration endpoint.

```csharp
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Serialization;
using Syncfusion.Collaboration.Core.Extensions;
using Syncfusion.Collaboration.Core.Interfaces;
using PdfViewerCollaborativeEditingServer.Adapter;
using PdfViewerCollaborativeEditingServer.Services;

var builder = WebApplication.CreateBuilder(args);

// Use Newtonsoft.Json for MVC so the collaborative editing payloads (which are
// deserialized into Newtonsoft.Json.Linq.JObject / JToken) bind correctly.
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

### Step 4: Add the PDF Viewer server adapter

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

    // SaveRequest is invoked by the Collaboration Server background queue.
    public async Task<SaveResult> SaveRequest(
        SaveRequestPayload payload,
        Dictionary<string, object?> options)
    {
        // Replay the operations and update the persisted PDF document.
        // The default implementation provided by the Syncfusion samples
        // delegates to ReplayOperationsAndUpdateDocumentAsync and stores
        // the updated bytes through IPdfStorageService.
        return await Task.FromResult(new SaveResult { Success = true });
    }

    // Returns the strongly-typed UpdateActionRequest parsed from the stored JSON.
    private UpdateActionRequest? ParseActionData(CollaborationAction action)
    {
        if (string.IsNullOrEmpty(action.Data))
        {
            return null;
        }

        try
        {
            return JsonConvert.DeserializeObject<UpdateActionRequest>(action.Data);
        }
        catch
        {
            return null;
        }
    }

    // Validates the action list and skips entries that cannot be parsed.
    private List<CollaborationAction> ExtractValidOperations(List<CollaborationAction> operations)
    {
        var valid = new List<CollaborationAction>();
        foreach (var op in operations)
        {
            if (ParseActionData(op) != null)
            {
                valid.Add(op);
            }
        }
        return valid;
    }

    // Applies a single strongly-typed action against the PdfLoadedDocument.
    private Task ApplyOperationToDocumentAsync(PdfLoadedDocument document, CollaborationAction action)
    {
        var typed = ParseActionData(action);
        if (typed == null || string.IsNullOrEmpty(typed.Type))
        {
            return Task.CompletedTask;
        }

        switch (typed.Type.ToLowerInvariant())
        {
            case "annotation":
                ApplyAnnotationToDocument(document, typed);
                break;
            case "formfield":
                ApplyFormFieldToDocument(document, typed);
                break;
            case "formfieldaction":
                ApplyFormFieldActionToDocument(document, typed);
                break;
            case "pageorganizer":
                ApplyPageOrganizerToDocument(document, typed);
                break;
        }
        return Task.CompletedTask;
    }

    private void ApplyAnnotationToDocument(PdfLoadedDocument document, UpdateActionRequest action)
    {
        // The XFDF payload from the client is applied against the in-memory
        // document using the Syncfusion PDF Library's XFDF importer. The
        // exact helpers depend on the Syncfusion.Pdf version in use.
    }

    private void ApplyFormFieldToDocument(PdfLoadedDocument document, UpdateActionRequest action)
    {
        // Apply a single form field value update against the in-memory document.
    }

    private void ApplyFormFieldActionToDocument(PdfLoadedDocument document, UpdateActionRequest action)
    {
        // Apply form field create / update / delete operations against the in-memory document.
    }

    private void ApplyPageOrganizerToDocument(PdfLoadedDocument document, UpdateActionRequest action)
    {
        // Apply page organizer operations (rotate, delete, rearrange, insert, copy).
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 5: Add the strongly-typed request models

Create the `Models` folder and add the `UpdateActionRequest.cs` file inside it. These models mirror the broadcast payload shape used by the Node.js collaborative editing server.

{% tabs %}
{% highlight csharp tabtitle="UpdateActionRequest.cs" %}
{% raw %}
using Newtonsoft.Json;

namespace PdfViewerCollaborativeEditingServer.Models
{
    /// <summary>
    /// Strongly-typed envelope for the UpdateAction API.
    /// All properties are nullable; null values are excluded from the serialized
    /// payload so the .NET broadcast matches the Node.js broadcast exactly.
    /// </summary>
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

        /// <summary>
        /// Type-specific payload (annotation, formField, formFieldAction, pageOrganizer).
        /// </summary>
        [JsonProperty("data")]
        public object? Data { get; set; }
    }

    public class ImportFileRequest
    {
        [JsonProperty("roomName")]
        public string? RoomName { get; set; }

        [JsonProperty("fileName")]
        public string? FileName { get; set; }

        [JsonProperty("currentUser")]
        public string? CurrentUser { get; set; }
    }

    /// <summary>Payload for <c>type = "annotation"</c>.</summary>
    public class AnnotationData
    {
        [JsonProperty("xfdfData")]
        public string? XfdfData { get; set; }

        [JsonProperty("action")]
        public string? Action { get; set; }

        [JsonProperty("isRedacted")]
        public bool? IsRedacted { get; set; }
    }

    /// <summary>Payload for <c>type = "formField"</c>.</summary>
    public class FormFieldData
    {
        [JsonProperty("jsonData")]
        public string? JsonData { get; set; }

        [JsonProperty("action")]
        public string? Action { get; set; }
    }

    /// <summary>Payload for <c>type = "formFieldAction"</c>.</summary>
    public class FormFieldActionData
    {
        [JsonProperty("changes")]
        public string? Changes { get; set; }

        [JsonProperty("action")]
        public string? Action { get; set; }
    }

    /// <summary>Payload for <c>type = "pageOrganizer"</c>.</summary>
    public class PageOrganizerData
    {
        [JsonProperty("data")]
        public List<object>? Data { get; set; }
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 6: Add the PDF storage service

Create the `Services` folder and add `IPdfStorageService.cs` and `PdfStorageService.cs`. The service stores room-specific PDFs in a local `storage/pdfs/<roomName>/` folder. When a room-specific PDF does not exist yet, it falls back to a default PDF that you place in `wwwroot/PDF/`.

{% tabs %}
{% highlight csharp tabtitle="IPdfStorageService.cs" %}
{% raw %}
namespace PdfViewerCollaborativeEditingServer.Services
{
    public interface IPdfStorageService
    {
        Task<PdfStorageResult> GetPdfAsync(string fileName = "document.pdf", string roomName = "default");
        Task<StorageResult> StorePdfAsync(byte[] pdfBuffer, string fileName = "document.pdf", string roomName = "default");
        Task<bool> PdfExistsForRoomAsync(string fileName = "document.pdf", string roomName = "default");
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
        public int Size { get; set; }
        public string? Error { get; set; }
        public string? Message { get; set; }
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight csharp tabtitle="PdfStorageService.cs" %}
{% raw %}
namespace PdfViewerCollaborativeEditingServer.Services
{
    public class PdfStorageService : IPdfStorageService
    {
        private readonly string _baseStoragePath;
        private readonly string _defaultPdfPath;
        private readonly ILogger<PdfStorageService> _logger;

        public PdfStorageService(IConfiguration configuration, IWebHostEnvironment hostingEnvironment, ILogger<PdfStorageService> logger)
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
            string resolvedFileName = fileName ?? "document.pdf";
            string resolvedRoomName = roomName ?? "default";

            string roomStoragePath = Path.Combine(_baseStoragePath, resolvedRoomName);
            string pdfPath = Path.Combine(roomStoragePath, resolvedFileName);

            if (File.Exists(pdfPath))
            {
                byte[] buffer = await File.ReadAllBytesAsync(pdfPath);
                return new PdfStorageResult
                {
                    Success = true,
                    FileName = resolvedFileName,
                    RoomName = resolvedRoomName,
                    Content = Convert.ToBase64String(buffer),
                    ContentLength = buffer.Length,
                    IsDefault = false
                };
            }

            if (File.Exists(_defaultPdfPath))
            {
                byte[] buffer = await File.ReadAllBytesAsync(_defaultPdfPath);
                return new PdfStorageResult
                {
                    Success = true,
                    FileName = resolvedFileName,
                    RoomName = resolvedRoomName,
                    Content = Convert.ToBase64String(buffer),
                    ContentLength = buffer.Length,
                    IsDefault = true,
                    Message = "Using default PDF"
                };
            }

            return new PdfStorageResult
            {
                Success = false,
                FileName = resolvedFileName,
                RoomName = resolvedRoomName,
                Error = "PDF document not found"
            };
        }

        public async Task<StorageResult> StorePdfAsync(byte[] pdfBuffer, string fileName = "document.pdf", string roomName = "default")
        {
            string resolvedFileName = fileName ?? "document.pdf";
            string resolvedRoomName = roomName ?? "default";

            string roomStoragePath = Path.Combine(_baseStoragePath, resolvedRoomName);
            EnsureDirectoryExists(roomStoragePath);

            string filePath = Path.Combine(roomStoragePath, resolvedFileName);
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
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 7: Add the collaborative editing controller

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
                    actionDescription = $"annotation/{annotationData.Action}";
                    break;

                case "formfield":
                    var formFieldData = ToTypedModel<FormFieldData>(request.Data);
                    if (formFieldData == null || string.IsNullOrEmpty(formFieldData.JsonData))
                    {
                        return BadRequest(new { error = "Data.jsonData is required for formField type" });
                    }
                    typedData = formFieldData;
                    actionDescription = $"formField/{formFieldData.Action}";
                    break;

                case "formfieldaction":
                    var formFieldActionData = ToTypedModel<FormFieldActionData>(request.Data);
                    if (formFieldActionData == null || string.IsNullOrEmpty(formFieldActionData.Changes))
                    {
                        return BadRequest(new { error = "Data.changes is required for formFieldAction type" });
                    }
                    typedData = formFieldActionData;
                    actionDescription = $"formFieldAction/{formFieldActionData.Action}";
                    break;

                case "pageorganizer":
                    var pageOrganizerData = ToTypedModel<PageOrganizerData>(request.Data);
                    if (pageOrganizerData == null || pageOrganizerData.Data == null)
                    {
                        return BadRequest(new { error = "Data.data is required for pageOrganizer type" });
                    }
                    typedData = pageOrganizerData;
                    actionDescription = "pageOrganizer";
                    break;

                case "removeuser":
                    typedData = new { currentUser = request.UserName };
                    actionDescription = "removeUser";
                    break;

                default:
                    return BadRequest(new { error = $"Unknown type '{request.Type}'" });
            }

            // Build the clean envelope from the typed data and broadcast it
            // to every other participant in the room.
            var envelope = new
            {
                roomName = request.RoomName,
                connectionId = request.ConnectionId,
                userName = request.UserName,
                type = request.Type,
                currentVersion = request.CurrentVersion,
                data = typedData
            };

            var collaborationAction = _adapter.MapControlToGenericAction(envelope);
            await _actionService.SaveActionAsync(collaborationAction);

            await _transport.BroadcastToRoomAsync(
                request.RoomName,
                request.ConnectionId,
                actionDescription,
                envelope);

            return Ok(new { success = true, version = collaborationAction.Version });
        }
        catch (Exception ex)
        {
            _logger.LogError($"[UpdateAction] Error: {ex.Message}");
            return StatusCode(500, new { error = "Failed to process action", details = ex.Message });
        }
    }

    // Returns the current PDF document (Base64) for the room.
    [HttpGet("GetPDFDocument")]
    public async Task<IActionResult> GetPDFDocument([FromQuery] string? roomName = null, [FromQuery] string? fileName = null)
    {
        try
        {
            var result = await _pdfStorageService.GetPdfAsync(
                fileName ?? "document.pdf",
                roomName ?? "default");

            if (!result.Success)
            {
                return NotFound(result);
            }

            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError($"[GetPDFDocument] Error: {ex.Message}");
            return StatusCode(500, new { error = "Failed to get PDF document", details = ex.Message });
        }
    }

    // Converts the incoming `data` object into a strongly-typed model.
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

        if (data is JObject jObject)
        {
            return jObject.ToObject<T>();
        }

        if (data is JToken jToken)
        {
            return jToken.ToObject<T>();
        }

        var serialized = JsonConvert.SerializeObject(data);
        return JsonConvert.DeserializeObject<T>(serialized);
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Run and test

1. Start the ASP.NET Core Collaboration Server:
   ```bash
   dotnet run --urls http://localhost:5001
   ```
2. Update `SERVICE_URL` in `index.js` if the server is hosted on a different port or HTTPS endpoint.
3. Serve the JavaScript client through any static file server, for example:
   ```bash
   npx http-server . -p 8080
   ```
4. Open `http://localhost:8080/?id=demo-room` in two browser windows. Changes you make in one window should appear in the other.

## Collaboration notes

- The Collaboration Server uses Redis to store and distribute the PDF Viewer actions. Ensure the Redis configuration is valid before starting the server.
- The `SaveThreshold` value controls how often the pending actions are applied to the source document during the background save.
- The clients filter the broadcast actions by `connectionId` to ignore their own updates. The Page Organizer uses the last-write-wins strategy.
- For a hosted deployment, configure the client with the hosted Collaboration Server URL and use a shared, reachable Redis instance. All users must access the same client deployment and preserve the same `?id=<room-id>` value to remain in one room.
- Do not use `localhost` in a hosted client configuration because it refers to each individual user's computer.

N> [View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Collaborative%20Editing)

## See Also

- [Collaborative editing with Node.js](./using-redis-cache-nodejs)
- [Collaboration Client](../../../../Collaborator/collaboration-client)
- [Collaboration Server](../../../../Collaborator/collaboration-server)
- [Getting Started with the ASP.NET Core Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-core)
