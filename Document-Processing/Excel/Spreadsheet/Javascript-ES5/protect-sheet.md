---
layout: post
title: Protect Sheet in JavaScript Spreadsheet | Syncfusion
description: Protect sheet in JavaScript Spreadsheet restricts editing and controls user access to worksheet content, helping maintain data integrity.
platform: document-processing
control: Protect sheet
documentation: ug
---

# Protect Sheet in JavaScript Spreadsheet

Sheet protection helps prevent users from modifying the data in the spreadsheet.

## Protect Sheet

Protect Sheet feature helps you prevent unauthorized users from accidentally changing, editing, moving, or deleting data in a spreadsheet. You can also protect the sheet with a password.

You can use the [`isProtected`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#isprotected) property to enable or disable the sheet protection functionality.

> The default value for `isProtected` property is `false`.

When a sheet is protected, selecting, formatting, inserting, and deleting operations are disabled by default. To enable some of the above said functionalities the `protectSettings` options are used in a protected spreadsheet.

The available `protectSettings` options in the spreadsheet are:

| Options | Description |
|---------|-------------|
| `Select Cells` | Used to perform cell selection. |
| `Format Cells` | Used to perform cell formatting. |
| `Format Rows` | Used to perform row formatting. |
| `Format Columns` | Used to perform column formatting. |
| `Insert Link` | Used to perform hyperlink insertions. |

> The default value of all `protectSettings` options are `false`.

By default, the `Protect Sheet` module is injected internally into the Spreadsheet to perform the sheet protection function.

**User Interface**:

In the active Spreadsheet, sheet protection can be performed in any of the following ways:

* Select the `Protect Sheet` item in the Ribbon toolbar under the **Data** tab, and then select your desired options.
* Right-click the sheet tab, select the `Protect Sheet` item in the context menu, and then select your desired options.
* Use the [`protectSheet()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#protectsheet) method programmatically.

The following example shows `Protect Sheet` functionality with password in the Spreadsheet control.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/protect-sheet-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/protect-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/protect-sheet-cs1" %}

### Limitations of Protect Sheet

* Password encryption is not supported

## Unprotect Sheet

Unprotect sheet is used to enable all the functionalities that are already disabled in a protected spreadsheet.

**User Interface**:

In the active Spreadsheet, the sheet Unprotection can be done by any of the following ways:

* Select the `Unprotect Sheet` item in the Ribbon toolbar under the **Data** tab.
* Right-click the sheet tab, and select the `Unprotect Sheet` item in the context menu.

* Use the [`unprotectSheet()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#unprotectsheet) method programmatically.

## Unlock the particular cells in the protected sheet

In a protected spreadsheet, to make a particular cell or range of cells editable, use the [`lockCells()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#lockcells) method with the `range` parameter and the `isLocked` property set to `false`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/protect-sheet-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/protect-sheet-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/protect-sheet-cs2" %}

## Make cells read-only without protecting worksheet

Previously, you could make cells read-only by protecting the entire sheet using the [protectSheet](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#protectsheet) method or through the UI option. Meanwhile, to make a specific range of cells editable within a protected sheet, you needed to use the [lockCells](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#lockcells) method, passing the `range` parameter and setting the `isLocked` property to **false**. 

Now, you can make an entire row, an entire column, or a specific range of cells read-only using the [setRangeReadOnly](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#setrangereadonly) method without protecting the entire sheet. This method accepts three parameters, as detailed in the following table:

| Parameter | Description |
|-----|------|
| `readOnly` | Specifies whether an entire row, an entire column, or a specific range of cells should be set as read-only (**true**) or editable (**false**). |.
| `range` | Specifies the particular range of cells to be set as read-only. |
| `sheetIndex` | Specifies the index of the sheet. |

You can make an entire row, an entire column, or a specific range of cells read-only by passing the range as shown in the code snippet below:

```js
// To set read-only for single cell.
spreadsheet.setRangeReadOnly(true, 'A2', 0)
// To set read-only for range of cells.
spreadsheet.setRangeReadOnly(true, 'A2:B5', 0)
// To set read-only for entire row.
spreadsheet.setRangeReadOnly(true, '3:3', 0)
// To set read-only for entire column.
spreadsheet.setRangeReadOnly(true, 'A:A', 0)
```
You can make the cells read-only in the cell data binding by setting the `isReadOnly` property to **true** for the respective rows, columns, and cells. Please refer to the code snippet below to see how to set cells to read-only in the cell data binding:

```ts
   sheets: [
       {
           rows: [
               //To set read-only for entire row.
               {index: 3, isReadOnly: true},
               {
                   index: 4,
                   cells: [
                       //To set read-only for the cell.
                       { index: 4, isReadOnly: true }
                   ]
               }],
           columns: [
               //To set read-only for entire column.
               { isReadOnly: true }
           ]
       }]
```

The following example demonstrates how to make rows, columns, and cells read-only without protecting the sheet:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/readonly-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/readonly-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/readonly-cs1" %}

## Protect Workbook

Protect workbook feature helps you protect the workbook so that users cannot insert, delete, rename, hide the sheets in the spreadsheet.

* You can use the [`password`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#password) property to protect the workbook with a password.
* You can use the [`isProtected`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#isprotected) property to protect or unprotect the workbook without a password.

> The default value of the `isProtected` property is `false`.

**User Interface**:

In the active Spreadsheet, you can protect the workbook by selecting the **Data** tab in the Ribbon toolbar and choosing the `Protect Workbook` item. Then, enter the password, confirm it, and click **OK**.

The following example shows `Protect Workbook` by using the [`isProtected`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#isprotected) property in the Spreadsheet control.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/protect-workbook/default-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/protect-workbook/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/protect-workbook/default-cs1" %}

The following example shows `Protect Workbook` by using the [`password`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#password) property in the Spreadsheet control. To unprotect the workbook, click the unprotect workbook button in the data tab and provide the password as syncfusion<sup style="font-size:70%">&reg;</sup> in the dialog box.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/protect-workbook/default-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/protect-workbook/default-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/protect-workbook/default-cs2" %}

## Unprotect Workbook

Unprotect Workbook is used to enable the insert, delete, rename, move, copy, hide or unhide sheets feature in the spreadsheet.

**User Interface**:

In the active Spreadsheet, the workbook can be unprotected in any of the following ways:

* Select the `Unprotect Workbook` item in the Ribbon toolbar under the **Data** tab, and provide the valid password in the dialog box.

## See Also

* [Hyperlink](./link)
