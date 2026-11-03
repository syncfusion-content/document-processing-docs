---
title: Conditional Formatting in JavaScript Excel Library | Syncfusion
description: Add and configure conditional formatting rules, formulas, and differential formats with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Conditional Formatting in JavaScript Excel Library

Conditional formatting applies visual styles when cell values meet a rule you define. Use it to highlight thresholds, trends, or exceptions across a selected range when the workbook opens in Excel.

`ConditionalFormatType` and `ConditionalFormatOperator` are **string union types** (for example `'cellIs'`, `'greaterThan'`), not numeric enums. New rules start as a `cellIs` value-comparison rule. Use `firstFormula` / `secondFormula` (or the `formulas` array) for thresholds. Apply highlight styling through `format` (`DifferentialFormatInput`: font, fill, and border).

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

## Cell value rule

A cell value rule compares cell values with one or more specified values. When a cell meets the selected condition, the specified formatting is applied.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';
import type {
  ConditionalFormatType,
  ConditionalFormatOperator,
} from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 10;
sheet.cell('A2').number = 50;
sheet.cell('A3').number = 90;

const rule = sheet.conditionalFormats.add('A1:A3');
const type: ConditionalFormatType = 'cellIs';
const operator: ConditionalFormatOperator = 'greaterThan';
rule.type = type;
rule.operator = operator;
rule.firstFormula = '40';
rule.format = {
  font: { bold: true, color: { rgb: 'FF9C0006' } },
  fill: { patternType: 'solid', fgColor: { rgb: 'FFFFC7CE' } },
};
rule.priority = 1;
rule.stopIfTrue = true;

// Save the workbook.
await workbook.save('CellValueRule.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 10;
sheet.cell('A2').number = 50;
sheet.cell('A3').number = 90;

const rule = sheet.conditionalFormats.add('A1:A3');
rule.type = 'cellIs';
rule.operator = 'greaterThan';
rule.firstFormula = '40';
rule.format = {
  font: { bold: true, color: { rgb: 'FF9C0006' } },
  fill: { patternType: 'solid', fgColor: { rgb: 'FFFFC7CE' } },
};
rule.priority = 1;
rule.stopIfTrue = true;

// Save the workbook.
await workbook.save('CellValueRule.xlsx');
{% endhighlight %}
{% endtabs %}

## Between and other comparison operators

A cell value rule supports the operators `equal`, `notEqual`, `lessThan`, `lessThanOrEqual`, `greaterThan`, `greaterThanOrEqual`, `between`, and `notBetween`. The `between` and `notBetween` operators need both `firstFormula` and `secondFormula`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const between = sheet.conditionalFormats.add('A2:A20');
between.type = 'cellIs';
between.operator = 'between';
between.firstFormula = '10';
between.secondFormula = '50';
between.format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFC6EFCE' } },
};

const equal = sheet.conditionalFormats.add('B2:B20');
equal.type = 'cellIs';
equal.operator = 'equal';
equal.firstFormula = '"Closed"';
equal.format = {
  font: { italic: true, color: { rgb: 'FF7F7F7F' } },
};

// Save the workbook.
await workbook.save('ComparisonOperators.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const between = sheet.conditionalFormats.add('A2:A20');
between.type = 'cellIs';
between.operator = 'between';
between.firstFormula = '10';
between.secondFormula = '50';
between.format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFC6EFCE' } },
};

const equal = sheet.conditionalFormats.add('B2:B20');
equal.type = 'cellIs';
equal.operator = 'equal';
equal.firstFormula = '"Closed"';
equal.format = {
  font: { italic: true, color: { rgb: 'FF7F7F7F' } },
};

// Save the workbook.
await workbook.save('ComparisonOperators.xlsx');
{% endhighlight %}
{% endtabs %}

## Formula rule

A formula rule highlights cells when a formula evaluates to `TRUE`. Write the formula relative to the first cell of the range, as you would in Excel. This is useful for rules that depend on other cells, such as highlighting a whole row.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Shade every second row in A2:D20.
const banding = sheet.conditionalFormats.add('A2:D20');
banding.type = 'expression';
banding.firstFormula = 'MOD(ROW(),2)=0';
banding.format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFDDEBF7' } },
};

// Highlight the whole row when the status in column D is "Overdue".
const overdue = sheet.conditionalFormats.add('A2:D20');
overdue.type = 'expression';
overdue.firstFormula = '$D2="Overdue"';
overdue.format = {
  font: { bold: true, color: { rgb: 'FF9C0006' } },
};

