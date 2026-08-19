---
layout: post
title: Hyperlink in TypeScript Spreadsheet  | Syncfusion
description: Hyperlinks in TypeScript Spreadsheet allow users to insert and manage hyperlinks, enabling quick navigation to web pages, files, and worksheets.
platform: document-processing
control: Link
documentation: ug
---

# Hyperlink in TypeScript Spreadsheet 

Hyperlink is used to navigate to web links, cell references within the sheet, or to other sheets in the Spreadsheet. You can use the [`allowHyperlink`](https://ej2.syncfusion.com/documentation/api/spreadsheet#allowhyperlink) property to enable or disable hyperlink functionality.

> The default value for `allowHyperlink` property is `true`.

## Insert Link

You can insert a hyperlink in a worksheet cell for quick access to related information.

**User Interface**:

In the active spreadsheet, click the cell where you want to create a hyperlink. Insert hyperlink can be done by any of the following ways:

* Select the INSERT tab in the Ribbon toolbar and choose the `Link` item.
* Right-click the cell and then click the Hyperlink item in the context menu.
* Use the `Ctrl + K` keyboard shortcut to apply the hyperlink.

* Use the [`addHyperlink`](https://ej2.syncfusion.com/documentation/api/spreadsheet#addhyperlink) method programmatically.
 
## Edit Hyperlink

You can change an existing hyperlink in your workbook by changing its destination or the text that is used to represent it.

**User Interface**:

In the active spreadsheet, Select the cell that contains the hyperlink that you want to change. Editing the hyperlink while opening the dialog can be done by any one of the following ways:

* Select the INSERT tab in the Ribbon toolbar and choose the `Link` item.
* Right-click the cell and then click the Edit Hyperlink item in the context menu, or press `Ctrl + K`.

In the Edit Link dialog box, make the changes that you want, and click UPDATE.

## Remove Hyperlink

Performing this operation removes a single hyperlink without losing the display text.

**User Interface**:

In the active spreadsheet, click the cell where you want to remove a hyperlink. remove hyperlink can be done by any of the following ways:

* Right-click the cell and then click Remove Hyperlink item in the context menu.
* Use the [`removeHyperlink()`](https://ej2.syncfusion.com/documentation/api/spreadsheet#removehyperlink) method programmatically.

## How to change target attribute

There is an event named `beforeHyperlinkClick` which triggers only on clicking hyperlink. You can customize where to open the hyperlink by using the `target` property in the arguments of that event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/link-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/link-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/link-cs1" %}

## Limitations

* Inserting hyperlink not supported for multiple ranges.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)