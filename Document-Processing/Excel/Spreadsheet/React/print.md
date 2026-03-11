---
layout: post
title: Print in React Spreadsheet component | Syncfusion
description: Learn here all about print feature in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Print
platform: document-processing
documentation: ug
---

# Print in React Spreadsheet component

The printing functionality allows end-users to print all contents, such as tables, charts, images, and formatted contents, available in the active worksheet or entire workbook or selected range in the Spreadsheet. You can enable or disable print functionality by using the `allowPrint` property, which defaults to **true**.

## Default printing

The active worksheet in the Spreadsheet can be printed by selecting the **File > Print** option in the ribbon menu. You can also initiate the printing using the `Ctrl` + `P` keyboard shortcut when the Spreadsheet is in focus. These two options print only the data from the active sheet without including rows headers, column headers and grid lines.

![Spreadsheet with print option](./images/spreadsheet_print_in_ribbon_menu.png)

## Custom printing

The active worksheet, entire workbook or selected range can be printed with customized options using the `print` method. The `print` method takes one parameter, that is, `printOptions`, which can be used for customization.

The `printOptions` object supports the following properties:

The `type` property defines the scope of content to be printed. It accepts three values:

- `ActiveSheet` – Prints only the currently active worksheet.  
  This is the default behavior and is useful when you want to print just the current sheet without including other worksheets.

- `Workbook` – Prints all worksheets in the workbook.  
  Each sheet is printed sequentially with consistent formatting. This option is ideal for printing complete workbooks or reports that span multiple sheets.

- `PrintRange` – Prints only a specific range of cells from the active worksheet.  
  Before using this option, select the desired range with the `selectRange()` method. The selected range will be printed with its formatting and data.  

  > Note: If multiple ranges are selected, only the first range will be printed.

### `allowGridLines`

Controls whether grid lines appear in the printed copy.  
- Default: `false` (grid lines are not included).  
- Set to `true` to include grid lines, which helps distinguish cell boundaries in the printed document.

### `allowRowColumnHeader`

Controls whether row numbers and column letters (headers) appear in the printed copy.  
- Default: `false` (headers are not included).  
- Set to `true` to include row and column identifiers, which is useful for reference and navigation in printed documents.


> When the `print` method is called without any parameters, the default printing will be performed.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/print-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/print-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/print-cs2" %}

## Disable printing

The printing functionality in the Spreadsheet can be disabled by setting the [`allowPrint`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowprint) property to **false**. After disabling, the **"Print"** option will not be available in the **"File"** menu of the ribbon and as a keyboard shortcut.

![Spreadsheet with print option disabled](./images/spreadsheet_print_disable.png)

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/print-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/print-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/print-cs3" %}


## Limitations

* When printing the document, changing the page orientation to landscape is not supported in both the `print` method and print preview dialog of the web browser.
* The styles provided for the data validation functionality will not be available in the printed copy of the document.
* The content added to the cell templates, such as HTML elements, Syncfusion<sup style="font-size:70%">&reg;</sup> controls, and others, will not be available in the printed copy of the document.
* When selecting multiple ranges for printing, only the first selected range will be printed, not all ranges.