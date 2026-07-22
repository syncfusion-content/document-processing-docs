---
layout: post
title: Wrap Text in React Spreadsheet component | Syncfusion
description: Learn how to apply wrap text to cells in the React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Wrap text in React Spreadsheet

Wrap text allows you to display large content as multiple lines in a single cell. By default, wrap text support is enabled in the Spreadsheet. Use the [`allowWrap`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowwrap) property to enable or disable wrap text support.

You can apply or remove wrap text to a cell or range of cells in any of the following ways:

* Using the `wrap` property in a `cell`, you can enable or disable wrap text to a cell at initial load.
* Select or deselect the **Wrap Text** button from the ribbon **Home** tab to apply or remove wrap text for the selected range.
* Using the [`wrap`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#wrap) method, you can apply or remove the wrap text once the component is loaded.

The following code example shows the wrap text functionality in the Spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/wrap-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/wrap-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/wrap-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/wrap-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/wrap-cs1" %}

## Limitations

The following features have some limitations when using wrap text:

- Sorting with wrap text applied data.
- Merge with wrap text