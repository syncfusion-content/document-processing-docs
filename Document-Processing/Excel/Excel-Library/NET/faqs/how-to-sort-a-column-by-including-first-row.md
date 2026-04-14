---
title: Soritng using Syncfusion XLsIO | Syncfusion
description: This page tells how to sort a column by including first row using XLsIO in C# (Cross-platform and Windows-specific) and VB.NET.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to sort a column by including first row?

This following code samples demonstrate how to sort a column by including first row using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    #region Workbook initialization
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];
    #endregion

    #region Sort On Cell Values
    //Creates the data sorter
    IDataSort sorter = workbook.CreateDataSorter();

    //This includes the first column for sorting range
    sorter.HasHeader = false;

    //Range to sort
    sorter.SortRange = worksheet.Range["D1:D26"];

    //Adds a sort field: then by values in column D in descending order
    ISortField sortField = sorter.SortFields.Add(3, SortOn.Values, OrderBy.Descending);

    //Setting the algorithm to sort the values
    sorter.Algorithm = SortingAlgorithms.QuickSort;
    sorter.Sort();
    #endregion

    #region Save
    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
    #endregion

}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    #region Workbook initialization
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];
    #endregion

    #region Sort On Cell Values
    //Creates the data sorter
    IDataSort sorter = workbook.CreateDataSorter();

    //This includes the first column for sorting range
    sorter.HasHeader = false;

    //Range to sort
    sorter.SortRange = worksheet.Range["D1:D26"];

    //Adds a sort field: then by values in column D in descending order
    ISortField sortField = sorter.SortFields.Add(3, SortOn.Values, OrderBy.Descending);

    //Setting the algorithm to sort the values
    sorter.Algorithm = SortingAlgorithms.QuickSort;
    sorter.Sort();
    #endregion

    #region Save
    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Creates the data sorter
    Dim sorter As IDataSort = workbook.CreateDataSorter()

    'This includes the first column for sorting range
    sorter.HasHeader = False

    'Range to sort
    sorter.SortRange = worksheet.Range("D1:D26")

    'Adds a sort field: then by values in column D in descending order
    Dim sortField As ISortField = sorter.SortFields.Add(3, SortOn.Values, OrderBy.Descending)

    'Setting the algorithm to sort the values
    sorter.Algorithm = SortingAlgorithms.QuickSort
    sorter.Sort()
    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %} 

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1008504-SortColumn/FAQ/Sort%20With%20First%20Column/.NET/Sort%20With%20First%20Column">this GitHub page</a>.
