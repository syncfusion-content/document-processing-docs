---
title: Avoid Exceptions with Multiple XlsIO Template Markers | Syncfusion
description: This page helps to prevent ArgumentOutOfRangeException when applying multiple template markers in Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to avoid Exception when using multiple template markers in Excel?

When processing multiple template markers in an Excel workbook with Syncfusion XlsIO, an ArgumentOutOfRangeException may occur if a marker variable is not found during an ApplyMarkers call. To prevent this, use [UnknownVariableAction.Skip](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ITemplateMarkersProcessor.html#Syncfusion_XlsIO_ITemplateMarkersProcessor_ApplyMarkers_Syncfusion_XlsIO_UnknownVariableAction_) for all ITemplateMarkersProcessor.ApplyMarkers calls except the final one. This ensures that any missing variables are gracefully ignored.

The following code snippets illustrate how to use UnknownVariableAction.Skip when applying markers in C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Template%20Marker/.NET/TemplateMarker/TemplateMarker/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    IWorkbook workbook = application.Workbooks.Open("../../../Data/InputTemplate.xlsx");

    DataTable reports1 = new DataTable();
    reports1.Columns.Add("SalesPerson");
    reports1.Columns.Add("FromDate", typeof(DateTime));
    reports1.Columns.Add("ToDate", typeof(DateTime));
    reports1.Rows.Add("Andy Bernard", new DateTime(2014, 09, 08), new DateTime(2014, 09, 11));
    reports1.Rows.Add("Jim Halpert", new DateTime(2014, 09, 11), new DateTime(2014, 09, 15));

    //Create Template Marker Processor for Reports1
    ITemplateMarkersProcessor marker1 = workbook.CreateTemplateMarkersProcessor();
    //Add collection to marker variable
    marker1.AddVariable("Reports1", reports1, VariableTypeAction.None);
	
    //Process the markers in the template. Use UnknownVariableAction.Skip to ignore missing variables.
    marker1.ApplyMarkers(UnknownVariableAction.Skip);

    DataTable reports2 = new DataTable();
    reports2.Columns.Add("SalesPerson");
    reports2.Columns.Add("FromDate", typeof(DateTime));
    reports2.Columns.Add("ToDate", typeof(DateTime));
    reports2.Rows.Add("Karen Fillippelli", new DateTime(2014, 09, 15), new DateTime(2014, 09, 20));
    reports2.Rows.Add("Phyllis Lapin", new DateTime(2014, 09, 21), new DateTime(2014, 09, 25));
    reports2.Rows.Add("Stanley Hudson", new DateTime(2014, 09, 26), new DateTime(2014, 09, 30));

    //Create Template Marker Processor for Reports2
    ITemplateMarkersProcessor marker2 = workbook.CreateTemplateMarkersProcessor();
    //Add collection to marker variable
    marker2.AddVariable("Reports2", reports2, VariableTypeAction.None);
	
    //This is the final ApplyMarkers call, so MissingVariableAction.Throw is acceptable (default behavior).
    marker2.ApplyMarkers();

    //Saving the workbook
    workbook.Version = ExcelVersion.Xlsx;
    workbook.SaveAs(Path.GetFullPath("../../../Output/TemplateMarker.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    IWorkbook workbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx");

    DataTable reports1 = new DataTable();
    reports1.Columns.Add("SalesPerson");
    reports1.Columns.Add("FromDate", typeof(DateTime));
    reports1.Columns.Add("ToDate", typeof(DateTime));
    reports1.Rows.Add("Andy Bernard", new DateTime(2014, 09, 08), new DateTime(2014, 09, 11));
    reports1.Rows.Add("Jim Halpert", new DateTime(2014, 09, 11), new DateTime(2014, 09, 15));

    //Create Template Marker Processor for Reports1
    ITemplateMarkersProcessor marker1 = workbook.CreateTemplateMarkersProcessor();
    //Add collection to marker variable
    marker1.AddVariable("Reports1", reports1, VariableTypeAction.None);
	
    //Process the markers in the template. Use UnknownVariableAction.Skip to ignore missing variables.
    marker1.ApplyMarkers(UnknownVariableAction.Skip);

    DataTable reports2 = new DataTable();
    reports2.Columns.Add("SalesPerson");
    reports2.Columns.Add("FromDate", typeof(DateTime));
    reports2.Columns.Add("ToDate", typeof(DateTime));
    reports2.Rows.Add("Karen Fillippelli", new DateTime(2014, 09, 15), new DateTime(2014, 09, 20));
    reports2.Rows.Add("Phyllis Lapin", new DateTime(2014, 09, 21), new DateTime(2014, 09, 25));
    reports2.Rows.Add("Stanley Hudson", new DateTime(2014, 09, 26), new DateTime(2014, 09, 30));

    //Create Template Marker Processor for Reports2
    ITemplateMarkersProcessor marker2 = workbook.CreateTemplateMarkersProcessor();
    //Add collection to marker variable
    marker2.AddVariable("Reports2", reports2, VariableTypeAction.None);
	
    //This is the final ApplyMarkers call, so MissingVariableAction.Throw is acceptable (default behavior).
    marker2.ApplyMarkers();

    //Saving the workbook
    workbook.Version = ExcelVersion.Xlsx;
    workbook.SaveAs(Path.GetFullPath("../../Output/TemplateMarker.xlsx"));
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx")

    Dim reports1 As New DataTable()
    reports1.Columns.Add("SalesPerson")
    reports1.Columns.Add("FromDate", GetType(DateTime))
    reports1.Columns.Add("ToDate", GetType(DateTime))
    reports1.Rows.Add("Andy Bernard", New DateTime(2014, 9, 8), New DateTime(2014, 9, 11))
    reports1.Rows.Add("Jim Halpert", New DateTime(2014, 9, 11), New DateTime(2014, 9, 15))

    ' Create Template Marker Processor for Reports1
    Dim marker1 As ITemplateMarkersProcessor = workbook.CreateTemplateMarkersProcessor()
    ' Add collection to marker variable
    marker1.AddVariable("Reports1", reports1, VariableTypeAction.None)
	
    ' Process the markers in the template. Use UnknownVariableAction.Skip to ignore missing variables.
    marker1.ApplyMarkers(UnknownVariableAction.Skip)

    Dim reports2 As New DataTable()
    reports2.Columns.Add("SalesPerson")
    reports2.Columns.Add("FromDate", GetType(DateTime))
    reports2.Columns.Add("ToDate", GetType(DateTime))
    reports2.Rows.Add("Karen Fillippelli", New DateTime(2014, 9, 15), New DateTime(2014, 9, 20))
    reports2.Rows.Add("Phyllis Lapin", New DateTime(2014, 9, 21), New DateTime(2014, 9, 25))
    reports2.Rows.Add("Stanley Hudson", New DateTime(2014, 9, 26), New DateTime(2014, 9, 30))

    ' Create Template Marker Processor for Reports2
    Dim marker2 As ITemplateMarkersProcessor = workbook.CreateTemplateMarkersProcessor()
    ' Add collection to marker variable
    marker2.AddVariable("Reports2", reports2, VariableTypeAction.None)
	
    ' This is the final ApplyMarkers call, so MissingVariableAction.Throw is acceptable (default behavior).
    marker2.ApplyMarkers()

    ' Saving the workbook
    workbook.Version = ExcelVersion.Xlsx
    workbook.SaveAs("../../Output/TemplateMarker.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example that shows how to apply number formatting to an entire column in Excel using C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Template%20Marker/.NET/TemplateMarker">this GitHub page</a>.