---
title: Convert Excel to Markdown in C# | XlsIO | Syncfusion
description: Convert Excel to Markdown in C# using Syncfusion<sup>&reg;</sup> .NET Excel (XlsIO) library without Microsoft Excel or interop dependencies
platform: document-processing
control: XlsIO
documentation: UG
---

# Excel to Markdown Conversion

Markdown is a lightweight markup language that adds formatting elements to plain text documents. The .NET Excel (XlsIO) library supports the conversion of Excel to Markdown document and vice versa, which mostly follows the CommonMark specification and GitHub-flavored syntax.

## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms to convert an Excel document to Markdown using the .NET Excel Library (XlsIO).

* [Excel to Markdown conversion assemblies](https://help.syncfusion.com/document-processing/excel/excel-library/net/assemblies-required)
* [Excel to Markdown conversion NuGet packages](https://help.syncfusion.com/document-processing/excel/excel-library/net/nuget-packages-required)

## Convert Excel to Markdown document

Convert an existing Excel file to Markdown using the .NET Excel (XlsIO) library.

The following code example shows how to convert an Excel to Markdown file.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20to%20Markdown/Excel-to-Markdown/.NET/Excel-to-Markdown/Excel-to-Markdown/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open(@"Data/Markdown.xlsx");

    using (FileStream fileStream = new FileStream(@"Output/ExcelToMarkdown.md", FileMode.Create, FileAccess.Write))
    {
        workbook.SaveAs(fileStream, ExcelSaveType.Markdown);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open(@"Data/Markdown.xlsx");

    using (FileStream fileStream = new FileStream(@"Output/ExcelToMarkdown.md", FileMode.Create, FileAccess.Write))
    {
        workbook.SaveAs(fileStream, ExcelSaveType.Markdown);
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Open("Markdown.xlsx")

    Using fileStream As New FileStream("ExcelToMarkdown.md", FileMode.Create, FileAccess.Write)
        workbook.SaveAs(fileStream, ExcelSaveType.Markdown)
    End Using
End Using
{% endhighlight %}

{% endtabs %}   

You can download a complete working sample from <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20to%20Markdown/Excel-to-Markdown/.NET/Excel-to-Markdown">this GitHub page</a>.

## Customize image saving

### Export images to folder

Specify the folder location to export the images using the **MarkdownExportImagesFolder** API.

The following code example demonstrates how to set the images folder for exporting images while converting an Excel document to a Markdown file.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20to%20Markdown/Export_images_to_folder/.NET/Export_images_to_folder/Export_images_to_folder/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;

    IWorkbook workbook = application.Workbooks.Open(@"Data/Markdown.xlsx");

    MarkdownExportOptions exportOptions = new MarkdownExportOptions();
    exportOptions.SaveOptions.MarkdownExportImagesFolder = @"D:/Temp/Image1.png";

    using (FileStream fileStream = new FileStream(@"Output/ExcelToMarkdown.md", FileMode.Create, FileAccess.Write))
    {
        workbook.SaveAs(fileStream, exportOptions);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;

    IWorkbook workbook = application.Workbooks.Open(@"Data/Markdown.xlsx");

    MarkdownExportOptions exportOptions = new MarkdownExportOptions();
    exportOptions.SaveOptions.MarkdownExportImagesFolder = @"D:/Temp/Image1.png";

    using (FileStream fileStream = new FileStream(@"Output/ExcelToMarkdown.md", FileMode.Create, FileAccess.Write))
    {
        workbook.SaveAs(fileStream, exportOptions);
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    Dim workbook As IWorkbook = application.Workbooks.Open("Markdown.xlsx")

    Dim exportOptions As New MarkdownExportOptions()
    exportOptions.SaveOptions.MarkdownExportImagesFolder = "D:/Temp/Image1.png"

    Using fileStream As New FileStream("ExcelToMarkdown.md", FileMode.Create, FileAccess.Write)
        workbook.SaveAs(fileStream, exportOptions)
    End Using
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20to%20Markdown/Export_images_to_folder/.NET/Export_images_to_folder">this GitHub page</a>.

### Customize the image path

XlsIO provides an **ImageNodeVisited** event, which is used to customize the image path to set in the output Markdown file and save images externally while converting an Excel document to a Markdown.

The following code example illustrates how to save Image files during Excel to Markdown Conversion.

{% tabs %}  
 
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20to%20Markdown/Customize-image-path/.NET/Customize-image-path/Customize-image-path/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;

    IWorkbook workbook = application.Workbooks.Open(@"Data/Markdown.xlsx");

    MarkdownExportOptions exportOptions = new MarkdownExportOptions();
    exportOptions.SaveOptions.ImageNodeVisited += MdExportSettings_ImageNodeVisited;

    using (FileStream fileStream = new FileStream(@"ExcelToMarkdown.md", FileMode.Create, FileAccess.Write))
    {
        workbook.SaveAs(fileStream, exportOptions);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;

    IWorkbook workbook = application.Workbooks.Open(@"Data/Markdown.xlsx");

    MarkdownExportOptions exportOptions = new MarkdownExportOptions();
    exportOptions.SaveOptions.ImageNodeVisited += MdExportSettings_ImageNodeVisited;

    using (FileStream fileStream = new FileStream(@"ExcelToMarkdown.md", FileMode.Create, FileAccess.Write))
    {
        workbook.SaveAs(fileStream, exportOptions);
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel

    Dim workbook As IWorkbook = application.Workbooks.Open("Markdown.xlsx")

    ' Configure Markdown export options
    Dim exportOptions As New MarkdownExportOptions()
    AddHandler exportOptions.SaveOptions.ImageNodeVisited, AddressOf MdExportSettings_ImageNodeVisited

    ' Save as Markdown file
    Using fileStream As New FileStream("Output.md", FileMode.Create, FileAccess.Write)
        workbook.SaveAs(fileStream, exportOptions)
    End Using
End Using
{% endhighlight %}

{% endtabs %}

The following code examples show the event handler to customize the image path and save the image in an external folder.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
private static void MdExportSettings_ImageNodeVisited(object sender, SaveImageNodeVisitedEventArgs args)
{
    string imagepath = @"D:\Temp\Image1.png";
    //Save the image stream as a file. 
    using (FileStream fileStreamOutput = File.Create(imagepath))
        args.ImageStream.CopyTo(fileStreamOutput);
    //Set the image URI to be used in the output markdown.
    args.Uri = imagepath;
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private static void MdExportSettings_ImageNodeVisited(object sender, SaveImageNodeVisitedEventArgs args)
{
    string imagepath = @"D:\Temp\Image1.png";
    //Save the image stream as a file. 
    using (FileStream fileStreamOutput = File.Create(imagepath))
        args.ImageStream.CopyTo(fileStreamOutput);
    //Set the image URI to be used in the output markdown.
    args.Uri = imagepath;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub MdExportSettings_ImageNodeVisited(sender As Object, args As SaveImageNodeVisitedEventArgs)
    Dim imagePath As String = "D:\Temp\Image1.png"
    ' Save the image stream as a file
    Using fileStreamOutput As FileStream = File.Create(imagePath)
        args.ImageStream.CopyTo(fileStreamOutput)
    End Using
    ' Set the image URI to be used in the output markdown
    args.Uri = imagePath
End Sub
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20to%20Markdown/Customize-image-path/.NET/Customize-image-path">this GitHub page</a>.