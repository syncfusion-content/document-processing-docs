---
layout: post
title: Row and Column Resize in React Spreadsheet component | Syncfusion
description: Learn here all about row and column size in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Rows and Columns 
platform: document-processing
documentation: ug
---

# Row and Column Size in React Spreadsheet

You can change the size of rows and columns in the spreadsheet by using [setRowsHeight](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setrowsheight) and [setColumnsWidth](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setcolumnswidth) methods.

## Row

You can change the height of single or multiple rows by using the [setRowsHeight](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setrowsheight) method.

You can provide the following type of ranges to the method:

* Single row range: `['2:2']`
* Multiple rows range: `['1:100']`
* Multiple rows with discontinuous range: `['1:10', '15:25', '30:40']`
* Multiple rows with different sheets: `[Sheet1!1:50, 'Sheet2!1:50', 'Sheet3!1:50']`

Additionally, each row model includes a [customHeight](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/rowmodel#customheight) property that indicates the row height was explicitly set either by manually adjusting the row header boundary or programmatically. When [customHeight](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/rowmodel#customheight) is true, the height is treated as manually defined and will not change automatically when enabling wrap text, increasing font size, or changing the font family; the height remains fixed until the user or code updates it.

The following code example shows how to change the height for single/multiple rows in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/row-height-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/row-height-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/row-height-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/row-height-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/row-height-cs1" %}

## Column

You can change the width of single or multiple columns by using the [setColumnsWidth](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setcolumnswidth) method.

You can provide the following type of ranges to the method:

* Single column range: `['F:F']`
* Multiple columns range: `['A:F']`
* Multiple columns with discontinuous range: `['A:C', 'G:I', 'K:M']`
* Multiple columns with different sheets: `[Sheet1!A:H, 'Sheet2!A:H', 'Sheet3!A:H']`

Additionally, each column model includes a [customWidth](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/columnmodel#customwidth) property that indicates the column width was explicitly set either by manually adjusting the column header boundary or programmatically. When [customWidth](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/columnmodel#customwidth) is true, the width is treated as manually defined.

The following code example shows how to change the width for single/multiple columns in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/column-width-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/column-width-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/column-width-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/column-width-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/column-width-cs1" %}