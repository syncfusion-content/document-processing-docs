---
layout: post
title: Cell range in Vue Spreadsheet component | Syncfusion
description: Learn here all about Cell range in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Cell range 
platform: document-processing
documentation: ug
---

# Cell range in Vue Spreadsheet component

A group of cells in a sheet is known as cell range.

## Wrap text

Wrap text allows you to display large content as multiple lines in a single cell. By default, the wrap text support is enabled. Use the [`allowWrap`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#allowwrap) property to enable or disable the wrap text support in spreadsheet.

Wrap text can be applied or removed to a cell or range of cells in the following ways,

* Using the `wrap` property in `cell`, you can enable or disable wrap text to a cell at initial load.
* Select or deselect wrap button from ribbon toolbar to apply or remove the wrap text to the selected range.
* Using the [`wrap`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#wrap) method, you can apply or remove the wrap text once the component is loaded.

The following code example shows the wrap text functionality in spreadsheet.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/wrap-text-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/wrap-text-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/wrap-text-cs1" %}

### Limitations of Wrap text

The following features have some limitations in wrap text:

* Sorting with wrap text applied data.
* Merge with wrap text.

## Merge cells

Merge cells allows users to span two or more cells in the same row or column into a single cell. When cells with multiple values are merged, top-left most cell data will be the data for the merged cell. By default, the merge cells option is enabled. Use [`allowMerge`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#allowmerge) property to enable or disable the merge cells option in spreadsheet.

You can merge the range of cells in the following ways,

* Set the `rowSpan` and `colSpan` property in `cell` to merge the number of cells at initial load.
* Select the range of cells and apply merge by selecting the desired option from ribbon toolbar.
* Use [`merge`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#merge) method to merge the range of cells, once the component is loaded.

The available merge options in spreadsheet are,

| Type | Action |
|-------|---------|
| Merge All | Combines all the cells in a range in to a single cell (default). |
| Merge Horizontally | Combines cells in a range as row-wise. |
| Merge Vertically | Combines cells in a range as column-wise. |
| UnMerge | Splits the merged cells into multiple cells. |

The following code example shows the merge cells operation in spreadsheet.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/merge-cells-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/merge-cells-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/merge-cells-cs1" %}

### Limitations of Merge

The following features have some limitations in Merge:

* Merge with filter.
* Merge with wrap text.

## Data Validation

Data Validation is used to restrict the user from entering the invalid data. You can use the [`allowDataValidation`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#allowdatavalidation) property to enable or disable data validation.

> * The default value for `allowDataValidation` property is `true`.

### Apply Validation

You can apply data validation to restrict the type of data or the values that users enter into a cell.

You can apply data validation by using one of the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Data Validation item.
* Use the [`addDataValidation()`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#adddatavalidation) method programmatically.

### Clear Validation

Clear validation feature is used to remove data validations from the specified ranges or the whole worksheet.

You can clear data validation rule by one of the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Clear Validation item.
* Use the [`removeDataValidation()`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#removedatavalidation) method programmatically.

### Highlight Invalid Data

Highlight invalid data feature is used to highlight the previously entered invalid values.

You can highlight an invalid data by using one of the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Highlight Invalid Data item.
* Use the [`addInvalidHighlight()`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#addinvalidhighlight) method programmatically.

### Clear Highlighted Invalid Data

Clear highlight feature is used to remove the highlight from invalid cells.

You can clear the highlighted invalid data by using the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Clear Highlight item.
* Use the [`removeInvalidHighlight()`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#removeinvalidhighlight) method programmatically.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/number-format-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/number-format-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/number-format-cs1" %}

### Custom Data validation

The Spreadsheet supports custom data validation, allowing users to define their own validation rules for specific cells or ranges. This feature enables you to set conditions that the entered data must meet, making it particularly useful when predefined validation options, such as numbers, dates, or lists, are insufficient.

With custom validation, you can enforce rules using logical expressions or formulas, ensuring that only valid data is entered into the Spreadsheet.

For example, consider a scenario where you want to ensure that a cell contains a number between 10 and 100. To achieve this, define a validation rule using a formula that checks if the entered value is greater than 10 and less than 100. The formula for this validation is =AND(A1>10, A1<100), where A1 refers to the cell being validated.

When this rule is applied, the Spreadsheet evaluates the entered value against the formula. If a user enters a value outside the specified range, an alert notifies them of the invalid input. This helps users correct errors efficiently and ensures that only desired values are accepted.

You can apply custom data validation using two methods.

* The first is through the Data Validation dialog in the Ribbon toolbar. Navigate to the Data tab, select the Data Validation option, and choose the Custom type from the Allow dropdown menu.
* The second method is programmatically, using the [`addDataValidation()`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#adddatavalidation) method, which allows developers to set custom rules dynamically via code.

The following code example demonstrates how to add custom data validation with a formula in a Spreadsheet.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/data-validation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/data-validation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/vue/data-validation-cs1" %}

### Limitations of Data validation

The following features have some limitations in Data Validation:

* Entire row data validation.
* Insert row between the data validation.
* Copy/paste with data validation.
* Delete cells between data validation applied range.

## Clear

Clear feature helps you to clear the cell contents (formulas and data), formats (including number formats, conditional formats, and borders) in a spreadsheet. When you apply clear all, both the contents and the formats will be cleared simultaneously.

### Apply Clear Feature

You can apply clear feature by using one of the following ways,

* Select the clear icon in the Ribbon toolbar under the Home Tab.
* Using the [`clear()`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#clear) method to clear the values.

Clear has the following types in the spreadsheet,

| Options | Uses |
|-----|------|
| `Clear All` | Used to clear all contents, formats, and hyperlinks.  |
| `Clear Formats` | Used to clear the formats (including number formats, conditional formats, and borders) in a cell. |
| `Clear Contents` | Used to clear the contents (formulas and data) in a cell. |
| `Clear Hyperlinks` | Used to clear the hyperlink in a cell. |

### Methods

Clear the cell contents and formats in the Spreadsheet document by using the [clear](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#clear) method. The [clear](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#clear) method has `type` and `range` as parameters. The following code example shows how to clear the cell contents and formats in the button click event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/clear-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/clear-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/clear-cs1" %}

## Note

You can refer to our [Vue Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/vue/#/tailwind3/spreadsheet/default.html) to knows how to present and manipulate data.

## See Also

* [Rows and columns](./rows-and-columns)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Sorting](./sort)
* [Filtering](./filter)