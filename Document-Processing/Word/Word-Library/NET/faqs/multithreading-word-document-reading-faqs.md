---
title: FAQ about multithreading in Word document | DocIO | Syncfusion&reg;
description: Learn about the FAQs on multithreading support for opening, editing, and saving Word documents using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Frequently asked questions about multithreading in Word document

The frequently asked questions regarding multithreading and thread-safety support in opening, editing, and saving Word documents are listed below.

## Does the Word library support multithreading and thread-safety?

Yes, the Syncfusion&reg; Word library is thread-safe, allowing you to create multiple instances of the [WordDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html) class to load the same file as multiple copies or different Word files and save them using multithreading in C#.

### Multithreaded Word document reading using tasks

The following code example illustrates how to use multithreading to open, edit, and save multiple copies of a Word document by creating multiple tasks in C#.

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
        using (FileStream inputStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                //Add text to the last paragraph.
                document.LastParagraph.AppendText("Product Overview");
                //Save the Word document in the desired format.
                using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() + ".docx", FileMode.Create, FileAccess.Write))
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
        using (FileStream inputStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                //Add text to the last paragraph.
                document.LastParagraph.AppendText("Product Overview");
                //Save the Word document in the desired format.
                using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() + ".docx", FileMode.Create, FileAccess.Write))
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
    'Indicates the number of threads to be create.
    Private Const TaskCount As Integer = 1000
    Public Sub Main()
        'Create an array of tasks based on the TaskCount.
        Dim tasks(TaskCount - 1) As Task
        For i As Integer = 0 To TaskCount - 1
            tasks(i) = Task.Run(Sub() OpenAndSaveWordDocument())
        Next
        'Ensure all tasks complete by waiting on each task.
        Task.WhenAll(tasks).Wait()
    End Sub

    'Open and save a Word document using multi-threading.
    Private Sub OpenAndSaveWordDocument()
        Using inputStream As New FileStream("Input.docx", FileMode.Open, FileAccess.Read, FileShare.Read)
            'Load an existing Word document.
            Using document As New WordDocument(inputStream, FormatType.Docx)
                'Add text to the last paragraph.
                document.LastParagraph.AppendText("Product Overview")
                'Save the Word document in the desired format.
                Using outputFileStream As New FileStream("Output" & Guid.NewGuid().ToString() & ".docx", FileMode.Create, FileAccess.Write)
                    document.Save(outputFileStream, FormatType.Docx)
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Read-and-Save-document/Multithreaded-using-tasks).

### Multithreaded Word document reading using parallel process

The following code example illustrates how to use a parallel for loop to process multiple tasks concurrently, opening, editing, and saving Word documents using multithreading in C#.

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
        using (FileStream inputStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                //Add text to the last paragraph.
                document.LastParagraph.AppendText("Product Overview");
                //Save the Word document in the desired format.
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
        using (FileStream inputStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing Word document.
            using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
            {
                //Add text to the last paragraph.
                document.LastParagraph.AppendText("Product Overview");
                //Save the Word document in the desired format.
                using (FileStream outputFileStream = new FileStream("Output" + count + ".docx", FileMode.Create, FileAccess.Write))
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
        'Indicates the number of threads to be created.
        Dim limit As Integer = 5
        Console.WriteLine("Parallel For Loop")
        'Parallel For Loop
        Parallel.For(0, limit, Sub(count)
                                   Console.WriteLine("Task {0} started", count)
                                   'Create multiple word document, one document on each thread.
                                   OpenAndSaveWordDocument(count)
                                   Console.WriteLine("Task {0} is done", count)
                               End Sub)
    End Sub

    'Open and save a Word document using multi-threading.
    Private Sub OpenAndSaveWordDocument(count As Integer)
        Using inputStream As New FileStream("Input.docx", FileMode.Open, FileAccess.Read, FileShare.Read)
            'Load an existing Word document.
            Using document As New WordDocument(inputStream, FormatType.Docx)
                'Add text to the last paragraph.
                document.LastParagraph.AppendText("Product Overview")
                'Save the Word document in the desired format.
                Using outputFileStream As New FileStream("Output" & count & ".docx", FileMode.Create, FileAccess.Write)
                    document.Save(outputFileStream, FormatType.Docx)
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Read-and-Save-document/Multithreaded-using-parallel-process).