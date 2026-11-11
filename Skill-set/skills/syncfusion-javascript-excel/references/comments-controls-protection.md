# Comments, form controls, protection, and freeze panes

Notes/threads, form controls, sheet protection, and frozen panes.

## Table of contents

- [Classic comments (notes)](#classic-comments-notes)
- [Threaded comments](#threaded-comments)
- [Form controls](#form-controls)
- [Sheet protection](#sheet-protection)
- [Freeze panes](#freeze-panes)
- [Gotchas](#gotchas)

## Classic comments (notes)

```ts
const sheet = wb.sheet(0);

// Worksheet collection path
const note = sheet.addComment({
  ref: 'A1',
  text: 'Verify total',
  author: 'Audit',
  // visibility / size options per AddCommentOptions
});

// Cell path
sheet.cell('B2').addComment({ text: 'Needs review', author: 'Ada' });
sheet.cell('B2').comment = { text: 'Updated note' };
sheet.cell('B2').removeComment();

sheet.removeComment(note);
// sheet.comments collection
```

A cell can hold one classic note; adding another throws `InvalidCommentError`.

## Threaded comments

```ts
const thread = sheet.cell('C3').addThreadedComment(
  'Please confirm SKU',
  'Lin',
  new Date(),
);

// thread replies via ThreadedComment / ThreadedCommentReply APIs
const existing = sheet.cell('C3').threadedComment;

sheet.removeThreadedComment(thread);
sheet.clearThreadedComments();
// sheet.threadedComments
```

- One discussion thread per cell.
- Replies are part of the thread model; persons metadata is managed internally as needed.

## Form controls

Worksheet helpers add controls anchored at **1-based** row/column with size in **points**. Real method names (no optional chaining):

```ts
// addCheckBox(row, column, width, height, name?, text?, checkState?, linkedCell?, isDisplay3DShading?)
const cb = sheet.addCheckBox(2, 2, 72, 18, 'Agree', 'I agree');

// Other add* helpers on Worksheet:
// addComboBox, addComboEditBox, addOptionButton, addButton,
// addListBox, addGroupBox, addScrollBar, addSpinButton,
// addEditBox, addFormLabel

sheet.removeCheckBox(cb);
```

Exported types include: `CheckBox`, `ComboBox`, `OptionButton`, `FormButton`, `ListBox`, `GroupBox`, `ScrollBar`, `SpinButton`, `EditBox`, `FormLabel`, `CheckState`, `ComboDropStyle`, and style enums.

Form controls are OOXML/VML-style drawing objects for Excel — this library does not run a forms UI.

## Sheet protection

```ts
import type { SheetProtectionOptions } from '@syncfusion/ej2-xlsx';

const options: SheetProtectionOptions = {
  allowsSelectLockedCells: true,
  allowsSelectUnlockedCells: true,
  allowsFormatCells: false,
  allowsInsertRows: false,
  allowsSort: false,
  allowsAutoFilter: false,
  allowsEditObjects: true,
  allowsEditScenarios: true,
  // allowsFormatColumns/Rows, insert/delete columns, hyperlinks, pivot tables, …
};

sheet.protect('sheet-secret', options);
console.log(sheet.isProtected); // true
console.log(sheet.sheetProtection?.hasPassword);

sheet.unprotect('sheet-secret');
```

Polarity is **allows\***: `true` means the user **may** perform that action while protected.

Cell `style.protection.locked` / `hidden` combine with sheet protection. Use `protectedRanges` for editable ranges while protected when that API is needed.

Workbook-level protect is separate (`Workbook.protect` with **lock\*** flags).

## Freeze panes

```ts
// Freeze so rows above and columns left of C3 stay visible
sheet.freeze.freezeAt('C3');

// Or explicit pane sizes
sheet.freeze.freezePanes({
  rows: 1,
  columns: 2,
  topLeftCell: 'C2', // optional
});

console.log(sheet.freeze.isFrozen);
console.log(sheet.freeze.rows, sheet.freeze.columns, sheet.freeze.topLeftCell);

sheet.freeze.unfreeze();
```

## Gotchas

- Sheet protect password is not file encryption.
- `allows*` defaults matter — omit only when defaults match your intent.
- Classic note vs threaded comment are different features; do not mix on the same UX assumption without checking both.
- Form control method names are `addCheckBox`, `addComboBox`, … on `Worksheet` — use TSDoc for full parameter lists.
- Freeze anchors use the same A1 language as cells; verify `freezeAt` cell is the first unfrozen cell.
