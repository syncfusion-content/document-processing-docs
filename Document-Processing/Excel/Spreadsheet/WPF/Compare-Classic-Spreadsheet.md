---
layout: post
title: Compare Syncfusion Spreadsheet and Spreadsheet (Classic) control
description: Learn about the differences and feature enhancements of SfSpreadsheet over the classic Spreadsheet control in Syncfusion® WPF.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---
# Spreadsheet Comparison in WPF

**SfSpreadsheet** is the recommended choice for new development and for migrating from the legacy Spreadsheet (Classic) control. It delivers improved scrolling performance, broader formula support, workbook-level undo/redo, and richer formatting and validation features.

## Feature comparison

WPF suite contains **SfSpreadsheet** and **Spreadsheet (Classic)** controls for viewing and editing Excel files. SfSpreadsheet is the recommended replacement for the legacy Spreadsheet (Classic) control. Hence, it is recommended to use SfSpreadsheet, which provides better performance and a rich set of features over the Spreadsheet (Classic) control.

Below are the features that SfSpreadsheet has over the Spreadsheet (Classic) control:

<table>
<tr>
<th>
Feature</th><th>
SfSpreadsheet</th></tr>
<tr>
<td>
Scrolling performance</td><td>
Supports fast and fluid scrolling even if the Excel file has a huge set of data. Thus, its performance is higher than that of the Spreadsheet (Classic) control.</td></tr>
<tr>
<td>
Copy Paste</td><td>
Supports various paste options similar to Excel options, such as Paste, Formulas, Values, Formula and Source Formatting, Values and Source Formatting, and Formatting alone. It also provides better performance compared to the Spreadsheet (Classic) control.</td></tr>
<tr>
<td>
Undo/Redo</td><td>
Supports undo/redo functionalities similar to those achieved with Microsoft Office-type applications. This operation records the changes in the whole workbook, while the Spreadsheet (Classic) control records the changes at the sheet level only.</td></tr>
<tr>
<td>
Formula calculation</td><td>
Provides support for 400+ of the most widely used formulas and uses a multi-threading concept, so the calculation speed is also high compared to the Spreadsheet (Classic) control.</td></tr>
<tr>
<td>
Floating Cells</td><td>
Provides support to float a cell in both display and edit modes.</td></tr>
<tr>
<td>
Hyperlinks</td><td>
Provides support for the Hyperlink feature, letting you create hyperlinks to existing files, web pages, or email addresses.</td></tr>
<tr>
<td>
Conditional Formatting</td><td>
Provides support to define and import conditional formatting rules, such as Data Bars, Icon Sets, and Color Scales, which are used to visualize the data.</td></tr>
<tr>
<td>
Data validation</td><td>
Provides support for cross-sheet reference validation and list validation with formula/cell references compared to the Spreadsheet (Classic) control.</td></tr>
</table>

### API mapping

Below are the property differences between SfSpreadsheet and the Spreadsheet (Classic) control:

<table>
<tr>
<th>
SfSpreadsheet</th><th>
Spreadsheet (Classic)</th><th>
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
Gets or sets whether the custom context menu is enabled</td></tr>
<tr>
<td>
{{ '[ShowTabItemContextMenu](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Tools.Controls.TabControlExt.html#Syncfusion_Windows_Tools_Controls_TabControlExt_ShowTabItemContextMenu)' | markdownify }}</td><td>
TabStyleManager -> ShowTabItemContextMenu</td><td>
Gets or sets whether the tab item context menu is displayed</td></tr>
<tr>
<td>
{{ '[TabItemContextMenu](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_TabItemContextMenu)' | markdownify }}</td><td>
TabStyleManager ->TabItemContextMenu</td><td>
Gets or sets the context menu items for the tab item</td></tr>
<tr>
<td>
{{ '[ActiveSheet](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_ActiveSheet)' | markdownify }}</td><td>
ExcelProperties->Workbook->ActiveSheet</td><td>
Gets the current active sheet</td></tr>
<tr>
<td>
{{ '[Workbook](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_Workbook)' | markdownify }}</td><td>
ExcelProperties->Workbook</td><td>
Gets the underlying Workbook instance</td></tr>
<tr>
<td>
{{ '[CurrentCellStyle](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_CurrentCellStyle)' | markdownify }}</td><td>
GridProperties->CurrentCellStyle</td><td>
Gets the style of the current cell</td></tr>
<tr>
<td>
{{ '[HistoryManager](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_HistoryManager)' | markdownify }}</td><td>
GridProperties.ActiveSpreadsheetGrid.Model.CommandStack</td><td>
Gets the command stack of the SfSpreadsheet. Undo/redo is enabled by default.</td></tr>
<tr>
<td>
{{ '[SheetName](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGrid_SheetName)' | markdownify }}</td><td>
GridProperties->CurrentSheetName</td><td>
Gets the name of the active sheet tab</td></tr>
</table>


N> See the [WPF Spreadsheet](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for a visual overview, and explore the [WPF Spreadsheet samples](https://github.com/syncfusion/wpf-demos) for runnable examples of rendering and configuring the control.

## See also

- [Getting started with SfSpreadsheet](https://help.syncfusion.com/wpf/spreadsheet/getting-started)
- [WPF Spreadsheet feature tour](https://www.syncfusion.com/wpf-controls/spreadsheet)
- [WPF Spreadsheet samples on GitHub](https://github.com/syncfusion/wpf-demos)