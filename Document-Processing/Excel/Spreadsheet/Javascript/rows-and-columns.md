---
layout: post
title: Rows and columns in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Rows and columns in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Rows and columns 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Rows and columns in ##Platform_Name## Spreadsheet control

Spreadsheet is a tabular format consisting of rows and columns. The intersection point of rows and columns are called as cells. The list of operations that you can perform in rows and columns are,

* Insert
* Delete
* Show and Hide

## Insert

{% if page.publishingplatform == "typescript" %}

You can insert rows or columns anywhere in a spreadsheet. Use the [`allowInsert`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowinsert) property to enable or disable the insert option in Spreadsheet.

{% elsif page.publishingplatform == "javascript" %}

You can insert rows or columns anywhere in a spreadsheet. Use the [`allowInsert`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowinsert) property to enable or disable the insert option in Spreadsheet.

{% endif %}
 
### Row

The rows can be inserted in the following ways,

{% if page.publishingplatform == "typescript" %}

* Using [`insertRow`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#insertrow) method, you can insert the rows once the component is loaded.
* Using context menu, insert the empty rows in the desired position.

{% elsif page.publishingplatform == "javascript" %}

* Using [`insertRow`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#insertrow) method, you can insert the rows once the component is loaded.
* Using context menu, insert the empty rows in the desired position.

{% endif %}

The following code example shows the options for inserting rows in the spreadsheet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/insert/row-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/insert/row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/insert/row-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/insert/row-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/insert/row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/insert/row-cs1" %}
{% endif %}

### Column

The columns can be inserted in the following ways,

{% if page.publishingplatform == "typescript" %}

* Using [`insertColumn`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#insertcolumn) method, you can insert the columns once the component is loaded.
* Using context menu, insert the empty columns in the desired position.

{% elsif page.publishingplatform == "javascript" %}

* Using [`insertColumn`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#insertcolumn) method, you can insert the columns once the component is loaded.
* Using context menu, insert the empty columns in the desired position.

{% endif %}
 
The following code example shows the options for inserting columns in the spreadsheet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/insert/column-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/insert/column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/insert/column-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/insert/column-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/insert/column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/insert/column-cs1" %}
{% endif %}

## Delete

{% if page.publishingplatform == "typescript" %}

Delete support provides an option for deleting the rows and columns in the spreadsheet. Use [`allowDelete`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowdelete) property to enable or disable the delete option in Spreadsheet.

{% elsif page.publishingplatform == "javascript" %}

Delete support provides an option for deleting the rows and columns in the spreadsheet. Use [`allowDelete`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowdelete) property to enable or disable the delete option in Spreadsheet.

{% endif %}

The rows and columns can be deleted dynamically in the following ways,

{% if page.publishingplatform == "typescript" %}

* Using [`delete`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#delete) method, you can delete the loaded rows and columns.
* Using context menu, you can delete the selected rows and columns.

{% elsif page.publishingplatform == "javascript" %}

* Using [`delete`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#delete) method, you can delete the loaded rows and columns.
* Using context menu, you can delete the selected rows and columns.

{% endif %}

The following code example shows the delete operation of rows and columns in the spreadsheet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/delete/row-column-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/delete/row-column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/delete/row-column-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/delete/row-column-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/delete/row-column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/delete/row-column-cs1" %}
{% endif %}

## Limitations of insert and delete

The following features have some limitations in Insert/Delete:

* Insert row/column between the formatting applied cells.
* Insert row/column between the data validation.
* Insert row/column between the conditional formatting applied cells.
* Insert/delete row/column between the filter applied cells.

## Hide and show

You can show or hide the rows and columns in the spreadsheet through property binding, method, and context menu.

### Row

The rows can be hidden or shown through the following ways,

* Using `hidden` property in row, you can hide/show the rows at initial load.
* Using `hideRow` method, you can hide the rows by specifying the start and end row index, set the last argument `hide` as `false` to unhide the hidden rows.
* Right-click on the row header and select the desired option from context menu

### Column

The columns can be hidden or shown through following ways,

* Using `hidden` property in columns, you can hide/show the columns at initial load.
* Using `hideColumn` method, you can hide the columns by specifying the start and end column index, set the last argument `hide` as `false` to unhide the hidden columns.
* Right-click on the column header and select the desired option from context menu

The following code example shows the hide/show rows and columns operation in the spreadsheet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/hide-show-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/hide-show-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/hide-show-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/hide-show-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/hide-show-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/hide-show-cs1" %}
{% endif %}

## Size

{% if page.publishingplatform == "typescript" %}

You can change the size of rows and columns in the spreadsheet by using [setRowsHeight](https://ej2.syncfusion.com/documentation/api/spreadsheet/#setrowsheight) and [setColumnsWidth](https://ej2.syncfusion.com/documentation/api/spreadsheet/#setcolumnswidth) methods.

{% elsif page.publishingplatform == "javascript" %}

You can change the size of rows and columns in the spreadsheet by using [setRowsHeight](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#setrowsheight) and [setColumnsWidth](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#setcolumnswidth) methods.

{% endif %}

### Row

{% if page.publishingplatform == "typescript" %}

You can change the height of single or multiple rows by using the [setRowsHeight](https://ej2.syncfusion.com/documentation/api/spreadsheet/#setrowsheight) method.

{% elsif page.publishingplatform == "javascript" %}

You can change the height of single or multiple rows by using the [setRowsHeight](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#setrowsheight) method.

{% endif %}

You can provide the following type of ranges to the method:

* Single row range: `['2:2']`
* Multiple rows range: `['1:100']`
* Multiple rows with discontinuous range: `['1:10', '15:25', '30:40']`
* Multiple rows with different sheets: `[Sheet1!1:50, 'Sheet2!1:50', 'Sheet3!1:50']`

The following code example shows how to change the height for single/multiple rows in the spreadsheet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/row-height-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/row-height-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/row-height-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/row-height-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/row-height-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/row-height-cs1" %}
{% endif %}

### Column

{% if page.publishingplatform == "typescript" %}

You can change the width of single or multiple columns by using the [setColumnsWidth](.https://ej2.syncfusion.com/documentation/api/spreadsheet/#setcolumnswidth) method.

{% elsif page.publishingplatform == "javascript" %}

You can change the width of single or multiple columns by using the [setColumnsWidth](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#setcolumnswidth) method.

{% endif %}

You can provide the following type of ranges to the method:

* Single column range: `['F:F']`
* Multiple columns range: `['A:F']`
* Multiple columns with discontinuous range: `['A:C', 'G:I', 'K:M']`
* Multiple columns with different sheets: `[Sheet1!A:H, 'Sheet2!A:H', 'Sheet3!A:H']`

The following code example shows how to change the width for single/multiple columns in the spreadsheet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/column-width-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/column-width-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/column-width-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/column-width-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/column-width-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/column-width-cs1" %}
{% endif %}

## Changing text in column headers

{% if page.publishingplatform == "typescript" %}

Using the [`beforeCellRender`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#beforecellrender) event, you can change the text in the column headers. In that event, you can use the `e-header-cell` class to identify the header cell element and update its text value.

{% elsif page.publishingplatform == "javascript" %}

Using the [`beforeCellRender`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#beforecellrender) event, you can change the text in the column headers. In that event, you can use the `e-header-cell` class to identify the header cell element and update its text value.

{% endif %}

The following code example shows how to change the text in the column headers.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/column-header-change-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/column-header-change-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/column-header-change-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/column-header-change-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/column-header-change-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/column-header-change-cs1" %}
{% endif %}

## See Also

* [Hyperlink](./link)
* [Sorting](./sort)
* [Filtering](./filter)
