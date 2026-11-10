---
title: Data Validation in JavaScript Excel Library | Syncfusion
description: Restrict cell input with data validation rules, operators, and error prompts in the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Data Validation in JavaScript Excel Library

Data validation limits what users can enter in a cell or range. You can restrict values by type, range, or list, and show input tips or error messages when the workbook is opened in Excel.

N> Validation formulas are opaque text. The library does not evaluate them. New rules start with `showErrorMessage = true`.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

## Whole number validation

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

// Save the workbook.
await workbook.save('WholeNumberRange.xlsx');
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

// Save the workbook.
await workbook.save('WholeNumberRange.xlsx');
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

// Save the workbook.
await workbook.save('ListValidation.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const list = sheet.dataValidations.add('B1:B50');
list.type = 'list';
list.firstFormula = '"Low,Medium,High"';
list.showListDropdown = true;

// Save the workbook.
await workbook.save('ListValidation.xlsx');
{% endhighlight %}
{% endtabs %}

## Decimal number validation

Decimal validation accepts any number, including fractions, that satisfies the operator you choose. Use it for prices, percentages, or measurements where whole numbers are too restrictive.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('B2:B20');
rule.type = 'decimal';
rule.operator = 'between';
rule.firstFormula = '0.5';
rule.secondFormula = '99.99';
rule.errorTitle = 'Invalid price';
rule.error = 'Enter a price from 0.50 to 99.99.';

// Save the workbook.
await workbook.save('DecimalValidation.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('B2:B20');
rule.type = 'decimal';
rule.operator = 'between';
rule.firstFormula = '0.5';
rule.secondFormula = '99.99';
rule.errorTitle = 'Invalid price';
rule.error = 'Enter a price from 0.50 to 99.99.';

// Save the workbook.
await workbook.save('DecimalValidation.xlsx');
{% endhighlight %}
{% endtabs %}

## Date validation

Date validation restricts a cell to dates that satisfy the operator. Supply the bounds as date serial numbers or as formulas such as `DATE(year, month, day)`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('C2:C20');
rule.type = 'date';
rule.operator = 'between';
rule.firstFormula = 'DATE(2026,1,1)';
rule.secondFormula = 'DATE(2026,12,31)';
rule.errorTitle = 'Invalid date';
rule.error = 'Enter a date in 2026.';

// Save the workbook.
await workbook.save('DateValidation.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('C2:C20');
rule.type = 'date';
rule.operator = 'between';
rule.firstFormula = 'DATE(2026,1,1)';
rule.secondFormula = 'DATE(2026,12,31)';
rule.errorTitle = 'Invalid date';
rule.error = 'Enter a date in 2026.';

// Save the workbook.
await workbook.save('DateValidation.xlsx');
{% endhighlight %}
{% endtabs %}

## Time validation

Time validation restricts a cell to times of day. Supply the bounds as fractions of a day or as formulas such as `TIME(hour, minute, second)`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('D2:D20');
rule.type = 'time';
rule.operator = 'between';
rule.firstFormula = 'TIME(9,0,0)';
rule.secondFormula = 'TIME(17,0,0)';
rule.errorTitle = 'Invalid time';
rule.error = 'Enter a time between 9:00 AM and 5:00 PM.';

// Save the workbook.
await workbook.save('TimeValidation.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('D2:D20');
rule.type = 'time';
rule.operator = 'between';
rule.firstFormula = 'TIME(9,0,0)';
rule.secondFormula = 'TIME(17,0,0)';
rule.errorTitle = 'Invalid time';
rule.error = 'Enter a time between 9:00 AM and 5:00 PM.';

// Save the workbook.
await workbook.save('TimeValidation.xlsx');
{% endhighlight %}
{% endtabs %}

## Text length validation

Text length validation limits how many characters a cell can contain. Use it for codes, identifiers, or comments that must fit a fixed size.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('E2:E20');
rule.type = 'textLength';
rule.operator = 'lessThanOrEqual';
rule.firstFormula = '10';
rule.errorTitle = 'Text too long';
rule.error = 'Enter 10 characters or fewer.';

// Save the workbook.
await workbook.save('TextLengthValidation.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('E2:E20');
rule.type = 'textLength';
rule.operator = 'lessThanOrEqual';
rule.firstFormula = '10';
rule.errorTitle = 'Text too long';
rule.error = 'Enter 10 characters or fewer.';

// Save the workbook.
await workbook.save('TextLengthValidation.xlsx');
{% endhighlight %}
{% endtabs %}

## Custom formula validation

Custom validation accepts a value only when a formula evaluates to `TRUE`. Write the formula relative to the first cell of the range, as you would in Excel.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Accept only values that are not already in A2:A20.
const rule = sheet.dataValidations.add('A2:A20');
rule.type = 'custom';
rule.firstFormula = 'COUNTIF($A$2:$A$20,A2)=1';
rule.errorTitle = 'Duplicate value';
rule.error = 'This value already exists in the column.';

// Save the workbook.
await workbook.save('CustomValidation.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Accept only values that are not already in A2:A20.
const rule = sheet.dataValidations.add('A2:A20');
rule.type = 'custom';
rule.firstFormula = 'COUNTIF($A$2:$A$20,A2)=1';
rule.errorTitle = 'Duplicate value';
rule.error = 'This value already exists in the column.';

// Save the workbook.
await workbook.save('CustomValidation.xlsx');
{% endhighlight %}
{% endtabs %}

## List validation from a cell range

A list rule can read its choices from a cell range, so changing the source cells updates the drop-down list. Use `listValues` instead of `firstFormula` when you prefer to pass an array of values.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Source values for the list
sheet.cell('H1').value = 'Open';
sheet.cell('H2').value = 'In progress';
sheet.cell('H3').value = 'Closed';

// Choices read from a range
const fromRange = sheet.dataValidations.add('F2:F20');
fromRange.type = 'list';
fromRange.firstFormula = '$H$1:$H$3';

// Choices passed as an array
const fromArray = sheet.dataValidations.add('G2:G20');
fromArray.type = 'list';
fromArray.listValues = ['Yes', 'No', 'Maybe'];

// Save the workbook.
await workbook.save('ListFromRange.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Source values for the list
sheet.cell('H1').value = 'Open';
sheet.cell('H2').value = 'In progress';
sheet.cell('H3').value = 'Closed';

// Choices read from a range
const fromRange = sheet.dataValidations.add('F2:F20');
fromRange.type = 'list';
fromRange.firstFormula = '$H$1:$H$3';

// Choices passed as an array
const fromArray = sheet.dataValidations.add('G2:G20');
fromArray.type = 'list';
fromArray.listValues = ['Yes', 'No', 'Maybe'];

// Save the workbook.
await workbook.save('ListFromRange.xlsx');
{% endhighlight %}
{% endtabs %}

## Error alert styles and messages

The `errorStyle` property controls how Excel reacts to invalid input: `stop` rejects it, `warning` lets the user choose to keep it, and `information` only informs the user. Set `allowBlank` to allow empty cells, and use the prompt properties to show an input message when the cell is selected.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('A2:A20');
rule.type = 'whole';
rule.operator = 'greaterThanOrEqual';
rule.firstFormula = '0';

// How Excel reacts to invalid input: 'stop', 'warning', or 'information'
rule.errorStyle = 'warning';
rule.showErrorMessage = true;
rule.errorTitle = 'Unexpected value';
rule.error = 'The value should be zero or greater. Keep it anyway?';

// Input message shown when the cell is selected
rule.showInputMessage = true;
rule.promptTitle = 'Quantity';
rule.prompt = 'Enter zero or a positive whole number.';

// Allow the cell to stay empty
rule.allowBlank = true;

// Save the workbook.
await workbook.save('ErrorAlertStyles.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const rule = sheet.dataValidations.add('A2:A20');
rule.type = 'whole';
rule.operator = 'greaterThanOrEqual';
rule.firstFormula = '0';

// How Excel reacts to invalid input: 'stop', 'warning', or 'information'
rule.errorStyle = 'warning';
rule.showErrorMessage = true;
rule.errorTitle = 'Unexpected value';
rule.error = 'The value should be zero or greater. Keep it anyway?';

// Input message shown when the cell is selected
rule.showInputMessage = true;
rule.promptTitle = 'Quantity';
rule.prompt = 'Enter zero or a positive whole number.';

// Allow the cell to stay empty
rule.allowBlank = true;

// Save the workbook.
await workbook.save('ErrorAlertStyles.xlsx');
{% endhighlight %}
{% endtabs %}

## Find and remove validation rules

After rules are added, you can read how many rules the sheet has, check whether a cell has a rule, find the rules that apply to a cell, and remove one rule or all rules.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const first = sheet.dataValidations.add('A2:A20');
first.type = 'whole';
first.firstFormula = '0';

const second = sheet.dataValidations.add('B2:B20');
second.type = 'list';
second.listValues = ['Low', 'Medium', 'High'];

const count = sheet.dataValidations.count;

// Check a single cell and list the rules that cover it
const hasRule = sheet.dataValidations.has('B5');
const rulesForCell = sheet.dataValidations.findByCell('B5');

// Remove one rule, by reference or by zero-based index
sheet.dataValidations.remove(first);

// Remove every rule on the sheet

// Save the workbook.
await workbook.save('ManageValidationRules.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const first = sheet.dataValidations.add('A2:A20');
first.type = 'whole';
first.firstFormula = '0';

const second = sheet.dataValidations.add('B2:B20');
second.type = 'list';
second.listValues = ['Low', 'Medium', 'High'];

const count = sheet.dataValidations.count;

// Check a single cell and list the rules that cover it
const hasRule = sheet.dataValidations.has('B5');
const rulesForCell = sheet.dataValidations.findByCell('B5');

// Remove one rule, by reference or by zero-based index
sheet.dataValidations.remove(first);

// Remove every rule on the sheet

// Save the workbook.
await workbook.save('ManageValidationRules.xlsx');
{% endhighlight %}
{% endtabs %}

## Supported types and operators

The `type` property selects the kind of input that the rule accepts. Pair the type with an operator and one or two formulas to define the allowed values.

| Type | Accepts | Sections |
|---|---|---|
| `whole` | Whole numbers | [Whole number validation](#whole-number-validation) |
| `decimal` | Numbers, including fractions | [Decimal number validation](#decimal-number-validation) |
| `list` | A value from a list | [List validation](#list-validation), [List validation from a cell range](#list-validation-from-a-cell-range) |
| `date` | Dates | [Date validation](#date-validation) |
| `time` | Times of day | [Time validation](#time-validation) |
| `textLength` | Text of a given length | [Text length validation](#text-length-validation) |
| `custom` | Values for which a formula returns `TRUE` | [Custom formula validation](#custom-formula-validation) |
| `none` | Any value (no restriction) | |

Set `rule.operator` when the type compares values: `between`, `notBetween`, `equal`, `notEqual`, `lessThan`, `lessThanOrEqual`, `greaterThan`, or `greaterThanOrEqual`. The `between` and `notBetween` operators use both `firstFormula` and `secondFormula`; the other operators use only `firstFormula`. The `list` and `custom` types do not use an operator.

Set `rule.errorStyle` to control how Excel presents invalid input: `stop`, `warning`, or `information`.
