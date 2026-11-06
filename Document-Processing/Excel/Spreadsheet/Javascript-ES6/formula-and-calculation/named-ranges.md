---
layout: post
title: Named Ranges in TypeScript Spreadsheet | Syncfusion
description: Learn about named ranges in the Syncfusion TypeScript Spreadsheet control for referencing cells and ranges efficiently.
control: Formulas 
platform: document-processing
documentation: ug
---

# Named Ranges in TypeScript Spreadsheet

You can assign a meaningful name to a cell range and then use that name in formulas for calculation. This makes formulas easier to read, understand, and maintain. Named ranges can be added to the Spreadsheet in several ways:

* Use the [`definedNames`](https://ej2.syncfusion.com/documentation/api/spreadsheet#definednames) collection to add multiple named ranges during the initial load.  
* Use the [`addDefinedName`](https://ej2.syncfusion.com/documentation/api/spreadsheet#adddefinedname) method to add a named range dynamically at runtime.  
* Remove a named range dynamically using the [`removeDefinedName`](https://ej2.syncfusion.com/documentation/api/spreadsheet#removedefinedname) method.  
* Select a range of cells and enter a name for the selected range directly in the **Name Box**.  

The following code example demonstrates how named ranges can be defined and used in formulas within the Spreadsheet.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/defined-name-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/defined-name-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/defined-name-cs1" %}

