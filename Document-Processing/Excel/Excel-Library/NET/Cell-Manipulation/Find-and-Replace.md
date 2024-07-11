---
title: Find and Replace | Excel library | Syncfusion
description: In this section, you can learn about how to find and replace in an Excel document using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Find and Replace

**Find**

XlsIO provides the following options to perform find using [ExcelFindType](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelFindType.html) in an Excel workbook or worksheet:

* Search for number
* Search for text
* Search for values
* Search for comments
* Search for formula

Additionally, you can search for case-sensitive data and match the entire cell contents using [ExcelFindOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelFindOptions.html). All occurrences of a text in an Excel worksheet can be found using the [FindAll](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_FindAll_System_Boolean_) method.

The following code example illustrates how to find all occurrences of text in a worksheet with different find options.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream fileStream = new FileStream(@"../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(fileStream);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Searches for the given string within the text of worksheet
    IRange[] result1 = worksheet.FindAll("Gill", ExcelFindType.Text);

    //Searches for the given string within the text of worksheet
    IRange[] result2 = worksheet.FindAll(700, ExcelFindType.Number);

    //Searches for the given string in formulas
    IRange[] result3 = worksheet.FindAll("=SUM(F10:F11)", ExcelFindType.Formula);

    //Searches for the given string in calculated value, number and text
    IRange[] result4 = worksheet.FindAll("41", ExcelFindType.Values);

    //Searches for the given string in comments
    IRange[] result5 = worksheet.FindAll("Desk", ExcelFindType.Comments);

    //Searches for the given string within the text of worksheet and case matched
    IRange[] result6 = worksheet.FindAll("Pen Set", ExcelFindType.Text, ExcelFindOptions.MatchCase);

    //Searches for the given string within the text of worksheet and the entire cell content matching to search text
    IRange[] result7 = worksheet.FindAll("5", ExcelFindType.Text, ExcelFindOptions.MatchEntireCellContent);

    //Saving the workbook as stream
    FileStream stream = new FileStream("Find.xlsx", FileMode.Create, FileAccess.ReadWrite);
    workbook.SaveAs(stream);
    stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Searches for the given string within the text of worksheet
  IRange[] result1 = worksheet.FindAll("Gill", ExcelFindType.Text);

  //Searches for the given string within the text of worksheet
  IRange[] result2 = worksheet.FindAll(700, ExcelFindType.Number);

  //Searches for the given string in formulas
  IRange[] result3 = worksheet.FindAll("=SUM(F10:F11)", ExcelFindType.Formula);

  //Searches for the given string in calculated value, number and text
  IRange[] result4 = worksheet.FindAll("41", ExcelFindType.Values);

  //Searches for the given string in comments
  IRange[] result5 = worksheet.FindAll("Desk", ExcelFindType.Comments);

  //Searches for the given string within the text of worksheet and case matched
  IRange[] result6 = worksheet.FindAll("Pen Set", ExcelFindType.Text, ExcelFindOptions.MatchCase);

  //Searches for the given string within the text of worksheet and the entire cell content matching to search text
  IRange[] result7 = worksheet.FindAll("5", ExcelFindType.Text, ExcelFindOptions.MatchEntireCellContent);

  //Saving the workbook
  workbook.SaveAs("Find.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Searches for the given string within the text of worksheet
    Dim result1 As IRange() = worksheet.FindAll("Gill", ExcelFindType.Text)

    'Searches for the given string within the text of worksheet
    Dim result2 As IRange() = worksheet.FindAll(700, ExcelFindType.Number)

    'Searches for the given string in formulas
    Dim result3 As IRange() = worksheet.FindAll("=SUM(F10:F11)", ExcelFindType.Formula)

    'Searches for the given string in calculated value, number and text
    Dim result4 As IRange() = worksheet.FindAll("41", ExcelFindType.Values)

    'Searches for the given string in comments
    Dim result5 As IRange() = worksheet.FindAll("Desk", ExcelFindType.Comments)

    'Searches for the given string within the text of worksheet and case matched
    Dim result6 As IRange() = worksheet.FindAll("Pen Set", ExcelFindType.Text, ExcelFindOptions.MatchCase)

    'Searches for the given string within the text of worksheet and the entire cell content matching to search text
    Dim result7 As IRange() = worksheet.FindAll("5", ExcelFindType.Text, ExcelFindOptions.MatchEntireCellContent)

    'Saving the workbook
    workbook.SaveAs("Find.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to find all occurrences of text in a worksheet with different find options in C# is present on [this GitHub page]().

**Replace** 

It is possible to replace a text with another text with the help of [Replace](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_Replace_System_String_System_String_) method which searches for text which should be changed. A string can be replaced, with the data of various data types and data sources, such as data table, data column and array.

To know more about replace overloads, please refer [Replace](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_Replace_System_String_System_Data_DataColumn_System_Boolean_) in the API documentation section.

The following code example illustrates how to replace all occurrences of given string with various data.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    FileStream fileStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(fileStream);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Replaces the given string with another string
    worksheet.Replace("Wilson", "William");

    //Replaces the given string with another string on match case
    worksheet.Replace("4.99", "4.90", ExcelFindOptions.MatchCase);

    //Replaces the given string with another string matching entire cell content to the search word
    worksheet.Replace("Pen Set", "Pen", ExcelFindOptions.MatchEntireCellContent);

    //Replaces the given string with DateTime value
    worksheet.Replace("DateValue",DateTime.Now);

    //Replaces the given string with Array
    worksheet.Replace("Central", new string[] { "Central", "East" }, true);

    //Saving the workbook as stream
    FileStream stream = new FileStream("Replace.xlsx", FileMode.Create, FileAccess.ReadWrite);
    workbook.Version = ExcelVersion.Xlsx;
    workbook.SaveAs(stream);
    stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Replaces the given string with another string
  worksheet.Replace("Wilson", "William");

  //Replaces the given string with another string on match case
  worksheet.Replace("4.99", "4.90", ExcelFindOptions.MatchCase);

  //Replaces the given string with another string matching entire cell content to the search word
  worksheet.Replace("Pen Set", "Pen", ExcelFindOptions.MatchEntireCellContent);

  //Replaces the given string with DateTime value
  worksheet.Replace("DateValue",DateTime.Now);

  //Replaces the given string with Array
  worksheet.Replace("Central", new string[] { "Central", "East" }, true);
  
  //Saving the workbook
  workbook.SaveAs("Replace.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Replaces the given string with another string
    worksheet.Replace("Wilson", "William")

    ' Replaces the given string with another string on match case
    worksheet.Replace("4.99", "4.90", ExcelFindOptions.MatchCase)

    ' Replaces the given string with another string matching entire cell content to the search word
    worksheet.Replace("Pen Set", "Pen", ExcelFindOptions.MatchEntireCellContent)

    ' Replaces the given string with DateTime value
    worksheet.Replace("DateValue", DateTime.Now)

    ' Replaces the given string with Array
    worksheet.Replace("Central", New String() {"Central", "East"}, True)

    ' Saving the workbook
    workbook.SaveAs("Replace.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to replace all occurrences of given string in a worksheet with different find options in C# is present on [this GitHub page]().