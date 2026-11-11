# Syncfusion SmartDataExtractor Skill Library

See **[SKILL.md](SKILL.md)** for the full intent-routing guide and rules.

---

## One Mode

### Mode 1: Generate C# Code for the User's Project *(default)*

Produces production-ready C# code and adds it directly into the user's project files (e.g., `Program.cs`). No `.csx` scripts are created or run.

**Trigger keywords:** "code", "extract", "convert", "snippet", "how to write", "Program.cs", "show me", "sample", "example code", "generate code for".
---
## Quick Start

### Prerequisites

- **.NET SDK 8+**
  ```bash
  dotnet tool install -g dotnet-script
  ```

### NuGet Packages (Mode 1 — user's project)

```bash
dotnet add package Syncfusion.SmartDataExtractor.Net.Core
```

---

## API Reference

A concise overview of the primary API surface for the Smart Data Extractor.

- **DataExtractor**: Identify text elements, images, headers, footers, barcodes, and tables (including regions, header rows, columns, cell boundaries, and merged cells).
- **Table extraction**: Specialized capability to extract tabular data.
- **Form recognition**: Detects and processes structured form data.
- **Barcode detection**: Identifies and decodes barcodes with confidence scoring.
- **Page-level control**: Extract data from specific pages or defined page ranges.
- **Confidence threshold**: Results are filtered based on a configurable confidence score (0.0–1.0).

Quick C# usage (sync):

```csharp
using var fs = new FileStream("input.pdf", FileMode.Open, FileAccess.Read);
var extractor = new DataExtractor();
// Feature toggles
extractor.EnableTableDetection = true;
extractor.EnableFormDetection = true;
extractor.ConfidenceThreshold = 0.6;
extractor.PageRange = new int[,] { { 1, 2 } };
string json = extractor.ExtractDataAsJson(fs);
File.WriteAllText("output.json", json, Encoding.UTF8);
```

---

## Common Use Cases

This skill is designed to work with GitHub Copilot in VS Code. Place the skill folder in `.github/skills/` of your repository.

Copilot can automatically:

1. Route between Mode 1 (code generation).
2. Generate Syncfusion SmartDataExtractor code using the reference snippets

### Example Prompts

#### Mode 1 — Code Generation
*Use these when you want C# code snippets for your own project.*

- "Generate a C# snippet report.pdf or image, convert the PDF to JSON, and save the result as result.json using SmartDataExtractor."
- "Write Program.cs code using Syncfusion.SmartDataExtractor to extract the input as pdf stream."
- "Show me code to enable the table and form option for extracting the data as Json using SmartDataExtractor."

> **Key distinction:** Prompts with *"extract"*,*"show me"*, *"code"*, *"snippet"*, or *"how to"* → **Mode 1**.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Missing NuGet package | `dotnet add package Syncfusion.SmartDataExtractor.Net.Core` |
| File access error | Check path, permissions, and ensure the file isn't open elsewhere |

---
