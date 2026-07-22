---
layout: post
title: Cell Customization in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Cell Customization support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Cell Customization in WPF Spreadsheet (SfSpreadsheet)

SfSpreadsheet supports cell customization through a data template, allowing any built-in WPF control or custom control to be hosted in a cell. Use this approach to embed interactive UI such as buttons, combo boxes, or expanders directly inside spreadsheet cells.

To customize a cell, follow these steps:

1. Create a DataTemplate.
2. Derive from the SpreadsheetColumn class.
3. Create a Custom Cell Renderer.
4. Associate the Custom Cell Renderer with SpreadsheetGrid.

**Create a DataTemplate**

Create a custom DataTemplate (for example, a Button template) in MainWindow.xaml. Define the template as a resource on the window (or in App.xaml) so it can be referenced by key from code.

{% tabs %}
{% highlight xaml %}
<DataTemplate x:Key="ButtonTemplate" >
<Expander x:Name="Button" ExpandDirection="Right" IsExpanded="True" 
   Expanded="Button_Expanded" Collapsed="Button_Collapsed"/>
</DataTemplate>
{% endhighlight %}
{% endtabs %}

**Derive from the SpreadsheetColumn Class**

Create an extension class `SpreadsheetColumnExt` that inherits from the [SpreadsheetColumn](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetColumn.html) class, which holds all the operations related to cells.

Override the `OnUpdateColumn` method, which updates the column properties (cell types, renderer, cell element, and so on), and retrieve the data template used to display content in the cell.

{% tabs %}
{% highlight c# %}
public class SpreadsheetColumnExt : SpreadsheetColumn
{

    public SpreadsheetColumnExt(SpreadsheetGrid grid) : base(grid)
    {

    }

// Gets or sets the DataTemplate for the cell

public DataTemplate CellItemTemplate
{
  get;
  set;
}

// Gets or sets the DataTemplate for the cell
public DataTemplate CellEditTemplate
{
  get;
  set;
}

//Update the cell with the defined template

protected override void OnUpdateColumn(out FrameworkElement oldElement)
{

   if (RowIndex == 3 && ColumnIndex == 6)
   {
    this.CellItemTemplate = Application.Current.MainWindow.Resources["ButtonTemplate"] as DataTemplate;
    this.CellEditTemplate = Application.Current.MainWindow.Resources["ButtonTemplate"] as DataTemplate;
   }
base.OnUpdateColumn(out oldElement);
}
}
{% endhighlight %}
{% endtabs %}

**Create a Custom Cell Renderer**

Create a `SpreadsheetTemplateCellRenderer` class that inherits from the [SpreadsheetVirtualizingCellRendererBase](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.CellRenderer.SpreadsheetVirtualizingCellRendererBase-2.html) class to display the custom renderer element.

To initialize the display element, set the content template in the `OnInitializeDisplayElement` method; to initialize editing, set the content template in the `OnInitializeEditElement` method. Otherwise, the cells will load the default display and edit elements.

{% tabs %}
{% highlight c# %}
public class SpreadsheetTemplateCellRenderer : SpreadsheetVirtualizingCellRendererBase<ContentControl, ContentControl>
{

    public SpreadsheetTemplateCellRenderer()
    {
        SupportDrawingOptimization = false;
    }

//Update the cell style for display element

protected override void OnUpdateCellStyle(RowColumnIndex cellRowColumnIndex, ContentControl uiElement, SpreadsheetColumn column)
{
	
    if (uiElement.ContentTemplate == null)
    {
      uiElement.ContentTemplate = (column as SpreadsheetColumnExt).CellItemTemplate;
    }
    base.OnUpdateCellStyle(cellRowColumnIndex, uiElement, column);
}

//Update the cell style for edit element

protected override void OnUpdateEditCellStyle (RowColumnIndex cellRowColumnIndex, ContentControl uiElement, SpreadsheetColumn column)
{

    if (uiElement.ContentTemplate == null)
    {
      uiElement.ContentTemplate = (column as SpreadsheetColumnExt).CellEditTemplate;
    }
    base.OnUpdateEditCellStyle (cellRowColumnIndex, uiElement, column);
}

//To initialize the display element on the cell

protected override void OnInitializeDisplayElement(RowColumnIndex rowColumnIndex, ContentControl uiElement, SpreadsheetColumn column) 
{
    uiElement.ContentTemplate = (column as SpreadsheetColumnExt).CellItemTemplate;
}

//To initialize the edit element on the cell

protected override void OnInitializeEditElement(RowColumnIndex rowColumnIndex, ContentControl uiElement, SpreadsheetColumn column)
{      
    uiElement.ContentTemplate = (column as SpreadsheetColumnExt).CellEditTemplate;
}
}
{% endhighlight %}
{% endtabs %}

N> If you want to load the default edit element, you do not need to override the `OnInitializeEditElement` method.

**Associate the Custom Cell Renderer with SpreadsheetGrid**

To associate the custom cell renderer with [SpreadsheetGrid](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html), subscribe to the [WorkbookLoaded](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_WorkbookLoaded) event of `SfSpreadsheet` (in XAML or in code-behind after the control is initialized). In the handler, initialize the `SpreadsheetTemplateCellRenderer` and add it to the renderer collection.

Next, handle the [QueryRange](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGrid_QueryRange) event of `SpreadsheetGrid` and set the `CellType` of the particular range to "DataTemplate" to load the user-defined template.

{% tabs %}
{% highlight c# %}
void spreadsheet_WorkbookLoaded(object sender, WorkbookLoadedEventArgs args)
{
   var grid = spreadsheet.ActiveGrid;
   grid.CreateGridColumn = CreateSpreadsheetColumnExt;
   var renderer = new SpreadsheetTemplateCellRenderer();
   grid.CellRenderers.Add("DataTemplate", renderer);
   grid.QueryRange += grid_QueryRange;
}

//To access the SpreadsheetColumnExt

public GridColumn CreateSpreadsheetColumnExt(SfCellGrid grid)
{
   return new SpreadsheetColumnExt(grid as SpreadsheetGrid);
}

//To update the cell type
void grid_QueryRange(object sender, SpreadsheetQueryRangeEventArgs e)
{
 
  if (e.Cell.ColumnIndex == 6)
  {
    e.CellType = "DataTemplate";
    e.CellValue = "0";
    e.Handled = true;
  }
}
{% endhighlight %}
{% endtabs %}

For more details, see the [customization](https://www.syncfusion.com/downloads/support/directtrac/general/ze/Cell_Customization-850724053) sample.


N> See the [WPF Spreadsheet](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for an overview of its capabilities. You can also explore the [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos) on GitHub to see how to render and configure the spreadsheet.