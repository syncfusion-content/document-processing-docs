---
layout: post
title: Vue SpreadsheetEditor Collaboration Integration | Syncfusion
description: Learn how to integrate real-time collaborative editing into the Syncfusion Vue SpreadsheetEditor application.
control: Collaborative Editing
platform: document-processing
documentation: ug
---

# Collaborative editing integration in Vue SpreadsheetEditor

The Vue SpreadsheetEditor integrates with `@syncfusion/ej2-collaborator` to exchange workbook actions, presence, and selections with the Collaboration Server.

## Install the Collaboration Client

```bash
npm install @syncfusion/ej2-collaborator
```

## Configure collaborative editing

```vue
<template>
    <ejs-spreadsheet
        ref="spreadsheet"
        :enableCollaborativeEditing="true"
        :created="created"
        :actionComplete="actionComplete">
    </ejs-spreadsheet>
</template>

<script>
import { defineComponent } from 'vue';
import { CollaborativeEditingHandler, SpreadsheetComponent } from '@syncfusion/ej2-vue-spreadsheet';
import { CollaborationClient } from '@syncfusion/ej2-collaborator';
import { SpreadsheetEditorAdapter } from './spreadsheetEditorAdapter';

const serviceUrl = '<your-collaboration-service-url>';

export default defineComponent({
    components: { 'ejs-spreadsheet': SpreadsheetComponent },
    provide: { spreadsheet: [CollaborativeEditingHandler] },
    methods: {
        async created() {
            const roomName = new URL(window.location.href).searchParams.get('id') || 'sample-room';
            const spreadsheet = this.$refs.spreadsheet.ej2Instances;
            const adapter = new SpreadsheetEditorAdapter(spreadsheet, serviceUrl, 'John', roomName);

            await adapter.loadFromServer('Sample');
            this.adapter = adapter;
            this.client = new CollaborationClient(adapter, {
                serviceUrl,
                connectionType: 'signalr',
                currentUser: 'John'
            });
            await this.client.joinRoomAsync(roomName);
        },
        actionComplete(args) {
            this.adapter?.sendActionToServer(args);
        }
    }
});
</script>
```

## Create the SpreadsheetEditor adapter

The adapter implements `ICollaborationProvider`, calls `updateRoomInfo` and `setLocalUser`, sends local actions with `sendActionToServer`, and applies remote actions using `data.payload`.

## Manage the collaboration room

The application must generate a unique room ID and share the same ID with all participants.

## See also

- [Collaborative editing overview](./overview)
- [Using Redis Cache with ASP.NET Core](./aspnet-core-redis)
