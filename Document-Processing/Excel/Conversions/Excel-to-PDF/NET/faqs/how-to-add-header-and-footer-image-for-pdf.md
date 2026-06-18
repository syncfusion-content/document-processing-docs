---
title: How to add header and footer image for PDF? | Syncfusion
description: This page explains how to add header and footer images when converting an Excel document to PDF using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to add header and footer image for PDF?

When exporting an Excel file to PDF using XlsIO, you can include images in the header and footer. Insert the special code &G in the header or footer text to indicate where the image should appear.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize the Excel application object
    IApplication application = excelEngine.Excel;

    // Load the existing Excel document
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data\InputTemplate.xlsx"));

    // Load the header/footer image from file
    Image headerImage = Image.FromStream(File.OpenRead(Path.GetFullPath(@"Data\Syncfusion.png")));

    // Iterate through each worksheet in the workbook
    foreach (IWorksheet sheet in workbook.Worksheets)
    {
        // IMPORTANT: Add the image placeholder in the header/footer text
        // The &G code represents the graphic/image placeholder
        sheet.PageSetup.CenterHeader = "&G";
        sheet.PageSetup.CenterFooter = "&G";

        // Assign the Image object to the header and footer
        sheet.PageSetup.CenterHeaderImage = headerImage;
        sheet.PageSetup.CenterFooterImage = headerImage;
    }

    // Create an XlsIORenderer instance for Excel to PDF conversion
    XlsIORenderer renderer = new XlsIORenderer();

    // Configure the renderer settings
    XlsIORendererSettings rendererSettings = new XlsIORendererSettings();
    rendererSettings.HeaderFooterOption.ShowHeader = true;
    rendererSettings.HeaderFooterOption.ShowFooter = true;

    // Convert the Excel document to PDF with header and footer images
    using (PdfDocument tempDoc = renderer.ConvertToPDF(workbook, rendererSettings))
    {
        // Save the PDF document to disk
        tempDoc.Save(Path.GetFullPath(@"Output\ConvertedDocument.pdf"));
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize the Excel application object
    IApplication application = excelEngine.Excel;

    // Load the existing Excel document
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");

    // Load the header/footer image from file
    Image headerImage = Image.FromStream(File.OpenRead("Syncfusion.png"));

    // Iterate through each worksheet in the workbook
    foreach (IWorksheet sheet in workbook.Worksheets)
    {
        // IMPORTANT: Add the image placeholder in the header/footer text
        // The &G code represents the graphic/image placeholder
        sheet.PageSetup.CenterHeader = "&G";
        sheet.PageSetup.CenterFooter = "&G";

        // Assign the Image object to the header and footer
        sheet.PageSetup.CenterHeaderImage = headerImage;
        sheet.PageSetup.CenterFooterImage = headerImage;
    }

    // Create an XlsIORenderer instance for Excel to PDF conversion
    ExcelToPdfConverter renderer = new ExcelToPdfConverter(workbook);

    // Configure the renderer settings
    ExcelToPdfConverterSettings rendererSettings = new ExcelToPdfConverterSettings();
    rendererSettings.HeaderFooterOption.ShowHeader = true;
    rendererSettings.HeaderFooterOption.ShowFooter = true;

    // Convert the Excel document to PDF with header and footer images
    using (PdfDocument tempDoc = renderer.Convert(rendererSettings))
    {
        // Save the PDF document to disk
        tempDoc.Save("ConvertedDocument.pdf");
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Initialize the Excel application object
    Dim application As IApplication = excelEngine.Excel

    ' Load the existing Excel document
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    ' Load the header/footer image from file
    Dim headerImage As Image = Image.FromStream(File.OpenRead("Syncfusion.png"))

    ' Iterate through each worksheet in the workbook
    For Each sheet As IWorksheet In workbook.Worksheets
        ' IMPORTANT: Add the image placeholder in the header/footer text
        ' The &G code represents the graphic/image placeholder
        sheet.PageSetup.CenterHeader = "&G"
        sheet.PageSetup.CenterFooter = "&G"

        ' Assign the Image object to the header and footer
        sheet.PageSetup.CenterHeaderImage = headerImage
        sheet.PageSetup.CenterFooterImage = headerImage
    Next

    ' Create an XlsIORenderer instance for Excel to PDF conversion
    Dim renderer As New XlsIORenderer()

    ' Configure the renderer settings
    Dim rendererSettings As New XlsIORendererSettings()
    rendererSettings.HeaderFooterOption.ShowHeader = True
    rendererSettings.HeaderFooterOption.ShowFooter = True

    ' Convert the Excel document to PDF with header and footer images
    Using tempDoc As PdfDocument = renderer.ConvertToPDF(workbook, rendererSettings)
        ' Save the PDF document to disk
        tempDoc.Save("ConvertedDocument.pdf")
    End Using
End Using
{% endhighlight %}
{% endtabs %}


A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1031327-HeaderFooter/Excel%20to%20PDF/HeaderFooterInPDF/.NET/HeaderFooterInPDF">this GitHub page</a>.