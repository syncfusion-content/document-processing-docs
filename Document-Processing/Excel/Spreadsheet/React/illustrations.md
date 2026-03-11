---
layout: post
title: Illustrations in React Spreadsheet component | Syncfusion
description: Learn here all about Illustrations in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Illustrations 
platform: document-processing
documentation: ug
---

# Illustrations in React Spreadsheet component

Illustrations allow you to insert images, shapes, and graphic objects into the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Spreadsheet. This feature helps to enhance the visual presentation of your worksheet by embedding graphical elements alongside your data.

## Image

Adding images to a spreadsheet can enhance the visual appeal and help to convey information more clearly.

>* The default value for the `allowImage` property is `true`.

### Insert Image

You can insert an image by using one of the following ways:

* Select the **Insert** tab in the Ribbon toolbar, and then choose the **Image** option.  
* Use the `insertImage()` method programmatically.

The available parameters in the `insertImage()` method are:

| Parameter | Type | Description |
|-----|------|----|
| images | `ImageModel` | Specifies the options to insert image in spreadsheet. |
| range(optional) | `string` | Specifies the range in spreadsheet. |

The available arguments in `ImageModel` are:

* `src`: Specifies the image source.
* `id`: Specifies the image element ID.
* `height`: Specifies the height of the image.
* `width`: Specifies the width of the image.
* `top`: Specifies the top position of the image.
* `left`: Specifies the left position of the image.

>* In a spreadsheet, you can add many types of image files, including IMAGE, JPG, PNG, GIF, and JPEG formats.

### Delete Image

* To delete an image, select the image and press the **Delete** key.  
* You can also use the `deleteImage()` method programmatically.  

The available parameters in the `deleteImage()` method are:

| Parameter | Type | Description |
|-----|------|----|
| id | `string` | Specifies the id of the image element to be deleted. |
| range(optional) | `string` | Specifies the range in spreadsheet. |

### Image Customization

The image feature allows you to view and insert an image in a spreadsheet. You can customize the image by resizing it to change the height and width, and by moving it to another position within the worksheet.

#### Height and Width

* You can change the height and width of the image by resizing.
* Use the `height` and `width` property in the `insertImage()` method programmatically.

#### Top and Left

* You can change the position of the image by drag and drop.
* Use the `top` and `left` property in the `insertImage()` method programmatically.

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

## Chart

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

### Insert Chart

You can insert a chart by using one of the following ways,

* Select the chart icon in the Ribbon toolbar under the **Insert** tab.
* Use the [`insertChart()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#insertchart) method programmatically.

The available parameter in the [`insertChart()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#insertchart) method is,

| Parameter | Type | Description |
|-----|------|----|
| chart | `ChartModel` | Specifies the options to insert a chart in the spreadsheet. |

The available arguments in the `ChartModel` are:

* `type`: Specifies the type of chart.
* `theme`: Specifies the theme of the chart.
* `isSeriesInRows`: Specifies whether to switch the row or column.  
* `range`: Specifies the selected or specified range.
* `id`: Specifies the chart element ID.
* `markerSettings`: Specifies the marker settings. The marker provides information about data points in the series and is currently applicable only to line charts.

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

* To delete a chart, simply select the chart and press the **Delete** key.
* You can also use the [`deleteChart()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#deletechart) method programmatically.

The available parameter in the [`deleteChart()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#deletechart) method is,

| Parameter | Type | Description |
|-----|------|----|
| id | `string` | Specifies the id of the chart element to be deleted. |

### Chart Customization

The chart feature allows you to insert and manage charts in a spreadsheet with flexible customization options. You can adjust both the size and position of charts to better fit your worksheet layout:

* **Resize** – Change the height and width of the chart by dragging its edges or corners.  
* **Reposition** – Move the chart to a different location in the worksheet using drag-and-drop.  

These customization options make it easy to organize charts alongside your data for clearer visualization and presentation.


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
You can customize line chart markers to improve their appearance and readability. By using the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#actionbegin) event, you can modify properties such as:

* **Shape** – Change the marker shape (e.g., circle, square, diamond).  
* **Size** – Adjust the marker size for better visibility.  
* **Fill Color** – Apply a custom fill color to highlight data points.  
* **Border** – Customize the border style and color for distinction.  

In the following example, the marker appearance (shape and size) is modified while creating the line chart through UI interaction, demonstrating how flexible customization can enhance chart visualization.

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