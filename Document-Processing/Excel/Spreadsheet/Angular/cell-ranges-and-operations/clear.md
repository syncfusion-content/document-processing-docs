---
layout: post
title: Clear Cell Contents or Formats in React Spreadsheet | Syncfusion
description: Learn here how to apply clear cell contents or formats in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Clear Cell Contents or Formats in React Spreadsheet

The **Clear** feature enables you to remove cell contents (formulas and data) and formats (including number formats, conditional formats, and borders) from a spreadsheet. When you use **Clear All**, both the contents and formats are removed simultaneously.

## Applying the Clear Feature

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
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/clear-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/clear-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/clear-cs1" %}
