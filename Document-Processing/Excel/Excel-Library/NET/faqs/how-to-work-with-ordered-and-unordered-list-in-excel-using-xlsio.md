---
title: Ordered and unordered list in Excel using XlsIO | Syncfusion
description: This page explains how to create ordered and unordered lists in Excel cells using Syncfusion XlsIO's rich text formatting features.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to work with ordered and unordered list in Excel using XlsIO?

You can create ordered (numbered) and unordered (bulleted) lists in Excel cells using the `IRichTextString` interface in Syncfusion XlsIO. This allows you to format portions of cell text with different fonts. To create a list, enable `WrapText` on the cell and use Unicode bullet characters or numbers with the rich text formatting.

The following code example illustrates creating an unordered list with bullet points using rich text formatting.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Create a new workbook with one worksheet
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    // Target cell for the list
    IRange cell = worksheet.Range["B3"];
    IRichTextString richText = cell.RichText;

    // Add initial text
    richText.Text = "list:\n";

    // Create fonts for bullets and text
    IFont bulletFont = workbook.CreateFont();
    bulletFont.FontName = "Courier New";
    bulletFont.Size = 10;

    IFont textFont = workbook.CreateFont();
    textFont.FontName = "Segoe UI";
    textFont.Size = 10;

    // First bullet point
    richText.Text += "  • number1\n";
    richText.SetFont(7, 9, bulletFont);   // bullet character
    richText.SetFont(10, 16, textFont);   // text "number1"

    // Second bullet point
    richText.Text += "  • number2\n";
    richText.SetFont(18, 20, bulletFont); // bullet character
    richText.SetFont(21, 27, textFont);   // text "number2"

    // Third bullet point
    richText.Text += "  • number3";
    richText.SetFont(29, 31, bulletFont); // bullet character
    richText.SetFont(32, 38, textFont);   // text "number3"

    // Enable wrap text to display bullets on separate lines
    cell.CellStyle.WrapText = true;

    // Save the workbook in XLSX format
    workbook.SaveAs(Path.GetFullPath("Output/BulletedCell.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Instantiate the Excel application object
    IApplication application = excelEngine.Excel;

    // Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Create a new workbook with one worksheet
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    // Target cell for the list
    IRange cell = worksheet.Range["B3"];
    IRichTextString richText = cell.RichText;

    // Add initial text
    richText.Text = "list:\n";

    // Create fonts for bullets and text
    IFont bulletFont = workbook.CreateFont();
    bulletFont.FontName = "Courier New";
    bulletFont.Size = 10;

    IFont textFont = workbook.CreateFont();
    textFont.FontName = "Segoe UI";
    textFont.Size = 10;

    // First bullet point
    richText.Text += "  • number1\n";
    richText.SetFont(7, 9, bulletFont);   // bullet character
    richText.SetFont(10, 16, textFont);   // text "number1"

    // Second bullet point
    richText.Text += "  • number2\n";
    richText.SetFont(18, 20, bulletFont); // bullet character
    richText.SetFont(21, 27, textFont);   // text "number2"

    // Third bullet point
    richText.Text += "  • number3";
    richText.SetFont(29, 31, bulletFont); // bullet character
    richText.SetFont(32, 38, textFont);   // text "number3"

    // Enable wrap text to display bullets on separate lines
    cell.CellStyle.WrapText = true;

    // Save the workbook in XLSX format
    workbook.SaveAs("BulletedCell.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Instantiate the Excel application object
    Dim application As IApplication = excelEngine.Excel

    ' Assign default application version
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Create a new workbook with one worksheet
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Target cell for the list
    Dim cell As IRange = worksheet.Range("B3")
    Dim richText As IRichTextString = cell.RichText

    ' Add initial text
    richText.Text = "list:" & vbLf

    ' Create fonts for bullets and text
    Dim bulletFont As IFont = workbook.CreateFont()
    bulletFont.FontName = "Courier New"
    bulletFont.Size = 10

    Dim textFont As IFont = workbook.CreateFont()
    textFont.FontName = "Segoe UI"
    textFont.Size = 10

    ' First bullet point
    richText.Text += "  • number1" & vbLf
    richText.SetFont(7, 9, bulletFont)   ' bullet character
    richText.SetFont(10, 16, textFont)   ' text "number1"

    ' Second bullet point
    richText.Text += "  • number2" & vbLf
    richText.SetFont(18, 20, bulletFont) ' bullet character
    richText.SetFont(21, 27, textFont)   ' text "number2"

    ' Third bullet point
    richText.Text += "  • number3"
    richText.SetFont(29, 31, bulletFont) ' bullet character
    richText.SetFont(32, 38, textFont)   ' text "number3"

    ' Enable wrap text to display bullets on separate lines
    cell.CellStyle.WrapText = True

    ' Save the workbook in XLSX format
    workbook.SaveAs("BulletedCell.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1025694-ListXlsio/FAQ/Ordered_UnOrdered_List/.NET/Ordered_UnOrdered_List">this GitHub page</a>.
