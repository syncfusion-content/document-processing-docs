---
layout: post
title: Worksheet Management in Windows Forms Spreadsheet | Syncfusion®
description: Learn about Worksheet Management support in Syncfusion® Windows Forms Spreadsheet control and more details.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Worksheet Management in Windows Forms Spreadsheet

This section explains the operations you can perform on worksheets in a workbook using the Syncfusion WinForms Spreadsheet control.

## Insert and Delete

The Spreadsheet allows you to insert and delete worksheets in a workbook.

{% tabs %}
{% highlight c# %}

//Insert Sheet
spreadsheet.AddSheet();
	
//Insert sheet with name
spreadsheet.AddSheet("Sheet4", 3);

//Delete Sheet
spreadsheet.RemoveSheet("Sheet2");

{% endhighlight %}
{% endtabs %}

## Hide and Unhide

The Spreadsheet allows you to hide and unhide worksheets in a workbook. Hidden sheets remain in the workbook and can be displayed again using `UnhideSheet`.

{% tabs %}
{% highlight c# %}

//Hide Sheet
spreadsheet.HideSheet("Sheet2");

//Unhide Sheet
spreadsheet.UnhideSheet("Sheet2");

{% endhighlight %}
{% endtabs %}

## Rename a Sheet programmatically

The Spreadsheet allows you to rename a worksheet in the workbook programmatically by using the [RenameSheet](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_RenameSheet_System_String_System_String_) method.

{% tabs %}
	
{% highlight c# %}

//To Rename a sheet programmatically
spreadsheet.RenameSheet("ExistingSheetName", "NewSheetName");

{% endhighlight %}
{% endtabs %}

## Protection

### Protecting a Worksheet

The Spreadsheet allows you to protect a worksheet with or without a password to prevent users from modifying its contents. Protection can be configured through the [ExcelSheetProtection](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.ExcelSheetProtection.html) options.

The available protection options are:

* LockedCells         - Allows users to select the locked cells of the protected worksheet.

* UnLockedCells       - Allows users to select the unlocked cells of the protected worksheet.

* FormattingCells     - Allows users to format any cell on a protected worksheet.

* FormattingRows      - Allows users to format any row on a protected worksheet.

* FormattingColumns   - Allows users to format any column on a protected worksheet.

* InsertingRows       - Allows users to insert rows on the protected worksheet.

* InsertingColumns    - Allows users to insert columns on the protected worksheet.

* InsertingHyperlinks - Allows users to insert hyperlinks on the protected worksheet.

* DeletingRows        - Allows users to delete rows on the protected worksheet.

* DeletingColumns     - Allows users to delete columns on the protected worksheet.

* Objects             - Allows users to edit objects such as graphic cells, charts, and rich text boxes, and etc.

{% tabs %}
{% highlight c# %}

//Protect the sheet with password
spreadsheet.ProtectSheet(spreadsheet.ActiveSheet, "123");

//Protect the sheet with Protection options
spreadsheet.ProtectSheet(spreadsheet.ActiveSheet, "123", ExcelSheetProtection.FormattingCells);

//Unprotect the sheet
spreadsheet.UnProtectSheet(spreadsheet.ActiveSheet, "123");

{% endhighlight %}
{% endtabs %}

### Protecting a Workbook

The Spreadsheet allows you to protect the structure and windows of a workbook. Protecting the structure prevents a user from adding, deleting, or displaying hidden worksheets. Protecting the windows controls the size and position of the workbook window.

{% tabs %}
{% highlight c# %}

// To Protect the Workbook 
spreadsheet.Protect(true, true, "123");

//To Unprotect the Workbook
spreadsheet.Unprotect("123");

{% endhighlight %}
{% endtabs %}

## Gridlines

The Spreadsheet allows you to control the visibility of Gridlines in a worksheet.

{% tabs %}
{% highlight c# %}

//To show GridLines
spreadsheet.SetGridLinesVisibility(true);

//To hide GridLines
spreadsheet.SetGridLinesVisibility(false);

{% endhighlight %}
{% endtabs %}

## Headings

The Spreadsheet allows you to show or hide the row and column headers in a worksheet.

{% tabs %}
{% highlight c# %}

//To hide the Header cells visibility
spreadsheet.SetRowColumnHeadersVisibility(false);

{% endhighlight %}
{% endtabs %}

## Zooming

The Spreadsheet allows you to zoom in and zoom out of a worksheet view. The [AllowZooming](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_AllowZooming) property determines whether users are allowed to change the zoom level interactively.

{% tabs %}
{% highlight c# %}

//zoom factor
spreadsheet.SetZoomFactor("Sheet1", 200);

{% endhighlight %}
{% endtabs %}

The events associated with zooming are:

. [ZoomFactorChanged](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html)

. [ZoomFactorChanging](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html)

## Events

The following table lists the events raised by the Spreadsheet during worksheet management operations.

<table>
<tr>
<th>
Events</th><th>
Description</th></tr>
<tr>
<td>
{{ '[WorkbookCreating](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html) ' | markdownify }}</td><td>
Occurs when the workbook is to be created in the Spreadsheet.</td></tr>
<tr>
<td>
{{ '[WorkbookLoaded](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html) ' | markdownify }}</td><td>
Occurs when the workbook is loaded in the Spreadsheet.</td></tr>
<tr>
<td>
{{ '[WorksheetAdding](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html) ' | markdownify }}
</td><td>
Occurs when a worksheet is to be added in the Spreadsheet.</td></tr>
<tr>
<td>
{{ '[WorksheetAdded](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html) ' | markdownify }}
</td><td>
Occurs when a worksheet is added in the Spreadsheet.</td></tr>
<tr>
<td>
{{ '[WorksheetRemoving](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html) ' | markdownify }}
</td><td>
Occurs when a worksheet is to be removed from the Spreadsheet.</td></tr>
<tr>
<td>
{{ '[WorksheetRemoved](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html) ' | markdownify }}
</td><td>
Occurs when a worksheet is removed from the Spreadsheet.</td></tr>
<tr>
<td>
{{ '[WorkbookUnloaded](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html) ' | markdownify }}</td><td>
Occurs when the workbook is unloaded or removed from the Spreadsheet.</td></tr>
<tr>
<td>
{{ '[ZoomFactorChanged](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html) ' | markdownify }}</td><td>
Occurs when the zoom factor in Spreadsheet is changed.</td></tr>
<tr>
<td>
{{ '[ZoomFactorChanging](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html) ' | markdownify }}</td><td>
Occurs when the zoom factor in Spreadsheet is to be changed.</td></tr>
<tr>
<td>
{{ '[ResizingColumns](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html) ' | markdownify }}</td><td>
Occurs when performing the resizing columns in Spreadsheet.</td></tr>
<tr>
<td>
{{ '[ResizingRows](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html) ' | markdownify }}</td><td>
Occurs when performing the resizing rows in Spreadsheet.</td></tr>
<tr>
<td>
{{ '[CellCommentOpening](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html) ' | markdownify }}</td><td>
Occurs when opening the comments in the cells of Spreadsheet.</td></tr>
<tr>
<td>
{{ '[CellTooltipOpening](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html) ' | markdownify }}</td><td>
Occurs when opening the tool tips of cells in Spreadsheet.</td></tr>
<tr>
<td>
{{ '[CellContextMenuOpening](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html) ' | markdownify }}</td><td>
Occurs when opening the context menu of the cell in Spreadsheet.</td></tr>
<tr>
<td>
{{ '[QueryRange](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.SpreadsheetGrid.html) ' | markdownify }}</td><td>
Occurs when grid queries for <code>IRange</code> information about a specific cell while rendering.</td></tr>
</table>
