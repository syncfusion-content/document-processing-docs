---
layout: post
title: Data Binding in EJ2 ASP.NET CORE Spreadsheet Control | Syncfusion
description: Learn here all about Data Binding in Syncfusion EJ2 ASP.NET CORE Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Data Binding
documentation: ug
---


# Data Binding in ASP.NET Core Spreadsheet Control

The Spreadsheet supports binding data to a range from RESTful JSON services and local JavaScript object arrays through `DataManager`. The `dataSource` property accepts either a `DataManager` instance or a JavaScript object array collection.

N> To bind data to a cell, use `cell data binding` support.

## Local data

To bind local data to the Spreadsheet, you can assign a JavaScript object array to the `dataSource` property.

Refer to the following code example for local data binding.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/local-data-binding/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="LocalDataController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/local-data-binding/localDataController.cs %}
{% endhighlight %}
{% endtabs %}



N> The local datasource can also be provided as an instance of the `DataManager`. By default, `DataManager` uses `JsonAdaptor` for local data-binding.

### Customizing column data mapping

By default, datasource fields are mapped sequentially to worksheet columns. The first field is assigned to column A, the second field to column B, and so on. You can customize the column mapping by specifying the field names in the required order using the `fieldsOrder` property.

> You can customize the mapping of column data only in the local data binding support.

The following code example demonstrates how to customize the mapping of column data:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/field-mapping/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="FieldMappingController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/field-mapping/fieldMappingController.cs %}
{% endhighlight %}
{% endtabs %}


## Remote data

To bind remote data to the Spreadsheet, assign a `DataManager` instance configured with the service endpoint URL to the `dataSource` property. To interact with remote data source, provide the service endpoint `url`.

Refer to the following code example for remote data binding.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/remote-data-binding/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="RemoteDataController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/remote-data-binding/remoteDataController.cs %}
{% endhighlight %}
{% endtabs %}



N> By default, `DataManager` uses **ODataAdaptor** for remote data-binding.

### Binding with OData services

`OData` is a standardized protocol for creating and consuming data. You can use `DataManager` to retrieve data from an OData service. The following code example demonstrates remote data binding using an OData service.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/odata-adaptor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ODataController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/odata-adaptor/oDataController.cs %}
{% endhighlight %}
{% endtabs %}



### Web API

You can use WebApiAdaptor to bind spreadsheet with Web API created using OData endpoint.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/webapi-adaptor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="WebApiController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/webapi-adaptor/webApiController.cs %}
{% endhighlight %}
{% endtabs %}



## Cell data binding

The Spreadsheet can bind data to an individual cell in a worksheet. To achieve this, use the `value` property.

Refer to the following code example for cell data binding.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/cell-data-binding/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CellDataController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/cell-data-binding/cellDataController.cs %}
{% endhighlight %}
{% endtabs %}



N> The cell data binding also supports formula, style, number format, and more.

## Dynamic data binding and data source change event

You can dynamically change the data source by updating the `dataSource` property of a range in the worksheet. The `dataSourceChanged` event is triggered when a row in the data source range is edited, inserted, or deleted. The event provides an `action` argument that indicates whether the performed action is `edit`, `add`, or `delete`.

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
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/dynamic-data-binding/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="DynamicDataController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/dynamic-data-binding/dynamicDataController.cs %}
{% endhighlight %}
{% endtabs %}

## Dynamic data binding using updateRange method

The `updateRange` method dynamically updates the `dataSource` in the Spreadsheet without updating each cell individually. This method is especially useful for efficiently applying bulk updates to a specific range within the spreadsheet.

To use the `updateRange` method, provide the new `dataSource`, specify the starting cell using the `startCell` property of `RangeModel`, and set `sheetIndex` to identify the worksheet to update.

The following code example demonstrates how to dynamically update data using the `updateRange` method.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/dynamic-data-binding-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="UpdateRangeController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/dynamic-data-binding-cs2/updateRangeController.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Filtering](filter)
* [Sorting](sort)
* [Hyperlink](link)