# Syncfusion Java Word Library Skill

## Overview

Create, edit, and convert Word (.docx, .rtf) files using the Syncfusion Word Library.
This skill supports generating java code for the user's project.

See **[SKILL.md](SKILL.md)** for the full intent-routing guide and rules.

---

## Key Capabilities

- **Create & Edit:** Documents (.docx, .html, .rtf, .txt, .xml), paragraphs, headings, styles, lists, tables,  shapes, images, hyperlinks, bookmarks, watermarks, headers/footers, form fields, content controls
- **Advanced Features:** Mail merge (DataTable, JSON, XML, custom objects), track changes, comments, mathematical equations (LaTeX), compare/split/merge documents
- **Conversion:** HTML ↔ DOCX, RTF ↔ DOCX, Text ↔ DOCX, XML ↔ DOCX
- **Security:** Password encryption/decryption, document protection with editable ranges, macro management


## Getting Started

### How to Integrate Skills

**Step 1: Checkout and copy the required skills**

Clone or download the Document-SDK-Skills repository and copy the **syncfusion-java-word** skill from the `skills/` directory.

**Step 2: Install the skill**

Place the copied skill folders in your workspace following this structure:

```
your-workspace/
├── .github/skills/          # or .claude/skills/ or .codestudio/skills/
│   └── syncfusion-java-word/
│       └── SKILL.md
├── your-project-files...
└── Program.java
```

**Step 3: Verify and manage your skills**

Type `/skills` in the GitHub Copilot or Code Studio chat to quickly access the Configure Skills menu and manage your installed skills.

**Step 4: Use skills in VS Code**

There are two ways to use skills:

1. **Slash commands** - Type `/` in the GitHub Copilot chat to see available skills. For example:
   ```
   /syncfusion-java-word Create a report with a table of contents
   ```

2. **Automatic loading** - Simply describe your task naturally, and your AI Agent automatically loads the relevant skill:
   ```
   Create a Word document with company letterhead and a data table
   ```

When a skill is loaded, AI Agent gains specialized knowledge of Syncfusion .NET libraries and can help you generate code or execute document operations efficiently.

### Prerequisites

```bash
# Java SE 8.0(1.8) or above versions

```

### Syncfusion License

Place your license key in `SyncfusionLicense.txt` at the workspace root, or set the environment variable:

```bash
# Windows
set SYNCFUSION_LICENSE_KEY=your_key_here

# macOS/Linux
export SYNCFUSION_LICENSE_KEY=your_key_here
```

Get a free license: [Syncfusion Community License](https://www.syncfusion.com/products/communitylicense)

---

## Example Prompts

#### Mode 1 — Code Generation
*Use these when you want C# code snippets for your own project.*

- "Show me DocIO code to create a Word document with a title, heading, and a paragraph."
- "Generate a java to add a 3×4 table to a Word document using Syncfusion DocIO."
- "Write Program.cs code using DocIO to perform a mail merge with a DataTable."
- "How do I add a header and footer with page numbers using Syncfusion DocIO?"

---


## Resources

- [Syncfusion DocIO Documentation](https://help.syncfusion.com/file-formats/docio/overview)
- [API Reference](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.Base~Syncfusion.DocIO.DLS.WordDocument.html)

---

## License

Syncfusion .NET Word library requires a commercial license for production use. A [free community license](https://www.syncfusion.com/products/communitylicense) is available for qualifying organizations.
