---
title: Perform multithreading in the PdfToImageConverter library | Syncfusion®
description: Learn the steps to implement multithreading in the PdfToImageConverter library to enhance performance and efficiency in PDF-to-image conversion.
platform: document-processing
control: PDF to image
documentation: UG
---

# How to perform multithreading in the PdfToImageConverter library

To perform multithreading and thread-safety support in opening PDF documents and saving image file are listed below.

## Does the PdfToImageConverter library support multithreading and thread-safety?

Yes, the Syncfusion<sup>&reg;</sup> PdfToImageConverter library is thread-safe, allowing you to create multiple instances of the [PdfToImageConverter]() class to load the same file as multiple copies or different PDF documents and save the images using multithreading in C#.

### Multithreading PDF document reading using tasks

The following code example illustrates how to use multithreading to open PDF documents and and saving image file by creating multiple tasks in C#.

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
            tasks[i] = Task.Run(() => ConvertPdfToImage());
        }
        //Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    //Convert a PDF document to image using multi-threading.
    static void ConvertPdfToImage()
    {
        using (FileStream inputStream = new FileStream(@"../../../Data/Input.pdf", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PDF document.
            using (PdfToImageConverter imageConverter = new PdfToImageConverter(inputStream))
            {
                Stream outputStream = imageConverter.Convert(0, false, false);

                //Rewind the stream position to the beginning before copying.
                outputStream.Position = 0;

                //Create file stream.
                using (FileStream outputFileStream = new FileStream(Path.GetFullPath(@"../../../Output/Output" + Guid.NewGuid().ToString() + ".jpeg"), FileMode.Create, FileAccess.ReadWrite))
                {
                    //Save the image to file stream.
                    outputStream.CopyTo(outputFileStream);
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
            tasks[i] = Task.Run(() => ConvertPdfToImage());
        }
        //Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    //Convert a PDF document to image using multi-threading.
    static void ConvertPdfToImage()
    {
        using (FileStream inputStream = new FileStream(@"../../../Data/Input.pdf", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PDF document.
            using (PdfToImageConverter imageConverter = new PdfToImageConverter(inputStream))
            {
                Stream outputStream = imageConverter.Convert(0, false, false);

                //Rewind the stream position to the beginning before copying.
                outputStream.Position = 0;

                //Create file stream.
                using (FileStream outputFileStream = new FileStream(Path.GetFullPath(@"../../../Output/Output" + Guid.NewGuid().ToString() + ".jpeg"), FileMode.Create, FileAccess.ReadWrite))
                {
                    //Save the image to file stream.
                    outputStream.CopyTo(outputFileStream);
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
            tasks(i) = Task.Run(Sub() ConvertPdfToImage())
        Next
        'Ensure all tasks complete by waiting on each task.
        Task.WhenAll(tasks).Wait()
    End Sub

    'Convert a PDF document to image using multi-threading.
    Private Sub ConvertPdfToImage()
        Using inputStream As FileStream = New FileStream("../../../Data/Input.pdf", FileMode.Open, FileAccess.Read)
            'Load an existing PDF document.
            Using imageConverter As PdfToImageConverter = New PdfToImageConverter(inputStream)
                Dim outputStream As Stream = imageConverter.Convert(0, False, False)
                'Rewind the stream position to the beginning before copying.
                outputStream.Position = 0
                'Create file stream.
                Using outputFileStream As FileStream = New FileStream(System.IO.Path.GetFullPath("../../../Output/Output" & Guid.NewGuid().ToString() & ".jpeg"), FileMode.Create, FileAccess.ReadWrite)
                    'Save the image to file stream.
                    outputStream.CopyTo(outputFileStream)
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/WPF-PDFViewer-Examples/tree/master/PDF-to-image/Multithreading-using-tasks-in-.NET/).

### Multithreading PDF document reading using parallel process

The following code example illustrates how to use a parallel for loop to process multiple tasks concurrently, opening PDF documents and saving image files using multithreading in C#.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
class MultiThreading
{
    static void Main(string[] args)
    {
        //Indicates the number of threads to be create.
        int limit = 50;
        Console.WriteLine("Parallel For Loop");
        Parallel.For(0, limit, count =>
        {
            Console.WriteLine("Task {0} started", count);
            //Create multiple PDF document, one document on each thread.
            ConvertPdfToImage(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }
    //Convert a PDF document to image using multi-threading.
    static void ConvertPdfToImage(int count)
    {
        using (FileStream inputStream = new FileStream(@"../../../Data/Input.pdf", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PDF document.
            using (PdfToImageConverter imageConverter = new PdfToImageConverter(inputStream))
            {
                Stream outputStream = imageConverter.Convert(0, false, false);

                //Rewind the stream position to the beginning before copying.
                outputStream.Position = 0;

                //Create file stream.
                using (FileStream outputFileStream = new FileStream("Output" + count + ".jpeg", FileMode.Create, FileAccess.Write))
                {
                    //Save the image to file stream.
                    outputStream.CopyTo(outputFileStream);
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
        int limit = 50;
        Console.WriteLine("Parallel For Loop");
        Parallel.For(0, limit, count =>
        {
            Console.WriteLine("Task {0} started", count);
            //Create multiple PDF document, one document on each thread.
            ConvertPdfToImage(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }
    //Convert a PDF document to image using multi-threading.
    static void ConvertPdfToImage(int count)
    {
        using (FileStream inputStream = new FileStream(@"../../../Data/Input.pdf", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PDF document.
            using (PdfToImageConverter imageConverter = new PdfToImageConverter(inputStream))
            {
                Stream outputStream = imageConverter.Convert(0, false, false);

                //Rewind the stream position to the beginning before copying.
                outputStream.Position = 0;

                //Create file stream.
                using (FileStream outputFileStream = new FileStream("Output" + count + ".jpeg", FileMode.Create, FileAccess.Write))
                {
                    //Save the image to file stream.
                    outputStream.CopyTo(outputFileStream);
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
                                   'Create multiple PDF document, one document on each thread.
                                   ConvertPdfToImage(count)
                                   Console.WriteLine("Task {0} is done", count)
                               End Sub)
    End Sub

    'Convert a PDF document to image using multi-threading.
    Private Shared Sub ConvertPdfToImage(ByVal count As Integer)
        Using inputStream As FileStream = New FileStream("../../../Data/Input.pdf", FileMode.Open, FileAccess.Read)
            'Load an existing PDF document.
            Using imageConverter As PdfToImageConverter = New PdfToImageConverter(inputStream)
                Dim outputStream As Stream = imageConverter.Convert(0, False, False)
                'Rewind the stream position to the beginning before copying.
                outputStream.Position = 0
                'Create file stream.
                Using outputFileStream As FileStream = New FileStream("Output" & count & ".jpeg", FileMode.Create, FileAccess.Write)
                    'Save the image to file stream.
                    outputStream.CopyTo(outputFileStream)
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/WPF-PDFViewer-Examples/tree/master/PDF-to-image/Multithreading-using-parallel-process-in-.NET/).