// Save the workbook.
await workbook.save('FormulaRule.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Shade every second row in A2:D20.
const banding = sheet.conditionalFormats.add('A2:D20');
banding.type = 'expression';
banding.firstFormula = 'MOD(ROW(),2)=0';
banding.format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFDDEBF7' } },
};

// Highlight the whole row when the status in column D is "Overdue".
const overdue = sheet.conditionalFormats.add('A2:D20');
overdue.type = 'expression';
overdue.firstFormula = '$D2="Overdue"';
overdue.format = {
  font: { bold: true, color: { rgb: 'FF9C0006' } },
};

// Save the workbook.
await workbook.save('FormulaRule.xlsx');
{% endhighlight %}
{% endtabs %}

## Text rules

Text rules highlight cells that contain, do not contain, begin with, or end with a given text. Set `type`, `operator`, and `text`, and also set the matching formula, because Excel evaluates the formula to decide which cells to format. Write the formula relative to the first cell of the range.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const format = {
  font: { color: { rgb: 'FF9C0006' } },
  fill: { patternType: 'solid', fgColor: { rgb: 'FFFFC7CE' } },
};

// Contains
const contains = sheet.conditionalFormats.add('A2:A20');
contains.type = 'containsText';
contains.operator = 'containsText';
contains.text = 'Late';
contains.formulas = ['NOT(ISERROR(SEARCH("Late",A2)))'];
contains.format = format;

// Does not contain
const notContains = sheet.conditionalFormats.add('B2:B20');
notContains.type = 'notContainsText';
notContains.operator = 'notContains';
notContains.text = 'Late';
notContains.formulas = ['ISERROR(SEARCH("Late",B2))'];
notContains.format = format;

// Begins with
const begins = sheet.conditionalFormats.add('C2:C20');
begins.type = 'beginsWith';
begins.operator = 'beginsWith';
begins.text = 'INV';
begins.formulas = ['LEFT(C2,LEN("INV"))="INV"'];
begins.format = format;

// Ends with
const ends = sheet.conditionalFormats.add('D2:D20');
ends.type = 'endsWith';
ends.operator = 'endsWith';
ends.text = '-X';
ends.formulas = ['RIGHT(D2,LEN("-X"))="-X"'];
ends.format = format;

// Save the workbook.
await workbook.save('TextRules.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const format = {
  font: { color: { rgb: 'FF9C0006' } },
  fill: { patternType: 'solid', fgColor: { rgb: 'FFFFC7CE' } },
};

// Contains
const contains = sheet.conditionalFormats.add('A2:A20');
contains.type = 'containsText';
contains.operator = 'containsText';
contains.text = 'Late';
contains.formulas = ['NOT(ISERROR(SEARCH("Late",A2)))'];
contains.format = format;

// Does not contain
const notContains = sheet.conditionalFormats.add('B2:B20');
notContains.type = 'notContainsText';
notContains.operator = 'notContains';
notContains.text = 'Late';
notContains.formulas = ['ISERROR(SEARCH("Late",B2))'];
notContains.format = format;

// Begins with
const begins = sheet.conditionalFormats.add('C2:C20');
begins.type = 'beginsWith';
begins.operator = 'beginsWith';
begins.text = 'INV';
begins.formulas = ['LEFT(C2,LEN("INV"))="INV"'];
begins.format = format;

// Ends with
const ends = sheet.conditionalFormats.add('D2:D20');
ends.type = 'endsWith';
ends.operator = 'endsWith';
ends.text = '-X';
ends.formulas = ['RIGHT(D2,LEN("-X"))="-X"'];
ends.format = format;

// Save the workbook.
await workbook.save('TextRules.xlsx');
{% endhighlight %}
{% endtabs %}

## Blank and error rules

Blank and error rules highlight empty cells, non-empty cells, cells with formula errors, or cells without errors. Set the matching formula so that Excel can evaluate the rule.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFFFEB9C' } },
};

// Blank cells
const blanks = sheet.conditionalFormats.add('A2:A20');
blanks.type = 'containsBlanks';
blanks.formulas = ['LEN(TRIM(A2))=0'];
blanks.format = format;

// Cells that are not blank
const notBlanks = sheet.conditionalFormats.add('B2:B20');
notBlanks.type = 'notContainsBlanks';
notBlanks.formulas = ['LEN(TRIM(B2))>0'];
notBlanks.format = format;

