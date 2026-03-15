---
layout: post
title: Formulas in React Spreadsheet component | Syncfusion
description: Learn here all about Formulas in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formulas 
platform: document-processing
documentation: ug
---

# Formulas in React Spreadsheet component

Formulas are used for calculating the data in a worksheet. You can refer the cell reference from same sheet or from different sheets.

## Usage

You can set formula for a cell in the following ways,

* Using the `formula` property from `cell`, you can set the formula or expression to each cell at initial load.
* Set the formula or expression through data binding.
* You can set formula for a cell by [`editing`](./editing).
* Using the [`updateCell`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#updatecell) method, you can set or update the cell formula.

## Culture-Specific Formula Separators

In earlier versions, even though culture-based Excel files could be imported into the Spreadsheet component, formulas did not calculate correctly. This happened because culture-based argument separators and support for culture-based formatted numeric values were not available. Starting from version **25.1.35**, you can now import culture-based Excel files into the Spreadsheet component with proper support.

> Before importing culture-based Excel files, make sure the Spreadsheet component is rendered with the matching culture. Also, start the import/export services with the same culture to ensure compatibility.

When loading spreadsheet data with culture-based formula argument separators using cell data binding, local/remote data, or JSON, ensure to set the [listSeparator](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#listseparator) property value as the culture-based list separator from your end. Additionally, note that when importing an Excel file, the [listSeparator](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#listseparator) property will be updated based on the culture of the launched import/export service.

In the example below, the Spreadsheet component is rendered with the **German culture**. The example also shows how to set the culture-based argument separator and use culture-based formatted numeric values as arguments in formulas.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/spreadsheet/react/formula-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/spreadsheet/react/formula-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="locale.json" %}
{% include code-snippet/spreadsheet/react/formula-cs3/app/locale.json %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/formula-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/formula-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/formula-cs3" %}

## Create User Defined Functions / Custom Functions

The Spreadsheet includes a set of built-in formulas. For convenience, you can find the list of supported formulas [here](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/formulas#supported-formulas).

You can also define and use formulas that are not supported by default, known as **user defined/custom formulas**, by using the [addCustomFunction](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#addcustomfunction) function. Keep in mind that a user defined/custom formula should return only a single value. If the formula returns an array, updating adjacent cell values will take more time and may affect performance.

The following code example shows how to use an unsupported formula in the Spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/formula-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/formula-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/formula-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/formula-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/formula-cs1" %}

Second, if you want to directly compute any formula or expression, you can use the [computeExpression](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#computeexpression) method. This method will work for both built-in and used-defined/custom formula.

The following code example shows how to use `computeExpression` method in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/formula-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/formula-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/formula-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/formula-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/formula-cs2" %}

## Formula Bar

Formula bar is used to edit or enter cell data in much easier way. By default, the formula bar is enabled in the spreadsheet. Use the [`showFormulaBar`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#showformulabar) property to enable or disable the formula bar.

## Named Ranges

You can assign a meaningful name to a cell range and then use that name in formulas for calculation. This makes formulas easier to read, understand, and maintain. Named ranges can be added to the Spreadsheet in several ways:

* Use the [`definedNames`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#definednames) collection to add multiple named ranges during the initial load.  
* Use the [`addDefinedName`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#adddefinedname) method to add a named range dynamically at runtime.  
* Remove a named range dynamically using the [`removeDefinedName`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#removedefinedname) method.  
* Select a range of cells and enter a name for the selected range directly in the **Name Box**.  

The following code example demonstrates how named ranges can be defined and used in formulas within the Spreadsheet.

The following code example shows the usage of named ranges support.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/defined-name-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/defined-name-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/defined-name-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/defined-name-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/defined-name-cs1" %}

## Calculation Mode

The Spreadsheet provides a **Calculation Mode** feature similar to the calculation options in online Excel. This feature lets you control when and how formulas are recalculated in the spreadsheet. The available modes are:

* **Automatic**: Formulas recalculate instantly whenever a change is made in dependent cells.  
* **Manual**: Formulas recalculate only when explicitly triggered by the user using options like **Calculate Sheet** or **Calculate Workbook**.

You can configure the calculation mode using the [`calculationMode`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#calculationmode) property of the Spreadsheet. These modes give flexibility to balance real-time updates with performance optimization.

### Automatic Mode

In **Automatic Mode**, formulas are recalculated immediately whenever a dependent cell is changed. This mode is ideal for situations where real-time updates are important, ensuring that users always see the latest results without needing extra steps.  

For example, if cell `C1` contains the formula `=A1+B1`, any change in `A1` or `B1` will instantly update the value in `C1`. No manual action is required.  

You can enable this mode by setting the [`calculationMode`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#calculationmode) property to `Automatic`.

The following code example demonstrates how to set the Automatic calculation mode in a Spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/calculation-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/calculation-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/calculation-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/calculation-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/calculation-cs1" %}

### Manual Mode

In **Manual Mode**, formulas are not recalculated automatically when cell values change. Instead, recalculation must be triggered explicitly. This mode is useful when performance optimization is important, such as working with large datasets or formulas that require heavy computation.

For example, if cell `C1` contains the formula `=A1+B1`, changing the values in `A1` or `B1` will not update `C1` automatically. The recalculation must be initiated manually using either the `Calculate Sheet` or `Calculate Workbook` option. 

The Spreadsheet provides two manual recalculation options:  
* `Calculate Sheet`: Recalculates formulas only in the active sheet.
* `Calculate Workbook`: Recalculates formulas across all sheets in the workbook.

The following code example demonstrates how to set the Manual calculation mode in a Spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/calculation-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/calculation-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/calculation-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/calculation-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/calculation-cs2" %}

## Supported Formulas

The Spreadsheet component supports a comprehensive set of built-in formulas organized by category. Each formula can be used for calculations, data analysis, text manipulation, date operations, and logical evaluations.

### Math & Trigonometry

| Formula | Description |
|---------|-------------|
| ABS | Returns the value of a number without its sign. |
| CEILING | Rounds a number up to the nearest multiple of a given factor. |
| DECIMAL | Converts a text representation of a number in a given base into a decimal number. |
| DEGREES | Converts radians to degrees. |
| EVEN | Rounds a positive number up and negative number down to the nearest even integer. |
| EXP | Returns e raised to the power of the given number. |
| FACT | Returns the factorial of a number. |
| FLOOR | Rounds a number down to the nearest multiple of a given factor. |
| INT | Rounds a number down to the nearest integer. |
| LN | Returns the natural logarithm of a number. |
| LOG | Returns the logarithm of a number to the base that you specify. |
| MOD | Returns a remainder after a number is divided by divisor. |
| ODD | Rounds a positive number up and negative number down to the nearest odd integer. |
| PI | Returns the value of pi. |
| POWER | Returns the result of a number raised to power. |
| PRODUCT | Multiplies a series of numbers and/or cells. |
| RADIANS | Converts degrees into radians. |
| RAND | Returns a random number between 0 and 1. |
| RANDBETWEEN | Returns a random integer based on specified values. |
| ROUND | Rounds a number to the specified number of digits. |
| ROUNDDOWN | Rounds a number down, toward zero. |
| ROUNDUP | Rounds a number up, away from zero. |
| SQRT | Returns the square root of a positive number. |
| TRUNC | Truncates a supplied number to a specified number of decimal places. |


### Statistical & Aggregate

| Formula | Description |
|---------|-------------|
| AVERAGE | Calculates average for the series of numbers and/or cells excluding text. |
| AVERAGEA | Calculates the average for the cells evaluating TRUE as 1, text and FALSE as 0. |
| AVERAGEIF | Calculates the average of cells that meet a specified condition. |
| AVERAGEIFS | Calculates average for cells based on multiple specified conditions. |
| COUNT | Counts the cells that contain numeric values in a range. |
| COUNTA | Counts the cells that contain values in a range. |
| COUNTBLANK | Returns the number of empty cells in a specified range of cells. |
| COUNTIF | Counts the cells based on a specified condition. |
| COUNTIFS | Counts the cells based on multiple specified conditions. |
| GEOMEAN | Returns the geometric mean of a given array or range of positive data. |
| INTERCEPT | Calculates the point of the Y-intercept line via linear regression. |
| LARGE | Returns the `k-th` largest value in a given array. |
| MAX | Returns the largest number of the given arguments. |
| MEDIAN | Returns the median of the given set of numbers. |
| MIN | Returns the smallest number of the given arguments. |
| RSQ | Returns the square of the Pearson product moment correlation coefficient based on data points. |
| SLOPE | Returns the slope of the line from linear regression of the data points. |
| SMALL | Returns the `k-th` smallest value in a given array. |
| SUM | Adds a series of numbers and/or cells. |
| SUMIF | Adds the cells based on a specified condition. |
| SUMIFS | Adds the cells based on multiple specified conditions. |
| SUMPRODUCT | Returns the sum of the products of corresponding arrays in given arrays. |
| SUBTOTAL | Returns subtotal for a range using the given function number. |


### Date & Time

| Formula | Description |
|---------|-------------|
| DATE | Returns the date based on given year, month, and day. |
| DATEVALUE | Converts a date string into date value. |
| DAY | Returns the day from the given date. |
| DAYS | Returns the number of days between two dates. |
| EDATE | Returns a date with given number of months before or after the specified date. |
| EOMONTH | Returns the last day of the month that is a specified number of months before or after a start date. |
| HOUR | Returns the number of hours in a specified time string. |
| MINUTE | Returns the number of minutes in a specified time string. |
| MONTH | Returns the number of months in a specified date string. |
| NOW | Returns the current date and time. |
| SECOND | Returns the number of seconds in a specified time string. |
| TIME | Converts hours, minutes, seconds to the time formatted text. |
| TODAY | Returns the current date. |
| WEEKDAY | Returns the day of the week for a specified date. |

### Logical

| Formula | Description |
|---------|-------------|
| AND | Returns TRUE if all the arguments are TRUE, otherwise returns FALSE. |
| IF | Returns value based on the given expression. |
| IFERROR | Returns value if no error found; else returns specified value. |
| IFS | Returns value based on multiple given expressions. |
| NOT | Returns the inverse of a given logical expression. |
| OR | Returns TRUE if any of the arguments are TRUE, otherwise returns FALSE. |


### Lookup & Reference

| Formula | Description |
|---------|-------------|
| ADDRESS | Returns a cell reference as text, given specified row and column numbers. |
| CHOOSE | Returns a value from list of values, based on index number. |
| HLOOKUP | Looks for a value in the top row of an array and returns a value in the same column from a specified row. |
| INDEX | Returns a value of the cell in a given range based on row and column number. |
| LOOKUP | Looks for a value in a one-row or one-column range, then returns a value from the same position in another range. |
| MATCH | Returns the relative position of a specified value in a given range. |
| SORT | Sorts the contents of a column, range, or array in ascending or descending order. |
| UNIQUE | Returns unique values from a range or array. |
| VLOOKUP | Looks for a value in the first column of a lookup range and returns a corresponding value from a different column. |

### Text

| Formula | Description |
|---------|-------------|
| CHAR | Returns the character from the specified number. |
| CODE | Returns the numeric code for the first character in a given string. |
| CONCAT | Concatenates a list or a range of text strings. |
| CONCATENATE | Combines two or more strings together. |
| DOLLAR | Converts the number to currency formatted text. |
| EXACT | Checks whether two text strings are exactly the same and returns TRUE or FALSE. |
| FIND | Returns the position of a string within another string (case sensitive). |
| LEN | Returns the number of characters in a given string. |
| PROPER | Converts text to proper case (first letter capitalized). |
| T | Checks whether a value is text or not and returns the text. |
| TEXT | Converts the supplied value into text by using the user-specified format. |

### Information

| Formula | Description |
|---------|-------------|
| ISNUMBER | Returns true when the value parses as a numeric value; otherwise returns false. |


## Formula Error Dialog

If you enter an invalid formula in a cell, an error dialog with an error message will appear. For instance, a formula with the incorrect number of arguments, a formula without parenthesis, etc.

| Error Message | Reason |
|-------|---------|
| `We found that you typed a formula with an invalid arguments` | Occurs when passing an argument even though it wasn't needed. |
| `We found that you typed a formula with an empty expression` | Occurs when passing an empty expression in the argument. |
| `We found that you typed a formula with one or more missing opening or closing parenthesis` | Occurs when an open parenthesis or a close parenthesis is missing. |
| `We found that you typed a formula which is improper` | Occurs when passing a single reference but a range was needed. |
| `We found that you typed a formula with a wrong number of arguments` | Occurs when the required arguments were not passed. |
| `We found that you typed a formula which requires 3 arguments` | Occurs when the required 3 arguments were not passed. |
| `We found that you typed a formula with a mismatched quotes` | Occurs when passing an argument with mismatched quotes. |
| `We found that you typed a formula with a circular reference` | Occurs when passing a formula with circular cell reference. |
| `We found that you typed a formula which is invalid` | Except in the cases mentioned above, all other errors will fall into this broad category. |

![Formula Alert Dialog](./images/formula-alert-dialog.png)

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Editing](./editing)
* [Formatting](./formatting)
* [Open](./open-save#open)
* [Save](./open-save#save)