---
layout: post
title: Suspend and Resume UI Refresh in React Spreadsheet | Syncfusion
description: Improve performance in Syncfusion React Spreadsheet by using suspendRefresh and resumeRefresh to group multiple updates and avoid repeated rendering.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Collaborative editing in React Spreadsheet using ASP.NET Core with Redis

The React Spreadsheet can be connected to the ASP.NET Core Collaboration Server to synchronize workbook actions among multiple users. SignalR is the default real-time transport, and Redis stores ordered collaboration actions and session information.

## Prerequisites

The following are required:

- A React application configured with the Syncfusion React Spreadsheet.
- .NET 8 or later for the ASP.NET Core service.
- A Redis instance accessible from the ASP.NET Core service.
- The `@syncfusion/ej2-collaborator` client package.
- The ASP.NET Core Collaboration Server and Spreadsheet server-side packages.

## SignalR

SignalR provides real-time, two-way communication between connected users and the collaboration service. It broadcasts workbook actions and user presence changes to all participants in the same room.

For multi-server deployments, SignalR can be scaled using Azure SignalR Service or a Redis backplane.

### Scale out SignalR using Azure SignalR Service

Install and configure the Azure SignalR package, and register the service in `Program.cs`.

```csharp
builder.Services
    .AddSignalR()
    .AddAzureSignalR(
        "<your-azure-signalr-service-connection-string>"
    );
```

### Scale out SignalR using Redis

Install the following NuGet package:

```powershell
Microsoft.AspNetCore.SignalR.StackExchangeRedis
```

Configure the Redis backplane in `Program.cs`:

```csharp
builder.Services
    .AddSignalR()
    .AddStackExchangeRedis(
        "<your-redis-connection-string>"
    );
```

## Redis

Redis temporarily stores collaboration actions, room versions, connected-user information, and other session-related data required by the Collaboration Server. Actions are maintained in order so that users joining an existing room can receive the latest workbook state and recover missed actions.

The Collaboration Server uses the configured save threshold to queue partial save operations. After actions are successfully processed, the associated Redis records are cleared according to the collaboration lifecycle.

Configure Redis capacity based on the expected number of active rooms, participants, action frequency, and workbook complexity.

## Collaborative editing architecture

Collaborative editing uses three main layers:

### Client

The React Spreadsheet:

- Captures supported workbook actions.
- Sends local actions to the collaboration service.
- Receives and applies remote actions.
- Displays connected users and their selections.
- Tracks the room and synchronized version.

### Real-time communication

The Collaboration Client:

- Connects through SignalR or WebSocket.
- Joins a room using a unique room name.
- Receives connection, user, and action events.
- Delivers collaboration events to the Spreadsheet adapter.

### Collaboration Server and Redis

The ASP.NET Core service:

- Manages rooms and connected users.
- Assigns versions to actions.
- Transforms concurrent Spreadsheet actions.
- Stores actions in Redis.
- Broadcasts actions to room participants.
- Processes queued save requests and clears processed Redis records.

## Integrate collaborative editing on the client

### Step 1: Install the Collaboration Client

Install the Collaborator package in the React application:

```bash
npm install @syncfusion/ej2-collaborator
```

Install the React Spreadsheet package if it is not already available:

```bash
npm install @syncfusion/ej2-react-spreadsheet
```

### Step 2: Create the Spreadsheet adapter

Create `SpreadsheetEditorAdapter.ts`. The adapter implements `ICollaborationProvider`, loads the workbook, initializes room information, sends local actions, and applies remote actions.