// Cells with errors
const errors = sheet.conditionalFormats.add('C2:C20');
errors.type = 'containsErrors';
errors.formulas = ['ISERROR(C2)'];
errors.format = format;

// Cells without errors
const noErrors = sheet.conditionalFormats.add('D2:D20');
noErrors.type = 'notContainsErrors';
noErrors.formulas = ['NOT(ISERROR(D2))'];
noErrors.format = format;

// Save the workbook.
await workbook.save('BlankAndErrorRules.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFFFEB9C' } },
};

// Blank cells
const blanks = sheet.conditionalFormats.add('A2:A20');
blanks.type = 'containsBlanks';
blanks.formulas = ['LEN(TRIM(A2))=0'];
blanks.format = format;

// Cells that are not blank
const notBlanks = sheet.conditionalFormats.add('B2:B20');
notBlanks.type = 'notContainsBlanks';
notBlanks.formulas = ['LEN(TRIM(B2))>0'];
notBlanks.format = format;

// Cells with errors
const errors = sheet.conditionalFormats.add('C2:C20');
errors.type = 'containsErrors';
errors.formulas = ['ISERROR(C2)'];
errors.format = format;

// Cells without errors
const noErrors = sheet.conditionalFormats.add('D2:D20');
noErrors.type = 'notContainsErrors';
noErrors.formulas = ['NOT(ISERROR(D2))'];
noErrors.format = format;

// Save the workbook.
await workbook.save('BlankAndErrorRules.xlsx');
{% endhighlight %}
{% endtabs %}

## Top and bottom rules

A top or bottom rule highlights the highest or lowest values in a range. Set `rank` to the number of items or the percentage, set `percent` to switch between items and percent, and set `bottom` to `true` to select the lowest values instead of the highest.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const format = {
  font: { bold: true },
  fill: { patternType: 'solid', fgColor: { rgb: 'FFC6EFCE' } },
};

// Top 3 items
const top3 = sheet.conditionalFormats.add('A2:A20');
top3.type = 'top10';
top3.rank = 3;
top3.percent = false;
top3.bottom = false;
top3.format = format;

// Bottom 10 percent
const bottom = sheet.conditionalFormats.add('B2:B20');
bottom.type = 'top10';
bottom.rank = 10;
bottom.percent = true;
bottom.bottom = true;
bottom.format = format;

// Save the workbook.
await workbook.save('TopAndBottomRules.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const format = {
  font: { bold: true },
  fill: { patternType: 'solid', fgColor: { rgb: 'FFC6EFCE' } },
};

// Top 3 items
const top3 = sheet.conditionalFormats.add('A2:A20');
top3.type = 'top10';
top3.rank = 3;
top3.percent = false;
top3.bottom = false;
top3.format = format;

// Bottom 10 percent
const bottom = sheet.conditionalFormats.add('B2:B20');
bottom.type = 'top10';
bottom.rank = 10;
bottom.percent = true;
bottom.bottom = true;
bottom.format = format;

// Save the workbook.
await workbook.save('TopAndBottomRules.xlsx');
{% endhighlight %}
{% endtabs %}

## Above and below average

An average rule highlights values that are above or below the average of the range. Set `aboveAverage` to choose the direction, set `equalAverage` to include values equal to the average, and set `stdDev` to compare against a number of standard deviations from the average.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFDDEBF7' } },
};

// Above average
const above = sheet.conditionalFormats.add('A2:A20');
above.type = 'aboveAverage';
above.aboveAverage = true;
above.equalAverage = false;
above.format = format;

// Below or equal to average
const below = sheet.conditionalFormats.add('B2:B20');
below.type = 'aboveAverage';
below.aboveAverage = false;
below.equalAverage = true;
below.format = format;

// More than one standard deviation above the average
const deviation = sheet.conditionalFormats.add('C2:C20');
deviation.type = 'aboveAverage';
deviation.aboveAverage = true;
deviation.stdDev = 1;
deviation.format = format;

// Save the workbook.
await workbook.save('AboveAndBelowAverage.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFDDEBF7' } },
};

// Above average
const above = sheet.conditionalFormats.add('A2:A20');
above.type = 'aboveAverage';
above.aboveAverage = true;
above.equalAverage = false;
above.format = format;

