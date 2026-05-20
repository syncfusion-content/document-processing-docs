---
layout: post
title: Workbook Operations in WPF Spreadsheet control | Syncfusion®
description: Learn how to create, open, and save Excel workbooks, as well as how to display charts and sparklines in Syncfusion® WPF Spreadsheet (SfSpreadsheet).
platform: wpf
control: SfSpreadsheet
documentation: ug
---

## Creating a new Excel Workbook

A new workbook can be created by using a [Create](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_Create_System_Int32_) method with specified number of worksheets. By default, a workbook will be created with single worksheet.

{% tabs %}
{% highlight c# %}
spreadsheet.Create(2);
{% endhighlight %}
{% endtabs %}

## Opening an existing Excel Workbook

The Excel Workbook can be opened in SfSpreadsheet using the [Open](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_Open_Syncfusion_XlsIO_IWorkbook_) method in various ways,

{% tabs %}
{% highlight c# %}
//Using Stream,
spreadsheet.Open (Stream file);

//Using String,
spreadsheet.Open (string file);

//Using Workbook,
spreadsheet.Open(IWorkbook workbook);
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}
spreadsheet.Open (@"..\..\Data\Outline.xlsx");
{% endhighlight %}
{% endtabs %}

![WPF Spreadsheet Excel File Opening](Getting-Started_images/wpf-spreadsheet-excel-file-opening.jpeg)

Opening Excel File in SfSpreadsheet
   {:.caption}

## Saving the Excel Workbook

The Excel workbook can be saved in SfSpreadsheet using [Save](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_Save) method. If the workbook already exists in the system drive, it will be saved in the same location, otherwise Save Dialog box opens to save the workbook in user specified location. 

{% tabs %}
{% highlight c# %}
spreadsheet.Save();
{% endhighlight %}
{% endtabs %}

You can also use [SaveAs](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_SaveAs) method directly to save the existing excel file with modifications.

The `SaveAs` method in SfSpreadsheet can be used in various ways,

{% tabs %}
{% highlight c# %}
//Using Stream,
spreadsheet.SaveAs (Stream file);

//Using String,
spreadsheet.SaveAs (string file);

//For Dialog box,
spreadsheet.SaveAs();
{% endhighlight %}
{% endtabs %}

## Displaying Charts and Sparklines

For importing charts and sparklines in SfSpreadsheet, add the following assembly as reference into the application.
 
Assembly: **Syncfusion.SfSpreadsheetHelper.WPF.dll**  

### Charts
 
Create an instance of Syncfusion.UI.Xaml.SpreadsheetHelper.[GraphicChartCellRenderer](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.SpreadsheetHelper.GraphicChartCellRenderer.html) and add that renderer into [GraphicCellRenderers](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.GraphicCells.GraphicModel.html#Syncfusion_UI_Xaml_Spreadsheet_GraphicCells_GraphicModel_GraphicCellRenderers) collection by using the helper method [AddGraphicChartCellRenderer](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.GraphicCells.GraphicCellHelper.html#Syncfusion_UI_Xaml_Spreadsheet_GraphicCells_GraphicCellHelper_AddGraphicChartCellRenderer_Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_Syncfusion_UI_Xaml_Spreadsheet_GraphicCells_IGraphicCellRenderer_) which is available under the namespace `Syncfusion.UI.Xaml.Spreadsheet.GraphicCells`. 

{% tabs %}
{% highlight c# %}
public MainWindow()
{
  InitializeComponent();
  
  //For importing charts,
  this.spreadsheet.AddGraphicChartCellRenderer(new GraphicChartCellRenderer());
}
{% endhighlight %}
{% endtabs %}

### Sparklines

Create an instance of Syncfusion.UI.Xaml.SpreadsheetHelper.[SparklineCellRenderer](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.SpreadsheetHelper.SparklineCellRenderer.html) and add that renderer into the Spreadsheet by using the helper method [AddSparklineCellRenderer](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.GraphicCells.GraphicCellHelper.html#Syncfusion_UI_Xaml_Spreadsheet_GraphicCells_GraphicCellHelper_AddSparklineCellRenderer_Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_Syncfusion_UI_Xaml_Spreadsheet_CellRenderer_ISpreadsheetCellRenderer_) which is available under the namespace `Syncfusion.UI.Xaml.Spreadsheet.GraphicCells`.

{% tabs %}
{% highlight c# %}
public MainWindow()
{
  InitializeComponent();
      
  //For importing sparklines,
  this.spreadsheet.AddSparklineCellRenderer(new SparklineCellRenderer());
}
{% endhighlight %}
{% endtabs %}


N> You can refer to our [WPF Spreadsheet](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos) to know how to render and configure the spreadsheet.