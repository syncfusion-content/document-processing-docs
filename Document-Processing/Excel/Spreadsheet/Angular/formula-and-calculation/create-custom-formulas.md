---
layout: post
title: Custom Function Creation in Angular Spreadsheet | Syncfusion
description: Learn here all about custom functions in Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formulas 
platform: document-processing
documentation: ug
---

# Create User Defined Functions / Custom Functions in Angular Spreadsheet

The Spreadsheet includes a set of built-in formulas. For convenience, you can find the list of supported formulas [here](https://help.syncfusion.com/document-processing/excel/spreadsheet/angular/formulas#supported-formulas).

You can also define and use formulas that are not supported by default, known as **user defined/custom formulas**, by using the [addCustomFunction](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#addcustomfunction) function. Keep in mind that a user defined/custom formula should return only a single value. If the formula returns an array, updating adjacent cell values will take more time and may affect performance.

The following code example shows how to use an unsupported formula in the Spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/formula-cs1/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/formula-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/samples/spreadsheet/angular/formula-cs1" %}

To directly compute a formula or expression, use the [computeExpression](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#computeexpression) method. This method will work for both built-in and used-defined/custom formula.

The following code example shows how to use `computeExpression` method in the spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/formula-cs2/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/formula-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/samples/spreadsheet/angular/formula-cs2" %}