```ts
import {
    ICollaborationActionData,
    ICollaborationProvider
} from '@syncfusion/ej2-collaborator';
import {
    SpreadsheetComponent
} from '@syncfusion/ej2-react-spreadsheet';

export class SpreadsheetEditorAdapter
    implements ICollaborationProvider {
    public currentRoomName: string = '';

    public constructor(
        private spreadsheet: SpreadsheetComponent,
        private serviceUrl: string,
        private currentUser: string
    ) {
        this.serviceUrl = serviceUrl.endsWith('/')
            ? serviceUrl
            : serviceUrl + '/';
    }

    public async loadFromServer(
        fileName: string
    ): Promise<string> {
        const roomName: string =
            this.getRoomName();

        const response: Response = await fetch(
            this.serviceUrl +
            'api/CollaborativeEditing/ImportFile',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fileName,
                    roomName
                })
            }
        );

        if (!response.ok) {
            throw new Error(
                'Failed to load the workbook.'
            );
        }

        const responseText: string =
            await response.text();
        const data: any = JSON.parse(responseText);

        this.currentRoomName = roomName;

        this.spreadsheet
            .collaborativeEditingModule
            .updateRoomInfo(
                roomName,
                data.version,
                this.serviceUrl +
                'api/CollaborativeEditing/'
            );

        this.spreadsheet
            .collaborativeEditingModule
            .setLocalUser(this.currentUser);

        this.spreadsheet.openFromJson({
            file: data.sfdt
        });

        return roomName;
    }

    public sendActionToServer(action: any): void {
        if (!action) {
            return;
        }

        this.spreadsheet
            .collaborativeEditingModule
            .sendActionToServer(action);
    }

    public applyRemoteAction(
        action: string,
        data: ICollaborationActionData
    ): void {
        if (!data) {
            return;
        }

        this.spreadsheet
            .collaborativeEditingModule
            .applyRemoteAction(
                action,
                data.payload
            );
    }

    private getRoomName(): string {
        const currentUrl: URL =
            new URL(window.location.href);

        let roomId: string = (
            currentUrl.searchParams.get('id') || ''
        ).trim();

        if (!roomId) {
            roomId = Math.random()
                .toString(32)
                .slice(2);

            currentUrl.searchParams.set(
                'id',
                roomId
            );

            window.history.replaceState(
                window.history.state,
                '',
                currentUrl.pathname +
                currentUrl.search +
                currentUrl.hash
            );
        }

        return roomId;
    }
}
```

### Step 3: Enable collaborative editing in the Spreadsheet

Inject `CollaborativeEditingHandler`, set `enableCollaborativeEditing` to `true`, create the adapter and Collaboration Client, load the workbook, and join the room.

```tsx
import {
    Inject,
    SpreadsheetComponent,
    CollaborativeEditingHandler
} from '@syncfusion/ej2-react-spreadsheet';
import {
    CollaborationClient
} from '@syncfusion/ej2-collaborator';
import {
    SpreadsheetEditorAdapter
} from './SpreadsheetEditorAdapter';
import { useRef } from 'react';

const serviceUrl: string =
    'https://localhost:5001/';
const currentUser: string = 'John';

export default function App() {
    const spreadsheetRef =
        useRef<SpreadsheetComponent>(null);
    const adapterRef =
        useRef<SpreadsheetEditorAdapter | null>(
            null
        );
    const clientRef =
        useRef<CollaborationClient | null>(null);

    const created = async (): Promise<void> => {
        const spreadsheet =
            spreadsheetRef.current;

        if (!spreadsheet) {
            return;
        }

        const adapter =
            new SpreadsheetEditorAdapter(
                spreadsheet,
                serviceUrl,
                currentUser
            );

        const client = new CollaborationClient(
            adapter,
            {
                serviceUrl,
                connectionType: 'signalr',
                currentUser
            }
        );

        adapterRef.current = adapter;
        clientRef.current = client;

        const roomName: string =
            await adapter.loadFromServer('Sample');

        await client.joinRoomAsync(roomName);
    };

    const actionComplete = (args: any): void => {
        adapterRef.current
            ?.sendActionToServer(args);
    };

    return (
        <SpreadsheetComponent
            ref={spreadsheetRef}
            enableCollaborativeEditing={true}
            created={created}
            actionComplete={actionComplete}
        >
            <Inject
                services={[
                    CollaborativeEditingHandler
                ]}
            />
        </SpreadsheetComponent>
    );
}
```

Users who open the application with the same `id` query parameter join the same collaboration room.

