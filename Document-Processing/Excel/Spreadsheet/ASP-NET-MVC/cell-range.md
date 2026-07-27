---
layout: post
title: Cell Range in EJ2 ASP.NET MVC Syncfusion Spreadsheet Component
description: Learn here all about Cell Range in Syncfusion EJ2 ASP.NET MVC Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Cell Range
documentation: ug
---


# Cell Range in ASP.NET MVC Spreadsheet control

A group of cells in a sheet is known as cell range.

## Wrap text

Wrap text displays lengthy content on multiple lines within a single cell. By default, wrap text support is enabled. Use the [allowWrap](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowWrap) property to enable or disable wrap text support in the Spreadsheet.

You can apply or remove wrap text in the following ways:

* Use the `wrap` property of a cell to configure wrap text during the initial rendering.
* Select or clear the **Wrap Text** option in the Ribbon toolbar for the selected range.
* Use the `wrap` method to apply or remove wrap text after the component is loaded.

The `wrap` method accepts the following arguments:

* `address`: Specifies the cell or cell range to which wrap text is applied.
* `wrap`: Specifies whether wrap text is enabled or disabled.

Use `true` to apply wrap text and `false` to remove it.

The following code example demonstrates wrap text functionality in the Spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/wrap-text/razor %}
{% endhighlight %}
{% highlight c# tabtitle="WrapTextController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/wrap-text/wrapTextController.cs %}
{% endhighlight %}
{% endtabs %}

### Limitations of Wrap text

The following features have some limitations in wrap text:

* Sorting with wrap text applied data.
* Merge with wrap text

## Merge cells

The Merge Cells feature allows users to combine two or more cells into a single cell. When cells containing multiple values are merged, the value of the top-left cell is retained in the merged cell. By default, the Merge Cells feature is enabled. Use the [allowMerge](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowMerge) property to enable or disable this feature in the Spreadsheet.

You can merge cells in the following ways:

* Set the `rowSpan` and `colSpan` properties of a cell to merge cells during the initial rendering.
* Select a range and choose the required merge option from the Ribbon toolbar.
* Use the `merge` method to merge a range after the component is loaded.

The `merge` method requires a cell range and the applicable merge type. The range identifies the cells to merge, and the merge type determines whether all cells, rows, or columns in the range are merged.

The available merge options in spreadsheet are,

| Type | Action |
|-------|---------|
| Merge All | Combines all cells in the selected range into a single cell. This is the default option. |
| Merge Horizontally | Combines the cells in each row of the selected range. |
| Merge Vertically | Combines the cells in each column of the selected range. |
| UnMerge | Separates the merged cell into individual cells. |

The following code example shows the merge cells operation in spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/merge-cells/razor %}
{% endhighlight %}
{% highlight c# tabtitle="MergeCellController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/merge-cells/mergeCellController.cs %}
{% endhighlight %}
{% endtabs %}


### Limitations of Merge

The following features have some limitations in Merge:

* Merge with filter.
* Merge with wrap text.

## Data Validation

Data Validation restricts the type of data or values that users can enter into cells. Use the [allowDataValidation](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowDataValidation) property to enable or disable data validation in the Spreadsheet.

N> * The default value of the `allowDataValidation` property is `true`.

The Spreadsheet supports predefined validation types, such as numbers, dates, text lengths, lists, and custom formulas.

### Apply Validation

Data validation can restrict the type of data or the range of values that users enter into a cell.

You can apply data validation in the following ways:

* Select the required cells, open the **Data** tab in the Ribbon, and choose **Data Validation**.
* Use the `addDataValidation()` method to apply a validation rule programmatically.

The `addDataValidation()` method requires:

* A validation rule that defines the validation type, operator, and permitted values or formula.
* A cell or range address to which the rule is applied.

### Clear Validation

The Clear Validation feature removes data validation rules from a specified range or the entire worksheet.

You can clear data validation in the following ways:

* Select the required cells, open the **Data** tab in the Ribbon, and choose **Clear Validation**.
* Use the `removeDataValidation()` method to remove validation programmatically.

### Highlight Invalid Data

The Highlight Invalid Data feature identifies existing cell values that do not satisfy the applied validation rules.

You can highlight invalid data in the following ways:

* Open the **Data** tab in the Ribbon and choose **Highlight Invalid Data**.
* Use the `addInvalidHighlight()` method to highlight invalid values programmatically.

### Clear Highlighted Invalid Data

This feature removes the highlighting applied to invalid cell values without removing the associated validation rules.

You can clear invalid-data highlighting in the following ways:

* Open the **Data** tab in the Ribbon and choose **Clear Highlight**.
* Use the `removeInvalidHighlight()` method programmatically.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/data-validation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="DataValidation.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/data-validation/dataValidation.cs %}
{% endhighlight %}
{% endtabs %}

### Custom Data validation

The Spreadsheet supports custom data validation, allowing users to define their own validation rules for specific cells or ranges. This feature enables you to set conditions that the entered data must meet, making it particularly useful when predefined validation options, such as numbers, dates, or lists, are insufficient.

With custom validation, you can enforce rules using logical expressions or formulas, ensuring that only valid data is entered into the Spreadsheet.

For example, consider a scenario where you want to ensure that a cell contains a number between 10 and 100. To achieve this, define a validation rule using a formula that checks if the entered value is greater than 10 and less than 100. The formula for this validation is =AND(A1>10, A1<100), where A1 refers to the cell being validated.

When this rule is applied, the Spreadsheet evaluates the entered value against the formula. If a user enters a value outside the specified range, an alert notifies them of the invalid input. This helps users correct errors efficiently and ensures that only desired values are accepted.

You can apply custom data validation using two methods.

* The first is through the Data Validation dialog in the Ribbon toolbar. Navigate to the Data tab, select the Data Validation option, and choose the Custom type from the Allow dropdown menu.
* The second method is programmatically, using the `addDataValidation()` method, which allows developers to set custom rules dynamically via code.

The following code example demonstrates how to add custom data validation with a formula in a Spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/data-validation-cs2/razor %}
{% endhighlight %}
{% highlight c# tabtitle="DataValidation.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/data-validation-cs2/dataValidation.cs %}
{% endhighlight %}
{% endtabs %}

### Limitations of Data validation

The following features have some limitations in Data Validation:

* Entire row data validation.
* Insert row between the data validation.
* Copy/paste with data validation.
* Delete cells between data validation applied range.

## Auto Fill

Auto Fill is used to fill the cells with data based on adjacent cells. It also follows a pattern from adjacent cells if available. There is no need to enter the repeated data manually. You can use [`allowAutoFill`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowAutoFill) property to enable/disable the auto fill support. You can also use `showFillOptions` property to enable/disable the fill option and `fillType` property to change the default auto fill option which is available in [`autoFillSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AutoFillSettings).

The `autoFillSettings` property configures Auto Fill behavior:

* `showFillOptions`: Specifies whether the Auto Fill Options menu is displayed after an Auto Fill operation.
* `fillType`: Specifies the default Auto Fill operation.
* `direction`: Specifies the direction in which values are filled.

You can perform Auto Fill in the following ways:

* Drag the fill handle to the required range and select an option from the **Auto Fill Options** menu.
* Use the `autoFill()` method programmatically.

The `autoFill()` method accepts the following parameters:

| Parameter | Type | Description |
|-----|------|----|
| dataRange | `string` | Specifies the data range. |
| fillRange | `string` | Specifies the fill range. |
| direction | `AutoFillDirection` | Specifies the direction("Up","Right","Down","Left")to be filled. |
| fillType | `AutoFillType` | Specifies the fill type("CopyCells","FillSeries","FillFormattingOnly","FillWithoutFormatting") for autofill action. |

In Auto Fill we have following options,

* Copy Cells
* Fill Series
* Fill Formatting Only
* Fill Without Formatting

N>* The default auto fill option is “FillSeries” which can be referred from `fillType` property.

### Copy Cells

To copy the selected cell content to the adjacent cells. You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Copy Cells” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “CopyCells” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Series

To fill the series of numbers, characters, or dates based on selected cell content to the adjacent cells with their formats.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Series” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillSeries” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Formatting Only

To fill the cell style and number formatting based on the selected cell content to the adjacent cells without their content.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Formatting Only” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillFormattingOnly” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Without Formatting

To fill series of numbers, characters, or dates based on the selected cells to the adjacent cells without their formats.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Without Formatting” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillWithoutFormatting” as fill type in `autoFill` method to fill the adjacent cells.

In the following sample, you can enable/disable the fill option on the button click event by using the `showFillOptions` property in `autoFillSettings`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/autofill/razor %}
{% endhighlight %}
{% highlight c# tabtitle="AutofillController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/autofill/autofillController.cs %}
{% endhighlight %}
{% endtabs %}



## Clear

Clear feature helps you to clear the cell contents (formulas and data), formats (including number formats, conditional formats, and borders) in a spreadsheet. When you apply clear all, both the contents and the formats will be cleared simultaneously.

### Apply Clear Feature

You can apply clear feature by using one of the following ways,

* Select the clear icon in the Ribbon toolbar under the Home Tab.
* Using the `clear()` method to clear the values.

Clear has the following types in the spreadsheet,

| Options | Uses |
|-----|------|
| `Clear All` | Used to clear all contents, formats, and hyperlinks.  |
| `Clear Formats` | Used to clear the formats (including number formats, conditional formats, and borders) in a cell. |
| `Clear Contents` | Used to clear the contents (formulas and data) in a cell. |
| `Clear Hyperlinks` | Used to clear the hyperlink in a cell. |

### Methods

Clear the cell contents and formats in the Spreadsheet document by using the `clear` method. The clear method has `type` and `range` as parameters. The following code example shows how to clear the cell contents and formats in the button click event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/clear/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ClearController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/clear/clearController.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [Rows and columns](./rows-and-columns)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Sorting](./sort)
* [Filtering](./filter)
