---
layout: post
title: Rows and columns in Blazor Spreadsheet component | Syncfusion
description: Learn here all about Rows and columns in the Blazor Spreadsheet component and more.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Rows and columns in Blazor Spreadsheet component

Spreadsheet is a tabular format consisting of rows and columns. The intersection point of rows and columns are called as cells. The list of operations that you can perform in rows and columns are,

*   Insert
*   Setting Column and Row Count

## Insert

You can insert rows or columns anywhere in a spreadsheet.

### Row

The rows can be inserted in the following ways:

**Using the context menu**

 Insert rows in the desired position by right-clicking on a row header.

**Using `InsertRowAsync` method**

Using [`InsertRowAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_InsertRowAsync_System_Int32_System_Int32_System_Object_Syncfusion_Blazor_Spreadsheet_RowPosition_) method, you can insert the rows once the component is loaded.

The following code example shows the options for inserting rows in the spreadsheet.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="InsertRowsHandler" Content="Insert Rows"></SfButton>
<SfSpreadsheet @ref="@SpreadsheetInstance" DataSource="DataSourceBytes">
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

     public async Task InsertRowsHandler()
    {
        // Insert 2 rows above row index 0 in the active sheet
        await SpreadsheetInstance.InsertRowAsync(0, 2);

        // Insert 3 rows below row index 2 in the sheet named "Sheet2"
        await SpreadsheetInstance.InsertRowAsync(2, 3, "Sheet2", RowPosition.Below);

        // Insert 1 row above row index 1 in the active sheet
        await SpreadsheetInstance.InsertRowAsync(1, 1, null, RowPosition.Above);

        // Insert 4 rows below row index 3 in the sheet at index 3
        await SpreadsheetInstance.InsertRowAsync(3, 4, 3, RowPosition.Below);
    }
}

{% endhighlight %}
{% endtabs %}

### Column

The columns can be inserted in the following ways:

**Using the context menu**

Insert columns in the desired position by right-clicking on a column header.

**Using `InsertColumnAsync` method**

Using [`InsertColumnAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_InsertColumnAsync_System_Int32_System_Int32_System_Object_Syncfusion_Blazor_Spreadsheet_ColumnPosition_) method, you can insert the columns once the component is loaded.

The following code example shows the options for inserting columns in the spreadsheet.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="InsertColumnsHandler" Content="Insert Columns"></SfButton>
<SfSpreadsheet @ref="@SpreadsheetInstance" DataSource="DataSourceBytes">
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

    public async Task InsertColumnsHandler()
    {
        // Insert 2 columns to the right of column index 2
        await SpreadsheetInstance.InsertColumnAsync(2, 2);

        // Insert 3 columns to the left of column index 5
        await SpreadsheetInstance.InsertColumnAsync(5, 3, null, ColumnPosition.Left);

        // Insert 1 column to the right of column B in Sheet2
        await SpreadsheetInstance.InsertColumnAsync(1, 1, "Sheet2", ColumnPosition.Right);

        // Insert 4 columns to the left of column D in the sheet at index 3
        await SpreadsheetInstance.InsertColumnAsync(3, 4, 3, ColumnPosition.Left);
    }
}

{% endhighlight %}
{% endtabs %}

## Setting Row and Column Count

The Blazor Spreadsheet component enables you to define the initial number of rows and columns using the [`RowCount`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_RowCount) and [`ColumnCount`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_ColumnCount) properties.

*   The default `RowCount` is **1000**.
*   The default `ColumnCount` is **200**.

**Rendering Behavior**

- **Without Data Source:** 

  - When no data is bound to the spreadsheet, the sheet renders empty cells up to RowCount × ColCount.

- **With Data Source (e.g., byte array or imported file):**

  - If the data source has fewer rows/columns than RowCount/ColCount, the spreadsheet renders additional empty rows/columns to meet the specified counts.
  - If the data source has more rows/columns than RowCount/ColCount, the spreadsheet renders enough rows/columns to display all data from the source (i.e., it extends beyond the specified counts to fit the data). Your data is never truncated by these properties.


You can set these properties as follows:

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet DataSource="DataSourceBytes" RowCount="1200" ColumnCount="300" >
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public byte[] DataSourceBytes { get; set; }

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        DataSourceBytes = File.ReadAllBytes(filePath);
    }
}

{% endhighlight %}
{% endtabs %}