---
title: Worksheet and Workbook Protection in JavaScript Excel Library | Syncfusion
description: Protect worksheets and workbooks, set options, and manage protected ranges with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Worksheet and Workbook Protection in JavaScript Excel Library

Worksheet and workbook protection store restrictions that control the changes users can make when the workbook is opened in a spreadsheet application. Sheet protection controls editing on a worksheet, while workbook protection can lock structure, windows, or revision tracking. Optional passwords strengthen these limits.

N> Protection is **not** file encryption. It stores protection flags (and optional password hashes) so Excel enforces allowed actions. It does not encrypt package contents.

## Protect a worksheet

Worksheet protection stores restrictions that control the changes users can make when the workbook is opened in a spreadsheet application. You can allow specific actions while protected and optionally require a password to unprotect the sheet.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, SheetProtectionOptions } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Protected sheet sample';

const options: SheetProtectionOptions = {
  allowsSelectLockedCells: true,
  allowsSelectUnlockedCells: true,
  allowsFormatCells: false,
  allowsInsertRows: false,
  allowsDeleteRows: false,
  allowsSort: false,
  allowsAutoFilter: true,
};

// Protect the sheet; Excel enforces these flags when the file opens
sheet.protect('sheet-secret', options);
await workbook.save('./SheetProtected.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Protected sheet sample';

sheet.protect('sheet-secret', {
  allowsSelectLockedCells: true,
  allowsSelectUnlockedCells: true,
  allowsFormatCells: false,
  allowsInsertRows: false,
  allowsDeleteRows: false,
  allowsSort: false,
  allowsAutoFilter: true,
});
await workbook.save('./SheetProtected.xlsx');
{% endhighlight %}
{% endtabs %}

Common `SheetProtectionOptions` flags include:

* `allowsFormatCells`, `allowsFormatColumns`, `allowsFormatRows`
* `allowsInsertColumns`, `allowsInsertRows`, `allowsInsertHyperlinks`
* `allowsDeleteColumns`, `allowsDeleteRows`
* `allowsSelectLockedCells`, `allowsSelectUnlockedCells`
* `allowsSort`, `allowsAutoFilter`, `allowsPivotTables`
* `allowsEditObjects` and `allowsEditScenarios` to allow editing of drawing objects and scenarios

Cell-level locked / hidden formula settings belong on cell style protection, not on `SheetProtectionOptions`.

## Protect a worksheet without a password

Call `protect()` without a password to lock the sheet so that users can unprotect it without entering a password. This prevents accidental edits but does not prevent deliberate changes. Use `isProtected` to check the state.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
sheet.cell('A1').value = 'Read-only report';

// Lock the sheet with the default allowed actions
sheet.protect();

const locked = sheet.isProtected; // true

// Save the workbook.
await workbook.save('ProtectWithoutPassword.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
sheet.cell('A1').value = 'Read-only report';

// Lock the sheet with the default allowed actions
sheet.protect();

const locked = sheet.isProtected; // true

// Save the workbook.
await workbook.save('ProtectWithoutPassword.xlsx');
{% endhighlight %}
{% endtabs %}

## Allow drawing objects and scenarios

The `allowsEditObjects` option controls whether users can edit drawing objects, such as shapes, text boxes, and charts, on a protected sheet. The `allowsEditScenarios` option controls whether users can edit scenarios.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.protect('sheet-secret', {
  allowsEditObjects: true,
  allowsEditScenarios: false,
  allowsFormatColumns: true,
  allowsInsertHyperlinks: true,
  allowsPivotTables: false,
});

// Save the workbook.
await workbook.save('AllowObjectsAndScenarios.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.protect('sheet-secret', {
  allowsEditObjects: true,
  allowsEditScenarios: false,
  allowsFormatColumns: true,
  allowsInsertHyperlinks: true,
  allowsPivotTables: false,
});

// Save the workbook.
await workbook.save('AllowObjectsAndScenarios.xlsx');
{% endhighlight %}
{% endtabs %}

## Allow-edit ranges (`protectedRanges`)

Allow-edit ranges store named cell areas that remain editable when sheet protection is enforced by a spreadsheet application. Optional range passwords can further control who may edit those areas.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';
import type { ProtectedRangeInput } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Cells users may still edit after the sheet is protected
const input: ProtectedRangeInput = {
  name: 'InputCells',
  sqref: 'B2:B10 C2:C10', // required A1 sqref (space-separated multi-area)
  password: 'range-secret', // optional
};

const editable = sheet.protectedRanges.add(input);

const byName = sheet.protectedRanges.getByName('InputCells');
const all = sheet.protectedRanges.list();
const count = sheet.protectedRanges.count;

sheet.protect('sheet-secret');
await workbook.save('./ProtectedRanges.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Cells users may still edit after the sheet is protected
const editable = sheet.protectedRanges.add({
  name: 'InputCells',
  sqref: 'B2:B10 C2:C10', // required A1 sqref (space-separated multi-area)
  password: 'range-secret',
});

const byName = sheet.protectedRanges.getByName('InputCells');
const all = sheet.protectedRanges.list();
const count = sheet.protectedRanges.count;

sheet.protect('sheet-secret');
await workbook.save('./ProtectedRanges.xlsx');
{% endhighlight %}
{% endtabs %}

`ProtectedRanges` also supports `count`, `get(index)`, `remove`, `removeAt`, and `clear`.

N> Editable cell areas are stored in the protected-range metadata. Preserve the original identifier when reading or writing this metadata.

## Protect a workbook

Workbook protection stores flags for structure, window arrangement, and revision tracking. By default, structure is locked so spreadsheet applications can prevent users from adding, deleting, or reordering sheets without unprotecting the workbook.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, WorkbookProtectionOptions } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
workbook.addSheet('Sales');

const options: WorkbookProtectionOptions = {
  lockStructure: true,
  lockWindows: false,
  lockRevision: false,
};

workbook.protect('wb-secret', options);

// workbook.workbookProtection is defined while protection is on
await workbook.save('./WorkbookProtected.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
workbook.addSheet('Sales');

workbook.protect('wb-secret', {
  lockStructure: true,
  lockWindows: false,
  lockRevision: false,
});

await workbook.save('./WorkbookProtected.xlsx');
{% endhighlight %}
{% endtabs %}

* `lockStructure` — prevent adding, deleting, renaming, or reordering sheets (default `true` on protect).
* `lockWindows` — prevent resizing or moving workbook windows (default `false`).
* `lockRevision` — lock shared-workbook revision tracking (default `false` on new protect).

## Unprotect a worksheet and a workbook

Remove protection with `unprotect()`. If you protected with a password, pass the same password. Check `isProtected` on the worksheet to confirm the result.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.protect('sheet-secret');
const before = sheet.isProtected; // true

sheet.unprotect('sheet-secret');
const after = sheet.isProtected; // false

// The same pattern works for workbook protection
workbook.protect('wb-secret', { lockStructure: true });
workbook.unprotect('wb-secret');

// Save the workbook.
await workbook.save('Unprotect.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.protect('sheet-secret');
const before = sheet.isProtected; // true

sheet.unprotect('sheet-secret');
const after = sheet.isProtected; // false

// The same pattern works for workbook protection
workbook.protect('wb-secret', { lockStructure: true });
workbook.unprotect('wb-secret');

// Save the workbook.
await workbook.save('Unprotect.xlsx');
{% endhighlight %}
{% endtabs %}
