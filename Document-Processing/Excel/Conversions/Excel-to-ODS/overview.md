---
title: About Syncfusion .NET Excel to ODS Conversion | Syncfusion
description: Learn about introduction of converting Excel workbooks to ODS documents using the Syncfusion .NET Excel Library and more details.
platform: document-processing
control: XlsIO
documentation: UG
---

# About Syncfusion .NET Excel to ODS Conversion

The OpenDocument Format (ODF) is an XML-based file format for spreadsheets, charts, presentations, and word-processing documents. The OpenDocument Spreadsheet format is the spreadsheet counterpart used by OpenOffice. XlsIO converts XLS and XLSX workbooks to ODS.

N> IMPORTANT: Before running the samples on this page, install the required NuGet package for your target platform and register your Syncfusion license key. For more information, see the [Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview).

## Export to ODS

The following code snippet creates an Excel file and exports it to ODS format.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Excel%20to%20ODS/Excel%20to%20ODS/.NET/Excel%20to%20ODS/Excel%20to%20ODS/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	worksheet.Range["A1"].Text = "Month";
	worksheet.Range["B1"].Text = "Sales";
	worksheet.Range["A5"].Text = "Total";
	worksheet.Range["A2"].Text = "January";
	worksheet.Range["A3"].Text = "February";

	worksheet.AutofitColumn(1);

	worksheet.Range["B2"].Number = 68878;
	worksheet.Range["B3"].Number = 71550;
	worksheet.Range["B5"].Formula = "SUM(B2:B4)";

	// Comments
	IComment comment = worksheet.Range["B5"].AddComment();
	comment.RichText.Text = "This cell has formula.";

	IRichTextString richText = comment.RichText;

	IFont blueFont = workbook.CreateFont();
	blueFont.Color = ExcelKnownColors.Blue;
	richText.SetFont(0, 13, blueFont);

	IFont redFont = workbook.CreateFont();
	redFont.Color = ExcelKnownColors.Red;
	richText.SetFont(14, 20, redFont);

	// Formatting
	IStyle style = workbook.Styles.Add("Style1");
	style.Color = Syncfusion.Drawing.Color.DarkBlue;
	style.Font.Color = ExcelKnownColors.WhiteCustom;

	worksheet.Range["A1:B1"].CellStyleName = "Style1";
	worksheet.Range["A5:B5"].CellStyleName = "Style1";

	// Save the workbook as ODS
	workbook.SaveAs("Output.ods");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  worksheet.Range["A1"].Text = "Month";
  worksheet.Range["B1"].Text = "Sales";
  worksheet.Range["A5"].Text = "Total";
  worksheet.Range["A2"].Text = "January";
  worksheet.Range["A3"].Text = "February";

  worksheet.AutofitColumn(1);

  worksheet.Range["B2"].Number = 68878;
  worksheet.Range["B3"].Number = 71550;
  worksheet.Range["B5"].Formula = "SUM(B2:B4)";

  // Comments
  IComment comment = worksheet.Range["B5"].AddComment();
  comment.RichText.Text = "This cell has formula.";

  IRichTextString richText = comment.RichText;

  IFont blueFont = workbook.CreateFont();
  blueFont.Color = ExcelKnownColors.Blue;
  richText.SetFont(0, 13, blueFont);

  IFont redFont = workbook.CreateFont();
  redFont.Color = ExcelKnownColors.Red;
  richText.SetFont(14, 20, redFont);

  // Formatting
  IStyle style = workbook.Styles.Add("Style1");
  style.Color = Color.DarkBlue;
  style.Font.Color = ExcelKnownColors.WhiteCustom;

  worksheet.Range["A1:B1"].CellStyleName = "Style1";
  worksheet.Range["A5:B5"].CellStyleName = "Style1";

  // Save the workbook as ODS
  workbook.SaveAs("Output.ods");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  worksheet.Range("A1").Text = "Month"
  worksheet.Range("B1").Text = "Sales"
  worksheet.Range("A5").Text = "Total"
  worksheet.Range("A2").Text = "January"
  worksheet.Range("A3").Text = "February"

  worksheet.AutofitColumn(1)

  worksheet.Range("B2").Number = 68878
  worksheet.Range("B3").Number = 71550
  worksheet.Range("B5").Formula = "SUM(B2:B4)"

  ' Comments
  Dim comment As IComment = worksheet.Range("B5").AddComment()
  comment.RichText.Text = "This cell has formula."

  Dim richText As IRichTextString = comment.RichText

  Dim blueFont As IFont = workbook.CreateFont()
  blueFont.Color = ExcelKnownColors.Blue
  richText.SetFont(0, 13, blueFont)

  Dim redFont As IFont = workbook.CreateFont()
  redFont.Color = ExcelKnownColors.Red
  richText.SetFont(14, 20, redFont)

  ' Formatting
  Dim style As IStyle = workbook.Styles.Add("Style1")
  style.Color = Color.DarkBlue
  style.Font.Color = ExcelKnownColors.WhiteCustom

  worksheet.Range("A1:B1").CellStyleName = "Style1"
  worksheet.Range("A5:B5").CellStyleName = "Style1"

  ' Save the workbook as ODS
  workbook.SaveAs("Output.ods")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to convert Excel to OpenDocument Spreadsheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Excel%20to%20ODS/Excel%20to%20ODS/.NET/Excel%20to%20ODS).

## Supported and unsupported elements in ODS conversion

The table below summarizes the workbook features XlsIO preserves when writing an `OpenDocument Spreadsheet` file.

| Category | Subcategory | Supported |
| -------- | ----------- | --------- |
| Formatting | Font settings | Yes |
| Formatting | Alignments | Yes (except indent) |
| Formatting | Number formatting | Yes (partial) |
| Formatting | Border settings | Yes |
| Formatting | Fill settings | Yes |
| Formatting | RGB colors | Yes |
| Formatting | Cell gradient | No |
| Formatting | Cell styles | Yes |
| Formatting | Themes | No |
| Formatting | Conditional formatting | Planned |
| Hyperlinks | – | Yes |
| Cell Comments | – | Yes |
| Print | Page setup | Yes |
| Print | Margin, Page size | Yes |
| Print | Page breaks | No |
| Print | Background image | No |
| Print | Print settings (Print area, Print titles, Page order) | No |
| Print | Header/Footer | Planned |
| Calculations | Formulas | Yes (partial) |
| Calculations | Table formulas | No |
| Calculations | Names | Yes (partial) |
| Group & Outline | – | Yes |
| Settings | Window settings | No |
| Settings | Sheet/Book settings | No |
| Protection | Sheet protection | No |
| Protection | Encryption | N/A |
| Hide/Unhide rows/cols | – | Yes |
| Copy/Move worksheet | – | Yes |
| Image | – | No |
| Data Validation | – | No |
| Tables | – | Planned |
| PivotTable | – | No |
| Charts | – | Planned |
| Drawing | – | Planned |
| OLE Objects | – | No |

## See also

* [Convert Excel to PDF](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/overview)
* [Convert Excel to image](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-image/overview)
* [Convert Excel to HTML](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-html/overview)
* [Convert Excel to CSV (or TSV)](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-csv/overview)
* [Syncfusion .NET Excel (XlsIO) — Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview)
