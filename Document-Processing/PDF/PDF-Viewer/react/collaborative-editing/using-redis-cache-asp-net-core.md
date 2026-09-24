---
layout: post
title: Collaborative Editing in React PDF Viewer with ASP.NET Core | Syncfusion
description: Learn how to implement React PDF Viewer collaborative editing with the Syncfusion Collaborator client and ASP.NET Core server packages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in React PDF Viewer with ASP.NET Core

This topic explains how to connect the React PDF Viewer to the ASP.NET Core Collaboration Server. The common Collaborator server manages SignalR, Redis, operation synchronization, and save processing. The application only supplies the PDF Viewer adapter and document endpoints.

## Prerequisites

- A React PDF Viewer application.
- An ASP.NET Core web application.
- A Redis instance.

## Client-side integration

### 1. Install the client package

```bash
npm install @syncfusion/ej2-collaborator
```

### 2. Add the PDF Viewer adapter

Create `PdfViewerAdapter.ts` in the React application. The adapter implements `ICollaborationProvider`, loads the PDF through the application's document endpoint, sends local PDF Viewer actions, and applies actions received from other users.

The adapter must provide the following behavior. The `loadFromServer` method posts the room and user details to `ImportFile`; the PDF Viewer change handler sends operations to `UpdateAction`; and `applyRemoteAction` forwards remote payloads to the PDF Viewer collaborative editing handler.

```ts
import { PdfViewer, CollaborativeEditingHandler } from '@syncfusion/ej2-react-pdfviewer';
import { ICollaborationActionData, ICollaborationProvider } from '@syncfusion/ej2-collaborator';

export class PdfViewerAdapter implements ICollaborationProvider {
    private collaborativeEditingHandler: CollaborativeEditingHandler;
    private currentUser: string;
    private pendingOperations: any[] = [];

    public constructor(private viewer: PdfViewer, private serviceUrl: string, currentUser: string) {
        this.currentUser = currentUser;
        this.collaborativeEditingHandler = new CollaborativeEditingHandler(viewer, currentUser);
    }

    public async loadFromServer(fileName = 'document.pdf'): Promise<string> {
        const roomName = new URLSearchParams(window.location.search).get('id')
            ?? Math.random().toString(32).slice(2);
        const response = await fetch(`${this.serviceUrl}api/CollaborativeEditing/ImportFile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roomName, fileName, currentUser: this.currentUser })
        });
        if (!response.ok) {
            throw new Error(`Failed to load collaboration room: ${response.statusText}`);
        }
        const state = await response.json();
        this.collaborativeEditingHandler.updateRoomInfo(
            roomName,
            state.version ?? 0,
            `${this.serviceUrl}api/CollaborativeEditing/`
        );
        this.pendingOperations = state.operations || [];
        for (const operation of this.pendingOperations) {
            this.collaborativeEditingHandler.applyRemoteAction(operation.type, operation);
        }
        return roomName;
    }

    public applyRemoteAction(action: string, data: ICollaborationActionData): void {
        this.collaborativeEditingHandler.applyRemoteAction(action, data.payload);
    }

    public sendActionToServer(operations: unknown[]): Promise<void> {
        return this.collaborativeEditingHandler.sendActionToServer(operations);
    }
}
```

The adapter's `loadFromServer` implementation is application-specific because it selects the source PDF and exposes the document endpoint. Use the same adapter pattern as the [Node.js PDF Viewer adapter](../../../../Collaborator/getting-started/getting-started-with-node).

### 3. Initialize the Collaboration Client

Enable collaborative editing, create the adapter, and join the room after loading the document:

```ts
import React, { useRef } from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
    BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch,
    FormFields, FormDesigner, PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { CollaborationClient, UserInfo } from '@syncfusion/ej2-collaborator';
import { PdfViewerAdapter } from './PdfViewerAdapter';

const serviceUrl = 'https://localhost:5001/';
export default function App() {
    const viewerRef = useRef<any>(null);
    const adapterRef = useRef<PdfViewerAdapter | null>(null);
    const currentUser = 'John';

    const resourcesLoaded = async () => {
        const adapter = new PdfViewerAdapter(viewerRef.current, serviceUrl, currentUser);
        adapterRef.current = adapter;
        const client = new CollaborationClient(adapter, {
            serviceUrl,
            connectionType: 'signalr',
            currentUser,
            onUserJoined: (user: UserInfo) => console.log('User joined', user),
            onUserLeft: (user: UserInfo) => console.log('User left', user)
        });
        const roomName = await adapter.loadFromServer('Giant Panda.pdf');
        await client.joinRoomAsync(roomName);
        await loadCurrentPdf(viewerRef.current, roomName);
    };

    const documentChanged = (args: any) => {
        const operation = getPdfViewerOperation(args);
        if (operation) void adapterRef.current?.sendActionToServer([operation]);
    };

    return <PdfViewerComponent ref={viewerRef} enableCollaborativeEditing={true}
        resourcesLoaded={resourcesLoaded} documentChanged={documentChanged}>
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
            BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields,
            FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>;
}

