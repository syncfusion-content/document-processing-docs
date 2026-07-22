---
layout: post
title: Clear Cell Contents or Formats in React Spreadsheet | Syncfusion
description: Learn here how to apply clear cell contents or formats in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Clear Cell Contents or Formats in React Spreadsheet

The **Clear** feature enables you to remove cell contents (formulas and data), formats (including number formats, conditional formats, and borders), and hyperlinks from a spreadsheet. When you use the **Clear All** option, both the contents and formats are removed simultaneously.

## Applying the Clear feature

You can clear cell contents or formats using the following approaches:

- **Ribbon Toolbar:** Select the clear icon under the `Home` tab to access clear options.
- **Programmatically:** Use the [`clear`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#clear) method.

The available clear options are:

| Option             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `Clear All`        | Clears all contents, formats, and hyperlinks.                               |
| `Clear Formats`    | Clears only the formats (including number formats, conditional formats, and borders) in a cell. |
| `Clear Contents`   | Clears only the contents (formulas and data) in a cell.                     |
| `Clear Hyperlinks` | Clears only the hyperlinks in a cell.                                       |

The following code example demonstrates how to clear cell contents and formats in a button click event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/clear-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/clear-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/clear-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/clear-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/clear-cs1" %}
