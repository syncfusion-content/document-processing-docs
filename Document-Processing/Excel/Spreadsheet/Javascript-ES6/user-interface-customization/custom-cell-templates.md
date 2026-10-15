---
layout: post
title: Custom Templates in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about custom templates in the Syncfusion JavaScript ES6 Spreadsheet component for displaying custom cell content.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Custom Templates in JavaScript ES6 Spreadsheet

The [JavaScript ES6 Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-es6-spreadsheet-editor) component lets you display custom templates inside cells. You can insert icons, labels, buttons, or any custom templates. This is useful when you need custom functionality inside cells. You can add templates to cells by dynamically assigning a custom template property directly to individual cells. When a cell has this custom template property, you can use the [beforeCellRender](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#beforecellrender) event to append the desired template element to the cell.

The following sample demonstrates how to insert a [Syncfusion Dropdown component](https://www.npmjs.com/package/@syncfusion/ej2-dropdowns) into Spreadsheet cells using this custom template property. Additionally, a custom ribbon item named "DropDown List" is included under a new "Template" ribbon tab. When this ribbon item is selected, the Spreadsheet dynamically inserts a dropdown into the currently active cell.

The following code sample shows how to create custom cell templates.

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% include code-snippet/spreadsheet/javascript-es6/dynamic-cell-template-cs1/app/app.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/dynamic-cell-template-cs1" %}
