---
layout: post
title: Table Format in ASP.NET Core DOCX Editor | Syncfusion
description: The table format feature in ASP.NET Core DOCX Editor enables customizing cell margins, spacing, alignment, borders, and sizing to create structured tables.
platform: document-processing
control: Table Format
documentation: ug
---


# Table format in ASP.NET Core DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) customizes the formatting of a table or its cells, such as table width, cell margins, cell spacing, background color, and table alignment. This section describes how to customize these formats for selected cells, rows, or a table in detail.

## Cell margins

You can customize the cell margins by using the following sample code.

```typescript
//To change the left margin
documenteditor.selection.cellFormat.leftMargin=5.4;
//To change the right margin
documenteditor.selection.cellFormat.rightMargin=5.4;
//To change the top margin
documenteditor.selection.cellFormat.topMargin=5.4;
//To change the bottom margin
documenteditor.selection.cellFormat.bottomMargin=5.4;
```

You can also define the default cell margins for a table. If a cell margin is not set explicitly on the cell, the value is taken from the table's default cell margins.

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

The content is aligned within a table cell to `Top`, `Center`, or `Bottom`. You can customize this property of selected cells.

```typescript
documenteditor.selection.cellFormat.verticalAlignment= 'Bottom';
```

## Table alignment

The tables are aligned in document editor to `Left`, `Right`, or `Center`.

```typescript
documenteditor.selection.tableFormat.tableAlignment='Center';
```

## Cell width

Sets the preferred width of the selected table cells.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/cell-width/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Cell-width.cs" %}
{% endhighlight %}
{% endtabs %}



## Table width

You can set the desired width of a table in `Point` or `Percent` type.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/table-width/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Table-width.cs" %}
{% endhighlight %}
{% endtabs %}


## Apply borders

Document editor exposes APIs to customize the borders for table cells by specifying the settings.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/apply-borders/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Apply-borders.cs" %}
{% endhighlight %}
{% endtabs %}


## Working with row formatting

Document editor allows various row formatting such as height and repeat header.

### Row height

You can customize the height of a table row as `Auto`, `AtLeast`, or `Exactly`.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/row-height/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Row-height.cs" %}
{% endhighlight %}
{% endtabs %}


### Header row

The header row describes the content of a table. A table can optionally have a header row. Only the first row of a table can be the header row. If the cursor position is at the first row of the table, you can define whether it is a header row or not, using the following sample code.

```typescript
documenteditor.selection.rowFormat.isHeader=true;
```

### Allow row break across pages

This property is valid if a table row does not fit in the current page during table layout. It specifies whether the row can break across pages. If the value is false, the entire row will be moved to the start of next page. You can modify this property for selected rows using the following sample code.

```typescript
documenteditor.selection.rowFormat.allowRowBreakAcrossPages=false;
```

### Title

Document Editor exposes APIs to get or set the table title of the selected table. Refer to the following sample code to set title.

```typescript
documenteditor.selection.tableFormat.title = 'Shipping Details';
```

### Description

Document Editor exposes APIs to get or set the table description of the selected table. Refer to the following sample code to set description.

```typescript
documenteditor.selection.tableFormat.description = 'Freight cost and shipping details';
```

## Online demo

Explore how to format tables in Word documents using the ASP.NET Core Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/tableformat#/tailwind3).

## See also

* [Table properties dialog](../asp-net-core/dialog#table-properties-dialog)