---
title: Page Setup Options | Syncfusion
description: In this section, you can learn how to use various page setup options in an Excel worksheets using Syncfusion Essential XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Page Setup Options in Excel Document

## Fit all rows on one page

[FitToPagesTall](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_FitToPagesTall) enables the functionality of fitting all rows on one printed page.

The following code example illustrates how to use FitToPagesTall.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/FitToPagesTall/.NET/FitToPagesTall/FitToPagesTall/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	for (int i = 1; i <= 50; i++)
	{
		for (int j = 1; j <= 50; j++)
		{
			sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
		}
	}

	#region PageSetup Settings
	//Sets the fit to page tall as true.
	sheet.PageSetup.FitToPagesTall = 1;
	sheet.PageSetup.FitToPagesWide = 0;

	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/FitToPagesTall.xlsx"));
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

  for (int i = 1; i <= 50; i++)
  {
    for (int j = 1; j <= 50; j++)
    {
      sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
    }
  }

  //Sets the fit to page tall
  sheet.PageSetup.FitToPagesTall = 1;
  sheet.PageSetup.FitToPagesWide = 0;
    
  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  For i As Integer = 1 To 50
    For j As Integer = 1 To 50
      sheet.Range(i, j).Text = sheet.Range(i, j).AddressLocal
    Next
  Next

  ' Sets the fit to page tall
  sheet.PageSetup.FitToPagesTall = 1
  sheet.PageSetup.FitToPagesWide = 0

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to fit all rows on one page in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/FitToPagesTall/.NET/FitToPagesTall).

## Fit all columns on one page.

[FitToPagesWide](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_FitToPagesWide) enables the functionality of fitting all columns on one printed page.

The following code example illustrates how to use FitToPagesWide.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/FitToPagesWide/.NET/FitToPagesWide/FitToPagesWide/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	for (int i = 1; i <= 50; i++)
	{
		for (int j = 1; j <= 50; j++)
		{
			sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
		}
	}

	#region PageSetup Settings
	//Sets the fit to page wide as true.
	sheet.PageSetup.FitToPagesWide = 1;
	sheet.PageSetup.FitToPagesTall = 0;

	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/FitToPagesWide.xlsx"));
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

  for (int i = 1; i <= 50; i++)
  {
    for (int j = 1; j <= 50; j++)
    {
      sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
    }
  }

  //Sets the fit to page wide
  sheet.PageSetup.FitToPagesWide = 1;
  sheet.PageSetup.FitToPagesTall = 0;
    
  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  For i As Integer = 1 To 50
    For j As Integer = 1 To 50
      sheet.Range(i, j).Text = sheet.Range(i, j).AddressLocal
    Next
  Next

  ' Sets the fit to page wide
  sheet.PageSetup.FitToPagesWide = 1
  sheet.PageSetup.FitToPagesTall = 0

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to fit all columns on one page in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/FitToPagesWide/.NET/FitToPagesWide).

## Fit the page content.

[IsFitToPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_IsFitToPage) enables the functionality of fitting the page content before printing.

The following code example illustrates how to use IsFitToPage.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/IsFitToPage/.NET/IsFitToPage/IsFitToPage/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Excel2013;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	for (int i = 1; i <= 50; i++)
	{
		for (int j = 1; j <= 50; j++)
		{
			sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
		}
	}

	#region PageSetup Settings
	// True to fit the content before printing
	sheet.PageSetup.IsFitToPage = true;

	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/IsFitToPage.xlsx"));
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

  for (int i = 1; i <= 50; i++)
  {
    for (int j = 1; j <= 50; j++)
    {
      sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
    }
  }

  // True to fit the content before printing
  sheet.PageSetup.IsFitToPage = true;
    
  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  For i As Integer = 1 To 50
    For j As Integer = 1 To 50
      sheet.Range(i, j).Text = sheet.Range(i, j).AddressLocal
    Next
  Next

  'True to fit the content before printing
  sheet.PageSetup.IsFitToPage = true;

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to fit page content before printing in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/IsFitToPage/.NET/IsFitToPage).

## Summary Column Right

To enable the [IsSummaryColumnRight](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_IsSummaryColumnRight) property, the page orientation must be Portrait, the [FitToPagesTall](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_FitToPagesTall) property value must be 0 and the [IsFitToPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_IsFitToPage) property must be true.

