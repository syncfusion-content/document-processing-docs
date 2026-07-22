---
layout: post
title: Interactive Features in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Interactive Features support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform:  document-processing
control: SfSpreadsheet
documentation: ug
---

# Interactive Features in WPF Spreadsheet (SfSpreadsheet)

 This section explains the interactive operations available with SfSpreadsheet.

## Clipboard Operations

SfSpreadsheet provides support for all the clipboard operations with all the format settings when copied within a workbook.  

You can use the following shortcut keys for clipboard operations like Microsoft Excel
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

The following is a list of paste options used while performing a paste operation:

<table>
<tr>
<th>
Options</th><th>
Description</th></tr>
<tr>
<td>
Paste</td><td>
To paste with all the format options in the source range</td></tr>
<tr>
<td>
Formula</td><td>
To paste the formulas alone </td></tr>
<tr>
<td>
Keep Source Formatting</td><td>
To maintain the source range’s formatting</td></tr>
<tr>
<td>
Value</td><td>
To paste the values alone</td></tr>
<tr>
<td>
Format</td><td>
To paste only the formats alone without pasting the values.</td></tr>
<tr>
<td>
Value & Source Formatting</td><td>
To maintain the source range original format and paste only values</td></tr>
</table>

N> When the content is copied from an external source, SfSpreadsheet does not support the format settings (paste options).

For the [Cut](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetCopyPaste.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetCopyPaste_Cut) operation,

