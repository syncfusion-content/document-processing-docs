---
layout: post
title: Worksheet Management in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Worksheet Management support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Worksheet Management in WPF Spreadsheet (SfSpreadsheet)
This section explains the operations that are performed with the worksheet.

> **Prerequisites** — The following namespaces must be imported in your code-behind file:
> ```csharp
> using Syncfusion.UI.Xaml.Spreadsheet;
> using Syncfusion.XlsIO;
> ```

## Inserting and Deleting a Worksheet

SfSpreadsheet provides support to insert and delete the worksheets in a workbook.

{% tabs %}
{% highlight c# %}
//Insert Sheet
spreadsheet.AddSheet();
	
//Insert sheet with name and position (1-based index)
spreadsheet.AddSheet("Sheet4", 3);

//Delete Sheet by name
spreadsheet.RemoveSheet("Sheet2");
{% endhighlight %}
{% endtabs %}

## Hiding and Unhiding Worksheets

SfSpreadsheet provides support to hide and unhide the worksheets in a workbook.

{% tabs %}
{% highlight c# %}
//Hide Sheet
spreadsheet.HideSheet("Sheet2");

//Unhide Sheet
spreadsheet.UnhideSheet("Sheet2");
{% endhighlight %}
{% endtabs %}

## Hiding or Unhiding Sheet Tabs

SfSpreadsheet provides support to hide and unhide all worksheet tabs in the workbook using the [ShowSheetTabs](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_ShowSheetTabs) property. The default value is `true`.

{% tabs %}
{% highlight c# %}

//Subscribe to the Loaded event of SfSpreadsheet in the constructor
spreadsheet.Loaded += SpreadsheetControl_Loaded;

private void SpreadsheetControl_Loaded(object sender, RoutedEventArgs e)
{
    spreadsheet.ShowSheetTabs = false;
}

{% endhighlight %}
{% highlight XAML %}

<syncfusion:SfSpreadsheet x:Name="spreadsheet" ShowSheetTabs="False" />

{% endhighlight %}
{% endtabs %}

## Renaming a Worksheet Programmatically

SfSpreadsheet provides support to rename a worksheet in the workbook programmatically by using the [RenameSheet](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_RenameSheet_System_String_System_String_) method, which accepts the existing sheet name and the new sheet name.

{% tabs %}
{% highlight c# %}
//To Rename a sheet programmatically
spreadsheet.RenameSheet("ExistingSheetName", "NewSheetName");
{% endhighlight %}
{% endtabs %}

> **Note** — The new sheet name must be unique within the workbook. If the new name already exists, is empty, or contains invalid characters, the rename operation will be rejected and an exception will be thrown.

### Renaming a Worksheet through the UI

SfSpreadsheet also provides support to rename a worksheet through the sheet tab UI by using the [RenameSheet](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_RenameSheet_System_String_) method. After invoking this method, the sheet tab enters edit mode, allowing the user to change the sheet name in its tab.

{% tabs %}
{% highlight c# %}
//Rename sheet through the UI
spreadsheet.RenameSheet("Sheet1");
{% endhighlight %}
{% endtabs %}


## Worksheet Protection

> **Required assembly** — The `ExcelSheetProtection` flags used in the following examples are defined in the `Syncfusion.XlsIO.Base` assembly.

### Protecting a Worksheet

SfSpreadsheet provides support to protect the worksheet with or without a password. This helps to prevent a user from modifying the contents of the worksheet. The protection of a worksheet can also be done with [ExcelSheetProtection](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.ExcelSheetProtection.html) options.

The Protect Sheet options are

* **LockedCells** - Allows the users to select the locked cells of the protected worksheet.
* **UnLockedCells** - Allows the users to select the unlocked cells of the protected worksheet.
* **FormattingCells** - Allows the users to format any cell on a protected worksheet.

* **FormattingRows** - Allows the users to format any row on a protected worksheet.
* **FormattingColumns** - Allows the users to format any column on a protected worksheet.
* **InsertingRows** - Allows the users to insert rows on the protected worksheet.
* **InsertingColumns** - Allows the users to insert columns on the protected worksheet.
* **InsertingHyperlinks** - Allows the users to insert hyperlinks on the protected worksheet.
* **DeletingRows** - Allows the users to delete rows on the protected worksheet.
* **DeletingColumns** - Allows the users to delete columns on the protected worksheet.
* **Objects** - Allows the users to edit the objects such as Graphic cells like charts, rich text box, etc.

{% tabs %}
{% highlight c# %}
//Protect the sheet with password
spreadsheet.ProtectSheet(spreadsheet.ActiveSheet, "123");

//Protect the sheet with a single Protection option
spreadsheet.ProtectSheet(spreadsheet.ActiveSheet, "123", ExcelSheetProtection.FormattingCells);

//Protect the sheet with multiple Protection options (combined using the bitwise OR operator)
spreadsheet.ProtectSheet(spreadsheet.ActiveSheet, "123",
    ExcelSheetProtection.FormattingCells | ExcelSheetProtection.InsertingRows | ExcelSheetProtection.DeletingColumns);

//Unprotect the sheet
spreadsheet.UnProtectSheet(spreadsheet.ActiveSheet, "123");
{% endhighlight %}
{% endtabs %}

### Protecting a Workbook

SfSpreadsheet provides support to protect the structure and windows of a workbook. Protecting the structure prevents a user from adding, deleting, renaming, or reordering worksheets, and from viewing hidden worksheets. Protecting the windows controls the workbook window's size and position, and prevents the user from moving, resizing, or closing the window when the workbook is opened.

{% tabs %}
{% highlight c# %}
// To Protect the Workbook (protectStructure: true, protectWindows: true, password)
spreadsheet.Protect(true, true, "123");

//To Unprotect the Workbook
spreadsheet.Unprotect("123");
{% endhighlight %}
{% endtabs %}

## Gridlines

SfSpreadsheet provides support to control the visibility and color of the gridlines in a worksheet.

{% tabs %}
{% highlight c# %}
//To show GridLines
spreadsheet.SetGridLinesVisibility(true);

//To hide GridLines
spreadsheet.SetGridLinesVisibility(false);
{% endhighlight %}
{% endtabs %}

## Headings

SfSpreadsheet provides support to control the visibility of row and column headers in a worksheet.

{% tabs %}
{% highlight c# %}
//To hide the Header cells visibility
spreadsheet.SetRowColumnHeadersVisibility(false);

//To show the Header cells visibility
spreadsheet.SetRowColumnHeadersVisibility(true);
{% endhighlight %}
{% endtabs %}

## Zooming

SfSpreadsheet provides support to zoom in and zoom out of a worksheet view. The property [AllowZooming](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_AllowZooming) determines whether zooming is enabled.

{% tabs %}
{% highlight c# %}
//Disable zooming
spreadsheet.AllowZooming = false;

//Set the zoom factor (percentage) for a specific sheet
spreadsheet.SetZoomFactor("Sheet1", 200);
{% endhighlight %}
{% endtabs %}

## Events

The following tables list the events raised by the SfSpreadsheet control and its associated grid components.

### SfSpreadsheet Events

<table>
<tr>
<th>
Events</th><th>
Description</th></tr>
<tr>
<td>
{{ '[WorkbookCreating](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) ' | markdownify }}</td><td>
Occurs when the workbook is to be created in SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[WorkbookLoaded](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) ' | markdownify }}</td><td>
Occurs when the workbook is loaded in SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[WorksheetAdding](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) ' | markdownify }}
</td><td>
Occurs when the worksheet is to be added in SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[WorksheetAdded](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) ' | markdownify }}
</td><td>
Occurs when the worksheet is added in SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[WorksheetRemoving](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) ' | markdownify }}
</td><td>
Occurs when the worksheet is to be removed from SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[WorksheetRemoved](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) ' | markdownify }}
</td><td>
Occurs when the worksheet is removed from SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[WorkbookUnloaded](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) ' | markdownify }}</td><td>
Occurs when the workbook is unloaded or removed from the SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[ZoomFactorChanged](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) ' | markdownify }}</td><td>
Occurs when the zoom factor in SfSpreadsheet is changed.</td></tr>
<tr>
<td>
{{ '[ZoomFactorChanging](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) ' | markdownify }}</td><td>
Occurs when the zoom factor in SfSpreadsheet is to be changed.</td></tr>
<tr>
<td>
{{ '[ResizingColumns](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html) ' | markdownify }}</td><td>
Occurs when performing the resizing columns in SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[ResizingRows](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html) ' | markdownify }}</td><td>
Occurs when performing the resizing rows in SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[CellCommentOpening](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html) ' | markdownify }}</td><td>
Occurs when opening the comments in the cells of SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[CellTooltipOpening](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html) ' | markdownify }}</td><td>
Occurs when opening the tool tips of cells in SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[CellContextMenuOpening](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html) ' | markdownify }}</td><td>
Occurs when opening the context menu of the cell in SfSpreadsheet.</td></tr>
<tr>
<td>
{{ '[QueryRange](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html) ' | markdownify }}</td><td>
Occurs when the SpreadsheetGrid queries for <code>IRange</code> information about a specific cell while rendering.</td></tr>
</table>


N> You can refer to our [WPF Spreadsheet Editor](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos) to know how to render and configure the spreadsheet.