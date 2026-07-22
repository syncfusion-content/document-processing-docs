---
layout: post
title: Calculation Mode in React Spreadsheet component | Syncfusion
description: Learn about the calculation mode in the React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Calculation Mode in React Spreadsheet

The Spreadsheet provides a **Calculation Mode** feature similar to the calculation options in online Excel. This feature lets you control when and how formulas are recalculated in the spreadsheet. The available modes are:

* **Automatic**: Formulas are recalculated instantly whenever a change is made in dependent cells.  
* **Manual**: Formulas are recalculated only when explicitly triggered by the user using options like **Calculate Sheet** or **Calculate Workbook**.

You can configure the calculation mode using the [`calculationMode`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#calculationmode) property of the Spreadsheet. These modes give flexibility to balance real-time updates with performance optimization.

## Automatic Mode

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

## Manual Mode

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

