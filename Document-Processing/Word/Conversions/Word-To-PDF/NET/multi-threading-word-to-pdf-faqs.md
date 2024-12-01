---
title: FAQ about Multi threading | DocIO | Syncfusion&reg;
description: Learn about the frequently asked questions about Multi threading in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Frequently asked questions about Word document 

The frequently asked questions about the support for multithreading and thread-safety in Word to PDF conversion.

## Does DocIO library support multithreading and thread-safe?

### Multithreading using Task

Yes, the Syncfusion Word library is thread-safe, and you can create multiple instances of the WordDocument class to load the same file as multiple copies or different Word files and convert them to PDF using multithreading in C#.

The following code example illustrates how to create multiple instances of the Syncfusion Word library and convert them to PDF using multithreading in C#.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
class MultiThreading
{
    //Indicates the number of threads to be create.
    private const int TaskCount = 1000;
    public static async Task Main()
    {
        //Create an array of tasks based on the TaskCount.
        Task[] tasks = new Task[TaskCount];
        for (int i = 0; i < TaskCount; i++)
        {
            tasks[i] = Task.Run(() => ConvertWordToPDF());
        }
        //Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    //Convert a Word document to PDF using multi-threading.
    static void ConvertWordToPDF()
    {
        using (FileStream inputStream = new FileStream("InputTemplate.docx", FileMode.Open, FileAccess.Read))
        {
            // Load the Word document
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Convert Word document to PDF
                using (DocIORenderer renderer = new DocIORenderer())
                {

                    PdfDocument pdfDocument = renderer.ConvertToPDF(document);
                    // Save the PDF document
                    using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() +".pdf", FileMode.Create, FileAccess.Write))
                    {
                        pdfDocument.Save(outputFileStream);
                    }
                    // Dispose renderer to free resources
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
    //Indicates the number of threads to be create.
    private const int TaskCount = 1000;
    public static async Task Main()
    {
        //Create an array of tasks based on the TaskCount.
        Task[] tasks = new Task[TaskCount];
        for (int i = 0; i < TaskCount; i++)
        {
            tasks[i] = Task.Run(() => ConvertWordToPDF());
        }
        //Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    //Convert a Word document to PDF using multi-threading.
    static void ConvertWordToPDF()
    {
        using (FileStream inputStream = new FileStream("InputTemplate.docx", FileMode.Open, FileAccess.Read))
        {
            // Load the Word document
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Convert Word document to PDF
                using (DocIORenderer renderer = new DocIORenderer())
                {

                    PdfDocument pdfDocument = renderer.ConvertToPDF(document);
                    // Save the PDF document
                    using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() +".pdf", FileMode.Create, FileAccess.Write))
                    {
                        pdfDocument.Save(outputFileStream);
                    }
                    // Dispose renderer to free resources
                    pdfDocument.Dispose();
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Module MultiThreading
    ' Indicates the number of threads to be create.
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
        Dim inputTemplatePath As String = "InputTemplate.docx"
        ' Use a memory stream to load the input document for thread safety.
        Using inputStream As New FileStream(inputTemplatePath, FileMode.Open, FileAccess.Read, FileShare.Read)
            ' Load the Word document from the memory stream.
            Using document As New WordDocument(inputStream, FormatType.Docx)
                ' Convert Word document to PDF
                Using renderer As New DocIORenderer()
                    ' Convert Word document to PDF
                    Dim pdfDocument As PdfDocument = renderer.ConvertToPDF(document)

                    ' Save the PDF document
                    Using outputFileStream As New FileStream("Output" & Guid.NewGuid().ToString() & ".pdf", FileMode.Create, FileAccess.Write)
                        pdfDocument.Save(outputFileStream)
                    End Using

                    ' Dispose renderer to free resources
                    pdfDocument.Dispose()
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/FAQs/Multithreading-using-task).

### Multithreading using Parallel process

The following code example illustrates how to create multiple instances of the Syncfusion Word library and convert them to PDF using parallel processing with multithreading in C#.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %}
class MultiThreading
{
    static void Main(string[] args)
    {
        //Indicates the number of threads to be create.
        int limit = 5;
        Console.WriteLine("Parallel For Loop");
        Parallel.For(0, limit, count =>
        {
            Console.WriteLine("Task {0} started", count);
            //Create multiple presentations, one PPT on each thread.
            ConvertWordToPDF(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }
    //Convert a Word document to PDF using multi-threading.
    static void ConvertWordToPDF(int count)
    {
        using (FileStream inputStream = new FileStream("InputTemplate.docx", FileMode.Open, FileAccess.Read))
        {
            // Load the Word document
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Convert Word document to PDF
                using (DocIORenderer renderer = new DocIORenderer())
                {
                    PdfDocument pdfDocument = renderer.ConvertToPDF(document);
                    // Save the PDF document
                    using (FileStream outputFileStream = new FileStream("Output" +count +".pdf", FileMode.Create, FileAccess.Write))
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
        //Indicates the number of threads to be create.
        int limit = 5;
        Console.WriteLine("Parallel For Loop");
        Parallel.For(0, limit, count =>
        {
            Console.WriteLine("Task {0} started", count);
            //Create multiple presentations, one PPT on each thread.
            ConvertWordToPDF(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }
    //Convert a Word document to PDF using multi-threading.
    static void ConvertWordToPDF(int count)
    {
        using (FileStream inputStream = new FileStream("InputTemplate.docx", FileMode.Open, FileAccess.Read))
        {
            // Load the Word document
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Convert Word document to PDF
                using (DocIORenderer renderer = new DocIORenderer())
                {
                    PdfDocument pdfDocument = renderer.ConvertToPDF(document);
                    // Save the PDF document
                    using (FileStream outputFileStream = new FileStream("Output" +count +".pdf", FileMode.Create, FileAccess.Write))
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

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Module MultiThreading
    Public Sub Main(args As String())
        ' Indicates the number of threads to be create.
        Dim limit As Integer = 5
        Console.WriteLine("Parallel For Loop")

        ' Parallel For Loop
        Parallel.For(0, limit, Sub(count)
                                   Console.WriteLine("Task {0} started", count)
                                   ' Convert multiple Word document to PDF on each thread.
                                   ConvertWordToPDF(count)
                                   Console.WriteLine("Task {0} is done", count)
                               End Sub)
    End Sub

    ' Convert multiple Word document to PDF using multi-threading.
    Private Sub ConvertWordToPDF(count As Integer)
        Using inputStream As New FileStream("InputTemplate.docx", FileMode.Open, FileAccess.Read)
            ' Load the Word document from the stream.
            Using document As New WordDocument(inputStream, FormatType.Docx)
                ' Convert Word document to PDF
                Using renderer As New DocIORenderer()
                    ' Convert Word document to PDF
                    Dim pdfDocument As PdfDocument = renderer.ConvertToPDF(document)
                    ' Save the PDF document
                    Using outputFileStream As New FileStream("Output" & count & ".pdf", FileMode.Create, FileAccess.Write)
                        pdfDocument.Save(outputFileStream)
                    End Using
                    ' Dispose renderer to free resources
                    pdfDocument.Dispose()
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/FAQs/Multithreading-using-parallel-process).