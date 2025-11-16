---
title: Get Worksheet Names | Excel library | Syncfusion
description: In this section, you can learn about how to get all worksheet names or visible worksheet names or hidden worksheet names in an Excel workbook using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to get the list of worksheet names in an Excel workbook?

You can get the list of worksheet names in an Excel workbook using Syncfusion XlsIO. This can include all worksheets or only visible worksheets or only hidden worksheets, based on your requirement.

## Get All Worksheet Names

The following code snippet demonstrates how to get all worksheet names from an Excel workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Worksheet%20Names/.NET/All%20Worksheet%20Names/All%20Worksheet%20Names/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));

    //Get the worksheets collection
    WorksheetsCollection worksheets = workbook.Worksheets as WorksheetsCollection;

    //Print all worksheet names
    foreach (IWorksheet worksheet in worksheets)
    {
        Console.WriteLine(worksheet.Name);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open("Input.xlsx");

    //Get the worksheets collection
    WorksheetsCollection worksheets = workbook.Worksheets as WorksheetsCollection;

    //Print all worksheet names
    foreach (IWorksheet worksheet in worksheets)
    {
        Console.WriteLine(worksheet.Name);
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim inputStream As New FileStream("Input.xlsx", FileMode.Open, FileAccess.Read)
    Dim workbook As IWorkbook = application.Workbooks.Open(inputStream)

    'Get the worksheets collection 
    Dim worksheets As WorksheetsCollection = TryCast(workbook.Worksheets, WorksheetsCollection)

    'Print all worksheet names
    For Each worksheet As IWorksheet In worksheets
        Console.WriteLine(worksheet.Name)
    Next
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to get all worksheet names in an Excel workbook using C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Worksheet%20Names/.NET/All%20Worksheet%20Names).

## Get Only Visible Worksheet Names

The following code snippet demonstrates how to get only visible worksheet names from an Excel workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Worksheet%20Names/.NET/Visible%20Worksheet%20Names/Visible%20Worksheet%20Names/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));

    //Get the worksheets collection
    WorksheetsCollection worksheets = workbook.Worksheets as WorksheetsCollection;

    //Print visible worksheet names
    foreach (IWorksheet worksheet in worksheets)
    {
        if (worksheet.Visibility == WorksheetVisibility.Visible)
            Console.WriteLine(worksheet.Name);
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open("Input.xlsx");

    //Get the worksheets collection
    WorksheetsCollection worksheets = workbook.Worksheets as WorksheetsCollection;

    //Print visible worksheet names
    foreach (IWorksheet worksheet in worksheets)
    {
        if (worksheet.Visibility == WorksheetVisibility.Visible)
    	    Console.WriteLine(worksheet.Name);
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim inputStream As New FileStream("Input.xlsx", FileMode.Open, FileAccess.Read)
    Dim workbook As IWorkbook = application.Workbooks.Open(inputStream)

    'Get the worksheets collection
    Dim worksheets As WorksheetsCollection = TryCast(workbook.Worksheets, WorksheetsCollection)

    'Print visible worksheet names
    For Each worksheet As IWorksheet In worksheets
        If worksheet.Visibility = WorksheetVisibility.Visible Then
            Console.WriteLine(worksheet.Name)
        End If
    Next
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to get visible worksheet names in an Excel workbook using C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Worksheet%20Names/.NET/Visible%20Worksheet%20Names).

## Get Only Hidden Worksheet Names

The following code snippet demonstrates how to get only hidden worksheet names from an Excel workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Worksheet%20Names/.NET/Hidden%20Worksheet%20Names/Hidden%20Worksheet%20Names/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    
    //Get the worksheets collection
    WorksheetsCollection worksheets = workbook.Worksheets as WorksheetsCollection;

    //Print hidden worksheet names
    foreach (IWorksheet worksheet in worksheets)
    {
        if (worksheet.Visibility == WorksheetVisibility.Hidden)
            Console.WriteLine(worksheet.Name);
    }
} 
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx");

    //Get the worksheets collection
    WorksheetsCollection worksheets = workbook.Worksheets as WorksheetsCollection;

    //Print hidden worksheet names
    foreach (IWorksheet worksheet in worksheets)
    {
        if (worksheet.Visibility == WorksheetVisibility.Hidden)
           	Console.WriteLine(worksheet.Name);	
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim inputStream As New FileStream("Input.xlsx", FileMode.Open, FileAccess.Read)
    Dim workbook As IWorkbook = application.Workbooks.Open(inputStream)

    'Get the worksheets collection
    Dim worksheets As WorksheetsCollection = TryCast(workbook.Worksheets, WorksheetsCollection)

    'Print hidden worksheet names
    For Each worksheet As IWorksheet In worksheets
        If worksheet.Visibility = WorksheetVisibility.Hidden Then
            Console.WriteLine(worksheet.Name)
        End If
    Next
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to get hidden worksheet names in an Excel workbook using C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Worksheet%20Names/.NET/Hidden%20Worksheet%20Names).