## Integrate the ASP.NET Core Collaboration Server

### Step 4: Install the required NuGet packages

Install the ASP.NET Core Collaboration Server package and the Spreadsheet server-side package:

```powershell
dotnet add package Syncfusion.Collaborator.Server.AspNet.Core
dotnet add package Syncfusion.EJ2.Spreadsheet.AspNet.Core
```

Install the Redis SignalR backplane package only when the application requires SignalR scale-out:

```powershell
dotnet add package Microsoft.AspNetCore.SignalR.StackExchangeRedis
```

### Step 5: Configure Redis

Add the Redis connection string to `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "Redis": "<your-redis-connection-string>"
  }
}
```

Store production credentials in a secure secret provider, such as environment variables, Azure App Service settings, or Azure Key Vault.

### Step 6: Register the Collaboration Server

Configure the Collaboration Server, register the Spreadsheet adapter, and map the collaboration endpoints in `Program.cs`:

```csharp
using Syncfusion.Collaboration.Core.Extensions;
using Syncfusion.Collaboration.Core.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCollaborationServer(options =>
{
    options.ConnectionString =
        builder.Configuration
            .GetConnectionString("Redis")
        ?? "localhost:6379";

    options.ConnectionType =
        CollaborationConnectionType.SignalR;
});

builder.Services.AddSingleton<
    ICollaborationAdapter,
    SpreadsheetCollaborativeAdaptor>();

builder.Services.AddSignalR();
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "AllowAllOrigins",
        policy => policy
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
    );
});

var app = builder.Build();

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("AllowAllOrigins");
app.UseAuthorization();

app.MapControllers();
app.MapCollaborationServer();

app.Run();
```

SignalR is the default transport. To use WebSocket, set `ConnectionType` to `CollaborationConnectionType.WebSocket`, call `app.UseWebSockets()`, and configure the client with `connectionType: 'websocket'`.

### Step 7: Add the Spreadsheet collaboration adapter

The server adapter translates Spreadsheet actions to and from the common collaboration model, transforms concurrent operations, and processes queued save requests.

```csharp
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Syncfusion.Collaboration.Core.Interfaces;
using Syncfusion.Collaboration.Core.Models;
using Syncfusion.Collaboration.Core.Services;
using Syncfusion.EJ2.Spreadsheet;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

public class SpreadsheetCollaborativeAdaptor :
    ICollaborationAdapter
{
    private readonly IServiceScopeFactory
        serviceScopeFactory;
    private readonly IBackgroundTaskQueue
        saveTaskQueue;

    public SpreadsheetCollaborativeAdaptor(
        IBackgroundTaskQueue saveTaskQueue,
        IServiceScopeFactory serviceScopeFactory)
    {
        this.saveTaskQueue = saveTaskQueue;
        this.serviceScopeFactory =
            serviceScopeFactory;
    }

    public CollaborationAction
        MapControlToGenericAction(
            object controlAction)
    {
        ActionInfo action =
            (ActionInfo)controlAction;

        return new CollaborationAction
        {
            RoomName = action.RoomName,
            ConnectionId = action.ConnectionId,
            CurrentUser = action.CurrentUser,
            Version = action.Version,
            ClientVersion = action.ClientVersion,
            IsTransformed = action.IsTransformed,
            Data = JsonConvert.SerializeObject(
                action.Operations
            )
        };
    }

    public object MapGenericToControlAction(
        CollaborationAction action)
    {
        return new ActionInfo
        {
            RoomName = action.RoomName,
            ConnectionId = action.ConnectionId,
            CurrentUser = action.CurrentUser,
            Version = action.Version,
            ClientVersion = action.ClientVersion,
            IsTransformed = action.IsTransformed,
            Operations =
                JsonConvert.DeserializeObject<
                    List<SpreadsheetOperation>>(
                        action.Data
                    )
        };
    }

    public void TransformOperations(
        List<CollaborationAction> actions)
    {
        if (actions == null ||
            actions.Count < 2)
        {
            return;
        }

        List<ActionInfo> spreadsheetActions =
            actions
                .Select(action =>
                    MapGenericToControlAction(
                        action
                    ) as ActionInfo
                )
                .Where(action => action != null)
                .ToList();

        if (CollaborativeEditingHandler
            .TransformOperations(
                spreadsheetActions
            ))
        {
            ActionInfo transformedAction =
                spreadsheetActions.Last();
            CollaborationAction targetAction =
                actions.Last();

            targetAction.Data =
                JsonConvert.SerializeObject(
                    transformedAction.Operations
                );
            targetAction.IsTransformed =
                transformedAction.IsTransformed;
        }
    }

    public async Task SaveOperationsAsync(
        List<CollaborationAction> actions,
        string roomName,
        bool partialSave)
    {
        SaveRequest request = new SaveRequest
        {
            Actions = actions,
            RoomName = roomName,
            PartialSave = partialSave
        };

        await saveTaskQueue
            .QueueBackgroundWorkItemAsync(
                request
            );
    }

    public async Task ProcessSaveRequestAsync(
        SaveRequest request,
        CancellationToken cancellationToken)
    {
        cancellationToken
            .ThrowIfCancellationRequested();

        // Load the source workbook, apply the actions in
        // request.Actions, and save the updated workbook
        // to the required storage location.

        using IServiceScope scope =
            serviceScopeFactory.CreateScope();

        IActionService actionService =
            scope.ServiceProvider
                .GetRequiredService<IActionService>();

        await actionService.ClearRecordsAsync(
            request.RoomName,
            request.PartialSave
        );
    }
}
```

