---
title: Slicer in Excel | Excel library | Syncfusion
description: This section illustrates about Excel Slicers and its various features in Syncfusion XlsIO (a .NET Excel library).
platform: file-formats
control: XlsIO
documentation: UG
---

# Working with Excel Slicer

Slicers are UI filters that help to display only specific data based on the selection criteria. They provide easy and simple UI options to enable or disable the filters in a table.

Syncfusion XlsIO supports below features.

* Create slicers and filter table data.
* Format slicers with built-in styles. 

## Create Slicer

The following code snippet explains how to create a table slicer.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Access the table.
  IListObject table = sheet.ListObjects[0];

  //Add slicer for the table.
  sheet.Slicers.Add(table, 3, 11, 2);

  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Access the table.
  IListObject table = sheet.ListObjects[0];

  //Add slicer for the table.
  sheet.Slicers.Add(table, 3, 11, 2);

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Access the first table.
  Dim table As IListObject = sheet.ListObjects(0)

  'Add slicer for the table.
  sheet.Slicers.Add(table, 3, 11, 2)

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

![Create Slicer](Slicer_images/CreateSlicer.png)

## Slicer Properties

### Slicer name

The existing name of a slicer can be obtained or changed through **Name** property. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.Name = "Slicer1";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.Name = "Slicer1";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
ISlicer slicer = sheet.Slicers(0)
slicer.Name = "Slicer1"
{% endhighlight %}
{% endtabs %}

### Slicer caption

Slicer caption can be modified through **Caption** property. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.Caption = "Select any value";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.Caption = "Select any value";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
ISlicer slicer = sheet.Slicers(0)
slicer.Caption = "Select any value"
{% endhighlight %}
{% endtabs %}

### Positioning a Slicer

Slicer can be positioned in the worksheet as required, as below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.Top = 100;
slicer.Left = 300;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.Top = 100;
slicer.Left = 300;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
ISlicer slicer = sheet.Slicers(0)
slicer.Top = 100
slicer.Left = 300
{% endhighlight %}
{% endtabs %}

### Resize a Slicer

A slicer can be resized as shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.Height = 200;
slicer.Width = 150;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.Height = 200;
slicer.Width = 150;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
ISlicer slicer = sheet.Slicers(0)
slicer.Height = 200
slicer.Width = 150
{% endhighlight %}
{% endtabs %}

### Resize Slicer item

Slicer item can also the resized, as shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.SlicerItemHeight = 0.4;
slicer.SlicerItemWidth = 80;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.SlicerItemHeight = 0.4;
slicer.SlicerItemWidth = 80;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
ISlicer slicer = sheet.Slicers(0)
slicer.SlicerItemHeight = 0.4
slicer.SlicerItemWidth = 80
{% endhighlight %}
{% endtabs %}

### Slicer columns

Select the number of columns inside a slicer as below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.NumberOfColumns = 2;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.NumberOfColumns = 2;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
ISlicer slicer = sheet.Slicers(0)
slicer.NumberOfColumns = 2
{% endhighlight %}
{% endtabs %}

### Slicer header

A slicer header can be shown or hidden through **DisplayHeader** property.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.DisplayHeader = true;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.DisplayHeader = true;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
ISlicer slicer = sheet.Slicers(0)
slicer.DisplayHeader = True
{% endhighlight %}
{% endtabs %}

### Slicer style

Slicer style can be selected as shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.SlicerStyle = ExcelSlicerStyle.SlicerStyleDark2;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ISlicer slicer = sheet.Slicers[0];
slicer.SlicerStyle = ExcelSlicerStyle.SlicerStyleDark2;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
ISlicer slicer = sheet.Slicers(0)
slicer.SlicerStyle = ExcelSlicerStyle.SlicerStyleDark2
{% endhighlight %}
{% endtabs %}

The following code snippet illustrates how to format an existing slicer with all the above discussed properties. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  FileStream inputStream = new FileStream("Sample.xlsx", FileMode.Open, FileAccess.Read);
  IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Access the table
  IListObject table = sheet.ListObjects[0];

  //Add slicer for the table
  sheet.Slicers.Add(table, 3, 11, 2);

  //Access the slicer
  ISlicer slicer = sheet.Slicers[0];

  //Slicer name
  slicer.Name = "Slicer1";

  //Slicer caption
  slicer.Caption = "Select any value";

  //Positioning a Slicer
  slicer.Top = 100;
  slicer.Left = 300;

  //Resize a Slicer
  slicer.Height = 200;
  slicer.Width = 150;

  //Resize Slicer item
  slicer.SlicerItemHeight = 0.4;
  slicer.SlicerItemWidth = 80;

  //Slicer columns
  slicer.NumberOfColumns = 2;

  //Slicer header
  slicer.DisplayHeader = true;

  //Slicer style
  slicer.SlicerStyle = ExcelSlicerStyle.SlicerStyleDark2;

  FileStream stream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
  workbook.SaveAs(stream);
  stream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet sheet = workbook.Worksheets[0];

  //Access the table
  IListObject table = sheet.ListObjects[0];

  //Add slicer for the table
  sheet.Slicers.Add(table, 3, 11, 2);

  //Access the slicer
  ISlicer slicer = sheet.Slicers[0];

  //Slicer name
  slicer.Name = "Slicer1";

  //Slicer caption
  slicer.Caption = "Select any value";

  //Positioning a Slicer
  slicer.Top = 100;
  slicer.Left = 300;

  //Resize a Slicer
  slicer.Height = 200;
  slicer.Width = 150;

  //Resize Slicer item
  slicer.SlicerItemHeight = 0.4;
  slicer.SlicerItemWidth = 80;

  //Slicer columns
  slicer.NumberOfColumns = 2;

  //Slicer header
  slicer.DisplayHeader = true;

  //Slicer style
  slicer.SlicerStyle = ExcelSlicerStyle.SlicerStyleDark2;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Access the first table.
  Dim table As IListObject = sheet.ListObjects(0)

  'Add slicer for the table
  sheet.Slicers.Add(table, 3, 11, 2)

  'Access the slicer
  Dim slicer As ISlicer = sheet.Slicers(0)

  'Slicer name
  slicer.Name = "Slicer1"

  'Slicer caption
  slicer.Caption = "Select any value"

  'Positioning a Slicer
  slicer.Top = 100
  slicer.Left = 300

  'Resize a Slicer
  slicer.Height = 200
  slicer.Width = 150

  'Resize Slicer item
  slicer.SlicerItemHeight = 0.4
  slicer.SlicerItemWidth = 80

  'Slicer columns
  slicer.NumberOfColumns = 2

  'Slicer header
  slicer.DisplayHeader = True

  'Slicer style
  slicer.SlicerStyle = ExcelSlicerStyle.SlicerStyleDark2

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

![Format Slicer](Slicer_images/FormatSlicer.png)