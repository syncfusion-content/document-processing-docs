---
layout: post
title: Clipboard in EJ2 ASP.NET MVC Syncfusion Spreadsheet Component
description: Learn here all about Clipboard in Syncfusion EJ2 ASP.NET MVC Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Clipboard
documentation: ug
---


# Clipboard in ASP.NET MVC Spreadsheet control

The Spreadsheet supports clipboard operations such as cut, copy, and paste. Use the [enableClipboard](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_EnableClipboard) property to enable or disable clipboard operations in the Spreadsheet.

N> By default, the `enableClipboard` property is true.

## Cut

Cut removes data from the selected range of cells, rows, or columns and makes it available on the clipboard.

**User Interface**:

Cut can be done in one of the following ways.

* Using Cut button in the Ribbon’s HOME tab to perform cut operation.
* Using Cut option in the Context Menu.
* Using `Ctrl + X` | `Command + X` keyboard shortcut.
* Using the `cut` method.

## Copy

Copy places data from the selected range of cells, rows, or columns on the clipboard without removing the original data.

**User Interface**:

Copy can be done in one of the following ways.

* Using Copy button in the Ribbon’s HOME tab to perform copy operation.
* Using Copy option in the Context Menu.
* Using `Ctrl + C` | `Command + C` keyboard shortcut.
* Using the `copy` method.

## Paste

It is used to paste the clipboard data to the selected range, rows or columns. The Paste menu provides the following options:

* `Paste Special` - Pastes values along with supported formatting.
* `Paste` - Pastes values without formatting.

Paste also supports data copied from external sources. If you perform cut and paste, clipboard data will be cleared, whereas in copy and paste the clipboard contents will be maintained. If you perform paste inside the copied range, the clipboard data will be cleared.

**User Interface**:

Paste can be done in one of the following ways.

* Using Paste button in the Ribbon’s HOME tab to perform paste operation.
* Using Paste option in the Context Menu.
* Using `Ctrl + V` | `Command + V` keyboard shortcut.
* Using the `paste` method.

N> If you use the Keyboard shortcut key for cut (`Ctrl + X`) | copy (`Ctrl + C`) from other sources, you should use `Ctrl + V` shortcut while pasting into the spreadsheet.

#### Clipboard operations example

The following code example demonstrates how to perform cut, copy, and paste operations programmatically using the `cut`, `copy`, and `paste` methods.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/clipboard/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ClipboardController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/clipboard/clipboardController.cs %}
{% endhighlight %}
{% endtabs %}



## Prevent the paste functionality

The following example demonstrates how to prevent paste operations in the Spreadsheet. In the [actionBegin](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ActionBegin) event, set the `cancel` argument to `true` when the request type is `paste`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/prevent-paste/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ClipboardController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/prevent-paste/clipboardController.cs %}
{% endhighlight %}
{% endtabs %}

When a paste operation is initiated, the `actionBegin` event is triggered. Check whether the request type is `paste`, and set the `cancel` argument to `true` to prevent the operation. After running the sample, copy a value and attempt to paste it into the Spreadsheet to verify that the paste operation is blocked.


## Limitations

* External clipboard is not fully supported while copying data from another source and pasting into a spreadsheet, it only works with basic supports (Values, Number, cell, and Text formatting).
* If you copy =SUM(A2,B2) and paste, the formula reference will change depending on the pasted cell address but we don't have support for nested formula(formula reference will be same).
* Clipboard is not supported with conditional formatting (values only pasting).
* We have limitation while copying the whole sheet data and pasting it into another sheet.