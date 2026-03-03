---
layout: post
title: Dynamic cell template with dropdowns — React Spreadsheet | Syncfusion
description: Rendering a dropdown inside a cell using a dynamic cell template in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Create Dynamic Cell Templates with Dropdowns in React Spreadsheet

Templates can be added directly to cells or initialized for a range of cells. A custom Ribbon tab can also be added so users can insert a dropdown into the selected cell.

When the user picks an item, the chosen value is written back into the sheet, keeping the cell updated. This keeps the dropdown feature simple, as only the template name is stored and the control is created during rendering. You can also add your own custom template to display any UI element you need inside the cell.

The following code example shows how to add a dropdown from a custom template:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/dynamic-cell-template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/dynamic-cell-template-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/dynamic-cell-template-cs1" %}