---
layout: post
title: Illustrations in EJ2 ASP.NET MVC Syncfusion Spreadsheet Component
description: Learn here all about Illustrations in Syncfusion EJ2 ASP.NET MVC Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Illustrations
documentation: ug
---


# Illustrations in ASP.NET MVC Spreadsheet control

Illustrations helps you to insert a image, shapes and graphic objects in the Essential JS 2 spreadsheet.

## Image

Adding images to a spreadsheet can enhance the visual appeal and help convey information more clearly.

N> * The default value for [`allowImage`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowImage) property is `true`.

### Insert Image

You can insert an image in one of the following ways:

* Open the **Insert** tab in the Ribbon, choose **Image**, and select the image to insert.
* Use the `insertImage()` method to insert an image programmatically.

The available parameters in `insertImage()` method are,

| Parameter | Type | Description |
|-----|------|----|
| images | `ImageModel` | Specifies the options to insert image in spreadsheet. |
| range(optional) | `string` | Specifies the range in spreadsheet. |

The available arguments in `ImageModel` are:

* src: Specifies the image source.
* id: Specifies image element id.
* height: Specifies the height of the image.
* width: Specifies the width of the image.
* top: Specifies the top position of the image.
* left: Specifies the left position of the image.

N> * The Spreadsheet supports image formats such as JPG, JPEG, PNG, and GIF.

### Delete Image

You can delete an image in one of the following ways:

* Select the image and press the `Delete` key.
* Use the `deleteImage()` method to delete the image programmatically.

The available parameters in `deleteImage()` method are,

| Parameter | Type | Description |
|-----|------|----|
| id | `string` | Specifies the id of the image element to be deleted. |
| range(optional) | `string` | Specifies the range in spreadsheet. |

### Image Customization

The Image feature allows you to insert, resize, and reposition an image in the Spreadsheet.

#### Height and Width

* Resize the image to change its height and width.
* Use the `height` and `width` properties with the `insertImage()` method to configure the image dimensions programmatically.

#### Top and Left

* Drag and drop the image to change its position.
* Use the `top` and `left` properties with the `insertImage()` method to configure the image position programmatically.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/image/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ImageController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/image/imageController.cs %}
{% endhighlight %}
{% endtabs %}

After running the sample, verify that the image is inserted at the specified position with the configured height and width.


### Limitations of Image

The Image feature has the following limitations:

* Images cannot be resized using the corner handles.
* Copying and pasting images from external sources has limited support.

## Chart

A chart provides a graphical representation of numerical or qualitative data. It displays the selected data range using the x-axis and y-axis. Use the [`allowChart`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowChart) property to enable or disable chart functionality.

N> * The default value for the [`allowChart`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowChart) property is `true`.

### Types of chart

The following types of charts are available in the Spreadsheet.

N>* Column Chart
<br/>* Bar Chart
<br/>* Area Chart
<br/>* Line Chart
<br/>* Pie Chart
<br/>* Scatter Chart

### Insert Chart

You can insert a chart in one of the following ways:

* Select the data range, open the **Insert** tab in the Ribbon, and choose the required chart type.
* Use the `insertChart()` method to insert a chart programmatically.

The available parameter in the `insertChart()` method is,

| Parameter | Type | Description |
|-----|------|----|
| chart | `ChartModel` | Specifies the options to insert a chart in the spreadsheet. |

The available arguments in the `ChartModel` are:

* type: Specifies the type of chart.
* theme: Specifies the theme of a chart.
* isSeriesInRows: Specifies to switch the row or a column.
* range: Specifies the selected range or specified range.
* id: Specifies the chart element id.
* markerSettings: Specifies the marker settings. The marker is used to provide information about the data points in the series and is currently only applicable to the line chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/chart-cs1/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ChartController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/chart-cs1/chartController.cs %}
{% endhighlight %}
{% endtabs %}

After running the sample, verify that the chart displays the values from the selected data range.

### Delete Chart

You can delete a chart in one of the following ways:

* Select the chart and press the `Delete` key.
* Use the `deleteChart()` method to delete the chart programmatically.

The available parameter in the `deleteChart()` method is,

| Parameter | Type | Description |
|-----|------|----|
| id | `string` | Specifies the id of the chart element to be deleted. |

### Chart Customization

The Chart feature allows you to insert, resize, and reposition a chart in the Spreadsheet.

* Resize the chart to change its height and width.
* Drag and drop the chart to change its position.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/chart/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ChartController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/chart/chartController.cs %}
{% endhighlight %}
{% endtabs %}

#### Customization of line chart markers

Using the [`actionBegin`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ActionBegin) event to customize the shape, size, fill color, and border of line chart markers. In the event handler, identify the chart-creation action and update the corresponding marker settings before the chart is rendered.

The following example demonstrates how to customize the shape and size of markers while creating a line chart through the UI.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/chart-cs2/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ChartController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/chart-cs2/chartController.cs %}
{% endhighlight %}
{% endtabs %}

After running the sample, create a line chart and verify that the configured marker shape and size are applied.

### Limitations of Chart

The Chart feature has the following limitations:

* Inserting or deleting rows within the chart data source does not automatically update the chart.
* Copying and pasting values into the chart data source does not automatically update the chart.
* Charts cannot be resized using the corner handles.

## See Also

* [Formatting](./formatting)
* [Rows and columns](./rows-and-columns)
* [Hyperlink](./link)
* [Sorting](./sort)