{% tabs %}
{% highlight c# %}
// To cut the currently selected range
var range = spreadsheet.ActiveGrid.SelectedRanges.ActiveRange;
spreadsheet.ActiveGrid.CopyPaste.Copy(range, true);

//To perform cut operation
spreadsheet.ActiveGrid.CopyPaste.Cut();
{% endhighlight %}
{% endtabs %}

For the [Copy](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetCopyPaste.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetCopyPaste_Copy) operation,

{% tabs %}
{% highlight c# %}
// To copy the currently selected range
var range = spreadsheet.ActiveGrid.SelectedRanges.ActiveRange;
spreadsheet.ActiveGrid.CopyPaste.Copy(range, false);

//To perform Copy operation
spreadsheet.ActiveGrid.CopyPaste.Copy();
{% endhighlight %}
{% endtabs %}

For the [Paste](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetCopyPaste.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetCopyPaste_Paste) operation,

{% tabs %}
{% highlight c# %}
// To perform the paste operation
spreadsheet.ActiveGrid.CopyPaste.Paste();

// To perform the paste operation with a specific range and PasteOptions
var copyPaste = spreadsheet.ActiveGrid.CopyPaste as SpreadsheetCopyPaste;
copyPaste.Paste(range);
copyPaste.Paste(range, PasteOptions.Paste);
{% endhighlight %}
{% endtabs %}

T> Users can also set their default [PasteOptions](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.PasteOptions.html) when pasting in SfSpreadsheet by using the [DefaultPasteOption](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetCopyPaste.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetCopyPaste_DefaultPasteOption) property.

## Undo/Redo

SfSpreadsheet provides support for Undo/Redo functionality like Microsoft Excel.

The shortcut keys used for undo/redo operations are listed below.

<table>
<tr>
<th>
Operation</th><th>
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

SfSpreadsheet includes the [HistoryManager](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.History.HistoryManager.html) class, which supports the implementation of undo/redo operations.

By default, undo/redo operations in SfSpreadsheet are enabled. To disable undo/redo, set the [Enabled](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.History.HistoryManager.html#Syncfusion_UI_Xaml_Spreadsheet_History_HistoryManager_Enabled) property of the [HistoryManager](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.History.HistoryManager.html) to false.

{% tabs %}
{% highlight c# %}
spreadsheet.HistoryManager.Enabled = false;
{% endhighlight %}
{% endtabs %}

To programmatically invoke undo/redo operations,

{% tabs %}
{% highlight c# %}
spreadsheet.HistoryManager.Enabled = true;
spreadsheet.HistoryManager.Undo();
spreadsheet.HistoryManager.Redo();
{% endhighlight %}
{% endtabs %}

## Context Menu

The context menu in SfSpreadsheet is a customizable menu that can be used for various functionalities.

### TabItem Context Menu

The TabItem context menu opens when the user right-clicks on the sheet tab and contains menus related to worksheet operations.

By default, TabItem Context menu is enabled in SfSpreadsheet. To disable the TabItem context menu, set the [AllowTabItemContextMenu](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_AllowTabItemContextMenu) property to false. 

{% tabs %}
{% highlight c# %}
spreadsheet.AllowTabItemContextMenu = false;
{% endhighlight %}
{% endtabs %}

By default, the TabItem context menu has options such as Insert, Delete, Hide/Unhide, and Protect Sheet. You can also customize the TabItem context menu by setting the [IsCustomTabItemContextMenuEnabled](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_IsCustomTabItemContextMenuEnabled) property to true and assigning your own context menu.

{% tabs %}
{% highlight c# %}
spreadsheet.IsCustomTabItemContextMenuEnabled = true;
spreadsheet.TabItemContextMenu = CustomTabItemContextMenu();

// Custom TabItem context menu
public ContextMenu CustomTabItemContextMenu()
{
    var contextMenu = new ContextMenu();
    var insertRowIcon = new Image() { Source = new BitmapImage(new Uri(@"..\..\Icon\insertRow.png", UriKind.Relative)) };
    var insertRow = new MenuItem() { Header = "InsertRow" };           
    insertRow.Icon = insertRowIcon;
    insertRow.Click += insertRow_Click;

    var deleteRowIcon = new Image() { Source = new BitmapImage(new Uri(@"..\..\Icon\deleteRow.png", UriKind.Relative)) };
    var deleteRow = new MenuItem() { Header = "DeleteRow" };
    deleteRow.Icon = deleteRowIcon;
    deleteRow.Click += deleteRow_Click;
    
    contextMenu.Items.Add(insertRow);
    contextMenu.Items.Add(deleteRow);
    return contextMenu;
 }
{% endhighlight %}
{% endtabs %}

### Cell Context menu

The cell context menu opens when the user right-clicks on a worksheet cell or selection of cells in SfSpreadsheet.

By default, the cell context menu is enabled in SfSpreadsheet. To disable the cell context menu, set the [AllowCellContextMenu](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_AllowCellContextMenu) property to false.

{% tabs %}
{% highlight c# %}
spreadsheet.AllowCellContextMenu = false;
{% endhighlight %}
{% endtabs %}

You can also customize the cell context menu of SfSpreadsheet by using the [CellContextMenuOpening](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html) event of `SpreadsheetGrid`. This event fires when the cell context menu is about to be displayed, letting you add, modify, or remove items.

To add customized menu items via the `CellContextMenuOpening` event,

{% tabs %}
{% highlight c# %}
spreadsheet.ActiveGrid.CellContextMenuOpening += ActiveGrid_CellContextMenuOpening;

void ActiveGrid_CellContextMenuOpening(object sender, CellContextMenuOpeningEventArgs e)
{
    // Add a customized menu item
    MenuItem PasteSpecial = new MenuItem();
    PasteSpecial.Header = "Pastespecial";
    Image paste = new Image() { Source = new BitmapImage(new Uri(@"..\..\Icon\paste.png", UriKind.Relative)) };
    PasteSpecial.Icon = paste;
    spreadsheet.ActiveGrid.CellContextMenu.Items.Add(PasteSpecial);
        
    // Remove the existing context menu item at index 2
    spreadsheet.ActiveGrid.CellContextMenu.Items.RemoveAt(2);
}
{% endhighlight %}
{% endtabs %}

T> A custom cell context menu can also be added by assigning the customized menu items to the [CellContextMenu](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_CellContextMenu) property of `SpreadsheetGrid`.

## Cell Comments

SfSpreadsheet provides support for cell comments like in Microsoft Excel, allowing you to give readers additional context about the data a cell contains. You can set the comment height and color for a particular comment at runtime by handling the [CellCommentOpening](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html) event of `SpreadsheetGrid`.

To enable comments in SfSpreadsheet, set the [ShowComment](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_ShowComment) property of `SpreadsheetGrid` to true.

{% tabs %}
{% highlight c# %}
spreadsheet.ActiveGrid.ShowComment = true;
{% endhighlight %}
{% endtabs %}

To set a comment for a particular cell at run time,

{% tabs %}
{% highlight c# %}
spreadsheet.ActiveSheet.Range["E5"].AddComment().Text = "Sample Comment";
spreadsheet.ActiveGrid.InvalidateCell(5, 5);
{% endhighlight %}
{% endtabs %}


N> You can refer to our [WPF Spreadsheet Editor](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos) to know how to render and configure the spreadsheet.