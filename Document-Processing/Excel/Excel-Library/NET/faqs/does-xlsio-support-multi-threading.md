---
title: XlsIO support for multi threading | Syncfusion
description: This page explains whether the Syncfusion .NET Excel library (XlsIO) provides support for multi threading.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO library support multithreading and thread-safe?

Yes, the XlsIO library supports multithreading and is thread-safe. It allows you to create multiple workbook instances for tasks like creating, reading, editing, and converting Excel documents.

The following code example illustrates how to create multiple workbook instances to read several copies of the same Excel document using multithreading in C#:

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