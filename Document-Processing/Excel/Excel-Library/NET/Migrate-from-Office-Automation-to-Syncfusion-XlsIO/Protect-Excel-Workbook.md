---
title: Protect Excel Workbook | Syncfusion
description: Explains with an example on how to protect Excel workbook with password programmatically, using Interop and XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Protect Excel Workbook

Workbooks are protected by their structure and window.

* Workbook structure prevents moving, deleting, hiding, unhiding, renaming, and inserting worksheets.
* Protecting the window retains the size and position of the workbook whenever it is opened.

The following code shows how to protect an Excel workbook with a password using Interop and XlsIO for .NET.

## Interop

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
private void ProtectWorkbook()
{
  //Instantiate the application object
  var excelApp = new Microsoft.Office.Interop.Excel.Application();

  //Add a workbook
  Workbook workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value);

  //Protect the workbook with a password and Boolean flags for structure and window protection
  workbook.Protect("syncfusion", true, true);

  //Save the file
  workbook.SaveAs("InteropOutput_ProtectedWorkbook.xlsx");

  //Quit the application
  excelApp.Quit();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void ProtectWorkbook()
{
  //Instantiate the application object
  var excelApp = new Microsoft.Office.Interop.Excel.Application();

  //Add a workbook
  Workbook workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value);

  //Protect the workbook with a password and Boolean flags for structure and window protection
  workbook.Protect("syncfusion", true, true);

  //Save the file
  workbook.SaveAs("InteropOutput_ProtectedWorkbook.xlsx");

  //Quit the application
  excelApp.Quit();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub ProtectWorkbook()
  'Instantiate the application object
  Dim excelApp = New Microsoft.Office.Interop.Excel.Application()

  'Add a workbook
  Dim workbook As Workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value)

  'Protect the workbook specifying a password with Boolean attributes for structure and windows protection
  workbook.Protect("007", True, True)

  'Save the file
  workbook.SaveCopyAs("InteropOutput_ProtectedWorkbook.xlsx")

  'Quit the application
  excelApp.Quit()
End Sub
{% endhighlight %}
{% endtabs %}

## XlsIO

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
private void ProtectWorkbook()
{
  using (ExcelEngine excelEngine = new ExcelEngine())
  {
    //Instantiate the application object
    IApplication application = excelEngine.Excel;

    //Create a workbook
    IWorkbook workbook = application.Workbooks.Create(1);

    //Protect the workbook with a password and Boolean flags for structure and window protection
    bool isProtectWindow = true;
    bool isProtectContent = true;
    workbook.Protect(isProtectWindow, isProtectContent, "password");

    //Save the Excel file
    workbook.SaveAs("XlsIOOutput_ProtectedWorkbook.xlsx");
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void ProtectWorkbook()
{
  using (ExcelEngine excelEngine = new ExcelEngine())
  {
    //Instantiate the application object
    IApplication application = excelEngine.Excel;

    //Create a workbook
    IWorkbook workbook = application.Workbooks.Create(1);

    //Protect the workbook with a password and Boolean flags for structure and window protection
    bool isProtectWindow = true;
    bool isProtectContent = true;
    workbook.Protect(isProtectWindow, isProtectContent, "syncfusion");

    //Save the Excel file
    workbook.SaveAs("XlsIOOutput_ProtectedWorkbook.xlsx");
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub ProtectWorkbook()
  Using excelEngine As ExcelEngine = New ExcelEngine()
    'Instantiate the application object
    Dim application As IApplication = excelEngine.Excel

    'Create a workbook
    Dim workbook As IWorkbook = application.Workbooks.Create(1)

    'Protect the workbook with a password and Boolean flags for structure and window protection
    Dim isProtectWindow As Boolean = True
    Dim isProtectContent As Boolean = True
    workbook.Protect(isProtectWindow, isProtectContent, "password")

    'Save as Excel file
    workbook.SaveAs("XlsIOOutput_ProtectedWorkbook.xlsx")
  End Using
End Sub
{% endhighlight %}
{% endtabs %}
