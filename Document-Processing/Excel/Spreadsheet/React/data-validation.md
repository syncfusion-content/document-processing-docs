---
layout: post
title: Data validation in EJ2 React Spreadsheet control | Syncfusion
description: Learn here all about Data validation in Syncfusion EJ2 React Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Data validation 
documentation: ug
---

# Data validation in React Spreadsheet component

Data validation restricts users from entering invalid data. Use the [`allowDataValidation`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowdatavalidation) property to enable or disable data validation.


> * The default value for `allowDataValidation` property is `true`.

## Apply Validation

You can apply data validation to restrict the type of data or the values that users enter into a cell.

* **Ribbon UI:** Select the **Data** tab, then choose **Data Validation**.
* **Programmatically:** Use the [`addDataValidation`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#adddatavalidation) method.


## Clear Validation

Clear validation using one of these methods:

* **Ribbon UI:** Select the **Data** tab, then choose **Clear Validation**.
* **Programmatically:** Use the [`removeDataValidation`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#removedatavalidation) method.


## Highlight Invalid Data

Highlight invalid data feature is used to highlight the previously entered invalid values.

* **Ribbon UI:** Select the **Data** tab, then choose **Highlight Invalid Data**.
* **Programmatically:** Use the [`addInvalidHighlight`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#addinvalidhighlight) method.


## Clear Highlighted Invalid Data

Clear highlight feature is used to remove the highlight from invalid cells.

* **Ribbon UI:** Select the **Data** tab, then choose **Clear Highlight**.
* **Programmatically:** Use the [`removeInvalidHighlight`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#removeinvalidhighlight) method.


{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/data-validation-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/data-validation-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/data-validation-cs1" %}

## Custom Data validation

The Spreadsheet supports custom data validation, allowing users to define their own validation rules for specific cells or ranges. This feature enables you to set conditions that the entered data must meet, making it particularly useful when predefined validation options, such as numbers, dates, or lists, are insufficient.

**Example:** Validate a number between 10 and 100 using the formula `=AND(A1>10, A1<100)`, where A1 is the cell being validated. The Spreadsheet evaluates entered values against the formula and displays an alert if validation fails.

You can apply custom data validation using two methods.

* **Ribbon UI:** Navigate to **Data** tab, select **Data Validation**, then choose **Custom** from the **Allow** dropdown.
* **Programmatically:** Use the [`addDataValidation`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#adddatavalidation) method.

The following code example demonstrates how to add custom data validation with a formula in a Spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/data-validation-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/data-validation-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/data-validation-cs2" %}

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