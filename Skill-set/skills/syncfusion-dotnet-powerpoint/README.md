# Syncfusion .NET Powerpoint Library Skill

## Overview

Create, edit and convert PowerPoint (.pptx) files using the Syncfusion Presentation Library.
This skill supports two operational modes — generating C# code for the user’s project or executing tasks directly through a CSX script.

See **[SKILL.md](SKILL.md)** for the full intent-routing guide and rules.

---
## Key Capabilities

- **Create & Edit:** Presentations (.pptx), slides (clone and merge), paragraphs, text boxes, tables, shapes, images, lists, connectors, hyperlinks, headers/footers, comments, document properties, sections
- **Advanced Features:** Custom animations and slide transitions, master slide layouts, speaker notes, SmartArt, OLE objects, find and replace, macros, chart creation and editing
- **Conversion:** PowerPoint to PDF; PowerPoint to images (PNG, JPEG), chart-to-image conversion
- **Security:** Encrypt and decrypt presentations; set and remove write protection


## Getting Started

### How to Integrate Skills

**Step 1: Checkout and copy the required skills**

Clone or download the Document-SDK-Skills repository and copy the **syncfusion-dotnet-powerpoint** skill from the `skills/` directory.

**Step 2: Install the skills**

Place the copied skill folders in your workspace following this structure:

```
your-workspace/
├── .github/skills/          # or .claude/skills/ or .codestudio/skills/
│   └── syncfusion-dotnet-powerpoint/
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
   /syncfusion-dotnet-powerpoint Create a presentation with animation
   ```

2. **Automatic loading** - Simply describe your task naturally, and your AI Agent automatically loads the relevant skill:
   ```
   Create a powerpoint presentation with company letterhead and a data table
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
# PowerPoint
dotnet add package Syncfusion.Presentation.Net.Core
dotnet add package Syncfusion.PresentationRenderer.Net.Core  # For PDF conversion
```

## Example Prompts
#### Mode 1 — Code Generation
*Use these when you want C# code snippets for your own project.* 

- "Show me Presentation code to create a PPTX with a title slide, a content slide, and a bullet list."
- "Generate a C# snippet to add a 3×4 table to a PowerPoint slide using Syncfusion Presentation."
- "Write Program.cs code using Syncfusion Presentation to add a chart to a slide."
- "How do I add slide numbers and a footer to a presentation using Syncfusion Presentation?"

#### Mode 2 — Presentation Generation
*Use these when you want a .pptx file created right now in the workspace.*

- "Create a presentation about the top 5 programming languages in 2025."
- "Generate a meeting agenda presentation and save it to output/agenda.pptx."
- "Open output/report.pptx and change its theme to the Office theme."
- "Convert output/report.pptx to PDF."

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `dotnet script` not found | `dotnet tool install -g dotnet-script` |
| Missing NuGet package | `dotnet add package Syncfusion.Presentation.Net.Core` |
| File access error | Ensure the file isn't open in another application |

---

## Resources

- [Syncfusion Presentation Documentation](https://help.syncfusion.com/file-formats/presentation/overview)
- [API Reference](https://help.syncfusion.com/cr/file-formats/Syncfusion.Presentation.html)

---

## License

Syncfusion .NET Presentation library requires a commercial license for production use. A [free community license](https://www.syncfusion.com/products/communitylicense) is available for qualifying organizations.
