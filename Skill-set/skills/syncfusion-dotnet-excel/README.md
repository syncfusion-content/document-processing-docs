# Syncfusion .NET Excel Library Skill

Create, edit, and convert Excel workbooks (.xlsx/.xls) using Syncfusion XlsIO. Supports two modes — execute a task via CSX script, or generate C# code for the user's project.

See **[SKILL.md](SKILL.md)** for the full intent-routing guide and rules.

---

## Two Modes — Choose Based on User Intent

Before choosing a mode, infer what the user wants to accomplish:

### Mode 1 — Coding Assistant

Use this mode when the user wants to view, write, review, refactor, or modify C# code related to Excel processing.

### Mode 2 — Execution Mode

Use this mode only when the user explicitly requests execution, file generation, or a fully produced output (such as a completed XLSX file).

### Mode 1: Generate C# Code for the User's Project *(default)*

Produces production-ready C# code and adds it directly into the user's project files (e.g., `Program.cs`). No `.csx` scripts are created or run.
 
**Trigger keywords:** "code", "snippet", "how to write", "Program.cs", "show me", "sample", "example code", "generate code for", "NuGet", "add to project", "integrate", "implementation", "usage example", "API example", "learn", "teach", "how do I", "I want to", "I need to", "help me implement", "library", "package", "ASP.NET", "Blazor", "WPF", "WinForms", "MAUI", "console app", "sort", "sorting", "sorted", "chart to image", "export chart", "chart as image", "hyperlink", "link", "links", "find replace", "replace", "filter", "filtering", "pivot", "template", "marker", "formula", "function".
 
**Workflow:**
 
#### Step 1 — Detect the Application Type and Suggest the Correct NuGet Package(s)

- Inspect the workspace project files (`.csproj`, `web.config`, `App.config`, `Startup.cs`, `Program.cs`, etc.) and use the detection signals table in `references/nuget-packages.md` to identify the application type.

- Look up the correct package(s) from `references/nuget-packages.md` based on the detected app type and tell the user to install them **before** generating any code.
 
 
#### Step 2 — Generate Code from Reference Files Only

**Do NOT invent, guess, or suggest any API, method, property, class, or namespace not explicitly present in the reference files.**

- Read the relevant `references/*.md` file(s) for the requested feature
- Build C# code **strictly** from the APIs and snippets found in those files
- Select the correct snippet variant based on the app type detected in Step 1:
  - **Windows-specific apps** (WinForms, WPF, .NET Framework Console, ASP.NET MVC4/5, UWP) → use Windows-specific snippets
  - **Cross-platform apps** (ASP.NET Core, .NET Core/.NET 5+ Console, Blazor, MAUI, Xamarin) → use cross-platform / `.Net.Core` snippets
 - Do **not** create or run any `.csx` script

 ---

### Mode 2: Execute via CSX Script *(does not touch project files)*

**Trigger keywords:** "create a workbook", "create an Excel file", "generate a spreadsheet", "make a spreadsheet", "generate a file", "open", "edit", "modify", "change" an `.xlsx` file, "without modifying my project", "run a csx script", "just create it", "build me", "export to excel", "save as", "output", "result", "export", "convert", "transform", "file path", or when the user provides a file path (e.g., `output/report.xlsx`, `~/Documents/sales.xlsx`, `/tmp/data.xlsx`).

**Workflow:**

#### Step 1 — Create Temp CSX Script

- Start with `references/template.csx` as the base
- Create at: `{skill-root}/syncfusion-dotnet-excel/scripts/temp-{timestamp}.csx` (e.g., `skill-root` = `.codestudio/skills`)
- Use Unix timestamp for unique filename; never create in workspace root

#### Step 2 — Build Script from Reference Files

- Do NOT invent APIs/methods not in reference files
- Read relevant `references/*.md` file(s) and extract code snippets
- Replace all placeholders: file paths, sheet names, cell values, data, field names, etc.

#### Step 3 — Execute Script

- Run: `dotnet script {skill-root}/syncfusion-dotnet-excel/scripts/temp-{timestamp}.csx`
- Verify successful execution and capture any errors

#### Step 4 — Clean Up and Report
- Delete the temp `.csx` file after execution
- Report SUCCESS/ERROR with output file path(s) and any error messages with fixes

---

## Quick Start

### Prerequisites

- **.NET SDK 8+**
- **dotnet-script** (required for Mode 2):
  ```bash
  dotnet tool install -g dotnet-script
  ```
