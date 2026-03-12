---
layout: post
title: Create custom cell templates and display icons or elements in the React Spreadsheet component | Syncfusion
description: Learn here how to add custom templates to show icons or controls in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Create Custom Cell Templates

The Syncfusion React Spreadsheet component lets you display custom templates inside cells.

You can insert icons, labels, buttons, or any custom templates. This is useful when you need custom functionality inside cells.

You can add templates to cells by dynamically assigning a custom template property directly to individual cells. When a cell has this custom template property, you can use the [beforeCellRender](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellrender) event to append the desired template element to the cell.

The following sample demonstrates how to insert a [Syncfusion Dropdown component](https://www.npmjs.com/package/@syncfusion/ej2-dropdowns) into Spreadsheet cells using this custom template property. Additionally, a custom ribbon item named "DropDown List" is included under a new "Template" ribbon tab. When this ribbon item is selected, the Spreadsheet dynamically inserts a dropdown into the currently active cell.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/dynamic-cell-template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/dynamic-cell-template-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/dynamic-cell-template-cs1" %}