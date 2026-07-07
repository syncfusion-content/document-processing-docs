---
layout: post
title: Illustrations in EJ2 ASP.NET Core Syncfusion Spreadsheet Component
description: Learn here all about Illustrations in Syncfusion EJ2 ASP.NET CORE Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Illustrations
documentation: ug
---


# Illustrations in ASP.NET Core Spreadsheet control

Illustrations allow you to insert images, shapes, and graphic objects into the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Spreadsheet. This feature helps to enhance the visual presentation of your worksheet by embedding graphical elements alongside your data.

## Image

Adding images to a spreadsheet can enhance the visual appeal and help to convey information more clearly.

>* The default value for the [`allowImage`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowImage) property is `true`.

### Insert Image

You can insert an image by using one of the following ways:

* Select the **Insert** tab in the Ribbon toolbar, and then choose the **Image** option.  
* Use the `insertImage` method programmatically.

The available parameters in the `insertImage` method are,

| Parameter | Type | Description |
|-----|------|----|
| images | `ImageModel` | Specifies the options to insert image in spreadsheet. |
| range(optional) | `string` | Specifies the range in spreadsheet. |

The available arguments in `ImageModel` are:

| Property | Description |
|----------|-------------|
| [src](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Image.html#Syncfusion_EJ2_Spreadsheet_Image_Src) | Specifies the image source. |
| [id](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Image.html#Syncfusion_EJ2_Spreadsheet_Image_Src) | Specifies the image element id. |
| [height](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Image.html#Syncfusion_EJ2_Spreadsheet_Image_Height) | Specifies the height of the image. |
| [width](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Image.html#Syncfusion_EJ2_Spreadsheet_Image_Width) | Specifies the width of the image. |
| [top](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Image.html#Syncfusion_EJ2_Spreadsheet_Image_Top) | Specifies the top position of the image. |
| [left](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Image.html#Syncfusion_EJ2_Spreadsheet_Image_Left) | Specifies the left side of the image. |
>* In a spreadsheet, you can add many types of image files, including IMAGE, JPG, PNG, GIF, and JPEG formats.

### Delete Image

* To delete an image, select the image and press the **Delete** key.  
* You can also use the `deleteImage` method programmatically.  

The available parameters in the `deleteImage` method are:

| Parameter | Type | Description |
|-----|------|----|
| id | `string` | Specifies the id of the image element to be deleted. |
| range(optional) | `string` | Specifies the range in spreadsheet. |

### Image Customization

The image feature allows you to view and insert an image in a spreadsheet. You can customize the image by resizing it to change the height and width, and by moving it to another position within the worksheet.

#### Height and Width

* You can change the height and width of the image by resizing.
* Use the `height` and `width` property in the `insertImage` method programmatically.

#### Top and Left

* You can change the position of the image by drag and drop.
* Use the `top` and `left` property in the `insertImage` method programmatically.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/image/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ImageController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/image/imageController.cs %}
{% endhighlight %}
{% endtabs %}

### Limitations of Image

The following features have some limitations in Image:

* Corner resizing option in the image element.
* Copy and paste the external image.

## Chart

A chart is a graphical representation of data, that organizes and represents a set of numerical or qualitative data. It mostly displays the selected range of data in terms of `x`-axis and `y`-axis. You can use the [`allowChart`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowChart) property to enable or disable the chart functionality.

>* The default value for the [`allowChart`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowChart) property is `true`.

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
* Use the [`insertChart`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#insertchart) method programmatically.

The available parameter in the [`insertChart`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#insertchart) method is,

| Parameter | Type | Description |
|-----|------|----|
| chart | `ChartModel` | Specifies the options to insert a chart in the spreadsheet. |

The available arguments in the `ChartModel` are:

| Property | Type | Description |
|----------|------|-------------|
| [id](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_Id) | `string` | Specifies the chart element id. |
| [type](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_Type) | `ChartType` | Specifies the type of chart. |
| [theme](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_Theme) | `ChartTheme` | Specifies the theme of the chart. |
| [range](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_Range) | `string` | Specifies the selected or specified data range for the chart. |
| [isSeriesInRows](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_IsSeriesInRows) | `boolean` | Specifies whether series are organized in rows (true) or columns (false). |
| [title](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_Title) | `string` | Specifies the title of the chart. |
| [width](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_Width) | `number` | Specifies the width of the chart. |
| [height](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_Height) | `number` | Specifies the height of the chart. |
| [dataLabelSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_DataLabelSettings) | `DataLabelSettingsModel` | Specifies the data label settings for the series. |
| [markerSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_MarkerSettings) | `MarkerSettingsModel` | Specifies the marker settings for the series (applicable to line charts). |
| [legendSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_LegendSettings) | `LegendSettingsModel` | Specifies options for customizing the chart legend. |
| [primaryXAxis](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_PrimaryXAxis) | `AxisModel` | Specifies options to configure the horizontal axis. |
| [primaryYAxis](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Chart.html#Syncfusion_EJ2_Spreadsheet_Chart_PrimaryYAxis) | `AxisModel` | Specifies options to configure the vertical axis. |

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/chart-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ChartController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/chart-cs1/chartController.cs %}
{% endhighlight %}
{% endtabs %}

### Delete Chart

* To delete a chart, simply select the chart and press the **Delete** key.
* You can also use the [`deleteChart`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#deletechart) method programmatically.

The available parameter in the [`deleteChart`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#deletechart) method is,

| Parameter | Type | Description |
|-----|------|----|
| id | `string` | Specifies the id of the chart element to be deleted. |

### Chart Customization

The chart feature allows you to insert and manage charts in a spreadsheet with flexible customization options. You can adjust both the size and position of charts to better fit your worksheet layout:

* **Resize** – Change the height and width of the chart by dragging its edges or corners.  
* **Reposition** – Move the chart to a different location in the worksheet using drag-and-drop.  

These customization options make it easy to organize charts alongside your data for clearer visualization and presentation.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/chart/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ChartController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/chart/chartController.cs %}
{% endhighlight %}
{% endtabs %}

#### Customization of line chart markers
You can customize line chart markers to improve their appearance and readability. By using the [`actionBegin`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ActionBegin) event, you can modify properties such as:

* **Shape** – Change the marker shape (e.g., circle, square, diamond).  
* **Size** – Adjust the marker size for better visibility.  
* **Fill Color** – Apply a custom fill color to highlight data points.  
* **Border** – Customize the border style and color for distinction.  

In the following example, the marker appearance (shape and size) is modified while creating the line chart through UI interaction, demonstrating how flexible customization can enhance chart visualization.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/chart-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ChartController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/chart-cs2/chartController.cs %}
{% endhighlight %}
{% endtabs %}

### Limitations of Chart

The following features have some limitations in the Chart:

* Insert row/delete row between the chart data source will not reflect the chart.
* Copy/paste into the chart data source will not reflect the chart.
* Corner resizing option in chart element.

## Note

You can refer to our [ASP.NET Core Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-core-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET Core Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-core-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Formatting](./formatting)
* [Rows and columns](./rows-and-columns)
* [Hyperlink](./link)
* [Sorting](./sort)
