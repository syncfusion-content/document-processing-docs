---
layout: post
title: Ribbon in ASP.NET Core Spreadsheet | Syncfusion
description: Learn about the ribbon in the Syncfusion ASP.NET Core Spreadsheet control, including tabs, items, and customization options.
platform: document-processing
control: Ribbon
documentation: ug
---


# Ribbon in ASP.NET Core Spreadsheet

The **Ribbon** organizes spreadsheet features into a series of tabs. Click the expand or collapse icon to dynamically expand or collapse the ribbon.

To expand or collapse the ribbon:

1. Locate the expand or collapse icon in the ribbon.
2. Click the icon to change the ribbon state.
3. Verify that the ribbon content expands or collapses accordingly.

## Ribbon Customization

You can customize the ribbon using the following methods:

| Method | Description |
|--------|-------------|
| `hideRibbonTabs` | Shows or hides existing ribbon tabs. |
| `enableRibbonTabs` | Enables or disables existing ribbon tabs. |
| `addRibbonTabs` | Adds custom ribbon tabs. |
| `hideToolbarItems` | Shows or hides existing ribbon toolbar items. |
| `enableToolbarItems` | Enables or disables specified ribbon toolbar items. |
| `addToolbarItems` | Adds custom items to the ribbon toolbar. |
| `hideFileMenuItems` | Shows or hides File-menu items. |
| `enableFileMenuItems` | Enables or disables File-menu items. |
| `addFileMenuItems` | Adds custom File-menu items. |

The following code example demonstrates how to customize the ribbon.

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
