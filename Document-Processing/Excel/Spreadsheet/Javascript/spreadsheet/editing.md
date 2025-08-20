---
layout: post
title: Editing in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Editing in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Editing in ##Platform_Name## Spreadsheet control

{% if page.publishingplatform == "typescript" %}

You can edit the contents of a cell directly in the cell or by typing in the formula bar. By default, the editing feature is enabled in the spreadsheet. Use the [`allowEditing`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowediting) property to enable or disable the editing feature.

{% elsif page.publishingplatform == "javascript" %}

You can edit the contents of a cell directly in the cell or by typing in the formula bar. By default, the editing feature is enabled in the spreadsheet. Use the [`allowEditing`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowediting) property to enable or disable the editing feature.

{% endif %}

## Edit cell

You can start editing by one of the following ways,

* Double click a cell to start the edit mode.
* Press `F2` key to edit the active cell.
* Use formula bar to perform editing.
* Use `BACKSPACE` or `SPACE` key to clear the cell content and start the edit mode.
{% if page.publishingplatform == "typescript" %}

* Using the [`startEdit`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#startedit) method.

{% elsif page.publishingplatform == "javascript" %}

* Using the [`startEdit`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#startedit) method.

{% endif %}

## Save cell

If the cell is in editable state, you can save the edited cell by one of the following ways,

* Perform mouse click on any other cell rather than the current editing cell.
* Press `Enter` or `Tab` keys to save the edited cell content.
{% if page.publishingplatform == "typescript" %}

* Using the [`endEdit`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#endedit) method.

{% elsif page.publishingplatform == "javascript" %}

* Using the [`endEdit`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#endedit) method.

{% endif %}

## Cancel editing

To cancel the editing without saving the changes, you can use one of the following ways,

* Press `ESCAPE` key, this will remove the editable state and update the unchanged cell content.
{% if page.publishingplatform == "typescript" %}

* Using the [`closeEdit`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#closeedit) method.

{% elsif page.publishingplatform == "javascript" %}

* Using the [`closeEdit`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#closeedit) method.

{% endif %}

{% if page.publishingplatform == "typescript" %}

The following sample shows how to prevent the editing and cell save. Here `E` column prevent the editing by using cancel argument as true in [`cellEdit`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#celledit) event. In `D` column, prevent saving the edited changes by using cancel argument as true in [`beforeCellSave`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#beforecellsave) and use [`closeEdit`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#closeedit) method in spreadsheet.

{% elsif page.publishingplatform == "javascript" %}

The following sample shows how to prevent the editing and cell save. Here `E` column prevent the editing by using cancel argument as true in [`cellEdit`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#celledit) event. In `D` column, prevent saving the edited changes by using cancel argument as true in [`beforeCellSave`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#beforecellsave) and use [`closeEdit`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#closeedit) method in spreadsheet.

{% endif %}
 
{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/editing-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/editing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/editing-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/editing-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/editing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/editing-cs1" %}
{% endif %}

## Limitations

* Text overflow in cells is not supported in Editing.

## See Also

* [Cell range](./cell-range)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Undo and Redo](./undo-redo)
* [Unlock the particular cells in the protected sheet](./protect-sheet#unlock-the-particular-cells-in-the-protected-sheet)
