---
layout: post
title: Conditional Formatting in React Spreadsheet component | Syncfusion
description: Conditional formatting rules, data bars, color scales and icon sets in Syncfusion React Spreadsheet.
control: Formatting
platform: document-processing
documentation: ug
---

# Conditional Formatting

Conditional formatting helps you format a cell or range of cells based on the conditions applied. You can enable or disable conditional formats by using the [`allowConditionalFormat`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowconditionalformat) property.

> * The default value for the `allowConditionalFormat` property is `true`.

## Apply Conditional Formatting

You can apply conditional formatting by using one of the following ways:

* Select the conditional formatting icon in the Ribbon toolbar under the **Home** tab.
* Use the [`conditionalFormat()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#conditionalformat) method to define the condition.
* Use the `conditionalFormats` property in the sheets model.

The Spreadsheet supports the following conditional formatting types:

## Highlight Cells Rules

Highlight cells rules option in the conditional formatting enables you to highlight cells with a preset color depending on the cell's value.

The following options can be given for the highlight cells rules as type,

>* `GreaterThan`, `LessThan`, `Between`, `EqualTo`, `ContainsText`, `DateOccur`, `Duplicate`, `Unique`.

The following preset colors can be used for formatting styles,

>* `"RedFT"` - Light Red Fill with Dark Red Text,
>* `"YellowFT"` - Yellow Fill with Dark Yellow Text,
>* `"GreenFT"` - Green Fill with Dark Green Text,
>* `"RedF"` - Red Fill,
>* `"RedT"` - Red Text.

## Top Bottom Rules

Top bottom rules option in the conditional formatting allows you to apply formatting to the cells that satisfy a statistical condition with other cells in the range.

The following options can be given for the top bottom rules as type,

>* `Top10Items`, `Bottom10Items`, `Top10Percentage`, `Bottom10Percentage`, `BelowAverage`, `AboveAverage`.

## Data Bars

You can apply data bars to represent the data graphically inside a cell. The longest bar represents the highest value and the shorter bars represent the smaller values.

The following options can be given for the data bars as type,

>* `BlueDataBar`, `GreenDataBar`, `RedDataBar`, `OrangeDataBar`, `LightBlueDataBar`, `PurpleDataBar`.

## Color Scales

Using color scales, you can format your cells with two or three colors, where different color shades represent the different cell values. In the Green-Yellow-Red(GYR) Color Scale, the cell that holds the minimum value is colored as red. The cell that holds the median is colored as yellow, and the cell that holds the maximum value is colored as green. All other cells are colored proportionally.

The following options can be given for the color scales as type,

>* `GYRColorScale`, `RYGColorScale`, `GWRColorScale`, `RWGColorScale`, `BWRColorScale`, `RWBColorScale`, `WRColorScale`, `RWColorScale`, `GWColorScale`, `WGColorScale`, `GYColorScale`, `YGColorScale`.

## Icon Sets

Icon sets will help you to visually represent your data with icons. Every icon represents a range of values. In the Three Arrows(colored) icon, the green arrow icon represents the values greater than 67%, the yellow arrow icon represents the values between 33% to 67%, and the red arrow icon represents the values less than 33%.

The following options can be given for the icon sets as type,

>* `ThreeArrows`, `ThreeArrowsGray`, `FourArrowsGray`, `FourArrows`, `FiveArrowsGray`, `FiveArrows`, `ThreeTrafficLights1`, `ThreeTrafficLights2`, `ThreeSigns`, `FourTrafficLights`, `FourRedToBlack`, `ThreeSymbols`, `ThreeSymbols2`, `ThreeFlags`, `FourRating`, `FiveQuarters`, `FiveRating`, `ThreeTriangles`, `ThreeStars`, `FiveBoxes`.

## Custom Format

Using the custom format for conditional formatting you can set cell styles like color, background color, font style, font weight, and underline.

In the MAY and JUN columns, we have applied conditional formatting custom format.

>* Custom Format is supported only for **Highlight Cells Rules** and **Top Bottom Rules**.

## Clear Rules

You can clear defined rules by using one of the following ways:

* Using the `Clear Rules` option in the Conditional Formatting button of HOME Tab in the ribbon to clear the rule from selected cells.
* Using the [`clearConditionalFormat`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#clearconditionalformat) method to clear the defined rules.

The following code sample shows how to apply different types of conditional formatting, colors, and styles in the Spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/conditional-formatting-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/conditional-formatting-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/conditional-formatting-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/conditional-formatting-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/conditional-formatting-cs1" %}

## Limitations of Conditional Formatting

The following features have some limitations in Conditional Formatting:

* Insert row/column between the conditional formatting.
* Conditional formatting with formula support.
* Copy and paste the conditional formatting applied cells.
* Custom rule support.

## Note

You can refer to our [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for feature highlights. You can also explore our [React Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/react/#/tailwind3/spreadsheet/conditional-formatting) to learn how to present and manipulate data.

## See Also

* [Number Formatting](./number-formatting)
* [Text & Cell Formatting](./text-cell-formatting)
* [Cell Range](./cell-range)