The following code snippet shows how to use IsSummaryColumnRight.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/IsSummaryColumnRight/.NET/IsSummaryColumnRight/IsSummaryColumnRight/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	for (int i = 1; i <= 50; i++)
	{
		for (int j = 1; j <= 50; j++)
		{
			sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
		}
	}

	#region PageSetup Settings
	//True to summary columns will appear right of the detail in outlines
	sheet.PageSetup.IsSummaryColumnRight = true;
	sheet.PageSetup.Orientation = ExcelPageOrientation.Portrait;
	sheet.PageSetup.FitToPagesTall = 0;
	sheet.PageSetup.IsFitToPage = true;

	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/SummaryColumnRight.xlsx"));
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

  for (int i = 1; i <= 50; i++)
  {
    for (int j = 1; j <= 50; j++)
    {
      sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
    }
  }

  //True to summary columns will appear right of the detail in outlines
  sheet.PageSetup.IsSummaryColumnRight = true;
  sheet.PageSetup.Orientation = ExcelPageOrientation.Portrait;  
  sheet.PageSetup.FitToPagesTall = 0;
  sheet.PageSetup.IsFitToPage = true;
    
  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  For i As Integer = 1 To 50
    For j As Integer = 1 To 50
      sheet.Range(i, j).Text = sheet.Range(i, j).AddressLocal
    Next
  Next
  
  'True to summary columns will appear right of the detail in outlines
  sheet.PageSetup.IsSummaryColumnRight = true
  sheet.PageSetup.Orientation = ExcelPageOrientation.Portrait
  sheet.PageSetup.FitToPagesTall = 0
  sheet.PageSetup.IsFitToPage = true

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to enable IsSummaryColumnRight in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/IsSummaryColumnRight/.NET/IsSummaryColumnRight).

## Summary Row Below.

To enable the [IsSummaryRowBelow](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_IsSummaryRowBelow) property, the page orientation must be Portrait, the [FitToPagesWide](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_FitToPagesWide) property value must be 0 and the [IsFitToPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_IsFitToPage) property must be true.

The following code snippet shows how to use IsSummaryRowBelow.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/IsSummaryRowBelow/.NET/IsSummaryRowBelow/IsSummaryRowBelow/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	for (int i = 1; i <= 50; i++)
	{
		for (int j = 1; j <= 50; j++)
		{
			sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
		}
	}

	#region PageSetup Settings
	//True to summary rows will appear below detail in outlines
	sheet.PageSetup.IsSummaryRowBelow = true;
	sheet.PageSetup.FitToPagesWide = 0;
	sheet.PageSetup.Orientation = ExcelPageOrientation.Portrait;
	sheet.PageSetup.IsFitToPage = true;

	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/SummaryRowBelow.xlsx"));
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

  for (int i = 1; i <= 50; i++)
  {
    for (int j = 1; j <= 50; j++)
    {
      sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
    }
  }

  //True to summary rows will appear below detail in outlines
  sheet.PageSetup.IsSummaryRowBelow = true; 
  sheet.PageSetup.FitToPagesWide = 0; 
  sheet.PageSetup.Orientation = ExcelPageOrientation.Portrait;
  sheet.PageSetup.IsFitToPage = true;
    
  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  For i As Integer = 1 To 50
    For j As Integer = 1 To 50
      sheet.Range(i, j).Text = sheet.Range(i, j).AddressLocal
    Next
  Next

  'True to summary rows will appear below detail in outlines
  sheet.PageSetup.IsSummaryRowBelow = true 
  sheet.PageSetup.FitToPagesWide = 0
  sheet.PageSetup.Orientation = ExcelPageOrientation.Portrait
  sheet.PageSetup.IsFitToPage = true

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to enable IsSummaryRowBelow in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/IsSummaryRowBelow/.NET/IsSummaryRowBelow).


## Print Area.

The [PrintArea](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_PrintArea) functionality allows you to set the range to be printed.

The following code snippet shows how to use the PrintArea.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/PrintArea/.NET/PrintArea/PrintArea/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	for (int i = 1; i <= 50; i++)
	{
		for (int j = 1; j <= 50; j++)
		{
			sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
		}
	}

	#region PageSetup Settings
	//Sets the range to be printed
	sheet.PageSetup.PrintArea = "A1:M20";

	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/PrintArea.xlsx"));
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

  for (int i = 1; i <= 50; i++)
  {
    for (int j = 1; j <= 50; j++)
    {
      sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
    }
  }

  //Sets the range to be printed
  sheet.PageSetup.PrintArea = "A1:M20";
    
  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  For i As Integer = 1 To 50
    For j As Integer = 1 To 50
      sheet.Range(i, j).Text = sheet.Range(i, j).AddressLocal
    Next
  Next

  'Sets the range to be printed
  sheet.PageSetup.PrintArea = "A1:M20"

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to set the range to be printed in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/PrintArea/.NET/PrintArea).

