---
title: Does XlsIO support multiline header footer? | Syncfusion
description: This page explains how to add the multiline header and footer using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# Does XlsIO support the multiline header footer?

You can enable multiline header and footer support by using XlsIO. The following code snippet illustrates this.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;

  //Open an Excel file
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];
  worksheet.Range["A1"].Text = "Multiline header and footer";
  // Access PageSetup
  IPageSetup pageSetup = worksheet.PageSetup;

  // Set multiline header
  pageSetup.LeftHeader = "Left Header Line 1\nLeft Header Line 2";
  pageSetup.CenterHeader = "Center Header Line 1\nCenter Header Line 2";
  pageSetup.RightHeader = "Right Header Line 1\nRight Header Line 2";

  // Set multiline footer
  pageSetup.LeftFooter = "Left Footer Line 1\nLeft Footer Line 2";
  pageSetup.CenterFooter = "Center Footer Line 1\nCenter Footer Line 2";
  pageSetup.RightFooter = "Right Footer Line 1\nRight Footer Line 2";

  //Save the excel file
  workbook.SaveAs("Output.xlsx");
  workbook.Close();
  excelEngine.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;

  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];
  worksheet.Range["A1"].Text = "Multiline header and footer";
  // Access PageSetup
  IPageSetup pageSetup = worksheet.PageSetup;

  // Set multiline header
  pageSetup.LeftHeader = "Left Header Line 1\nLeft Header Line 2";
  pageSetup.CenterHeader = "Center Header Line 1\nCenter Header Line 2";
  pageSetup.RightHeader = "Right Header Line 1\nRight Header Line 2";

  // Set multiline footer
  pageSetup.LeftFooter = "Left Footer Line 1\nLeft Footer Line 2";
  pageSetup.CenterFooter = "Center Footer Line 1\nCenter Footer Line 2";
  pageSetup.RightFooter = "Right Footer Line 1\nRight Footer Line 2";

  //Save the excel file
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
  worksheet.Range("A1").Text = "Multiline header and footer"

  ' Access PageSetup
  Dim pageSetup As IPageSetup = worksheet.PageSetup

  ' Set multiline header
  pageSetup.LeftHeader = "Left Header Line 1" & vbLf & "Left Header Line 2"
  pageSetup.CenterHeader = "Center Header Line 1" & vbLf & "Center Header Line 2"
  pageSetup.RightHeader = "Right Header Line 1" & vbLf & "Right Header Line 2"

  ' Set multiline footer
  pageSetup.LeftFooter = "Left Footer Line 1" & vbLf & "Left Footer Line 2"
  pageSetup.CenterFooter = "Center Footer Line 1" & vbLf & "Center Footer Line 2"
  pageSetup.RightFooter = "Right Footer Line 1" & vbLf & "Right Footer Line 2"

  ' Save the excel file
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}
