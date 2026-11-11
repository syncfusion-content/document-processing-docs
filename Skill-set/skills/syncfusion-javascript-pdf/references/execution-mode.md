# Execution mode (Mode 2)

Run a temporary Node.js script to produce or modify a real `.pdf` file. Use only when the user explicitly asks to create/update a PDF file or to run code. Otherwise stay in Mode 1 (code generation only).

## Table of contents

- [Requirements](#requirements)
- [Procedure](#procedure)
- [Template options and safety checks](#template-options-and-safety-checks)
- [Input PDF](#input-pdf)
- [Errors and diagnostics](#errors-and-diagnostics)
- [Limitations](#limitations)

## Requirements

- Node.js 18+ and `npm`. Browser-only environments cannot run Mode 2; answer with Mode 1 code and say so.
- Network access to install `@syncfusion/ej2-pdf`, `@syncfusion/ej2-base` and `tsx` (local install inside `scripts/`).

## Procedure

1. **Create the temp script**: copy `scripts/template.ts` to `{skill-root}/syncfusion-javascript-pdf/scripts/temp-{unix-timestamp}.ts` (it must stay in `scripts/` so it resolves the local `node_modules`). Never create it in the workspace root.
2. **Fill `buildDocument(input?)`** using only APIs documented in the other reference files.
3. **Install dependencies** if `scripts/node_modules` is missing, inside `scripts/`:
   `npm install --no-save --no-package-lock @syncfusion/ej2-pdf @syncfusion/ej2-base tsx`
4. **Execute** from the directory that should contain the output:
   `{skill-root}/syncfusion-javascript-pdf/scripts/node_modules/.bin/tsx {skill-root}/syncfusion-javascript-pdf/scripts/temp-{timestamp}.ts --output output/report.pdf [--input in.pdf]`
5. **Verify** the script printed `SUCCESS: <path>`.
6. **Clean up**: delete `temp-{timestamp}.ts`. Never delete the output, the user's input.
7. **Report** SUCCESS or ERROR, the output path.

## Template options and safety checks

| Behavior | Detail |
|---|---|
| `--output <file.pdf>` | Required; inside the working directory; `.pdf` extension |
| `--input <file.pdf>` | Optional user PDF; must be a valid PDF; never overwritten |
| `--force` | Allow replacing an existing output; only if the user asked |
| Exit code | Non-zero on any error, message printed as `ERROR: ...` |
| Licensing | `SYNCFUSION_LICENSE_KEY` or `SyncfusionLicense.txt` (workspace root); never printed |
| Logging | Only the output path and input source; no document content |

## Input PDF

- Creating a new document needs no input; omit `--input`.
- Parsing, extraction, redaction, forms, merging, etc. require the user's PDF, passed with `--input`. If the user did not provide one, ask for it. There is no bundled default.
- The input is read-only and never overwritten or deleted.
- Mode 2 is Node-only. For browsers use [browser-and-node-io.md](browser-and-node-io.md) (`document.save('output.pdf')`).

## Errors and diagnostics

| Message | Cause |
|---|---|
| `output already exists` | Re-run with `--force` only if overwrite was requested |
| `path must be inside the working directory` | Output/input path escapes cwd |
| `not a readable PDF file` | Input missing, empty or not a PDF |

## Limitations

- Verified with Node 22 and `tsx`; the template calls `process.exit(0)` after success because the library keeps the event loop alive.
- Browser download/upload flows cannot run here; see browser-and-node-io.md.
- Text extraction and redaction need `@syncfusion/ej2-pdf-data-extract` installed in addition.
