---
layout: post
title: Border formatting in React Spreadsheet component | Syncfusion
description: Learn here how to apply and customize borders in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Border

The Syncfusion React Spreadsheet component allows you to apply borders to a cell or a range of cells. Borders help you separate sections, highlight data, or format tables clearly in your worksheet. You can apply borders in different styles, sizes, and colors based on your needs.

## Border Types

The Spreadsheet supports many types of borders. Each type adds a border to a specific side or area of the selected cells:

| Types | Actions |
|-------|---------|
| Top Border | Specifies the top border of a cell or range of cells.|
| Left Border | Specifies the left border of a cell or range of cells.|
| Right Border | Specifies the right border of a cell or range of cells.|
| Bottom Border | Specifies the bottom border of a cell or range of cells.|
| No Border | Used to clear the border from a cell or range of cells.|
| All Border | Specifies all border of a cell or range of cells.|
| Horizontal Border | Specifies the top and bottom border of a cell or range of cells.|
| Vertical Border | Specifies the left and right border of a cell or range of cells.|
| Outside Border | Specifies the outside border of a range of cells.|
| Inside Border | Specifies the inside border of a range of cells.|

## Border Size and Styles

You can also change how the border looks by adjusting its size and style. The Spreadsheet supports the following options:

| Types | Actions |
|-------|---------|
| Thin | Specifies the `1px` border size (default).|
| Medium | Specifies the `2px` border size.|
| Thick | Specifies the `3px` border size.|
| Solid | Used to create the `solid` border (default).|
| Dashed | Used to create the `dashed` border.|
| Dotted | Used to create the `dotted` border.|
| Double | Used to create the `double` border.|

Borders can be applied in the following ways,

- Using the `border`, `borderLeft`, `borderRight`, `borderBottom` properties, you can set the desired border to each cell at initial load. The [border](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#border) property is part of  [CellStyleModel](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel) and is applied via the cell's `style` object.
- Using the [setBorder](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#setborder) method, you can set various border options to a cell or range of cells.
- Selecting the border options from the ribbon toolbar.

## Programmatic Borders

You can apply borders programmatically at initial load or at runtime. Borders may be set on individual cell styles in the sheet model or applied via the Spreadsheet API methods.

### Set border in the sheet model

Assign a `border` style on a cell in the `sheets` configuration to apply borders when the Spreadsheet renders:

```js
const sheets = [{
	rows: [{
		cells: [
			{ index: 0, value: 'Header', style: { border: '2px solid #333333' } },
			{ index: 1, value: 'Value', style: { border: '1px dashed #0078d7' } }
		]
	}]
}];

<SpreadsheetComponent sheets={sheets} />
```

### Apply borders at runtime

The Spreadsheet exposes methods to change formatting at runtime. Use the setBorder method to apply or update borders for a range from your code:

```js
spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A3:E12', 'Outer');
```

### Remove borders

To remove the border style on the target cells, use the UI "No Border" option in the ribbon.

The following code example shows the style formatting in text and cells of the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/cellformat-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/cellformat-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/cellformat-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/cellformat-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/cellformat-cs1" %}