---
name: syncfusion-dotnet-calculate
description: Implements the Syncfusion dotnet Calculate Library for parsing and evaluating formulas using CalcEngine, ICalcData, CalcQuickBase, and ExcelLikeComputations. Supports formula computation, custom functions, cross-sheet references, and XlsIO formula evaluation. Trigger when implementing formula calculations, expression parsing, workbook formula evaluation, or custom function registration.
metadata:
  author: "Syncfusion Inc"
  version: "1.0.0"
---

# Syncfusion dotnet Calculate

## Overview

Parses and evaluates formulas using the Syncfusion dotnet Calculate. It generates C# code to enable interactive formula calculation functionality, including expression parsing, dependency resolution, and runtime evaluation of calculated values.

## Quick Start Examples

### Example 1
**User:** "Show me how to Parse and Compute the formulas using the CalcEngine"

**Result:** C# code generated to parse and compute the formula

### Example 2
**User:** "Add custom formula to the calculate control to compare two strings"

**Result:** C# code generated to create a custom function 

---

## Generate C# Code for the User's Project *(default)*

**Trigger keywords:** "code", "snippet", "how to write", "Program.cs", "show me", "sample", "example code", "generate code for", "NuGet", "add to project", "integrate", "implementation", "usage example", "API example", "compute formula", "evaluate expression", "calculate result", "parse formula", "register variable", "cross-sheet formula", "use CalcQuickBase", "use CalcEngine", "use ICalcData", "compute with cell references", "auto calc", "refresh calculations", "reset keys", "format result", "region settings", "custom function", "user-defined formula", "register function", "LibraryFunctions", "ExcelLikeComputations", "iterative calculation", "suspend calculations", "supported formulas", "list formulas", "ParseAndCompute", "parseAndComputeFormula".

### STEP 1 — Analyze User Request
  1. Read the user’s request and extract the feature keywords.
  2. If relevant reference/*.md files exist, use them as the only source of truth for generating code.
  3. If no matching reference file exists, generate code using the samples in references/getting-started.md.

### STEP 2 — Consent & Destination Gate (MUST ASK BEFORE ANY FILE ACTIONS)
  Before generating or writing anything, ask the user:

  ```
  I'm ready to generate your Syncfusion Calculate sample.

  Where should I place it?
  1) Create a new Form file in the skill's "output" folder (recommended for quick tryout)
  2) Add or modify an existing file in your project (please provide the full file path; choose append or replace)
  3) Say "Just show me the code" to get the snippet here without modifying any files.
  ```
  ### Rules
  - Do NOT proceed until the user selects an option or says "Just show me the code."
  - If the user refuses file modifications:
    - Only show the C# code in chat
    - No file creation or changes
  - **For Option 2 only:** Before generating code, check if the project has the prerequisites from `references/getting-started.md` (Prerequisites and Setup Requirements section). If missing, ask user consent and add them.

### STEP 3 — Generate Code (Strict Reference-Only Rules)
  - ALWAYS use the sample code structure from the "Minimal code" section in getting-started.md as the base template for Calculate creation.
  - Use APIs exactly as shown in references/*.md (e.g., getting-started.md, Xlsio.md).
  - Never invent APIs or guess behavior.
  - If the feature is not documented in any reference file, inform the user that it is unavailable.

### STEP 4 — Apply Changes (Only After Consent)

  ### Option A — Create New File in Skill’s Folder
  - Create a folder named `output/` at the skill root (if it does not already exist).
  - Default filename: `CalculateSample.cs`
  - If the file already exists, ask:
    "A file named 'CalculateSample.cs' already exists. Overwrite, append, or use a different name?"
  - Wait for the user’s decision before writing anything.
  - Write the generated C# content.

    ### Option B — Modify a File in the User’s Project
  1. Ask:
    "Which file should I modify? Provide the COMPLETE file path (e.g., D:\Project\program.cs)"
  2. Wait for explicit confirmation.
  3. If the user only replies with “2” (option number) and no path → ask again.
  4. Never guess or infer file paths.
  5. Once confirmed, apply the requested change (overwrite or append).


  ### Option C — Show the Code Only
  - Display the generated C# code in chat.
  - Do NOT create or modify any files.
---

## Code References

All templates and feature snippets live in references/*.md. Each file is a focused snippet the agent combines when generating samples.

Flow: Always start with references/getting-started.md (Prerequisites and Setup Requirements section), then merge matched feature snippets. If no feature keywords match, return only the basic sample.

| File | Contents |
|---|---|
| **getting-started.md** | Prerequisites, NuGet package setup, Program.cs configuration, minimal code examples for CalcQuickBase and ICalcData, cross-sheet references, culture settings, quick reference table |
| **calcquickbase.md** | ParseAndCompute method, register variables with square bracket notation, compute expressions and built-in formulas, AutoCalc for automatic recalculation, RefreshAllCalculations, ResetKeys method, key properties and methods, indexer-based access |
| **icalcdata.md** | ICalcData interface implementation, SetValueRowCol/GetValueRowCol methods, WireParentObject method, ValueChanged event, complete implementation example, integration with CalcEngine, cross-sheet references, data grid integration |
| **calcengine.md** | ParseFormula method, ComputeFormula method, ParseAndComputeFormula method, cross-sheet references with RegisterGridAsSheet and CreateSheetFamilyID, region/culture settings (ParseDecimalSeparator, ParseArgumentSeparator), error strings, supported built-in formulas by category |
| **customfunction.md** | LibraryFunction delegate, custom function creation, registration with CalcEngine, examples (CustomMin, CustomMax, ApplyDiscount, CalculateGrade, CompoundInterest), RemoveFunction method, managing library functions, error handling, best practices |
| **xlsio.md** | XlsIO integration, ExcelEngine initialization, enable/disable sheet calculations (EnableSheetCalculations/DisableSheetCalculations), set and compute values at runtime, suspend calculations during bulk updates (CalculatingSuspended), CalculatedValue property, table formulas, complete workflows, error handling |
| **overview.md** | 400+ predefined functions across categories, supported environments and platforms, non-UI component architecture, formula types supported, function categories reference, typical use cases, integration with XlsIO |
| **parse-compute.md** | ParseFormula method and RPN conversion, ComputeFormula method for stack-based evaluation, ParseAndComputeFormula combined approach, operator precedence and parsing order, error handling and error strings, formatting computed results (decimal, percentage, currency), performance optimization |
| **operators.md** | Formula operators and their precedence, supported operators in calculations |
| **namedranges.md** | Named ranges support for simplifying complex formulas |
| **performance.md** | Performance optimization techniques and best practices |

---

## Rules

1. **Use Only Reference Snippets**
   - Generate code **exclusively from** the Markdown files under `references/`
   - **Do not invent/guess/include** any properties, events, API methods, component names, or parameters not present in `references/*.md`

2. **NO FILE MODIFICATIONS WITHOUT PERMISSION**
   - Never create or modify files/folders in user workspace without explicit user selection and confirmation.

3. **Unsupported Feature Handling**
   - If the user requests a feature with no corresponding snippet in `references/*.md`, respond with:
     `That feature is not currently supported by the Syncfusion Calculate Library.`
   - Suggest the closest supported features **only if** they have snippets
   - **Explicitly list** unsupported items and **do not synthesize code** for them

4. **Validation Before Write**
   - Re-validate before writing that **all code blocks** originate from `references/*.md` files
   - If validation fails, stop and inform the user