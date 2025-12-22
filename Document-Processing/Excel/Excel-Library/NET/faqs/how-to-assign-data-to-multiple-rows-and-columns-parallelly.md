---
title: Write Data to Multiple Cells in Parallel Without Errors | Syncfusion
description: Learn to populate multiple rows and columns concurrently in Excel by using Syncfusion .NET XlsIO with proper locking to avoid duplicate-value exceptions. .
platform: document-processing
control: XlsIO
documentation: UG
---

# Write Data to Multiple Cells in Parallel Without Errors?

When values are written to a worksheet range, XlsIO stores the data in an internal collection. If a Parallel.For loop writes to the same range simultaneously, the same value can be added twice, causing an exception.
The solution is to wrap each write operation in a lock/SyncLock, ensuring that only one thread updates the collection at a time.

The following examples in C# (cross-platform and Windows-specific) and VB.NET illustrate how to write data to multiple rows and columns safely in parallel.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Parallel%20Write/.NET/Parallel%20Write/Parallel%20Write/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    object m_lock = new object();
    int numberOfRows = 10;
    Parallel.For(1, numberOfRows, i =>
    {
        var rand = new Random();
        lock (m_lock)
        {
            worksheet.Range[i, 1].Value2 = string.Format("R{0}T{1}", i, rand.Next(10));
            worksheet.Range[i, 2].Value2 = string.Format("R{0}T{1}", i, rand.Next(10));                    
            worksheet.Range[i, 3].Value2 = DateTime.Now.AddDays(rand.NextDouble() * 10.0);
            worksheet.Range[i, 4].Value2 = DateTime.Now.AddDays(rand.NextDouble() * 10.0);
            worksheet.Range[i, 5].Value2 = rand.Next(2000);
            worksheet.Range[i, 6].Value2 = rand.Next(4000);                   
            worksheet.Range[i, 7].Value2 = rand.NextDouble() * 10000.0;
            worksheet.Range[i, 8].Value2 = rand.NextDouble() * 10000.0;
        }
    });

    #region Save
    //Saving the workbook
    workbook.SaveAs("../../../Output/Output.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    object m_lock = new object();
    int numberOfRows = 10;
    Parallel.For(1, numberOfRows, i =>
    {
        var rand = new Random();
        lock (m_lock)
        {
            worksheet.Range[i, 1].Value2 = string.Format("R{0}T{1}", i, rand.Next(10));
            worksheet.Range[i, 2].Value2 = string.Format("R{0}T{1}", i, rand.Next(10));
            worksheet.Range[i, 3].Value2 = DateTime.Now.AddDays(rand.NextDouble() * 10.0);
            worksheet.Range[i, 4].Value2 = DateTime.Now.AddDays(rand.NextDouble() * 10.0);
            worksheet.Range[i, 5].Value2 = rand.Next(2000);
            worksheet.Range[i, 6].Value2 = rand.Next(4000);
            worksheet.Range[i, 7].Value2 = rand.NextDouble() * 10000.0;
            worksheet.Range[i, 8].Value2 = rand.NextDouble() * 10000.0;
        }
    });

    #region Save
    //Saving the workbook
    workbook.SaveAs("../../Output/Output.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
 Using excelEngine As New ExcelEngine()

     Dim application As IApplication = excelEngine.Excel
     application.DefaultVersion = ExcelVersion.Xlsx

     Dim workbook As IWorkbook = application.Workbooks.Create(1)
     Dim worksheet As IWorksheet = workbook.Worksheets(0)

     Dim m_lock As New Object()
     Dim numberOfRows As Integer = 10

     Parallel.For(1, numberOfRows, Sub(i)
         Dim rand As New Random()

         SyncLock m_lock
             worksheet.Range(i, 1).Value2 = $"R{i}T{rand.Next(10)}"
             worksheet.Range(i, 2).Value2 = $"R{i}T{rand.Next(10)}"
             worksheet.Range(i, 3).Value2 = DateTime.Now.AddDays(rand.NextDouble() * 10.0)
             worksheet.Range(i, 4).Value2 = DateTime.Now.AddDays(rand.NextDouble() * 10.0)
             worksheet.Range(i, 5).Value2 = rand.Next(2000)
             worksheet.Range(i, 6).Value2 = rand.Next(4000)
             worksheet.Range(i, 7).Value2 = rand.NextDouble() * 10000.0
             worksheet.Range(i, 8).Value2 = rand.NextDouble() * 10000.0
         End SyncLock
     End Sub)

     'Save the workbook
     workbook.SaveAs("../../Output/Output.xlsx")

 End Using
{% endhighlight %}
{% endtabs %}  

A complete working example of assigning data to multiple rows and columns in parallel using C# is available on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Parallel%20Write/.NET/Parallel%20Write">this GitHub page</a>.