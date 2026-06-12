---
layout: post
title: Ribbon in EJ2 ASP.NET Core Syncfusion Spreadsheet Component
description: Learn here all about Ribbon in Syncfusion EJ2 ASP.NET CORE Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Ribbon
documentation: ug
---


# Ribbon in ASP.NET Core Spreadsheet control

It helps to organize a spreadsheet’s features into a series of tabs. By clicking the expand or collapse icon, you can expand or collapse the ribbon toolbar dynamically.

## Ribbon Customization

You can customize the ribbon using the following methods,

| Method | Action |
|-------|---------|
| [`hideRibbonTabs`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#hideribbontabs) | Used to show or hide the existing ribbon tabs. |
| [`enableRibbonTabs`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#enableribbontabs) | Used to enable or disable the existing ribbon tabs. |
| [`addRibbonTabs`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#addribbontabs) | Used to add custom ribbon tabs. |
| [`hideToolbarItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#hidetoolbaritems) | Used to show or hide the existing ribbon toolbar items. |
| [`enableToolbarItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#enabletoolbaritems) | Used to enable or disable the specified toolbar items. |
| [`addToolbarItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#addtoolbaritems) | Used to add the custom items in ribbon toolbar. |
| [`hideFileMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#hidefilemenuitems) | Used to show or hide the ribbon file menu items. |
| [`enableFileMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#enablefilemenuitems) | Used to enable or disable file menu items. |
| [`addFileMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#addfilemenuitems) | Used to add custom file menu items. |

The following code example shows the usage of ribbon customization.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/ribbon/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="RibbonController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/ribbon/ribbonController.cs %}
{% endhighlight %}
{% endtabs %}

## Note

You can refer to our [ASP.NET Core Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-core-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET Core Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-core-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)
