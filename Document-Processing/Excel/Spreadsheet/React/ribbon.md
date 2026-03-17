---
layout: post
title: Ribbon in React Spreadsheet component | Syncfusion
description: Learn here all about Ribbon in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Ribbon 
platform: document-processing
documentation: ug
---

# Ribbon in React Spreadsheet component

The Ribbon in the Spreadsheet component, helps to organize the features into a series of tabs, making it easier for users to find and access functionality. You can dynamically expand or collapse the ribbon toolbar to optimize screen space.

- **Tabs** → Groups related operations across feature areas like File, Home, Insert, Data, Review, and View

- **Toolbar Items** → Individual operations within each tab such as Bold, Italic, Font size, Alignment, and Fill color

- **File Menu** → File-related operations including New, Open, Save, Save As, and Print

## Ribbon Customization

You can customize the ribbon appearance and functionality using the following ways:

### Manage Ribbon Items

Control which ribbon tabs are visible and accessible to users. Use these methods to streamline the interface for specific workflows or user roles.

- [`hideRibbonTabs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#hideribbontabs) - Used to show or hide the existing ribbon tabs.
- [`enableRibbonTabs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#enableribbontabs) - Used to enable or disable the existing ribbon tabs.
- [`addRibbonTabs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#addribbontabs) - Used to add custom ribbon tabs.

### Manage Toolbar Items

Manage individual toolbar items within each tab. Use these methods to control feature availability and simplify the user interface.

- [`hideToolbarItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#hidetoolbaritems) - Used to show or hide the existing ribbon toolbar items.
- [`enableToolbarItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#enabletoolbaritems) - Used to enable or disable the specified toolbar items
- [`addToolbarItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#addtoolbaritems) - Used to add the custom items in ribbon toolbar.

### Manage File Menu Items

Control file-related operations accessible through the File menu. Use these methods to restrict or extend file operations based on your requirements.

- [`hideFileMenuItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#hidefilemenuitems) - Used to show or hide the ribbon file menu items.
- [`enableFileMenuItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#enablefilemenuitems) - Used to enable or disable file menu items.
- [`addFileMenuItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#addfilemenuitems) - Used to add custom file menu items.

The following code example demonstrates how to customize the ribbon by hiding tabs, adding custom tabs, and managing toolbar visibility:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/ribbon-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/ribbon-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/ribbon-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/ribbon-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/ribbon-cs1" %}

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)
