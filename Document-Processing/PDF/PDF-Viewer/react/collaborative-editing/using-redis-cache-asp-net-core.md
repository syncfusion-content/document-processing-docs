---
layout: post
title: Collaborative Editing in Syncfusion React PDF Viewer with ASP.NET Core
description: Learn how to implement React PDF Viewer collaborative editing with the Syncfusion Collaborator client and ASP.NET Core server packages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing in React PDF Viewer with ASP.NET Core

This topic explains how to connect the React PDF Viewer to the ASP.NET Core Collaboration Server. The server manages real-time communication, Redis, operation synchronization, and save processing. The React application supplies the PDF Viewer adapter and document endpoints.

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

Create `pdfViewerAdapter.ts` with the following client adapter:

```ts
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

    public async loadFromServer(fileName?: string): Promise<string> {
        this.isDocumentLoaded = false;
        this.fileName = fileName || 'document.pdf';
        const roomName: string = this.getRoomName();
        this.currentRoomName = roomName;
        const response = await fetch(`${this.serviceUrl}api/CollaborativeEditing/ImportFile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roomName, fileName: this.fileName, currentUser: this.currentUser })
        });
        if (!response.ok) throw new Error(`Failed to join collaboration room: ${response.statusText}`);
        await this.open(await response.text(), roomName);
        return roomName;
    }

    public async open(responseText: string, roomName: string): Promise<void> {
        const data: any = JSON.parse(responseText);
        const version = data.version || data.currentVersion || 0;
        this.collaborativeEditingHandler.updateRoomInfo(roomName, version, `${this.serviceUrl}api/CollaborativeEditing/`);
        this.pendingOperations = data.operations;
        if (data.operations && data.operations.length > 0) {
            for (const op of data.operations) {
                this.collaborativeEditingHandler.applyRemoteAction(op.type, op);
            }
        }
        this.isDocumentLoaded = true;
    }

    public async sendActionToServer(operations: any[]): Promise<void> {
        if (!operations || operations.length === 0) {
            console.warn('[PdfViewerAdapter] No operations to send');
            return;
        }
        await this.collaborativeEditingHandler.sendActionToServer(operations);
    }

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
```

### 3. Initialize the React PDF Viewer

Use the supplied JavaScript React life cycle. For ASP.NET Core, the only client configuration difference is `SERVICE_URL` and the real-time connection type.

```jsx
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
    PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';
import React, { useRef, useState } from 'react';
import { PdfViewerAdapter } from './pdfViewerAdapter';

const SERVICE_URL = 'https://localhost:5001/';
const currentUserName = 'JOHN';

export default function App() {
    const viewerRef = useRef(null);
    const adapterRef = useRef(null);
    const roomNameRef = useRef('');
    const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);

    const loadPdf = async () => {
        const response = await fetch(`${SERVICE_URL}api/CollaborativeEditing/GetPDFDocument?roomName=${encodeURIComponent(roomNameRef.current)}`);
        const result = await response.json();
        const binary = atob(result.content);
        const bytes = new Uint8Array(binary.length);
        for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
        viewerRef.current.load(bytes, '');
    };

    const handleResourcesLoaded = async () => {
        if (isDocumentLoaded) return;
        setIsDocumentLoaded(true);
        const adapter = new PdfViewerAdapter(viewerRef.current, SERVICE_URL, currentUserName);
        adapterRef.current = adapter;
        const client = new CollaborationClient(adapter, {
            serviceUrl: SERVICE_URL,
            connectionType: 'signalr',
            currentUser: currentUserName,
            onUserJoined: user => console.log('User joined', user),
            onUserLeft: user => console.log('User left', user)
        });
        roomNameRef.current = await adapter.loadFromServer();
        await client.joinRoomAsync(roomNameRef.current);
        await loadPdf();
    };

    const handleDocumentChanged = args => {
        let operations = [];
        if (args && 'annotationId' in args) {
            operations = args.action
                ? [{ action: args.action, annotation: args.annotationId, type: 'annotation', isRedacted: args.isRedacted }]
                : [{ type: 'removeUser', currentUser: currentUserName }];
        } else if (args && 'formField' in args && !('fieldName' in args)) {
            operations = [{ action: args.action, formField: args.formField, type: 'formField' }];
        } else if (args && 'fieldName' in args) {
            operations = [{ action: 'formFieldUpdate', data: args, type: 'formField' }];
        } else if (args && 'organizePageActions' in args) {
            const details = typeof args.organizePageActions === 'string' ? JSON.parse(args.organizePageActions) : '';
            if (args.savedDocument === null && details.action === 'applyCancelled') {
                operations = [{ type: 'removeUser', currentUser: currentUserName }];
            } else if (args.savedDocument !== null && details.length > 0 && details[0].action !== 'applyCancelled') {
                operations = [{ action: 'pageOrganizerUpdate', data: args.organizePageActions, type: 'pageOrganizer' }];
            }
        }
        if (operations.length > 0) adapterRef.current.sendActionToServer(operations);
    };

    return <PdfViewerComponent ref={viewerRef} enableCollaborativeEditing={true}
        resourcesLoaded={handleResourcesLoaded} documentChanged={handleDocumentChanged}>
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
            BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields,
            FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>;
}
```

The `documentChanged` handler sends annotation, form field value, form field designer, page organizer, and cancellation operations. This complete action mapping is required for the collaboration handler to synchronize all supported PDF Viewer interactions.

## Server-side integration

### 1. Install and configure the Collaboration Server

```bash
dotnet add package Syncfusion.Collaborator.Server.AspNet.Core
```

Add the Redis connection to `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "Redis": "<your-redis-connection-string>"
  }
}
```

Register the server in `Program.cs`:

```csharp
using Syncfusion.Collaboration.Core.Extensions;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCollaborationServer(options =>
{
    options.ConnectionString = builder.Configuration.GetConnectionString("Redis") ?? "localhost:6379";
});
builder.Services.AddControllers();

var app = builder.Build();
app.UseStaticFiles();
app.UseRouting();
app.MapControllers();
app.MapCollaborationServer();
app.Run();
```

The default transport uses the real-time connection. For WebSocket, set `ConnectionType` to `CollaborationConnectionType.WebSocket` and call `app.UseWebSockets()` before `app.MapCollaborationServer()`.

### 2. Add the PDF Viewer server adapter and routes

Create a PDF Viewer collaboration adapter implementing the ASP.NET Core `ICollaborationAdapter` contract. It must map the complete PDF Viewer request envelope, preserve snapshot operations, transform them using the PDF Viewer rules, and process save requests against the source PDF.

Expose these routes under `/api/CollaborativeEditing`:

- `POST /ImportFile` returns the room name, current version, and pending operations.
- `POST /UpdateAction` validates `annotation`, `formField`, `formFieldAction`, and `pageOrganizer` payloads, stores the request through the action service, and broadcasts the clean request.
- `GET /GetPDFDocument` returns `{ success, fileName, roomName, content, contentLength, isDefault }`, with `content` encoded as Base64.

The ASP.NET Core adapter should follow the same request envelope and replay rules as the supplied Node.js adapter. The client adapter calls `ImportFile`, joins the room, loads `GetPDFDocument`, and sends all `documentChanged` operations to `UpdateAction`.

## See Also

- [Collaborative editing overview](./overview)
- [Collaborative editing with Node.js](./using-redis-cache-nodejs)
- [Getting Started with ASP.NET Core Collaboration Server](../../../../Collaborator/getting-started/getting-started-with-core)
