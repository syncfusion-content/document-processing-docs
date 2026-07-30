---
layout: post
title: Clipboard in EJ2 ASP.NET Core Syncfusion Spreadsheet Component
description: Learn here all about Clipboard in Syncfusion EJ2 ASP.NET CORE Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Clipboard
documentation: ug
---


# Clipboard in ASP.NET Core Spreadsheet control

The Spreadsheet supports clipboard operations such as cut, copy, and paste. Clipboard operations can be enabled or disabled by setting the [`enableClipboard`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_EnableClipboard) property in Spreadsheet.

N> By default, the `enableClipboard` property is true.

## Cut

Cut is used to remove data from the selected range of cells, rows, or columns and place it on the clipboard.

**User Interface**:

Cut can be done in one of the following ways.

* Using Cut button in the Ribbon’s HOME tab to perform cut operation.
* Using Cut option in the Context Menu.
* Using `Ctrl + X` | `Command + X` keyboard shortcut.
* Using the `cut` method.

## Copy

Copy is used to duplicate data from the selected range of cells, rows, or columns and place it on the clipboard.

**User Interface**:

Copy can be done in one of the following ways.

* Using Copy button in the Ribbon’s HOME tab to perform copy operation.
* Using Copy option in the Context Menu.
* Using `Ctrl + C` | `Command + C` keyboard shortcut.
* Using the `copy` method.

## Paste

Paste is used to insert clipboard data into the selected range, rows, or columns. The following paste options are available:

* `Paste Special` - You can paste the values with formatting.
* `Paste` - You can paste only the values without formatting.

External clipboard operations are also supported. If you perform cut and paste, clipboard data will be cleared, whereas in copy and paste the clipboard contents will be maintained. If you perform paste inside the copied range, the clipboard data will be cleared.

**User Interface**:

Paste can be done in one of the following ways.

* Using Paste button in the Ribbon’s HOME tab to perform paste operation.
* Using Paste option in the Context Menu.
* Using `Ctrl + V` | `Command + V` keyboard shortcut.
* Using the `paste` method.

N> If you use the Keyboard shortcut key for cut (`Ctrl + X`) | copy (`Ctrl + C`) from other sources, you should use `Ctrl + V` shortcut while pasting into the spreadsheet.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/clipboard/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ClipboardController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/clipboard/clipboardController.cs %}
{% endhighlight %}
{% endtabs %}



## Prevent the paste functionality

The following example shows how to prevent the paste action in the Spreadsheet. In the [`actionBegin`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ActionBegin) event, set the cancel argument to true for the paste request type.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/prevent-paste/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ClipboardController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/prevent-paste/clipboardController.cs %}
{% endhighlight %}
{% endtabs %}



## Limitations

* External clipboard support is limited when copying data from another source and pasting into the Spreadsheet. Only basic formatting such as values, number formatting, cell formatting, and text formatting is supported.
* If you copy `=SUM(A2,B2)` and paste it, the formula reference changes based on the destination cell address. Nested formula references are not updated in the same way.
* Clipboard is not supported with conditional formatting (values only pasting).
* There is a limitation when copying all data from a sheet and pasting it into another sheet.