---
layout: post
title: Data binding in Angular Spreadsheet component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Data binding 
documentation: ug
---

# Data binding in Angular Spreadsheet component

The Spreadsheet supports binding data from both **RESTful JSON services** and **local JavaScript object arrays** using the [`DataManager`](https://ej2.syncfusion.com/angular/documentation/data/getting-started).
You can assign the `dataSource` property either with a `DataManager` instance or directly with a JavaScript object array collection.

> To bind data to a cell, use `cell data binding` support.

## Local data

Bind local data to the Spreadsheet by assigning a JavaScript object array to the `dataSource` property.

Refer to the following code example for local data binding.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/local-data-binding-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/local-data-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/local-data-binding-cs1" %}

> The local data source can also be provided as an instance of the [DataManager](https://helpej2.syncfusion.com/angular/documentation/data). By default, [DataManager](https://helpej2.syncfusion.com/angular/documentation/data) uses [`JsonAdaptor`](https://ej2.syncfusion.com/angular/documentation/data/adaptors#json-adaptor) for local data-binding.

### Customizing column data mapping

By default, columns are auto-assigned sequentially from data source fields (first field → Column A, second field → Column B, etc.). To customize this mapping, use the [fieldsOrder](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/rangeModel#fieldsorder) property to specify field names in your desired order.

> You can customize the mapping of column data only in the local data binding support.

The following code example demonstrates how to customize the mapping of column data:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/field-mapping-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/field-mapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/samples/spreadsheet/angular/field-mapping-cs1" %}

## Remote data

To bind remote data to the Spreadsheet control, assign service data as an instance of [DataManager](https://helpej2.syncfusion.com/angular/documentation/data) to the `dataSource` property. To interact with remote data source, provide the service endpoint `url`.

Refer to the following code example for remote data binding.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/remote-data-binding-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/remote-data-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/remote-data-binding-cs1" %}

> By default, `DataManager` uses **ODataAdaptor** for remote data-binding.

### Binding with OData services

`OData` is a standardized protocol for creating and consuming data. You can retrieve data from OData service using the DataManager. Refer to the following code example for remote Data binding using OData service.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/remote-data-binding-cs2/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/remote-data-binding-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/remote-data-binding-cs2" %}

### Web API

You can use `WebApiAdaptor` to bind spreadsheet with Web API created using OData endpoint.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/remote-data-binding-cs3/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/remote-data-binding-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/remote-data-binding-cs3" %}

## Cell data binding

Bind data to individual cells in a sheet using the `value` property.

Refer to the following code example for cell data binding.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/cell-data-binding-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/cell-data-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/cell-data-binding-cs1" %}

> The cell data binding also supports formula, style, number format, and more.

## Dynamic data binding and Datasource change event

You can dynamically change the datasource of the spreadsheet by changing the model which is bound to the `dataSource` property or by changing the `dataSource` property of the `range` object of the `sheet` directly. The `dataSourceChanged` event handler will be triggered when editing, inserting, and deleting a row in the datasource range. This event will be triggered with a parameter named `action` which indicates the `edit`, `add` and `delete` actions for the respective ones.

The following table defines the arguments of the `dataSourceChanged` event.

| Property | Type | Description |
|-----|-----|-------|
| action | string | Indicates the type of action such as `edit`, `add`, and `delete` performed in the datasource range. |
| data | object[] | Modified data for `edit` action; New data for `add` action; Deleted data for `delete` action. |
| rangeIndex | number | Specifies the range index of the datasource. |
| sheetIndex | number | Specifies the sheet index of the datasource. |

> For `add` action, the value for all the fields will be `null` in the data. In the case that you do not want the primary key field to be null which needs to be updated in the backend service, you can use `edit` action after updating the primary key field to update in the backend service. <br><br>
> For inserting a row at the end of the datasource range, you should insert a row below at the end of the range to trigger the `dataSourceChanged` event with action `add`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/dynamic-data-binding-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/dynamic-data-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/dynamic-data-binding-cs1" %}

## Dynamic data binding using updateRange method

The [updateRange](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#updaterange) method enables bulk updates to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/rangeModel#datasource) without iterating through individual cells, making it efficient for large data updates.

**Setup:**
- Provide the new `dataSource` to update.
- Specify the starting cell using the [startCell](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/rangeModel#startcell) property in the `RangeDirective`.
- Set the `sheetIndex` to target the appropriate sheet.
The following code example demonstrates how to dynamically update data using the [updateRange](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#updaterange) method.

The following code example demonstrates how to dynamically update data using the [updateRange](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#updaterange) method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/dynamic-data-binding-cs2/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/dynamic-data-binding-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/dynamic-data-binding-cs2" %}

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/angular/#/material3/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Filtering](./filter)
* [Sorting](./sort)
* [Hyperlink](./link)