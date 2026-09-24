---
title: Protection in JavaScript Excel Library | Syncfusion
description: Protect worksheets and workbooks, set options, and manage protected ranges with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Worksheet and Workbook Protection in JavaScript Excel

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

// Later: sheet.unprotect('sheet-secret');
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

// Later: sheet.unprotect('sheet-secret');
await workbook.save('./SheetProtected.xlsx');
{% endhighlight %}
{% endtabs %}

Common `SheetProtectionOptions` flags include:

* `allowsFormatCells`, `allowsFormatColumns`, `allowsFormatRows`
* `allowsInsertColumns`, `allowsInsertRows`, `allowsInsertHyperlinks`
* `allowsDeleteColumns`, `allowsDeleteRows`
* `allowsSelectLockedCells`, `allowsSelectUnlockedCells`
* `allowsSort`, `allowsAutoFilter`, `allowsPivotTables`
* Drawing-related allow flags as exported on the interface

Cell-level locked / hidden formula settings belong on cell style protection, not on `SheetProtectionOptions`.

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

// Later: editable.setPassword(undefined) to clear the range password
// editable.verifyPassword('range-secret') when a password is set
// editable.sqref = 'D2:D20'; // update areas after add

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

N> `sqref` is the OOXML attribute name for the editable cell areas. Keep this identifier as-is when reading or writing protected-range metadata.

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
// workbook.unprotect('wb-secret');
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

// workbook.unprotect('wb-secret');
await workbook.save('./WorkbookProtected.xlsx');
{% endhighlight %}
{% endtabs %}

* `lockStructure` — prevent adding, deleting, renaming, or reordering sheets (default `true` on protect).
* `lockWindows` — prevent resizing or moving workbook windows (default `false`).
* `lockRevision` — lock shared-workbook revision tracking (default `false` on new protect).
