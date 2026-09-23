---
title: Protection in JavaScript Excel Library | Syncfusion
description: Protect worksheets and workbooks, set options, and manage protected ranges with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Worksheet and Workbook Protection in JavaScript Excel

Protect a sheet with `sheet.protect(password?, options?)` and a workbook with `workbook.protect(password?, options?)`.

N> Protection is **not** file encryption. It stores protection flags (and optional password hashes) so Excel enforces allowed actions. It does not encrypt package contents.

## Protect a worksheet

Sheet protection options use **allow** polarity: `true` means the user may perform that action while the sheet is protected.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, SheetProtectionOptions } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const options: SheetProtectionOptions = {
  allowsSelectLockedCells: true,
  allowsSelectUnlockedCells: true,
  allowsFormatCells: false,
  allowsInsertRows: false,
  allowsDeleteRows: false,
  allowsSort: false,
  allowsAutoFilter: true,
};

sheet.protect('sheet-secret', options);

// Later
sheet.unprotect('sheet-secret');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.protect('sheet-secret', {
  allowsSelectLockedCells: true,
  allowsSelectUnlockedCells: true,
  allowsFormatCells: false,
  allowsInsertRows: false,
  allowsDeleteRows: false,
  allowsSort: false,
  allowsAutoFilter: true,
});

sheet.unprotect('sheet-secret');
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

Use `sheet.protectedRanges` to define named cell areas users may edit while the rest of the sheet stays protected.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const editable = sheet.protectedRanges.add({
  name: 'InputCells',
  sqref: 'B2:B20',
  password: 'range-secret', // optional
});

// Later: editable.setPassword(undefined) to clear the range password
// editable.verifyPassword('range-secret') when a password is set

const byName = sheet.protectedRanges.getByName('InputCells');
const all = sheet.protectedRanges.list();

sheet.protect('sheet-secret');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const editable = sheet.protectedRanges.add({
  name: 'InputCells',
  sqref: 'B2:B20',
  password: 'range-secret',
});

const byName = sheet.protectedRanges.getByName('InputCells');
const all = sheet.protectedRanges.list();

sheet.protect('sheet-secret');
{% endhighlight %}
{% endtabs %}

`ProtectedRanges` also supports `count`, `get(index)`, `remove`, `removeAt`, and `clear`. Multiple areas can be space-separated in the `sqref` address (for example `'A1:B2 D4:E5'`).

## Protect a workbook

Workbook options use **lock** polarity: `true` locks that capability.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, WorkbookProtectionOptions } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();

const options: WorkbookProtectionOptions = {
  lockStructure: true,
  lockWindows: false,
  lockRevision: false,
};

workbook.protect('wb-secret', options);

// workbook.workbookProtection is defined while protection is on
workbook.unprotect('wb-secret');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();

workbook.protect('wb-secret', {
  lockStructure: true,
  lockWindows: false,
  lockRevision: false,
});

workbook.unprotect('wb-secret');
{% endhighlight %}
{% endtabs %}

* `lockStructure` — prevent adding, deleting, renaming, or reordering sheets (default `true` on protect).
* `lockWindows` — prevent resizing or moving workbook windows (default `false`).
* `lockRevision` — lock shared-workbook revision tracking (default `false` on new protect).
