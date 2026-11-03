---
layout: post
title: Custom Function Creation in TypeScript Spreadsheet | Syncfusion
description: Learn about creating custom functions in the Syncfusion TypeScript Spreadsheet control to extend formula capabilities.
control: Formulas 
platform: document-processing
documentation: ug
---

# Custom Function Creation in TypeScript Spreadsheet

The Spreadsheet includes a set of built-in formulas. For convenience, you can find the list of supported formulas [here](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/formulas-and-calculations#supported-formulas).

You can also define and use formulas that are not supported by default, known as **user defined/custom formulas**, by using the [addCustomFunction](https://ej2.syncfusion.com/documentation/api/spreadsheet#addcustomfunction) function. Keep in mind that a user defined/custom formula should return only a single value. If the formula returns an array, updating adjacent cell values will take more time and may affect performance.

The following code example shows how to use an unsupported formula in the Spreadsheet.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/formula-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/formula-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/formula-cs1" %}

To directly compute a formula or expression, use the [computeExpression](https://ej2.syncfusion.com/documentation/api/spreadsheet#computeexpression) method. This method will work for both built-in and used-defined/custom formula.

The following code example shows how to use `computeExpression` method in the spreadsheet.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/formula-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/formula-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/formula-cs2" %}

