---
title: Form Controls in JavaScript Excel Library | Syncfusion
description: Add and configure Excel form controls such as buttons, check boxes, and list boxes with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Form Controls in JavaScript Excel

Form controls place interactive choices on a worksheet, such as check boxes, lists, and buttons. Sizes use points, and placement anchors use 1-based row and column positions so controls align with the grid when the file opens in Excel.

N> Button `onAction` stores a macro **name** only. This library does not execute macros.

## Check box

A check box captures a yes-or-no choice on the worksheet. Linking it to a cell stores the checked state so formulas and other logic can use the selection.

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

Pass the check state as a string: `'unchecked'`, `'checked'`, or `'mixed'` (tri-state). The last argument links the control to a cell address when you need a linked value.

## Combo box and drop-down

Combo boxes and drop-downs let users pick a value from a list source on the sheet. Choose a fixed list, a linked selection, or an editable field based on how free the input should be.

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

Option buttons present mutually exclusive choices within a group. Group boxes organize those options visually, and labels provide static captions beside the controls.

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

Buttons, list boxes, scroll bars, spin buttons, and edit boxes complete the classic form control set. They support actions, multi-item selection, numeric adjustment, and free-text input on the worksheet.

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

After controls are on a sheet, you can list each control type and remove controls you no longer need. Removal targets a specific control or its position in that control list.
