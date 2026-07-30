---
title: FAQ about Sections | DocIO | Syncfusion
description: Learn about the frequently asked questions about sections in Word document in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Frequently asked questions about sections in Word document

The frequently asked questions about working with sections in Word documents using DocIO are listed below.

## How to remove headers and footers from the document?

The following code illustrates how to remove the header contents from the document.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads the template document
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(docStream, FormatType.Docx);
//Iterates through the sections
foreach (WSection section in document.Sections)
{
    HeaderFooter header;
    //Gets even header of current section
    header = section.HeadersFooters[HeaderFooterType.EvenHeader];
    //Removes even header
    header.ChildEntities.Clear();
    //Gets odd header of current section
    header = section.HeadersFooters[HeaderFooterType.OddHeader];
    //Removes odd header
    header.ChildEntities.Clear();
    //Gets first page header
    header = section.HeadersFooters[HeaderFooterType.FirstPageHeader];
    //Removes first page header
    header.ChildEntities.Clear();
}
//Saves and closes the document
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Iterates through the sections
foreach (WSection section in document.Sections)
{
    HeaderFooter header;
    //Gets even header of current section
    header = section.HeadersFooters[HeaderFooterType.EvenHeader];
    //Removes even header
    header.ChildEntities.Clear();
    //Gets odd header of current section
    header = section.HeadersFooters[HeaderFooterType.OddHeader];
    //Removes odd header
    header.ChildEntities.Clear();
    //Gets first page header
    header = section.HeadersFooters[HeaderFooterType.FirstPageHeader];
    //Removes first page header
    header.ChildEntities.Clear();
}
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Iterates through the sections
For Each section As WSection In document.Sections
    Dim header As HeaderFooter
    'Gets even header of current section
    header = section.HeadersFooters(HeaderFooterType.EvenHeader)
    'Removes even header
    header.ChildEntities.Clear()
    'Gets odd header of current section
    header = section.HeadersFooters(HeaderFooterType.OddHeader)
    'Removes odd header
    header.ChildEntities.Clear()
    'Gets first page header
    header = section.HeadersFooters(HeaderFooterType.FirstPageHeader)
    'Removes first page header
    header.ChildEntities.Clear()
Next
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %} 

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Sections/Remove-headers-in-Word-document).

The following code illustrates how to remove the footer contents from the document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads the template document
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(docStream, FormatType.Docx);            
//Iterates through the sections
foreach (WSection section in document.Sections)
{
    HeaderFooter footer;
    //Gets even footer of current section
    footer = section.HeadersFooters[HeaderFooterType.EvenFooter];
    //Removes even footer
    footer.ChildEntities.Clear();
    //Gets odd footer of current section
    footer = section.HeadersFooters[HeaderFooterType.OddFooter];
    //Removes odd footer
    footer.ChildEntities.Clear();
    //Gets first page footer
    footer = section.HeadersFooters[HeaderFooterType.FirstPageFooter];
    //Removes first page footer
    footer.ChildEntities.Clear();
}
//Saves and closes the document
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Iterates through the sections
foreach (WSection section in document.Sections)
{
    HeaderFooter footer;
    //Gets even footer of current section
    footer = section.HeadersFooters[HeaderFooterType.EvenFooter];
    //Removes even footer
    footer.ChildEntities.Clear();
    //Gets odd footer of current section
    footer = section.HeadersFooters[HeaderFooterType.OddFooter];
    //Removes odd footer
    footer.ChildEntities.Clear();
    //Gets first page footer
    footer = section.HeadersFooters[HeaderFooterType.FirstPageFooter];
    //Removes first page footer
    footer.ChildEntities.Clear();
}
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx")
'Iterates through the sections
For Each section As WSection In document.Sections
    Dim footer As HeaderFooter
    'Gets even footer of current section
    footer = section.HeadersFooters(HeaderFooterType.EvenFooter)
    'Removes even footer
    footer.ChildEntities.Clear()
    'Gets odd footer of current section
    footer = section.HeadersFooters(HeaderFooterType.OddFooter)
    'Removes odd footer
    footer.ChildEntities.Clear()
    'Gets first page footer
    footer = section.HeadersFooters(HeaderFooterType.FirstPageFooter)
    'Removes first page footer
    footer.ChildEntities.Clear()
Next
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Sections/Remove-footers-in-Word-document).
