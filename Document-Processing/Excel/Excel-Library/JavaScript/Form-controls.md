---
title: Form Controls in JavaScript Excel Library | Syncfusion
description: Add Excel form controls with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Form Controls in JavaScript Excel

Worksheet form controls are authored as classic Excel (VML) controls and written on save. Geometry uses **points**; anchors are **1-based**.

N> Button `onAction` stores a macro **name** only. This library does not execute macros.

## Check box

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const checkBox = sheet.addCheckBox(
  2,
  2,
  96,
  18,
  'AgreeBox',
  'I agree',
  'checked',
  'C2',
);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const checkBox = sheet.addCheckBox(
  2,
  2,
  96,
  18,
  'AgreeBox',
  'I agree',
  'checked',
  'C2',
);
{% endhighlight %}
{% endtabs %}

`CheckState` is `'unchecked' | 'checked' | 'mixed'`.

## Combo box and drop-down

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Red';
sheet.cell('A2').value = 'Green';
sheet.cell('A3').value = 'Blue';

const combo = sheet.addComboBox(2, 3, 120, 20, 'ColorCombo', 'A1:A3', 'D2');
const dropdown = sheet.addComboDropdown(5, 3, 120, 20, 'ColorDrop', 'A1:A3');
const comboEdit = sheet.addComboEditBox(8, 3, 120, 20, 'ColorEdit', 'A1:A3');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Red';
sheet.cell('A2').value = 'Green';
sheet.cell('A3').value = 'Blue';

const combo = sheet.addComboBox(2, 3, 120, 20, 'ColorCombo', 'A1:A3', 'D2');
const dropdown = sheet.addComboDropdown(5, 3, 120, 20, 'ColorDrop', 'A1:A3');
const comboEdit = sheet.addComboEditBox(8, 3, 120, 20, 'ColorEdit', 'A1:A3');
{% endhighlight %}
{% endtabs %}

## Option button, group box, and label

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.addGroupBox(2, 2, 200, 80, 'PlanGroup', 'Plan');
sheet.addOptionButton(3, 3, 100, 18, 'PlanBasic', 'Basic', 'checked', 'G2', true, true);
sheet.addOptionButton(4, 3, 100, 18, 'PlanPro', 'Pro', 'unchecked', 'G2');
sheet.addFormLabel(6, 2, 120, 18, 'PlanLabel', 'Choose a plan');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.addGroupBox(2, 2, 200, 80, 'PlanGroup', 'Plan');
sheet.addOptionButton(3, 3, 100, 18, 'PlanBasic', 'Basic', 'checked', 'G2', true, true);
sheet.addOptionButton(4, 3, 100, 18, 'PlanPro', 'Pro', 'unchecked', 'G2');
sheet.addFormLabel(6, 2, 120, 18, 'PlanLabel', 'Choose a plan');
{% endhighlight %}
{% endtabs %}

## Button, list box, scroll bar, spin button, edit box

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.addButton(2, 2, 90, 24, 'RunBtn', 'Run', 'Module1.RunReport');
sheet.addListBox(5, 2, 120, 80, 'ItemsList', 'A1:A5', 'B5');
sheet.addScrollBar(5, 5, 18, 100, 'QtyScroll', 'C5', 0, 0, 100, 1, 10, false);
sheet.addSpinButton(5, 7, 18, 24, 'QtySpin', 'D5', 1, 0, 50, 1);
sheet.addEditBox(8, 2, 160, 24, 'NotesEdit', '', 'E8', true);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.addButton(2, 2, 90, 24, 'RunBtn', 'Run', 'Module1.RunReport');
sheet.addListBox(5, 2, 120, 80, 'ItemsList', 'A1:A5', 'B5');
sheet.addScrollBar(5, 5, 18, 100, 'QtyScroll', 'C5', 0, 0, 100, 1, 10, false);
sheet.addSpinButton(5, 7, 18, 24, 'QtySpin', 'D5', 1, 0, 50, 1);
sheet.addEditBox(8, 2, 160, 24, 'NotesEdit', '', 'E8', true);
{% endhighlight %}
{% endtabs %}

## Collections and removal

Read snapshots such as `sheet.checkBoxes`, `sheet.comboBoxes`, `sheet.optionButtons`, `sheet.buttons`, `sheet.listBoxes`, `sheet.groupBoxes`, `sheet.formLabels`, `sheet.scrollBars`, `sheet.spinButtons`, and `sheet.editBoxes`. Remove with the matching `remove*` method (handle or zero-based index).
