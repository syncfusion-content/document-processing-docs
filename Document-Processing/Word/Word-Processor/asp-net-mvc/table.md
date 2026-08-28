---
layout: post
title: Tables in ASP.NET MVC DOCX Editor | Syncfusion
description: Tables in ASP.NET MVC DOCX Editor enable adding and managing rows, columns, and cells to present information in a structured format.
platform: document-processing
control: Table
documentation: ug
---


# Tables in ASP.NET MVC DOCX Editor

Tables are an efficient way to present information. The DOCX Editor can display and edit tables. You can select and edit tables through keyboard, mouse, or touch interactions. It exposes a rich set of APIs to perform these operations programmatically.

## Create a table

You can create and insert a table at the cursor position by specifying the required number of rows and columns.

```typescript
 documenteditor.editor.insertTable(3,3);
```

## Set the maximum number of Rows when inserting a table


You can use the `maximumRows` property to set the maximum number of rows allowed while inserting a table in the DOCX Editor component.

```ts
<div>
@Html.EJS().DocumentEditorContainer("container").Created("onCreated").EnableToolbar(true).Render()
</div>
<script>
    var container;
    function onCreated() {
        var documenteditorElement = document.getElementById("container");
        container = documenteditorElement.ej2_instances[0];
        container.documentEditorSetting = {
            maximumRows: 4
        };
    }
</script>
```


When the maximum row limit is reached, an alert will appear, as follows.

![Row Limit Alert](images/Row_Limit_Alert.PNG)

N> The maximum number of rows is 32767, as per Microsoft Word application, and you can set any value less than or equal to 32767 to this property.

## Set the maximum number of Columns when inserting a table


You can use the `maximumColumns` property to set the maximum number of columns allowed while inserting a table in the DOCX Editor component.

Refer to the following sample code.

```ts
<div>
@Html.EJS().DocumentEditorContainer("container").Created("onCreated").EnableToolbar(true).Render()
</div>
<script>
    var container;
    function onCreated() {
        var documenteditorElement = document.getElementById("container");
        container = documenteditorElement.ej2_instances[0];
        container.documentEditorSetting = {
            maximumColumns: 4
        };
    }
</script>
```


When the maximum column limit is reached, an alert will appear, as follows.

![Column Limit Alert](images/Column_Limit_Alert.PNG)

N> The maximum number of columns is 63, as per Microsoft Word application, and you can set any value less than or equal to 63 to this property.

## Insert rows

You can add a row (or several rows) above or below the row at the cursor position by using the `insertRow` method. This method accepts the following parameters:

| Parameter | Type | Description |
|----------|------|-------------|
| above(optional) | boolean | This is optional and if omitted, it takes the value as false and inserts below the row at cursor position. |
| count(optional) | number | This is optional and if omitted, it takes the value as 1. |

Refer to the following sample code.

```typescript
//Inserts a row below the row at cursor position
documenteditor.editor.insertRow();
//Inserts a row above the row at cursor position
documenteditor.editor.insertRow(true);
//Inserts three rows below the row at cursor position
documenteditor.editor.insertRow(false, 3);
```

## Insert columns

You can add a column (or several columns) to the left or right of the column at the cursor position by using the `insertColumn` method. This method accepts the following parameters:

| Parameter | Type | Description |
|----------|------|-------------|
| left(optional) | boolean | This is optional and if omitted, it takes the value as false and inserts to the right of column at cursor position. |
| count(optional) | number | This is optional and if omitted, it takes the value as 1. |


```typescript
//Insert a column to the right of the column at cursor position.
documenteditor.editor.insertColumn();
//Insert a column to the left of the column at cursor position.
documenteditor.editor.insertColumn(true);
//Insert two columns to the left of the column at cursor position.
documenteditor.editor.insertColumn(true, 2);
```

### Select an entire table

If the cursor position is inside a table, you can select the entire table by using the following sample code.

```typescript
documenteditor.selection.selectTable();
```

### Select row

You can select the entire row at cursor position by using the following sample code.

```typescript
documenteditor.selection.selectRow();
```

If the current selection spans across cells of different rows, all these rows will be selected.

### Select column

You can select the entire column at cursor position by using the following sample code.

```typescript
documenteditor.selection.selectColumn();
```

If the current selection spans across cells of different columns, all these columns will be selected.

### Select cell

You can select the cell at cursor position by using the following sample code.

```typescript
documenteditor.selection.selectCell();
```

## Delete table

The DOCX Editor allows you to delete the entire table. You can use the `deleteTable()` method of the editor instance if the selection is in a table.

```typescript
documenteditor.editor.deleteTable();
```

## Delete row

The DOCX Editor allows you to delete the selected number of rows. You can use the `deleteRow()` method of the editor instance to delete the selected number of rows, if the selection is in a table.

```typescript
documenteditor.editor.deleteRow();
```

## Delete column

The DOCX Editor allows you to delete the selected number of columns. You can use the `deleteColumn()` method of the editor instance to delete the selected number of columns, if the selection is in a table.

```typescript
documenteditor.editor.deleteColumn();
```

## Merge cells

You can merge cells vertically, horizontally, or a combination of both to a single cell. To vertically merge the cells, the columns within the selection should be equal in the left and right directions. To horizontally merge the cells, the rows within the selection should be equal in the top and bottom directions.

```typescript
documenteditor.editor.mergeCells();
```

## Positioning the table

DOCX Editor preserves the position properties of the table and displays the table based on the position properties. It does not support modifying the position properties. The table will be automatically moved along with the text while editing if it is positioned relative to the paragraph.

## How to work with tables

The following sample demonstrates how to delete the table row or columns, merge cells and how to bind the API with button.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/table/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Table.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/table/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## See also

* [Feature modules](./feature-module)
* [Insert table dialog](./dialog#table-dialog)
