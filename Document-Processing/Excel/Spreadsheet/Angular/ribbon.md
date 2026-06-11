---
layout: post
title: Ribbon in Angular Spreadsheet component | Syncfusion
description: Learn here all about Ribbon in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Ribbon 
documentation: ug
---

# Ribbon in Angular Spreadsheet component

It helps to organize a spreadsheet’s features into a series of tabs. By clicking the expand or collapse icon, you can expand or collapse the ribbon toolbar dynamically.

## Ribbon Customization

You can customize the ribbon using the following methods,

| Method | Action |
|-------|---------|
| [`hideRibbonTabs`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#hideribbontabs) | Used to show or hide the existing ribbon tabs. |
| [`enableRibbonTabs`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#enableribbontabs) | Used to enable or disable the existing ribbon tabs. |
| [`addRibbonTabs`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#addribbontabs) | Used to add custom ribbon tabs. |
| [`hideToolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#hidetoolbaritems) | Used to show or hide the existing ribbon toolbar items. |
| [`enableToolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#enabletoolbaritems) | Used to enable or disable the specified toolbar items. |
| [`addToolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#addtoolbaritems) | Used to add the custom items in ribbon toolbar. |
| [`hideFileMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#hidefilemenuitems) | Used to show or hide the ribbon file menu items. |
| [`enableFileMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#enablefilemenuitems) | Used to enable or disable file menu items. |
| [`addFileMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#addfilemenuitems) | Used to add custom file menu items. |

The following code example shows the usage of ribbon customization.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/ribbon/cutomization-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/ribbon/cutomization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/ribbon/cutomization-cs1" %}

## Note

You can explore our [Angular Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/angular/#/material3/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)
