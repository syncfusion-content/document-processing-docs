---
title: Does XlsIO support multithreading? | XlsIO | Syncfusion
description: Explains whether Syncfusion XlsIO is safe to use from multiple threads, with a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO support multithreading?

Syncfusion<sup>&reg;</sup> XlsIO **supports multithreading, but with one important caveat**: each thread must use its own [`ExcelEngine`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelEngine.html) instance. A single `ExcelEngine` (or any object obtained from it, such as `IApplication`, `IWorkbook`, or `IWorksheet`) is **not** thread-safe and must not be shared across threads. As long as every thread creates and disposes its own engine, the library as a whole can be used safely to create, read, edit, and convert many Excel documents in parallel.

The following code example runs 1,000 independent `ExcelEngine` instances concurrently, each reading a copy of `InputTemplate.xlsx`, making a small edit, and writing the result to a `MemoryStream`. Each task owns its own engine, workbook, and streams, so no state is shared.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup **once, before any threads start**:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Have a workbook called `InputTemplate.xlsx` in the application's working directory. Each task opens its own stream to the same file, so the file must be readable concurrently.
## Run multiple ExcelEngine instances in parallel

The flow is: spawn `TaskCount` tasks on the thread pool, run `ReadEditExcel()` on each task, and wait for all of them to finish with `Task.WhenAll`. Each `ReadEditExcel()` call creates its own `ExcelEngine`, opens the input file as a `FileStream`, edits a few cells, and saves to a `MemoryStream`. The `using` blocks guarantee that the engine, workbook, and streams are released at the end of each task.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
class MultiThreading
{
  //Defines the number of tasks to run in parallel
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

    //Method to read and edit Excel
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

                // Add text, formula, and number in the worksheet
                sheet.Range["A1"].Text = "Hello World " + DateTime.Now;
                Console.WriteLine(sheet.Range["A1"].Text);
                sheet.Range["A2"].Formula = "=Now()";
                sheet.Range["A3"].Number = 12345;

                // Save the workbook as a stream
                using (MemoryStream outputStream = new MemoryStream())
                {
                    workbook.SaveAs(outputStream);
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

    //Method to read and edit Excel
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

                // Add text, formula, and number in the worksheet
                sheet.Range["A1"].Text = "Hello World " + DateTime.Now;
                Console.WriteLine(sheet.Range["A1"].Text);
                sheet.Range["A2"].Formula = "=Now()";
                sheet.Range["A3"].Number = 12345;

                // Save the workbook as a stream
                using (MemoryStream outputStream = new MemoryStream())
                {
                    workbook.SaveAs(outputStream);
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

    'Method to read and edit Excel
    Private Sub ReadEditExcel()
        Using excelEngine As ExcelEngine = New ExcelEngine()
            Dim application As IApplication = excelEngine.Excel
            application.DefaultVersion = ExcelVersion.Xlsx

            Using inputStream As New FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read)
                Dim workbook As IWorkbook = application.Workbooks.Open(inputStream)
                Dim sheet As IWorksheet = workbook.Worksheets(0)

                'Add text, formula, and number in the worksheet
                sheet.Range("A1").Text = "Hello World " & DateTime.Now
                Console.WriteLine(sheet.Range("A1").Text)
                sheet.Range("A2").Formula = "=Now()"
                sheet.Range("A3").Number = 12345

                'Save the workbook as a stream
                Using outputStream As New MemoryStream()
                    workbook.SaveAs(outputStream)
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}
{% endtabs %}