// Below or equal to average
const below = sheet.conditionalFormats.add('B2:B20');
below.type = 'aboveAverage';
below.aboveAverage = false;
below.equalAverage = true;
below.format = format;

// More than one standard deviation above the average
const deviation = sheet.conditionalFormats.add('C2:C20');
deviation.type = 'aboveAverage';
deviation.aboveAverage = true;
deviation.stdDev = 1;
deviation.format = format;

// Save the workbook.
await workbook.save('AboveAndBelowAverage.xlsx');
{% endhighlight %}
{% endtabs %}

## Unique and duplicate values

Unique and duplicate rules highlight values that occur once or more than once in a range.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const unique = sheet.conditionalFormats.add('A2:A20');
unique.type = 'uniqueValues';
unique.format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFC6EFCE' } },
};

const duplicate = sheet.conditionalFormats.add('B2:B20');
duplicate.type = 'duplicateValues';
duplicate.format = {
  font: { color: { rgb: 'FF9C0006' } },
  fill: { patternType: 'solid', fgColor: { rgb: 'FFFFC7CE' } },
};

// Save the workbook.
await workbook.save('UniqueAndDuplicateValues.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const unique = sheet.conditionalFormats.add('A2:A20');
unique.type = 'uniqueValues';
unique.format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFC6EFCE' } },
};

const duplicate = sheet.conditionalFormats.add('B2:B20');
duplicate.type = 'duplicateValues';
duplicate.format = {
  font: { color: { rgb: 'FF9C0006' } },
  fill: { patternType: 'solid', fgColor: { rgb: 'FFFFC7CE' } },
};

// Save the workbook.
await workbook.save('UniqueAndDuplicateValues.xlsx');
{% endhighlight %}
{% endtabs %}

## Date rules

A date rule highlights dates in a relative period, such as today or the last seven days. Set `type` to `timePeriod`, choose the period with `timePeriod`, and set the matching formula so that Excel can evaluate the rule. The cells must contain dates.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFFFEB9C' } },
};

// Dates in the last 7 days
const recent = sheet.conditionalFormats.add('A2:A20');
recent.type = 'timePeriod';
recent.timePeriod = 'last7Days';
recent.formulas = ['AND(TODAY()-FLOOR(A2,1)<=6,FLOOR(A2,1)<=TODAY())'];
recent.format = format;

// Dates in the current month
const month = sheet.conditionalFormats.add('B2:B20');
month.type = 'timePeriod';
month.timePeriod = 'thisMonth';
month.formulas = ['AND(MONTH(B2)=MONTH(TODAY()),YEAR(B2)=YEAR(TODAY()))'];
month.format = format;

// Save the workbook.
await workbook.save('DateRules.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const format = {
  fill: { patternType: 'solid', fgColor: { rgb: 'FFFFEB9C' } },
};

// Dates in the last 7 days
const recent = sheet.conditionalFormats.add('A2:A20');
recent.type = 'timePeriod';
recent.timePeriod = 'last7Days';
recent.formulas = ['AND(TODAY()-FLOOR(A2,1)<=6,FLOOR(A2,1)<=TODAY())'];
recent.format = format;

// Dates in the current month
const month = sheet.conditionalFormats.add('B2:B20');
month.type = 'timePeriod';
month.timePeriod = 'thisMonth';
month.formulas = ['AND(MONTH(B2)=MONTH(TODAY()),YEAR(B2)=YEAR(TODAY()))'];
month.format = format;

// Save the workbook.
await workbook.save('DateRules.xlsx');
{% endhighlight %}
{% endtabs %}

The `timePeriod` property accepts `today`, `yesterday`, `tomorrow`, `last7Days`, `thisWeek`, `lastWeek`, `nextWeek`, `thisMonth`, `lastMonth`, and `nextMonth`.

## Color scale

A color scale shades each cell by its value. Use three points for a lowest, middle, and highest color, or remove the middle point for a two-color scale. Each point has a `type` (`lowestValue`, `highestValue`, `number`, `percent`, `percentile`, or `formula`), a `value` for types that need one, and a `color`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Three-color scale: red, yellow, green
const threeColor = sheet.conditionalFormats.add('A2:A20');
threeColor.type = 'colorScale';
threeColor.colorScale.minPoint = { type: 'lowestValue', color: { rgb: 'FFF8696B' } };
threeColor.colorScale.midPoint = { type: 'percentile', value: '50', color: { rgb: 'FFFFEB84' } };
threeColor.colorScale.maxPoint = { type: 'highestValue', color: { rgb: 'FF63BE7B' } };

