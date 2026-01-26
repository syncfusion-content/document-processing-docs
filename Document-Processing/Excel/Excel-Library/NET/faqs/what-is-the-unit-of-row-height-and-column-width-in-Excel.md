--- 
title: Unit of row height and column width in Excel | Syncfusion 
description: This page explains about the default unit of measurement for row height and column width in Excel using Syncfusion .NET Excel library (XlsIO).
platform: document-processing 
control: XlsIO 
documentation: UG 
--- 

# What is the unit of row height and column width in Excel?

By default, XlsIO uses **points** as the unit of measurement for both row height and column width.

Use <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_SetColumnWidth_System_Int32_System_Double_">SetColumnWidth</a>
 and <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_SetRowHeight_System_Int32_System_Double_">SetRowHeight</a> to set dimensions in points. 

Use <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_GetColumnWidth_System_Int32_">GetColumnWidth</a> and <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_GetRowHeight_System_Int32_">GetRowHeight</a> to retrieve dimensions in points. 

If you need pixel values, XlsIO provides pixel based APIs:  <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_GetColumnWidthInPixels_System_Int32_">GetColumnWidthInPixels</a>, <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_GetRowHeightInPixels_System_Int32_">GetRowHeightInPixels</a>, <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_SetColumnWidthInPixels_System_Int32_System_Int32_">SetColumnWidthInPixels</a>, <a href="http://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_SetRowHeightInPixels_System_Int32_System_Double_">SetRowHeightInPixels</a>.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Set column width in points
sheet.SetColumnWidth(1, 20);

//Get column width in points
var widthPoints = sheet.GetColumnWidth(1);
Console.WriteLine("Column width in points: " + widthPoints);

//Set column width in pixels
sheet.SetColumnWidthInPixels(1, 160);

//Get column width in pixels
var widthPixels = sheet.GetColumnWidthInPixels(1);
Console.WriteLine("Column width in pixels: " + widthPixels);

//Set row height in points
sheet.SetRowHeight(1, 15);

//Get row height in points
var heightPoints = sheet.GetRowHeight(1);
Console.WriteLine("Row height in points: " + heightPoints);

//Set row height in pixels
sheet.SetRowHeightInPixels(1, 40);

//Get row height in pixels
var heightPixels = sheet.GetRowHeightInPixels(1);
Console.WriteLine("Row height in pixels: " + heightPixels);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Set column width in points
sheet.SetColumnWidth(1, 20);

//Get column width in points
var widthPoints = sheet.GetColumnWidth(1);
Console.WriteLine("Column width in points: " + widthPoints);

//Set column width in pixels
sheet.SetColumnWidthInPixels(1, 160);

//Get column width in pixels
var widthPixels = sheet.GetColumnWidthInPixels(1);
Console.WriteLine("Column width in pixels: " + widthPixels);

//Set row height in points
sheet.SetRowHeight(1, 15);

//Get row height in points
var heightPoints = sheet.GetRowHeight(1);
Console.WriteLine("Row height in points: " + heightPoints);

//Set row height in pixels
sheet.SetRowHeightInPixels(1, 40);

//Get row height in pixels
var heightPixels = sheet.GetRowHeightInPixels(1);
Console.WriteLine("Row height in pixels: " + heightPixels);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Set column width in points
sheet.SetColumnWidth(1, 20)

'Get column width in points
Dim widthPoints As Integer = sheet.GetColumnWidth(1)
Console.WriteLine("Column width in points: " & widthPoints)

'Set column width in pixels
sheet.SetColumnWidthInPixels(1, 160)

'Get column width in pixels
Dim widthPixels As Integer = sheet.GetColumnWidthInPixels(1)
Console.WriteLine("Column width in pixels: " & widthPixels)

'Set row height in points
sheet.SetRowHeight(1, 15)

'Get row height in points
Dim heightPoints As Integer = sheet.GetRowHeight(1)
Console.WriteLine("Row height in points: " & heightPoints)

'Set row height in pixels
sheet.SetRowHeightInPixels(1, 40)

'Get row height in pixels
Dim heightPixels As Integer = sheet.GetRowHeightInPixels(1)
Console.WriteLine("Row height in pixels: " & heightPixels)
{% endhighlight %}
{% endtabs %}