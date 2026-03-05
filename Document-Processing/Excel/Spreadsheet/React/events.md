---
layout: post
title: Events in React Spreadsheet component | Syncfusion
description: Learn here all about the events in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Events 
platform: document-processing
documentation: ug
---

# Events in React Spreadsheet Component

The Spreadsheet component triggers events for creation, data binding, selection, editing, clipboard actions, sorting, filtering, formatting, row and column insertion or deletion, context menu and ribbon interactions, and import/export operations—enabling integration of custom logic into application workflows.

## actionBegin

The `actionBegin` event triggers when any action begins in the spreadsheet. This event fires for all user-initiated actions, enabling you to identify the action type, prevent specific actions from executing, and apply custom logic at the initiation of an action.

**Event Arguments:** [`ActionBeginEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin)

You can identify the type of action being triggered using the `args.action` property.

The following code example demonstrates how to bind the `actionBegin` event in the spreadsheet.
{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

    const actionBegin = (args: any) => {
        console.log(`actionBegin triggered ${args.action}`);
        console.log(args);
    }

    return (
        <SpreadsheetComponent ref={spreadsheetRef} actionBegin={actionBegin}>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## actionComplete

The `actionComplete` event triggers when any action completes in the spreadsheet. This event fires for all user-initiated actions, enabling you to identify the action type and apply custom logic after an action has successfully completed.

**Event Arguments:** [`ActionCompleteEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete)

You can identify the type of action that completed using the `args.action` property.

The following code example demonstrates how to bind the `actionComplete` event in the spreadsheet.
{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

    const actionComplete = (args: any) => {
        console.log(`actionComplete triggered ${args.action}`);
        console.log(args);
    }

    return (
        <SpreadsheetComponent ref={spreadsheetRef} actionComplete={actionComplete}>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Clipboard

When performing clipboard operations such as **Cut**, **Copy**, or **Paste**, the spreadsheet triggers specific events that allow users to monitor and manage these actions effectively. The following sections outline the event sequence and their roles.

**Cut / Copy**

For **Cut** or **Copy** actions, only the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) event is triggered. You can identify the type of action and access the copied range using the following properties:

*   `args.action === 'cut'` → Indicates a Cut action
*   `args.action === 'copy'` → Indicates a Copy action
*   `args.args.copiedRange` → Provides the copied range

**Paste**

During a **Paste** operation, events are triggered in the following sequence:

> actionBegin → beforeCellUpdate → cellSave → actionComplete

The table below describes each event and its role in the paste process:

| **Event** | **Description** | **Event Arguments** |
|-----------|------------------|----------------------|
| [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) | Triggers when the paste action starts. | [`ActionBeginEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) |
| [`beforeCellUpdate`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellupdate) | Triggers for each cell in the pasted range before it is updated, allowing modification and cancelling `paste` action. | [`BeforeCellUpdateArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/beforecellupdateargs) |
| [`cellSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#cellsave) | Triggers for each cell in the pasted range after the modified cell is saved. | [`CellSaveEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellsaveeventargs) |
| [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete) | Triggers after all pasted cells are fully saved. | [`ActionCompleteEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete) |

**Accessing clipboard properties**

You can access clipboard-related properties such as the copied and pasted ranges during paste operations using the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) and [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete) events. Verify the action type using:

*   `args.action === 'clipboard'` → Indicates a paste action.

Once verified, you can access the following properties:

*   `args.eventArgs.copiedRange` → The range of cells that were copied
*   `args.eventArgs.pastedRange` → The range of cells where the content was pasted

The following code example showcases the events triggered during clipboard operations in the spreadsheet.
{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

    const actionBegin = (args: any) => {
        console.log(`actionBegin triggered ${args.action}`);
        console.log(args);
    }

    const beforeCellUpdate = (args: any) => {
        console.log(args);
    }

    const cellSave = (args: any) => {
        console.log(args);
    }

    const actionComplete = (args: any) => {
        console.log(`actionComplete triggered ${args.action}`);
        console.log(args);
    }

    return (
        <SpreadsheetComponent ref={spreadsheetRef} actionBegin={actionBegin} beforeCellUpdate={beforeCellUpdate} cellSave={cellSave} actionComplete={actionComplete} >
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Editing

When a cell is edited manually—such as by **double-clicking the cell**, **pressing the F2 key**, or **modifying it through the formula bar**—the spreadsheet triggers a series of events. These events allow users to monitor and manage the entire editing process, from initiation to completion.

The sequence of events during manual cell editing is:
> cellEdit → cellEditing → actionBegin → beforeCellUpdate → beforeCellSave → cellSave → cellEdited → actionComplete

The table below lists each event and its role in the editing process:

| **Event** | **Description** | **Event Arguments** |
|-----------|------------------|----------------------|
| [`cellEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#celledit) | Triggers before the cell enters edit mode. | [`CellEditEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellediteventargs) |
| [`cellEditing`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#cellediting) | Triggers while editing is in progress; fires for each change made to the cell content. | [`CellEditingEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellediteventargs) |
| [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) | Triggers when the edit action starts. | [`ActionBeginEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) |
| [`beforeCellUpdate`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellupdate) | Triggers before any cell property (style, value, formula, etc.) is modified. | [`BeforeCellUpdateArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/beforecellupdateargs)  |
| [`beforeCellSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellsave) | Triggers before the cell value is saved. | [`BeforeCellSaveEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellediteventargs) |
| [`cellSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#cellsave) | Triggers when the modified cell value is saved. | [`CellSaveEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellsaveeventargs) |
| [`cellEdited`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#celledited) | Triggers after the editing process completes. | [`CellEditedEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellediteventargs) |
| [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete) | Triggers once the entire edit operation is completed. | [`ActionCompleteEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete) |

The following code example showcases the events triggered during cell editing in the spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

    const actionBegin = (args: any) => {
        console.log(`actionBegin triggered ${args.action}`);
        console.log(args);
    }

    const beforeCellSave = (args: any) => {
        console.log(args);
    }

    const beforeCellUpdate = (args: any) => {
        console.log(args);
    }

    const cellEdit = (args: any) => {
        console.log(args);
    }

    const cellEditing = (args: any) => {
        console.log(args);
    }

    const cellEdited = (args: any) => {
        console.log(args);
    }

    const cellSave = (args: any) => {
        console.log(args);
    }

    const actionComplete = (args: any) => {
        console.log(`actionComplete triggered ${args.action}`);
        console.log(args);
    }
    
    return (
        <SpreadsheetComponent ref={spreadsheetRef} actionBegin={actionBegin} beforeCellSave={beforeCellSave} beforeCellUpdate={beforeCellUpdate} cellSave={cellSave} cellEdit={cellEdit} cellEditing={cellEditing} cellEdited={cellEdited} actionComplete={actionComplete} >
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## See Also

* [Editing](./editing.md)
* [Clipboard](./clipboard.md)