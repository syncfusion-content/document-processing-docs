# Syncfusion JavaScript Excel Library Skill

Create, open, edit, and save Excel workbooks (`.xlsx`) using Syncfusion **`@syncfusion/ej2-xlsx`** in **Node.js and browsers**. Operates purely as a **Coding Assistant** — generating production-ready TypeScript/JavaScript directly for the user's project.

This is a **programmatic file library**, not EJ2 Spreadsheet or Grid UI.

See **[SKILL.md](SKILL.md)** for the full intent-routing guide and rules.

---

## Role: Coding Assistant

This skill generates production-ready TypeScript or JavaScript for the user's project files (for example `src/exportWorkbook.ts`, `scripts/build-report.mjs`). It does not run temporary scripts or mutate the user's workspace on its own.

### Workflow

#### Step 1 — Detect the Host and Install the Package

- Inspect the workspace (`package.json`, `tsconfig.json`, bundler config, browser vs Node entry points).
- Ensure the project imports from the package root only:

```bash
npm install @syncfusion/ej2-xlsx
```

- Remind the user to install `@syncfusion/ej2-xlsx` if the dependency is missing.
- Prefer **TypeScript** when the host project is TS; use plain ESM/CJS JavaScript when it is not.

#### Step 2 — Generate Code from Reference Files Only

**Do NOT invent, guess, or suggest any API, method, property, class, type, or import path not explicitly present in the reference files or the public package surface.**

- Read the relevant `references/*.md` file(s) for the requested feature.
- Build code **strictly** from the APIs and snippets found in those files and **[SKILL.md](SKILL.md)**.
- Always import from `@syncfusion/ej2-xlsx` — never use internal paths (like `@syncfusion/ej2-xlsx/internal/charts`) in application code.
- Match host I/O:
  - **Browser** → `await wb.save()` / `Workbook.open(Uint8Array | ArrayBuffer)` (bytes only)
  - **Node.js** → path overloads `await wb.save('./out.xlsx')` / `await Workbook.open('./in.xlsx')` or byte arrays.


---

## Quick Start

### Prerequisites

- **Node.js 18+** (LTS recommended) for Node path I/O and Mode 2
- **npm / yarn / pnpm** to install the package
- **TypeScript** optional but preferred when the host project is TS
- Browser hosts need only the package + bundler/runtime that can load ESM

### Install

```bash
npm install @syncfusion/ej2-xlsx
```

### Minimal create → write → save

```ts
import { Workbook } from '@syncfusion/ej2-xlsx';

async function main(): Promise<void> {
  const wb = Workbook.create();
  const sheet = wb.sheet(0); // 0-based sheet index

  sheet.cell('A1').value = 42;
  sheet.cell(1, 2).text = 'hello'; // 1-based row/col → B1
  sheet.cell('A3').formula = 'SUM(A1:A1)'; // text only; not evaluated
  sheet.cell('A4').numberFormat = '#,##0.00';
  sheet.cell('A4').value = 1234.5;

  // Bytes (Node and browser)
  const bytes = await wb.save();

  // Node only — path overload
  // await wb.save('./output/out.xlsx');
}

void main();
```

Full routing, core rules, and feature map: **[SKILL.md](SKILL.md)** and **[references/getting-started.md](references/getting-started.md)**.

---

## Rules

- **Public API only** — `import { … } from '@syncfusion/ej2-xlsx'`; no internal chart paths in app samples
- **Formulas are text** — never evaluate; never resolve external workbook links
- **No implicit formula promotion** — `cell.value = '=1+1'` stays a string; use `cell.formula`
- **Sparse grid** — do not allocate cells from dimension/spans alone
- **Append-only shared tables** — shared strings, styles, number formats, `dxf` (never renumber)
- **Preserve unknown OOXML** on load/save when the library does not model a part
- **Indexing** — `sheet(i)` is **0-based**; `cell(row, col)` is **1-based**; A1 strings always work
- Prefer **`cell`**, not deprecated `getCell`
- Workbook/sheet **protect** is OOXML protection, **not** AES password-to-open encryption
- Never use Python libraries (e.g. openpyxl, pandas) or other Excel stacks for these tasks when this skill applies — use `@syncfusion/ej2-xlsx`
- Do **not** invent OOXML elements, attributes, namespaces, relationship types, or content types

---

## Reference map

