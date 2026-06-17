---
title: Syncfusion Excel to JSON File Conversion | Syncfusion
description: This page explains how to export Excel workbook, worksheet, or custom range data into JSON format efficiently.
platform: document-processing
control: XlsIO
documentation: UG
---

# Excel to JSON Conversion

Essential<sup>&reg;</sup> XlsIO supports to convert Excel data as JSON files by simply saving the workbook using the [SaveAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAsJson_System_String_) method. This support includes the features:

* Save as a simple JSON file or a JSON file as schema
* Save a workbook to JSON
* Save a worksheet to JSON
* Save a range to JSON
* Save as a stream with the above features

To quickly start converting an Excel document to a JSON, please check out this video: 
{% youtube "https://www.youtube.com/watch?v=IpUYRwQdVsQ" %}

## Workbook to JSON as schema

The following code illustrates how to convert an Excel workbook to the JSON file or JSON file stream as schema.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Convert%20Excel%20to%20JSON/Workbook%20to%20JSON%20with%20Schema/.NET/Workbook%20to%20JSON%20with%20Schema/Workbook%20to%20JSON%20with%20Schema/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region save as JSON
	//Saves the workbook to JSON, as schema by default
	workbook.SaveAsJson(Path.GetFullPath("Output/Excel-Workbook-To-JSON-as-schema-default.json"));

	//Saves the workbook to JSON as schema
	workbook.SaveAsJson("Output/Excel-Workbook-To-JSON-as-schema.json", true);
	#endregion

	#region Open JSON 
	//Open default JSON

	//Open JSON with Schema
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using(ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);

  //Saves the workbook to a JSON file, as schema by default
  workbook.SaveAsJson("Excel-Workbook-To-JSON-as-schema-default.json");

  //Saves the workbook to a JSON file as schema
  workbook.SaveAsJson("Excel-Workbook-To-JSON-as-schema.json", true);

  //Saves the workbook to a JSON filestream, as schema by default
  FileStream stream = new FileStream("Excel-Workbook-To-JSON-filestream-as-schema-default.json", FileMode.Create);
  workbook.SaveAsJson(stream);

  //Saves the workbook to a JSON filestream as schema
  FileStream stream1 = new FileStream("Excel-Workbook-To-JSON-filestream-as-schema.json", FileMode.Create);
  workbook.SaveAsJson(stream1, true);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)

  'Saves the workbook to a JSON file, as schema by default
  workbook.SaveAsJson("Excel-Workbook-To-JSON-as-schema-default.json")
	
  'Saves the workbook to a JSON file as schema
  workbook.SaveAsJson("Excel-Workbook-To-JSON-as-schema.json", true)

  'Saves the workbook to a JSON filestream as schema by default
  Dim stream As FileStream = new FileStream("Excel-Workbook-To-JSON-filestream-as-schema-default.json", FileMode.Create)
  workbook.SaveAsJson(stream)

  'Saves the workbook to a JSON filestream as schema
  Dim stream1 As FileStream = new FileStream("Excel-Workbook-To-JSON-filestream-as-schema.json",FileMode.Create)
  workbook.SaveAsJson(stream1, true)
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to convert Excel to JSON with schema in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Convert%20Excel%20to%20JSON/Workbook%20to%20JSON%20with%20Schema/.NET/Workbook%20to%20JSON%20with%20Schema). 

## Workbook to JSON without schema

The following code illustrates how to convert an Excel workbook to the JSON file or JSON file stream without schema.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Convert%20Excel%20to%20JSON/Workbook%20to%20JSON%20without%20Schema/.NET/Workbook%20to%20JSON%20without%20Schema/Workbook%20to%20JSON%20without%20Schema/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region save as JSON
	//Saves the workbook to JSON file without schema
	workbook.SaveAsJson(Path.GetFullPath(@"Output/Workbook-To-JSON-without-schema.json"),false);
	#endregion

	#region Open JSON 
	//Open default JSON
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using(ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);

  //Saves the workbook to a JSON file without schema
  workbook.SaveAsJson("Excel-Workbook-To-JSON-without-schema.json", false);

  //Saves the workbook to a JSON filestream without schema
  FileStream stream = new FileStream("Excel-Workbook-To-JSON-filestream-without-schema.json", FileMode.Create);
  workbook.SaveAsJson(stream, false);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)

  'Saves the workbook to a JSON file without schema
  workbook.SaveAsJson("Excel-Workbook-To-JSON-without-schema.json", false)

  'Saves the workbook to a JSON filestream without schema
  Dim stream As FileStream = new FileStream("Excel-Workbook-To-JSON-filestream-without-schema.json", FileMode.Create)
  workbook.SaveAsJson(stream, false)
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to convert Excel to JSON without schema in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Convert%20Excel%20to%20JSON/Workbook%20to%20JSON%20without%20Schema/.NET/Workbook%20to%20JSON%20without%20Schema). 

