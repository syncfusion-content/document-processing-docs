---
title: FAQ about multithreading in Word to PDF | DocIO | Syncfusion
description: Learn about multithreading and thread-safety support in Word to PDF conversion using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Multithreading in Word to PDF conversion

This page covers multithreading and thread-safety support in Word to PDF conversion.

## Does the Word library support multithreading and thread-safety for Word to PDF conversion?

Yes, the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) is thread-safe, and you can create multiple instances of the [WordDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html) class to load the same file as multiple copies or different Word files, then convert them to PDF using multithreading in C#.

### Frequently asked questions about multithreading in Word to PDF

The following code example illustrates how to use multithreading to convert multiple copies of a Word document to PDF by creating multiple tasks in C#.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

class MultiThreading
{
    // Indicates the number of threads to be created.
    private const int TaskCount = 1000;
    public static async Task Main()
    {
        // Create an array of tasks based on the TaskCount.
        Task[] tasks = new Task[TaskCount];
        for (int i = 0; i < TaskCount; i++)
        {
            tasks[i] = Task.Run(() => ConvertWordToPDF());
        }
        // Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    // Convert a Word document to PDF using multi-threading.
    static void ConvertWordToPDF()
    {
        using (FileStream inputStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
        {
            // Load an existing Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Create an instance of DocIORenderer.
                using (DocIORenderer renderer = new DocIORenderer())
                {
                    // Convert Word document to PDF.
                    using (PdfDocument pdfDocument = renderer.ConvertToPDF(document))
                    {
                        // Save the PDF document.
                        using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() + ".pdf", FileMode.Create, FileAccess.Write))
                        {
                            pdfDocument.Save(outputFileStream);
                        }
                    }
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

class MultiThreading
{
    // Indicates the number of threads to be created.
    private const int TaskCount = 1000;
    public static async Task Main()
    {
        // Create an array of tasks based on the TaskCount.
        Task[] tasks = new Task[TaskCount];
        for (int i = 0; i < TaskCount; i++)
        {
            tasks[i] = Task.Run(() => ConvertWordToPDF());
        }
        // Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    // Convert a Word document to PDF using multi-threading.
    static void ConvertWordToPDF()
    {
        using (FileStream inputStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
        {
            // Load an existing Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Create an instance of DocToPDFConverter.
                using (DocToPDFConverter converter = new DocToPDFConverter())
                {
                    //Convert Word document to PDF.
                    PdfDocument pdfDocument = converter.ConvertToPDF(document);
                    //Save the PDF document.
                    using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() +".pdf", FileMode.Create, FileAccess.Write))
                    {
                        pdfDocument.Save(outputFileStream);
                    }
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports System
Imports System.IO
Imports System.Threading.Tasks
Imports Syncfusion.DocIO
Imports Syncfusion.DocIO.DLS
Imports Syncfusion.DocToPDFConverter
Imports Syncfusion.Pdf

Module MultiThreading
    ' Indicates the number of threads to be created.
    Private Const TaskCount As Integer = 1000
    Public Sub Main()
        ' Create an array of tasks based on the TaskCount.
        Dim tasks(TaskCount - 1) As Task
        For i As Integer = 0 To TaskCount - 1
            tasks(i) = Task.Run(Sub() ConvertWordToPDF())
        Next
        ' Ensure all tasks complete by waiting on each task.
        Task.WhenAll(tasks).Wait()
    End Sub

    ' Convert a Word document to PDF using multi-threading.
    Private Sub ConvertWordToPDF()
        Using inputStream As New FileStream("Input.docx", FileMode.Open, FileAccess.Read, FileShare.Read)
            ' Load an existing Word document.
            Using document As New WordDocument(inputStream, FormatType.Docx)
                ' Create an instance of DocToPDFConverter.
                Using converter As New DocToPDFConverter()
                    ' Convert Word document to PDF.
                    Using pdfDocument As PdfDocument = converter.ConvertToPDF(document)
                        ' Save the PDF document.
                        Using outputFileStream As New FileStream("Output" & Guid.NewGuid().ToString() & ".pdf", FileMode.Create, FileAccess.Write)
                            pdfDocument.Save(outputFileStream)
                        End Using
                    End Using
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Multithreading-using-tasks).

> **Note:** When running many concurrent tasks, wrap the `Task.WhenAll` call in a `try`/`catch` to handle `AggregateException` and inspect individual task exceptions as needed.

### Multithreading Word to PDF using parallel process

The following code example illustrates how to use a parallel `for` loop to process multiple tasks concurrently, converting Word documents to PDF using multithreading in C#.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

class MultiThreading
{
    static void Main(string[] args)
    {
        // Indicates the number of threads to be created.
        int limit = 5;
        Console.WriteLine("Parallel For Loop");
        Parallel.For(0, limit, count =>
        {
            Console.WriteLine("Task {0} started", count);
            // Convert multiple Word documents, one document on each thread.
            ConvertWordToPDF(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }

    // Convert a Word document to PDF using multi-threading.
    static void ConvertWordToPDF(int count)
    {
        using (FileStream inputStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
        {
            // Load an existing Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Create an instance of DocIORenderer.
                using (DocIORenderer renderer = new DocIORenderer())
                {
                    // Convert Word document to PDF.
                    PdfDocument pdfDocument = renderer.ConvertToPDF(document);
                    //Save the PDF document.
                    using (FileStream outputFileStream = new FileStream("Output" + count + ".pdf", FileMode.Create, FileAccess.Write))
                    {
                        pdfDocument.Save(outputFileStream);
                    }
                    // Dispose pdf to free resources.
                    pdfDocument.Dispose();
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

class MultiThreading
{
    static void Main(string[] args)
    {
        // Indicates the number of threads to be created.
        int limit = 5;
        Console.WriteLine("Parallel For Loop");
        Parallel.For(0, limit, count =>
        {
            Console.WriteLine("Task {0} started", count);
            // Convert multiple Word documents, one document on each thread.
            ConvertWordToPDF(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }

    // Convert a Word document to PDF using multi-threading.
    static void ConvertWordToPDF(int count)
    {
        using (FileStream inputStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
        {
            // Load an existing Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Create an instance of DocToPDFConverter.
                using (DocToPDFConverter converter = new DocToPDFConverter())
                {
                    // Convert Word document to PDF.
                    using (PdfDocument pdfDocument = converter.ConvertToPDF(document))
                    {
                        // Save the PDF document.
                        using (FileStream outputFileStream = new FileStream("Output" + count + ".pdf", FileMode.Create, FileAccess.Write))
                        {
                            pdfDocument.Save(outputFileStream);
                        }
                    }
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Module MultiThreading
    Public Sub Main(args As String())
        ' Indicates the number of threads to be created.
        Dim limit As Integer = 5
        Console.WriteLine("Parallel For Loop")
        Parallel.For(0, limit, Sub(count)
                                   Console.WriteLine("Task {0} started", count)
                                   ' Convert multiple Word documents, one document on each thread.
                                   ConvertWordToPDF(count)
                                   Console.WriteLine("Task {0} is done", count)
                               End Sub)
    End Sub

    ' Convert multiple Word documents to PDF using multi-threading.
    Private Sub ConvertWordToPDF(count As Integer)
        Using inputStream As New FileStream("Input.docx", FileMode.Open, FileAccess.Read, FileShare.Read)
            ' Load an existing Word document.
            Using document As New WordDocument(inputStream, FormatType.Docx)
                ' Create an instance of DocToPDFConverter.
                Using converter As New DocToPDFConverter()
                    ' Convert Word document to PDF.
                    Using pdfDocument As PdfDocument = converter.ConvertToPDF(document)
                        ' Save the PDF document.
                        Using outputFileStream As New FileStream("Output" & count.ToString() & ".pdf", FileMode.Create, FileAccess.Write)
                            pdfDocument.Save(outputFileStream)
                        End Using
                    End Using
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Multithreading-using-parallel-process).

## See also

* [Word to PDF conversion overview](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/overview)
* [Assemblies required for Word to PDF](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/assemblies-required-word-to-pdf)
* [NuGet packages required for Word to PDF](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/nuget-packages-required-word-to-pdf)