---
layout: post
title: Remove Charts in Blazor Spreadsheet | Syncfusion
description: Learn about removing charts in the Syncfusion Blazor Spreadsheet component and managing charts in worksheets.
platform: document-processing
control: Spreadsheet
documentation: ug
appliesto: Spreadsheet Editor SDK
---

# Remove Charts in Blazor Spreadsheet

You can remove a chart from your worksheet either through the user interface or programmatically.

## Remove a Chart Using the UI

To delete a chart:

1. **Select the chart** by clicking on it. Selection handles appear around the chart's border.
2. **Press `Delete` or `Backspace`** to remove the chart immediately.

**Alternative method:**
- **Select the chart** and choose **Clear All** from the ribbon (this clears the selected chart).

## Remove a Chart Programmatically

Use the [DeleteChartAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_DeleteChartAsync_System_String_) method to remove a chart through code.

The `chartId` parameter is required and must be a non-empty, non-whitespace value. It is the [ChartModel.Id](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ChartModel.html) that was supplied (or auto-generated) when the chart was inserted via [InsertChartAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_InsertChartAsync_Syncfusion_Blazor_Spreadsheet_ChartModel_).

N> Programmatic removal of the **currently selected** chart is not supported by the public API — [DeleteChartAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_DeleteChartAsync_System_String_) always requires a `chartId`. To delete the active chart without supplying an id, use the **Remove a Chart Using the UI** steps above.

The following code example shows how to remove a chart in the spreadsheet:

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Charts

<button class="e-btn" @onclick="InsertChart">Insert Chart</button>
<button class="e-btn" @onclick="RemoveChartById">Remove Chart by ID</button>

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

    private async Task RemoveChartById()
    {
        // Remove the chart with the specified identifier
        await SpreadsheetInstance.DeleteChartAsync("SalesChart");
    }
}

{% endhighlight %}
{% endtabs %}

N> If `chartId` is null, empty, or whitespace, the operation returns silently without throwing. Deletion is also skipped if [AllowChart](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AllowChart) is set to **false**, or if the worksheet is protected.
