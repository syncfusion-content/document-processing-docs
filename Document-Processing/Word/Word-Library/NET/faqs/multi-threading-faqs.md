---
title: FAQ about Multi threading | DocIO | Syncfusion
description: Learn about the frequently asked questions about support of Multi threading in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Frequently asked questions about Word document 

The frequently asked questions about the support for multithreading and thread-safety in DocIO.

## Does DocIO library support multithreading and thread-safe?

### Multithreading using Task

Yes, the Syncfusion Word library is thread-safe, and you can create multiple instances of the WordDocument class to load the same file as multiple copies or different Word files using multithreading in C#.

The following code example illustrates how to create multiple instances of the Syncfusion Word library and perform multitasking.

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
            tasks[i] = Task.Run(() => OpenAndSaveWordDocument());
        }
        //Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    //Open and save a Word document using multi-threading.
    static void OpenAndSaveWordDocument()
    {
        using (FileStream inputStream = new FileStream("InputTemplate.docx", FileMode.Open, FileAccess.Read))
        {
            // Load the Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Save the Word document in the desired format.
                using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() +".docx", FileMode.Create, FileAccess.Write))
                {
                    document.Save(outputFileStream, FormatType.Docx);
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
            tasks[i] = Task.Run(() => OpenAndSaveWordDocument());
        }
        //Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    //Open and save a Word document using multi-threading.
    static void OpenAndSaveWordDocument()
    {
        using (FileStream inputStream = new FileStream("InputTemplate.docx", FileMode.Open, FileAccess.Read))
        {
            // Load the Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Save the Word document in the desired format.
                using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() +".docx", FileMode.Create, FileAccess.Write))
                {
                    document.Save(outputFileStream, FormatType.Docx);
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
            tasks(i) = Task.Run(Sub() OpenAndSaveWordDocument())
        Next
        ' Ensure all tasks complete by waiting on each task.
        Task.WhenAll(tasks).Wait()
    End Sub

    ' Open and save a Word document using multi-threading.
    Private Sub OpenAndSaveWordDocument()
        Dim inputTemplatePath As String = "InputTemplate.docx"

        ' Use a memory stream to load the input document for thread safety.
        Using inputStream As New FileStream(inputTemplatePath, FileMode.Open, FileAccess.Read, FileShare.Read)
            Dim memoryStream As New MemoryStream()
            inputStream.CopyTo(memoryStream)

            ' Reset the memory stream position to read from the beginning.
            memoryStream.Position = 0

            ' Load the Word document from the memory stream.
            Using document As New WordDocument(memoryStream, FormatType.Docx)
                ' Save the Word document in the desired format with a unique name.
                Dim outputFileName As String = "Output" & Guid.NewGuid().ToString() & ".docx"
                Using outputFileStream As New FileStream(outputFileName, FileMode.Create, FileAccess.Write)
                    document.Save(outputFileStream, FormatType.Docx)
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/FAQs/Multithreading-using-task).

### Multithreading using Parallel process

The following code example illustrates how to create multiple instances of the Syncfusion Word library using parallel processing with multithreading in C#.

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
            //Create multiple word document, one document on each thread.
            OpenAndSaveWordDocument(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }
    //Open and save a Word document using multi-threading.
    static void OpenAndSaveWordDocument(int count)
    {
        using (FileStream inputStream = new FileStream("InputTemplate.docx", FileMode.Open, FileAccess.Read))
        {
            // Load the Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Save the Word document in the desired format.
                using (FileStream outputFileStream = new FileStream("Output" +count +".docx", FileMode.Create, FileAccess.Write))
                {
                    document.Save(outputFileStream, FormatType.Docx);
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
            //Create multiple word document, one document on each thread.
            OpenAndSaveWordDocument(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }
    //Open and save a Word document using multi-threading.
    static void OpenAndSaveWordDocument(int count)
    {
        using (FileStream inputStream = new FileStream("InputTemplate.docx", FileMode.Open, FileAccess.Read))
        {
            // Load the Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                // Save the Word document in the desired format.
                using (FileStream outputFileStream = new FileStream("Output" +count +".docx", FileMode.Create, FileAccess.Write))
                {
                    document.Save(outputFileStream, FormatType.Docx);
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

        ' Parallel For Loop
        Parallel.For(0, limit, Sub(count)
                                   Console.WriteLine("Task {0} started", count)
                                   ' Create multiple word document, one document on each thread.
                                   OpenAndSaveWordDocument(count)
                                   Console.WriteLine("Task {0} is done", count)
                               End Sub)
    End Sub

    ' Open and save a Word document using multi-threading.
    Private Sub OpenAndSaveWordDocument(count As Integer)
        Using inputStream As New FileStream("InputTemplate.docx", FileMode.Open, FileAccess.Read)
            ' Load the Word document
            Using document As New WordDocument(inputStream, FormatType.Docx)
                ' Save the Word document in the desired format
                Using outputFileStream As New FileStream("Output" & count & ".docx", FileMode.Create, FileAccess.Write)
                    document.Save(outputFileStream, FormatType.Docx)
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/FAQs/Multithreading-using-parallel-process).