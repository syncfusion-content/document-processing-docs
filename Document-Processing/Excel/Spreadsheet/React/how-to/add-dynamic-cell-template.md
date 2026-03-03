---
layout: post
title: Dynamic cell template with dropdowns — React Spreadsheet | Syncfusion
description: Rendering a dropdown inside a cell using a dynamic cell template in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Create Dynamic Cell Templates with Dropdowns in React Spreadsheet

In the Syncfusion Spreadsheet, you can add custom templates in cells. Before, cell templates were added by using the `template` property inside ranges, and templates were rendered through the `beforeCellRender` event.

But you can apply custom templates by assigning a template name directly to a cell. During `beforeCellRender`, the Spreadsheet checks for this template and renders the template. Templates can be added when the sheet loads or applied to any selected cell.

The following sample shows how to add custom dropdown template in cells. It includes a custom Ribbon tab named template with a dropdown button. You can also initialize the templates to the cells. When the dropdown list button is clicked, the Spreadsheet dynamically applies the dropdown template to the currently active cell.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/dynamic-cell-template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/dynamic-cell-template-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/dynamic-cell-template-cs1" %}