---
title: FAQ about multithreading with the PowerPoint library | Syncfusion
description: Learn about the FAQs on multithreading support for opening, editing, and saving PowerPoint presentations using the .NET PowerPoint (Presentation) library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# FAQ about multithreading in the PowerPoint library

The frequently asked questions regarding multithreading and thread-safety support in opening, editing, and saving PowerPoint presentations using the Syncfusion [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) are listed below.

## Does the PowerPoint library support multithreading and thread-safety?

Yes, the [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) is thread-safe. You can create multiple instances of the [Presentation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.html) class on different threads to load the same or different PowerPoint files and save them concurrently using multithreading in C# and VB.NET. Thread-safety applies per instance — each `Presentation` instance should be used by a single thread; do not share one instance across threads.

### Multithreading PowerPoint open-edit-save using tasks

The following code example illustrates how to use multithreading to open, edit, and save multiple copies of a PowerPoint presentation by creating multiple tasks in C# and VB.NET.


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
            tasks[i] = Task.Run(() => OpenAndSavePresentation());
        }
        //Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    //Open and save a Powerpoint presentation using multi-threading.
    static void OpenAndSavePresentation()
    {
        using (FileStream inputStream = new FileStream("Input.pptx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PowerPoint presentation.
            using (IPresentation presentation = Presentation.Open(inputStream))
            {
                //Add a slide of TitleAndContent type.
                ISlide slide = presentation.Slides.Add(SlideLayoutType.TitleAndContent);
                //Save the presentation in the desired format.
                using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() + ".pptx", FileMode.Create, FileAccess.Write))
                {
                    presentation.Save(outputFileStream);
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
            tasks[i] = Task.Run(() => OpenAndSavePresentation());
        }
        //Ensure all tasks complete by waiting on each task.
        await Task.WhenAll(tasks);
    }

    //Open and save a Powerpoint presentation using multi-threading.
    static void OpenAndSavePresentation()
    {
        using (FileStream inputStream = new FileStream("Input.pptx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PowerPoint presentation.
            using (IPresentation presentation = Presentation.Open(inputStream))
            {
                //Add a slide of TitleAndContent type.
                ISlide slide = presentation.Slides.Add(SlideLayoutType.TitleAndContent);
                //Save the presentation in the desired format.
                using (FileStream outputFileStream = new FileStream("Output" + Guid.NewGuid().ToString() + ".pptx", FileMode.Create, FileAccess.Write))
                {
                    presentation.Save(outputFileStream);
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
        ' Create an array of tasks based on the TaskCount.
        Dim tasks(TaskCount - 1) As Task
        For i As Integer = 0 To TaskCount - 1
            tasks(i) = Task.Run(Sub() OpenAndSavePresentation())
        Next
        ' Ensure all tasks complete by waiting on each task.
        Task.WhenAll(tasks).Wait()
    End Sub

    'Open and save a PowerPoint presentation using multi-threading.
    Private Sub OpenAndSavePresentation()
        Using inputStream As New FileStream("Input.pptx", FileMode.Open, FileAccess.Read)
            'Load an existing PowerPoint presentation.
            Using presentation As IPresentation = Presentation.Open(inputStream)
                'Add a slide of TitleAndContent type
                Dim slide As ISlide = presentation.Slides.Add(SlideLayoutType.TitleAndContent)
                'Save the presentation in the desired format.
                Using outputFileStream As New FileStream("Output" & Guid.NewGuid().ToString() & ".pptx", FileMode.Create, FileAccess.Write)
                    presentation.Save(outputFileStream)
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Multithreading-using-tasks).

### Multithreading PowerPoint open-edit-save using a parallel for loop

The following code example illustrates how to use a parallel for loop to process multiple iterations concurrently, opening, editing, and saving PowerPoint presentations using multithreading in C# and VB.NET.

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
            OpenAndSavePresentation(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }

    //Open and save a Powerpoint presentation using multi-threading.
    static void OpenAndSavePresentation(int count)
    {
        using (FileStream inputStream = new FileStream("Input.pptx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PowerPoint presentation.
            using (IPresentation presentation = Presentation.Open(inputStream))
            {
                //Add a slide of TitleAndContent type.
                ISlide slide = presentation.Slides.Add(SlideLayoutType.TitleAndContent);
                //Save the presentation in the desired format.
                using (FileStream outputFileStream = new FileStream("Output" + count + ".pptx" , FileMode.Create, FileAccess.Write))
                {
                    presentation.Save(outputFileStream);
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
            OpenAndSavePresentation(count);
            Console.WriteLine("Task {0} is done", count);
        });
    }

    //Open and save a Powerpoint presentation using multi-threading.
    static void OpenAndSavePresentation(int count)
    {
        using (FileStream inputStream = new FileStream("Input.pptx", FileMode.Open, FileAccess.Read))
        {
            //Load an existing PowerPoint presentation.
            using (IPresentation presentation = Presentation.Open(inputStream))
            {
                //Add a slide of TitleAndContent type.
                ISlide slide = presentation.Slides.Add(SlideLayoutType.TitleAndContent);
                //Save the presentation in the desired format.
                using (FileStream outputFileStream = new FileStream("Output" + count + ".pptx" , FileMode.Create, FileAccess.Write))
                {
                    presentation.Save(outputFileStream);
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
                                   ' Create multiple presentations, one PPT on each thread.
                                   OpenAndSavePresentation(count)
                                   Console.WriteLine("Task {0} is done", count)
                               End Sub)
    End Sub

    'Open and save a PowerPoint presentation using multi-threading.
    Private Sub OpenAndSavePresentation(count As Integer)
        Using inputStream As New FileStream("Input.pptx", FileMode.Open, FileAccess.Read)
            'Load an existing PowerPoint presentation.
            Using presentation As IPresentation = Presentation.Open(inputStream)
                'Add a slide of TitleAndContent type
                Dim slide As ISlide = presentation.Slides.Add(SlideLayoutType.TitleAndContent)
                'Save the presentation in the desired format.
                Using outputFileStream As New FileStream("Output" & count & ".pptx", FileMode.Create, FileAccess.Write)
                    presentation.Save(outputFileStream)
                End Using
            End Using
        End Using
    End Sub
End Module
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Multithreading-using-parallel-process).

## See also

- [Loading and saving the presentation](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/loading-and-saving-the-presentation)
- [Open and save a PowerPoint presentation in a console application](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/open-and-save-powerpoint-in-console-application)
- [Syncfusion Presentation API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.html)