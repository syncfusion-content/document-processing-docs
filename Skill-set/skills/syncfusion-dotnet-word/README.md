# Syncfusion .NET Word Library Skill

## Overview

Create, edit, and convert Word (.docx, .doc) files using the Syncfusion Word Library.
This skill supports two operational modes — generating C# code for the user's project or executing tasks directly through a CSX script.

See **[SKILL.md](SKILL.md)** for the full intent-routing guide and rules.

---

## Key Capabilities

- **Create & Edit:** Documents (.docx, .doc, .rtf, .txt, .xml), paragraphs, headings, styles, lists, tables, charts, shapes, images, hyperlinks, bookmarks, watermarks, headers/footers, form fields, content controls, SmartArt, OLE objects, embed fonts while saving Word documents
- **Advanced Features:** Mail merge (DataTable, JSON, XML, custom objects), track changes, comments, mathematical equations (LaTeX), compare/split/merge documents, table of contents
- **Conversion:** Word to PDF (font embedding, custom font registration, PDF/A, accessibility), Word to Image (PNG, JPEG, BMP, TIFF, custom font registration), HTML ↔ DOCX, RTF ↔ DOCX, Text ↔ DOCX, XML ↔ DOCX
- **Security:** Password encryption/decryption, document protection with editable ranges, macro management, and digital signatures


## Getting Started

### How to Integrate Skills

**Step 1: Checkout and copy the required skills**

Clone or download the Document-SDK-Skills repository and copy the **syncfusion-dotnet-word** skill from the `skills/` directory.

**Step 2: Install the skill**

Place the copied skill folders in your workspace following this structure:

```
your-workspace/
├── .github/skills/          # or .claude/skills/ or .codestudio/skills/
│   └── syncfusion-dotnet-word/
│       └── SKILL.md
├── your-project-files...
└── Program.cs
```

**Step 3: Verify and manage your skills**

Type `/skills` in the GitHub Copilot or Code Studio chat to quickly access the Configure Skills menu and manage your installed skills.

**Step 4: Use skills in VS Code**

There are two ways to use skills:

1. **Slash commands** - Type `/` in the GitHub Copilot chat to see available skills. For example:
   ```
   /syncfusion-dotnet-word Create a report with a table of contents
   ```

2. **Automatic loading** - Simply describe your task naturally, and your AI Agent automatically loads the relevant skill:
   ```
   Create a Word document with company letterhead and a data table
   ```

When a skill is loaded, AI Agent gains specialized knowledge of Syncfusion .NET libraries and can help you generate code or execute document operations efficiently.

### Prerequisites

```bash
# .NET SDK 8+
dotnet --version

# dotnet-script (required for Mode 2)
dotnet tool install -g dotnet-script
```

### Syncfusion License

Get a free license: [Syncfusion Community License](https://www.syncfusion.com/products/communitylicense)

### NuGet Packages Used in Mode 2

Install the package for the format you need:

```bash
# Word
dotnet add package Syncfusion.DocIO.Net.Core
dotnet add package Syncfusion.DocIORenderer.Net.Core   # For PDF conversion
```

---

## Example Prompts

#### Mode 1 — Code Generation
*Use these when you want C# code snippets for your own project.*

- "Show me DocIO code to create a Word document with a title, heading, and a paragraph."
- "Generate a C# snippet to add a 3×4 table to a Word document using Syncfusion DocIO."
- "Write Program.cs code using DocIO to perform a mail merge with a DataTable."
- "How do I add a header and footer with page numbers using Syncfusion DocIO?"

#### Mode 2 — Document Generation
*Use these when you want a `.docx` file created right now in the workspace.*

- "Create a Word document about the top 5 programming languages in 2025."
- "Generate a meeting agenda document and save it to `output/agenda.docx`."
- "Open `output/report.docx` and change its page orientation to Landscape."
- "Convert `output/report.docx` to PDF."


---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `dotnet script` not found | `dotnet tool install -g dotnet-script` |
| Missing NuGet package | `dotnet add package Syncfusion.DocIO.Net.Core` |
| File access error | Ensure the file isn't open in another application |

---

## Resources

- [Syncfusion DocIO Documentation](https://help.syncfusion.com/file-formats/docio/overview)
- [API Reference](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.Base~Syncfusion.DocIO.DLS.WordDocument.html)

---

## License

Syncfusion .NET Word library requires a commercial license for production use. A [free community license](https://www.syncfusion.com/products/communitylicense) is available for qualifying organizations.
