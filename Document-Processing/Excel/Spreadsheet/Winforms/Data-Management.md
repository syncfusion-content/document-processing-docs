---
layout: post
title: Data Management in Windows Forms Spreadsheet control | Syncfusion®
description: Learn about Data Management support in Syncfusion® Windows Forms Spreadsheet control and more details.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Data Management in Windows Forms Spreadsheet
This section explains how to import and export data in the Syncfusion® `Spreadsheet` control.

## Import from DataTable

The following data sources can be imported into the worksheet:

* DataTable
* DataColumn
* DataView
* Business Objects
* Array

To import data from a `DataTable`, use the [ImportDataTable](https://help.syncfusion.com/file-formats/xlsio/working-with-data#importing-data-to-worksheets) method.

{% tabs %}
{% highlight c# %}

spreadsheet.ActiveSheet.ImportDataTable(data_table, true, 1, 1);
spreadsheet.ActiveGrid.InvalidateCells();

{% endhighlight %}
{% endtabs %}

For more details, refer to the [XlsIO UG](https://help.syncfusion.com/file-formats/xlsio/working-with-data#importing-data-to-worksheets).

## Export to DataTable

To export worksheet data to a `DataTable`, use the [ExportDataTable](https://help.syncfusion.com/file-formats/xlsio/working-with-data#exporting-from-worksheet-to-data-table) method.

{% tabs %}
{% highlight c# %}

IWorksheet sheet = spreadsheet.Workbook.Worksheets[0];
IRange range = sheet.Range["A1:K50"];

DataTable data_table = sheet.ExportDataTable(range, ExcelExportDataTableOptions.ColumnNames);

{% endhighlight %}
{% endtabs %}

For more details, refer to the [XlsIO UG](https://help.syncfusion.com/file-formats/xlsio/working-with-data#exporting-from-worksheet-to-data-table).
