---
title: Convert Markdown to Excel in C# | XlsIO | Syncfusion
description: Convert Markdown to Excel in C# using Syncfusion<sup>&reg;</sup> .NET Excel (XlsIO) library without Microsoft Excel or interop dependencies
platform: document-processing
control: XlsIO
documentation: UG
---

# Markdown to Excel Conversion

Markdown is a lightweight markup language that adds formatting elements to plain text documents. The .NET Excel (XlsIO) library supports the conversion of Markdown to an Excel document and vice versa, which mostly follows the CommonMark specification and GitHub-flavored syntax.

## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms to convert a Markdown file to an Excel document using the .NET Excel Library (XlsIO).

* [Markdown to Excel conversion assemblies](https://help.syncfusion.com/document-processing/excel/excel-library/net/assemblies-required)
* [Markdown to Excel conversion NuGet packages](https://help.syncfusion.com/document-processing/excel/excel-library/net/nuget-packages-required)

## Convert Markdown to Excel document

Convert an existing Markdown file to an Excel document using the .NET Excel (XlsIO) library.

The following code example shows how to convert Markdown to an Excel document.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Markdown%20to%20Excel/Markdown-to-Excel/.NET/Markdown-to-Excel/Markdown-to-Excel/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open(@"Data/Sample.md", ExcelOpenType.Markdown);

    workbook.SaveAs(Path.GetFullPath("Output/MarkdownToExcel.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open(@"Data/Sample.md", ExcelOpenType.Markdown);

    workbook.SaveAs(Path.GetFullPath("Output/MarkdownToExcel.xlsx"));
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Open("Sample.md", ExcelOpenType.Markdown)

    workbook.SaveAs("MarkdownToExcel.xlsx")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Markdown%20to%20Excel/Markdown-to-Excel/.NET/Markdown-to-Excel">this GitHub page</a>.

## Customize image data

The .NET Excel (XlsIO) library provides an **ImageNodeVisited** event, which allows you to customize image data while importing a Markdown file. Implement the logic to customize the image data by using this **ImageNodeVisited** event.

The following code example shows how to load image data based on the image source path when importing a Markdown file.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Markdown%20to%20Excel/Customize-Image/.NET/Customize-Image/Customize-Image/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    MdImportSettings settings = new MdImportSettings();

    settings.ImageNodeVisited += MdImportSettings_ImageNodeVisited;

    IWorkbook workbook = application.Workbooks.Open(@"Data/Sample1.md", settings);

    workbook.SaveAs(Path.GetFullPath("Output/MarkdownToExcel.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    MdImportSettings settings = new MdImportSettings();

    settings.ImageNodeVisited += MdImportSettings_ImageNodeVisited;

    IWorkbook workbook = application.Workbooks.Open(@"Data/Sample1.md", settings);

    workbook.SaveAs(Path.GetFullPath("Output/MarkdownToExcel.xlsx"));
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim settings As New MdImportSettings()
    AddHandler settings.ImageNodeVisited, AddressOf MdImportSettings_ImageNodeVisited

    Dim workbook As IWorkbook = application.Workbooks.Open("Sample1.md", settings)

    workbook.SaveAs("MarkdownToExcel.xlsx")
End Using
{% endhighlight %}

{% endtabs %}

The following code examples show the event handler to customize the image based on the source path.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
private static void MdImportSettings_ImageNodeVisited(object sender, MdImageNodeVisitedEventArgs args)
{
    //Set the image stream based on the image name from the input Markdown.
    if (args.Uri == "Image_1.png")
        args.ImageStream = new FileStream(Path.GetFullPath("Data/Image_1.png"), FileMode.Open);
    else if (args.Uri == "Image_2.png")
        args.ImageStream = new FileStream(Path.GetFullPath("Data/Image_2.png"), FileMode.Open);
    //Retrieve the image from the website and use it.
    else if (args.Uri.StartsWith("https://"))
    {
        WebClient client = new WebClient();
        byte[] image = client.DownloadData(args.Uri);
        Stream stream = new MemoryStream(image);
        args.ImageStream = stream;
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private static void MdImportSettings_ImageNodeVisited(object sender, MdImageNodeVisitedEventArgs args)
{
    //Set the image stream based on the image name from the input Markdown.
    if (args.Uri == "Image_1.png")
        args.ImageStream = new FileStream(Path.GetFullPath("Data/Image_1.png"), FileMode.Open);
    else if (args.Uri == "Image_2.png")
        args.ImageStream = new FileStream(Path.GetFullPath("Data/Image_2.png"), FileMode.Open);
    //Retrieve the image from the website and use it.
    else if (args.Uri.StartsWith("https://"))
    {
        WebClient client = new WebClient();
        byte[] image = client.DownloadData(args.Uri);
        Stream stream = new MemoryStream(image);
        args.ImageStream = stream;
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub MdImportSettings_ImageNodeVisited(sender As Object, args As MdImageNodeVisitedEventArgs)
    ' Set the image stream based on the image name from the input Markdown.
    If args.Uri = "Image_1.png" Then
        args.ImageStream = New FileStream(Path.GetFullPath("Data/Image_1.png"), FileMode.Open)
    ElseIf args.Uri = "Image_2.png" Then
        args.ImageStream = New FileStream(Path.GetFullPath("Data/Image_2.png"), FileMode.Open)
    ElseIf args.Uri.StartsWith("https://") Then
        Dim client As New WebClient()
        Dim imageBytes As Byte() = client.DownloadData(args.Uri)
        Dim stream As New MemoryStream(imageBytes)
        args.ImageStream = stream
    End If
End Sub
{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Markdown%20to%20Excel/Customize-Image/.NET/Customize-Image">this GitHub page</a>.

N> Hook the event handler before opening the Markdown document as per the above code example.

## Markdown file opening options

### Using MarkdownDocument object
The following code examples shows the open method takes parameter as `MarkdownDocument` by providing file stream.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
FileStream fileStream = new FileStream(@"Data/ExcelToMarkdown.md", FileMode.Open, FileAccess.Write);
MarkdownDocument markdownDocument = new MarkdownDocument(fileStream);

IWorkbook workbook = application.Workbooks.Open(markdownDocument);
{% endhighlight %}


{% highlight c# tabtitle="C# [Windows-specific]" %}
FileStream fileStream = new FileStream(@"Data/ExcelToMarkdown.md", FileMode.Open, FileAccess.Write);
MarkdownDocument markdownDocument = new MarkdownDocument(fileStream);

IWorkbook workbook = application.Workbooks.Open(markdownDocument);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim fileStream As New FileStream("Data/ExcelToMarkdown.md", FileMode.Open, FileAccess.Write)
Dim markdownDocument As New MarkdownDocument(fileStream)

Dim workbook As IWorkbook = application.Workbooks.Open(markdownDocument)
{% endhighlight %}
{% endtabs %}

The following code examples shows the open method takes parameter as `MarkdownDocument` by providing file path directly.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
MarkdownDocument markdownDocument = new MarkdownDocument(@"Data/ExcelToMarkdown.md");

IWorkbook workbook = application.Workbooks.Open(markdownDocument);
{% endhighlight %}


{% highlight c# tabtitle="C# [Windows-specific]" %}
MarkdownDocument markdownDocument = new MarkdownDocument("Data/ExcelToMarkdown.md");

IWorkbook workbook = application.Workbooks.Open(markdownDocument);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim markdownDocument As New MarkdownDocument("Data/ExcelToMarkdown.md")

Dim workbook As IWorkbook = application.Workbooks.Open(markdownDocument)
{% endhighlight %}
{% endtabs %}