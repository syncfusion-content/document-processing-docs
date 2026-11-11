# Document-SDK-Skills

[Document SDK](https://www.syncfusion.com/document-sdk/) Skills are specialized instruction sets that teach AI assistants how to perform specific tasks. Think of them as expert knowledge modules for Syncfusion Document Processing libraries that AI agents can load on demand. These skills follow the [Agent Skills open standard](https://agentskills.io/) and are designed to work seamlessly across multiple AI agents.

## About This Repository

This repository contains **AI-ready skills** that empower AI agents to efficiently handle Office document processing tasks using Syncfusion Document Processing libraries across .NET, Java, JavaScript, and Flutter. Depending on the selected skill, agents can generate language-specific code for your project or create documents via supported script execution modes.

## Included Product Skills

### .NET
- **PDF** - Create, edit, and convert PDF files with support for forms, OCR, digital signatures, encryption, conformance standards (PDF/A, PDF/X), redaction, and barcodes.
- **Word (DOCX)** - Create, edit, and convert Word documents with advanced mail merge, tracked changes, charts, shapes, encryption, and multi-format export.
- **Excel (XLSX)** - Create, edit, and convert Excel documents with support for formulas, charts, pivot tables, conditional formatting, data validation, and encryption.
- **PowerPoint (PPTX)** - Create, edit, and convert PowerPoint presentations with full support for charts, animations, transitions, encryption, and slide-to-image conversion.
- **Markdown** - Create and open Markdown documents with support for headings, tables, lists, images, hyperlinks, code blocks, and blockquotes.
- **Calculate** - Parse and compute formulas, expressions, and calculations with support for 400+ built-in functions, named ranges, array formulas, custom functions, and Excel-style formula evaluation.
- **Smart Data Extraction** - Extract text, structured fields, form fields, and tables from PDFs and images as JSON or PDF output.
- **PDF to Image Converter** - Convert PDF document pages to images.
- **Document Chunking** - Split Word, PDF, PowerPoint, Excel, and Markdown documents into token-bounded, structure-aware chunks for RAG and vector indexing, with metadata and citations.

### Java
- **Word (DOCX)** - Create and edit Word documents in Java with support for mail merge, track changes, comments, shapes, tables, encryption, and multi-format export (HTML, RTF, Markdown, XML).

### JavaScript
- **PDF** - Create, read and edit PDF files with support for forms, annotations, digital signatures, merge/split, text/image extraction, redaction, and watermarks across TypeScript, JavaScript, Angular, React, Vue, and ASP.NET platforms.
- **PowerPoint (PPTX)** - Create, open, modify, and save PowerPoint presentations with support for slides, text boxes, paragraphs, and text formatting across TypeScript, JavaScript, Angular, React, Vue, and Node.js platforms.
- **Excel (XLSX)** - Create, open, edit, and save Excel workbooks in Node.js and browsers with worksheets, cells, formulas, styles, tables, charts, images, data validation, conditional formatting, and protection.
- **Word (DOCX)** - Create, open, edit, and save Word documents in Node.js and browsers with paragraphs, text formatting, lists, tables, images, hyperlinks, fields, content controls, sections, headers, and footers.

### Flutter
- **PDF** - Create, edit, and convert PDF files with support for forms, digital signatures, encryption and conformance standards (PDF/A-1b, PDF/A-2b and PDF/A-3b).
- **Excel (XLSX)** - Create and manipulate Excel workbooks in Dart with support for worksheets, cell formatting, formulas, charts, data validation, conditional formatting, filtering, and CSV export.

## Getting Started

### How to Integrate Skills

**Step 1: Checkout and copy the required skills**

Clone or download the Document-SDK-Skills repository and copy the product skills you need from the `skills/` directory. Available skill folders include `syncfusion-dotnet-pdf`, `syncfusion-dotnet-word`, `syncfusion-dotnet-excel`, `syncfusion-dotnet-powerpoint`, `syncfusion-dotnet-pdf-to-image`, `syncfusion-dotnet-markdown`, `syncfusion-dotnet-calculate`, `syncfusion-dotnet-smart-data-extraction`, `syncfusion-dotnet-document-chunking`, `syncfusion-javascript-pdf`, `syncfusion-javascript-powerpoint`, `syncfusion-javascript-excel`, `syncfusion-javascript-docx`, `syncfusion-flutter-pdf`, `syncfusion-flutter-excel`, and `syncfusion-java-word`.

**Step 2: Install the skills**

Place the copied skill folders in your workspace following this structure:

```
your-workspace/
├── .github/skills/                          # or .claude/skills/ or .codestudio/skills/
│   ├── syncfusion-dotnet-pdf/
│   │   └── SKILL.md
│   ├── syncfusion-dotnet-word/
│   │   └── SKILL.md
│   ├── syncfusion-dotnet-excel/
│   │   └── SKILL.md
│   ├── syncfusion-dotnet-powerpoint/
│   │   └── SKILL.md
│   ├── syncfusion-dotnet-pdf-to-image/
│   │   └── SKILL.md
│   ├── syncfusion-dotnet-markdown/
│   │   └── SKILL.md
│   ├── syncfusion-dotnet-calculate/
│   │   └── SKILL.md
│   ├── syncfusion-dotnet-smart-data-extraction/
│   │   └── SKILL.md
│   ├── syncfusion-dotnet-document-chunking/
│   │   └── SKILL.md
│   ├── syncfusion-javascript-pdf/
│   │   └── SKILL.md
│   ├── syncfusion-flutter-pdf/
│   │   └── SKILL.md
│   ├── syncfusion-javascript-powerpoint/
│   │   └── SKILL.md
│   ├── syncfusion-javascript-excel/
│   │   └── SKILL.md
│   ├── syncfusion-javascript-docx/
│   │   └── SKILL.md
│   ├── syncfusion-flutter-excel/
│   │   └── SKILL.md
│   └── syncfusion-java-word/
│       └── SKILL.md
├── your-project-files...
└── Program.cs
```

Each skill directory must contain a `SKILL.md` file that defines the skill's behavior.

**Step 3: Verify and manage your skills**

Type `/skills` in the GitHub Copilot or Code Studio chat to quickly access the Configure Skills menu and manage your installed skills.

**Step 4: Use skills**

There are two ways to use skills:

1. **Automatic loading** - Simply describe your task naturally, and your AI Agent automatically loads the relevant skill:
   ```
   Create a Word document with company letterhead and a data table
   Add a digital signature to the PDF at output/report.pdf  
   ```

2. **Slash commands** - Type `/` in the GitHub Copilot chat to mention available skills. For example:
   ```
   /syncfusion-dotnet-word Create a report with a table of contents
   /syncfusion-dotnet-pdf Merge multiple PDFs into one
   ```

When a skill is loaded, AI Agent gains specialized knowledge of Syncfusion Document Processing libraries and can help you generate code or execute supported document operations efficiently.

### Prerequisites

Install the runtime required by the selected skill:

- **.NET skills:** .NET SDK 8+ (`dotnet --version`)
- **.NET execution-mode skills only:** `dotnet-script` (`dotnet tool install -g dotnet-script`)
- **Java skill:** Java SE 8 or later
- **JavaScript skill:** Node.js/npm
- **Flutter skills:** Flutter SDK and Dart tooling

### Syncfusion License

Place your license key in `SyncfusionLicense.txt` at the workspace root, or set the environment variable:

```bash
# Windows
set SYNCFUSION_LICENSE_KEY=your_key_here

# macOS/Linux
export SYNCFUSION_LICENSE_KEY=your_key_here
```

Get a free license: [Syncfusion Community License](https://www.syncfusion.com/products/communitylicense)

### Common .NET NuGet Packages

Install the package for the format you need:

```bash
# Word
dotnet add package Syncfusion.DocIO.Net.Core
dotnet add package Syncfusion.DocIORenderer.Net.Core   # For PDF conversion

# PowerPoint
dotnet add package Syncfusion.Presentation.Net.Core
dotnet add package Syncfusion.PresentationRenderer.Net.Core  # For PDF conversion

# Excel
dotnet add package Syncfusion.XlsIO.Net.Core
dotnet add package Syncfusion.XlsIORenderer.Net.Core   # For PDF conversion

# PDF
dotnet add package Syncfusion.Pdf.Net.Core
dotnet add package Syncfusion.Pdf.Imaging.Net.Core     # For advanced PDF functions

# Markdown
dotnet add package Syncfusion.Markdown

# Calculate
dotnet add package Syncfusion.Calculate.Base

# Smart Data Extraction
dotnet add package Syncfusion.SmartDataExtractor.Net.Core

# Document Chunking
dotnet add package Syncfusion.DocumentChunking.Net.Core
# or, for portable / multi-target .NET
dotnet add package Syncfusion.DocumentChunking.NET
```

### npm Packages (JavaScript PDF)

```bash
# Core PDF library (required)
npm install @syncfusion/ej2-pdf --save

# Data Extract add-on (only for text/image extraction and redaction)
npm install @syncfusion/ej2-pdf-data-extract --save
```

### npm Packages (JavaScript PowerPoint)

```bash
# PowerPoint library
npm install @syncfusion/ej2-pptx --save
```


### npm Packages (JavaScript Word)

```bash
# Word library
npm install @syncfusion/ej2-docx --save
```

### npm Packages (JavaScript Excel)

```bash
# Excel library
npm install @syncfusion/ej2-xlsx --save
```

### Flutter Packages

Add to your `pubspec.yaml`:

```yaml
dependencies:
  syncfusion_flutter_xlsio: ^33.1.44
  syncfusion_officechart: ^33.1.44
```

Use the latest compatible package versions from pub.dev or Syncfusion documentation, then run: `flutter pub get`. Add `syncfusion_officechart` when chart support is needed.

## How it works?

Skills support one or more operating modes depending on product and platform:

### Mode 1 — Generate Code *(default)*
Produces production-ready code for the selected platform, such as C#, Java, Dart, TypeScript, or JavaScript. No scripts are created or run. Ideal when you want to learn or integrate document features into your own application.

**Trigger keywords:** `"code"`, `"snippet"`, `"how to"`, `"show me"`, `"sample"`, `"example"`, `"Program.cs"`, `"main.dart"`

### Mode 2 — Execute via Temporary Script *(supported skills only)*
For skills that explicitly document execution mode, creates a temporary script, runs it, produces the output file, then cleans up — without touching your project. .NET execution-mode skills use `.csx` and `dotnet script`.

**Trigger keywords:** `"create"`, `"generate"`, `"make"`, `"open"`, `"edit"`, `"modify"`, file paths (e.g., `output/report.docx`)

### Supported Modes by Skill

| Skill | Mode 1: Generate code | Mode 2: Execute script | Notes |
|-------|------------------------|------------------------|-------|
| .NET PDF | ✅ | ✅ | CSX execution |
| .NET Word | ✅ | ✅ | CSX execution |
| .NET Excel | ✅ | ✅ | CSX execution |
| .NET PowerPoint | ✅ | ✅ | CSX execution |
| .NET Markdown | ✅ | ✅ | CSX execution |
| .NET Calculate | ✅ | ❌ | Code generation only |
| .NET Smart Data Extraction | ✅ | ❌ | Code generation only |
| .NET PDF to Image Converter | ✅ | ❌ | Code generation only |
| .NET Document Chunking | ✅ | ❌ | Code generation only |
| Java Word | ✅ | ❌ | Code generation only |
| JavaScript PDF | ✅ | ❌ | Code generation only |
| JavaScript Word | ✅ | ❌ | Code generation only |
| JavaScript PowerPoint | ✅ | ❌ | Code generation only |
| JavaScript Excel | ✅ | ❌ | Code generation only |
| Flutter PDF | ✅ | ❌ | Code generation only |
| Flutter Excel | ✅ | ❌ | Code generation only |

## Example Prompts

### Word

```
# Mode 1 — Code generation
Show me DocIO code to create a Word document with a title and a paragraph.
How do I add a header and footer with page numbers using Syncfusion DocIO?

# Mode 2 — Document generation
Create a Word document about the top 5 programming languages in 2025.
Open output/report.docx and change its page orientation to Landscape.
Convert output/report.docx to PDF.
```

### PowerPoint

```
# Mode 1 — Code generation
Generate a C# snippet to add a table to a PowerPoint slide using Syncfusion Presentation.

# Mode 2 — Presentation generation
Create a 5-slide meeting agenda presentation and save it to output/agenda.pptx.
Convert output/deck.pptx to PDF.
```

### Excel

```
# Mode 1 — Code generation
Show me XlsIO code to create a workbook with a header row and data rows.
Write Program.cs code using XlsIO to read a CSV and populate a worksheet.

# Mode 2 — Workbook generation
Create a sales summary workbook and save it to output/sales.xlsx.
Open output/report.xlsx and add a pivot table on sheet Data.
```

### PDF

```
# Mode 1 — Code generation
Show me code to merge three PDF files into one using Syncfusion PDF Library.
How do I add a digital signature to a PDF?

# Mode 2 — PDF generation
Create a PDF report with a title page and inventory table, save to output/report.pdf.
Merge output/part1.pdf and output/part2.pdf into output/combined.pdf.
```

### Markdown

```
# Mode 1 — Code generation
Show me how to create a Markdown document with a table using Syncfusion.
How do I add a list and code block to a Markdown file using Syncfusion?

# Mode 2 — Document generation
Create a Markdown report with headings and a table using Syncfusion at output/report.md.
Parse output/notes.md and add a new section with a bulleted list using Syncfusion.
```

### Calculate

```
# Mode 1 — Code generation
Create a calculation engine and evaluate arithmetic and Excel-style formulas.
Show me how to parse and compute formulas using CalcQuickBase.
Generate code to evaluate built-in formulas such as SUM, IF, and ROUND.
Demonstrate how to define and use named ranges in calculations.
How do I create custom functions with optional arguments in Calculate?
```

### Java Word

```
# Mode 1 — Code generation (Java only)
Show me Java code to create a Word document with a header and footer using Syncfusion DocIO.
How do I perform mail merge with a data source in Java using Syncfusion?
Generate Java code to convert a Word document to HTML.
```

### Smart Data Extraction

```
# Mode 1 — Code generation
Show me code to extract all fields and tables from a PDF as JSON.
Generate a C# snippet to enable OCR fallback during data extraction.
```

### PDF To Image Converter

```
# Mode 1 — Code generation
Show me the C# code to convert pdf to image.
```

### Document Chunking

```
# Mode 1 — Code generation
Show me how to chunk a PDF by page for RAG using Syncfusion Document Chunking.
Generate code to chunk uploaded streams with sourceName.
How do I set MaxTokens and OverlapTokens for embeddings?
```

### Flutter PDF

```
# Mode 1 — Code generation
Show me code to create PDF files.
Can you share the code snippet how to add rectangle annotation in flutter pdf.
Create flutter sample application to create the pdf document and add bookmarks and save the document to file.
```

### JavaScript PDF

```
# Mode 1 — Code generation
Show me TypeScript code to create a PDF document with text and images using Syncfusion JavaScript PDF Library.
How do I add form fields and digital signatures to a PDF using @syncfusion/ej2-pdf?
Generate a React example to merge two PDF files using Syncfusion JavaScript PDF library.
Show me how to extract text from a PDF using @syncfusion/ej2-pdf-data-extract.
```

### JavaScript Excel

```
# Mode 1 — Code generation
Show me @syncfusion/ej2-xlsx code to create a workbook with a title, header row, and data rows.
Generate a TypeScript snippet to add an Excel table and style the header row.
Write Node code using @syncfusion/ej2-xlsx to open a file, update B2, and save.
How do I add data validation dropdowns and conditional formatting with ej2-xlsx?
```
### JavaScript Word

```
# Mode 1 — Code generation
How do I create an empty Word document using @syncfusion/ej2-docx?
Show me TypeScript code to create a Word document and add a paragraph on the section body.
How do I create a Word document with a table using @syncfusion/ej2-docx?
How do I add a bulleted list, a header, and a footer with page numbers using ej2-docx?
Show me how to open a .docx from bytes, add a paragraph, and save it in Node.js.
```
 
### JavaScript PowerPoint

```
# Mode 1 — Code generation
Show me TypeScript code to create a PowerPoint presentation with a blank slide using Syncfusion JavaScript PowerPoint Library.
How do I open an existing .pptx file and add a new slide using @syncfusion/ej2-pptx?
Generate a React example to create and download a PowerPoint presentation using Syncfusion.
How do I add a text box with bold, centered text to a slide using @syncfusion/ej2-pptx?
Show me how to open a presentation from a Uint8Array, modify it, and save it back using ej2-pptx.
```

### Flutter Excel

```
# Mode 1 — Code generation
Show me Dart code to create an Excel workbook with multiple sheets using Syncfusion Flutter XlsIO.
How do I apply cell formatting and formulas in Flutter XlsIO?
Generate a Flutter example to create a bar chart in an Excel file using Syncfusion XlsIO.
How do I export data to CSV format using Syncfusion Flutter XlsIO?
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `dotnet script` not found | `dotnet tool install -g dotnet-script` |
| License Watermark | Add key to `SyncfusionLicense.txt` or use env var `SYNCFUSION_LICENSE_KEY` |
| Missing NuGet package | Run the appropriate `dotnet add package` command above |
| File access error | Ensure the file isn't open in another application |

## Maintaining Skills

- Follow the [Skill Authoring Guide](docs/skill-authoring-guide.md) when adding or updating skills.
- Run `python scripts/validate_skills.py` before submitting changes.
- Keep each skill's `SKILL.md`, `README.md`, `references/`, and optional `scripts/` folder consistent with the modes documented for that skill.
- Ensure all relative links and referenced files exist.

## Resources

### .NET
- [Syncfusion DocIO Documentation](https://help.syncfusion.com/document-processing/word/word-library/net/overview)
- [Syncfusion Presentation Documentation](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/overview)
- [Syncfusion XlsIO Documentation](https://help.syncfusion.com/document-processing/excel/excel-library/net/overview)
- [Syncfusion PDF Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/overview)
- [Syncfusion PdfToImageConverter Documentation](https://help.syncfusion.com/document-processing/pdf/conversions/pdf-to-image/net/convert-pdf-to-image)
- [Syncfusion Calculate Documentation](https://help.syncfusion.com/windowsforms/calculation-engine/overview)
- [Syncfusion Smart Data Extractor Documentation](https://help.syncfusion.com/document-processing/data-extraction/overview)
- [Syncfusion Document Chunking Documentation](https://help.syncfusion.com/document-processing/document-chunking-library/overview)

### Java
- [Syncfusion DocIO for Java Documentation](https://help.syncfusion.com/document-processing/word/word-library/java/overview)

### JavaScript
- [Syncfusion JavaScript PDF Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [Syncfusion JavaScript Word Library (`@syncfusion/ej2-docx`)](https://help.syncfusion.com/document-processing/word/word-library/javascript/overview)
- [Syncfusion JavaScript PowerPoint Documentation](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/javascript/overview)
- [Syncfusion JavaScript Excel Documentation](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview)

### Flutter
- [Syncfusion Flutter PDF Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/flutter/overview)
- [Syncfusion Flutter XlsIO Documentation](https://help.syncfusion.com/document-processing/excel/excel-library/flutter/overview)



## License

Syncfusion Document SDK libraries require a [commercial license](https://www.syncfusion.com/document-sdk) for production use. A [free Community License](https://www.syncfusion.com/products/communitylicense) is also available for individual developers and small businesses.
