---
layout: post
title: Insert Charts in Blazor Spreadsheet | Syncfusion
description: Learn about inserting charts in the Syncfusion Blazor Spreadsheet component to visualize worksheet data effectively.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Insert Charts in Blazor Spreadsheet
You can insert a chart from your worksheet either through the user interface or programmatically.

## Insert a Chart Using the UI

You can insert a chart by selecting the chart icon in the Ribbon toolbar under the Insert Tab. The chart will be inserted based on the selected range of cells in the Spreadsheet.

## Insert a Chart Programmatically

Use the [InsertChartAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_InsertChartAsync_Syncfusion_Blazor_Spreadsheet_ChartModel_) method to insert the chart programmatically.

The available parameter in the [InsertChartAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_InsertChartAsync_Syncfusion_Blazor_Spreadsheet_ChartModel_) method is:

| Parameter | Type | Description |
|-----|------|----|
| chart | [ChartModel](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ChartModel.html) | Specifies the options to insert a chart in the spreadsheet. |

The available arguments in the [ChartModel](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ChartModel.html) are:

* **ChartType**: Specifies the type of chart.
* **Theme**: Specifies the theme of a chart.
* **IsSeriesInRows**: Specifies whether data should be interpreted by rows (true) or columns (false).
* **Range**: Specifies the selected range or a specified range.
* **Id**: Specifies the chart element id.

The following code example shows how to insert a chart in the spreadsheet:

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Charts

<button class="e-btn" @onclick="InsertChart">Insert Chart</button>

<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="DataSourceBytes">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public byte[] DataSourceBytes { get; set; }
    public SfSpreadsheet SpreadsheetInstance;

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        DataSourceBytes = File.ReadAllBytes(filePath);
    }

    private async Task InsertChart()
    {
        // Insert a column chart using sales data from A1:B10
        var chart = new ChartModel
        {
            Id = "SalesChart",
            ChartType = "Column",
            Range = "A1:B10",
            Theme = "Material",
            IsSeriesInRows = false
        };
        await SpreadsheetInstance.InsertChartAsync(chart);
    }
}

{% endhighlight %}
{% endtabs %}

N> Although the [InsertChartAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_InsertChartAsync_Syncfusion_Blazor_Spreadsheet_ChartModel_) method accepts only the [ChartModel](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ChartModel.html) parameter, you can later move, resize, and customize the inserted chart using the [Chart Design ribbon tab](./customize-chart-appearance). To remove an inserted chart, use the [DeleteChartAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_DeleteChartAsync_System_String_) method as described in the [Remove Charts](./remove-charts) documentation.
