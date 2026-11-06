---
layout: post
title: Wrap Text in TypeScript Spreadsheet | Syncfusion
description: Learn about text wrapping in the Syncfusion TypeScript Spreadsheet control to display lengthy content within cells.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Wrap text in TypeScript Spreadsheet

Wrap text allows you to display large content as multiple lines in a single cell. By default, wrap text support is enabled in the Spreadsheet. Use the [`allowWrap`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#allowwrap) property to enable or disable wrap text support.

You can apply or remove wrap text to a cell or range of cells in any of the following ways:

* Using the `wrap` property in a `cell`, you can enable or disable wrap text to a cell at initial load.
* Select or deselect the **Wrap Text** button from the ribbon **Home** tab to apply or remove wrap text for the selected range.
* Using the [`wrap`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#wrap) method, you can apply or remove the wrap text once the control is loaded.

The following code example shows the wrap text functionality in the Spreadsheet.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/wrap-text-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/wrap-text-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/wrap-text-cs1" %}

## Limitations

The following features have some limitations when using wrap text:

- Sorting with wrap text applied data.
- Merge with wrap text.