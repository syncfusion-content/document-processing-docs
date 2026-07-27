---
layout: post
title: Ribbon in EJ2 ASP.NET Core Syncfusion Spreadsheet Component
description: Learn here all about Ribbon in Syncfusion EJ2 ASP.NET CORE Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Ribbon
documentation: ug
---


# Ribbon in ASP.NET Core Spreadsheet control

The Ribbon organizes Spreadsheet features into a series of tabs. Click the expand or collapse icon to dynamically expand or collapse the Ribbon.

## Ribbon Customization

You can customize the Ribbon using the following methods:

| Method | Description |
|--------|-------------|
| `hideRibbonTabs` | Shows or hides existing Ribbon tabs. |
| `enableRibbonTabs` | Enables or disables existing Ribbon tabs. |
| `addRibbonTabs` | Adds custom Ribbon tabs. |
| `hideToolbarItems` | Shows or hides existing Ribbon toolbar items. |
| `enableToolbarItems` | Enables or disables specified Ribbon toolbar items. |
| `addToolbarItems` | Adds custom items to the Ribbon toolbar. |
| `hideFileMenuItems` | Shows or hides File-menu items. |
| `enableFileMenuItems` | Enables or disables File-menu items. |
| `addFileMenuItems` | Adds custom File-menu items. |

The following code example demonstrates how to customize the Ribbon.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/ribbon/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="RibbonController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/ribbon/ribbonController.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)
