---
layout: post
title: Rows and columns in Blazor Spreadsheet component | Syncfusion
description: Check out and learn all about rows and columns in the Syncfusion Blazor Spreadsheet component and more.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Rows and columns in Blazor Spreadsheet component

The [Blazor Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor) is a tabular format consisting of rows and columns. The intersection of a row and a column is called a cell. The operations that you can perform on rows and columns include,

* Insert
* Setting Row and Column Count

## Insert

You can insert rows or columns anywhere in a spreadsheet.

### Row

You can insert rows in the following ways,

* Using the [`InsertRowAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_InsertRowAsync_System_Int32_System_Int32_System_Object_Syncfusion_Blazor_Spreadsheet_RowPosition_) method, you can insert rows once the component is loaded.
* Using context menu, insert the rows in the desired position.

The following code example shows the options for inserting rows in the spreadsheet.

#### InsertRowAsync parameters

| Parameter | Type | Description |
| -- | -- | -- |
| startIndex | int | The zero-based row index where the insertion begins. |
| rowCount | int | The number of rows to insert. |
| sheet | string \| int (Optional) | The target sheet. Pass a `string` to use the sheet name or an `int` to use the sheet index. If omitted, the active sheet is used. |
| position | Enum | The position relative to `startIndex`. Valid values are `Above` and `Below`. Default: `Above`. |

#### RowPosition enum values

| Member | Description |
| -- | -- |
| `Above` | Inserts the rows above the `startIndex` row. |
| `Below` | Inserts the rows below the `startIndex` row. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="InsertRowsHandler" Content="Insert Rows"></SfButton>
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

N> If the `sheet` parameter is `null` or omitted, the operation targets the active sheet. When the `sheet` parameter is an `int`, the value is treated as the zero-based sheet index (for example, `3` targets the fourth sheet in the workbook).

### Column

You can insert columns in the following ways,

* Using the [`InsertColumnAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_InsertColumnAsync_System_Int32_System_Int32_System_Object_Syncfusion_Blazor_Spreadsheet_ColumnPosition_) method, you can insert columns once the component is loaded.
* Using context menu, insert the columns in the desired position.*

The following code example shows the options for inserting columns in the spreadsheet.

#### InsertColumnAsync parameters

| Parameter | Type | Description |
| -- | -- | -- |
| startIndex | int | The zero-based column index where the insertion begins. |
| columnCount | int | The number of columns to insert. |
| sheet | string \| int (Optional) | The target sheet. Pass a `string` to use the sheet name or an `int` to use the sheet index. If omitted, the active sheet is used. |
| position | Enum | The position relative to `startIndex`. Valid values are `Left` and `Right`. Default: `Right`. |

#### ColumnPosition enum values

| Member | Description |
| -- | -- |
| `Left` | Inserts the columns to the left of the `startIndex` column. |
| `Right` | Inserts the columns to the right of the `startIndex` column. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="InsertColumnsHandler" Content="Insert Columns"></SfButton>
<SfSpreadsheet @ref="SpreadsheetInstance" DataSource="DataSourceBytes">
    <SpreadsheetRibbon></SpSpreadsheetRibbon>
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

N> If the `sheet` parameter is `null` or omitted, the operation targets the active sheet. When the `sheet` parameter is an `int`, the value is treated as the zero-based sheet index (for example, `3` targets the fourth sheet in the workbook).

### Inserting rows and columns via the context menu

To insert rows or columns using the right-click context menu:

1. Right-click the row header (for rows) or column header (for columns) at the position where the new row or column should appear.
2. Choose **Insert Rows Above**, **Insert Rows Below**, **Insert Columns to the Left**, or **Insert Columns to the Right**, depending on the desired position.
3. The new rows or columns are inserted at the selected position with formatting inherited from the adjacent cells.

N> When the sheet is protected, **Insert Rows Above**, **Insert Rows Below**, **Insert Columns to the Left**, and **Insert Columns to the Right** are available only when the **Insert Rows** or **Insert Columns** permission is enabled in the protection sheet option settings.

## Setting Row and Column Count

The Blazor Spreadsheet component enables you to define the initial number of rows and columns using the [`RowCount`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_RowCount) and [`ColumnCount`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_ColumnCount) properties.

* The default `RowCount` is **1000**.
* The default `ColumnCount` is **200**.

### Rendering Behavior

* **Without Data Source:** When no data is bound to the spreadsheet, the sheet renders empty cells up to the specified row and column counts.
* **With Data Source (e.g., byte array or imported file):**
  * If the data source contains fewer rows and columns than the specified row and column counts, the spreadsheet renders additional empty rows and columns to meet those counts.
  * If the data source contains more rows and columns than the specified row and column counts, the spreadsheet extends beyond the counts to fit the data. These properties never truncate data.

You can set these properties as follows:

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
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