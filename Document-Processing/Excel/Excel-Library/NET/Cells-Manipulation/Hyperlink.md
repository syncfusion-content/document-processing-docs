---
title: Hyperlink | Excel library | Syncfusion
description: In this section, you can learn about how to add hyperlink in an Excel document using Syncfusion .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Hyperlink in Excel Document

## Create Hyperlink

Hyperlinks can be created in a workbook to provide quick access to web pages, locations within your document, and files. A hyperlink may target any one of the following

* Worksheet range
* Web URL
* E-mail
* External files

### Website URL Hyperlink

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creating a Hyperlink for a Website
IHyperLink hyperlink = sheet.HyperLinks.Add(sheet.Range["C5"]);
hyperlink.Type = ExcelHyperLinkType.Url;
hyperlink.Address = "http://www.syncfusion.com";
hyperlink.ScreenTip = "To know more about Syncfusion products, go through this link.";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creating a Hyperlink for a Website
IHyperLink hyperlink = sheet.HyperLinks.Add(sheet.Range["C5"]);
hyperlink.Type = ExcelHyperLinkType.Url;
hyperlink.Address = "http://www.syncfusion.com";
hyperlink.ScreenTip = "To know more about Syncfusion products, go through this link.";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creating a Hyperlink for a Website
Dim hyperlink As IHyperLink = sheet.HyperLinks.Add(sheet.Range("C5"))
hyperlink.Type = ExcelHyperLinkType.Url
hyperlink.Address = "http://www.Syncfusion.com"
hyperlink.ScreenTip = "To know more about Syncfusion products, go through this link."
{% endhighlight %}
{% endtabs %}

### E-mail hyperlink

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creating a Hyperlink for e-mail
IHyperLink hyperlink1 = sheet.HyperLinks.Add(sheet.Range["C7"]);
hyperlink1.Type = ExcelHyperLinkType.Url;
hyperlink1.Address = "mailto:Username@syncfusion.com";
hyperlink1.ScreenTip = "Send Mail";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creating a Hyperlink for e-mail
IHyperLink hyperlink1 = sheet.HyperLinks.Add(sheet.Range["C7"]);
hyperlink1.Type = ExcelHyperLinkType.Url;
hyperlink1.Address = "mailto:Username@syncfusion.com";
hyperlink1.ScreenTip = "Send Mail";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creating a Hyperlink for e-mail
Dim hyperlink1 As IHyperLink = sheet.HyperLinks.Add(sheet.Range("C7"))
hyperlink1.Type = ExcelHyperLinkType.Url
hyperlink1.Address = "mailto:Username@syncfusion.com"
hyperlink1.ScreenTip = "Send Mail"
{% endhighlight %}
{% endtabs %}

### File Opening Hyperlink

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creating a Hyperlink for Opening Files using type as File
IHyperLink hyperlink2 = sheet.HyperLinks.Add(sheet.Range["C9"]);
hyperlink2.Type = ExcelHyperLinkType.File;
hyperlink2.Address = "C:/Program files";
hyperlink2.ScreenTip = "File path";
hyperlink2.TextToDisplay = "Hyperlink for files using File as type";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creating a Hyperlink for Opening Files using type as File
IHyperLink hyperlink2 = sheet.HyperLinks.Add(sheet.Range["C9"]);
hyperlink2.Type = ExcelHyperLinkType.File;
hyperlink2.Address = "C:/Program files";
hyperlink2.ScreenTip = "File path";
hyperlink2.TextToDisplay = "Hyperlink for files using File as type";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creating a Hyperlink for Opening Files using type as File
Dim hyperlink2 As IHyperLink = sheet.HyperLinks.Add(sheet.Range("C9"))
hyperlink2.Type = ExcelHyperLinkType.File
hyperlink2.Address = "C:/Program files"
hyperlink2.ScreenTip = "File path"
hyperlink2.TextToDisplay = "Hyperlink for files using File as type"
{% endhighlight %}
{% endtabs %}

