---
title: Working with Excel Data | .NET XlsIO | Syncfusion
description: Learn how to import data into an Excel worksheet from DataTable, DataColumn, DataView, collections, arrays, Microsoft Grid controls, and HTML tables, and how to export data from Excel to DataTable objects or collections using the .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Working with Excel Data

XlsIO supports importing and exporting data to and from Excel. This includes handling various data formats and structures, enabling you to integrate Excel with different data sources and to use Excel's capabilities for data manipulation and analysis.

To quickly learn how to import and export data between a DataTable and Excel, watch this short video tutorial:
{% youtube "https://www.youtube.com/watch?v=TFYqnr1hDH0" %}

## Import to Excel

Imports data from the following sources into an Excel worksheet:

* [DataTable to Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/import-export/import-to-excel#datatable-to-excel) — in-memory tabular data from `System.Data.DataTable`.
* [DataColumn to Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/import-export/import-to-excel#datacolumn-to-excel) — a single column of a `DataTable`.
* [DataView to Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/import-export/import-to-excel#dataview-to-excel) — a custom view of a `DataTable` (filtered/sorted).
* [Collection Objects to Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/import-export/import-to-excel#collection-objects-to-excel) — any `IEnumerable<T>` (for example, `List<T>`).
* [Array to Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/import-export/import-to-excel#array-to-excel) — one-dimensional or two-dimensional object arrays.
* [Microsoft Grid Controls to Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/import-export/import-to-excel#microsoft-grid-controls-to-excel) — `DataGridView`, `GridView`, and similar WinForms/WebForms grids.
* [HTML Table to Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/import-export/import-to-excel#html-table-to-excel) — parse an HTML `<table>` snippet and import it.

N> Use the [ImportOnSave](https://support.syncfusion.com/kb/article/11143/how-to-use-importonsave-option-while-importing-data-using-xlsio) option to re-import data from a data source automatically when the workbook is saved.

## Export from Excel

Exports data from an Excel worksheet to the following destinations:

* [Excel to DataTable](https://help.syncfusion.com/document-processing/excel/excel-library/net/import-export/export-from-excel#excel-to-datatable) — read a worksheet or range into a `System.Data.DataTable`.
* [Excel to Collection Objects](https://help.syncfusion.com/document-processing/excel/excel-library/net/import-export/export-from-excel#excel-to-collection-objects) — map rows to an `IEnumerable<T>` of strongly-typed objects.

N> Exporting to Microsoft Grid controls or HTML tables is not supported; use the [DataTable](#) or collection destination and bind it to the control manually.

## See Also

### Knowledge Base Articles

* [How to use the ImportOnSave option while importing data using XlsIO?](https://support.syncfusion.com/kb/article/11143/how-to-use-importonsave-option-while-importing-data-using-xlsio)
* [How to export Excel to DataTable in C#, VB.NET?](https://support.syncfusion.com/kb/article/8172/export-excel-to-datatable-in-c-vb-net)
* [How to export data to Excel in WPF?](https://support.syncfusion.com/kb/article/11301/export-data-to-excel-in-wpf)
* [How to export DataTable to Excel with formatting in C#, VB.NET?](https://support.syncfusion.com/kb/article/8133/export-datatable-to-excel-with-formatting-in-c-vbnet)
* [How to export DataTable with images to Excel in C#, VB.NET?](https://support.syncfusion.com/kb/article/8162/export-datatable-with-images-to-excel-in-c-vb-net)
* [How to export a delimited string in the Excel worksheet into a collection object and add it as a string array using C#, VB.NET?](https://support.syncfusion.com/kb/article/15999/how-to-export-delimited-string-in-the-excel-worksheet-into-collection-object-and-add-it-as-a-string-array-using-c-vbnet)
* [How to import data from a dynamic collection to an Excel worksheet in C#, VB.NET?](https://support.syncfusion.com/kb/article/7572/import-data-from-dynamic-collection-to-excel-worksheet-in-c-vb-net)
* [How to preserve a long number while exporting in XlsIO?](https://support.syncfusion.com/kb/article/7742/how-to-preserve-long-number-while-exporting-in-xlsio)

### Related Blog Posts

* [Export data from data sources to Excel and vice-versa in C#](https://www.syncfusion.com/document-sdk/net-excel-library/import-data-to-excel)