Implement workbook loading and saving in `ProcessSaveRequestAsync` based on the application storage requirements. Clear the Redis records only after the workbook changes are saved successfully.

### Step 8: Add the collaborative editing controller

The controller provides the following required endpoints:

| Endpoint | Purpose |
| --- | --- |
| `ImportFile` | Loads the workbook, applies pending room actions, and returns the latest workbook JSON and server version. |
| `UpdateAction` | Receives, transforms, stores, and broadcasts a Spreadsheet action. |
| `GetActionsFromServer` | Returns actions created after the client’s last synchronized version. |

A simplified controller structure is shown below. Use the application-specific workbook loading and persistence implementation where indicated.

```csharp
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Syncfusion.Collaboration.Core.Interfaces;
using Syncfusion.Collaboration.Core.Models;
using Syncfusion.Collaboration.Core.Services;
using Syncfusion.Collaboration.Core.Transports;
using Syncfusion.EJ2.Spreadsheet;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class CollaborativeEditingController :
    ControllerBase
{
    private readonly IActionService actionService;
    private readonly ICollaborationAdapter adapter;
    private readonly IActiveTransport transport;

    public CollaborativeEditingController(
        IActionService actionService,
        ICollaborationAdapter adapter,
        IActiveTransport transport)
    {
        this.actionService = actionService;
        this.adapter = adapter;
        this.transport = transport;
    }

    [HttpPost]
    [Route("ImportFile")]
    [EnableCors("AllowAllOrigins")]
    public async Task<string> ImportFile(
        [FromBody] FileInfo param)
    {
        List<CollaborationAction> pendingActions =
            await actionService
                .GetPendingOperationsAsync(
                    param.roomName,
                    0,
                    -1
                );

        List<ActionInfo> spreadsheetActions =
            pendingActions
                .Select(action =>
                    adapter.MapGenericToControlAction(
                        action
                    ) as ActionInfo
                )
                .Where(action => action != null)
                .OrderBy(action => action.Version)
                .ToList();

        // Load the source workbook, apply
        // spreadsheetActions, and convert the latest
        // workbook to Spreadsheet JSON.
        string workbookJson = "<workbook-json>";

        int currentVersion =
            spreadsheetActions.Count > 0
                ? spreadsheetActions.Max(
                    action => action.Version
                )
                : 0;

        return JsonConvert.SerializeObject(
            new
            {
                sfdt = workbookJson,
                version = currentVersion
            }
        );
    }

    [HttpPost]
    [Route("UpdateAction")]
    [EnableCors("AllowAllOrigins")]
    public async Task<string> UpdateAction(
        [FromBody] ActionInfo param)
    {
        CollaborationAction commonAction =
            adapter.MapControlToGenericAction(
                param
            );

        CollaborationAction updatedAction =
            await actionService.AddOperationAsync(
                commonAction,
                adapter
            );

        ActionInfo spreadsheetAction =
            adapter.MapGenericToControlAction(
                updatedAction
            ) as ActionInfo;

        string payload =
            JsonConvert.SerializeObject(
                spreadsheetAction
            );

        await transport.SendToGroupAsync(
            param.RoomName,
            "action",
            payload
        );

        return payload;
    }

    [HttpPost]
    [Route("GetActionsFromServer")]
    [EnableCors("AllowAllOrigins")]
    public async Task<ActionResult<
        List<ActionInfo>>>
        GetActionsFromServer(
            [FromBody] ActionInfo param)
    {
        List<CollaborationAction> actions =
            await actionService
                .GetEffectivePendingVersionAsync(
                    param.RoomName,
                    param.Version
                );

        List<ActionInfo> spreadsheetActions =
            actions
                .Select(action =>
                    adapter.MapGenericToControlAction(
                        action
                    ) as ActionInfo
                )
                .Where(action =>
                    action != null &&
                    action.Version > param.Version
                )
                .OrderBy(action => action.Version)
                .ToList();

        return Ok(spreadsheetActions);
    }

    public class FileInfo
    {
        public string fileName { get; set; }
        public string roomName { get; set; }
    }
}
```

