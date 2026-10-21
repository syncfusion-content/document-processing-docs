---
layout: post
title: Named Ranges in Angular Spreadsheet component | Syncfusion
description: Learn here all about named ranges in Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formulas 
platform: document-processing
documentation: ug
---

# Named Ranges in Angular Spreadsheet

You can assign a meaningful name to a cell range and then use that name in formulas for calculation. This makes formulas easier to read, understand, and maintain. Named ranges can be added to the Spreadsheet in several ways:

* Use the [`definedNames`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#definednames) collection to add multiple named ranges during the initial load.  
* Use the [`addDefinedName`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#adddefinedname) method to add a named range dynamically at runtime.  
* Remove a named range dynamically using the [`removeDefinedName`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#removedefinedname) method.  
* Select a range of cells and enter a name for the selected range directly in the **Name Box**.  

The following code example demonstrates how named ranges can be defined and used in formulas within the Spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/defined-name-cs1/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/defined-name-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/samples/spreadsheet/angular/defined-name-cs1" %}
