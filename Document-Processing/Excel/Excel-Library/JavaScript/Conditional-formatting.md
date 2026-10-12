---
title: Conditional Formatting in JavaScript Excel | Syncfusion
description: Add and configure conditional formatting rules, formulas, and differential formats with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Conditional Formatting in JavaScript Excel

Conditional formatting applies visual styles when cell values meet a rule you define. Use it to highlight thresholds, trends, or exceptions across a selected range when the workbook opens in Excel.

`ConditionalFormatType` and `ConditionalFormatOperator` are **string union types** (for example `'cellIs'`, `'greaterThan'`), not numeric enums. New rules start as a `cellIs` value-comparison rule. Use `firstFormula` / `secondFormula` (or the `formulas` array) for thresholds. Apply highlight styling through `format` (`DifferentialFormatInput`: font, fill, and border).

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
{% endhighlight %}
{% endtabs %}

For a between rule, set `operator` to `'between'` and supply both bounds:

```ts
rule.operator = 'between';
rule.firstFormula = '10';
rule.secondFormula = '50';
```

Common `ConditionalFormatType` values include `'cellIs'`, `'expression'`, `'colorScale'`, `'dataBar'`, `'iconSet'`, `'top10'`, `'uniqueValues'`, `'duplicateValues'`, text/blank/error matchers, `'timePeriod'`, and `'aboveAverage'`. Operators for value rules include `'greaterThan'`, `'lessThan'`, `'equal'`, `'between'`, and related members.

## Color scale, data bar, and icon set

Color scales, data bars, and icon sets add visual cues across a range so patterns and relative magnitude stand out at a glance. Each style maps value thresholds to colors, bar lengths, or icons.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const colorScaleRule = sheet.conditionalFormats.add('B1:B10');
colorScaleRule.type = 'colorScale';
// colorScaleRule.colorScale — min/mid/max stops after type is set

const dataBarRule = sheet.conditionalFormats.add('C1:C10');
dataBarRule.type = 'dataBar';
// dataBarRule.dataBar — bar color, min/max points, direction, and related options

const iconRule = sheet.conditionalFormats.add('D1:D10');
iconRule.type = 'iconSet';
// iconRule.iconSet — icon set family and criteria
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const colorScaleRule = sheet.conditionalFormats.add('B1:B10');
colorScaleRule.type = 'colorScale';

const dataBarRule = sheet.conditionalFormats.add('C1:C10');
dataBarRule.type = 'dataBar';

const iconRule = sheet.conditionalFormats.add('D1:D10');
iconRule.type = 'iconSet';
{% endhighlight %}
{% endtabs %}

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
// sheet.conditionalFormats.removeAt(0);
// sheet.conditionalFormats.clear();
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
{% endhighlight %}
{% endtabs %}

N> Conditional format formulas are stored as text and are not evaluated by the library.