### Step 9: Run the application

1. Start Redis.
2. Run the ASP.NET Core collaboration service:

```bash
dotnet run
```

3. Run the React application.
4. Open the application in multiple browser windows or tabs using the same room URL.
5. Make changes in one Spreadsheet and confirm that the changes are synchronized in the other Spreadsheet instances.

## Result

- Supported Spreadsheet actions are synchronized among users in the same room.
- User join, leave, selection, and editing presence information is updated in real time.
- Collaboration actions are stored temporarily in Redis.
- Concurrent operations are transformed to maintain workbook consistency.
- Missed actions can be retrieved using the client’s last synchronized version.
- Queued actions can be applied and saved to the application’s workbook storage according to the configured save threshold and room lifecycle.

## Troubleshooting

### Connection issues

- Verify that the ASP.NET Core service is running and accessible.
- Verify that the client `serviceUrl` matches the service address.
- Ensure that the configured client and server connection types match.
- Confirm that Redis is reachable from the ASP.NET Core service.
- Review CORS, firewall, proxy, and WebSocket settings.

### Spreadsheet actions are not synchronized

- Verify that `enableCollaborativeEditing` is set to `true`.
- Verify that `CollaborativeEditingHandler` is injected.
- Confirm that the user joined the expected room.
- Verify that `actionComplete` forwards local actions.
- Confirm that `applyRemoteAction` forwards `data.payload`.
- Check the `UpdateAction` and `GetActionsFromServer` responses.

### Data consistency

- Verify that room versions increase sequentially.
- Confirm that pending actions are stored in Redis.
- Review Spreadsheet operational transformation in the server adapter.
- Clear Redis records only after queued workbook changes are saved successfully.

### Performance

- Monitor Redis memory usage and active room count.
- Monitor action frequency and SignalR throughput.
- Configure the save threshold based on workload and workbook complexity.
- Use a SignalR scale-out option when hosting the application on multiple servers.

## See also

- [Collaborative editing overview](./overview)
- [Syncfusion Collaborator overview](https://helpstaging.syncfusion.com/document-processing/collaborator/overview)
- [Collaboration Client](https://helpstaging.syncfusion.com/document-processing/collaborator/collaboration-client)
- [ASP.NET Core Collaboration Server](https://helpstaging.syncfusion.com/document-processing/collaborator/getting-started/getting-started-with-core)
