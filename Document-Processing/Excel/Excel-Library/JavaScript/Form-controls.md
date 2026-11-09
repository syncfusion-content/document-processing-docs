---
title: Form Controls in JavaScript Excel Library | Syncfusion
description: Add and configure Excel form controls such as buttons, check boxes, and list boxes with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Form Controls in JavaScript Excel Library

Form controls place interactive choices on a worksheet, such as check boxes, lists, and buttons. Sizes use points, and placement anchors use 1-based row and column positions so controls align with the grid when the file opens in Excel.

N> Button `onAction` stores a macro **name** only. This library does not execute macros.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

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

// Save the workbook.
await workbook.save('CheckBox.xlsx');
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

// Save the workbook.
await workbook.save('CheckBox.xlsx');
{% endhighlight %}
{% endtabs %}

Pass the check state as a string: `'unchecked'`, `'checked'`, or `'mixed'` (tri-state). The last argument links the control to a cell address when you need a linked value.

## Combo box and drop-down list

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

// Save the workbook.
await workbook.save('ComboBoxAndDropDown.xlsx');
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

// Save the workbook.
await workbook.save('ComboBoxAndDropDown.xlsx');
{% endhighlight %}
{% endtabs %}

The combo box methods create the following styles:

| Method | Style | Behavior |
|---|---|---|
| `addComboBox` | `dropStyle`: `'combo'` (default), `'comboedit'`, or `'simple'` | A drop-down list. Pass the `dropStyle` argument to choose the style. |
| `addComboEditBox` | Editable combo box | A drop-down list that the user can also type into. |
| `addComboDropdown` | Simple drop-down | A drop-down list that stays visible only while its button is held. |

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

