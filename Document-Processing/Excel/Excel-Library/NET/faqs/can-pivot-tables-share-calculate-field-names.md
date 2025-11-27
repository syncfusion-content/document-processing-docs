---
title: Calculated field naming across PivotTables | Syncfusion
description: This page explains whether multiple PivotTables can use calculated fields with the same name in Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# Can PivotTables have the same name for multiple calculated fields?

In **Microsoft Excel**, calculated fields are scoped to the pivot cache, not to individual PivotTables. 

This means:

* **If multiple PivotTables share the same cache**
    * Calculated fields with the same name cannot be defined. Excel reuses the existing field from the cache, and its formula cannot be redefined independently.
    * Calculated fields with different names can be defined, and they will be available to all PivotTables that share that cache.

* **If PivotTables use separate caches (even if the source data is identical)**
    * Calculated fields with the same name or with different names can be defined. Each cache maintains its own calculated field collection, so there is no conflict.

**Syncfusion XlsIO** follows the same cache scoped behavior:
* With a shared cache, calculated field names must be unique.
* With separate caches, calculated field names can be identical or different.

The following examples illustrate calculated field naming across PivotTables in C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}                                          
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Pivot%20Tables%20Calculated%20Field%20Names/.NET/PivotTablesCalculatedFieldNames/PivotTablesCalculatedFieldNames/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(3);
    IWorksheet dataSheet = workbook.Worksheets[0];
    IWorksheet pivotSheet1 = workbook.Worksheets[1];
    IWorksheet pivotSheet2 = workbook.Worksheets[2];

    //Add sample data
    dataSheet.Range["A1"].Text = "Product";
    dataSheet.Range["B1"].Text = "Sales";
    dataSheet.Range["C1"].Text = "Cost";

    dataSheet.Range["A2"].Text = "Laptop";
    dataSheet.Range["B2"].Number = 5000;
    dataSheet.Range["C2"].Number = 3000;

    dataSheet.Range["A3"].Text = "Tablet";
    dataSheet.Range["B3"].Number = 3000;
    dataSheet.Range["C3"].Number = 2000;

    dataSheet.Range["A4"].Text = "Phone";
    dataSheet.Range["B4"].Number = 4000;
    dataSheet.Range["C4"].Number = 2500;

    //CASE 1: Shared pivot cache - calculated field names must be unique
    IPivotCache sharedCache = workbook.PivotCaches.Add(dataSheet["A1:C4"]);

    IPivotTable pivot1 = pivotSheet1.PivotTables.Add("Pivot1", pivotSheet1["A1"], sharedCache);
    pivot1.Fields[0].Axis = PivotAxisTypes.Row;
    pivot1.DataFields.Add(pivot1.Fields[1], "Total Sales", PivotSubtotalTypes.Sum);
    pivot1.CalculatedFields.Add("Profit", "Sales - Cost");

    IPivotTable pivot2 = pivotSheet1.PivotTables.Add("Pivot2", pivotSheet1["F1"], sharedCache);
    pivot2.Fields[0].Axis = PivotAxisTypes.Row;
    pivot2.DataFields.Add(pivot2.Fields[2], "Total Cost", PivotSubtotalTypes.Sum);
    pivot2.CalculatedFields.Add("Margin", "Sales - Cost");

    //CASE 2: Separate pivot caches - identical or different calculated field names are allowed
    IPivotTable pivot3 = pivotSheet2.PivotTables.Add("Pivot3", pivotSheet2["A1"],
    workbook.PivotCaches.Add(dataSheet["A1:C4"]));
    pivot3.Fields[0].Axis = PivotAxisTypes.Row;
    pivot3.DataFields.Add(pivot3.Fields[1], "Total Sales", PivotSubtotalTypes.Sum);
    pivot3.CalculatedFields.Add("Profit", "Sales - Cost");

    IPivotTable pivot4 = pivotSheet2.PivotTables.Add("Pivot4", pivotSheet2["F1"],
    workbook.PivotCaches.Add(dataSheet["A1:C4"]));
    pivot4.Fields[0].Axis = PivotAxisTypes.Row;
    pivot4.DataFields.Add(pivot4.Fields[2], "Total Cost", PivotSubtotalTypes.Sum);
    pivot4.CalculatedFields.Add("Profit", "Sales - Cost");

    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(3);
    IWorksheet dataSheet = workbook.Worksheets[0];
    IWorksheet pivotSheet1 = workbook.Worksheets[1];
    IWorksheet pivotSheet2 = workbook.Worksheets[2];

    //Add sample data
    dataSheet.Range["A1"].Text = "Product";
    dataSheet.Range["B1"].Text = "Sales";
    dataSheet.Range["C1"].Text = "Cost";

    dataSheet.Range["A2"].Text = "Laptop";
    dataSheet.Range["B2"].Number = 5000;
    dataSheet.Range["C2"].Number = 3000;

    dataSheet.Range["A3"].Text = "Tablet";
    dataSheet.Range["B3"].Number = 3000;
    dataSheet.Range["C3"].Number = 2000;

    dataSheet.Range["A4"].Text = "Phone";
    dataSheet.Range["B4"].Number = 4000;
    dataSheet.Range["C4"].Number = 2500;

    //CASE 1: Shared pivot cache - calculated field names must be unique
    IPivotCache sharedCache = workbook.PivotCaches.Add(dataSheet["A1:C4"]);

    IPivotTable pivot1 = pivotSheet1.PivotTables.Add("Pivot1", pivotSheet1["A1"], sharedCache);
    pivot1.Fields[0].Axis = PivotAxisTypes.Row;
    pivot1.DataFields.Add(pivot1.Fields[1], "Total Sales", PivotSubtotalTypes.Sum);
    pivot1.CalculatedFields.Add("Profit", "Sales - Cost");

    IPivotTable pivot2 = pivotSheet1.PivotTables.Add("Pivot2", pivotSheet1["F1"], sharedCache);
    pivot2.Fields[0].Axis = PivotAxisTypes.Row;
    pivot2.DataFields.Add(pivot2.Fields[2], "Total Cost", PivotSubtotalTypes.Sum);
    pivot2.CalculatedFields.Add("Margin", "Sales - Cost");

    //CASE 2: Separate pivot caches - identical or different calculated field names are allowed
    IPivotTable pivot3 = pivotSheet2.PivotTables.Add("Pivot3", pivotSheet2["A1"],
    workbook.PivotCaches.Add(dataSheet["A1:C4"]));
    pivot3.Fields[0].Axis = PivotAxisTypes.Row;
    pivot3.DataFields.Add(pivot3.Fields[1], "Total Sales", PivotSubtotalTypes.Sum);
    pivot3.CalculatedFields.Add("Profit", "Sales - Cost");

    IPivotTable pivot4 = pivotSheet2.PivotTables.Add("Pivot4", pivotSheet2["F1"],
    workbook.PivotCaches.Add(dataSheet["A1:C4"]));
    pivot4.Fields[0].Axis = PivotAxisTypes.Row;
    pivot4.DataFields.Add(pivot4.Fields[2], "Total Cost", PivotSubtotalTypes.Sum);
    pivot4.CalculatedFields.Add("Profit", "Sales - Cost");

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Create(3)
    Dim dataSheet As IWorksheet = workbook.Worksheets(0)
    Dim pivotSheet1 As IWorksheet = workbook.Worksheets(1)
    Dim pivotSheet2 As IWorksheet = workbook.Worksheets(2)

    ' Add sample data
    dataSheet.Range("A1").Text = "Product"
    dataSheet.Range("B1").Text = "Sales"
    dataSheet.Range("C1").Text = "Cost"

    dataSheet.Range("A2").Text = "Laptop"
    dataSheet.Range("B2").Number = 5000
    dataSheet.Range("C2").Number = 3000

    dataSheet.Range("A3").Text = "Tablet"
    dataSheet.Range("B3").Number = 3000
    dataSheet.Range("C3").Number = 2000

    dataSheet.Range("A4").Text = "Phone"
    dataSheet.Range("B4").Number = 4000
    dataSheet.Range("C4").Number = 2500

    'CASE 1: Shared pivot cache - calculated field names must be unique
    Dim sharedCache As IPivotCache = workbook.PivotCaches.Add(dataSheet.Range("A1:C4"))

    Dim pivot1 As IPivotTable = pivotSheet1.PivotTables.Add("Pivot1", pivotSheet1.Range("A1"), sharedCache)
    pivot1.Fields(0).Axis = PivotAxisTypes.Row
    pivot1.DataFields.Add(pivot1.Fields(1), "Total Sales", PivotSubtotalTypes.Sum)
    pivot1.CalculatedFields.Add("Profit", "Sales - Cost")

    Dim pivot2 As IPivotTable = pivotSheet1.PivotTables.Add("Pivot2", pivotSheet1.Range("F1"), sharedCache)
    pivot2.Fields(0).Axis = PivotAxisTypes.Row
    pivot2.DataFields.Add(pivot2.Fields(2), "Total Cost", PivotSubtotalTypes.Sum)
    pivot2.CalculatedFields.Add("Margin", "Sales - Cost")

    'CASE 2: Separate pivot caches - identical or different calculated field names are allowed
    Dim pivot3 As IPivotTable = pivotSheet2.PivotTables.Add("Pivot3", pivotSheet2.Range("A1"),
    workbook.PivotCaches.Add(dataSheet.Range("A1:C4")))
    pivot3.Fields(0).Axis = PivotAxisTypes.Row
    pivot3.DataFields.Add(pivot3.Fields(1), "Total Sales", PivotSubtotalTypes.Sum)
    pivot3.CalculatedFields.Add("Profit", "Sales - Cost")

    Dim pivot4 As IPivotTable = pivotSheet2.PivotTables.Add("Pivot4", pivotSheet2.Range("F1"),
    workbook.PivotCaches.Add(dataSheet.Range("A1:C4")))
    pivot4.Fields(0).Axis = PivotAxisTypes.Row
    pivot4.DataFields.Add(pivot4.Fields(2), "Total Cost", PivotSubtotalTypes.Sum)
    pivot4.CalculatedFields.Add("Profit", "Sales - Cost")

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to demonstrate calculated field naming across PivotTables using C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Pivot%20Tables%20Calculated%20Field%20Names/.NET/PivotTablesCalculatedFieldNames">this GitHub page</a>.  
