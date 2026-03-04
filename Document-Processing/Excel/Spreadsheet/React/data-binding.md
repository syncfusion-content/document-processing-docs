---
layout: post
title: Data binding in React Spreadsheet component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: document-processing
documentation: ug
---

# Data binding in React Spreadsheet component

The Spreadsheet uses [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started), which supports both RESTful JSON data services and local JavaScript object array binding to a range. The `dataSource` property can be assigned either with the instance of [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started) or JavaScript object array collection.

---

## Tutorial (Step‑by‑step beginner walkthrough)

This Tutorial shows a minimal quick start using local data binding and the video resource to get started.

1. Watch the quick start video to understand the basic flow:

{% youtube "https://www.youtube.com/watch?v=FK1OPoHIUPc" %}

2. Follow the Local data quick example to bind a JS object array to the Spreadsheet `dataSource`.

## Bind local data in Spreadsheet

To bind local data to the Spreadsheet, you can assign a JavaScript object array to the `dataSource` property.

Refer to the following code example for local data binding.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/local-data-binding-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/local-data-binding-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/local-data-binding-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/local-data-binding-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/local-data-binding-cs1" %}

> The local data source can also be provided as an instance of the [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started). By default, [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started) uses **JsonAdaptor** for local data-binding.

---

## Action Steps in Spreadsheet

This section represents practical examples such as field mapping, remote binding variations, cell binding, and dynamic updates.

### Customizing column data mapping

By default, when a data source is bound to a sheet, columns are auto-assigned from the data source fields sequentially. This means that the first field in the data source is assigned to Column A, the second to Column B, and so on, sequentially. However, now you can customize the column assignments by specifying the appropriate field names in the desired order using the [fieldsOrder](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/rangeModel/#fieldsorder) property.

> You can customize the mapping of column data only in the local data binding support.

The following code example demonstrates how to customize the mapping of column data:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/field-mapping-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/field-mapping-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/field-mapping-cs1" %}

## Binding Remote data

To bind remote data to the Spreadsheet control, assign service data as an instance of [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started) to the `dataSource` property. Provide the service endpoint `url` to interact with remote data.

Refer to the following code example for remote data binding.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/remote-data-binding-cs1" %}

### Binding with OData services

`OData` is a standardized protocol for creating and consuming data. You can retrieve data from OData service using the DataManager. Refer to the following code example for remote Data binding using OData service.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/remote-data-binding-cs2" %}

### Bind with Web API

You can use `WebApiAdaptor` to bind the spreadsheet with a Web API created using an OData endpoint.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/remote-data-binding-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/remote-data-binding-cs3" %}

## Cell data binding

The Spreadsheet control can bind the data to individual cell in a sheet using the `value` property.

Refer to the following code example for cell data binding.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/cell-data-binding-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/cell-data-binding-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/cell-data-binding-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/cell-data-binding-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/cell-data-binding-cs1" %}

> The cell data binding also supports formula, style, number format, and more.

### Dynamic data binding and Datasource change event

You can dynamically change the datasource of the spreadsheet by changing the `dataSource` property of the `range` object of the `sheet`. The `dataSourceChanged` event handler will be triggered when editing, inserting, and deleting a row in the datasource range.

The following table defines the arguments of the `dataSourceChanged` event.

| Property | Type | Description |
|-----|-----|-------|
| action | string | Indicates the type of action such as `edit`, `add`, and `delete` performed in the datasource range. |
| data | object[] | Modified data for `edit` action; New data for `add` action; Deleted data for `delete` action. |
| rangeIndex | number | Specifies the range index of the datasource. |
| sheetIndex | number | Specifies the sheet index of the datasource. |

> For `add` action, the value for all the fields will be `null` in the data. In the case that you do not want the primary key field to be null which needs to be updated in the backend service, you can use `edit` action after updating the primary key field to update in the backend service. 
> For inserting a row at the end of the datasource range, you should insert a row below at the end of the range to trigger the `dataSourceChanged` event with action `add`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/dynamic-data-binding-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/dynamic-data-binding-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/dynamic-data-binding-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/dynamic-data-binding-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/dynamic-data-binding-cs1" %}

## Dynamic data binding using updateRange method

Use [updateRange](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#updaterange) to efficiently update a range's `dataSource` without iterating each cell.

The following code example demonstrates how to dynamically update data using the [updateRange](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#updaterange) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/dynamic-data-binding-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/dynamic-data-binding-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/dynamic-data-binding-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/dynamic-data-binding-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/dynamic-data-binding-cs2" %}

---

## Understanding the concepts

- DataManager: central data abstraction supporting local arrays (JsonAdaptor) and remote services (ODataAdaptor, WebApiAdaptor). Use DataManager when binding to services or when advanced querying/adaptors are required.
- fieldsOrder: controls how data fields map to spreadsheet columns; use it when data field order differs from desired column order.
- dataSourceChanged event: notifies edits/adds/deletes within a bound range; handle this to synchronize backend or custom logic.
- updateRange: preferred for bulk updates to a specific sheet range to minimize per-cell operations.

(Conceptual notes are assembled from existing sections above; no new behavior is introduced.)

---

## Quick Lookup

- DataManager docs: https://ej2.syncfusion.com/react/documentation/data/getting-started  
- RangeModel.fieldsOrder: https://ej2.syncfusion.com/react/documentation/api/spreadsheet/rangeModel/#fieldsorder  
- Spreadsheet.updateRange API: https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#updaterange

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/react/#/tailwind3/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Filtering](./filter)
* [Sorting](./sort)
* [Hyperlink](./link)