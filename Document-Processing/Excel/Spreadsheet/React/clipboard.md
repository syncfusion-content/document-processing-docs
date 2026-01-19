---
layout: post
title: Clipboard in React Spreadsheet component | Syncfusion
description: Learn here all about Clipboard in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Clipboard 
platform: document-processing
documentation: ug
---

# Clipboard in React Spreadsheet component

The Spreadsheet provides support for the clipboard operations (cut, copy, and paste). Clipboard operations can be enabled or disabled by setting the [`enableClipboard`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#enableclipboard) property in Spreadsheet.

> By default, the `enableClipboard` property is true.

## Cut

It is used to cut the data from selected range of cells, rows or columns in a spreadsheet and make it available in the clipboard.

**User Interface**:

Cut can be done in one of the following ways.

* Using Cut button in the Ribbon’s HOME tab to perform cut operation.
* Using Cut option in the Context Menu.
* Using `Ctrl + X` | `Command + X` keyboard shortcut.
* Using the [`cut`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#cut) method.

## Copy

It is used to copy the data from selected range of cells, rows or columns in a spreadsheet and make it available in the clipboard.

**User Interface**:

Copy can be done in one of the following ways.

* Using Copy button in the Ribbon’s HOME tab to perform copy operation.
* Using Copy option in the Context Menu.
* Using `Ctrl + C` | `Command + C` keyboard shortcut.
* Using the [`copy`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#copy) method.

## Paste

It is used to paste the clipboard data to the selected range, rows or columns. You have the following options in Paste,

* `Paste Special` - You can paste the values with formatting.
* `Paste` - You can paste only the values without formatting.

It also performs for external clipboard operation. If you perform cut and paste, clipboard data will be cleared, whereas in copy and paste the clipboard contents will be maintained. If you perform paste inside the copied range, the clipboard data will be cleared.

**User Interface**:

Paste can be done in one of the following ways.

* Using Paste button in the Ribbon’s HOME tab to perform paste operation.
* Using Paste option in the Context Menu.
* Using `Ctrl + V` | `Command + V` keyboard shortcut.
* Using the [`paste`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#paste) method.

> If you use the Keyboard shortcut key for cut (`Ctrl + X`) / copy (`Ctrl + C`) from other sources, you should use `Ctrl + V` shortcut while pasting into the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/clipboard-cs1" %}

## Prevent the paste functionality

The following example shows, how to prevent the paste action in spreadsheet. In [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#actionbegin) event, you can set `cancel` argument as false in paste request type.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/clipboard-cs2" %}

## Events triggered during clipboard operations

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

| Event             | Description                                                                            |
|-------------------|---------------------------------------------------------------------------------------------|
| [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin)       | Triggers when the paste action starts.                                                     |
| [`beforeCellUpdate`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellupdate)  | Triggers for each cell in the pasted range before its properties are updated.              |
| [`cellSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#cellsave)          | Triggers for each cell in the pasted range after the updated cell is saved.                |
| [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete)    | Triggers once all pasted cells are processed.                                              |

The following code example showcases the events triggered during clipboard operations in spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/clipboard-cs3" %}

> **Note**: The events [cellEdit](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#celledit), [cellEditing](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#cellediting), and [beforeCellSave](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellsave) are not triggered during clipboard operations. These events are specific to manual cell edits. However, [beforeCellUpdate](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellupdate) is triggered for each cell update before any property is changed, including during paste actions.

**Accessing Clipboard Properties**

You can access clipboard-related properties such as the copied and pasted ranges during paste operations using the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) and [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete) events. Ensure the action and request type using:

*   `args.action === 'clipboard'`
*   `args.eventArgs.requestType === 'paste'`

Once confirmed, you can access the following properties:

*   `args.eventArgs.copiedRange`
*   `args.eventArgs.pastedRange`

## Limitations

* External clipboard is not fully supported while copying data from another source and pasting into a spreadsheet, it only works with basic supports (Values, Number, cell, and Text formatting).
* If you copy =SUM(A2,B2) and paste, the formula reference will change depending on the pasted cell address but we don't have support for nested formula(formula reference will be same).
* Clipboard is not supported with conditional formatting (values only pasting).
* We have limitation while copying the whole sheet data and pasting it into another sheet.

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.