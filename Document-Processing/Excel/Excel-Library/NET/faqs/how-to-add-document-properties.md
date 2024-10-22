---
title: How to add document properties | Syncfusion
description: This page shows how to add built-in and custom document properties using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to add document properties using XlsIO?

Document Properties are named values that provide metadata about a document, such as the date and time it was last saved, the user who last modified it, and other details. Document properties are classified into two types:

* **Built-In Document Properties** - These properties are predefined in the document, such as Title, Author, Last Save Date, and so on.
* **Custom Document Properties** - These are user-defined properties, which allow users to add any additional metadata to the document.

XlsIO supports both reading and writing Built-In and Custom document properties through the [IBuiltInDocumentProperties](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IBuiltInDocumentProperties.html) and [ICustomDocumentProperties](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ICustomDocumentProperties.html) interfaces, respectively.

The following code example illustrates how to add built-in and custom document properties to a workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);

    //Adding Built-In document properties to workbook
    IBuiltInDocumentProperties builtIn = workbook.BuiltInDocumentProperties;
    builtIn.Title = "Excel Document";
    builtIn.Author = "Essential XlsIO";
    builtIn.Comments = "Built-In Properties";
    builtIn.LastSaveDate = new DateTime(1950, 1, 2, 3, 4, 5, 6);
    builtIn.Manager = "Syncfusion Manager";
    builtIn.Company = "Syncfusion Inc.";
    builtIn.Keywords = "Syncfusion, XlsIO";


    //Adding Custom document properties to workbook
    ICustomDocumentProperties custom = workbook.CustomDocumentProperties;
    custom["Sheets_Count"].Value = workbook.Worksheets.Count;
    custom["Author"].Text = "Essential XlsIO";
    custom["Created"].DateTime = DateTime.Now;
    custom["IsSaved"].Boolean = true;

    //Saving the workbook as stream
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
    workbook.SaveAs(outputStream);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);

    //Adding Built-In document properties to workbook
    IBuiltInDocumentProperties builtIn = workbook.BuiltInDocumentProperties;
    builtIn.Title = "Excel Document";
    builtIn.Author = "Essential XlsIO";
    builtIn.Comments = "Built-In Properties";
    builtIn.LastSaveDate = new DateTime(1950, 1, 2, 3, 4, 5, 6);
    builtIn.Manager = "Syncfusion Manager";
    builtIn.Company = "Syncfusion Inc.";
    builtIn.Keywords = "Syncfusion, XlsIO";


    //Adding Custom document properties to workbook
    ICustomDocumentProperties custom = workbook.CustomDocumentProperties;
    custom["Sheets_Count"].Value = workbook.Worksheets.Count;
    custom["Author"].Text = "Essential XlsIO";
    custom["Created"].DateTime = DateTime.Now;
    custom["IsSaved"].Boolean = true;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)

    'Adding Built-In document properties to workbook
    Dim builtIn As IBuiltInDocumentProperties = workbook.BuiltInDocumentProperties
    builtIn.Title = "Excel Document"
    builtIn.Author = "Essential XlsIO"
    builtIn.Comments = "Built-In Properties"
    builtIn.LastSaveDate = New DateTime(1950, 1, 2, 3, 4, 5, 6)
    builtIn.Manager = "Syncfusion Manager"
    builtIn.Company = "Syncfusion Inc."
    builtIn.Keywords = "Syncfusion, XlsIO"

    'Adding Custom document properties to workbook
    Dim custom As ICustomDocumentProperties = workbook.CustomDocumentProperties
    custom("Sheets_Count").Value = workbook.Worksheets.Count
    custom("Author").Text = "Essential XlsIO"
    custom("Created").DateTime = DateTime.Now
    custom("IsSaved").Boolean = True

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}