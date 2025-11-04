---
title: How to delete hyperlinks without removing styles in Excel | Syncfusion
description: Code example to remove hyperlinks in an Excel document without removing cell formatting using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to delete hyperlinks from a worksheet without affecting the cell styles using C#?

You can remove hyperlinks from an Excel worksheet without altering the cell formatting using [HyperLinks]( https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_HyperLinks) property of the [IWorksheet]( https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html) interface. Below are the code examples in C# (cross-platform and Windows-specific) and VB.NET to demonstrate how to do this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Hyperlinks/.NET/Delete%20Hyperlinks/Delete%20Hyperlinks/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];
    // Remove first hyperlink without affecting cell styles
    HyperLinksCollection hyperlink = worksheet.HyperLinks as HyperLinksCollection;
    hyperlink.Remove(hyperlink[0] as HyperLinkImpl);
    FileStream outputStream = new FileStream(, FileMode.Create, FileAccess.Write);
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
    workbook.Close();
    excelEngine.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine engine = new ExcelEngine())
{
    IApplication application = engine.Excel;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];
    // Remove first hyperlink without affecting cell styles
    HyperLinksCollection hyperlink = worksheet.HyperLinks as HyperLinksCollection;
    hyperlink.Remove(hyperlink[0] as HyperLinkImpl);
    workbook.SaveAs("Output.xlsx");    
   workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using engine As New ExcelEngine()
    Dim application As IApplication = engine.Excel
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)
    ' Remove first hyperlink without affecting cell style
    Dim hyperlink As HyperLinksCollection = TryCast(worksheet.HyperLinks, HyperLinksCollection)
    hyperlink.Remove(TryCast(hyperlink(0), HyperLinkImpl))
    Using outputStream As New FileStream("Output.xlsx", FileMode.Create, FileAccess.Write)
        workbook.SaveAs(outputStream)
    End Using
    workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}
A complete working example to delete hyperlinks from an Excel worksheet without altering cell styles is available on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Hyperlinks/.NET/Delete%20Hyperlinks).
