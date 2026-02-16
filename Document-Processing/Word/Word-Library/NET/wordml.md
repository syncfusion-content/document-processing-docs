---
title: Convert Word to WordML file and vice versa in C# | Syncfusion
description: Learn how to convert Word document to WordML file and vice versa  using the .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# WordML Conversions in Word Library

The Essential<sup>&reg;</sup> DocIO converts the Word document into WordML file and vice versa. 

## Convert Word to WordML

The following code example shows how to convert the Word document into WordML file.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/refs/heads/main/WordML-conversion/Convert-Word-to-WordML/.NET/Convert-Word-to-WordML/Program.cs" %}

//Loads an existing Word document into DocIO instance
using (FileStream fileStreamPath = new FileStream(Path.GetFullPath(@"Data/Template.docx"), FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
    {
        //Creates file stream
        using (FileStream outputFileStream = new FileStream(Path.GetFullPath(@"Output/Result.xml"), FileMode.Create, FileAccess.ReadWrite))
        {
            //Save the loaded document in WordML format to the output stream
            document.Save(outputFileStream, FormatType.WordML);
            //Closes the Word document
            document.Close();
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a template document
WordDocument document = new WordDocument("Template.docx");
//Saves the document as WordML file
document.Save("WordToWordML.xml", FormatType.WordML);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a template document
Dim document As New WordDocument("Template.docx")
'Saves the document as WordML file
document.Save("WordToWordML.xml", FormatType.WordML)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/WordML-conversion/Convert-Word-to-WordML/.NET).

## Convert WordML to Word

The following code example shows how to convert a WordML file into Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/refs/heads/main/WordML-conversion/Convert-WordML-to-Word/.NET/Convert-WordML-to-Word/Program.cs" %}

//Loads an existing WordML file into DocIO instance
using (FileStream fileStreamPath = new FileStream(Path.GetFullPath(@"Data/Input.xml"), FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    using (WordDocument document = new WordDocument(fileStreamPath, FormatType.WordML))
    {
        //Creates file stream
        using (FileStream outputFileStream = new FileStream(Path.GetFullPath(@"Output/Result.docx"), FileMode.Create, FileAccess.ReadWrite))
        {
            //Saves the Word document to file stream.
            document.Save(outputFileStream, FormatType.Docx);
            //Closes the Word document
            document.Close();
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a WordML file
WordDocument document = new WordDocument("Input.xml");
//Saves the document as Word document
document.Save("WordMLToWord.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a WordML file
Dim document As New WordDocument("Input.xml")
'Saves the document as Word document
document.Save("WordMLToWord.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/WordML-conversion/Convert-WordML-to-Word/.NET).
