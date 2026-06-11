---
layout: post
title: Ribbon in Vue Spreadsheet component | Syncfusion
description: Learn here all about Ribbon in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Ribbon 
platform: document-processing
documentation: ug
---

# Ribbon in Vue Spreadsheet component

It helps to organize a spreadsheet’s features into a series of tabs. By clicking the expand or collapse icon, you can expand or collapse the ribbon toolbar dynamically.

## Ribbon Customization

You can customize the ribbon using the following methods,

| Method | Action |
|-------|---------|
| [`hideRibbonTabs`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#hideribbontabs) | Used to show or hide the existing ribbon tabs. |
| [`enableRibbonTabs`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#enableribbontabs) | Used to enable or disable the existing ribbon tabs. |
| [`addRibbonTabs`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#addribbontabs) | Used to add custom ribbon tabs. |
| [`hideToolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#hidetoolbaritems) | Used to show or hide the existing ribbon toolbar items. |
| [`enableToolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#enabletoolbaritems) | Used to enable or disable the specified toolbar items. |
| [`addToolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#addtoolbaritems) | Used to add the custom items in ribbon toolbar. |
| [`hideFileMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#hidefilemenuitems) | Used to show or hide the ribbon file menu items. |
| [`enableFileMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#enablefilemenuitems) | Used to enable or disable file menu items. |
| [`addFileMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#addfilemenuitems) | Used to add custom file menu items. |

The following code example shows the usage of ribbon customization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/ribbon-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/ribbon-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/ribbon-cs1" %}

## Note

You can refer to our [Vue Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/vue/#/tailwind3/spreadsheet/default.html) to knows how to present and manipulate data.

## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)