- **Syncfusion License** — place your key in `SyncfusionLicense.txt` at the workspace root, or set the `SYNCFUSION_LICENSE_KEY` environment variable.
  Free license: [Syncfusion Community License](https://www.syncfusion.com/products/communitylicense)

### NuGet Packages (Mode 1 — user's project)

```bash
dotnet add package Syncfusion.XlsIO.Net.Core
dotnet add package Syncfusion.XlsIORenderer.Net.Core  # For PDF conversion
```

---

## Rules

- Output files go in the `./output/` directory
- Temp `.csx` scripts must be created inside `scripts/` — never in the workspace root or the user's own folders
- Use the license key from `SyncfusionLicense.txt` at the workspace root or env var `SYNCFUSION_LICENSE_KEY`
- Never use Python libraries (e.g., openpyxl, pandas) for these tasks — use Syncfusion XlsIO
- Never leave temp `.csx` files after execution

---

## Integration with GitHub Copilot

This skill is designed to work with GitHub Copilot in VS Code. Place the skill folder in `.github/skills/` of your repository.

When working with Excel, Copilot can automatically:

1. Route between Mode 1 (code generation) and Mode 2 (CSX execution)
2. Generate Syncfusion XlsIO code using the reference snippets
3. Execute CSX scripts to produce `.xlsx` files on demand

### Example Prompts

#### Mode 1 — Code Generation
*Use these when you want C# code snippets for your own project.*

- "Show me XlsIO code to create a workbook with a title, header row, and a few data rows."
- "Generate a C# snippet to add a 3×4 table and style the header row using XlsIO."
- "Write Program.cs code using XlsIO to read a CSV and populate a worksheet."

#### Mode 2 — Document Generation
*Use these when you want a `.xlsx` file created right now in the workspace.*

- "Create a workbook summarizing sales data and save it to `output/sales.xlsx`."
- "Open `output/report.xlsx` and add a pivot table on sheet 'Data'."
- "Fill template markers in `templates/invoice.xlsx` using the provided JSON and save to `output/invoice.xlsx`."

#### Complex / Multi-Step Prompts
*These combine multiple operations — template markers, data binding, formatting, charts, and PDF conversion — in a single request.*

- "Create an Excel workbook with a sales data sheet. Add headers for Region, Product, Q1 Sales, Q2 Sales, and Total. Populate it with 5 rows of data, apply bold header formatting with a blue background, add a column chart for Q1 vs Q2, and save both the `.xlsx` and PDF to `output/`."

- "Open `templates/invoice-template.xlsx`, fill the template markers with the following invoice data, apply currency formatting to the amount columns, set the print area to the invoice range, and export as PDF to `output/invoice.xlsx` and `output/invoice.pdf`."

- "Create a workbook with an Employee sheet. Add data validation (dropdown) for the Department column with values Engineering, Marketing, HR, Finance, and Sales. Apply conditional formatting to highlight salary values above 80000 in green. Add a comment to the header row explaining the sheet purpose. Save to `output/employees.xlsx`."

- "Generate an Excel workbook with a pivot table summarizing sales by Region and Product from the provided dataset. Add a pie chart based on the pivot data, protect the sheet with a password, and save to `output/sales-summary.xlsx`."

- "Create an Excel workbook, import data from `data/products.csv` into Sheet1, convert the range to a formatted table (ListObject), apply autofit to all columns, add a totals row, and export the sheet to JSON and save to `output/products.xlsx`."

> **Key distinction:** Prompts with *"show me"*, *"code"*, *"snippet"*, or *"how to"* → **Mode 1**. Prompts with *"create"*, *"generate"*, *"open"*, *"modify"*, *"export"*, or a file path → **Mode 2**.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Missing NuGet package | `dotnet add package Syncfusion.XlsIO.Net.Core` |
| License error | Add key to `SyncfusionLicense.txt` or register via `SyncfusionLicenseProvider.RegisterLicense()` |
| File access error | Check path, permissions, and ensure the file isn't open elsewhere |
| `dotnet script` not found | `dotnet tool install -g dotnet-script` |

---

## Resources

- [Syncfusion XlsIO Documentation](https://help.syncfusion.com/file-formats/xlsio/overview)
- [API Reference - XlsIO](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.Base~Syncfusion.XlsIO.IWorkbook.html)

---

## License

Syncfusion XlsIO requires a commercial license for production use. A [free community license](https://www.syncfusion.com/products/communitylicense) is available for qualifying organizations.