---
title: Convert text formatted date values to DateTime in Excel workbook | Syncfusion
description: Code example to convert text formatted date values to DateTime in Excel workbook using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to convert text formatted date values to DateTime in an Excel workbook?

The following code examples demonstrate converting text formatted date values to DateTime in Excel workbook using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/DateTime/.NET/TextToDateTimeConverter/TextToDateTimeConverter/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Open the input workbook
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));

    //Access the first worksheet
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the used range to iterate through populated cells
    IRange used = worksheet.UsedRange;

    //Set culture and parsing styles for interpreting text dates
    CultureInfo culture = new CultureInfo("en-IN");
    DateTimeStyles styles = DateTimeStyles.None;

    //Iterate through the used range and convert text formatted dates to DateTime
    for (int row = used.Row; row <= used.LastRow; row++)
    {
        for (int col = used.Column; col <= used.LastColumn; col++)
        {
            IRange cell = worksheet[row, col];
            DateTime date;

            //Log if the cell already contains a true DateTime
            if (cell.HasDateTime)
            {
                Console.WriteLine(cell.DateTime);
            }
            //Try parsing text using the specified culture and assign DateTime back to the cell
            else if (DateTime.TryParse(cell.Value, culture, styles, out date))
            {
                cell.DateTime = date;
            }
        }
    }

    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Open the input workbook
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));

    //Access the first worksheet
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the used range to iterate through populated cells
    IRange used = worksheet.UsedRange;

    //Set culture and parsing styles for interpreting text dates
    CultureInfo culture = new CultureInfo("en-IN");
    DateTimeStyles styles = DateTimeStyles.None;

    //Iterate through the used range and convert text formatted dates to DateTime
    for (int row = used.Row; row <= used.LastRow; row++)
    {
        for (int col = used.Column; col <= used.LastColumn; col++)
        {
            IRange cell = worksheet[row, col];
            DateTime date;

            //Log if the cell already contains a true DateTime
            if (cell.HasDateTime)
            {
                Console.WriteLine(cell.DateTime);
            }
            //Try parsing text using the specified culture and assign DateTime back to the cell
            else if (DateTime.TryParse(cell.Value, culture, styles, out date))
            {
                cell.DateTime = date;
            }
        }
    }

    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()

    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    'Open the input workbook
    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx")

    'Access the first worksheet
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Get the used range to iterate through populated cells
    Dim used As IRange = worksheet.UsedRange

    'Set culture and parsing styles for interpreting text dates
    Dim culture As New CultureInfo("en-IN")
    Dim styles As DateTimeStyles = DateTimeStyles.None

    'Iterate through the used range and convert text formatted dates to DateTime
    For row As Integer = used.Row To used.LastRow
        For col As Integer = used.Column To used.LastColumn

            Dim cell As IRange = worksheet(row, col)
            Dim parsedDate As DateTime

            'Log if the cell already contains a true DateTime
            If cell.HasDateTime Then
                Console.WriteLine(cell.DateTime)

                'Try parsing text using the specified culture and assign DateTime back to the cell
            ElseIf DateTime.TryParse(cell.Value, culture, styles, parsedDate) Then
                cell.DateTime = parsedDate
            End If

        Next
    Next

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")

End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/DateTime/.NET/TextToDateTimeConverter">this GitHub page</a>.