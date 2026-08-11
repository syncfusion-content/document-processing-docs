---
layout: post
title: Table Format in ASP.NET MVC DOCX Editor Component
description: Learn all about table formatting in the Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2.
platform: document-processing
control: Table Format
documentation: ug
---


# Working with Table Formatting

Document Editor allows you to customize the formatting of tables or table cells, such as table width, cell margins, cell spacing, background color, and table alignment. This section describes how to customize these formats for selected cells, rows, or a table in detail.

## Cell margins

You can customize the cell margins by using the following sample code.

```typescript
// To change the left margin
documenteditor.selection.cellFormat.leftMargin=5.4;
//To change the right margin
documenteditor.selection.cellFormat.rightMargin=5.4;
//To change the top margin
documenteditor.selection.cellFormat.topMargin=5.4;
//To change the bottom margin
documenteditor.selection.cellFormat.bottomMargin=5.4;
```

You can also define the default cell margins for a table. If the specific cell margin value is not defined explicitly in the cell formatting, the corresponding value will be retrieved from the default cell margins of the table.

```typescript
//To change the left margin
documenteditor.selection.tableFormat.leftMargin=5.4;
//To change the right margin
documenteditor.selection.tableFormat.rightMargin=5.4;
//To change the top margin
documenteditor.selection.tableFormat.topMargin=5.4;
//To change the bottom margin
documenteditor.selection.tableFormat.bottomMargin=5.4;
```

## Background color

You can explicitly set the background color of selected cells using the following sample code.

```typescript
documenteditor.selection.cellFormat.background='#E0E0E0';
```

Refer to the following sample code to customize the background color of the table.

```typescript
documenteditor.selection.tableFormat.background='#E0E0E0';
```

## Cell spacing

Refer to the following sample code to customize the spacing between each cell in a table.

```typescript
documenteditor.selection.tableFormat.cellSpacing = 2;
```

## Cell vertical alignment

The content within a table cell can be aligned to `Top`, `Center`, or `Bottom`. You can customize this property for selected cells.

```typescript
documenteditor.selection.cellFormat.verticalAlignment= 'Bottom';
```

## Table alignment

Tables are aligned in the Document Editor to `Left`, `Right`, or `Center`.

```typescript
documenteditor.selection.tableFormat.tableAlignment='Center';
```

## Cell width

Set the desired width of table cells that will be considered when the table is laid out.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/cell-width/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Cell-width.cs" %}
{% endhighlight %}
{% endtabs %}



## Table width

You can set the desired width of a table in `Point` or `Percent` type.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/table-width/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Table-width.cs" %}
{% endhighlight %}
{% endtabs %}



## Apply borders

Document Editor exposes an API to customize the borders for table cells by specifying the settings.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/apply-borders/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Apply-borders.cs" %}
{% endhighlight %}
{% endtabs %}



## Working with row formatting

Document Editor allows various row formatting options, such as height and repeating headers.

### Row height

You can customize the height of a table row to be `Auto`, `AtLeast`, or `Exactly`.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/row-height/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Row-height.cs" %}
{% endhighlight %}
{% endtabs %}



### Header row

The header row describes the content of a table. A table can optionally have a header row. Only the first row of a table can be the header row. If the cursor position is in the first row of the table, then you can define whether it is a header row or not, using the following sample code.

```typescript
documenteditor.selection.rowFormat.isHeader=true;
```

### Allow row break across pages

This property is valid if a table row does not fit on the current page during table layout. It defines whether a table row can break. If the value is false, the entire row will be moved to the start of the next page. You can modify this property for selected rows using the following sample code.

```typescript
documenteditor.selection.rowFormat.allowRowBreakAcrossPages=false;
```

### Title

Document Editor exposes an API to get or set the title of the selected table. Refer to the following sample code to set the title.

```typescript
documenteditor.selection.tableFormat.title = 'Shipping Details';
```

### Description

Document Editor exposes an API to get or set the description of the selected table. Refer to the following sample code to set the description.

```typescript
documenteditor.selection.tableFormat.description = 'Freight cost and shipping details';
```

## Online demo

Explore how to format tables in Word documents using the ASP.NET MVC Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/tableformatting#/tailwind3).

## See also

* [Table properties dialog](./dialog#table-properties-dialog)