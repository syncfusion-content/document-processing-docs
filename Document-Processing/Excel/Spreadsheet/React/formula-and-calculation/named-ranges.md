---
layout: post
title: Named Ranges in React Spreadsheet component | Syncfusion
description: Learn here all about named ranges in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Named Ranges in React Spreadsheet

You can assign a meaningful name to a cell range and then use that name in formulas for calculation. This makes formulas easier to read, understand, and maintain. Named ranges can be added to the Spreadsheet in several ways:

* Use the [`definedNames`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#definednames) collection to add multiple named ranges during the initial load.  
* Use the [`addDefinedName`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#adddefinedname) method to add a named range dynamically at runtime.  
* Remove a named range dynamically using the [`removeDefinedName`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#removedefinedname) method.  
* Select a range of cells and enter a name for the selected range directly in the **Name Box**.  

The following code example demonstrates how named ranges can be defined and used in formulas within the Spreadsheet.


{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/defined-name-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/defined-name-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/defined-name-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/defined-name-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/defined-name-cs1" %}

