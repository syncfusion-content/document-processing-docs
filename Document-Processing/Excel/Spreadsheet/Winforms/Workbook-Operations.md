---
layout: post
title: Workbook Operations in Windows Forms Spreadsheet control | Syncfusion®
description: Learn how to create, open, and save Excel workbooks, as well as how to display charts and sparklines in Syncfusion® Windows Forms Spreadsheet.
platform: Windows Forms
control: Spreadsheet
documentation: ug
---

# Workbook Operations in Windows Forms Spreadsheet

## Creating a new Excel Workbook

A new workbook can be created by using a [Create](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Create_System_Int32_) method with specified number of worksheets. By default, a workbook will be created with single worksheet.

{% tabs %}
{% highlight c# %}

spreadsheet.Create(2);

{% endhighlight %}
{% endtabs %}

## Opening an existing Excel Workbook

The Excel Workbook can be opened in Spreadsheet using the [Open](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Open_Syncfusion_XlsIO_IWorkbook_) method in various ways,

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

![Opening an existing excel workbook in WindowsForms Spreadsheet](getting-started_images/windowsforms-spreadsheet-opening-an-existing-excel-workbook.png)


Opening Excel File in Spreadsheet
   {:.caption}

## Saving the Excel Workbook

The Excel workbook can be saved in Spreadsheet using [Save](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Save) method. If the workbook already exists in the system drive, it will be saved in the same location, otherwise Save Dialog box opens to save the workbook in user specified location. 

{% tabs %}
{% highlight c# %}

spreadsheet.Save();

{% endhighlight %}
{% endtabs %}

You can also use [SaveAs](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_SaveAs) method directly to save the existing excel file with modifications.

The `SaveAs` method in Spreadsheet can be used in various ways,

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

## Displaying charts and sparklines

For importing charts and sparklines in Spreadsheet, add the following assembly as reference into the application.
 
Assembly: **Syncfusion.SpreadsheetHelper.Windows.dll** 

### Charts
 
Create an instance of Syncfusion.Windows.Forms.SpreadsheetHelper.[GraphicChartCellRenderer](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.SpreadsheetHelper.GraphicChartCellRenderer.html) and add that renderer into [GraphicCellRenderers](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicModel.html#Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_GraphicModel_GraphicCellRenderers) collection by using the helper method [AddGraphicChartCellRenderer](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicCellHelper.html#Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_GraphicCellHelper_AddGraphicChartCellRenderer_Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_IGraphicCellRenderer_) which is available under the namespace `Syncfusion.Windows.Forms.Spreadsheet.GraphicCells`. 

{% tabs %}
{% highlight c# %}

public Form1()
{
    InitializeComponent();
  
    //For importing charts,
    this.spreadsheet.AddGraphicChartCellRenderer(new GraphicChartCellRenderer());
}

{% endhighlight %}
{% endtabs %}

### Sparklines

Create an instance of Syncfusion.Windows.Forms.SpreadsheetHelper.[SparklineCellRenderer](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.SpreadsheetHelper.SparklineCellRenderer.html) and add that renderer into Spreadsheet by using the helper method [AddSparklineCellRenderer](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicCellHelper.html#Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_GraphicCellHelper_AddSparklineCellRenderer_Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Syncfusion_Windows_Forms_Spreadsheet_CellRenderer_ISpreadsheetCellRenderer_) which is available under the namespace `Syncfusion.Windows.Forms.Spreadsheet.GraphicCells`.

{% tabs %}
{% highlight c# %}

public Form1()
{
    InitializeComponent();
      
    //For importing sparklines,
    this.spreadsheet.AddSparklineCellRenderer(new SparklineCellRenderer());
}

{% endhighlight %}
{% endtabs %}

N> You can refer to our [WinForms Spreadsheet](https://www.syncfusion.com/winforms-ui-controls/spreadsheet) control feature tour page for its groundbreaking feature representations. You can also explore our [WinForms Spreadsheet example](https://github.com/syncfusion/winforms-demos/tree/master/spreadsheet) that shows you how to render and configure the Spreadsheet.