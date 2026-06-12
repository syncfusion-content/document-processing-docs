---
layout: post
title:  Prevent actions without read-only and sheet protection | Syncfusion
description: Learn here all about to prevent actions without read-only and sheet protection in EJ2 ASP.NET Core Spreadsheet component of Syncfusion Essential JS 2 and more. 
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Prevent actions without read-only and protection in ASP.NET Core Spreadsheet

In Syncfusion ASP.NET Core Spreadsheet, the [**read-only**](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-core/protect-sheet#make-cells-read-only-without-protecting-worksheet) feature makes a range of cells, rows, or columns completely non-editable and restricts all spreadsheet actions on those cells. Similarly, the [**sheet protection**](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-core/protect-sheet#protect-sheet) feature locks the entire sheet and restricts all spreadsheet actions on the sheet. It does not allow actions such as formatting cells, rows, or columns, selecting cells, or inserting hyperlinks—unless these options are explicitly enabled in the [`protectSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.ProtectSettingsModel.html).

If your requirement is to prevent actions (such as cut, paste, autofill, formatting, and validation) without locking the entire sheet using the [`protectSheet`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#protectsheet) method or making the cells read-only via the [`setRangeReadOnly`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#setrangereadonly) method, you can achieve this through event-based customization. This approach allows you to restrict specific actions on selected cells while keeping the rest of the sheet fully interactive.

**Events to Use**
To achieve this requirement, the following events can be used:

*   [`cellEdit`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_CellEdit) → To prevent editing for specific cells.
*   [`actionBegin`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ActionBegin)→ To prevent spreadsheet actions such as cut, paste, autofill, formatting, etc.

## Prevent editing for specific cells

To prevent editing for specific cells, use the [`cellEdit`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_CellEdit) event, which triggers whenever a cell enters edit mode. By checking the column index and setting `args.cancel = true`, you can prevent editing for those columns. This ensures that users cannot modify the cell content in those columns.

```js
// Triggers when cell editing starts in the spreadsheet.
    const cellEdit = (args: any) =>{
        var addressRange = getCellIndexes(args.address.split('!')[1]);
        // preventing cellEditing from the readOnly columns
        if (readOnlyColumns.includes(addressRange[1])) {
            args.cancel = true;
        }
    }

    <SpreadsheetComponent ref={spreadsheetRef} cellEdit={cellEdit}>
```

## Prevent specific spreadsheet actions

To prevent specific action after preventing the cell editing, you need to use the [`actionBegin`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ActionBegin) event. This event triggers before any action starts (such as cut, paste, autofill, formatting, etc.). In this event:

*   Fetch the target address based on the type of action being performed using `args.action` property.
*   Verify if the target range includes the restricted columns.
*   If the column is in the restricted list, cancel the action by setting `cancel` property to `true`.

This approach ensures that spreadsheet actions such as cut, paste, autofill, formatting, validation, and conditional formatting are prevented for specific cells without protecting the sheet or making the cells read-only.

> **Note:** In this example, column indexes are used to restrict actions. You can also apply the same restrictions using row indexes or specific cell addresses. This is a purely component-level customization and, unlike sheet protection, it will not be preserved in the exported file.

The following example demonstrates how to prevent actions such as cut, paste, autofill, formatting, validation, and conditional formatting for specific cells(in the first and third columns) in the spreadsheet without protecting the sheet or making the cells read-only. You can also restrict additional actions by following the same approach.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/prevent-actions-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="preventActionsController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/prevent-actions-cs1/preventActionsController.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Protection](../protect-sheet) 
* [Events](../events)