function getPdfViewerOperation(args: any): any | null {
    if ('annotationId' in args && args.action) return { action: args.action, annotation: args.annotationId, type: 'annotation', isRedacted: args.isRedacted };
    if ('formField' in args && !('fieldName' in args)) return { action: args.action, formField: args.formField, type: 'formField' };
    if ('fieldName' in args) return { action: 'formFieldUpdate', data: args, type: 'formField' };
    if ('organizePageActions' in args && args.savedDocument !== null) return { action: 'pageOrganizerUpdate', data: args.organizePageActions, type: 'pageOrganizer' };
    return null;
}

async function loadCurrentPdf(viewer: any, roomName: string): Promise<void> {
    const response = await fetch(`${serviceUrl}api/CollaborativeEditing/GetPDFDocument?roomName=${encodeURIComponent(roomName)}`);
    const result = await response.json();
    const binary = atob(result.content);
    viewer.load(Uint8Array.from(binary, character => character.charCodeAt(0)), '');
}
```

`getPdfViewerOperation` should map the PDF Viewer event to one of the supported action types: `annotation`, `formField`, `formFieldAction`, or `pageOrganizer`. The [Node.js example](./using-redis-cache-nodejs) shows the event mapping used by the running sample.

## Server-side integration

### 1. Install the Collaboration Server package

```bash
dotnet add package Syncfusion.Collaborator.Server.AspNet.Core
```

Install the PDF Viewer server package required by the application's document and save endpoints as described in the [PDF Viewer ASP.NET Core getting started](../getting-started) topic.

### 2. Configure Redis and the Collaboration Server

Add the Redis connection string to `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "Redis": "<your-redis-connection-string>"
  }
}
```

Register the Collaboration Server and the PDF Viewer server adapter in `Program.cs`:

```csharp
using Syncfusion.Collaboration.Core.Extensions;
using Syncfusion.Collaboration.Core.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCollaborationServer(options =>
{
    options.ConnectionString = builder.Configuration.GetConnectionString("Redis")
        ?? "localhost:6379";
});

builder.Services.AddSingleton<ICollaborationAdapter, PdfViewerCollaborationAdapter>();
builder.Services.AddControllers();

var app = builder.Build();
app.UseStaticFiles();
app.UseRouting();
app.MapControllers();
app.MapCollaborationServer();
app.Run();
```

SignalR is the default transport. To use WebSocket, set `ConnectionType` to `CollaborationConnectionType.WebSocket` and call `app.UseWebSockets()` before `app.MapCollaborationServer()`.

### 3. Add the PDF Viewer server adapter

Create `PdfViewerCollaborationAdapter.cs`. This adapter maps PDF Viewer actions to the common collaboration model, transforms PDF Viewer operations, and persists saved PDF content. Implement the PDF Viewer-specific mapping and save behavior in this file:

```csharp
using Syncfusion.Collaboration.Core.Interfaces;
using Syncfusion.Collaboration.Core.Models;

public sealed class PdfViewerCollaborationAdapter : ICollaborationAdapter
{
    public CollaborationAction MapControlToGenericAction(object controlAction)
    {
        // Map the PDF Viewer room, connection, version, and operations.
        throw new NotImplementedException();
    }

    public object MapGenericToControlAction(CollaborationAction action)
    {
        // Convert the common action back to the PDF Viewer action shape.
        throw new NotImplementedException();
    }

    public List<CollaborationAction> TransformOperations(List<CollaborationAction> actions)
    {
        // Apply the PDF Viewer operation transformation rules.
        throw new NotImplementedException();
    }

    public Task SaveOperationsAsync(object actions, string roomName, bool partialSave)
    {
        // Queue the merged PDF content for persistence.
        throw new NotImplementedException();
    }

    public Task ProcessSaveRequestAsync(SaveRequest request, CancellationToken cancellationToken)
    {
        // Load, update, and save the source PDF.
        throw new NotImplementedException();
    }
}
```

The exact mapping and save implementation depends on the application's PDF storage location and document API. Keep those methods in the adapter; the Collaboration Server supplies the common Redis, transport, session, and save-worker services.

### 4. Expose PDF Viewer collaboration endpoints

Add ASP.NET Core equivalents of the following endpoints under `/api/CollaborativeEditing`:

- `POST /ImportFile` - Validate `roomName`, retrieve pending operations through the Collaboration Server action service, and return `{ roomName, version, operations }`.
- `POST /UpdateAction` - Validate `roomName`, `type`, and type-specific data, map the request through `PdfViewerCollaborationAdapter`, store it with the action service, and broadcast it to the room.
- `GET /GetPDFDocument` - Return the room's current PDF as `{ success, fileName, roomName, content, contentLength, isDefault }`, where `content` is Base64 encoded.

The client adapter calls `ImportFile` before joining the room and calls `GetPDFDocument` to load the PDF. The Collaboration Server handles collaboration actions after the client joins.

## See Also

- [Collaborative editing with Node.js](./using-redis-cache-nodejs)
- [Getting Started with ASP.NET Core Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-core)