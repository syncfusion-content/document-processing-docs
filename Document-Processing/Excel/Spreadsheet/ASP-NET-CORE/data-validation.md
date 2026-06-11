---
layout: post
title: Data validation in EJ2 ASP.NET Core Spreadsheet control | Syncfusion
description: Learn here all about Data validation in Syncfusion EJ2 ASP.NET Core Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Data validation 
documentation: ug
---

# Data validation in ASP.NET Core Spreadsheet component

Data Validation is used to restrict the user from entering the invalid data. You can use the [`allowDataValidation`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowDataValidation) property to enable or disable data validation.


> * The default value for `allowDataValidation` property is `true`.

## Apply Validation

You can apply data validation to restrict the type of data or the values that users enter into a cell.

* **Ribbon UI:** Select the **Data** tab, then choose **Data Validation**.
* **Programmatically:** Use the [`addDataValidation`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#adddatavalidation) method.


## Clear Validation

Clear validation using one of these methods:

* **Ribbon UI:** Select the **Data** tab, then choose **Clear Validation**.
* **Programmatically:** Use the [`removeDataValidation`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#removedatavalidation) method.


## Highlight Invalid Data

Highlight invalid data feature is used to highlight the previously entered invalid values.

* **Ribbon UI:** Select the **Data** tab, then choose **Highlight Invalid Data**.
* **Programmatically:** Use the [`addInvalidHighlight`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#addinvalidhighlight) method.


## Clear Highlighted Invalid Data

Clear highlight feature is used to remove the highlight from invalid cells.

* **Ribbon UI:** Select the **Data** tab, then choose **Clear Highlight**.
* **Programmatically:** Use the [`removeInvalidHighlight`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#removeinvalidhighlight) method.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/data-validation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="DataValidation.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/data-validation/dataValidation.cs %}
{% endhighlight %}
{% endtabs %}

## Custom Data validation

The Spreadsheet supports custom data validation, allowing users to define their own validation rules for specific cells or ranges. This feature enables you to set conditions that the entered data must meet, making it particularly useful when predefined validation options, such as numbers, dates, or lists, are insufficient.

With custom validation, you can enforce rules using logical expressions or formulas, ensuring that only valid data is entered into the Spreadsheet.

**Example:** Validate a number between 10 and 100 using the formula `=AND(A1>10, A1<100)`, where A1 is the cell being validated. The Spreadsheet evaluates entered values against the formula and displays an alert if validation fails.

You can apply custom data validation using two methods.

* **Ribbon UI:** Navigate to **Data** tab, select **Data Validation**, then choose **Custom** from the **Allow** dropdown.
* **Programmatically:** Use the [`addDataValidation`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#adddatavalidation) method.

The following code example demonstrates how to add custom data validation with a formula in a Spreadsheet.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/data-validation-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="DataValidation.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/data-validation-cs2/dataValidation.cs %}
{% endhighlight %}
{% endtabs %}

## Limitations of Data validation

The following features have some limitations in Data Validation:

* Entire row data validation.
* Insert row between the data validation.
* Copy/paste with data validation.
* Delete cells between data validation applied range.

## See Also

* [Formatting](./formatting)
* [Rows and columns](./rows-and-columns)
* [Hyperlink](./link)
* [Sorting](./sort)