---
title: Working with Data Validation | Syncfusion
description: Learn how to create and remove data validation rules in an Excel worksheet using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---
# Working with Data Validation

Data validation restricts the values that can be entered in a cell based on rules that you define. Rules are applied in XlsIO through the [IDataValidation](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataValidation.html) interface, which exposes the following key members:

* **AllowType** – the validation type, set through the [ExcelDataType](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelDataType.html) enumerator (for example, `TextLength`, `Time`, `Integer`, `Date`, `Decimal`, `List`, `User`, or `Formula`).
* **CompareOperator** – the comparison operator, set through the [ExcelDataValidationComparisonOperator](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelDataValidationComparisonOperator.html) enumerator (`Between`, `Equal`, `NotEqual`, `GreaterThan`, `LessThan`, `GreaterThanOrEqual`, `LessThanOrEqual`).
* **FirstFormula** / **SecondFormula** – the threshold formulas (used with `Between` to define a range; otherwise only **FirstFormula** is required).
* **FirstDateTime** / **SecondDateTime** – the threshold date/time values when **AllowType** is `Date` or `Time`.
* **ListOfValues** – a hard-coded list of values for a dropdown when **AllowType** is `List`.
* **ShowErrorBox** / **ErrorBoxText** / **ErrorBoxTitle** – control the error shown when an invalid value is entered.
* **ShowPromptBox** / **PromptBoxText** / **IsPromptBoxVisible** – control the input prompt displayed when the cell is selected.

XlsIO supports the following validation types:

* **Text Length Validation**
* **Time Validation**
* **List Validation**
* **Number Validation**
* **Date Validation**
* **Custom Validation**
{% youtube "https://youtu.be/VFOBAiXM03o?si=vsIhBrVwIQ80FPKm" %}

## Text Length Validation

The following code snippet illustrates how to set text length validation.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Data%20Validation/Text%20Length%20Validation/.NET/Text%20Length%20Validation/Text%20Length%20Validation/Program.cs,180" %}
//Data validation for text length
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.TextLength;

//Text length should be less than 5 characters
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstFormula = "0";
validation.SecondFormula = "5";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Data validation for text length
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.TextLength;

//Text length should be less than 5 characters
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstFormula = "0";
validation.SecondFormula = "5";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Data validation for text length
Dim validation As IDataValidation = sheet.Range("A3").DataValidation
validation.AllowType = ExcelDataType.TextLength

'Text length should be less than 5 characters
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between
validation.FirstFormula = "0"
validation.SecondFormula = "5"
{% endhighlight %}
{% endtabs %}

A complete working example for text length data validation in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Data%20Validation/Text%20Length%20Validation/.NET/Text%20Length%20Validation).

## Time Validation

The following code snippet illustrates how to set time validation.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Data%20Validation/Time%20Validation/.NET/Time%20Validation/Time%20Validation/Program.cs,180" %}
//Data validation for time
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Time;

//Time between 10:00 and 12:00 o'clock
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstFormula = "10.00";
validation.SecondFormula = "12.00";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Data validation for time
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Time;

//Time between 10:00 and 12:00 o'clock
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstFormula = "10.00";
validation.SecondFormula = "12.00";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Data validation for time
Dim validation As IDataValidation = sheet.Range("A3").DataValidation
validation.AllowType = ExcelDataType.Time

'Time between 10:00 and 12:00 o'clock
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between
validation.FirstFormula = "10.00"
validation.SecondFormula = "12.00"
{% endhighlight %}
{% endtabs %}

A complete working example for time data validation in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Data%20Validation/Time%20Validation/.NET/Time%20Validation).  

## List Validation

The following code snippet illustrates how to set list validation.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Data%20Validation/List%20Validation/.NET/List%20Validation/List%20Validation/Program.cs,180" %}
//Data validation for list
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.ListOfValues = new string[] { "ListItem1", "ListItem2", "ListItem3" };
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Data validation for list
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.ListOfValues = new string[] { "ListItem1", "ListItem2", "ListItem3" };
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Data validation for list
Dim validation As IDataValidation = sheet.Range("A3").DataValidation
validation.ListOfValues = New String() {"ListItem1", "ListItem2", "ListItem3"}
{% endhighlight %}
{% endtabs %}

A complete working example for list data validation in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Data%20Validation/List%20Validation/.NET/List%20Validation). 

