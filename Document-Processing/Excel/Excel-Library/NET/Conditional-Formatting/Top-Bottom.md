---
title: Top/Bottom | Excel library | Syncfusion
description: In this section, you can learn how to apply top/bottom rules using conditional formatting in an Excel document with XlsIO
platform: document-processing
control: XlsIO
documentation: UG
---

# Top/Bottom in Conditional Formatting

Top/Bottom Rules are powerful tools for data analysis and presentation, enhancing the ability to quickly identify and emphasize the highest or lowest values within a range of cells in a worksheet.

## Format Top or Bottom Values

Top/Bottom rule in conditional formatting is used to highlight the top or bottom ranked cells in a data range. Top/Bottom conditional formatting rule can be created and customized using the [ITopBottom](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ITopBottom.html) interface in XlsIO.

The properties of **ITopBottom** interface are:

* **Type** - Specifies whether the rank is evaluated from the top or bottom.
* **Percent** - Specifies whether the rank is determined by a percentage value.
* **Rank** - Specifies the maximum number or percentage of cells to be highlighted.

### Top/Bottom ‘n’ rank values

The following code example illustrates how to format top 10 rank values from the given data range using [ITopBottom](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ITopBottom.html) [Type](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ITopBottom.html#Syncfusion_XlsIO_ITopBottom_Type) and [Rank](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ITopBottom.html#Syncfusion_XlsIO_ITopBottom_Rank) properties in XlsIO.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]"  playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Conditional%20Formatting/Top%20to%20Bottom%20Rank/.NET/Top%20to%20Bottom%20Rank/Top%20to%20Bottom%20Rank/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Applying conditional formatting to "N6:N35".
	IConditionalFormats formats = worksheet.Range["N6:N35"].ConditionalFormats;
	IConditionalFormat format = formats.AddCondition();

	//Applying top or bottom rule in the conditional formatting.
	format.FormatType = ExcelCFType.TopBottom;
	ITopBottom topBottom = format.TopBottom;

	//Set type as Top for TopBottom rule.
	topBottom.Type = ExcelCFTopBottomType.Top;

	//Set rank value for the TopBottom rule.
	topBottom.Rank = 10;

	//Set color for Conditional Formattting.
	format.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(51, 153, 102);

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/TopToBottomRank.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
   
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = workbook = application.Workbooks.Open("InputTemplate.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];
  
  //Applying conditional formatting to "N6:N35".
  IConditionalFormats conditionalFormats1 = worksheet.Range["N6:N35"].ConditionalFormats;
  IConditionalFormat conditionalFormat1 = conditionalFormats1.AddCondition();

  //Applying top or bottom rule in the conditional formatting.
  conditionalFormat1.FormatType = ExcelCFType.TopBottom;
  ITopBottom topBottom1 = conditionalFormat1.TopBottom;

  //Set type as Top for TopBottom rule.
  topBottom1.Type = ExcelCFTopBottomType.Top;

  //Set rank value for the TopBottom rule.
  topBottom1.Rank = 10;

  //Set solid color conditional formatting for TopBottom rule.
  conditionalFormat1.FillPattern = ExcelPattern.Solid;
  conditionalFormat1.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(51, 153, 102);


  //Applying conditional formatting to "M6:M35".
  IConditionalFormats conditionalFormats2 = worksheet.Range["M6:M35"].ConditionalFormats;
  IConditionalFormat conditionalFormat2 = conditionalFormats2.AddCondition();

  //Applying top or bottom rule in the conditional formatting.
  conditionalFormat2.FormatType = ExcelCFType.TopBottom;
  ITopBottom topBottom2 = conditionalFormat2.TopBottom;

  //Set type as Top for TopBottom rule.
  topBottom2.Type = ExcelCFTopBottomType.Top;

  //Set rank value for the TopBottom rule.
  topBottom2.Rank = 10;

  //Set gradient color conditional formatting for TopBottom rule.
  conditionalFormat2.FillPattern = ExcelPattern.Gradient;
  conditionalFormat2.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(130, 60, 12);
  conditionalFormat2.ColorRGB = Syncfusion.Drawing.Color.FromArgb(255, 255, 0);
  conditionalFormat2.GradientStyle = ExcelGradientStyle.Horizontal;
  conditionalFormat2.GradientVariant = ExcelGradientVariants.ShadingVariants_1;

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
   
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
  
  ' Applying conditional formatting to "N6:N35".
  Dim conditionalFormats1 As IConditionalFormats = worksheet.Range("N6:N35").ConditionalFormats
  Dim conditionalFormat1 As IConditionalFormat = conditionalFormats1.AddCondition()

  ' Applying top or bottom rule in the conditional formatting.
  conditionalFormat1.FormatType = ExcelCFType.TopBottom
  Dim topBottom1 As ITopBottom = conditionalFormat1.TopBottom

  ' Set type as Top for TopBottom rule.
  topBottom1.Type = ExcelCFTopBottomType.Top

  ' Set rank value for the TopBottom rule.
  topBottom1.Rank = 10

  ' Set solid color conditional formatting for TopBottom rule.
  conditionalFormat1.FillPattern = ExcelPattern.Solid
  conditionalFormat1.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(51, 153, 102)


  ' Applying conditional formatting to "M6:M35".
  Dim conditionalFormats2 As IConditionalFormats = worksheet.Range("M6:M35").ConditionalFormats
  Dim conditionalFormat2 As IConditionalFormat = conditionalFormats2.AddCondition()

  ' Applying top or bottom rule in the conditional formatting.
  conditionalFormat2.FormatType = ExcelCFType.TopBottom
  Dim topBottom2 As ITopBottom = conditionalFormat2.TopBottom

  ' Set type as Top for TopBottom rule.
  topBottom2.Type = ExcelCFTopBottomType.Top

  ' Set rank value for the TopBottom rule.
  topBottom2.Rank = 10

  ' Set gradient color conditional formatting for TopBottom rule.
  conditionalFormat2.FillPattern = ExcelPattern.Gradient
  conditionalFormat2.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(130, 60, 12)
  conditionalFormat2.ColorRGB = Syncfusion.Drawing.Color.FromArgb(255, 255, 0)
  conditionalFormat2.GradientStyle = ExcelGradientStyle.Horizontal
  conditionalFormat2.GradientVariant = ExcelGradientVariants.ShadingVariants_1

  ' Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to format top and bottom rank values in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Conditional%20Formatting/Top%20to%20Bottom%20Rank/.NET/Top%20to%20Bottom%20Rank).

By executing the program, you will get the Excel file as below

![Top or Bottom conditional format](../Working-with-Conditional-Formatting_images/Working-with-Conditional-Formatting_img5.png)

N> **ITopBottom** **Rank** value should be in a range between 1 and 1000.

### Top/Bottom ‘n’% rank values

The following code example illustrates how to format top 50 percentage rank values from the given data range using [ITopBottom](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ITopBottom.html) [Type](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ITopBottom.html#Syncfusion_XlsIO_ITopBottom_Type), [Rank](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ITopBottom.html#Syncfusion_XlsIO_ITopBottom_Rank) and [Percent](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ITopBottom.html#Syncfusion_XlsIO_ITopBottom_Percent) properties in XlsIO

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]"  playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Conditional%20Formatting/Top%20To%20Bottom%20Percent/.NET/Top%20To%20Bottom%20Percent/Top%20To%20Bottom%20Percent/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Applying conditional formatting to "N6:N35".
	IConditionalFormats formats = worksheet.Range["N6:N35"].ConditionalFormats;
	IConditionalFormat format = formats.AddCondition();

	//Applying top or bottom rule in the conditional formatting.
	format.FormatType = ExcelCFType.TopBottom;
	ITopBottom topBottom = format.TopBottom;

	//Set type as Bottom for TopBottom rule.
	topBottom.Type = ExcelCFTopBottomType.Bottom;

	//Set true to Percent property for TopBottom rule.
	topBottom.Percent = true;

	//Set rank value for the TopBottom rule.
	topBottom.Rank = 50;

	//Set color for Conditional Formattting.
	format.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(51, 153, 102);

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Chart.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  //Applying conditional formatting to "N6:N35".
  IConditionalFormats conditionalFormats1 = worksheet.Range["N6:N35"].ConditionalFormats;
  IConditionalFormat conditionalFormat1 = conditionalFormats1.AddCondition();

  //Applying top or bottom rule in the conditional formatting.
  conditionalFormat1.FormatType = ExcelCFType.TopBottom;
  ITopBottom topBottom1 = conditionalFormat1.TopBottom;

  //Set type as Bottom for TopBottom rule.
  topBottom1.Type = ExcelCFTopBottomType.Bottom;

  //Set true to Percent property for TopBottom rule.
  topBottom1.Percent = true;

  //Set rank value for the TopBottom rule.
  topBottom1.Rank = 50;

  //Set solid color conditional formatting for TopBottom rule.
  conditionalFormat1.FillPattern = ExcelPattern.Solid;
  conditionalFormat1.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(51, 153, 102);

  //Applying conditional formatting to "M6:M35".
  IConditionalFormats conditionalFormats2 = worksheet.Range["M6:M35"].ConditionalFormats;
  IConditionalFormat conditionalFormat2 = conditionalFormats2.AddCondition();

  //Applying top or bottom rule in the conditional formatting.
  conditionalFormat2.FormatType = ExcelCFType.TopBottom;
  ITopBottom topBottom2 = conditionalFormat2.TopBottom;

  //Set type as Top for TopBottom rule.
  topBottom2.Type = ExcelCFTopBottomType.Bottom;

  //Set true to Percent property for TopBottom rule.
  topBottom2.Percent = true;

  //Set rank value for the TopBottom rule.
  topBottom2.Rank = 20;

  //Set gradient color conditional formatting for TopBottom rule.
  conditionalFormat2.FillPattern = ExcelPattern.Gradient;
  conditionalFormat2.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(130, 60, 12);
  conditionalFormat2.ColorRGB = Syncfusion.Drawing.Color.FromArgb(255, 255, 0);
  conditionalFormat2.GradientStyle = ExcelGradientStyle.Horizontal;
  conditionalFormat2.GradientVariant = ExcelGradientVariants.ShadingVariants_1;

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  ' Applying conditional formatting to "N6:N35".
  Dim conditionalFormats1 As IConditionalFormats = worksheet.Range("N6:N35").ConditionalFormats
  Dim conditionalFormat1 As IConditionalFormat = conditionalFormats1.AddCondition()

  ' Applying top or bottom rule in the conditional formatting.
  conditionalFormat1.FormatType = ExcelCFType.TopBottom
  Dim topBottom1 As ITopBottom = conditionalFormat1.TopBottom

  ' Set type as Bottom for TopBottom rule.
  topBottom1.Type = ExcelCFTopBottomType.Bottom

  ' Set true to Percent property for TopBottom rule.
  topBottom1.Percent = True

  ' Set rank value for the TopBottom rule.
  topBottom1.Rank = 50

  ' Set solid color conditional formatting for TopBottom rule.
  conditionalFormat1.FillPattern = ExcelPattern.Solid
  conditionalFormat1.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(51, 153, 102)

  ' Applying conditional formatting to "M6:M35".
  Dim conditionalFormats2 As IConditionalFormats = worksheet.Range("M6:M35").ConditionalFormats
  Dim conditionalFormat2 As IConditionalFormat = conditionalFormats2.AddCondition()

  ' Applying top or bottom rule in the conditional formatting.
  conditionalFormat2.FormatType = ExcelCFType.TopBottom
  Dim topBottom2 As ITopBottom = conditionalFormat2.TopBottom

  ' Set type as Bottom for TopBottom rule.
  topBottom2.Type = ExcelCFTopBottomType.Bottom

  ' Set true to Percent property for TopBottom rule.
  topBottom2.Percent = True

  ' Set rank value for the TopBottom rule.
  topBottom2.Rank = 20

  ' Set gradient color conditional formatting for TopBottom rule.
  conditionalFormat2.FillPattern = ExcelPattern.Gradient
  conditionalFormat2.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(130, 60, 12)
  conditionalFormat2.ColorRGB = Syncfusion.Drawing.Color.FromArgb(255, 255, 0)
  conditionalFormat2.GradientStyle = ExcelGradientStyle.Horizontal
  conditionalFormat2.GradientVariant = ExcelGradientVariants.ShadingVariants_1

  ' Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to format top and bottom rank percentage in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Conditional%20Formatting/Top%20To%20Bottom%20Percent/.NET/Top%20To%20Bottom%20Percent).

By executing the program, you will get the Excel file as below

![Top or Bottom conditional format](../Working-with-Conditional-Formatting_images/Working-with-Conditional-Formatting_img6.png)

N> **ITopBottom** **Rank** value should be in a range between 1 and 100 when set true to **Percent** property.

## Format Above or Below Average Values

Above/Below average rule in conditional formatting is used to highlight the cells which contains above/below the average values in a data range. Top/Bottom conditional formatting rule can be created and customized using the [IAboveBelowAverage](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IAboveBelowAverage.html) interface in XlsIO.

The properties of **IAboveBelowAverage** are:

* **AverageType** - Specifies whether the conditional formatting rule looks for cell values that are above average or below average or standard deviation.
* **StdDevValue** - Specifies standard deviation number for **AboveBelowAverage** conditional formatting rule.

The following code example illustrates shows how to format a range with values that are below average using **IAboveBelowAverage** [AverageType](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IAboveBelowAverage.html#Syncfusion_XlsIO_IAboveBelowAverage_AverageType) property in XlsIO.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]"  playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Conditional%20Formatting/Above%20and%20Below%20Average/.NET/Above%20and%20Below%20Average/Above%20and%20Below%20Average/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Applying conditional formatting to "M6:M35"
	IConditionalFormats formats = worksheet.Range["M6:M35"].ConditionalFormats;
	IConditionalFormat format = formats.AddCondition();

	//Applying above or below average rule in the conditional formatting
	format.FormatType = ExcelCFType.AboveBelowAverage;
	IAboveBelowAverage aboveBelowAverage = format.AboveBelowAverage;

	//Set AverageType as Below for AboveBelowAverage rule.
	aboveBelowAverage.AverageType = ExcelCFAverageType.Below;

	//Set color for Conditional Formattting.
	format.FontColorRGB = Syncfusion.Drawing.Color.FromArgb(255, 255, 255);
	format.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(166, 59, 38);

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/AboveAndBelowAverage.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = workbook = application.Workbooks.Open("CFTemplate.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  //Applying conditional formatting to "M6:M35"
  IConditionalFormats formats = worksheet.Range["M6:M35"].ConditionalFormats;
  IConditionalFormat format = formats.AddCondition();

  //Applying above or below average rule in the conditional formatting
  format.FormatType = ExcelCFType.AboveBelowAverage;
  IAboveBelowAverage aboveBelowAverage = format.AboveBelowAverage;

  //Set AverageType as Below for AboveBelowAverage rule.
  aboveBelowAverage.AverageType = ExcelCFAverageType.Below;

  //Set color for Conditional Formattting.
  format.FontColorRGB = System.Drawing.Color.FromArgb(255, 255, 255);
  format.BackColorRGB = System.Drawing.Color.FromArgb(166, 59, 38);

  //Saves the Excel
  workbook.SaveAs("AboveBelowAverage.xlsx");   
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("CFTemplate.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Applying conditional formatting to "M6:M35"
  IConditionalFormats formats = worksheet.Range["M6:M35"].ConditionalFormats;
  IConditionalFormat format = formats.AddCondition();

  'Applying above or below average rule in the conditional formatting
  format.FormatType = ExcelCFType.AboveBelowAverage;
  IAboveBelowAverage aboveBelowAverage = format.AboveBelowAverage;

  'Set AverageType as Below for AboveBelowAverage rule.
  aboveBelowAverage.AverageType = ExcelCFAverageType.Below;

  'Set color for Conditional Formattting.
  format.FontColorRGB = System.Drawing.Color.FromArgb(255, 255, 255);
  format.BackColorRGB = System.Drawing.Color.FromArgb(166, 59, 38);

  'Saves the Excel
  workbook.SaveAs("AboveBelowAverage.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to format above and below average values in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Conditional%20Formatting/Above%20and%20Below%20Average/.NET/Above%20and%20Below%20Average).

By executing the program, you will get the Excel file as below

![Above or Below Average conditional format](../Working-with-Conditional-Formatting_images/Working-with-Conditional-Formatting_img7.png)

### Above or Below Standard Deviation values

The following code example illustrates how to format a range with values above standard deviation, using [IAboveBelowAverage](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IAboveBelowAverage.html) [AverageType](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IAboveBelowAverage.html#Syncfusion_XlsIO_IAboveBelowAverage_AverageType) and [StdDevValue](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IAboveBelowAverage.html#Syncfusion_XlsIO_IAboveBelowAverage_StdDevValue) properties in XlsIO.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]"  playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Conditional%20Formatting/Above%20and%20Below%20Standard%20Deviation/.NET/Above%20and%20Below%20Standard%20Deviation/Above%20and%20Below%20Standard%20Deviation/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Applying conditional formatting to "M6:M35"
	IConditionalFormats formats = worksheet.Range["M6:M35"].ConditionalFormats;
	IConditionalFormat format = formats.AddCondition();

	//Applying above or below average rule in the conditional formatting
	format.FormatType = ExcelCFType.AboveBelowAverage;
	IAboveBelowAverage aboveBelowAverage = format.AboveBelowAverage;

	//Set AverageType as AboveStdDev for AboveBelowAverage rule.
	aboveBelowAverage.AverageType = ExcelCFAverageType.AboveStdDev;

	//Set value to StdDevValue property for AboveBelowAverage rule.
	aboveBelowAverage.StdDevValue = 1;

	//Set color for Conditional Formattting.
	format.FontColorRGB = Syncfusion.Drawing.Color.FromArgb(255, 255, 255);
	format.BackColorRGB = Syncfusion.Drawing.Color.FromArgb(166, 59, 38);

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/AboveAndBelowStandardDeviation.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = workbook = application.Workbooks.Open("CFTemplate.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  //Applying conditional formatting to "M6:M35"
  IConditionalFormats formats = worksheet.Range["M6:M35"].ConditionalFormats;
  IConditionalFormat format = formats.AddCondition();

  //Applying above or below average rule in the conditional formatting
  format.FormatType = ExcelCFType.AboveBelowAverage;
  IAboveBelowAverage aboveBelowAverage = format.AboveBelowAverage;

  //Set AverageType as AboveStdDev for AboveBelowAverage rule.
  aboveBelowAverage.AverageType = ExcelCFAverageType.AboveStdDev;

  //Set value to StdDevValue property for AboveBelowAverage rule.
  aboveBelowAverage.StdDevValue = 1;

  //Set color for Conditional Formattting.
  format.FontColorRGB = System.Drawing.Color.FromArgb(255, 255, 255);
  format.BackColorRGB = System.Drawing.Color.FromArgb(166, 59, 38);

  //Saves the Excel
  workbook.SaveAs("AboveBelowAverage.xlsx");   
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("CFTemplate.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
	
  'Applying conditional formatting to "M6:M35"
  IConditionalFormats formats = worksheet.Range["M6:M35"].ConditionalFormats;
  IConditionalFormat format = formats.AddCondition();

  'Applying above or below average rule in the conditional formatting
  format.FormatType = ExcelCFType.AboveBelowAverage;
  IAboveBelowAverage aboveBelowAverage = format.AboveBelowAverage;

  'Set AverageType as AboveStdDev for AboveBelowAverage rule.
  aboveBelowAverage.AverageType = ExcelCFAverageType.AboveStdDev

  'Set value to StdDevValue property for AboveBelowAverage rule.
  aboveBelowAverage.StdDevValue = 1

  'Set color for Conditional Formattting.
  format.FontColorRGB = System.Drawing.Color.FromArgb(255, 255, 255);
  format.BackColorRGB = System.Drawing.Color.FromArgb(166, 59, 38);

  'Saves the Excel
  workbook.SaveAs("AboveBelowAverage.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to format above and below standard deviation values in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Conditional%20Formatting/Above%20and%20Below%20Standard%20Deviation/.NET/Above%20and%20Below%20Standard%20Deviation).

By executing the program, you will get the Excel file as below

![Above or Below Average conditional format](../Working-with-Conditional-Formatting_images/Working-with-Conditional-Formatting_img8.png)

N> **IAboveBelowAverage** **StdDevValue** can be applied only if the **AverageType** is **AboveStdDev** or **BelowStdDev**. The **StdDevValue** value should be in a range between 1 and 3.