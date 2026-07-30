---
layout: post
title: Link in EJ2 ASP.NET Core Syncfusion Spreadsheet Component
description: Learn here all about Link in Syncfusion EJ2 ASP.NET CORE Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Link
documentation: ug
---


# Hyperlink in ASP.NET Core Spreadsheet control

Hyperlinks allow users to navigate to web pages, cell references within the current worksheet, or cells in other worksheets. Use the [`allowHyperlink`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowHyperlink) property to enable or disable hyperlink functionality in the Spreadsheet.

N> The default value of the `allowHyperlink` property is `true`.

## Insert Link

You can insert a hyperlink into a worksheet cell for quick access to related information.

To insert a hyperlink through the user interface:

* Select the cell where you want to insert the hyperlink.
* Open the **Insert** tab in the Ribbon and select **Link**.
* Alternatively, right-click the cell and select **Hyperlink** from the context menu, or press `Ctrl + K`.
* Enter the destination and display text in the dialog, and then apply the changes.

You can also use the `addHyperlink()` method to insert a hyperlink programmatically.

## Edit Hyperlink

You can edit an existing hyperlink by changing its destination or display text.

**User Interface**:

In the active Spreadsheet, select the cell containing the hyperlink. You can open the **Edit Link** dialog in one of the following ways:

* Select the **Insert** tab in the Ribbon, and then select **Link**.
* Right-click the cell and select **Edit Hyperlink** from the context menu, or press `Ctrl + K`.

In the **Edit Link** dialog, make the required changes, and then click **Update**.

## Remove Hyperlink

Removing a hyperlink deletes the link without removing its display text.

**User Interface**:

In the active Spreadsheet, select the cell where you want to insert a hyperlink. You can insert a hyperlink in one of the following ways:
* Right-click the cell and then click Remove Hyperlink item in the context menu.
* Use the `removeHyperlink()` method programmatically.

## Change the hyperlink target

The `beforeHyperlinkClick` event is triggered before a hyperlink is opened. Use the `target` property in the event arguments to specify where the hyperlink opens.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/link/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="HyperlinkController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/link/hyperlinkController.cs %}
{% endhighlight %}
{% endtabs %}



## Limitations

* Inserting hyperlinks into multiple ranges is not supported.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)
