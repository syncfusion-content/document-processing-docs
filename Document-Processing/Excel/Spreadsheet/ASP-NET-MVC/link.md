---
layout: post
title: Link in EJ2 ASP.NET MVC Syncfusion Spreadsheet Component
description: Learn here all about Link in Syncfusion EJ2 ASP.NET MVC Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Link
documentation: ug
---


# Hyperlink in ASP.NET MVC Spreadsheet control

Hyperlinks allow users to navigate to web pages, cell references within the current worksheet, or cells in other worksheets. Use the [`allowHyperlink`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowHyperlink) property to enable or disable hyperlink functionality in the Spreadsheet.

N> * The default value of the `allowHyperlink` property is `true`.

## Insert Link

You can insert a hyperlink into a worksheet cell for quick access to related information.

To insert a hyperlink through the user interface:

* Select the cell where you want to insert the hyperlink.
* Open the **Insert** tab in the Ribbon and choose **Link**.
* Alternatively, right-click the cell and choose **Hyperlink** from the context menu, or press `Ctrl + K`.
* Enter the destination and display text in the dialog, and apply the changes.

You can also use the `addHyperlink()` method to insert a hyperlink programmatically.

## Edit Hyperlink

You can change an existing hyperlink in your workbook by changing its destination or the text that is used to represent it.

**User Interface**:

In the active spreadsheet, Select the cell that contains the hyperlink that you want to change. Editing the hyperlink while opening the dialog can be done by any one of the following ways:

* Select the INSERT tab in the Ribbon toolbar and choose the `Link` item.
* Right-click the cell and then click Edit Hyperlink item in the context menu, or you can press Ctrl+K.

In the Edit Link dialog box, make the changes that you want, and click UPDATE.

## Remove Hyperlink

Performing this operation remove a single hyperlink without losing the display text.

**User Interface**:

In the active spreadsheet, click the cell where you want to remove a hyperlink. remove hyperlink can be done by any of the following ways:
* Right-click the cell and then click Remove Hyperlink item in the context menu.
* Use the `removeHyperlink()` method programmatically.

## Change the hyperlink target

The `beforeHyperlinkClick` event is triggered before a hyperlink is opened. Use the `target` property in the event arguments to specify where the hyperlink opens.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/link/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HyperlinkController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/link/hyperlinkController.cs %}
{% endhighlight %}
{% endtabs %}



## Limitations

* Inserting hyperlink not supported for multiple ranges.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)
