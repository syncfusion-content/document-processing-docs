---
layout: post
title: Custom Formula in UWP Spreadsheet control | Syncfusion®
description: Learn here all about Custom Formula support in Syncfusion® UWP Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Custom Formula in UWP Spreadsheet (SfSpreadsheet)

SfSpreadsheet allows you to add custom formulas to its built-in function library. You can register a custom formula with the SfSpreadsheet by using the `AddFunction` method of `FormulaEngine`.

{% tabs %}
{% highlight c# %}

spreadsheet.WorkbookLoaded += spreadsheet_WorkbookLoaded;

void spreadsheet_WorkbookLoaded(object sender, WorkbookLoadedEventArgs args)
{

  foreach (var grid in args.GridCollection)
    AddCustomFormula(grid); 
  
  //Computing the formula at runtime
   var range = spreadsheet.ActiveSheet.Range["B2"];
   spreadsheet.ActiveGrid.SetCellValue(range,"=FindLength(Sample)");
}  

private void AddCustomFormula(SpreadsheetGrid grid)
{

  // Adds a formula named FindLength to the Library.
   grid.FormulaEngine.AddFunction("FindLength", new FormulaEngine.LibraryFunction(ComputeLength));
}    

//Implementation of formula
    
public string ComputeLength(string range)
{

  // Returns the length of the supplied string.
    return range.Length.ToString();
}

{% endhighlight %}
{% endtabs %}
