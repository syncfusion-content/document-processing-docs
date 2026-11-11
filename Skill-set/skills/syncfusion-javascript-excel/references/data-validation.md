# Data validation

Cell input rules stored as Excel data validation records.

## Table of contents

- [Add validation](#add-validation)
- [Types](#types)
- [Operators and formulas](#operators-and-formulas)
- [List validation](#list-validation)
- [Error and input UI](#error-and-input-ui)
- [Dropdown polarity](#dropdown-polarity)
- [Gotchas](#gotchas)

## Add validation

```ts
import { Workbook } from '@syncfusion/ej2-xlsx';

const wb = Workbook.create();
const sheet = wb.sheet(0);

const dv = sheet.dataValidations.add('B2:B100');
```

`dataValidations.add(address)` returns a `DataValidation` handle. Address is an A1 cell or range.

## Types

`DataValidationType` is a **string-literal union** (not a runtime enum). Assign camelCase strings:

| Type | Use |
|------|-----|
| `'whole'` | Integers |
| `'decimal'` | Decimals |
| `'list'` | Dropdown list |
| `'date'` | Dates |
| `'time'` | Times |
| `'textLength'` | Text length constraints |
| `'custom'` | Custom formula |
| `'none'` | No constraint type |

```ts
import type {
  DataValidationType,
  DataValidationOperator,
} from '@syncfusion/ej2-xlsx';

const dv = sheet.dataValidations.add('C2');
const type: DataValidationType = 'whole';
const operator: DataValidationOperator = 'between';
dv.type = type;
dv.operator = operator;
dv.firstFormula = '1';
dv.secondFormula = '10';
```

## Operators and formulas

`DataValidationOperator` values: `'between'`, `'notBetween'`, `'equal'`, `'notEqual'`, `'greaterThan'`, `'lessThan'`, `'greaterThanOrEqual'`, `'lessThanOrEqual'`.

```ts
dv.operator = 'greaterThan';
dv.firstFormula = '0';
```

- `firstFormula` / `secondFormula` are **opaque text** (not evaluated by the library).
- For `'custom'`, the formula expresses the validation rule for Excel.
- `listValues` encodes into / decodes from `firstFormula` for list rules.

## List validation

```ts
const list = sheet.dataValidations.add('D2:D50');
list.type = 'list';
list.listValues = ['Red', 'Green', 'Blue'];
// Optionally keep showListDropdown true (author-friendly polarity)
list.showListDropdown = true;
```

## Error and input UI

```ts
import type { DataValidationErrorStyle } from '@syncfusion/ej2-xlsx';

dv.showErrorMessage = true;
const style: DataValidationErrorStyle = 'stop'; // 'stop' | 'warning' | 'information'
dv.errorStyle = style;
dv.errorTitle = 'Invalid';
dv.error = 'Enter a whole number from 1 to 10.';

dv.showInputMessage = true;
dv.promptTitle = 'Amount';
dv.prompt = 'Type 1–10';
```

## Dropdown polarity

Excel wire uses `showDropDown` with inverted meaning historically. The public API exposes **`showListDropdown`** with author-friendly polarity:

- Use **`showListDropdown`** so `true` means the in-cell dropdown should appear.
- Do not set raw inverted wire flags in application code.

## Gotchas

- Validation does not block `cell.value = …` in this library — Excel enforces on edit.
- Formulas inside DV are not evaluated here.
- Overlapping validations follow Excel’s model; keep ranges intentional.
- Never invent validation XML attributes outside the public handle.
