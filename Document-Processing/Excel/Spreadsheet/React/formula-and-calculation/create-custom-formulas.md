---
layout: post
title: Custom Function Creation in React Spreadsheet | Syncfusion
description: Learn here all about custom functions in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formulas 
platform: document-processing
documentation: ug
---

# Create User-Defined Functions / Custom Functions in React Spreadsheet

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

To directly compute a formula or expression, use the [computeExpression](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#computeexpression) method. This method will work for both built-in and used-defined/custom formula.

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

