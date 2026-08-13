---
layout: post
title: How to Create Objects in ASP.NET Core Spreadsheet | Syncfusion
description: Create an object structure in ASP.NET Core Spreadsheet to organize workbook data and manage spreadsheet content programmatically.
platform: document-processing
control: Create a object structure 
documentation: ug
---

# How to Create an Object Structure in ASP.NET Core Spreadsheet

This topic explains how to construct a JSON object that can be passed to the `openFromJson` method to render the Spreadsheet. The JSON object contains a `Workbook` key whose value defines the Spreadsheet properties.

```js
{
    Workbook: {}
}
```

The following table lists the root-level properties of the `Workbook` object.

| Property | Type | Description |
|-------|-------|-------|
| activeSheetIndex | number | Specifies the active sheet index in the workbook. |
| sheets | `Sheet[]` | Contains a list of sheet properties. |
| definedNames | `DefineName[]` | Specifies the name for a range and uses it in the formula for calculation. |

The following table defines each property of the `Sheet`.

| Property | Type | Description |
|-------|-------|-------|
| name | string | Specifies the name of the sheet. |
| selectedRange | string | Specifies selected range in the sheet. |
| activeCell | string | Specifies active cell within `selectedRange` in the sheet. |
| topLeftCell | string | Specifies the cell positioned at the upper-left corner of the sheet. |
| showHeaders | boolean | Specifies to show or hide column and row headers in the sheet. |
| showGridLines | boolean | Specifies to show or hide gridlines in the sheet. |
| isProtected | boolean | Specifies to protect the cells in the sheet. |
| state | [`SheetState`](../worksheet#sheet-visibility) | Specifies the sheet visibility state. There must be at least one visible sheet in Spreadsheet. |
| columns | `Column[]` | Contains a list of column properties. |
| rows | `Row[]` | Contains a list of row properties. |
| protectSettings | [`ProtectSettings`](../protect-sheet#protect-sheet) | Configures protect and its options. |
| conditionalFormats | `ConditionalFormat[]` | Specifies the conditional formatting for the sheet. |

The following table defines each property of the `Column`.

| Property | Type | Description |
|-------|-------|-------|
| width | number | Specifies the width of the column. |
| customWidth | boolean | Specifies custom width of the column. |
| hidden | boolean | To hide or show the column in the sheet. |

The following table defines each property of the `Row`.

| Property | Type | Description |
|-------|-------|-------|
| height | number | Specifies the height of the row. |
| customHeight | boolean | Specifies the custom height of the row. |
| hidden | boolean | To hide or show the row in the sheet. |
| cells | `Cell[]` | Contains a list of cell properties |

The following table defines each property of the `Cell`.

| Property | Type | Description |
|-------|-------|-------|
| value | string | Defines the value of the cell which can be text or number. |
| formula | string | Defines the formula or expression of the cell. |
| format | string | Specifies the number format code to display the value in specified number format. |
| hyperlink | string | Specifies the hyperlink of the cell. |
| wrap | boolean | Wraps the cell text to the next line when its width exceeds the column width. |
| isLocked | boolean | Specifies whether the cell is locked when worksheet protection is enabled. |
| colSpan | number | Specifies the column-wise cell merge count. |
| rowSpan | number | Specifies the row-wise cell merge count. |
| style | `CellStyle` | Specifies the cell style options. |
| validation | `Validation` | Specifies the validation of the cell. |
| image | `Image[]` | Specifies the images associated with the cell. |

The following table defines each property of the `CellStyle`.

| Property | Type | Description |
|-------|-------|-------|
| fontFamily | `FontFamily` | Specifies font family of the cell. |
| verticalAlign | `VerticalAlign` | Specifies vertical align of the cell. |
| textAlign | `TextAlign` | Specifies text align style of the cell. |
| textIndent | string | Specifies text indent style of the cell. |
| color | string | Specifies font color of the cell. |
| backgroundColor | string | Specifies the background color of the cell. |
| fontWeight | `FontWeight` | Specifies font weight of the cell. |
| fontStyle | `FontStyle` | Specifies font style of the cell. |
| fontSize | string | Specifies font size of the cell. |
| textDecoration | `TextDecoration` | Specifies text decoration of the cell. |
| border | string | Specifies border of the cell. |
| borderTop | string | Specifies top border of the cell. |
| borderBottom | string | Specifies bottom border of the cell. |
| borderLeft | string | Specifies left border of the cell. |
| borderRight | string | Specifies right border of the cell. |

### Cell style type definitions

```js
type FontFamily = 'Arial' | 'Arial Black' | 'Axettac Demo' | 'Batang' | 'Book Antiqua' | 'Calibri' | 'Courier' | 'Courier New' | 'Din Condensed' | 'Georgia' | 'Helvetica' | 'Helvetica New' | 'Roboto' | 'Tahoma' | 'Times New Roman' | 'Verdana';
type VerticalAlign = 'bottom' | 'middle' | 'top';
type TextAlign = 'left' | 'center' | 'right';
type FontWeight = 'bold' | 'normal';
type FontStyle = 'italic' | 'normal';
type TextDecoration = 'underline' | 'line-through' | 'underline line-through' | 'none';
```

The following table defines each property of the `Validation`.

| Property | Type | Description |
|-------|-------|-------|
| type | `ValidationType` | Specifies the validation type. |
| operator | `ValidationOperator` | Specifies the validation operator. |
| value1 | string | Specifies the minimum validation value. |
| value2 | string | Specifies the maximum validation value. |
| ignoreBlank | boolean | Specifies whether blank cells are ignored. |
| inCellDropDown | boolean | Specifies whether the in-cell drop-down is displayed. |
| isHighlighted | boolean | Specifies whether invalid data is highlighted. |

### Validation type definitions

```js
type ValidationType = 'WholeNumber' | 'Decimal' | 'Date' | 'TextLength' | 'List' | 'Time';
type ValidationOperator = 'Between' | 'NotBetween' | 'EqualTo' | 'NotEqualTo' | 'LessThan' | 'GreaterThan' | 'GreaterThanOrEqualTo' | 'LessThanOrEqualTo';
```

The following table defines each property of the `Image`.

| Property | Type | Description |
|-------|-------|-------|
| src | string | Specifies the image source. |
| id | string | Specifies image element id. |
| height | number | Specifies the height of the image. |
| width | number | Specifies the width of the image. |
| top | number | Specifies the top position of the image. |
| left | number | Specifies the left position of the image. |

The following table defines each property of the `ConditionalFormat`.

| Property | Type | Description |
|-------|-------|-------|
| type | `HighlightCell` or `TopBottom` or `DataBar` or `ColorScale` or `IconSet` | Specifies the conditional-formatting type. |
| cFColor | `CFColor` | Specifies a predefined color for highlighting cells that meet the condition. |
| format | `Format` | Specifies the custom formatting to apply when preferred formatting is required instead of the predefined `cFColor` options. |
| value | string | Specifies the conditional-formatting value. |
| range | string | Specifies the range to which conditional formatting is applied. |

The `HighlightCell`, `TopBottom`, `DataBar`, `ColorScale`, and `IconSet` types are defined in the following type definitions.

### Conditional-formatting type definitions

```js
type HighlightCell = 'GreaterThan' | 'LessThan' | 'Between' | 'EqualTo' | 'ContainsText' | 'DateOccur' | 'Duplicate' | 'Unique';
type TopBottom = 'Top10Items' | 'Bottom10Items' | 'Top10Percentage' | 'Bottom10Percentage' | 'BelowAverage' | 'AboveAverage';
type DataBar = 'BlueDataBar' | 'GreenDataBar' | 'RedDataBar' | 'OrangeDataBar' | 'LightBlueDataBar' | 'PurpleDataBar';
type ColorScale = 'GYRColorScale' | 'RYGColorScale' | 'GWRColorScale' | 'RWGColorScale' | 'BWRColorScale' | 'RWBColorScale' | 'WRColorScale' | 'RWColorScale' | 'GWColorScale' | 'WGColorScale' | 'GYColorScale' | 'YGColorScale';
type IconSet = 'ThreeArrows' | 'ThreeArrowsGray' | 'FourArrowsGray' | 'FourArrows' | 'FiveArrowsGray' | 'FiveArrows' | 'ThreeTrafficLights1' | 'ThreeTrafficLights2' | 'ThreeSigns' | 'FourTrafficLights' | 'FourRedToBlack' | 'ThreeSymbols' | 'ThreeSymbols2' | 'ThreeFlags' | 'FourRating' | 'FiveQuarters' | 'FiveRating' | 'ThreeTriangles' | 'ThreeStars' | 'FiveBoxes';
type CFColor = 'RedFT' | 'YellowFT' | 'GreenFT' | 'RedF' | 'RedT';
```

The following table defines each property of the `Format`.

| Property | Type | Description |
|-------|-------|-------|
| format | string | Specifies the number format code to display the value in specified number format. |
| style | `CellStyle` | Specifies the cell style options. |

The following table defines each property of the `DefinedName`.

| Property | Type | Description |
|-------|-------|-------|
| name | string | Specifies a name for the defined name, which can be used in the formula. |
| scope | string | Specifies scope for the defined name. |
| comment | string | Specifies comment for the defined name. |
| refersTo | string | Specifies reference for the defined name. |

Bind the `created` event when rendering the Spreadsheet. In the `created` event handler, obtain the rendered Spreadsheet instance and call the `openFromJson()` method with the constructed Workbook JSON object to render the Spreadsheet.

The following example passes the constructed JSON object to the `openFromJson()` method in the [`created`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.spreadsheet.spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_Created) event handler to render the Spreadsheet.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/json-structure-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="OpenController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/json-structure-cs1/OpenController.cs %}
{% endhighlight %}
{% endtabs %}