| Topic | File |
|-------|------|
| Install, create/open/save, Node vs browser | [references/getting-started.md](references/getting-started.md) |
| Sheets, names, properties, protect | [references/workbook-and-sheets.md](references/workbook-and-sheets.md) |
| Cells, values, addresses | [references/cells-values-and-addresses.md](references/cells-values-and-addresses.md) |
| Formulas, merges, hyperlinks | [references/formulas-and-merged-hyperlinks.md](references/formulas-and-merged-hyperlinks.md) |
| Styles and number formats | [references/styles-number-formats.md](references/styles-number-formats.md) |
| Rich text / shared strings | [references/rich-text-and-shared-strings.md](references/rich-text-and-shared-strings.md) |
| Tables, filters, sort metadata | [references/tables-filters-sort.md](references/tables-filters-sort.md) |
| Charts | [references/charts.md](references/charts.md) |
| Images, shapes, text boxes | [references/images-shapes-textboxes.md](references/images-shapes-textboxes.md) |
| Data validation | [references/data-validation.md](references/data-validation.md) |
| Conditional formatting | [references/conditional-formatting.md](references/conditional-formatting.md) |
| Comments, form controls, sheet protection | [references/comments-controls-protection.md](references/comments-controls-protection.md) |
| API conventions | [references/api-conventions.md](references/api-conventions.md) |
| Limits and security | [references/capability-boundaries.md](references/capability-boundaries.md) |

---

## Integration with GitHub Copilot / Code Studio

This skill is designed for agent hosts (GitHub Copilot, Code Studio, and similar). In the **ej2-xlsx** harness it lives at:

`.agent/skills/syncfusion-javascript-excel/`

For other repos, place the skill folder where your agent loads skills (for example `.github/skills/` or the product’s skills root).

When working with Excel files in JS/TS, the agent can:

1. Generate idiomatic `@syncfusion/ej2-xlsx` code directly into the user's project files
2. Provide code snippets based strictly on the reference documents
3. Explain and apply correct OOXML patterns without inventing APIs

### Example Prompts

#### Basic Code Generation

- "Show me `@syncfusion/ej2-xlsx` code to create a workbook with a title, header row, and a few data rows."
- "Generate a TypeScript snippet to add an Excel Table and style the header row."
- "Write Node code using `@syncfusion/ej2-xlsx` to open a file, update `B2`, and save."
- "How do I add data validation dropdowns and conditional formatting with ej2-xlsx?"

#### Complex / Multi-Step Implementations

- "Write TypeScript code to create a sales data sheet: headers for Region, Product, Q1 Sales, Q2 Sales, and Total, 5 sample rows, bold headers with a blue fill, and a column chart plotting Q1 vs Q2."

- "Provide code to build an Employee sheet with Department dropdown validation (Engineering, Marketing, HR, Finance, Sales), conditional formatting highlighting salaries above 80000, and a header comment."

- "Show me how to generate a formatted table with a totals row, set custom column widths, freeze the top row, and return bytes for a browser download."

- "Write code to open an existing workbook, preserve all unknown parts, update cell `Data!C3`, and protect the sheet while allowing selection of locked cells."


---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Package not found | `npm install @syncfusion/ej2-xlsx` |
| Wrong first sheet | Use `wb.sheet(0)` (0-based), not `sheet(1)` |
| `cell(0, 0)` errors | Row/col are **1-based**; A1 is `cell(1, 1)` or `cell('A1')` |
| Formula stored as text | Set `cell.formula = '…'`; do not assign `value = '=…'` if you need a formula |
| Formula “not calculating” | Expected — library stores formula text and does not evaluate |
| `save(path)` fails in browser | Use `await wb.save()` → `Uint8Array`; path I/O is Node-only |
| Deprecated API | Prefer `cell` over `getCell` |
| Chart import confusion | Use `ChartType` from `@syncfusion/ej2-xlsx`, not `internal/charts` |
| Protect vs encryption | `protect` is OOXML protection flags — not password-to-open AES |
| File locked / EBUSY | Ensure the `.xlsx` is not open in Excel; check path permissions |
| Invented OOXML / APIs | Re-read the matching `references/*.md` file; do not guess |

---

## Resources

- Skill entry: [SKILL.md](SKILL.md)
- Getting started: [references/getting-started.md](references/getting-started.md)
- Capability boundaries: [references/capability-boundaries.md](references/capability-boundaries.md)
- Package: [`@syncfusion/ej2-xlsx`](https://www.npmjs.com/package/@syncfusion/ej2-xlsx)
- Syncfusion File Formats / Excel docs (product family): [Syncfusion help](https://help.syncfusion.com/)

---

## License

Syncfusion libraries require a commercial license for production use. A [free community license](https://www.syncfusion.com/products/communitylicense) is available for qualifying individuals and organizations. Follow your product’s license registration guidance for EJ2 packages when shipping production apps.
