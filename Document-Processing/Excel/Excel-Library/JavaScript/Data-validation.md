---
title: Data Validation in JavaScript Excel | Syncfusion
description: Restrict cell input with data validation rules, operators, and error prompts in the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Data Validation in JavaScript Excel

Data validation limits what users can enter in a cell or range. You can restrict values by type, range, or list, and show input tips or error messages when the workbook is opened in Excel.

N> Validation formulas are opaque text. The library does not evaluate them. New rules start with `showErrorMessage = true`.

## Whole-number range

Whole-number validation limits entries to integers within the bounds you set. Input prompts and error messages help users enter valid values when the workbook is opened in Excel.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Address is the A1 range the rule applies to
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

// Address is the A1 range the rule applies to
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

List validation restricts a cell to a fixed set of choices. A drop-down list in Excel helps users pick an allowed value instead of typing free text.

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

Validation can target whole numbers, decimals, lists, dates, times, text length, or a custom formula. Pair the type with an operator and one or two formulas to define the allowed values.

Set `rule.operator` when the type compares values: `between`, `notBetween`, `equal`, `notEqual`, `lessThan`, `lessThanOrEqual`, `greaterThan`, or `greaterThanOrEqual`.

Set `rule.errorStyle` to control how Excel presents invalid input: `stop`, `warning`, or `information`.
