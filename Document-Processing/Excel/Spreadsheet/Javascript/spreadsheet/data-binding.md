---
layout: post
title: Data binding in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in ##Platform_Name## Spreadsheet control

{% if page.publishingplatform == "typescript" %}

The Spreadsheet uses [`DataManager`](https://helpej2.syncfusion.com/documentation/data/), which supports both RESTful JSON data services and local JavaScript object array binding to a range. The `dataSource` property can be assigned either with the instance of [`DataManager`](https://helpej2.syncfusion.com/documentation/data/) or JavaScript object array collection.

{% elsif page.publishingplatform == "javascript" %}

The Spreadsheet uses [`DataManager`](https://helpej2.syncfusion.com/javascript/documentation/data/), which supports both RESTful JSON data services and local JavaScript object array binding to a range. The `dataSource` property can be assigned either with the instance of [`DataManager`](https://helpej2.syncfusion.com/javascript/documentation/data/) or JavaScript object array collection.

{% endif %}

> To bind data to a cell, use `cell data binding` support.

## Local data

To bind local data to the Spreadsheet, you can assign a JavaScript object array to the `dataSource` property.

Refer to the following code example for local data binding.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/data-binding-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/data-binding-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/data-binding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/data-binding-cs1" %}
{% endif %}

{% if page.publishingplatform == "typescript" %}

> The local data source can also be provided as an instance of the [`DataManager`](https://helpej2.syncfusion.com/documentation/data/). By default, [`DataManager`](https://helpej2.syncfusion.com/documentation/data/) uses [`JsonAdaptor`](https://ej2.syncfusion.com/documentation/data/adaptors#json-adaptor) for local data-binding.

{% elsif page.publishingplatform == "javascript" %}

> The local data source can also be provided as an instance of the [`DataManager`](https://helpej2.syncfusion.com/javascript/documentation/data/). By default, [`DataManager`](https://helpej2.syncfusion.com/javascript/documentation/data/) uses [`JsonAdaptor`](https://ej2.syncfusion.com/javascript/documentation/data/adaptors#json-adaptor) for local data-binding.

{% endif %}

### Customizing column data mapping

{% if page.publishingplatform == "typescript" %}

By default, when a data source is bound to a sheet, columns are auto-assigned from the data source fields sequentially. This means that the first field in the data source is assigned to Column A, the second to Column B, and so on, sequentially. However, now you can customize the column assignments by specifying the appropriate field names in the desired order using the [fieldsOrder](https://ej2.syncfusion.com/documentation/api/spreadsheet/rangeModel/#fieldsorder) property.

{% elsif page.publishingplatform == "javascript" %}

By default, when a data source is bound to a sheet, columns are auto-assigned from the data source fields sequentially. This means that the first field in the data source is assigned to Column A, the second to Column B, and so on, sequentially. However, now you can customize the column assignments by specifying the appropriate field names in the desired order using the [fieldsOrder](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/rangeModel/#fieldsorder) property.

{% endif %}

> You can customize the mapping of column data only in the local data binding support.

The following code example demonstrates how to customize the mapping of column data:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/field-mapping-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/field-mapping-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/field-mapping-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/field-mapping-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/field-mapping-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/field-mapping-cs1" %}

{% endif %}

## Remote data

{% if page.publishingplatform == "typescript" %}

To bind remote data to the Spreadsheet control, assign service data as an instance of [`DataManager`](https://helpej2.syncfusion.com/documentation/data/) to the `dataSource` property. To interact with remote data source, provide the service endpoint `url`.

{% elsif page.publishingplatform == "javascript" %}

To bind remote data to the Spreadsheet control, assign service data as an instance of [`DataManager`](https://helpej2.syncfusion.com/javascript/documentation/data/) to the `dataSource` property. To interact with remote data source, provide the service endpoint `url`.

{% endif %}
 
Refer to the following code example for remote data binding.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/data-binding-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/data-binding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/data-binding-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/data-binding-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/data-binding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/data-binding-cs2" %}
{% endif %}

> By default, `DataManager` uses **ODataAdaptor** for remote data-binding.

### Binding with OData services

`OData` is a standardized protocol for creating and consuming data. You can retrieve data from OData service using the DataManager. Refer to the following code example for remote Data binding using OData service.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/data-binding-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/data-binding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/data-binding-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/data-binding-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/data-binding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/data-binding-cs3" %}
{% endif %}

### Web API

You can use WebApiAdaptor to bind spreadsheet with Web API created using OData endpoint.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/data-binding-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/data-binding-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/data-binding-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/data-binding-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/data-binding-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/data-binding-cs4" %}
{% endif %}

## Cell data binding

The Spreadsheet control can bind the data to individual cell in a sheet . To achive this you can use the
`value` property.

Refer to the following code example for cell data binding.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/data-binding-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/data-binding-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/data-binding-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/data-binding-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/data-binding-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/data-binding-cs5" %}
{% endif %}

> The cell data binding also supports formula, style, number format, and more.

## Dynamic data binding and Datasource change event

You can dynamically change the datasource of the spreadsheet by changing the `dataSource` property of the `range` object of the `sheet`. The `dataSourceChanged` event handler will be triggered when editing, inserting, and deleting a row in the datasource range. This event will be triggered with a parameter named `action` which indicates the `edit`, `add` and `delete` actions for the respective ones.

The following table defines the arguments of the `dataSourceChanged` event.

| Property | Type | Description |
|-----|-----|-------|
| action | string | Indicates the type of action such as `edit`, `add`, and `delete` performed in the datasource range. |
| data | object[] | Modified data for `edit` action; New data for `add` action; Deleted data for `delete` action. |
| rangeIndex | number | Specifies the range index of the datasource. |
| sheetIndex | number | Specifies the sheet index of the datasource. |

> For `add` action, the value for all the fields will be `null` in the data. In the case that you do not want the primary key field to be null which needs to be updated in the backend service, you can use `edit` action after updating the primary key field to update in the backend service. <br><br>
> For inserting a row at the end of the datasource range, you should insert a row below at the end of the range to trigger the `dataSourceChanged` event with action `add`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/dynamic-data-binding-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/dynamic-data-binding-cs1" %}
{% endif %}

## Dynamic data binding using updateRange method

{% if page.publishingplatform == "typescript" %}

The [updateRange](https://ej2.syncfusion.com/documentation/api/spreadsheet/#updaterange) method allows you to dynamically update the [dataSource](https://ej2.syncfusion.com/documentation/api/spreadsheet/rangeModel/#datasource) in a spreadsheet without manually iterating through each cell. This method is especially useful for efficiently applying bulk updates to a specific range within the spreadsheet.

To use the [updateRange](https://ej2.syncfusion.com/documentation/api/spreadsheet/#updaterange) method, provide the new [dataSource](https://ej2.syncfusion.com/documentation/api/spreadsheet/rangeModel/#datasource) and specify the starting cell for the update using the [startCell](https://ej2.syncfusion.com/documentation/api/spreadsheet/rangeModel/#startcell) property of the `RangeModel`. Additionally, set the `sheetIndex` to target the appropriate sheet for the update.

The following code example demonstrates how to dynamically update data using the [updateRange](https://ej2.syncfusion.com/documentation/api/spreadsheet/#updaterange) method.

{% elsif page.publishingplatform == "javascript" %}

The [updateRange](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#updaterange) method allows you to dynamically update the [dataSource](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/rangeModel/#datasource) in a spreadsheet without manually iterating through each cell. This method is especially useful for efficiently applying bulk updates to a specific range within the spreadsheet.

To use the [updateRange](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#updaterange) method, provide the new [dataSource](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/rangeModel/#datasource) and specify the starting cell for the update using the [startCell](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/rangeModel/#startcell) property of the `RangeModel`. Additionally, set the `sheetIndex` to target the appropriate sheet for the update.

The following code example demonstrates how to dynamically update data using the [updateRange](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#updaterange) method.

{% endif %}

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/dynamic-data-binding-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/dynamic-data-binding-cs2" %}
{% endif %}

## See Also

* [Filtering](./filter)
* [Sorting](./sort)
* [Hyperlink](./link)
* [`Collaborative Editing`](use-cases/collaborative-editing)