## Print Gridlines.

The [PrintGridlines](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_PrintGridlines) functionality allows you to set the gridlines to be printed.

The following code snippet shows how to use PrintGridlines.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/PrintGridlines/.NET/PrintGridlines/PrintGridlines/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	for (int i = 1; i <= 50; i++)
	{
		for (int j = 1; j <= 50; j++)
		{
			sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
		}
	}

	#region PageSetup Settings
	//True to cell gridlines are printed on the page
	sheet.PageSetup.PrintGridlines = true;

	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/PrintGridlines.xlsx"));
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

  for (int i = 1; i <= 50; i++)
  {
    for (int j = 1; j <= 50; j++)
    {
      sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
    }
  }

  //True to cell gridlines are printed on the page
  sheet.PageSetup.PrintGridlines = true;
    
  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  For i As Integer = 1 To 50
    For j As Integer = 1 To 50
      sheet.Range(i, j).Text = sheet.Range(i, j).AddressLocal
    Next
  Next

  'True to cell gridlines are printed on the page
  sheet.PageSetup.PrintGridlines = true

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to set the gridlines to be printed in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/PrintGridlines/.NET/PrintGridlines).

## Print Headings.

The [PrintHeadings](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_PrintHeadings) functionality allows you to set the row and column headings to be printed.

The following code snippet shows how to use PrintHeadings.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/PrintHeadings/.NET/PrintHeadings/PrintHeadings/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	for (int i = 1; i <= 50; i++)
	{
		for (int j = 1; j <= 50; j++)
		{
			sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
		}
	}

	#region PageSetup Settings
	//True to row and column headings are printed on page
	sheet.PageSetup.PrintHeadings = true;

	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/PrintHeadings.xlsx"));
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

  for (int i = 1; i <= 50; i++)
  {
    for (int j = 1; j <= 50; j++)
    {
      sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
    }
  }

  //True to row and column headings are printed on page
  sheet.PageSetup.PrintHeadings = true;
    
  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  For i As Integer = 1 To 50
    For j As Integer = 1 To 50
      sheet.Range(i, j).Text = sheet.Range(i, j).AddressLocal
    Next
  Next

  'True to row and column headings are printed on page
  sheet.PageSetup.PrintHeadings = true

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to set the row and column headings to be printed in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/PrintHeadings/.NET/PrintHeadings).

## Print TitleColumns.

The [PrintTitleColumns](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_PrintTitleColumns) functionality allows you to specify the columns containing cells that will be repeated on the left side of each printed page.

The following code snippet shows how to use PrintTitleColumns.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/PrintTitleColumns/.NET/PrintTitleColumns/PrintTitleColumns/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	for (int i = 1; i <= 50; i++)
	{
		for (int j = 1; j <= 50; j++)
		{
			sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
		}
	}

	#region PageSetup Settings
	//Sets the columns to be repeated on the left side of each page
	sheet.PageSetup.PrintTitleColumns = "C1:C50";

	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/PrintTitleColumns.xlsx"));
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

  for (int i = 1; i <= 50; i++)
  {
    for (int j = 1; j <= 50; j++)
    {
      sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
    }
  }

  //Sets the columns to be repeated on the left side of each page
  sheet.PageSetup.PrintTitleColumns = "C1:C50";
    
  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  For i As Integer = 1 To 50
    For j As Integer = 1 To 50
      sheet.Range(i, j).Text = sheet.Range(i, j).AddressLocal
    Next
  Next

  'Sets the columns to be repeated on the left side of each page
  sheet.PageSetup.PrintTitleColumns = "C1:C50"

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to set the PrintTitleColumns in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/PrintTitleColumns/.NET/PrintTitleColumns).


## Print TitleRows.

The [PrintTitleRows](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_PrintTitleRows) functionality allows you to specify the rows containing cells that will be repeated on the top side of each printed page.

