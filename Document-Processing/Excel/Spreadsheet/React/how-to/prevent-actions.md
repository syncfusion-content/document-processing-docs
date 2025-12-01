---
layout: post
title:  Prevent actions without read-only and sheet protection in React Spreadsheet | Syncfusion
description: Learn here all about to prevent actions without read-only and sheet protection in React Spreadsheet component of Syncfusion Essential JS 2 and more. 
control: Spreadsheet
platform: document-processing
documentation: ug
---

# How to prevent actions for specific cells without protecting the sheet or making it read-only in React Spreadsheet ?

In Syncfusion React Spreadsheet, the [**read-only**](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/protect-sheet#make-cells-read-only-without-protecting-worksheet) feature makes a range of cells, rows, or columns completely non-editable and restricts all spreadsheet actions on those cells. Similarly, the [**sheet protection**](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/protect-sheet#protect-sheet) feature locks the entire sheet and restricts all spreadsheet actions on the sheet. It does not allow actions such as formatting cells, rows, or columns, selecting cells, or inserting hyperlinks—unless these options are explicitly enabled in the [`protectSettings`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/protectsettingsmodel).

If your requirement is to prevent actions (such as cut, paste, autofill, formatting, and validation) without locking the entire sheet using the [`protectSheet`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#protectsheet) method or making the cells read-only via the [`setRangeReadOnly`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#setrangereadonly) method, you can achieve this through event-based customization. This approach allows you to restrict specific actions on selected cells while keeping the rest of the sheet fully interactive.

**Events to Use**
To achieve this requirement, the following events can be used:

*   [`cellEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#celledit) → To prevent editing for specific cells.
*   [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin)→ To prevent spreadsheet actions such as cut, paste, autofill, formatting, etc.

**Step 1: Prevent editing for specific cells**

To prevent editing for specific cells, use the [`cellEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#celledit) event, which triggers whenever a cell enters edit mode. By checking the column index and setting `args.cancel = true`, you can prevent editing for those columns. This ensures that users cannot modify the cell content in those columns.

**Step 2: Prevent specfic spreadsheet actions**

To prevent specfic action after preventing the cell edting, you need to use the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) event. This event triggers before any action starts (such as cut, paste, autofill, formatting, etc.). In this event:

*   Fetch the target address based on the type of action being performed using `args.action` property.
*   Verify if the target range includes the restricted columns.
*   If the column is in the restricted list, cancel the action by setting `args.cancel = true`.

This approach ensures that spreadsheet actions such as cut, paste, autofill, formatting, validation, and conditional formatting are prevented for specific cells without protecting the sheet or making the cells read-only.

 > **Note:** In this example, we use column indexes to restrict actions. You can also use row indexes or cell addresses for the same purpose.

The following example demonstrates how to prevent actions such as cut, paste, autofill, formatting, validation, and conditional formatting for specific cells in the spreadsheet without protecting the sheet or making the cells read-only. You can also restrict additional actions by following the same approach.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/prevent-actions-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/prevent-actions-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}


{% previewsample "/document-processing/code-snippet/spreadsheet/react/prevent-actions-cs1" %}

## See Also

* [Protection](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/protect-sheet)