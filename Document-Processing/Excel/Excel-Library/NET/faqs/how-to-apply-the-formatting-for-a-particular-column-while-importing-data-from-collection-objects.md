---
title: Apply formatting to a specific column when importing data | Syncfusion
description: Code example showing how to apply formatting to a specific column when importing data from collection objects using the Syncfusion .NET Excel library (XlsIO). 
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply formatting to a specific column while importing data?

To apply formatting to a specific column while importing data from collection objects, use the **DisplayFormatAttribute** in the class definition, as shown in the example below.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Import the data to worksheet
    IList<Customer> reports = GetSalesReports();
    worksheet.ImportData(reports, 2, 1, false);

    #region Save
    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/ImportCollectionObjects.xlsx"));
    #endregion
}

//Gets a list of sales reports
public static List<Customer> GetSalesReports()
{
    List<Customer> reports = new List<Customer>();
    reports.Add(new Customer("Andy Bernard", 45000, 58000));
    reports.Add(new Customer("Jim Halpert", 34000, 65000));
    reports.Add(new Customer("Karen Fillippelli", 75000, 64000));
    reports.Add(new Customer("Phyllis Lapin", 56500, 33600));
    reports.Add(new Customer("Stanley Hudson", 46500, 52000));
    return reports;
}

//Customer details
public class Customer
{
    [DisplayNameAttribute("Sales Person Name")]
    public string SalesPerson
    {
        get; set;
    }
    **[DisplayFormat(DataFormatString = "$#,###.00")]**
    public int SalesJanJun { get; set; }

    **[DisplayFormat(DataFormatString = "$#,###.00")]**
    public int SalesJulDec { get; set; }

    public Customer(string name, int janToJun, int julToDec)
    {
        SalesPerson = name;
        SalesJanJun = janToJun;
        SalesJulDec = julToDec;
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Import the data to worksheet
    IList<Customer> reports = GetSalesReports();
    worksheet.ImportData(reports, 2, 1, false);

    #region Save
    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/ImportCollectionObjects.xlsx"));
    #endregion
}

//Gets a list of sales reports
public static List<Customer> GetSalesReports()
{
    List<Customer> reports = new List<Customer>();
    reports.Add(new Customer("Andy Bernard", 45000, 58000));
    reports.Add(new Customer("Jim Halpert", 34000, 65000));
    reports.Add(new Customer("Karen Fillippelli", 75000, 64000));
    reports.Add(new Customer("Phyllis Lapin", 56500, 33600));
    reports.Add(new Customer("Stanley Hudson", 46500, 52000));
    return reports;
}

//Customer details
public class Customer
{
    [DisplayNameAttribute("Sales Person Name")]
    public string SalesPerson
    {
        get; set;
    }
    **[DisplayFormat(DataFormatString = "$#,###.00")]**
    public int SalesJanJun { get; set; }

    **[DisplayFormat(DataFormatString = "$#,###.00")]**
    public int SalesJulDec { get; set; }

    public Customer(string name, int janToJun, int julToDec)
    {
        SalesPerson = name;
        SalesJanJun = janToJun;
        SalesJulDec = julToDec;
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Import the data to worksheet
    Dim reports As IList(Of Customer) = GetSalesReports()
    worksheet.ImportData(reports, 2, 1, False)

    ' Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/ImportCollectionObjects.xlsx"))
End Using

' Gets a list of sales reports
Public Function GetSalesReports() As List(Of Customer)
    Dim reports As New List(Of Customer)()
    reports.Add(New Customer("Andy Bernard", 45000, 58000))
    reports.Add(New Customer("Jim Halpert", 34000, 65000))
    reports.Add(New Customer("Karen Fillippelli", 75000, 64000))
    reports.Add(New Customer("Phyllis Lapin", 56500, 33600))
    reports.Add(New Customer("Stanley Hudson", 46500, 52000))
    Return reports
End Function

' Customer details
Public Class Customer
    <DisplayName("Sales Person Name")>
    Public Property SalesPerson As String

    **<DisplayFormat(DataFormatString:="$#,###.00")>**
    Public Property SalesJanJun As Integer

    **<DisplayFormat(DataFormatString:="$#,###.00")>**
    Public Property SalesJulDec As Integer

    Public Sub New(name As String, janToJun As Integer, julToDec As Integer)
        SalesPerson = name
        SalesJanJun = janToJun
        SalesJulDec = julToDec
    End Sub
End Class
{% endhighlight %}
{% endtabs %}  

## See Also

* [Collection Objects to Excel](https://help.syncfusion.com/document-processing/excel/excel-library/net/import-export/import-to-excel#collection-objects-to-excel)
* [How to import data table with its data type using template markers?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-import-data-table-with-its-data-type-using-template-markers)
* [Working with Template Markers](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-template-markers)