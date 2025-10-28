---
layout: post
title: Ribbon in EJ2 ASP.NET MVC Syncfusion Spreadsheet Control
description: Learn here all about Ribbon in Syncfusion EJ2 ASP.NET MVC Spreadsheet Control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Ribbon
documentation: ug
---


# Ribbon in ASP.NET MVC Spreadsheet Control

It helps to organize a spreadsheet’s features into a series of tabs. By clicking the expand or collapse icon, you can expand or collapse the ribbon toolbar dynamically.

## Ribbon Customization

You can customize the ribbon using the following methods,

| Method | Action |
|-------|---------|
| `hideRibbonTabs` | Used to show or hide the existing ribbon tabs. |
| `enableRibbonTabs` | Used to enable or disable the existing
ribbon tabs. |
| `addRibbonTabs` | Used to add custom ribbon tabs. |
| `hideToolbarItems`| Used to show or hide the existing ribbon
toolbar items. |
| `enableToolbarItems` | Used to enable or disable the specified
toolbar items. |
| `addToolbarItems` | Used to add the custom items in ribbon
toolbar. |
| `hideFileMenuItems` | Used to show or hide the ribbon file menu
items. |
| `enableFileMenuItems`| Used to enable or disable file menu items. |
| `addFileMenuItems`| Used to add custom file menu items. |

The following code example shows the usage of ribbon customization.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/ribbon/razor %}
{% endhighlight %}
{% highlight c# tabtitle="RibbonController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/ribbon/ribbonController.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)
