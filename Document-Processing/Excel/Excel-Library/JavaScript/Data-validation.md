---
title: Data Validation in JavaScript Excel | Syncfusion
description: Restrict cell input with data validation rules in the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Data Validation in JavaScript Excel

Add a rule with `sheet.dataValidations.add(address)`, then set type, operator, formulas, and messages on the returned handle.

N> Validation formulas are opaque text. The library does not evaluate them. New rules start with `showErrorMessage = true`.

## Whole-number range

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('A1:A20');
rule.type = 'whole';
rule.operator = 'between';
rule.firstFormula = '1';
rule.secondFormula = '100';
rule.errorTitle = 'Invalid entry';
rule.error = 'Enter a whole number from 1 to 100.';
rule.errorStyle = 'stop';
rule.promptTitle = 'Quantity';
rule.prompt = 'Type a whole number between 1 and 100.';
rule.showInputMessage = true;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('A1:A20');
rule.type = 'whole';
rule.operator = 'between';
rule.firstFormula = '1';
rule.secondFormula = '100';
rule.errorTitle = 'Invalid entry';
rule.error = 'Enter a whole number from 1 to 100.';
rule.errorStyle = 'stop';
rule.promptTitle = 'Quantity';
rule.prompt = 'Type a whole number between 1 and 100.';
rule.showInputMessage = true;
{% endhighlight %}
{% endtabs %}

## List validation

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const list = sheet.dataValidations.add('B1:B50');
list.type = 'list';
list.firstFormula = '"Low,Medium,High"';
list.showListDropdown = true;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const list = sheet.dataValidations.add('B1:B50');
list.type = 'list';
list.firstFormula = '"Low,Medium,High"';
list.showListDropdown = true;
{% endhighlight %}
{% endtabs %}

## Supported types and operators

**Types:** `none`, `whole`, `decimal`, `list`, `date`, `time`, `textLength`, `custom`.

**Operators:** `between`, `notBetween`, `equal`, `notEqual`, `lessThan`, `lessThanOrEqual`, `greaterThan`, `greaterThanOrEqual`.

**Error styles:** `stop`, `warning`, `information`.