## Worksheet to JSON as schema

The following code illustrates how to convert an Excel worksheet to the JSON file or JSON file stream with schema.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Convert%20Excel%20to%20JSON/Worksheet%20to%20JSON%20with%20Schema/.NET/Worksheet%20to%20JSON%20with%20Schema/Worksheet%20to%20JSON%20with%20Schema/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region save as JSON
	//Saves the workbook to JSON, as schema by default
	workbook.SaveAsJson(Path.GetFullPath(@"Output/Excel-Worksheet-To-JSON-filestream-as-schema-default.json"), worksheet);

	//Saves the workbook to JSON as schema
	workbook.SaveAsJson(Path.GetFullPath(@"Output/Excel-Worksheet-To-JSON-filestream-as-schema.json"), worksheet, true);
	#endregion

	#region Open JSON 
	//Open default JSON

	//Open JSON with Schema
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using(ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);

  //Active worksheet
  IWorksheet worksheet = workbook.Worksheets[0];

  //Saves the worksheet to a JSON file, as schema by default
  workbook.SaveAsJson("Excel-Worksheet-To-JSON-as-schema-default.json", worksheet);

  //Saves the worksheet to a JSON file as schema
  workbook.SaveAsJson("Excel-Worksheet-To-JSON-as-schema.json", worksheet, true);

  //Saves the worksheet to a JSON filestream, as schema by default
  FileStream stream = new FileStream("Excel-Worksheet-To-JSON-filestream-as-schema-default.json", FileMode.Create);
  workbook.SaveAsJson("stream", worksheet);

  //Saves the worksheet to a JSON filestream as schema
  FileStream stream1 = new FileStream("Excel-Worksheet-To-JSON-filestream-as-schema.json", FileMode.Create);
  workbook.SaveAsJson(stream1, worksheet, true);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)

  'Active worksheet
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Saves the worksheet to a JSON file, as schema by default
  workbook.SaveAsJson("Excel-Worksheet-To-JSON-as-schema-default.json", worksheet)

  'Saves the worksheet to a JSON file as schema
  workbook.SaveAsJson("Excel-Worksheet-To-JSON-as-schema.json", worksheet, true)

  'Saves the worksheet to a JSON filestream as schema by default
  Dim stream As FileStream = new FileStream("Excel-Worksheet-To-JSON-filestream-as-schema-default.json",FileMode.Create)
  workbook.SaveAsJson(stream, worksheet)

  'Saves the worksheet to a JSON filestream as schema
  Dim stream1 As FileStream = new FileStream("Excel-Worksheet-To-JSON-filestream-as-schema.json",FileMode.Create)
  workbook.SaveAsJson(stream1, worksheet, true)
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to convert Excel worksheet to JSON with schema in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Convert%20Excel%20to%20JSON/Worksheet%20to%20JSON%20with%20Schema/.NET/Worksheet%20to%20JSON%20with%20Schema). 

## Worksheet to JSON without schema

The following code illustrates how to convert an Excel worksheet to the JSON file or file stream without schema.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Convert%20Excel%20to%20JSON/Worksheet%20to%20JSON%20without%20Schema/.NET/Worksheet%20to%20JSON%20without%20Schema/Worksheet%20to%20JSON%20without%20Schema/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region save as JSON
	//Saves the workbook to JSON, as schema by default
	workbook.SaveAsJson(Path.GetFullPath("Output/Excel-Worksheet-To-JSON-filestream-without-schema.json"), worksheet,false);
	#endregion

	#region Open JSON 
	//Open default JSON
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using(ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);

  //Active worksheet
  IWorksheet worksheet = workbook.Worksheets[0];

  //Saves the worksheet to a JSON file without schema
  workbook.SaveAsJson("Excel-Worksheet-To-JSON-without-schema.json", worksheet, false);

  //Saves the worksheet to a JSON filestream without schema
  FileStream stream = new FileStream("Excel-Worksheet-To-JSON-filestream-without-schema.json", FileMode.Create); 
  workbook.SaveAsJson(stream, worksheet, false);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)

  'Active worksheet
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Saves the worksheet to a JSON file without schema
  workbook.SaveAsJson("Excel-Worksheet-To-JSON-without-schema.json", worksheet, false)

  'Saves the worksheet to a JSON filestream without schema
  Dim stream As FileStream = new FileStream("Excel-Worksheet-To-JSON-filestream-without-schema.json", FileMode.Create)
  workbook.SaveAsJson(stream, worksheet, false)
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to convert Excel worksheet to JSON without schema in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Convert%20Excel%20to%20JSON/Worksheet%20to%20JSON%20without%20Schema/.NET/Worksheet%20to%20JSON%20without%20Schema). 

