---
title: Loading and saving workbook in ASP.NET Core | Syncfusion
description: Explains how to load and save Excel files in ASP.NET Core applications using Syncfusion XlsIO.
platform: file-formats
control: XlsIO
documentation: UG
---
# Loading and saving workbook in ASP.NET Core

## Opening an existing workbook from stream

You can open an existing workbook from stream by using the overloads of [Open](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_IO_Stream_) methods of [IWorkbooks](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbooks.html) interface.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creates a new instance for ExcelEngine
ExcelEngine excelEngine = new ExcelEngine();

//Initialize IApplication
IApplication application = excelEngine.Excel;

//Load the file into stream
FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);

//Loads or open an existing workbook through Open method of IWorkbooks
IWorkbook workbook = application.Workbooks.Open(inputStream);
{% endhighlight %}
{% endtabs %}  

## Saving an Excel workbook to stream

You can also save the created or manipulated workbook to stream using overloads of [SaveAs](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_IO_Stream_) methods.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creates a new instance for ExcelEngine
ExcelEngine excelEngine = new ExcelEngine();

//Initialize IApplication
IApplication application = excelEngine.Excel;

//Load the file into stream
FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);

//Loads or open an existing workbook through Open method of IWorkbooks
IWorkbook workbook = application.Workbooks.Open(inputStream);

//To-Do some manipulation
//To-Do some manipulation

//Set the version of the workbook
workbook.Version = ExcelVersion.Xlsx;

//Saving the workbook as stream
FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
workbook.SaveAs(outputStream);
{% endhighlight %}
{% endtabs %} 
