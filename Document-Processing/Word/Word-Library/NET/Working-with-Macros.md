---
title: Working with Macros in Word document | DocIO | Syncfusion
description: Learn how to load and save a macro enabled Word documents and remove macros from Word document using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Working with Macros in Word document

Macro is a way to automate the tasks that you perform repeatedly. It is a saved sequence of commands or keyboard strokes that can be recalled with a single command or keyboard stroke. 

The following link shows how to create a macro in the Word document.

[https://support.office.com/en-in/article/Create-or-run-a-macro-c6b99036-905c-49a6-818a-dfb98b7c3c9c](https://support.office.com/en-in/article/Create-or-run-a-macro-c6b99036-905c-49a6-818a-dfb98b7c3c9c#)

The following code illustrates how to load and save a macro enabled document.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Macros/Open-and-save-macro-enabled-document/.NET/Open-and-save-macro-enabled-document/Program.cs" %}
using (FileStream fileStream = new FileStream("Template.dotm", FileMode.Open, FileAccess.ReadWrite))
{
    //Opens the template document.
    using (WordDocument document = new WordDocument(fileStream, FormatType.Dotm))
    {
        //Creates file stream.
        using (MemoryStream stream = new MemoryStream();)
        {
            //Saves the Word document to stream.
            document.Save(stream, FormatType.Word2013Docm);
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the macro-enabled template
WordDocument document = new WordDocument("Template.dotm");
//Saves and closes the document
document.Save("Sample.docm", FormatType.Word2013Docm);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the macro-enabled template
Dim document As New WordDocument("Template.dotm")
'Saves and closes the document
document.Save("Sample.docm", FormatType.Word2013Docm)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Macros/Open-and-save-macro-enabled-document).

The following code example illustrates how to remove the macros present in the document by using [RemoveMacros](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_RemoveMacros) method.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Macros/Remove-macros-in-document/.NET/Remove-macros-in-document/Program.cs" %}
//Loads the document with macros
FileStream fileStreamPath = new FileStream("Template.docm", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Checks whether the document has macros and then removes them
if (document.HasMacros)
    document.RemoveMacros();
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
stream.Position = 0;
//Download Word document in the browser
return File(stream, "application/msword", "Sample.docx");
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the document with macros
WordDocument document = new WordDocument("Template.docm");
//Checks whether the document has macros and then removes them
if (document.HasMacros)
    document.RemoveMacros();
//Saves the document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the document with macros
Dim document As New WordDocument("Template.docm")
'Checks whether the document has macros and then removes them
If document.HasMacros Then
    document.RemoveMacros()
End If
'Saves the document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Macros/Remove-macros-in-document).

## Online Demo

* Explore how to preserve the macros in macro-enabled documents using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/macropreservation#/tailwind).
