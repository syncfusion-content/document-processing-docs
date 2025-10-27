---
title: How to get the column width and row height in pixels | Syncfusion
description: Code example showing how to retrieve column width and row height in pixels using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to get the column width and row height in pixels?

In Essential&reg; XlsIO, you can obtain column widths and row heights in pixels by using the [GetColumnWidthInPixels](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_GetColumnWidthInPixels_System_Int32_) and [GetRowHeightInPixels](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_GetRowHeightInPixels_System_Int32_) methods. The below code snippet demonstrates this.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream inputStream = new FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);
    IWorksheet worksheet = workbook.Worksheets[0];

    var range = worksheet.UsedRange["A1"];  
    
    //Get the Column width in pixels
    var width = worksheet.GetColumnWidthInPixels(range.Column);

    //Get the Row height in pixels
    var height = worksheet.GetRowHeightInPixels(range.Row);

    #region Save
    //Saving the workbook
    FileStream outputStream = new FileStream("RowsandColumns.xlsx", FileMode.Create, FileAccess.Write);
    workbook.SaveAs(outputStream);
    #endregion

    //Dispose streams
    outputStream.Dispose();
    inputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];                
    var range = worksheet.UsedRange["A1"];

    //Get the Column width in pixels
    var width = worksheet.GetColumnWidthInPixels(range.Column);

    //Get the Row height in pixels
    var height = worksheet.GetRowHeightInPixels(range.Row);

    workbook.SaveAs("RowsandColumns.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
 Using excelEngine As ExcelEngine = New ExcelEngine()
     Dim application As IApplication = excelEngine.Excel
     application.DefaultVersion = ExcelVersion.Excel2013
     Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx", ExcelOpenType.Automatic)
     Dim worksheet As IWorksheet = workbook.Worksheets(0)

     Dim range = worksheet.UsedRange("A1")
     ' Column width in pixels
     Dim width As Integer = worksheet.GetColumnWidthInPixels(range.Column)
     ' Row height in pixels
     Dim height As Integer = worksheet.GetRowHeightInPixels(range.Row)

     workbook.SaveAs("GridLineColor.xlsx")
 End Using
{% endhighlight %}
{% endtabs %}  

## See Also

* [How to format text within a cell?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-format-text-within-a-cell)
* [How to unfreeze the rows and columns in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-unfreeze-the-rows-and-columns-in-xlsio)
* [What is the maximum range of Rows and Columns?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/what-is-the-maximum-range-of-rows-and-columns)
* [How to find values with a matching case for specific column in Excel?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-find-values-with-a-matching-case-for-specific-column-in-excel)
* [How to protect certain cells in a worksheet?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-protect-certain-cells-in-a-worksheet)
* [How to search a value in only specific columns of an Excel worksheet?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-search-a-value-in-only-specific-columns-of-an-excel-worksheet)