### File Opening Hyperlink with Unc

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creating a Hyperlink for Opening Files using type as Unc
IHyperLink hyperlink3 = sheet.HyperLinks.Add(sheet.Range["C11"]);
hyperlink3.Type = ExcelHyperLinkType.Unc;
hyperlink3.Address = "C:/Documents and Settings";
hyperlink3.ScreenTip = "Click here for files";
hyperlink3.TextToDisplay = "Hyperlink for files using Unc as type";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creating a Hyperlink for Opening Files using type as Unc
IHyperLink hyperlink3 = sheet.HyperLinks.Add(sheet.Range["C11"]);
hyperlink3.Type = ExcelHyperLinkType.Unc;
hyperlink3.Address = "C:/Documents and Settings";
hyperlink3.ScreenTip = "Click here for files";
hyperlink3.TextToDisplay = "Hyperlink for files using Unc as type";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creating a Hyperlink for Opening Files using type as Unc
Dim hyperlink3 As IHyperLink = sheet.HyperLinks.Add(sheet.Range("C11"))
hyperlink3.Type = ExcelHyperLinkType.Unc
hyperlink3.Address = "C:/Documents and Settings"
hyperlink3.ScreenTip = "Click here for files"
hyperlink3.TextToDisplay = "Hyperlink for files using Unc as type"
{% endhighlight %}
{% endtabs %}

### Worksheet Cell Hyperlink

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creating a Hyperlink to another cell using type as Workbook
IHyperLink hyperlink4 = sheet.HyperLinks.Add(sheet.Range["C13"]);
hyperlink4.Type = ExcelHyperLinkType.Workbook;
hyperlink4.Address = "Sheet1!A15";
hyperlink4.ScreenTip = "Click here";
hyperlink4.TextToDisplay = "Hyperlink to cell A15";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creating a Hyperlink to another cell using type as Workbook
IHyperLink hyperlink4 = sheet.HyperLinks.Add(sheet.Range["C13"]);
hyperlink4.Type = ExcelHyperLinkType.Workbook;
hyperlink4.Address = "Sheet1!A15";
hyperlink4.ScreenTip = "Click here";
hyperlink4.TextToDisplay = "Hyperlink to cell A15";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creating a Hyperlink to another cell using type as Workbook
Dim hyperlink4 As IHyperLink = sheet.HyperLinks.Add(sheet.Range("C13"))
hyperlink4.Type = ExcelHyperLinkType.Workbook
hyperlink4.Address = "Sheet1!A15"
hyperlink4.ScreenTip = "Click here"
hyperlink4.TextToDisplay = "Hyperlink to cell A15"
{% endhighlight %}
{% endtabs %}

