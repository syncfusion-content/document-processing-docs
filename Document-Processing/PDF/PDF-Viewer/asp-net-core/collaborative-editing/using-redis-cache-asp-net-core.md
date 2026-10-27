---
layout: post
title: Collaborative Editing in Core PDF Viewer with ASP.NET Core
description: Learn how to add real-time collaborative editing to the Syncfusion ASP.NET Core PDF Viewer using the ASP.NET Core server and Redis.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in ASP.NET Core PDF Viewer with ASP.NET Core

This topic explains how to connect the ASP.NET Core (Razor Pages) PDF Viewer to the ASP.NET Core Collaboration Server. The server provides SignalR communication, Redis operation storage, room management, synchronization, and save processing.

Use this server when the PDF Viewer sample or your application is hosted on ASP.NET Core. To host the PDF Viewer with the Node.js Collaboration Server, refer to the [Collaborative editing with Node.js](./using-redis-cache-nodejs) topic. Both servers expose the same REST routes and use the same client-side adapter, so only the `connectionType` option and the server project differ.

## Prerequisites

- An ASP.NET Core (Razor Pages) application that hosts the Syncfusion PDF Viewer Tag Helper.
- The .NET SDK 6.0 or later to run the ASP.NET Core Collaboration Server.
- A Redis instance reachable from the server.
- Two or more browser tabs or windows for testing collaboration.

## Choose a Collaboration Server

| Option | Language | Transport | Client `connectionType` |
| --- | --- | --- | --- |
| Node.js Web Service | Node.js | WebSocket | `websocket` |
| ASP.NET Core Web Service | C# / ASP.NET Core | SignalR | `signalr` |

## Client-side integration

### Step 1: Add the CDN scripts and the PDF Viewer Tag Helper

Reference the Syncfusion CDN scripts and styles in `_Layout.cshtml` (or in the page that hosts the viewer). The updated `ej2.min.js` bundle already contains the collaboration client functionality.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Syncfusion PDF Viewer - Collaborative Editing</title>
    <link href="https://cdn.syncfusion.com/ej2/35.1.37/material3.css" rel="stylesheet" />
    <script src="https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type="text/javascript"></script>
</head>
<body>
    @RenderBody()
    @await RenderSectionAsync("Scripts", required: false)
