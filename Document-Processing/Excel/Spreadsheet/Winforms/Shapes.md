---
layout: post
title: Shapes in Windows Forms Spreadsheet control | Syncfusion®
description: Learn about Shapes support in Syncfusion® Windows Forms Spreadsheet control, its elements and more details.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Shapes in Windows Forms Spreadsheet
 This section explains how to import charts, sparklines, pictures and textboxes in Spreadsheet control.

## Charts

Spreadsheet supports importing charts from Excel, which represent numeric data in a graphical format and make large quantities of data easier to understand.

To import charts in Spreadsheet, add the following assembly as a reference to the application.
 
Assembly: **Syncfusion.SpreadsheetHelper.Windows.dll** 
 
Create an instance of Syncfusion.Windows.Forms.SpreadsheetHelper.[GraphicChartCellRenderer](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.SpreadsheetHelper.GraphicChartCellRenderer.html) and register it with the [GraphicCellRenderers](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicModel.html#Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_GraphicModel_GraphicCellRenderers) collection using the helper method [AddGraphicChartCellRenderer](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicCellHelper.html#Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_GraphicCellHelper_AddGraphicChartCellRenderer_Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_IGraphicCellRenderer_) which is available under the namespace `Syncfusion.Windows.Forms.Spreadsheet.GraphicCells`. 

{% tabs %}
{% highlight c# %}

public Form1()
{
    InitializeComponent();
  
    // Registers the chart cell renderer for importing and displaying charts.
    this.spreadsheet.AddGraphicChartCellRenderer(new GraphicChartCellRenderer());
}

{% endhighlight %}
{% endtabs %}


### Adding charts at runtime

To add a chart in Spreadsheet at runtime, use the [AddChart](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicCellHelper.html#Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_GraphicCellHelper_AddChart_Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Syncfusion_XlsIO_IWorksheet_) method. You can also resize and reposition the chart.

{% tabs %}
{% highlight c# %}

var chart = spreadsheet.AddChart(spreadsheet.ActiveSheet);

object[] Y_values = new object[] { 200, 100, 100 };
object[] X_values = new object[] { "Total Income", "Expenses", "Profit" };

IChartSeries series = chart.Series.Add(ExcelChartType.Pie);

// Enters the X and Y values directly.
series.EnteredDirectlyValues = Y_values;
series.EnteredDirectlyCategoryLabels = X_values;

var shape = chart as ShapeImpl;

// Repositioning the chart
shape.Top = 200;
shape.Left = 200;

// Resizing the chart
shape.Height = 300;
shape.Width = 300;
{% endhighlight %}
{% endtabs %}

## Sparklines

For importing sparklines in Spreadsheet, add the following assembly as reference into the application.
 
Assembly: **Syncfusion.SpreadsheetHelper.Windows.dll** 

Create an instance of Syncfusion.Windows.Forms.SpreadsheetHelper.[SparklineCellRenderer](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.SpreadsheetHelper.SparklineCellRenderer.html) and register it with Spreadsheet using the helper method [AddSparklineCellRenderer](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicCellHelper.html#Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_GraphicCellHelper_AddSparklineCellRenderer_Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Syncfusion_Windows_Forms_Spreadsheet_CellRenderer_ISpreadsheetCellRenderer_) which is available under the namespace `Syncfusion.Windows.Forms.Spreadsheet.GraphicCells`.

{% tabs %}
{% highlight c# %}

public Form1()
{
    InitializeComponent();
      
    // Registers the sparkline cell renderer for importing and displaying sparklines.
    this.spreadsheet.AddSparklineCellRenderer(new SparklineCellRenderer());
}

{% endhighlight %}
{% endtabs %}

## Pictures

Spreadsheet supports importing images into SpreadsheetGrid. To add an image at runtime, use the [AddImage](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicCellHelper.html#Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_GraphicCellHelper_AddImage_Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Syncfusion_XlsIO_IWorksheet_Syncfusion_Windows_Forms_CellGrid_ScrollAxis_RowColumnIndex_System_IO_Stream_) method. You can also resize and reposition the image.

{% tabs %}
{% highlight c# %}

var worksheet = spreadsheet.ActiveSheet;
var stream = typeof(Form1).Assembly.GetManifestResourceStream("GraphicCellDemo.Data.Sample.jpg");
var shape = spreadsheet.AddImage(worksheet, new RowColumnIndex(5, 5), stream);

// Repositioning the picture
shape.Top = 200;
shape.Left = 200;

// Resizing the picture
shape.Height = 200;
shape.Width = 200;

{% endhighlight %}
{% endtabs %}

## Text Boxes

Spreadsheet supports importing RichText Box in `SpreadsheetGrid`. To add a text box at runtime, use the [AddTextBox](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicCellHelper.html#Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_GraphicCellHelper_AddTextBox_Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Syncfusion_XlsIO_IWorksheet_Syncfusion_Windows_Forms_CellGrid_ScrollAxis_RowColumnIndex_System_Drawing_Size_System_String_) method.

{% tabs %}
{% highlight c# %}

var rtfText = "{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang1033{\\fonttbl{\\f0\\fnil\\fcharset1 Calibri;}{\\f1\\fnil\\fcharset1 Calibri;}}{\\colortbl;\\red0\\green0\\blue0;\\red255\\green0\\blue0;}{\\f0\\fs22\\b\\cf1\\u83*\\u121*\\u110*\\u99*\\u102*\\u117*\\u115*\\u105*\\u111*\\u110*\\u32*\\b0}                           {\\f1\\fs22\\cf2\\u83*\\u111*\\u102*\\u116*\\u119*\\u97*\\u114*\\u101*\\u32*}{\\f1\\fs22\\cf1\\u80*\\u118*\\u116*\\u46*\\u32*\\u76*\\u116*\\u100*}}";
var textBox = spreadsheet.AddTextBox(spreadsheet.ActiveSheet, new RowColumnIndex(5, 5), new Size(200, 200), rtfText) as TextBoxShapeImpl;

// Repositioning the RichTextBox
textBox.Left = 200;
textBox.Top = 200;
         
{% endhighlight %}
{% endtabs %}

## Accessing the selected shapes

Spreadsheet allows you to access the selected shapes and modify their properties within `SpreadsheetGrid`.

{% tabs %}
{% highlight c# %}

var selectedShape = spreadsheet.ActiveGrid.GraphicModel.SelectedShapes;

for(int i = 0; i < selectedShape.Count ; i++)
{

    if(ExcelShapeType.Chart == selectedShape[i].ShapeType)
    {
        var chart = selectedShape[i] as IChart;
        chart.ChartArea.Fill.FillType = ExcelFillType.Gradient;
        chart.ChartArea.Fill.ForeColor = Color.Blue;
    }

    else if(ExcelShapeType.Picture == selectedShape[i].ShapeType)
    {
        var picture = selectedShape[i] as ShapeImpl;
        picture.Height = 100;
        picture.Width = 100;
    }
}
spreadsheet.ActiveGrid.GraphicModel.InvalidateGraphicObjects();
spreadsheet.ActiveGrid.GraphicModel.InvalidateGraphicVisual();

{% endhighlight %}
{% endtabs %}

## Selecting a shape programmatically

Users can select a shape programmatically by using [AddSelectedShapes](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicModel.html#Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_GraphicModel_AddSelectedShapes_Syncfusion_XlsIO_Implementation_Shapes_ShapeImpl_) method of [GraphicModel](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicModel.html) class.

{% tabs %}
{% highlight c# %}

var shape = spreadsheet.ActiveSheet.Shapes[2] as ShapeImpl;          
spreadsheet.ActiveGrid.GraphicModel.AddSelectedShapes(shape);

{% endhighlight %}
{% endtabs %}

## Clearing selection

Users can clear the selection from the shapes and move the selection to the grid using [ClearSelection](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.GraphicCells.GraphicModel.html#Syncfusion_Windows_Forms_Spreadsheet_GraphicCells_GraphicModel_ClearSelection) method of `GraphicModel` class.

{% tabs %}
{% highlight c# %}

spreadsheet.ActiveGrid.GraphicModel.ClearSelection();

{% endhighlight %}
{% endtabs %}