N> The [ListOfValues](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataValidation.html#Syncfusion_XlsIO_IDataValidation_ListOfValues) property should be used when the values in the Data Validation list are entered manually whose limit is only 255 characters including separators.

### List Validation with User-defined Range

The following code snippet illustrates how to set list validation for a user-defined range.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Data%20Validation/UserDefinedValidation/.NET/UserDefinedValidation/UserDefinedValidation/Program.cs,180" %}
//Data validation for the user-defined range
IDataValidation validation = worksheet.Range["C3"].DataValidation;
validation.AllowType = ExcelDataType.User;
validation.FirstFormula = "=Sheet1!$B$1:$B$3";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Data validation for the user-defined range
IDataValidation validation = worksheet.Range["C3"].DataValidation;
validation.AllowType = ExcelDataType.User;
validation.FirstFormula = "=Sheet1!$B$1:$B$3";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Data validation for the user-defined range
Dim validation As IDataValidation = worksheet.Range("C3").DataValidation
validation.AllowType = ExcelDataType.User
validation.FirstFormula = "=Sheet1!$B$1:$B$3"
{% endhighlight %}
{% endtabs %}

A complete working example of list validation for a user-defined range in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Data%20Validation/UserDefinedValidation/.NET/UserDefinedValidation">this GitHub page</a>.

## Number Validation

The following code snippet illustrates how to set number validation.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Data%20Validation/Number%20Validation/.NET/Number%20Validation/Number%20Validation/Program.cs,180" %}
//Data validation for number
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Integer;

//Value between 0 and 10
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstFormula = "0";
validation.SecondFormula = "10";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Data validation for number
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Integer;

//Value between 0 and 10
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstFormula = "0";
validation.SecondFormula = "10";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Data validation for number
Dim validation As IDataValidation = sheet.Range("A3").DataValidation
validation.AllowType = ExcelDataType.Integer

'Value between 0 and 10
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between
validation.FirstFormula = "0"
validation.SecondFormula = "10"
{% endhighlight %}
{% endtabs %}

A complete working example for number data validation in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Data%20Validation/Number%20Validation/.NET/Number%20Validation). 

## Date Validation

The following code snippet illustrates how to set date validation.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Data%20Validation/Date%20Validation/.NET/Date%20Validation/Date%20Validation/Program.cs,180" %}
//Data validation for date
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Date;

//Date between 10/5/2003 and 10/5/2004
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstDateTime = new DateTime(2003, 5, 10);
validation.SecondDateTime = new DateTime(2004, 5, 10);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Data validation for date
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Date;

//Date between 10/5/2003 and 10/5/2004
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstDateTime = new DateTime(2003, 5, 10);
validation.SecondDateTime = new DateTime(2004, 5, 10);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Data validation for date
Dim validation As IDataValidation = sheet.Range("A3").DataValidation
validation.AllowType = ExcelDataType.Date

'Date between 10/5/2003 and 10/5/2004
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between
validation.FirstDateTime = New DateTime(2003, 5, 10)
validation.SecondDateTime = New DateTime(2004, 5, 10)
{% endhighlight %}
{% endtabs %}

A complete working example for date data validation in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Data%20Validation/Date%20Validation/.NET/Date%20Validation).   

## Custom Validation