## Range to JSON as schema

The following code illustrates how to convert an Excel Custom Range to the JSON file or file stream as schema.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Convert%20Excel%20to%20JSON/Range%20to%20JSON%20with%20Schema/.NET/Range%20to%20JSON%20with%20Schema/Range%20to%20JSON%20with%20Schema/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Custom range
	IRange range = worksheet.Range["A1:F100"];

	#region save as JSON
	//Saves the workbook to JSON, as schema by default
	workbook.SaveAsJson(Path.GetFullPath("Output/Excel-Range-To-JSON-as-schema-default.json"), range);

	//Saves the workbook to JSON as schema
	workbook.SaveAsJson(Path.GetFullPath("Output/Excel-Range-To-JSON-as-schema.json"), range, true);
	#endregion

	#region Open JSON 
	//Open default JSON

	//Open JSON with Schema
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using(ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);

  //Active worksheet
  IWorksheet worksheet = workbook.Worksheets[0];

  //Custom range
  IRange range = worksheet.Range["A2:A5"];

  //Saves the range to a JSON file, as schema by default
  workbook.SaveAsJson("Excel-Range-To-JSON-as-schema-default.json", range);

  //Saves the range to a JSON file as schema
  workbook.SaveAsJson("Excel-Range-To-JSON-as-schema.json", range, true);

  //Saves the range to a JSON filestream, as schema by default
  FileStream stream = new FileStream("Excel-Range-To-JSON-filestream-as-schema-default.json", FileMode.Create);
  workbook.SaveAsJson(stream, range);

  //Saves the range to a JSON filestream as schema
  FileStream stream1 = new FileStream("Excel-Range-To-JSON-filestream-as-schema.json", FileMode.Create);
  workbook.SaveAsJson(stream1, range, true);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)

  'Active worksheet
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Custom range
  Dim range As IRange = worksheet.Range("A2:A5")

  'Saves the range to a JSON file, as schema by default
  workbook.SaveAsJson("Excel-Range-To-JSON-as-schema-default.json", range)

  'Saves the range to a JSON file as schema
  workbook.SaveAsJson("Excel-Range-To-JSON-as-schema.json", range, true)

  'Saves the range to a JSON filestream, as schema by default
  Dim stream As FileStream = new FileStream("Excel-Range-To-JSON-filestream-as-schema-default.json", FileMode.Create)
  workbook.SaveAsJson(stream, range)

  'Saves the range to a JSON filestream as schema
  Dim stream1 As FileStream = new FileStream("Excel-Range-To-JSON-filestream-as-schema.json", FileMode.Create)
  workbook.SaveAsJson(stream1, range, true)
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to convert range to JSON with schema in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Convert%20Excel%20to%20JSON/Range%20to%20JSON%20with%20Schema/.NET/Range%20to%20JSON%20with%20Schema). 

## Range to JSON without schema

The following code illustrates how to convert an Excel Custom Range to the JSON file or JSON file stream without schema.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Convert%20Excel%20to%20JSON/Range%20to%20JSON%20without%20Schema/.NET/Range%20to%20JSON%20without%20Schema/Range%20to%20JSON%20without%20Schema/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Custom range
	IRange range = worksheet.Range["A1:F100"];

	#region save as JSON
	//Saves the workbook to JSON, as schema by default
	workbook.SaveAsJson(Path.GetFullPath("Output/Excel-Range-To-JSON-filestream-without-schema.json"), range, false);
	#endregion

	#region Open JSON 
	//Open default JSON
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using(ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);

  //Active worksheet
  IWorksheet worksheet = workbook.Worksheets[0];

  //Custom range
  IRange range = worksheet.Range["A2:A5"];

  //Saves the range to a JSON file without schema
  workbook.SaveAsJson("Excel-Range-To-JSON-without-schema.json", range, false);

  //Saves the range to a JSON filestream without schema
  FileStream stream = new FileStream("Excel-Range-To-JSON-filestream-without-schema.json", FileMode.Create);
  workbook.SaveAsJson(stream, range, false);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)

  'Active worksheet
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Custom range
  Dim range As IRange = worksheet.Range("A2:A5")

  'Saves the range to a JSON file without schema
  workbook.SaveAsJson("Excel-Range-To-JSON-without-schema.json", range, false)

  'Saves the range to a JSON filestream without schema
  Dim stream As FileStream = new FileStream("Excel-Range-To-JSON-filestream-without-schema.json", FileMode.Create)
  workbook.SaveAsJson(stream, range, false)
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to convert range to JSON without schema in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Convert%20Excel%20to%20JSON/Range%20to%20JSON%20without%20Schema/.NET/Range%20to%20JSON%20without%20Schema). 
