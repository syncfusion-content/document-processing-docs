---
layout: post
title: Number Formatting in React Spreadsheet component | Syncfusion
description: Learn here all about Number formatting in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formatting
platform: document-processing
documentation: ug
---

# Number Formatting in React Spreadsheet component

Number formatting provides a type for your data in the Spreadsheet. Use the [`allowNumberFormatting`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allownumberformatting) property to enable or disable the number formatting option in the Spreadsheet.

The different types of number formatting supported in Spreadsheet are:

| Types | Format Code | Format ID |
|---------|---------|---------|
| General(default) | NA | 0 |
| Number | `0.00` | 2 |
| Currency | `$#,##0.00` | NA |
| Accounting | `_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)` | 44 |
| ShortDate | `m/d/yyyy` | 14 |
| LongDate | `dddd, mmmm dd, yyyy` | NA |
| Time | `h:mm:ss AM/PM` | NA |
| Percentage | `0.00%` | 10 |
| Fraction | `# ?/?` | 12 |
| Scientific |`0.00E+00`  | 11 |
| Text | `@` | 49 |

Number formatting can be applied in the following ways:

- Using the `format` property in `cell`, you can set the desired format to each cell at initial load.
- Using the [`numberFormat`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#numberformat) method, you can set the number format to a cell or range of cells.
- Selecting the number format option from the ribbon toolbar.

The following code example shows number formatting usage.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/numberformat-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/numberformat-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/numberformat-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/numberformat-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/numberformat-cs1" %}