The complete code example illustrating the above options is shown below.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Hyperlinks/.NET/Hyperlinks/Hyperlinks/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Excel2013;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	#region Hyperlinks
	//Creating a Hyperlink for a Website
	IHyperLink hyperlink = sheet.HyperLinks.Add(sheet.Range["C5"]);
	hyperlink.Type = ExcelHyperLinkType.Url;
	hyperlink.Address = "http://www.syncfusion.com";
	hyperlink.ScreenTip = "To know more about Syncfusion products, go through this link.";

	//Creating a Hyperlink for e-mail
	IHyperLink hyperlink1 = sheet.HyperLinks.Add(sheet.Range["C7"]);
	hyperlink1.Type = ExcelHyperLinkType.Url;
	hyperlink1.Address = "mailto:Username@syncfusion.com";
	hyperlink1.ScreenTip = "Send Mail";

	//Creating a Hyperlink for Opening Files using type as File
	IHyperLink hyperlink2 = sheet.HyperLinks.Add(sheet.Range["C9"]);
	hyperlink2.Type = ExcelHyperLinkType.File;
	hyperlink2.Address = "C:/Program files";
	hyperlink2.ScreenTip = "File path";
	hyperlink2.TextToDisplay = "Hyperlink for files using File as type";

	//Creating a Hyperlink for Opening Files using type as Unc
	IHyperLink hyperlink3 = sheet.HyperLinks.Add(sheet.Range["C11"]);
	hyperlink3.Type = ExcelHyperLinkType.Unc;
	hyperlink3.Address = "C:/Documents and Settings";
	hyperlink3.ScreenTip = "Click here for files";
	hyperlink3.TextToDisplay = "Hyperlink for files using Unc as type";

	//Creating a Hyperlink to another cell using type as Workbook
	IHyperLink hyperlink4 = sheet.HyperLinks.Add(sheet.Range["C13"]);
	hyperlink4.Type = ExcelHyperLinkType.Workbook;
	hyperlink4.Address = "Sheet1!A15";
	hyperlink4.ScreenTip = "Click here";
	hyperlink4.TextToDisplay = "Hyperlink to cell A15";
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Hyperlinks.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Creating a Hyperlink for a Website
  IHyperLink hyperlink = sheet.HyperLinks.Add(sheet.Range["C5"]);
  hyperlink.Type = ExcelHyperLinkType.Url;
  hyperlink.Address = "http://www.syncfusion.com";
  hyperlink.ScreenTip = "To know more about Syncfusion products, go through this link.";

  //Creating a Hyperlink for e-mail
  IHyperLink hyperlink1 = sheet.HyperLinks.Add(sheet.Range["C7"]);
  hyperlink1.Type = ExcelHyperLinkType.Url;
  hyperlink1.Address = "mailto:Username@syncfusion.com";
  hyperlink1.ScreenTip = "Send Mail";

  //Creating a Hyperlink for Opening Files using type as File
  IHyperLink hyperlink2 = sheet.HyperLinks.Add(sheet.Range["C9"]);
  hyperlink2.Type = ExcelHyperLinkType.File;
  hyperlink2.Address = "C:/Program files";
  hyperlink2.ScreenTip = "File path";
  hyperlink2.TextToDisplay = "Hyperlink for files using File as type";

  //Creating a Hyperlink for Opening Files using type as Unc
  IHyperLink hyperlink3 = sheet.HyperLinks.Add(sheet.Range["C11"]);
  hyperlink3.Type = ExcelHyperLinkType.Unc;
  hyperlink3.Address = "C:/Documents and Settings";
  hyperlink3.ScreenTip = "Click here for files";
  hyperlink3.TextToDisplay = "Hyperlink for files using Unc as type";

  //Creating a Hyperlink to another cell using type as Workbook
  IHyperLink hyperlink4 = sheet.HyperLinks.Add(sheet.Range["C13"]);
  hyperlink4.Type = ExcelHyperLinkType.Workbook;
  hyperlink4.Address = "Sheet1!A15";
  hyperlink4.ScreenTip = "Click here";
  hyperlink4.TextToDisplay = "Hyperlink to cell A15";

  workbook.SaveAs("Hyperlink.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Creating a Hyperlink for a Website
  Dim hyperlink As IHyperLink = sheet.HyperLinks.Add(sheet.Range("C5"))
  hyperlink.Type = ExcelHyperLinkType.Url
  hyperlink.Address = "http://www.Syncfusion.com"
  hyperlink.ScreenTip = "To know more about Syncfusion products, go through this link."

  'Creating a Hyperlink for e-mail
  Dim hyperlink1 As IHyperLink = sheet.HyperLinks.Add(sheet.Range("C7"))
  hyperlink1.Type = ExcelHyperLinkType.Url
  hyperlink1.Address = "mailto:Username@syncfusion.com"
  hyperlink1.ScreenTip = "Send Mail"

  'Creating a Hyperlink for Opening Files using type as File
  Dim hyperlink2 As IHyperLink = sheet.HyperLinks.Add(sheet.Range("C9"))
  hyperlink2.Type = ExcelHyperLinkType.File
  hyperlink2.Address = "C:/Program files"
  hyperlink2.ScreenTip = "File path"
  hyperlink2.TextToDisplay = "Hyperlink for files using File as type"

  'Creating a Hyperlink for Opening Files using type as Unc
  Dim hyperlink3 As IHyperLink = sheet.HyperLinks.Add(sheet.Range("C11"))
  hyperlink3.Type = ExcelHyperLinkType.Unc
  hyperlink3.Address = "C:/Documents and Settings"
  hyperlink3.ScreenTip = "Click here for files"
  hyperlink3.TextToDisplay = "Hyperlink for files using Unc as type"

  'Creating a Hyperlink to another cell using type as Workbook
  Dim hyperlink4 As IHyperLink = sheet.HyperLinks.Add(sheet.Range("C13"))
  hyperlink4.Type = ExcelHyperLinkType.Workbook
  hyperlink4.Address = "Sheet1!A15"
  hyperlink4.ScreenTip = "Click here"
  hyperlink4.TextToDisplay = "Hyperlink to cell A15"

  workbook.SaveAs("Hyperlink.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add hyperlinks in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Hyperlinks/.NET/Hyperlinks).

## Modifying Existing Hyperlink

The properties of existing hyperlink can be modified by accessing it through the [IRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) instance.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Modify%20Hyperlink/.NET/Modify%20Hyperlink/Modify%20Hyperlink/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Modify Hyperlink
	//Modifying hyperlink’s text to display
	IHyperLink hyperlink = worksheet.Range["C5"].Hyperlinks[0];
	hyperlink.TextToDisplay = "Syncfusion";
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/ModifyHyperlink.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Modifying hyperlink’s text to display
  IHyperLink hyperlink = sheet.Range["C5"].Hyperlinks[0];
  hyperlink.TextToDisplay = "Syncfusion";

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Hyperlink.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Modifying hyperlink’s text to display
  Dim hyperlink As IHyperLink = sheet.Range("C5").Hyperlinks(0)
  hyperlink.TextToDisplay = "Syncfusion"

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Hyperlink.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to modify existing hyperlink in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Modify%20Hyperlink/.NET/Modify%20Hyperlink).

## Removing Hyperlink

Similarly, a hyperlink can also be removed from a range by accessing it through the [IRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) instance.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Remove%20Hyperlink/.NET/Remove%20Hyperlink/Remove%20Hyperlink/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Remove Hyperlink
	//Removing Hyperlink from Range "C7"
	worksheet.Range["C7"].Hyperlinks.RemoveAt(0);
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/RemoveHyperlink.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Removing Hyperlink from Range "C7"
  sheet.Range["C7"].Hyperlinks.RemoveAt(0);

  workbook.Version = ExcelVersion.Xlsx;
  workbook.SaveAs("Hyperlink.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Removing Hyperlink from Range "C7"
  sheet.Range("C7").Hyperlinks.RemoveAt(0)

  workbook.Version = ExcelVersion.Xlsx
  workbook.SaveAs("Hyperlink.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to remove existing hyperlink in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Remove%20Hyperlink/.NET/Remove%20Hyperlink).

## Hyperlinks on Shapes

### Adding Hyperlinks om Shapes

Hyperlink can be added to the following shapes.

* Picture
* AutoShape
* TextBox

The following code example illustrates how to insert hyperlinks to shapes.

{% tabs %} 
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Shape%20Hyperlink/.NET/Shape%20Hyperlink/Shape%20Hyperlink/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Shape Hyperlink
	//Adding hyperlink to TextBox 
	ITextBox textBox = worksheet.TextBoxes.AddTextBox(1, 1, 100, 100);
	IHyperLink hyperlink = worksheet.HyperLinks.Add((textBox as IShape), ExcelHyperLinkType.Url, "http://www.Syncfusion.com", "click here");

	//Adding hyperlink to AutoShape
	IShape autoShape = worksheet.Shapes.AddAutoShapes(AutoShapeType.Cloud, 10, 1, 100, 100);
	hyperlink = worksheet.HyperLinks.Add(autoShape, ExcelHyperLinkType.Url, "mailto:Username@syncfusion.com", "Send Mail");

	//Adding hyperlink to picture
	IPictureShape picture = worksheet.Pictures.AddPictureAsLink(5, 5, 10, 7, Path.GetFullPath(@"Data/Image.png"));
	hyperlink = worksheet.HyperLinks.Add(picture);
	hyperlink.Type = ExcelHyperLinkType.Unc;
	hyperlink.Address = "C://Documents and Settings";
	hyperlink.ScreenTip = "Click here for files";
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/ShapeHyperlink.xlsx"));
	#endregion
}
{% endhighlight %}
 
{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");

  //Adding hyperlink to TextBox 
  IWorksheet sheet = workbook.Worksheets[0];
  ITextBox textBox = sheet.TextBoxes.AddTextBox(1, 1, 100, 100);
  IHyperLink hyperlink = sheet.HyperLinks.Add((textBox as IShape), ExcelHyperLinkType.Url, "http://www.Syncfusion.com", "click here");

  //Adding hyperlink to AutoShape
  sheet = workbook.Worksheets[1];
  IShape autoShape = sheet.Shapes.AddAutoShapes(AutoShapeType.Cloud, 1, 1, 100, 100);
  hyperlink = sheet.HyperLinks.Add(autoShape, ExcelHyperLinkType.Url, "mailto:Username@syncfusion.com", "Send Mail");

  //Adding hyperlink to picture
  sheet = workbook.Worksheets[2];
  IPictureShape picture = sheet.Pictures.AddPicture("Image.png");
  hyperlink = sheet.HyperLinks.Add(picture);
  hyperlink.Type = ExcelHyperLinkType.Unc;
  hyperlink.Address = "C:/Documents and Settings";
  hyperlink.ScreenTip = "Click here for files";

  workbook.SaveAs("Hyperlink.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")

  'Text box 
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  Dim textBox As ITextBox = sheet.TextBoxes.AddTextBox(1, 1, 100, 100)
  Dim hyperlink As IHyperLink = sheet.HyperLinks.Add(TryCast(textBox, IShape), ExcelHyperLinkType.Url, "http://www.Syncfusion.com", "click here")

  'AutoShapes 
  sheet = workbook.Worksheets(1)
  Dim autoShape As IShape = sheet.Shapes.AddAutoShapes(AutoShapeType.Cloud, 1, 1, 100, 100)
  hyperlink = sheet.HyperLinks.Add(autoShape, ExcelHyperLinkType.Url, "mailto:Username@syncfusion.com", "Send Mail")

  'Pictures 
  sheet = workbook.Worksheets(2)
  Dim picture As IPictureShape = sheet.Pictures.AddPicture("Image.png")
  hyperlink = sheet.HyperLinks.Add(picture)
  hyperlink.Type = ExcelHyperLinkType.Unc
  hyperlink.Address = "C:/Documents and Settings"
  hyperlink.ScreenTip = "Click here for files"

  workbook.SaveAs("Hyperlink.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add hyperlink to shape in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Shape%20Hyperlink/.NET/Shape%20Hyperlink).

### Modifying Hyperlinks on Shapes

Properties of existing hyperlink can be modified by accessing it through [IWorksheet](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html) instance or [IShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IShape.html) instance.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Modify%20Shape%20Hyperlink/.NET/Modify%20Shape%20Hyperlink/Modify%20Shape%20Hyperlink/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	#region Modify Shape Hyperlink
	//Modifying hyperlink’s screen tip through IWorksheet instance
	IHyperLink hyperlink = worksheet.HyperLinks[0];
	hyperlink.ScreenTip = "Syncfusion";

	//Modifying hyperlink’s screen tip through IShape instance
	hyperlink = worksheet.Shapes[1].Hyperlink;
	hyperlink.ScreenTip = "Mail Syncfusion";
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/ModifyShapeHyperlink.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Modifying hyperlink’s screen tip through IWorksheet instance
  IHyperLink hyperlink = sheet.HyperLinks[0];
  hyperlink.ScreenTip = "Syncfusion";

  //Modifying hyperlink’s screen tip through IShape instance
  hyperlink = sheet.Shapes[0].Hyperlink;
  hyperlink.ScreenTip = "Syncfusion";

  workbook.SaveAs("Hyperlink.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Modifying hyperlink’s screen tip through IWorksheet instance
  Dim hyperlink As IHyperLink = sheet.HyperLinks(0)
  hyperlink.ScreenTip = "Syncfusion"

  'Modifying hyperlink’s screen tip through IShape instance
  hyperlink = sheet.Shapes(0).Hyperlink
  hyperlink.ScreenTip = "Syncfusion"

  workbook.SaveAs("Hyperlink.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to modify shape hyperlink in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Modify%20Shape%20Hyperlink/.NET/Modify%20Shape%20Hyperlink).

### Removing Hyperlinks from Shapes

The following code snippet explains how to remove hyperlink of shape.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Editing%20Excel%20cells/Remove%20Shape%20Hyperlink/.NET/Remove%20Shape%20Hyperlink/Remove%20Shape%20Hyperlink/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath("Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Removing hyperlink from sheet with Index
	worksheet.HyperLinks.RemoveAt(0);

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/RemoveShapeHyperlink.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Removing hyperlink from sheet with Index
  sheet.HyperLinks.RemoveAt(0);

  workbook.SaveAs("Hyperlink.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Removing Hyperlink from sheet with Index
  sheet.HyperLinks.RemoveAt(0)

  workbook.SaveAs("Hyperlink.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to remove shape hyperlink in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Editing%20Excel%20cells/Remove%20Shape%20Hyperlink/.NET/Remove%20Shape%20Hyperlink).