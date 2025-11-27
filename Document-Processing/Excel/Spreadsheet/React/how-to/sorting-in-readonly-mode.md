---
layout: post
title:  Allow sorting in readonly mode while preventing other actions in React Spreadsheet | Syncfusion
description: Learn here all about how to enable sorting while preventing editing and other actions in React Spreadsheet component of Syncfusion Essential JS 2 and more. 
control: Spreadsheet
platform: document-processing
documentation: ug
---

## How to allow sorting in readonly mode while preventing other actions in React Spreadsheet??

In Syncfusion React Spreadsheet, using the [`setRangeReadOnly`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#setrangereadonly) method makes a range of cells, rows, or columns completely read-only. This means no operations—including sorting—can be performed on those cells.

If your requirement is to allow sorting in read-only mode while preventing other actions (such as cut, paste, autofill, formatting, and validation), you need to use event-based customization instead of the [`setRangeReadOnly`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#setrangereadonly) method.

To achieve this requirement, the following events can be used:

*   [`cellEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#celledit) → To prevent editing in specific columns.
*   [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin)→ To prevent other actions (cut, paste, autofill, formatting, etc.) while allowing sorting.

### Step 1: Prevent editing for specific columns

To prevent editing for specific columns, use the [`cellEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#celledit) event, which triggers whenever a cell enters edit mode. By checking the column index and setting `args.cancel = true`, you can stop editing for those columns. This ensures that users cannot modify the cell content in those columns.

### Step 2: Prevent other actions while allowing sorting

To prevent other actions while allowing sorting, use the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) event. This event triggers before any action starts (such as cut, paste, autofill, formatting, etc.). In this event:

*   Check the type of action being performed.
*   Verify if the target range includes the restricted columns.
*   If the column is in the restricted list, cancel the action by setting `args.cancel = true`.

This approach ensures that sorting is allowed, while other operations like cut, paste, autofill, and formatting are prevented for those columns.

The following example demonstrates how to allow sorting while preventing editing and other actions such as cut, paste, autofill, formatting, validation, and conditional formatting in the spreadsheet. You can also restrict additional actions by following the same approach.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/sorting-in-readonly-mode/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/sorting-in-readonly-mode/app/app.tsx %}
{% endhighlight %}
{% endtabs %}


{% previewsample "/document-processing/code-snippet/spreadsheet/react/sorting-in-readonly-mode" %}