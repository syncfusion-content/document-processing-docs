---
layout: post
title: Number Formatting in the React Spreadsheet component | Syncfusion
description: Learn here all about Number formatting in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.control: Formatting
platform: document-processing
documentation: ug
---

# Number Formatting in the React Spreadsheet component

Number formatting defines the type of data displayed in the Spreadsheet. You can enable or disable the number formatting using the [`allowNumberFormatting`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allownumberformatting) property. The Spreadsheet supports the following number formatting types:

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
| Scientific | `0.00E+00` | 11 |
| Text | `@` | 49 |

Number formatting can be applied in following ways,
* Using the [format](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cell#format) property on a `cell`, you can set the desired format for each cell at initial load.
* Using the [`numberFormat`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#numberformat) method, you can set the number format on a cell or a range of cells.
* Selecting the number format option from the ribbon toolbar.

## Custom Number Formatting

The Spreadsheet supports custom number formats to display your data as numbers, dates, times, percentages, and currency values. If the predefined formats do not meet your needs, you can set your own custom formats using the custom number formats dialog or the [`numberFormat`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#numberformat) method.

The custom number formats available in the custom number formats dialog are:

| Type | Format Code | Format ID |
|-------|---------|---------|
| General(default) | NA | 0 |
| Number | `0` | 1 |
| Number | `0.00` | 2 |
| Number | `#,##0` | 3 |
| Number | `#,##0.00` | 4 |
| Number | `#,##0_);(#,##0)` | 37 |
| Number | `#,##0_);[Red](#,##0)` | 38 |
| Number | `#,##0.00_);(#,##0.00)` | 39 |
| Number | `#,##0.00_);[Red](#,##0.00)` | 40 |
| Currency | `$#,##0_);($#,##0)` | 5 |
| Currency | `$#,##0_);[Red]($#,##0)` | 6 |
| Currency | `$#,##0.00_);($#,##0.00)` | 7 |
| Currency | `$#,##0.00_);[Red]($#,##0.00)` | 8 |
| Percentage | `0%` | 9 |
| Percentage | `0.00%` | 10 |
| Scientific | `0.00E+00` | 11 |
| Scientific | `##0.0E+0` | 48 |
| Fraction | `# ?/?` | 12 |
| Fraction | `# ??/??` | 13 |
| ShortDate | `m/d/yyyy` | 14 |
| Custom | `d-mmm-yy` | 15 |
| Custom | `d-mmm` | 16 |
| Custom | `mmm-yy` | 17 |
| Custom | `h:mm AM/PM` | 18 |
| Custom | `h:mm:ss AM/PM` | 19 |
| Custom | `h:mm` | 20 |
| Custom | `h:mm:ss` | 21 |
| Custom | `m/d/yyyy h:mm` | 22 |
| Custom | `mm:ss` | 45 |
| Custom | `mm:ss.0` | 47 |
| Text | `@` | 49 |
| Custom | `[h]:mm:ss` | 46 |
| Accounting | `_($* #,##0_);_($* (#,##0);_($* "-"_);_(@_)` | 42 |
| Accounting | `_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)` | 41 |
| Accounting | `_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)` | 44 |
| Accounting | `_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)` | 43 |

You can apply a custom number format in the following ways:
* Using the [`numberFormat`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#numberformat) method, you can set your own custom number format on a cell or a range of cells.
* Selecting the custom number format option from the custom number formats dialog, or typing your own format in the dialog input and clicking **Apply**, applies the custom format to the selected cells.

The following code example shows number formatting applied to cell data.

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

## Configure Culture-specific Custom format

Earlier, the custom format dialog always showed formats using English settings (group separator, decimal separator, and currency symbol were not updated based on the applied culture). Starting from version **27.1.\***, the dialog now displays formats according to the applied culture. You can select a culture-based number format or enter your own format using the culture-specific decimal separator, group separator, and currency symbol. After that, click **Apply** to apply the culture-specific custom format to the selected cells.

The Spreadsheet supports customizing the formats shown in the dialog using the `configureLocalizedFormat` method. Pass a collection of default number format IDs and their corresponding format codes; the dialog then displays the customized formats. See the [default number format IDs](https://learn.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.numberingformat) in the Excel built-in number format reference.

Compared to Excel, the date, time, currency, and accounting formats vary across different cultures. For example, when an Excel file with the date format `'m/d/yyyy'` is imported in the `en-US` culture, the spreadsheet displays the date in that format. However, when the same file is imported in the German culture, the date format changes to `'dd.MM.yyyy'`, which is the default for that region. The default number format ID for the date is 14. To customize the date format based on the culture, you should map the default number format ID to the appropriate culture-specific format code, like this: `{ id: 14, code: 'dd.MM.yyyy' }` in the `configureLocalizedFormat` method.

> The format code must use the default decimal separator (`.`) and group separator (`,`).

The code below illustrates how culture-based format codes are mapped to their corresponding number format ID for the `German` culture.

```js
import { configureLocalizedFormat } from '@syncfusion/ej2-react-spreadsheet';

const deLocaleFormats = [
    { id: 14, code: 'dd.MM.yyyy' },
    { id: 15, code: 'dd. MMM yy' },
    { id: 16, code: 'dd. MMM' },
    { id: 17, code: 'MMM yy' },
    { id: 20, code: 'hh:mm' },
    { id: 21, code: 'hh:mm:ss' },
    { id: 22, code: 'dd.MM.yyyy hh:mm' },
    { id: 37, code: '#,##0;-#,##0' },
    { id: 38, code: '#,##0;[Red]-#,##0' },
    { id: 39, code: '#,##0.00;-#,##0.00' },
    { id: 40, code: '#,##0.00;[Red]-#,##0.00' },
    { id: 5, code: '#,##0 "€";-#,##0 "€"' },
    { id: 6, code: '#,##0 "€";[Red]-#,##0 "€"' },
    { id: 7, code: '#,##0.00 "€";-#,##0.00 "€"' },
    { id: 8, code: '#,##0.00 "€";[Red]-#,##0.00 "€"' },
    { id: 41, code: '_-* #,##0_-;-* #,##0_-;_-* "-"_-;_-@_-' },
    { id: 42, code: '_-* #,##0 "€"_-;-* #,##0 "€"_-;_-* "-" "€"_-;_-@_-' },
    { id: 43, code: '_-* #,##0.00_-;-* #,##0.00_-;_-* "-"??_-;_-@_-' },
    { id: 44, code: '_-* #,##0.00 "€"_-;-* #,##0.00 "€"_-;_-* "-"?? "€"_-;_-@_-' }
];

// Mapping culture-based number formats for the "de" culture: The "spreadsheetRef.current" parameter is an instance of the spreadsheet component, and the "deLocaleFormats" parameter is an array containing format codes and their corresponding format IDs for the "de" culture.
configureLocalizedFormat(spreadsheetRef.current, deLocaleFormats);
```

The following code example demonstrates how to configure culture-based formats for different cultures in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/globalization-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/globalization-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/globalization-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/globalization-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/globalization-cs1" %}

## Note

You can refer to our [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for feature highlights. You can also explore our [React Spreadsheet example](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started) to learn how to present and manipulate data.

## See Also

* [Text & Cell Formatting](./text-cell-formatting)
* [Conditional Formatting](./conditional-formatting)
* [Cell Range](./cell-range)