</body>
</html>
```

### Step 2: Add the PDF Viewer adapter

Create `wwwroot/pdfViewerAdapter.js`. The adapter is the bridge between the Collaboration Client and the PDF Viewer. It loads the room state from the server, sends local PDF Viewer actions to the Collaboration Server, and applies remote actions through the `CollaborativeEditingHandler`.

```js
/**
 * PdfViewerAdapter - Implements ICollaborationProvider for Syncfusion PDF Viewer.
 * This adapter acts as a bridge between the PDF Viewer and the CollaborationClient.
 */

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

        console.log('[PdfViewerAdapter] Initialized for user:', currentUser);
    }

    getRoomName() {
        if (typeof window !== 'undefined') {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            let roomId = urlParams.get('id');

            if (!roomId) {
                roomId = Math.random().toString(32).slice(2);
                window.history.replaceState({}, '', `?id=${roomId}`);
            }

            return roomId;
        }

        return Math.random().toString(32).slice(2);
    }

    async loadFromServer(fileName) {
        this.isDocumentLoaded = false;
        this.fileName = fileName || 'document.pdf';

        const roomName = this.getRoomName();
        this.currentRoomName = roomName;

        try {
            const response = await fetch(
                `${this.serviceUrl}api/CollaborativeEditing/ImportFile`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        roomName: roomName,
                        fileName: this.fileName,
                        currentUser: this.currentUser
                    })
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Failed to join collaboration room: ${response.statusText}`
                );
            }

            const responseText = await response.text();
            await this.open(responseText, roomName);

            return roomName;
        } catch (error) {
            console.error('[PdfViewerAdapter] Error loading from server:', error);
            throw error;
        }
    }

    async open(responseText, roomName) {
        try {
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
                    try {
                        this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
                    } catch (opError) {
                        console.warn('[PdfViewerAdapter] Error applying operation:', op, opError);
                    }
                }
            }

            this.isDocumentLoaded = true;
        } catch (error) {
            console.error('[PdfViewerAdapter] Error initializing document:', error);
            throw error;
        }
    }

    async sendActionToServer(operations) {
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

    applyRemoteAction(action, data) {
        try {
            if (action === 'addUser') {
                if (data && data.payload && Array.isArray(data.payload) && data.payload.length > 0) {
                    data.payload.forEach((user) => {
                        this._assignUserImage(user);
                    });
                }
                else if (data && data.payload) {
                    this._assignUserImage(data.payload);
                }
            }
            else if (action === 'connectionId') {
                const image = this._getUserImage(this.currentUser);
                if (data && typeof data.payload !== 'undefined') {
                    data.payload = { payload: data.payload, image: image };
                }
            }

            if (this.collaborativeEditingHandler && this.collaborativeEditingHandler.applyRemoteAction) {
                const payloadToApply = (data && data.payload) ? data.payload : data;
                this.collaborativeEditingHandler.applyRemoteAction(action, payloadToApply);
            }
        } catch (error) {
            console.error('[PdfViewerAdapter] Error applying remote action:', error);
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

    updatePendingOperations() {
        try {
            if (this.pendingOperations && this.pendingOperations.length > 0) {
                for (const op of this.pendingOperations) {
                    try {
                        this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
                    } catch (opError) {
                        console.warn('[PdfViewerAdapter] Error applying pending operation:', op, opError);
                    }
                }
            }
        } catch (error) {
            console.error('[PdfViewerAdapter] Error updating pending operations:', error);
        }
    }
}
```

### Step 3: Initialize the ASP.NET Core PDF Viewer in a Razor Page

Replace `Pages/Index.cshtml` with the following Razor markup. It enables `enableCollaborativeEditing`, initializes the `CollaborationClient` with the SignalR transport, joins the room, retrieves the current PDF from `GetPDFDocument`, and forwards every supported PDF Viewer action from the `documentChanged` event.

```cshtml
@page
@model IndexModel
@{
    ViewData["Title"] = "PDF Collaboration";
}

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        width: 100%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    #container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
    }

    #collaborationStatusBar {
        padding: 10px 15px;
        background-color: #f0f0f0;
        border-bottom: 1px solid #ddd;
        font-size: 12px;
        flex-shrink: 0;
    }

    #PdfViewer {
        flex: 1;
        overflow: hidden;
    }
</style>

<div id="container">

    <ejs-pdfviewer id="pdfviewer"
                   style="height: 600px;"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib"
                   documentLoad="documentLoad"
                   resourcesLoaded="handleResourcesLoaded"
                   enableCollaborativeEditing="true"
                   documentChanged="handleDocumentChanged">
    </ejs-pdfviewer>
</div>
<script>
    const userList = ['RIO', 'JOHN', 'MAXY', 'SHAI', 'SRI'];
    const currentUserName = userList[Math.floor(Math.random() * userList.length)];
    //REPLACE THIS WITH SERVICE URL CURRENTLY RUNNING
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

    async function loadPDFBlobIntoViewer(pdfBlob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const arrayBuffer = reader.result;
                    const uint8Array = new Uint8Array(arrayBuffer);
                    const blobUrl = URL.createObjectURL(pdfBlob);
                    if (appState.pdfViewer) {
                        appState.pdfViewer.load(blobUrl, '');
                        resolve();
                    } else {
                        reject(new Error('Viewer not available'));
                    }
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = () => reject(new Error('Failed to read blob'));
            reader.readAsArrayBuffer(pdfBlob);
        });
    }

    async function fetchAndLoadPDFDocument() {
        const queryParams = new URLSearchParams({ roomName: appState.roomNameRef || 'default' });
        const response = await fetch(`${SERVICE_URL}api/CollaborativeEditing/GetPDFDocument?${queryParams.toString()}`, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const result = await response.json();
        if (!result.success) throw new Error(`Server error: ${result.error}`);

        const binaryString = atob(result.content);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        const pdfBlob = new Blob([bytes], { type: 'application/pdf' });
        await loadPDFBlobIntoViewer(pdfBlob);
    }

    function documentLoad() {
        appState.adapter.updatePendingOperations();
    }

    async function handleResourcesLoaded() {
        if (appState.isDocumentLoaded) return;
        appState.isDocumentLoaded = true;
        appState.collaborationStatus = 'loading';

        try {
            const adapter = new PdfViewerAdapter(appState.pdfViewer, SERVICE_URL, appState.currentUser);
            appState.adapter = adapter;

            const client = new ej.collaborator.CollaborationClient(adapter, {
                serviceUrl: SERVICE_URL,
                // USE BELOW IF YOU USE NODE JS WEB SERVICE
                //connectionType: 'websocket',
                // USE BELOW IF YOU USE CORE WEB SERVICE
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

            const roomName = await adapter.loadFromServer();
            appState.roomNameRef = roomName;
            appState.roomName = roomName;

            await client.joinRoomAsync(roomName);
            await fetchAndLoadPDFDocument();

            appState.collaborationStatus = 'connected';
        } catch (error) {
            console.error('[App] Error during collaboration initialization:', error);
            appState.collaborationStatus = 'error';
        }
    }

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
                const actionDetails = typeof args.organizePageActions === 'string'
                    ? JSON.parse(args.organizePageActions)
                    : '';

                if (args.savedDocument === null && actionDetails.action === 'applyCancelled') {
                    operations = [{
                        type: 'removeUser',
                        currentUser: appState.currentUser
                    }];
                }
                else if (args.savedDocument !== null && actionDetails.length > 0 && actionDetails[0].action !== 'applyCancelled') {
                    operations = [{
                        action: 'pageOrganizerUpdate',
                        data: args.organizePageActions,
                        type: 'pageOrganizer'
                    }];
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
        try {
            const pdfViewerElement = document.getElementById('pdfviewer');
            if (pdfViewerElement && pdfViewerElement.ej2_instances) {
                appState.pdfViewer = pdfViewerElement.ej2_instances[0];
            } else {
                throw new Error('PDF Viewer element not found or not initialized');
            }
        } catch (error) {
            console.error('[App] Error initializing:', error);
            appState.collaborationStatus = 'error';
        }
    });
</script>
<script src="~/pdfViewerAdapter.js" type="text/javascript"></script>
```

## Server-side integration

### Step 1: Create the server project

Create a new ASP.NET Core Web API project named `PdfViewerCollaborativeEditingServer` using the .NET CLI, then add the NuGet packages required for collaborative editing with the PDF Viewer:

{% tabs %}
{% highlight bash tabtitle="CLI" %}

dotnet new webapi -n PdfViewerCollaborativeEditingServer
cd PdfViewerCollaborativeEditingServer
dotnet add package Syncfusion.Collaborator.Server.AspNet.Core --version 35.1.37
dotnet add package Syncfusion.Pdf.Net.Core --version 35.1.37
dotnet add package Newtonsoft.Json --version 13.0.3
dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson --version 6.0.0

{% endhighlight %}
{% endtabs %}

### Step 2: Configure Redis

Add the Redis connection string to `appsettings.json`. Redis stores the PDF Viewer operations, room state, and broadcasts:

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

For a secured Redis instance such as Azure Cache for Redis, use the `<host>:<port>,ssl=true,password=<password>` format.

### Step 3: Configure the server in `Program.cs`

Use `AddNewtonsoftJson()` so MVC binds the loosely-typed collaborative editing payloads correctly. The default `System.Text.Json` pipeline cannot convert the action JSON to `JToken`, which results in the automatic model-state validation error "The request field is required." on `UpdateAction`.

```csharp
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Serialization;
using Syncfusion.Collaboration.Core.Extensions;
using Syncfusion.Collaboration.Core.Interfaces;
using PdfViewerCollaborativeEditingServer.Adapter;
using PdfViewerCollaborativeEditingServer.Services;

var builder = WebApplication.CreateBuilder(args);

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

var redisConnectionString = builder.Configuration.GetConnectionString("Redis")
    ?? "localhost:6379";

builder.Services.AddCollaborationServer(options =>
{
    options.ConnectionString = redisConnectionString;
    options.ConnectionType = CollaborationConnectionType.SignalR;
    options.SaveThreshold = 2;
});

builder.Services.AddSingleton<IPdfStorageService, PdfStorageService>();
builder.Services.AddSingleton<ICollaborationAdapter, PdfViewerCollaborationAdapter>();

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();
app.UseCors("AllowAllOrigins");
app.UseWebSockets();

app.MapControllers();
app.MapCollaborationServer();

app.Run();
```

By default, the ASP.NET Core Collaboration Server uses SignalR. To use the WebSocket transport instead, set `options.ConnectionType = CollaborationConnectionType.WebSocket`, keep `app.UseWebSockets()` enabled, and map the server with `app.MapCollaborationServer()`.

### Step 4: Add the PDF Viewer server adapter

Create the `Adapter` folder and add `PdfViewerCollaborationAdapter.cs`. This adapter is the control-specific translator on the server side. It implements `ICollaborationAdapter`, converts PDF Viewer actions to and from the common `CollaborationAction`, replays the stored operations against the PDF document using Syncfusion PDF Library, and queues the save requests for background processing.

```csharp
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
        ILogger<PdfViewerCollaborationAdapter>? logger = null,
        Dictionary<string, object?>? options = null)
    {
        _backgroundTaskQueue = backgroundTaskQueue;
        _serviceScopeFactory = serviceScopeFactory;
        _pdfStorageService = pdfStorageService;
        _logger = logger;

        options = options ?? new Dictionary<string, object?>();

        this.SaveTaskQueue = _backgroundTaskQueue ??
            (options.ContainsKey("saveTaskQueue") ? options["saveTaskQueue"] : null);
        this.Transport = options.ContainsKey("transport") ? (IActiveTransport?)options["transport"] : null;
        this.StorageService = _pdfStorageService ??
            (options.ContainsKey("storageService") ? options["storageService"] : null);
    }

    public CollaborationAction MapControlToGenericAction(object controlAction)
    {
        if (controlAction == null)
        {
            throw new ArgumentException("Expected UpdateActionRequest or JObject, got null");
        }

        string roomName;
        string connectionId;
        string currentUser;
        int version;
        string dataJson;

        switch (controlAction)
        {
            case PdfViewerCollaborativeEditingServer.Models.UpdateActionRequest typedRequest:
                roomName = typedRequest.RoomName ?? "";
                connectionId = typedRequest.ConnectionId ?? "";
                currentUser = typedRequest.UserName ?? "";
                version = typedRequest.CurrentVersion ?? 0;
                dataJson = JsonConvert.SerializeObject(typedRequest);
                break;

            case JObject jObject:
                roomName = jObject["roomName"]?.ToString() ?? "";
                connectionId = jObject["connectionId"]?.ToString() ?? "";
                currentUser = jObject["userName"]?.ToString() ?? "";
                version = jObject["currentVersion"]?.Value<int>() ?? 0;
                dataJson = JsonConvert.SerializeObject(jObject);
                break;

            default:
                throw new ArgumentException($"Expected UpdateActionRequest or JObject (unified request), got {controlAction.GetType().Name}");
        }

        return new CollaborationAction
        {
            RoomName = roomName,
            ConnectionId = connectionId,
            CurrentUser = currentUser,
            Version = version,
            Data = dataJson
        };
    }

    public object MapGenericToControlAction(CollaborationAction action)
    {
        if (string.IsNullOrEmpty(action.Data))
        {
            return new UpdateActionRequest();
        }

        return JsonConvert.DeserializeObject<UpdateActionRequest>(action.Data)
            ?? new UpdateActionRequest();
    }

    public void TransformOperations(List<CollaborationAction> actions)
    {
        // No operation transformation is required for the PDF Viewer.
    }

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

    public async Task SaveAndBroadcastChangesAsync(IActiveTransport transport, CollaborationAction action)
    {
        if (action == null || string.IsNullOrEmpty(action.RoomName))
        {
            return;
        }

        await _backgroundTaskQueue?.QueueTaskAsync(async () =>
        {
            try
            {
                var masterPdf = await _pdfStorageService.GetPdfAsync("document.pdf", action.RoomName);
                if (masterPdf == null || string.IsNullOrEmpty(masterPdf.Content))
                {
                    _logger?.LogWarning($"[Adapter] No master PDF available for room {action.RoomName}");
                    return;
                }

                var operations = new List<CollaborationAction> { action };
                var replayedPdf = await ReplayOperationsAndUpdateDocumentAsync(masterPdf.Content, operations, action.RoomName);

                await _pdfStorageService.StorePdfAsync(replayedPdf, "document.pdf", action.RoomName);
                _logger?.LogInformation($"[Adapter] Saved and broadcast changes for room {action.RoomName}");

                using (var scope = _serviceScopeFactory?.CreateScope())
                {
                    var actionService = scope?.ServiceProvider.GetService<IActionService>();
                    if (actionService != null)
                    {
                        await actionService.RemoveOperationsAsync(action.RoomName);
                    }
                }
            }
            catch (Exception ex)
            {
                _logger?.LogError($"[Adapter] Save error: {ex.Message}");
            }
        });
    }

    private List<CollaborationAction> ExtractValidOperations(List<CollaborationAction> operations)
    {
        return operations
            .Where(o => !string.IsNullOrEmpty(o.Data))
            .OrderBy(o => o.Version)
            .ToList();
    }

    private async Task ApplyOperationToDocumentAsync(PdfLoadedDocument document, CollaborationAction operation)
    {
        await Task.CompletedTask;
    }
}
```

### Step 5: Add the request models

Create the `Models` folder and add `UpdateActionRequest.cs`. The strongly-typed models mirror the Node.js collaborative editing broadcast payload shape exactly so that the `.NET` broadcast matches the Node.js broadcast.

```csharp
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace PdfViewerCollaborativeEditingServer.Models
{
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

    public class PageOrganizerEntry
    {
        [JsonProperty("action")]
        public string? Action { get; set; }

        [JsonProperty("originalPageIndex")]
        public int? OriginalPageIndex { get; set; }

        [JsonProperty("targetIndex")]
        public int? TargetIndex { get; set; }

        [JsonProperty("rotateAngle")]
        public int? RotateAngle { get; set; }

        [JsonProperty("sourceOriginalPageIndex")]
        public int? SourceOriginalPageIndex { get; set; }

        [JsonProperty("pageSize")]
        public PageSize? PageSize { get; set; }

        [Newtonsoft.Json.JsonExtensionData]
        public IDictionary<string, object>? ExtensionData { get; set; }
    }

    public class PageSize
    {
        [JsonProperty("width")]
        public double? Width { get; set; }

        [JsonProperty("height")]
        public double? Height { get; set; }

        [Newtonsoft.Json.JsonExtensionData]
        public IDictionary<string, object>? ExtensionData { get; set; }
    }
}
```

### Step 6: Add the PDF storage service

Create the `Services` folder and add `IPdfStorageService.cs` and `PdfStorageService.cs`. The service persists the master PDF for each room and falls back to the default PDF when no room-specific file exists.

```csharp
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
        public string? Content { get; set; }
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
}
```

```csharp
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
            try
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
            catch (Exception ex)
            {
                _logger?.LogError($"[PdfStorage] Error: {ex.Message}");
                return new PdfStorageResult { Success = false, Error = $"Failed to retrieve PDF: {ex.Message}" };
            }
        }

        public async Task<StorageResult> StorePdfAsync(byte[] pdfBuffer, string fileName = "document.pdf", string roomName = "default")
        {
            try
            {
                string resolvedFileName = fileName ?? "document.pdf";
                string resolvedRoomName = roomName ?? "default";

                string roomStoragePath = Path.Combine(_baseStoragePath, resolvedRoomName);
                EnsureDirectoryExists(roomStoragePath);

                string filePath = Path.Combine(roomStoragePath, resolvedFileName);
                await File.WriteAllBytesAsync(filePath, pdfBuffer);

                return new StorageResult { Success = true, FilePath = filePath, Size = pdfBuffer.Length };
            }
            catch (Exception ex)
            {
                _logger?.LogError($"[PdfStorage] Storage error: {ex.Message}");
                return new StorageResult { Success = false, Error = $"Failed to store PDF: {ex.Message}" };
            }
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
```

### Step 7: Add the collaborative editing controller

Create the `Controllers` folder and add `CollaborativeEditingController.cs`. The controller depends on the shared `IActionService`, the control-specific `ICollaborationAdapter`, the `IActiveTransport` for broadcasting, and the `IPdfStorageService` for the PDF content.

```csharp
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Syncfusion.Collaboration.Core.Interfaces;
using Syncfusion.Collaboration.Core.Models;
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
                    actionDescription = $"Annotation {annotationData.Action ?? "update"}";
                    break;

                case "formfield":
                    var formFieldData = ToTypedModel<FormFieldData>(request.Data);
                    if (formFieldData == null)
                    {
                        return BadRequest(new { error = "Data is required for formField type" });
                    }
                    typedData = formFieldData;
                    actionDescription = $"FormField {formFieldData.Action ?? "update"}";
                    break;

                case "formfieldaction":
                    var formFieldActionData = ToTypedModel<FormFieldActionData>(request.Data);
                    if (formFieldActionData == null || string.IsNullOrEmpty(formFieldActionData.Changes))
                    {
                        return BadRequest(new { error = "Data.changes is required for formFieldAction type" });
                    }
                    typedData = formFieldActionData;
                    actionDescription = $"FormFieldAction {formFieldActionData.Action ?? "update"}";
                    break;

                case "pageorganizer":
                    var pageOrganizerData = ExtractPageOrganizerEntries(request.Data);
                    if (pageOrganizerData == null)
                    {
                        return BadRequest(new { error = "Data is required for pageOrganizer type" });
                    }
                    typedData = pageOrganizerData;
                    actionDescription = "PageOrganizer update";
                    break;

                default:
                    return BadRequest(new { error = $"Unknown action type: {request.Type}" });
            }

            var envelope = BuildEnvelope(request, typedData);

            var genericAction = _adapter.MapControlToGenericAction(envelope);
            await _actionService.AddOperationAsync(genericAction);

            await _transport.BroadcastToRoomAsync(request.RoomName, envelope);

            _logger.LogInformation($"[UpdateAction] Room: {request.RoomName}, {actionDescription}");
            return Ok(new { success = true, version = genericAction.Version });
        }
        catch (Exception ex)
        {
            _logger.LogError($"[UpdateAction] Error: {ex.Message}");
            return StatusCode(500, new { error = "Failed to update action", details = ex.Message });
        }
    }

    [HttpGet("GetPDFDocument")]
    public async Task<IActionResult> GetPDFDocument([FromQuery] string roomName = "default", [FromQuery] string fileName = "document.pdf")
    {
        try
        {
            var result = await _pdfStorageService.GetPdfAsync(fileName, roomName);
            if (!result.Success)
            {
                return BadRequest(new { error = result.Error ?? "Unknown error" });
            }

            return Ok(new
            {
                success = true,
                fileName = result.FileName,
                roomName = result.RoomName,
                content = result.Content,
                contentLength = result.ContentLength,
                isDefault = result.IsDefault,
                message = result.Message
            });
        }
        catch (Exception ex)
        {
            _logger.LogError($"[GetPDFDocument] Error: {ex.Message}");
            return StatusCode(500, new { error = "Failed to retrieve PDF document", details = ex.Message });
        }
    }

    private static T? ToTypedModel<T>(object? data) where T : class
    {
        if (data == null) return null;
        if (data is T typed) return typed;

        var serialized = JsonConvert.SerializeObject(data);
        return JsonConvert.DeserializeObject<T>(serialized);
    }

    private static PageOrganizerData? ExtractPageOrganizerEntries(object? data)
    {
        if (data == null) return null;

        if (data is PageOrganizerData existing) return existing;

        if (data is JArray jArray)
        {
            return new PageOrganizerData
            {
                Data = jArray.ToObject<List<PageOrganizerEntry>>()
            };
        }

        if (data is JObject jObject)
        {
            if (jObject["data"] is JArray inner)
            {
                return new PageOrganizerData
                {
                    Data = inner.ToObject<List<PageOrganizerEntry>>()
                };
            }

            return new PageOrganizerData
            {
                Data = jObject.ToObject<List<PageOrganizerEntry>>()
            };
        }

        if (data is string str)
        {
            var parsed = JToken.Parse(str);
            return ExtractPageOrganizerEntries(parsed);
        }

        var serialized = JsonConvert.SerializeObject(data);
        var token = JToken.Parse(serialized);
        return ExtractPageOrganizerEntries(token);
    }

    private static UpdateActionRequest BuildEnvelope(UpdateActionRequest request, object typedData)
    {
        return new UpdateActionRequest
        {
            RoomName = request.RoomName,
            ConnectionId = request.ConnectionId,
            UserName = request.UserName,
            Type = request.Type,
            CurrentVersion = request.CurrentVersion,
            Data = typedData
        };
    }
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
```

## Run and test the collaboration

### Step 1: Run the ASP.NET Core server

```bash
dotnet run --urls http://localhost:5001
```

### Step 2: Run the ASP.NET Core client

```bash
dotnet run
```

The Razor Pages application serves on `http://localhost:5000` (or the port configured in `Properties/launchSettings.json`).

### Step 3: Open multiple browser tabs

Open the application URL in two or more browser tabs. To force a specific room, add the room ID to the URL:

```
http://localhost:5000?id=room-1234
```

The client extracts the `id` parameter from the URL and uses it as the room name. Without it, the client generates a random room ID. Share the same `id` value across tabs so they all join the same room.

## Notes

- The Collaboration Server uses Redis to store and distribute the PDF Viewer actions. Ensure the Redis configuration is valid before starting the server.
- The `SaveThreshold` value controls how often the pending actions are applied to the source document during the background save.
- The clients filter the broadcast actions by `connectionId` to ignore their own updates. The Page Organizer uses the last-write-wins strategy.
- For a hosted deployment, configure the client with the hosted Collaboration Server URL and use a shared, reachable Redis instance. All users must access the same client deployment and preserve the same `?id=<room-id>` value to remain in one room.
- Do not use `localhost` in a hosted client configuration because it refers to each individual user's computer.

N> [View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/Collaborative%20Editing)

## See Also

- [Collaborative editing with Node.js](./using-redis-cache-nodejs)
- [Collaboration Client](../../../../Collaborator/collaboration-client)
- [Collaboration Server](../../../../Collaborator/collaboration-server)
- [Getting Started with the ASP.NET Core Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-core)
