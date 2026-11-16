---
title: Protection in JavaScript Excel Library | Syncfusion
description: Protect worksheets and workbooks, set options, and manage protected ranges with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Worksheet and Workbook Protection in JavaScript Excel

Worksheet and workbook protection store restrictions that control the changes users can make when the workbook is opened in a spreadsheet application. Sheet protection controls editing on a worksheet, while workbook protection can lock structure, windows, or revision tracking. Optional passwords strengthen these limits.

N> Sheet and workbook protection is **not** file encryption. It stores protection flags (and optional password hashes) so Excel enforces allowed actions. It does not encrypt package contents. To require a password to open the file, see [Encrypt a workbook](#encrypt-a-workbook-with-a-password-to-open).

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

## Encrypt a workbook with a password to open

Encryption protects the whole file. A workbook with an open password cannot be read until the correct password is supplied. Set `Workbook.passwordToOpen` before saving; the saved file is encrypted using Office Agile encryption (AES-256 in CBC mode, SHA-512, 100,000 hash iterations, with an integrity check).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
sheet.cell('A1').value = 'Confidential';

// The saved file asks for this password when opened in Excel
workbook.passwordToOpen = 'open-secret';
await workbook.save('./Encrypted.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
sheet.cell('A1').value = 'Confidential';

// The saved file asks for this password when opened in Excel
workbook.passwordToOpen = 'open-secret';
await workbook.save('./Encrypted.xlsx');
{% endhighlight %}
{% endtabs %}

* The password must be 1 to 255 characters. A longer password throws `InvalidPasswordError`.
* Assigning `undefined`, `null`, or an empty string removes encryption, so the next save is a normal unencrypted file.
* `workbook.passwordToOpen` returns the current open password, or `undefined` when the workbook is not encrypted.
* Encryption is applied in `save()`, both when saving to bytes and when saving to a file path.

## Open an encrypted workbook

Pass the password as the second argument of `Workbook.open`. It works for byte arrays and, in Node.js, for file paths.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, InvalidPasswordError } from '@syncfusion/ej2-xlsx';

try {
  const workbook: Workbook = await Workbook.open('./Encrypted.xlsx', 'open-secret');
  console.log(workbook.sheet(0).cell('A1').value);

  // The workbook keeps its open password, so this save is encrypted again.
  // Clear it to save a plain file:
  workbook.passwordToOpen = undefined;
  await workbook.save('./Decrypted.xlsx');
} catch (error) {
  if (error instanceof InvalidPasswordError) {
    console.log('The password is missing or incorrect.');
  } else {
    throw error;
  }
}
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, InvalidPasswordError } from '@syncfusion/ej2-xlsx';

try {
  const workbook = await Workbook.open('./Encrypted.xlsx', 'open-secret');
  console.log(workbook.sheet(0).cell('A1').value);

  // The workbook keeps its open password, so this save is encrypted again.
  // Clear it to save a plain file:
  workbook.passwordToOpen = undefined;
  await workbook.save('./Decrypted.xlsx');
} catch (error) {
  if (error instanceof InvalidPasswordError) {
    console.log('The password is missing or incorrect.');
  } else {
    throw error;
  }
}
{% endhighlight %}
{% endtabs %}

* The password argument is ignored when the file is not encrypted.
* A missing or wrong password throws `InvalidPasswordError` (`INVALID_PASSWORD`).
* A file that uses an encryption scheme the library cannot read (for example certificate or rights-management encryption, or a legacy `.xls` file) throws `UnsupportedEncryptionError` (`UNSUPPORTED_ENCRYPTION`).
* Files encrypted with Agile or Standard encryption can be opened. Only Agile encryption is written.

N> Open-password encryption (`passwordToOpen`) is independent of `workbook.protect` and `sheet.protect`. You can use them together: the file password controls who can open the file, while protection controls what users can change after it is open.

N> Files that Excel marks as read-only recommended (encrypted with Excel's built-in default password) open without a password. Saving such a workbook produces an unencrypted file.
