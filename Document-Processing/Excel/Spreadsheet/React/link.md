---
layout: post
title: Link in React Spreadsheet component | Syncfusion
description: Learn here all about Link in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Link 
platform: document-processing
documentation: ug
---
# Link in React Spreadsheet component

Hyperlink is used to navigate to web links or cell reference within the sheet or to other sheets in Spreadsheet. You can use the [`allowHyperlink`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowhyperlink) property to enable or disable hyperlink functionality.

> * The default value for `allowHyperlink` property is `true`.

## Insert Link

You can insert a hyperlink in a worksheet cell for quick access to related information.

**User Interface**:

In the active spreadsheet, click the cell where you want to create a hyperlink. Insert hyperlink can be done by any of the following ways:
* Select the INSERT tab in the Ribbon toolbar and choose the `Link` item.
* Right-click the cell and then click Hyperlink item in the context menu, or you can press Ctrl+K.
* Use the [`addHyperlink()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#addhyperlink) method programmatically.

## Edit Hyperlink

You can update an existing hyperlink in your workbook by changing either:

* **Destination Link** – Modify the link target (web address, cell reference, or sheet).  
* **Display Text** – Change the text shown in the cell that represents the hyperlink.  


**User Interface**:

In the active spreadsheet, Select the cell that contains the hyperlink that you want to change. Editing the hyperlink while opening the dialog can be done by any one of the following ways:

* Select the INSERT tab in the Ribbon toolbar and choose the `Link` item.
* Right-click the cell and then click Edit Hyperlink item in the context menu, or you can press Ctrl+K.

In the Edit Link dialog box, make the changes that you want, and click UPDATE.

## Remove Hyperlink

You can remove a hyperlink from a cell without losing the display text.  
This operation clears only the link itself, leaving the text in the cell unchanged.

**User Interface**:

In the active spreadsheet, click the cell where you want to remove a hyperlink. remove hyperlink can be done by any of the following ways:
* Right-click the cell and then click Remove Hyperlink item in the context menu.
* Use the [`removeHyperlink()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#removehyperlink) method programmatically.

## How to change target attribute

There is an event named `beforeHyperlinkClick` which triggers only on clicking hyperlink. You can customize where to open the hyperlink by using the `target` property in the arguments of that event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/link-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/link-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/link-cs1" %}

## Limitations

* Inserting hyperlink not supported for multiple ranges.

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)