Custom validation is set with [AllowType](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataValidation.html#Syncfusion_XlsIO_IDataValidation_AllowType) set to **Formula** and the rule expressed as a formula in **FirstFormula**. The formula must evaluate to `TRUE` for the value to be accepted. The following code snippet illustrates how to set custom validation.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Data validation for custom data
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Formula;
validation.FirstFormula = "=A1>10";
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Data validation for custom data
IDataValidation validation = sheet.Range["A3"].DataValidation;
validation.AllowType = ExcelDataType.Formula;
validation.FirstFormula = "=A1>10";
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Data validation for custom data
Dim validation As IDataValidation = sheet.Range("A3").DataValidation
validation.AllowType = ExcelDataType.Formula
validation.FirstFormula = "=A1>10"
{% endhighlight %}
{% endtabs %}

The following code example shows all the data validation types discussed previously combined in a single program.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Data Validation for Text Length
  IDataValidation txtLengthValidation = worksheet.Range["A3"].DataValidation;
  worksheet.Range["A1"].Text = "Enter the Text in A3";
  worksheet.Range["A1"].AutofitColumns();
  txtLengthValidation.AllowType = ExcelDataType.TextLength;
  txtLengthValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  txtLengthValidation.FirstFormula = "0";
  txtLengthValidation.SecondFormula = "5";

  //Shows the error message
  txtLengthValidation.ShowErrorBox = true;
  txtLengthValidation.ErrorBoxText = "Text length should be less than 5 characters";
  txtLengthValidation.ErrorBoxTitle = "ERROR";
  txtLengthValidation.PromptBoxText = "Data validation for text length";
  txtLengthValidation.ShowPromptBox = true;

  //Data Validation for the Time
  IDataValidation timeValidation = worksheet.Range["B3"].DataValidation;
  worksheet.Range["B1"].Text = "Enter the time between 10:00 and 12:00 'o Clock in B3";
  worksheet.Range["B1"].AutofitColumns();
  timeValidation.AllowType = ExcelDataType.Time;
  timeValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  timeValidation.FirstFormula = "10.00";
  timeValidation.SecondFormula = "12.00";

  //Shows the error message
  timeValidation.ShowErrorBox = true;
  timeValidation.ErrorBoxText = "Enter a correct time";
  timeValidation.ErrorBoxTitle = "ERROR";
  timeValidation.PromptBoxText = "Data validation for time";
  timeValidation.ShowPromptBox = true;

  //Data Validation for the List
  IDataValidation listValidation = worksheet.Range["C3"].DataValidation;
  worksheet.Range["C1"].Text = "Data Validation List in C3";
  worksheet.Range["C1"].AutofitColumns();
  listValidation.ListOfValues = new string[] { "ListItem1", "ListItem2", "ListItem3" };

  //Shows the error message
  listValidation.ErrorBoxText = "Choose the value from the list";
  listValidation.ErrorBoxTitle = "ERROR";
  listValidation.PromptBoxText = "Data validation for list";
  listValidation.IsPromptBoxVisible = true;
  listValidation.ShowPromptBox = true;

  //Data Validation for Numbers
  IDataValidation numberValidation = worksheet.Range["D3"].DataValidation;
  worksheet.Range["D1"].Text = "Enter the Number in D3";
  worksheet.Range["D1"].AutofitColumns();
  numberValidation.AllowType = ExcelDataType.Integer;
  numberValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  numberValidation.FirstFormula = "0";
  numberValidation.SecondFormula = "10";

  //Shows the error message
  numberValidation.ShowErrorBox = true;
  numberValidation.ErrorBoxText = "Enter a value between 0 and 10";
  numberValidation.ErrorBoxTitle = "ERROR";
  numberValidation.PromptBoxText = "Data validation for numbers";
  numberValidation.ShowPromptBox = true;

  //Data Validation for Date
  IDataValidation dateValidation = worksheet.Range["E3"].DataValidation;
  worksheet.Range["E1"].Text = "Enter the Date in E3";
  worksheet.Range["E1"].AutofitColumns();
  dateValidation.AllowType = ExcelDataType.Date;
  dateValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  dateValidation.FirstDateTime = new DateTime(2003, 5, 10);
  dateValidation.SecondDateTime = new DateTime(2004, 5, 10);

  //Shows the error message
  dateValidation.ShowErrorBox = true;
  dateValidation.ErrorBoxText = "Enter a value between 10/5/2003 and 10/5/2004";
  dateValidation.ErrorBoxTitle = "ERROR";
  dateValidation.PromptBoxText = "Data validation for date";
  dateValidation.ShowPromptBox = true;

  //Data validation for custom data
  IDataValidation validation = worksheet.Range["A3"].DataValidation;
  validation.AllowType = ExcelDataType.Formula;
  validation.FirstFormula = "=A1>10";

  //Shows the error message
  validation.ErrorBoxText = "Enter a value greater than 10 in A1";
  validation.ErrorBoxTitle = "ERROR";
  validation.PromptBoxText = "Custom DataValidation";
  validation.ShowPromptBox = true;

  workbook.SaveAs("DataValidation.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Data Validation for Text Length
  IDataValidation txtLengthValidation = worksheet.Range["A3"].DataValidation;
  worksheet.Range["A1"].Text = "Enter the Text in A3";
  worksheet.Range["A1"].AutofitColumns();
  txtLengthValidation.AllowType = ExcelDataType.TextLength;
  txtLengthValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  txtLengthValidation.FirstFormula = "0";
  txtLengthValidation.SecondFormula = "5";

  //Shows the error message
  txtLengthValidation.ShowErrorBox = true;
  txtLengthValidation.ErrorBoxText = "Text length should be less than 5 characters";
  txtLengthValidation.ErrorBoxTitle = "ERROR";
  txtLengthValidation.PromptBoxText = "Data validation for text length";
  txtLengthValidation.ShowPromptBox = true;

  //Data Validation for the Time
  IDataValidation timeValidation = worksheet.Range["B3"].DataValidation;
  worksheet.Range["B1"].Text = "Enter the time between 10:00 and 12:00 'o Clock in B3";
  worksheet.Range["B1"].AutofitColumns();
  timeValidation.AllowType = ExcelDataType.Time;
  timeValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  timeValidation.FirstFormula = "10.00";
  timeValidation.SecondFormula = "12.00";

  //Shows the error message
  timeValidation.ShowErrorBox = true;
  timeValidation.ErrorBoxText = "Enter a correct time";
  timeValidation.ErrorBoxTitle = "ERROR";
  timeValidation.PromptBoxText = "Data validation for time";
  timeValidation.ShowPromptBox = true;

  //Data Validation for the List
  IDataValidation listValidation = worksheet.Range["C3"].DataValidation;
  worksheet.Range["C1"].Text = "Data Validation List in C3";
  worksheet.Range["C1"].AutofitColumns();
  listValidation.ListOfValues = new string[] { "ListItem1", "ListItem2", "ListItem3" };

  //Shows the error message
  listValidation.ErrorBoxText = "Choose the value from the list";
  listValidation.ErrorBoxTitle = "ERROR";
  listValidation.PromptBoxText = "Data validation for list";
  listValidation.IsPromptBoxVisible = true;
  listValidation.ShowPromptBox = true;

  //Data Validation for Numbers
  IDataValidation numberValidation = worksheet.Range["D3"].DataValidation;
  worksheet.Range["D1"].Text = "Enter the Number in D3";
  worksheet.Range["D1"].AutofitColumns();
  numberValidation.AllowType = ExcelDataType.Integer;
  numberValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  numberValidation.FirstFormula = "0";
  numberValidation.SecondFormula = "10";

  //Shows the error message
  numberValidation.ShowErrorBox = true;
  numberValidation.ErrorBoxText = "Enter a value between 0 and 10";
  numberValidation.ErrorBoxTitle = "ERROR";
  numberValidation.PromptBoxText = "Data validation for numbers";
  numberValidation.ShowPromptBox = true;

  //Data Validation for Date
  IDataValidation dateValidation = worksheet.Range["E3"].DataValidation;
  worksheet.Range["E1"].Text = "Enter the Date in E3";
  worksheet.Range["E1"].AutofitColumns();
  dateValidation.AllowType = ExcelDataType.Date;
  dateValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
  dateValidation.FirstDateTime = new DateTime(2003, 5, 10);
  dateValidation.SecondDateTime = new DateTime(2004, 5, 10);

  //Shows the error message
  dateValidation.ShowErrorBox = true;
  dateValidation.ErrorBoxText = "Enter a value between 10/5/2003 and 10/5/2004";
  dateValidation.ErrorBoxTitle = "ERROR";
  dateValidation.PromptBoxText = "Data validation for date";
  dateValidation.ShowPromptBox = true;

  //Data validation for custom data
  IDataValidation validation = worksheet.Range["A3"].DataValidation;
  validation.AllowType = ExcelDataType.Formula;
  validation.FirstFormula = "=A1>10";

  //Shows the error message
  validation.ErrorBoxText = "Enter a value greater than 10 in A1";
  validation.ErrorBoxTitle = "ERROR";
  validation.PromptBoxText = "Custom DataValidation";
  validation.ShowPromptBox = true;

  workbook.SaveAs("DataValidation.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Data Validation for Text Length
  Dim txtLengthValidation As IDataValidation = worksheet.Range("A3").DataValidation
  worksheet.Range("A1").Text = "Enter the Text in A3"
  worksheet.Range("A1").AutofitColumns()
  txtLengthValidation.AllowType = ExcelDataType.TextLength
  txtLengthValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between
  txtLengthValidation.FirstFormula = "0"
  txtLengthValidation.SecondFormula = "5"

  'Shows the error message
  txtLengthValidation.ShowErrorBox = True
  txtLengthValidation.ErrorBoxText = "Text length should be less than 5 characters"
  txtLengthValidation.ErrorBoxTitle = "ERROR"
  txtLengthValidation.PromptBoxText = "Data validation for text length"
  txtLengthValidation.ShowPromptBox = True

  'Data Validation for the Time
  Dim timeValidation As IDataValidation = worksheet.Range("B3").DataValidation
  worksheet.Range("B1").Text = "Enter the time between 10:00 and 12:00 'o Clock in B3"
  worksheet.Range("B1").AutofitColumns()
  timeValidation.AllowType = ExcelDataType.Time
  timeValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between
  timeValidation.FirstFormula = "10.00"
  timeValidation.SecondFormula = "12.00"

  'Shows the error message
  timeValidation.ShowErrorBox = True
  timeValidation.ErrorBoxText = "Enter a correct time"
  timeValidation.ErrorBoxTitle = "ERROR"
  timeValidation.PromptBoxText = "Data validation for time"
  timeValidation.ShowPromptBox = True

  'Data Validation for the List
  Dim listValidation As IDataValidation = worksheet.Range("C3").DataValidation
  worksheet.Range("C1").Text = "Data Validation List in C3"
  worksheet.Range("C1").AutofitColumns()
  listValidation.ListOfValues = New String() {"ListItem1", "ListItem2", "ListItem3"}

  'Shows the error message
  listValidation.ErrorBoxText = "Choose the value from the list"
  listValidation.ErrorBoxTitle = "ERROR"
  listValidation.PromptBoxText = "Data validation for list"
  listValidation.IsPromptBoxVisible = True
  listValidation.ShowPromptBox = True

  'Data Validation for Numbers
  Dim numberValidation As IDataValidation = worksheet.Range("D3").DataValidation
  worksheet.Range("D1").Text = "Enter the Number in D3"
  worksheet.Range("D1").AutofitColumns()
  numberValidation.AllowType = ExcelDataType.Integer
  numberValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between
  numberValidation.FirstFormula = "0"
  numberValidation.SecondFormula = "10"

  'Shows the error message
  numberValidation.ShowErrorBox = True
  numberValidation.ErrorBoxText = "Enter a value between 0 and 10"
  numberValidation.ErrorBoxTitle = "ERROR"
  numberValidation.PromptBoxText = "Data validation for numbers"
  numberValidation.ShowPromptBox = True

  'Data Validation for Date
  Dim dateValidation As IDataValidation = worksheet.Range("E3").DataValidation
  worksheet.Range("E1").Text = "Enter the Date in E3"
  worksheet.Range("E1").AutofitColumns()
  dateValidation.AllowType = ExcelDataType.Date
  dateValidation.CompareOperator = ExcelDataValidationComparisonOperator.Between
  dateValidation.FirstDateTime = New DateTime(2003, 5, 10)
  dateValidation.SecondDateTime = New DateTime(2004, 5, 10)

  'Shows the error message
  dateValidation.ShowErrorBox = True
  dateValidation.ErrorBoxText = "Enter a value between 10/5/2003 and 10/5/2004"
  dateValidation.ErrorBoxTitle = "ERROR"
  dateValidation.PromptBoxText = "Data validation for date"
  dateValidation.ShowPromptBox = True

  'Data validation for custom data
  Dim validation As IDataValidation = worksheet.Range("A3").DataValidation
  validation.AllowType = ExcelDataType.Formula
  validation.FirstFormula = "=A1>10"

  'Shows the error message
  validation.ErrorBoxText = "Enter a value greater than 10 in A1"
  validation.ErrorBoxTitle = "ERROR"
  validation.PromptBoxText = "Custom DataValidation"
  validation.ShowPromptBox = True

  workbook.SaveAs("DataValidation.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Remove Data Validation

The following code snippet illustrates how to remove data validation rules from a worksheet.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Data%20Validation/Remove%20Validation/.NET/Remove%20Validation/Remove%20Validation/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
  IWorksheet worksheet = workbook.Worksheets[0];

  //Removing data validation from the worksheet
  worksheet.UsedRange.Clear(ExcelClearOptions.ClearDataValidations);

  //Saving the workbook
  workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  //Removing data validation from the worksheet
  worksheet.UsedRange.Clear(ExcelClearOptions.ClearDataValidations);

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Removing data validation from the worksheet
  worksheet.UsedRange.Clear(ExcelClearOptions.ClearDataValidations)

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}
 
A complete working example to remove validations from a worksheet in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Data%20Validation/Remove%20Validation/.NET/Remove%20Validation">this GitHub page</a>. 
