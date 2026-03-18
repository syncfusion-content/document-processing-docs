---
layout: post
title: Dynamic cell template in Vue Spreadsheet component | Syncfusion
description: Render dropdown templates inside cells in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Create Dynamic Cell Templates with Dropdowns in Vue Spreadsheet

You can add templates to cells in the Syncfusion Spreadsheet component by dynamically assigning a custom template property directly to individual cells. When a cell has this custom template property, you can use the [beforeCellRender](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#beforecellrender) event to append the desired template element to the cell.

The following sample demonstrates how to insert a [Syncfusion Dropdown component](https://www.npmjs.com/package/@syncfusion/ej2-dropdowns) into Spreadsheet cells using this custom template property. Additionally, a custom ribbon item named "DropDown List" is included under a new "Template" ribbon tab. When this ribbon item is selected, the Spreadsheet dynamically inserts a dropdown into the currently active cell.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/dynamic-cell-template-cs1/app/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/dynamic-cell-template-cs1/app/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/vue/dynamic-cell-template-cs1" %}