---
layout: post
title: Custom Formula in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Custom Formula support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Custom Formula in WPF Spreadsheet (SfSpreadsheet)

SfSpreadsheet allows you to add custom formulas to its function library by using the [AddFunction](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.FormulaEngine.html#Syncfusion_UI_Xaml_CellGrid_FormulaEngine_AddFunction_System_String_Syncfusion_UI_Xaml_CellGrid_FormulaEngine_LibraryFunction_) method of [FormulaEngine](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.FormulaEngine.html).

{% tabs %}
{% highlight c# %}
spreadsheet.WorkbookLoaded += spreadsheet_WorkbookLoaded;

void spreadsheet_WorkbookLoaded(object sender, WorkbookLoadedEventArgs args)
{
    foreach (var grid in args.GridCollection)
        AddCustomFormula(grid); 
  
  //Computing the formula at runtime

   var range = spreadsheet.ActiveSheet.Range["B2"];
   spreadsheet.ActiveGrid.SetCellValue(range,"=Find(sample)");
}  

private void AddCustomFormula(SpreadsheetGrid grid)
{

  // Add a formula named Find to the Library.
   grid.FormulaEngine.AddFunction("Find", new FormulaEngine.LibraryFunction(ComputeLength));      
}    

//Implementation of formula
    
public string ComputeLength(string range)
{
    // Calculate the length of the supplied string.
    return range.Length.ToString();
}
{% endhighlight %}
{% endtabs %}


N> After the formula is registered, you can also type `=Length("sample")` directly into a cell instead of calling `SetCellValue`. For more information, see the [WPF Spreadsheet Editor](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour or browse the [WPF Spreadsheet examples on GitHub](https://github.com/syncfusion/wpf-demos).