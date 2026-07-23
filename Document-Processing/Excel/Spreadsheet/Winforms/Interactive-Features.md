---
layout: post
title: Interactive Features in Windows Forms Spreadsheet | Syncfusion®
description: Learn about Interactive Features support in Syncfusion® Windows Forms Spreadsheet control and more details.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Interactive Features in Windows Forms Spreadsheet

This section covers the interactive operations in the Spreadsheet.

## Clipboard Operations

Spreadsheet supports all clipboard operations, including all format settings when content is copied within a workbook.

You can use the following shortcut keys for clipboard operations, as in Excel.
<table>
<tr>
<th>
Operations</th><th>
Shortcut Keys</th></tr>
<tr>
<td>
Cut</td><td>
Ctrl + X</td></tr>
<tr>
<td>
Copy</td><td>
Ctrl + C </td></tr>
<tr>
<td>
Paste</td><td>
Ctrl + V</td></tr>
</table>

The following is a list of paste options available during a paste operation:

<table>
<tr>
<th>
Options</th><th>
Description</th></tr>
<tr>
<td>
Paste</td><td>
Pastes with all format options from the source range</td></tr>
<tr>
<td>
Formula</td><td>
Pastes the formulas only</td></tr>
<tr>
<td>
Keep Source Formatting</td><td>
Maintains the source range’s formatting</td></tr>
<tr>
<td>
Value</td><td>
Pastes the values only</td></tr>
<tr>
<td>
Format</td><td>
Pastes only the formats without pasting the values</td></tr>
<tr>
<td>
Value & Source Formatting</td><td>
Maintains the source range’s original format and pastes only values</td></tr>
</table>

N> When the content is copied from external source, Spreadsheet does not support the format settings (paste options).