The following code snippet shows how to use PrintTitleRows.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/PrintTitleRows/.NET/PrintTitleRows/PrintTitleRows/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	for (int i = 1; i <= 50; i++)
	{
		for (int j = 1; j <= 50; j++)
		{
			sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
		}
	}

	#region PageSetup Settings
	//Sets the rows to be repeated at the top of each page
	sheet.PageSetup.PrintTitleRows = "A1:AX1";

	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/PrintTitleRows.xlsx"));
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

  for (int i = 1; i <= 50; i++)
  {
    for (int j = 1; j <= 50; j++)
    {
      sheet.Range[i, j].Text = sheet.Range[i, j].AddressLocal;
    }
  }

  //Sets the rows to be repeated at the top of each page
  sheet.PageSetup.PrintTitleRows = "A1:AX1";
    
  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  For i As Integer = 1 To 50
    For j As Integer = 1 To 50
      sheet.Range(i, j).Text = sheet.Range(i, j).AddressLocal
    Next
  Next

  'Sets the rows to be repeated at the top of each page
  sheet.PageSetup.PrintTitleRows = "A1:AX1";

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to set the PrintTitleRows in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/PrintTitleRows/.NET/PrintTitleRows).

## Headers and Footers

The following code example illustrates how to add headers and footers in an Excel document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Header%20and%20Footer/.NET/Header%20and%20Footer/Header%20and%20Footer/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Excel2013;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet worksheet = workbook.Worksheets[0];

	//Adding values in worksheet
	worksheet.Range["A1:A600"].Text = "HelloWorld";

	//Adding text with red color formatting to the left header
  	worksheet.PageSetup.LeftHeader = "&KFF0000 Left Header";

  	//Adding text (sheet name) with red color formatting to the center header
  	worksheet.PageSetup.CenterHeader = "&KFF0000&A";

  	//Adding text (date and time) with red color formatting to the right header
  	worksheet.PageSetup.RightHeader = "&KFF0000&D &T";

  	//Adding bold text, font size 18, and blue color formatting to the left footer
  	worksheet.PageSetup.LeftFooter = "&B &18 &K0000FF Left Footer";

  	//Adding an image placeholder to the center footer
  	FileStream imageStream = new FileStream(Path.GetFullPath(@"Data/image.jpg"), FileMode.Open);
  	worksheet.PageSetup.CenterFooter = "&G";
  	worksheet.PageSetup.CenterFooterImage = Image.FromStream(imageStream);

  	//Adding the file name to the right footer with blue color formatting
  	worksheet.PageSetup.RightFooter = "&K0000FF&F";

	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Adding text with red color formatting to the left header
  worksheet.PageSetup.LeftHeader = "&KFF0000 Left Header";

  //Adding text (sheet name) with red color formatting to the center header
  worksheet.PageSetup.CenterHeader = "&KFF0000&A";

  //Adding text (date and time) with red color formatting to the right header
  worksheet.PageSetup.RightHeader = "&KFF0000&D &T";

  //Adding bold text, font size 18, and blue color formatting to the left footer
  worksheet.PageSetup.LeftFooter = "&B &18 &K0000FF Left Footer";

  //Adding an image placeholder to the center footer
  FileStream imageStream = new FileStream(Path.GetFullPath(@"Data/image.jpg"), FileMode.Open);
  worksheet.PageSetup.CenterFooter = "&G";
  worksheet.PageSetup.CenterFooterImage = Image.FromStream(imageStream);

  //Adding the file name to the right footer with blue color formatting
  worksheet.PageSetup.RightFooter = "&K0000FF&F";

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Adding values in worksheet
  worksheet.Range("A1:A600").Text = "HelloWorld"

  'Adding text with red color formatting to the left header
  worksheet.PageSetup.LeftHeader = "&KFF0000 Left Header"

  'Adding text (sheet name) with red color formatting to the center header
  worksheet.PageSetup.CenterHeader = "&KFF0000&A"

  'Adding text (date and time) with red color formatting to the right header
  worksheet.PageSetup.RightHeader = "&KFF0000&D &T"

  'Adding bold text, font size 18, and blue color formatting to the left footer
  worksheet.PageSetup.LeftFooter = "&B &18 &K0000FF Left Footer"

  'Adding an image placeholder to the center footer
  FileStream imageStream = new FileStream(Path.GetFullPath(@"Data/image.jpg"), FileMode.Open)
  worksheet.PageSetup.CenterFooter = "&G"
  worksheet.PageSetup.CenterFooterImage = Image.FromStream(imageStream)

  'Adding the file name to the right footer with blue color formatting
  worksheet.PageSetup.RightFooter = "&K0000FF&F"

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to add headers and footers in an Excel document using C# is present on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Header%20and%20Footer/.NET/Header%20and%20Footer)