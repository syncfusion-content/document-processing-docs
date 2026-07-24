---
layout: post
title: Data Binding in EJ2 ASP.NET MVC Spreadsheet Control | Syncfusion
description: Learn here all about Data Binding in Syncfusion EJ2 ASP.NET MVC Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Data Binding
documentation: ug
---


# Data Binding in ASP.NET MVC Spreadsheet Control

The Spreadsheet uses `DataManager`, which supports both RESTful JSON data services and local JavaScript object array binding to a range. The `dataSource` property can be assigned either with the instance of `DataManager` or JavaScript object array collection.

N> To bind data to a cell, use `cell data binding` support.

## Local data

To bind local data to the Spreadsheet, you can assign a JavaScript object array to the `dataSource` property.

Refer to the following code example for local data binding.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/local-data-binding/razor %}
{% endhighlight %}
{% highlight c# tabtitle="LocalDataController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/local-data-binding/localDataController.cs %}
{% endhighlight %}
{% endtabs %}




N> The local data source can also be provided as an instance of the `DataManager`. By default, `DataManager` uses `JsonAdaptor` for local data-binding.

### Customizing column data mapping

By default, when a data source is bound to a sheet, columns are auto-assigned from the data source fields sequentially. This means that the first field in the data source is assigned to Column A, the second to Column B, and so on, sequentially. However, now you can customize the column assignments by specifying the appropriate field names in the desired order using the `fieldsOrder` property.

> The `fieldsOrder` property accepts an array of field names. The order of the field names determines the worksheet columns to which the corresponding data source fields are mapped.

The following code example demonstrates how to customize the mapping of column data:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/field-mapping/razor %}
{% endhighlight %}
{% highlight c# tabtitle="FieldMappingController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/field-mapping/fieldMappingController.cs %}
{% endhighlight %}
{% endtabs %}

## Remote data

To bind remote data to the Spreadsheet control, assign service data as an instance of `DataManager` to the `dataSource` property. To interact with remote data source, provide the service endpoint `url`.

Refer to the following code example for remote data binding.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/remote-data-binding/razor %}
{% endhighlight %}
{% highlight c# tabtitle="RemoteDataController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/remote-data-binding/remoteDataController.cs %}
{% endhighlight %}
{% endtabs %}



N> By default, `DataManager` uses **ODataAdaptor** for remote data-binding.

### Binding with OData services

`OData` is a standardized protocol for accessing data services. You can retrieve data from an OData service using DataManager. The following code example demonstrates remote data binding using an OData service.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/odata-adaptor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ODataController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/odata-adaptor/oDataController.cs %}
{% endhighlight %}
{% endtabs %}



### Web API

You can use WebApiAdaptor to bind spreadsheet with Web API created using OData endpoint.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/webapi-adaptor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="WebApiController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/webapi-adaptor/webApiController.cs %}
{% endhighlight %}
{% endtabs %}



## Cell data binding

The Spreadsheet can bind data to an individual cell in a worksheet. To achieve this, use the `value` property.

Refer to the following code example for cell data binding.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/cell-data-binding/razor %}
{% endhighlight %}
{% highlight c# tabtitle="CellDataController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/cell-data-binding/cellDataController.cs %}
{% endhighlight %}
{% endtabs %}



N> The cell data binding also supports formula, style, number format, and more.

## Dynamic data binding and data source change event

You can dynamically change the Spreadsheet data source by updating the `dataSource` property of a `range` in the worksheet. The `dataSourceChanged` event is triggered when a row is edited, inserted, or deleted within the data source range. The `action` property in the event arguments indicates whether the operation is an `edit`, `add`, or `delete` action.

The following table defines the arguments of the `dataSourceChanged` event.

| Property | Type | Description |
|-----|-----|-------|
| action | string | Indicates the type of action, such as `edit`, `add`, or `delete`, performed in the data source range. |
| data | object[] | Specifies the modified data for an `edit` action, new data for an `add` action, or deleted data for a `delete` action. |
| rangeIndex | number | Specifies the index of the data source range. |
| sheetIndex | number | Specifies the index of the worksheet that contains the data source. |

N> During an add action, all field values in the event data are initially `null`. If the primary key must contain a value before the data is sent to the backend service, assign the primary key and then process the change as an edit action.

To trigger the `dataSourceChanged` event with the `add` action, insert a row immediately below the end of the data source range.

Bind the `dataSourceChanged` event to the Spreadsheet and use its event arguments to identify whether an edit, add, or delete action occurred in the data source range.

After running the sample, edit, insert, or delete a row in the data source range and verify that the `dataSourceChanged` event is triggered with the corresponding action.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/dynamic-data-binding/razor %}
{% endhighlight %}
{% highlight c# tabtitle="DynamicDataController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/dynamic-data-binding/dynamicDataController.cs %}
{% endhighlight %}
{% endtabs %}

## Dynamic data binding using updateRange method

The `updateRange` method allows you to dynamically update the `dataSource` in a spreadsheet without manually iterating through each cell. This method is especially useful for efficiently applying bulk updates to a specific range within the spreadsheet.

To use the `updateRange` method, provide the new `dataSource` and specify the starting cell for the update using the `startCell` property of the `RangeModel`. Additionally, set the `sheetIndex` to target the appropriate sheet for the update.

The following code example demonstrates how to dynamically update data using the `updateRange` method.

To update a range dynamically:

1. Create the new data source.
2. Specify the starting cell using the `startCell` property.
3. Specify the target worksheet using the `sheetIndex` property.
4. Pass the configured range to the `updateRange` method.

After running the sample, verify that the new data is populated from the specified starting cell in the target worksheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/dynamic-data-binding-cs2/razor %}
{% endhighlight %}
{% highlight c# tabtitle="UpdateRangeController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/dynamic-data-binding-cs2/updateRangeController.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Filtering](filter)
* [Sorting](sort)
* [Hyperlink](link)