For [Cut](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.SpreadsheetCopyPaste.html#Syncfusion_Windows_Forms_Spreadsheet_SpreadsheetCopyPaste_Cut) Operation,

{% tabs %}
{% highlight c# %}
			
//To perform the cut operation on the selected range
var range = spreadsheet.ActiveGrid.SelectedRanges.ActiveRange;
spreadsheet.ActiveGrid.CopyPaste.Copy(range, true);

//To perform the cut operation
spreadsheet.ActiveGrid.CopyPaste.Cut();

{% endhighlight %}
{% endtabs %}

For [Copy](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.SpreadsheetCopyPaste.html#Syncfusion_Windows_Forms_Spreadsheet_SpreadsheetCopyPaste_Copy) Operation,

{% tabs %}
{% highlight c# %}

//To perform the copy operation on the selected range
var range = spreadsheet.ActiveGrid.SelectedRanges.ActiveRange;
spreadsheet.ActiveGrid.CopyPaste.Copy(range, false);

//To perform the copy operation on the current selection
spreadsheet.ActiveGrid.CopyPaste.Copy();

{% endhighlight %}
{% endtabs %}

For [Paste](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.SpreadsheetCopyPaste.html#Syncfusion_Windows_Forms_Spreadsheet_SpreadsheetCopyPaste_Paste) Operation,

{% tabs %}
{% highlight c# %}

//To perform the paste operation on the current selection
spreadsheet.ActiveGrid.CopyPaste.Paste();

//To perform the paste operation with a range and paste options
var copyPaste = spreadsheet.ActiveGrid.CopyPaste as SpreadsheetCopyPaste;
copyPaste.Paste(range);
copyPaste.Paste(range, PasteOptions.Paste);

{% endhighlight %}
{% endtabs %}

T> Users can also set their default [PasteOptions](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.PasteOptions.html) while pasting in Spreadsheet by using the [DefaultPasteOption](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.SpreadsheetCopyPaste.html#Syncfusion_Windows_Forms_Spreadsheet_SpreadsheetCopyPaste_DefaultPasteOption) property.

## Undo or redo

Spreadsheet provides support for the undo/redo functionality like Microsoft Excel.

The following shortcut keys are used for undo/redo operations:

<table>
<tr>
<th>
Operations</th><th>
Shortcut Keys</th></tr>
<tr>
<td>
Undo</td><td>
Ctrl + Z</td></tr>
<tr>
<td>
Redo</td><td>
Ctrl + Y</td></tr>
</table>

Spreadsheet has a [History Manager](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.History.HistoryManager.html) class that supports the implementation of undo/redo operations.

By default, undo/redo operations in Spreadsheet are enabled. To disable the undo/redo operations, set the [Enabled](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.History.HistoryManager.html#Syncfusion_Windows_Forms_Spreadsheet_History_HistoryManager_Enabled) property of the [History Manager](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.History.HistoryManager.html) to false.

{% tabs %}
{% highlight c# %}

spreadsheet.HistoryManager.Enabled = false;

{% endhighlight %}
{% endtabs %}

To programmatically invoke the undo/redo operations:

{% tabs %}
{% highlight c# %}

spreadsheet.HistoryManager.Enabled = true;
spreadsheet.HistoryManager.Undo();
spreadsheet.HistoryManager.Redo();

{% endhighlight %}
{% endtabs %}

## Context menu

The context menu in Spreadsheet is customizable and can be used for various functionalities.

### TabItem context menu

The TabItem context menu opens when the user right-clicks on the sheet tab and contains menus related to worksheet operations.

By default, the TabItem context menu is enabled in Spreadsheet. To disable the TabItem context menu, set the [AllowTabItemContextMenu](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_AllowTabItemContextMenu) property to false.

{% tabs %}
{% highlight c# %}

spreadsheet.AllowTabItemContextMenu = false;

{% endhighlight %}
{% endtabs %}

The default TabItem context menu has options like Insert, Delete, Hide/Unhide, and Protect sheet. You can also customize the TabItem context menu by setting the [IsCustomTabItemContextMenuEnabled](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_IsCustomTabItemContextMenuEnabled) property to true and adding your customized menu items.

{% tabs %}
{% highlight c# %}

spreadsheet.IsCustomTabItemContextMenuEnabled = true;
spreadsheet.TabItemContextMenu = CustomTabItemContextMenu();

//Custom TabItem context menus

public ContextMenu CustomTabItemContextMenu()
{
    var contextMenu = new ContextMenuStrip();
    contextMenu.BackColor = Color.White;
    contextMenu.RenderMode = ToolStripRenderMode.System;
    var insertRowIcon = new Image() { Source = new BitmapImage(new Uri(@"..\..\Icon\insertRow.png", UriKind.Relative)) };
    var insertRow = new ToolStripMenuItem() { BackColor = Color.White, Text = "InsertRow" };
    insertRow.Image = insertRowIcon;
    insertRow.Click += insertRow_Click;
    var deleteRowIcon = new Image() { Source = new BitmapImage(new Uri(@"..\..\Icon\deleteRow.png", UriKind.Relative)) };
    var deleteRow = new ToolStripMenuItem() { BackColor = Color.White, Text = "DeleteRow" };
    deleteRow.Image = deleteRowIcon;
    deleteRow.Click += deleteRow_Click;
    contextMenu.Items.Add(insertRow);
    contextMenu.Items.Add(deleteRow);
    return contextMenu;
}

{% endhighlight %}
{% endtabs %}

### Cell context menu

The Cell context menu opens when the user right-clicks on a worksheet cell or a selection of cells in Spreadsheet.

By default, the Cell context menu is enabled in Spreadsheet. To disable the Cell context menu, set the [AllowCellContextMenu](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_AllowCellContextMenu) property to false.

{% tabs %}
{% highlight c# %}

spreadsheet.AllowCellContextMenu = false;

{% endhighlight %}
{% endtabs %}

Users can also customize the Cell context menu of Spreadsheet by using the [CellContextMenuOpening](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html) event of `SpreadsheetGrid`.

Adding the customized menu items in the `CellContextMenuOpening` event:

{% tabs %}
{% highlight c# %}

spreadsheet.ActiveGrid.CellContextMenuOpening += ActiveGrid_CellContextMenuOpening;

void ActiveGrid_CellContextMenuOpening(object sender, CellContextMenuOpeningEventArgs e)
{
    //Adding customized menu item
    var PasteSpecial = new ToolStripMenuItem(){ BackColor = Color.White, Name = "PasteSpecial"};
    PasteSpecial.Text = "PasteSpecial";
    Image paste = new Image() { Source = new BitmapImage(new Uri(@"..\..\Icon\paste.png", UriKind.Relative)) };
    PasteSpecial.Image = paste;
    PasteSpecial.Click += PasteSpecial_Click;
    spreadsheet.ActiveGrid.CellContextMenu.Items.Add(PasteSpecial);
       
    //Remove the existing context menu item
    spreadsheet.ActiveGrid.CellContextMenu.Items.RemoveAt(2);
}

{% endhighlight %}
{% endtabs %}

## Cell comments

Spreadsheet provides support for cell comments, like in Excel, to give the reader additional context for the data it contains. You can set the comment height and color for the particular comments at runtime by invoking the [CellCommentOpening](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html) event of `SpreadsheetGrid`.

To enable comments in Spreadsheet, set the [ShowComment](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html#Syncfusion_Windows_Forms_CellGrid_SfCellGrid_ShowComment) property of `SpreadsheetGrid` to true.

{% tabs %}
{% highlight c# %}

spreadsheet.ActiveGrid.ShowComment = true;

{% endhighlight %}
{% endtabs %}

To set the comment for a particular cell at run time:

{% tabs %}
{% highlight c# %}

spreadsheet.ActiveSheet.Range["E5"].AddComment().Text = "Sample Comment";
spreadsheet.ActiveGrid.InvalidateCell(5, 5);

{% endhighlight %}
{% endtabs %}
