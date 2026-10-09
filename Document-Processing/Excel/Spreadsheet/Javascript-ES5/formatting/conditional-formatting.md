---
layout: post
title: Conditional Formatting in JavaScript Spreadsheet | Syncfusion
description: Learn about conditional formatting in the Syncfusion JavaScript Spreadsheet to apply custom formatting based on cell values and conditions.
control: Formatting
platform: document-processing
documentation: ug
---

# Conditional Formatting in JavaScript Spreadsheet

Conditional formatting helps you to format a cell or range of cells based on the conditions applied. You can enable or disable conditional formats by using the [`allowConditionalFormat`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowConditionalFormat) property.

> The default value for the `allowConditionalFormat` property is `true`.

## Apply Conditional Formatting

You can apply conditional formatting in the following ways:

* Select the conditional formatting icon in the Ribbon toolbar under the Home Tab.
* Using the [`conditionalFormat()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#conditionalFormat) method to define the condition.
* Using the `conditionalFormats` in the sheets model.

Conditional formatting has the following types in the spreadsheet:

## Highlight cells rules

Highlight cells rules option in the conditional formatting enables you to highlight cells with a preset color depending on the cell's value.

The following options can be given for the highlight cells rules as type:

> 'GreaterThan', 'LessThan', 'Between', 'EqualTo', 'ContainsText', 'DateOccur', 'Duplicate', 'Unique'.

The following preset colors can be used for formatting styles:

> `"RedFT"` - Light Red Fill with Dark Red Text,
> `"YellowFT"` - Yellow Fill with Dark Yellow Text,
> `"GreenFT"` - Green Fill with Dark Green Text,
> `"RedF"` - Red Fill,
> `"RedT"` - Red Text.

## Top bottom rules

Top bottom rules option in the conditional formatting allows you to apply formatting to the cells that satisfy a statistical condition with other cells in the range.

The following options can be given for the top bottom rules as type:

> 'Top10Items', 'Bottom10Items', 'Top10Percentage', 'Bottom10Percentage', 'BelowAverage', 'AboveAverage'.

## Data Bars

You can apply data bars to represent the data graphically inside a cell. The longest bar represents the highest value and the shorter bars represent the smaller values.

The following options can be given for the data bars as type:

> 'BlueDataBar', 'GreenDataBar', 'RedDataBar', 'OrangeDataBar', 'LightBlueDataBar', 'PurpleDataBar'.

## Color Scales

Using color scales, you can format your cells with two or three colors, where different color shades represent the different cell values.

The following options can be given for the color scales as type:

> 'GYRColorScale', 'RYGColorScale', 'GWRColorScale', 'RWGColorScale', 'BWRColorScale', 'RWBColorScale', 'WRColorScale', 'RWColorScale', 'GWColorScale', 'WGColorScale', 'GYColorScale', 'YGColorScale'.

## Icon Sets

Icon sets will help you to visually represent your data with icons. Every icon represents a range of values.

The following options can be given for the icon sets as type:

> 'ThreeArrows', 'ThreeArrowsGray', 'FourArrowsGray', 'FourArrows', 'FiveArrowsGray', 'FiveArrows', 'ThreeTrafficLights1', 'ThreeTrafficLights2', 'ThreeSigns', 'FourTrafficLights', 'FourRedToBlack', 'ThreeSymbols', 'ThreeSymbols2', 'ThreeFlags', 'FourRating', 'FiveQuarters', 'FiveRating', 'ThreeTriangles', 'ThreeStars', 'FiveBoxes'.

## Formula-based Conditional Format

Formula-based Conditional Formatting allows you to apply custom formatting rules using formulas through the `conditionalFormats` property in the sheet model or the [`conditionalFormat()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#conditionalformat) method.

When the specified formula rule evaluates to `TRUE`, the defined formatting is automatically applied to the target cells. This allows you to create advanced highlighting scenarios based on values from other cells or ranges within the worksheet.

## Custom Format

Using the custom format for conditional formatting you can set cell styles like color, background color, font style, font weight, and underline.

> In the Conditional format, custom format is supported for Highlight cell rules and Top bottom rules.

## Clear Rules

You can clear the defined rules in the following ways:

* Using the "Clear Rules" option in the Conditional Formatting button of the HOME Tab in the ribbon to clear the rule from selected cells.
* Using the [`clearConditionalFormat()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#clearConditionalFormat) method to clear the defined rules.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/conditional-formatting-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/conditional-formatting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/conditional-formatting-cs1" %}

## Limitations

The following features have some limitations in Conditional Formatting:

* Insert row/column between the conditional formatting.
* User Interface support for formula-based conditional formatting.
* Copy and paste the conditional formatting applied cells.
* Custom rule support.

## Note

You can refer to our [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) feature tour page for its feature representations.

## See Also

* [Formatting Overview](../formatting-overview)
* [Number Formatting](./number-formatting)
* [Rich Text Formatting](./rich-text-formatting)
