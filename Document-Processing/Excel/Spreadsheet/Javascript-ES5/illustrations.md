---
layout: post
title: Illustrations in EJ2 Javascript Spreadsheet control | Syncfusion
description: Learn here all about Illustrations in Syncfusion EJ2 Javascript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Illustrations 
documentation: ug
---

# Illustrations in EJ2 Javascript Spreadsheet control

Illustrations help you to insert an image, shapes, and graphic objects in the Essential<sup style="font-size:70%">&reg;</sup> JS 2 spreadsheet.

## Image

Adding images to a spreadsheet can enhance the visual appeal and help to convey information more clearly.

> The default value for the `allowImage` property is `true`.

### Insert Image

You can insert the image by using one of the following ways,

* Selecting the Insert tab in the Ribbon toolbar, and then choose the Image tab.
* Use the `insertImage()` method programmatically.

The available parameters in `insertImage()` method are,

| Parameter | Type | Description |
|-----|------|----|
| images | `ImageModel` | Specifies the options to insert image in spreadsheet. |
| range(optional) | `string` | Specifies the range in spreadsheet. |

The available arguments in `ImageModel` are:

* src: Specifies the image source.
* id: Specifies the image element id.
* height: Specifies the height of the image.
* width: Specifies the width of the image.
* top: Specifies the top position of the image.
* left: Specifies the left side of the image.

> In a spreadsheet, you can add many types of image files, including IMAGE, JPG, PNG, GIF, and JPEG files.

### Delete Image

* If you want to delete the image, just select the image, and then press the Delete key.
* Use the `deleteImage()` method programmatically.

The available parameters in `deleteImage()` method are,

| Parameter | Type | Description |
|-----|------|----|
| id | `string` | Specifies the id of the image element to be deleted. |
| range(optional) | `string` | Specifies the range in spreadsheet. |

### Image Customization

Image feature allows you to view and insert an image in a spreadsheet, and you can change the height and width of the image by resizing and moving it to another position.

#### Height and Width

* You can change the height and width of the image by resizing.
* Use the `height` and `width` property in the `insertImage()` method programmatically.

#### Top and Left

* You can change the position of the image by drag and drop.
* Use the `top` and `left` property in the `insertImage()` method programmatically.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/image-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/image-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/image-cs1" %}

### Limitations of Image

The following features have some limitations in Image:

* Corner resizing option in the image element.
* Copy and paste the external image.

## Chart

A chart is a graphical representation of data, that organizes and represents a set of numerical or qualitative data. It mostly displays the selected range of data in terms of `x`-axis and `y`-axis. You can use the [`allowChart`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowchart) property to enable or disable the chart functionality.

> The default value for the [`allowChart`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowchart) property is `true`.

### Types of chart

The following types of charts are available in the Spreadsheet.

>* Column Chart
>* Bar Chart
>* Area Chart
>* Line Chart
>* Pie Chart
>* Scatter Chart

### Insert Chart

You can insert the chart by using one of the following ways,

* Select the chart icon in the Ribbon toolbar under the Insert Tab.

* Use the [`insertChart()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#insertchart) method programmatically.

The available parameter in the [`insertChart()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#insertchart) method is,

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
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/chart-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/chart-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/chart-cs2" %}

### Delete Chart

* If you want to delete the chart, just select the chart, and then press the Delete key.

* Use the [`deleteChart()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#deletechart) method programmatically.

The available parameter in the [`deleteChart()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#deletechart) method is,

| Parameter | Type | Description |
|-----|------|----|
| id | `string` | Specifies the id of the chart element to be deleted. |

### Chart Customization

Chart feature allows you to view and insert a chart in a spreadsheet, and you can change the height and width of the chart by resizing and moving it to another position.

* You can change the height and width of the chart by resizing.

* You can change the position of the chart by drag and drop.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/chart-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/chart-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/chart-cs1" %}

#### Customization of line chart markers

Using the [`actionBegin`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#actionbegin) event, you can change the shape, size, fill color, and border of the line chart marker. In the following example, you can see the modified marker appearance, such as shape and size, while creating the line chart with UI interaction.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/chart-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/chart-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/chart-cs3" %}

### Limitations of Chart

The following features have some limitations in the Chart:

* Insert row/delete row between the chart data source will not reflect the chart.
* Copy/paste into the chart data source will not reflect the chart.
* Corner resizing option in chart element.

## See Also

* [Formatting](./formatting)
* [Rows and columns](./rows-and-columns)
* [Hyperlink](./link)
* [Sorting](./sort)