// Save the workbook.
await workbook.save('OptionButtonGroupBoxAndLabel.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.addGroupBox(2, 2, 200, 80, 'PlanGroup', 'Plan');
sheet.addOptionButton(3, 3, 100, 18, 'PlanBasic', 'Basic', 'checked', 'G2', true, true);
sheet.addOptionButton(4, 3, 100, 18, 'PlanPro', 'Pro', 'unchecked', 'G2');
sheet.addFormLabel(6, 2, 120, 18, 'PlanLabel', 'Choose a plan');

// Save the workbook.
await workbook.save('OptionButtonGroupBoxAndLabel.xlsx');
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

// Save the workbook.
await workbook.save('ButtonListBoxScrollBarSpinButtonEditBox.xlsx');
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

// Save the workbook.
await workbook.save('ButtonListBoxScrollBarSpinButtonEditBox.xlsx');
{% endhighlight %}
{% endtabs %}

## Check box and option button states

Check boxes and option buttons use the states `'unchecked'`, `'checked'`, and `'mixed'` (a state that is neither on nor off). Set the state when you add the control, or change `checkState` later. The linked cell receives the result when a user changes the control in Excel.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Arguments: row, column, width, height, name, text, checkState, linkedCell
const accepted = sheet.addCheckBox(2, 2, 120, 20, 'Accepted', 'Accepted', 'checked', 'D2');
const pending = sheet.addCheckBox(4, 2, 120, 20, 'Pending', 'Pending', 'mixed', 'D4');
const rejected = sheet.addCheckBox(6, 2, 120, 20, 'Rejected', 'Rejected', 'unchecked', 'D6');

// Change the state later
rejected.checkState = 'checked';

// Save the workbook.
await workbook.save('CheckStates.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Arguments: row, column, width, height, name, text, checkState, linkedCell
const accepted = sheet.addCheckBox(2, 2, 120, 20, 'Accepted', 'Accepted', 'checked', 'D2');
const pending = sheet.addCheckBox(4, 2, 120, 20, 'Pending', 'Pending', 'mixed', 'D4');
const rejected = sheet.addCheckBox(6, 2, 120, 20, 'Rejected', 'Rejected', 'unchecked', 'D6');

// Change the state later
rejected.checkState = 'checked';

// Save the workbook.
await workbook.save('CheckStates.xlsx');
{% endhighlight %}
{% endtabs %}

## Format caption controls

Check boxes, option buttons, buttons, group boxes, labels, and edit boxes share caption formatting options: fill color, font, font style, underline, strikethrough, and alignment.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const box = sheet.addCheckBox(2, 2, 160, 24, 'Terms', 'Accept the terms', 'unchecked', 'D2');

box.fillColor = 'FFF2CC';
box.fontName = 'Arial';
box.fontSize = 12;
box.fontColor = '7F6000';

// 'regular', 'italic', 'bold', or 'boldItalic'
box.fontStyle = 'boldItalic';
// 'none', 'single', or 'double'
box.underline = 'single';
box.isStrikethrough = false;

// Horizontal: 'left', 'center', 'right', or 'justify'
box.horizontalAlignment = 'center';
// Vertical: 'top', 'center', 'bottom', or 'justify'
box.verticalAlignment = 'center';

// Save the workbook.
await workbook.save('FormatFormControls.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const box = sheet.addCheckBox(2, 2, 160, 24, 'Terms', 'Accept the terms', 'unchecked', 'D2');

box.fillColor = 'FFF2CC';
box.fontName = 'Arial';
box.fontSize = 12;
box.fontColor = '7F6000';

// 'regular', 'italic', 'bold', or 'boldItalic'
box.fontStyle = 'boldItalic';
// 'none', 'single', or 'double'
box.underline = 'single';
box.isStrikethrough = false;

// Horizontal: 'left', 'center', 'right', or 'justify'
box.horizontalAlignment = 'center';
// Vertical: 'top', 'center', 'bottom', or 'justify'
box.verticalAlignment = 'center';

// Save the workbook.
await workbook.save('FormatFormControls.xlsx');
{% endhighlight %}
{% endtabs %}

## Edit box options

An edit box accepts typed text and can write it to a linked cell. Set `isMultiLine` to allow several lines, and `isPassword` to mask the typed characters.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Arguments: row, column, width, height, name, text, textLink
const notes = sheet.addEditBox(2, 2, 200, 80, 'Notes', 'Type notes here', 'E2');
notes.isMultiLine = true;

const secret = sheet.addEditBox(8, 2, 200, 24, 'Secret', '', 'E8');
secret.isPassword = true;

// Save the workbook.
await workbook.save('EditBoxOptions.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Arguments: row, column, width, height, name, text, textLink
const notes = sheet.addEditBox(2, 2, 200, 80, 'Notes', 'Type notes here', 'E2');
notes.isMultiLine = true;

const secret = sheet.addEditBox(8, 2, 200, 24, 'Secret', '', 'E8');
secret.isPassword = true;

// Save the workbook.
await workbook.save('EditBoxOptions.xlsx');
{% endhighlight %}
{% endtabs %}

## Common control settings

All form controls share settings for the name, visibility, alternative text, macro, printing, locking, and behavior with cells. Set them on the object that the `add` method returns. The macro name is only stored; the library does not run macros.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const button = sheet.addButton(2, 2, 100, 28, 'RunButton', 'Run report', 'Module1.RunReport');

button.alternativeText = 'Runs the monthly report';
button.onAction = 'Module1.RunMonthlyReport';
button.isVisible = true;

// Printing and protection
button.printObject = false;
button.isLocked = false;

// Behavior when cells under the control change
button.moveWithCells = true;
button.sizeWithCells = false;

// Save the workbook.
await workbook.save('CommonControlSettings.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const button = sheet.addButton(2, 2, 100, 28, 'RunButton', 'Run report', 'Module1.RunReport');

button.alternativeText = 'Runs the monthly report';
button.onAction = 'Module1.RunMonthlyReport';
button.isVisible = true;

// Printing and protection
button.printObject = false;
button.isLocked = false;

// Behavior when cells under the control change
button.moveWithCells = true;
button.sizeWithCells = false;

// Save the workbook.
await workbook.save('CommonControlSettings.xlsx');
{% endhighlight %}
{% endtabs %}

## Scroll bar and spin button settings

A scroll bar and a spin button write their position to a linked cell. Set the minimum and maximum values and the step size. A scroll bar also has a page step and an orientation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Arguments: row, column, width, height, name, linkedCell,
// value, min, max, incrementalChange, pageChange, isHorizontal
const scroll = sheet.addScrollBar(2, 2, 18, 120, 'QtyScroll', 'D2', 10, 0, 100, 1, 10, false);

// Arguments: row, column, width, height, name, linkedCell,
// value, min, max, incrementalChange
const spin = sheet.addSpinButton(2, 5, 18, 28, 'QtySpin', 'F2', 5, 0, 50, 1);

// Change a setting later
scroll.max = 200;
spin.incrementalChange = 5;

// Save the workbook.
await workbook.save('ScrollBarAndSpinButton.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Arguments: row, column, width, height, name, linkedCell,
// value, min, max, incrementalChange, pageChange, isHorizontal
const scroll = sheet.addScrollBar(2, 2, 18, 120, 'QtyScroll', 'D2', 10, 0, 100, 1, 10, false);

// Arguments: row, column, width, height, name, linkedCell,
// value, min, max, incrementalChange
const spin = sheet.addSpinButton(2, 5, 18, 28, 'QtySpin', 'F2', 5, 0, 50, 1);

// Change a setting later
scroll.max = 200;
spin.incrementalChange = 5;

// Save the workbook.
await workbook.save('ScrollBarAndSpinButton.xlsx');
{% endhighlight %}
{% endtabs %}

## List and remove form controls

After controls are on a sheet, you can list each control type and remove controls you no longer need. Removal targets a specific control or its position in that control list.
