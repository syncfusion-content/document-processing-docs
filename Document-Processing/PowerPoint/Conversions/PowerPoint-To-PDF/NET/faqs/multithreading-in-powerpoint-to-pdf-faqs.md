---
title: FAQ about multithreading in PowerPoint to PDF | Syncfusion&reg;
description: Learn about the FAQs regarding the support of multithreading in PowerPoint to PDF conversion using the .NET PowerPoint (Presentation) library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Frequently asked questions about multithreading in PowerPoint to PDF

The frequently asked questions regarding multithreading and thread-safety support in PowerPoint to PDF conversion are listed below.

## Does the PowerPoint library support multithreading and thread-safety for PowerPoint to PDF conversion?

Yes, the Syncfusion&reg; PowerPoint library is thread-safe, and you can create multiple instances of the [Presentation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.html) class to load the same file as multiple copies or different PowerPoint files, then convert them to PDF using multithreading in C#.

### Multithreading PowerPoint to PDF using tasks

The following code example illustrates how to use multithreading to convert multiple copies of a PowerPoint presentation to PDF by creating multiple tasks in C#.

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
            tasks[i] = Task.Run(() => ConvertPowerPointToPDF());
        }
        //Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    //Convert a Powerpoint presentation to PDF using multi-threading.
    static void ConvertPowerPointToPDF()
    {
        using (FileStream inputStream = new FileStream("Input.pptx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PowerPoint presentation.
            using (IPresentation presentation = Presentation.Open(inputStream))
            {
                //Convert PowerPoint presentation to PDF.
                using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(presentation))
                {
                    using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() + ".pdf", FileMode.Create, FileAccess.Write))
                    {
                        //Save the PDF document.
                        pdfDocument.Save(outputFileStream);
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
    //Indicates the number of threads to be create.
    private const int TaskCount = 1000;
    public static async Task Main()
    {
        //Create an array of tasks based on the TaskCount.
        Task[] tasks = new Task[TaskCount];
        for (int i = 0; i < TaskCount; i++)
        {
            tasks[i] = Task.Run(() => ConvertPowerPointToPDF());
        }
        //Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    //Convert a Powerpoint presentation to PDF using multi-threading.
    static void ConvertPowerPointToPDF()
    {
        using (FileStream inputStream = new FileStream("Input.pptx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PowerPoint presentation.
            using (IPresentation presentation = Presentation.Open(inputStream))
            {
                //Convert PowerPoint presentation to PDF.
                using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(presentation))
                {
                    using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() + ".pdf", FileMode.Create, FileAccess.Write))
                    {
                        //Save the PDF document.
                        pdfDocument.Save(outputFileStream);
                    }
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Module MultiThreading
    'Indicates the number of threads to be create.
    Private Const TaskCount As Integer = 1000
    Public Sub Main()
        'Create an array of tasks based on the TaskCount.
        Dim tasks(TaskCount - 1) As Task
        For i As Integer = 0 To TaskCount - 1
            tasks(i) = Task.Run(Sub() ConvertPowerPointToPDF())
        Next
        'Ensure all tasks complete by waiting on each task.
        Task.WhenAll(tasks).Wait()
    End Sub

    ' Convert a PowerPoint presentation to PDF using multi-threading.
    Private Sub ConvertPowerPointToPDF()
        Using inputStream As New FileStream("Input.pptx", FileMode.Open, FileAccess.Read)
            'Load an existing PowerPoint presentation.
            Using presentation As IPresentation = Presentation.Open(inputStream)
                'Convert PowerPoint presentation to PDF.
                Using pdfDocument As PdfDocument = PresentationToPdfConverter.Convert(presentation)
                    Using outputFileStream As New FileStream("Output" & Guid.NewGuid().ToString() & ".pdf", FileMode.Create, FileAccess.Write)
                        'Save the PDF document.
                        pdfDocument.Save(outputFileStream)
                    End Using
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Multithreading-using-tasks).

### Multithreading PowerPoint to PDF using parallel process

The following code example illustrates how to use a parallel for loop to process multiple tasks concurrently, converting PowerPoint presentations to PDF using multithreading in C#.

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
            //Convert multiple presentations, one PPT on each thread.
            ConvertPowerPointToPDF(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }

    //Convert a Powerpoint presentation to PDF using multi-threading.
    static void ConvertPowerPointToPDF(int count)
    {
        using (FileStream inputStream = new FileStream("Input.pptx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PowerPoint presentation.
            using (IPresentation presentation = Presentation.Open(inputStream))
            {
                //Convert PowerPoint presentation to PDF.
                using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(presentation))
                {
                    using (FileStream outputFileStream = new FileStream("Output" + count + ".pdf", FileMode.Create, FileAccess.Write))
                    {
                        //Save the PDF document.
                        pdfDocument.Save(outputFileStream);
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
    static void Main(string[] args)
    {
        //Indicates the number of threads to be create.
        int limit = 5;
        Console.WriteLine("Parallel For Loop");
        Parallel.For(0, limit, count =>
        {
            Console.WriteLine("Task {0} started", count);
            //Convert multiple presentations, one PPT on each thread.
            ConvertPowerPointToPDF(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }

    //Convert a Powerpoint presentation to PDF using multi-threading.
    static void ConvertPowerPointToPDF(int count)
    {
        using (FileStream inputStream = new FileStream("Input.pptx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PowerPoint presentation.
            using (IPresentation presentation = Presentation.Open(inputStream))
            {
                //Convert PowerPoint presentation to PDF.
                using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(presentation))
                {
                    using (FileStream outputFileStream = new FileStream("Output" + count + ".pdf", FileMode.Create, FileAccess.Write))
                    {
                        //Save the PDF document.
                        pdfDocument.Save(outputFileStream);
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
        'Indicates the number of threads to be created.
        Dim limit As Integer = 5
        Console.WriteLine("Parallel For Loop")
        'Parallel For Loop
        Parallel.For(0, limit, Sub(count)
                                   Console.WriteLine("Task {0} started", count)
                                   'Convert multiple presentations, one PPT on each thread.
                                   ConvertPowerPointToPDF(count)
                                   Console.WriteLine("Task {0} is done", count)
                               End Sub)
    End Sub

    'Convert a PowerPoint presentation to PDF using multi-threading.
    Private Sub ConvertPowerPointToPDF(count As Integer)
        Using inputStream As New FileStream("Input.pptx", FileMode.Open, FileAccess.Read)
            'Load an existing PowerPoint presentation.
            Using presentation As IPresentation = Presentation.Open(inputStream)
                'Convert PowerPoint presentation to PDF.
                Using pdfDocument As PdfDocument = PresentationToPdfConverter.Convert(presentation)
                    Using outputFileStream As New FileStream("Output" & count & ".pdf", FileMode.Create, FileAccess.Write)
                        'Save the PDF document.
                        pdfDocument.Save(outputFileStream)
                    End Using
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Multithreading-using-parallel-process).