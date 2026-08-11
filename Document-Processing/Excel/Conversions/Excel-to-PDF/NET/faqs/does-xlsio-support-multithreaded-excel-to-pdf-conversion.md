---
title: Multi threading support in XlsIO | Syncfusion
description: This page explains whether the .NET Excel Library supports multi-threading and how it handles conversion process efficiently.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO support multithreaded Excel to PDF conversion?

Yes, the XlsIO library supports multithreaded Excel to PDF conversion, and the conversion process is thread-safe. It allows you to create multiple workbook instances for tasks like creating, reading, editing, and converting Excel documents.

The following code example illustrates how to create multiple workbook instances to read several copies of the same Excel document and convert them to PDF using multithreading in C#:

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIORenderer** NuGet package. This single metapackage transitively pulls in `Syncfusion.XlsIO`, `Syncfusion.Pdf`, and all required dependencies - no separate `Syncfusion.XlsIO` or `Syncfusion.Pdf` install is needed.
- Add the required `using` directives at the top of the file:
  - `using System;` - for `Console`, `DateTime`.
  - `using System.IO;` - for `FileStream`, `FileMode`, `FileAccess`, `MemoryStream`.
  - `using System.Threading.Tasks;` - for `Task`, `Task.Run`, `Task.WhenAll`.
  - `using Syncfusion.XlsIO;` - for the XlsIO types and `IApplication`, `IWorkbook`, `IWorksheet`.
  - `using Syncfusion.Pdf;` - for the `PdfDocument` type.
- The VB.NET equivalents: `Imports System`, `Imports System.IO`, `Imports System.Threading.Tasks`, `Imports Syncfusion.XlsIO`, `Imports Syncfusion.Pdf`, `Imports Syncfusion.XlsIO.Implementation`.
- The example expects an input file named `InputTemplate.xlsx` in the application's working directory. The file is opened 1000 times concurrently (one per task). On Windows, opening the same file concurrently may fail due to file-sharing restrictions. The documentation owner should reduce `TaskCount` to a more reasonable value (e.g., 10 or 100) or use a separate file per task.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
class MultiThreading
{
    //Defines the number of threads to be created
    private const int TaskCount = 1000;

    public static async Task Main()
    {
        //Create an array of tasks based on the TaskCount
        Task[] tasks = new Task[TaskCount];
        for (int i = 0; i < TaskCount; i++)
        {
            tasks[i] = Task.Run(() => ReadEditExcel());
        }

        //Ensure all tasks complete by waiting on each task
        await Task.WhenAll(tasks);
    }

    //Method to convert Excel to PDF
    static void ReadEditExcel()
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Xlsx;
            using (FileStream inputStream = new FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read))
            {
                IWorkbook workbook = application.Workbooks.Open(inputStream);
                IWorksheet sheet = workbook.Worksheets[0];

                //Add text, formula, and number in the worksheet
                sheet.Range["A1"].Text = "Hello World" + DateTime.Now;
                Console.WriteLine(sheet.Range["A1"].Text);
                sheet.Range["A2"].Formula = "=Now()";
                sheet.Range["A3"].Number = 12345;

                //Convert the Excel workbook to PDF
                XlsIORenderer xlsIORenderer = new XlsIORenderer();
                PdfDocument pdfDocument = xlsIORenderer.ConvertToPDF(workbook);

                //Save the PDF document as a stream
                using (MemoryStream outputStream = new MemoryStream())
                {
                    pdfDocument.Save(outputStream);
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
class MultiThreading
{
    //Defines the number of threads to be created
    private const int TaskCount = 1000;

    public static async Task Main()
    {
        //Create an array of tasks based on the TaskCount
        Task[] tasks = new Task[TaskCount];
        for (int i = 0; i < TaskCount; i++)
        {
            tasks[i] = Task.Run(() => ReadEditExcel());
        }

        //Ensure all tasks complete by waiting on each task
        await Task.WhenAll(tasks);
    }

    //Method to convert Excel to PDF
    static void ReadEditExcel()
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Xlsx;
            using (FileStream inputStream = new FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read))
            {
                IWorkbook workbook = application.Workbooks.Open(inputStream);
                IWorksheet sheet = workbook.Worksheets[0];

                //Add text, formula, and number in the worksheet
                sheet.Range["A1"].Text = "Hello World" + DateTime.Now;
                Console.WriteLine(sheet.Range["A1"].Text);
                sheet.Range["A2"].Formula = "=Now()";
                sheet.Range["A3"].Number = 12345;

                //Convert the Excel workbook to PDF
                XlsIORenderer xlsIORenderer = new XlsIORenderer();
                PdfDocument pdfDocument = xlsIORenderer.ConvertToPDF(workbook);

                // Save the PDF document as a stream
                using (MemoryStream outputStream = new MemoryStream())
                {
                    pdfDocument.Save(outputStream);
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Module MultiThreading
    'Defines the number of tasks to be created
    Private Const TaskCount As Integer = 1000

    Public Sub Main()
        'Create an array of tasks based on the TaskCount
        Dim tasks(TaskCount - 1) As Task
        For i As Integer = 0 To TaskCount - 1
            tasks(i) = Task.Run(Sub() ReadEditExcel())
        Next

        'Ensure all tasks complete by waiting on each task
        Task.WhenAll(tasks).Wait()
    End Sub

    'Method to convert Excel to PDF
    Private Sub ReadEditExcel()
        Using excelEngine As New ExcelEngine()
            Dim application As IApplication = excelEngine.Excel
            application.DefaultVersion = ExcelVersion.Xlsx
            Using inputStream As New FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read)
                Dim workbook As IWorkbook = application.Workbooks.Open(inputStream)
                Dim sheet As IWorksheet = workbook.Worksheets(0)

                'Add text, formula, and number in the worksheet
                sheet.Range("A1").Text = "Hello World " & DateTime.Now.ToString()
                Console.WriteLine(sheet.Range("A1").Text)
                sheet.Range("A2").Formula = "=Now()"
                sheet.Range("A3").Number = 12345

                'Convert the Excel workbook to PDF
                Dim xlsIORenderer As New XlsIORenderer()
                Dim pdfDocument As PdfDocument = xlsIORenderer.ConvertToPDF(workbook)

                'Save the PDF document as a stream
                Using outputStream As New MemoryStream()
                    pdfDocument.Save(outputStream)
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}
{% endtabs %}
## See also

* [Excel to PDF Conversion in XlsIO](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-conversion)
