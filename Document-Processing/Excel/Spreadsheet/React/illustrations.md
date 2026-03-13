---
layout: post
title: Illustrations in React Spreadsheet component | Syncfusion
description: Learn here all about Illustrations in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Illustrations 
platform: document-processing
documentation: ug
---

# Illustrations in React Spreadsheet component

Illustrations help you to insert an image, shapes, and graphic objects in the Essential<sup style="font-size:70%">&reg;</sup> JS 2 spreadsheet.

## Embed Images in Spreadsheet

Adding images to a spreadsheet can enhance the visual appeal and help to convey information more clearly.

>* The default value for the [allowImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowimage) property is `true`.

### Insert a Image

You can insert the image by using one of the following ways,

* Selecting the Insert tab in the Ribbon toolbar, and then choose the Image tab.
* Use the [insertImage()](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertimage) method programmatically.

The available parameters in `insertImage()` method are,

| Parameter | Type | Description |
|-----|------|----|
| images | `ImageModel` | Specifies the options to insert image in spreadsheet. |
| range(optional) | `string` | Specifies the range in spreadsheet. |

The available arguments in [ImageModel](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/imagemodel) are:

* [src](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/imagemodel#src): Specifies the image source.
* [id](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/imagemodel#id): Specifies the image element id.
* [height](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/imagemodel#height): Specifies the height of the image.
* [width](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/imagemodel#width): Specifies the width of the image.
* [top](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/imagemodel#src): Specifies the top position of the image.
* [left](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/imagemodel#left): Specifies the left side of the image.

>* In a spreadsheet, you can add many types of image files, including IMAGE, JPG, PNG, GIF, and JPEG files.

### Delete Image

* If you want to delete the image, just select the image, and then press the Delete key.
* Use the [deleteImage()](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deleteimage) method programmatically.

The available parameters in `deleteImage()` method are,

| Parameter | Type | Description |
|-----|------|----|
| id | `string` | Specifies the id of the image element to be deleted. |
| range(optional) | `string` | Specifies the range in spreadsheet. |

### Image Customization

Image feature allows you to view and insert an image in a spreadsheet, and you can change the height and width of the image by resizing and moving it to another position.

#### Height and Width

* You can change the height and width of the image by resizing.
* Use the [height](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/imagemodel#height) and [width](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/imagemodel#width) property in the [insertImage()](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertimage) method programmatically.

#### Top and Left

* You can change the position of the image by drag and drop.
* Use the [top](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/imagemodel#top) and [left](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/imagemodel#left) property in the [insertImage()](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertimage) method programmatically.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/image-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/image-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/image-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/image-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/image-cs1" %}

### Limitations of Image

The following features have some limitations in Image:

* Corner resizing option in the image element.
* Copy and paste the external image.

## Integrating Charts in Spreadsheet

A chart is a graphical representation of data, that organizes and represents a set of numerical or qualitative data. It mostly displays the selected range of data in terms of `x`-axis and `y`-axis. You can use the [`allowChart`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowchart) property to enable or disable the chart functionality.

>* The default value for the [`allowChart`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowchart) property is `true`.

### Types of chart

The following types of charts are available in the Spreadsheet.

>* Column Chart
>* Bar Chart
>* Area Chart
>* Line Chart
>* Pie Chart
>* Scatter Chart

### Insert a Chart

You can insert the chart by using one of the following ways,

* Select the chart icon in the Ribbon toolbar under the Insert Tab.
* Use the [`insertChart()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#insertchart) method programmatically.

The available parameter in the [`insertChart()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#insertchart) method is,

| Parameter | Type | Description |
|-----|------|----|
| chart | `ChartModel` | Specifies the options to insert a chart in the spreadsheet. |

The available arguments in the [ChartModel](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel) are:

* [id](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#id): Specifies the chart element id.
* [type](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#type): Specifies the type of chart.
* [theme](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#theme): Specifies the theme of the chart.
* [range](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#range): Specifies the selected or specified data range for the chart.
* [isSeriesInRows](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#isseriesinrows): Specifies whether series are organized in rows (true) or columns (false).
* [title](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#title): Specifies the title of the chart.
* [width](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#width): Specifies the width of the chart.
* [height](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#height): Specifies the height of the chart.
* [dataLabelSettings](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#datalabelsettings): Specifies the data label settings for the series.
* [markerSettings](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#markersettings): Specifies the marker settings for the series (applicable to line charts).
* [legendSettings](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#legendsettings): Specifies options for customizing the chart legend.
* [primaryXAxis](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#primaryxaxis): Specifies options to configure the horizontal axis.
* [primaryYAxis](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/chartmodel#primaryyaxis): Specifies options to configure the vertical axis.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/chart-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/chart-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/chart-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/chart-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/chart-cs2" %}

### Delete Chart

* If you want to delete the chart, just select the chart, and then press the Delete key.
* Use the [`deleteChart()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#deletechart) method programmatically.

The available parameter in the [`deleteChart()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#deletechart) method is,

| Parameter | Type | Description |
|-----|------|----|
| id | `string` | Specifies the id of the chart element to be deleted. |

### Chart Customization

Chart feature allows you to view and insert a chart in a spreadsheet, and you can change the height and width of the chart by resizing and moving it to another position.

* You can change the height and width of the chart by resizing.

* You can change the position of the chart by drag and drop.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/chart-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/chart-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/chart-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/chart-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/chart-cs1" %}

#### Customization of line chart markers

Using the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#actionbegin) event, you can change the shape, size, fill color, and border of the line chart marker. In the following example, you can see the modified marker appearance, such as shape and size, while creating the line chart with UI interaction.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/chart-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/chart-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/chart-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/chart-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/chart-cs3" %}

### Limitations of Chart

The following features have some limitations in the Chart:

* Insert row/delete row between the chart data source will not reflect the chart.
* Copy/paste into the chart data source will not reflect the chart.
* Corner resizing option in chart element.

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Formatting](./formatting)
* [Rows and columns](./rows-and-columns)
* [Hyperlink](./link)
* [Sorting](./sort)