// Two-color scale: white to blue, with fixed bounds
const twoColor = sheet.conditionalFormats.add('B2:B20');
twoColor.type = 'colorScale';
twoColor.colorScale.minPoint = { type: 'number', value: '0', color: { rgb: 'FFFFFFFF' } };
twoColor.colorScale.midPoint = undefined;
twoColor.colorScale.maxPoint = { type: 'number', value: '100', color: { rgb: 'FF5A8AC6' } };

// Save the workbook.
await workbook.save('ColorScale.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Three-color scale: red, yellow, green
const threeColor = sheet.conditionalFormats.add('A2:A20');
threeColor.type = 'colorScale';
threeColor.colorScale.minPoint = { type: 'lowestValue', color: { rgb: 'FFF8696B' } };
threeColor.colorScale.midPoint = { type: 'percentile', value: '50', color: { rgb: 'FFFFEB84' } };
threeColor.colorScale.maxPoint = { type: 'highestValue', color: { rgb: 'FF63BE7B' } };

// Two-color scale: white to blue, with fixed bounds
const twoColor = sheet.conditionalFormats.add('B2:B20');
twoColor.type = 'colorScale';
twoColor.colorScale.minPoint = { type: 'number', value: '0', color: { rgb: 'FFFFFFFF' } };
twoColor.colorScale.midPoint = undefined;
twoColor.colorScale.maxPoint = { type: 'number', value: '100', color: { rgb: 'FF5A8AC6' } };

// Save the workbook.
await workbook.save('ColorScale.xlsx');
{% endhighlight %}
{% endtabs %}

## Data bar

A data bar draws an in-cell bar whose length reflects the cell value. Use the `dataBar` properties to set the bar color, the values that the shortest and longest bars represent, the bar lengths, the border, the direction, and how negative values and the axis are drawn.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.conditionalFormats.add('A2:A20');
rule.type = 'dataBar';

const bar = rule.dataBar;
bar.barColor = { rgb: 'FF638EC6' };
bar.minPoint = { type: 'number', value: '0' };
bar.maxPoint = { type: 'number', value: '100' };
bar.minLength = 10;
bar.maxLength = 90;
bar.gradient = false;
bar.showValue = true;

// Border
bar.hasBorder = true;
bar.borderColor = { rgb: 'FF2F5597' };

// Direction: 'context', 'leftToRight', or 'rightToLeft'
bar.dataBarDirection = 'leftToRight';

// Negative values and axis
bar.negativeBarColorSameAsPositive = false;
bar.negativeFillColor = { rgb: 'FFFF0000' };
bar.dataBarAxisPosition = 'middle';
bar.barAxisColor = { rgb: 'FF000000' };

// Save the workbook.
await workbook.save('DataBar.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.conditionalFormats.add('A2:A20');
rule.type = 'dataBar';

const bar = rule.dataBar;
bar.barColor = { rgb: 'FF638EC6' };
bar.minPoint = { type: 'number', value: '0' };
bar.maxPoint = { type: 'number', value: '100' };
bar.minLength = 10;
bar.maxLength = 90;
bar.gradient = false;
bar.showValue = true;

// Border
bar.hasBorder = true;
bar.borderColor = { rgb: 'FF2F5597' };

// Direction: 'context', 'leftToRight', or 'rightToLeft'
bar.dataBarDirection = 'leftToRight';

// Negative values and axis
bar.negativeBarColorSameAsPositive = false;
bar.negativeFillColor = { rgb: 'FFFF0000' };
bar.dataBarAxisPosition = 'middle';
bar.barAxisColor = { rgb: 'FF000000' };

// Save the workbook.
await workbook.save('DataBar.xlsx');
{% endhighlight %}
{% endtabs %}

## Icon set

An icon set places an icon in each cell based on thresholds. Choose the icon family with `iconSetType`, and set `iconCriteria` with one threshold for each icon, from lowest to highest.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Three traffic lights
const traffic = sheet.conditionalFormats.add('A2:A20');
traffic.type = 'iconSet';
traffic.iconSet.iconSetType = '3TrafficLights1';
traffic.iconSet.iconCriteria = [
  { type: 'percent', value: '0' },
  { type: 'percent', value: '33' },
  { type: 'percent', value: '67' },
];

// Four arrows with fixed number thresholds
const arrows = sheet.conditionalFormats.add('B2:B20');
arrows.type = 'iconSet';
arrows.iconSet.iconSetType = '4Arrows';
arrows.iconSet.iconCriteria = [
  { type: 'number', value: '0' },
  { type: 'number', value: '25' },
  { type: 'number', value: '50' },
  { type: 'number', value: '75' },
];

// Save the workbook.
await workbook.save('IconSet.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Three traffic lights
const traffic = sheet.conditionalFormats.add('A2:A20');
traffic.type = 'iconSet';
traffic.iconSet.iconSetType = '3TrafficLights1';
traffic.iconSet.iconCriteria = [
  { type: 'percent', value: '0' },
  { type: 'percent', value: '33' },
  { type: 'percent', value: '67' },
];

// Four arrows with fixed number thresholds
const arrows = sheet.conditionalFormats.add('B2:B20');
arrows.type = 'iconSet';
arrows.iconSet.iconSetType = '4Arrows';
arrows.iconSet.iconCriteria = [
  { type: 'number', value: '0' },
  { type: 'number', value: '25' },
  { type: 'number', value: '50' },
  { type: 'number', value: '75' },
];

// Save the workbook.
await workbook.save('IconSet.xlsx');
{% endhighlight %}
{% endtabs %}

The `iconSetType` property accepts the following families:

| Icons per cell | Values |
|---|---|
| 3 | `3Arrows`, `3ArrowsGray`, `3Flags`, `3TrafficLights1`, `3TrafficLights2`, `3Signs`, `3Symbols`, `3Symbols2`, `3Stars`, `3Triangles` |
| 4 | `4Arrows`, `4ArrowsGray`, `4RedToBlack`, `4Rating`, `4TrafficLights` |
| 5 | `5Arrows`, `5ArrowsGray`, `5Rating`, `5Quarters`, `5Boxes` |

## Manage rules

After rules are defined, you can review which ones apply to a cell, remove outdated rules, or clear the full set so formatting stays aligned with the current worksheet design.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.conditionalFormats.add('A1:A3');
rule.type = 'cellIs';
rule.operator = 'greaterThan';
rule.firstFormula = '40';

const count = sheet.conditionalFormats.count;
const first = sheet.conditionalFormats.item(0);
const covering = sheet.conditionalFormats.findByCell('A2');

sheet.conditionalFormats.remove(rule);

// Save the workbook.
await workbook.save('ManageRules.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.conditionalFormats.add('A1:A3');
rule.type = 'cellIs';
rule.operator = 'greaterThan';
rule.firstFormula = '40';

const count = sheet.conditionalFormats.count;
const first = sheet.conditionalFormats.item(0);
const covering = sheet.conditionalFormats.findByCell('A2');

sheet.conditionalFormats.remove(rule);

// Save the workbook.
await workbook.save('ManageRules.xlsx');
{% endhighlight %}
{% endtabs %}

N> Conditional format formulas are stored as text and are not evaluated by the library.

## Supported rule types

The `type` property selects the kind of rule. Each rule type is described in a section on this page.

| Type | Highlights | Section |
|---|---|---|
| `cellIs` | Cells that satisfy a comparison | [Cell value rule](#cell-value-rule), [Between and other comparison operators](#between-and-other-comparison-operators) |
| `expression` | Cells for which a formula returns `TRUE` | [Formula rule](#formula-rule) |
| `containsText`, `notContainsText`, `beginsWith`, `endsWith` | Cells that match a text | [Text rules](#text-rules) |
| `containsBlanks`, `notContainsBlanks`, `containsErrors`, `notContainsErrors` | Blank cells or cells with errors | [Blank and error rules](#blank-and-error-rules) |
| `top10` | The highest or lowest values | [Top and bottom rules](#top-and-bottom-rules) |
| `aboveAverage` | Values above or below the average | [Above and below average](#above-and-below-average) |
| `uniqueValues`, `duplicateValues` | Values that occur once or more than once | [Unique and duplicate values](#unique-and-duplicate-values) |
| `timePeriod` | Dates in a relative period | [Date rules](#date-rules) |
| `colorScale` | A color gradient across the range | [Color scale](#color-scale) |
| `dataBar` | In-cell bars | [Data bar](#data-bar) |
| `iconSet` | Icons based on thresholds | [Icon set](#icon-set) |
