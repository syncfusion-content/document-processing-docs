---
title: Loading and saving workbook on Linux | Syncfusion
description: Explains how to load and save Excel files on Linux applications using Syncfusion Excel(XlsIO) library.
platform: document-processing
control: XlsIO
documentation: UG
---
# Loading and saving workbook on Linux

## Opening an existing workbook

You can open an existing workbook by using the overloads of [Open](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_String_) methods of [IWorkbooks](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbooks.html) interface.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creates a new instance for ExcelEngine
ExcelEngine excelEngine = new ExcelEngine();

//Initialize IApplication
IApplication application = excelEngine.Excel;

//A existing workbook is opened.   
IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
{% endhighlight %}
{% endtabs %}  

## Saving an Excel workbook

You can also save the created or manipulated workbook using overloads of [SaveAs](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_String_) methods.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creates a new instance for ExcelEngine
ExcelEngine excelEngine = new ExcelEngine();

//Initialize IApplication
IApplication application = excelEngine.Excel;

//A existing workbook is opened.
IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");

//To-Do some manipulation
//To-Do some manipulation

//Set the version of the workbook
workbook.Version = ExcelVersion.Xlsx;

//Save the workbook
workbook.SaveAs("Output.xlsx");
{% endhighlight %}
{% endtabs %} 
