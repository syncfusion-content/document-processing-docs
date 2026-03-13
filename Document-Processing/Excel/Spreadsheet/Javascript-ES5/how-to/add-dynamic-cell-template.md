---
layout: post
title: Dynamic cell template in EJ2 Javascript Spreadsheet component | Syncfusion
description: Render dropdown templates inside cells in Syncfusion EJ2 Javascript Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Create Dynamic Cell Templates with Dropdowns in EJ2 Javascript Spreadsheet

You can add templates to cells in the Syncfusion Spreadsheet component by dynamically assigning a custom template property directly to individual cells. When a cell has this custom template property, you can use the [beforeCellRender](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#beforecellrender) event to append the desired template element to the cell.

The following sample demonstrates how to insert a [Syncfusion Dropdown component](https://www.npmjs.com/package/@syncfusion/ej2-dropdowns) into Spreadsheet cells using this custom template property. Additionally, a custom ribbon item named "DropDown List" is included under a new "Template" ribbon tab. When this ribbon item is selected, the Spreadsheet dynamically inserts a dropdown into the currently active cell.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/dynamic-cell-template-cs1/app/index.js %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/dynamic-cell-template-cs1/app/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/dynamic-cell-template-cs1" %}