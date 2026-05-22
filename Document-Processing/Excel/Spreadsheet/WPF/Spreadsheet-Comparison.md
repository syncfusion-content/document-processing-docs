---
layout: post
title: Choose between SfSpreadsheet and Spreadsheet control | Syncfusion®
description: Learn about the differences and feature enhancements of SfSpreadsheet over the classic Spreadsheet control in Syncfusion® WPF.
platform: wpf
control: SfSpreadsheet
documentation: ug
---
# Spreadsheet Comparison in WPF Spreadsheet

## Choose between SfSpreadsheet and Spreadsheet control

WPF suite contains **SfSpreadsheet** and **Spreadsheet** control for viewing and editing the excel files. SfSpreadsheet is an alternate for Spreadsheet control which is marked as classic control. Hence it is recommended to use SfSpreadsheet which provides better performance and rich set features over Spreadsheet control. 

Below are the features that SfSpreadsheet have over Spreadsheet control,

<table>
<tr>
<th>
Feature</th><th>
SfSpreadsheet</th></tr>
<tr>
<td>
Scrolling performance</td><td>
Supports fast and fluid scrolling even if the excel has a huge set of data .Thus its  performance is high compared to Spreadsheet control.</td></tr>
<tr>
<td>
Copy Paste</td><td>
Supports various paste options similar to excel options like Paste, Formulas, Values, Formula and Source Formatting, Values and Source Formatting and Formatting alone. It also provides a good performance compared to Spreadsheet control.</td></tr>
<tr>
<td>
Undo/Redo</td><td>
Supports undo/redo functionalities similar to those achieved with Microsoft Office-type applications. This operation records the changes in the whole workbook while Spreadsheet Control records the changes in sheet level only.</td></tr>
<tr>
<td>
Formula calculation</td><td>
Provides support for 400+ most widely used formulas and uses Multi-threading concept So, the calculation speed is also high compared to Spreadsheet control.</td></tr>
<tr>
<td>
Floating Cells</td><td>
Provides support to float cell both in display and edit mode.</td></tr>
<tr>
<td>
Hyperlinks</td><td>
Provides support for Hyperlink feature which you can create hyperlink for existing files or web page and email addresses too.</td></tr>
<tr>
<td>
Conditional Formatting</td><td>
Provides support to define and import the conditional formatting rules such as Data Bars, Icon Sets and Color Scales options which are used to visualize the data.</td></tr>
<tr>
<td>
Data validation</td><td>
Provides support for validation for cross sheet references and list validation with formula/cell references compared to Spreadsheet control.</td></tr>
</table>

### Properties table

Below are the properties difference between SfSpreadsheet and Spreadsheet control,

<table>
<tr>
<th>
SfSpreadsheet</th><th>
Spreadsheet</th><th>
Description</th></tr>
<tr>
<td>
{{ '[ActiveGrid](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_ActiveGrid)'| markdownify }}</td><td>
GridProperties->ActiveSpreadsheetGrid</td><td>
Gets the active SpreadsheetGrid</td></tr>
<tr>
<td>
{{'[IsCustomTabItemContextMenuEnabled](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_IsCustomTabItemContextMenuEnabled)'| markdownify }}</td><td>
TabStyleManager -> IsCustomTabItemContextMenuEnabled</td><td>
Gets or sets whether Custom ContextMenu is to be Enabled</td></tr>
<tr>
<td>
{{ '[ShowTabItemContextMenu](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Tools.Controls.TabControlExt.html#Syncfusion_Windows_Tools_Controls_TabControlExt_ShowTabItemContextMenu)' | markdownify }}</td><td>
TabStyleManager -> ShowTabItemContextMenu</td><td>
Gets or sets whether TabItemContextMenu is to be displayed</td></tr>
<tr>
<td>
{{ '[TabItemContextMenu](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_TabItemContextMenu)' | markdownify }}</td><td>
TabStyleManager ->TabItemContextMenu</td><td>
Gets or sets the ContextMenu Items for TabItem</td></tr>
<tr>
<td>
{{ '[ActiveSheet](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_ActiveSheet)' | markdownify }}</td><td>
ExcelProperties->Workbook->ActiveSheet</td><td>
Gets the Current ActiveSheet</td></tr>
<tr>
<td>
{{ '[Workbook](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_Workbook)' | markdownify }}</td><td>
ExcelProperties->Workbook</td><td>
</td></tr>
<tr>
<td>
{{ '[CurrentCellStyle](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_CurrentCellStyle)' | markdownify }}</td><td>
GridProperties->CurrentCellStyle</td><td>
Gets the Style of the Current Cell</td></tr>
<tr>
<td>
{{ '[HistoryManager](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_HistoryManager)' | markdownify }}</td><td>
GridProperties.ActiveSpreadsheetGrid.Model.CommandStack</td><td>
Gets the command stack of the SfSpreadsheet.By default it has been enabled</td></tr>
<tr>
<td>
{{ '[SheetName](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGrid_SheetName)' | markdownify }}</td><td>
GridProperties->CurrentSheetName</td><td>
Gets the tab sheet name</td></tr>
</table>


N> You can refer to our [WPF Spreadsheet](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos) to know how to render and configure the spreadsheet.