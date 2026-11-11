# Syncfusion .NET Markdown Library Skill

## Overview

Create, edit, and serialize Markdown documents (.md) using the Syncfusion Markdown library.
This skill supports two operational modes — generating C# code for the user's project or executing tasks directly through a CSX script.

See **[SKILL.md](SKILL.md)** for the full intent-routing guide and rules.

---

## Key Capabilities

- **Create & Edit:** paragraphs, headings, lists, tables, images, hyperlinks, code blocks, blockquotes, task lists
- **Parse & Modify:** load from files/streams, iterate and update blocks and inlines
- **Serialization:** convert Markdown document models back to plain Markdown text and write to files
- **Advanced Features:** custom parsing events, image loading handlers, nested lists, task list support


## Getting Started

### How to Integrate Skills

**Step 1: Checkout and copy the required skills**

Clone or download the Document-SDK-Skills repository and copy the **syncfusion-dotnet-markdown** skill from the `skills/` directory.

**Step 2: Install the skill**

Place the copied skill folders in your workspace following this structure:

```
your-workspace/
├── .github/skills/          # or .claude/skills/ or .codestudio/skills/
│   └── syncfusion-dotnet-markdown/
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
   /syncfusion-dotnet-markdown Create a README with a table
   ```

2. **Automatic loading** - Simply describe your task naturally, and your AI Agent automatically loads the relevant skill:
   ```
   Create a Markdown README with headings and examples
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

Place your license key in `SyncfusionLicense.txt` at the workspace root, or set the environment variable:

```bash
# Windows
set SYNCFUSION_LICENSE_KEY=your_key_here

# macOS/Linux
export SYNCFUSION_LICENSE_KEY=your_key_here
```

Get a free license: [Syncfusion Community License](https://www.syncfusion.com/products/communitylicense)

### NuGet Packages Used in Mode 2

Install the package for the format you need:

```bash
# Markdown
dotnet add package Syncfusion.Markdown
```

---

## Example Prompts

#### Mode 1 — Code Generation
*Use these when you want C# code snippets for your own project.*

- "Show me Syncfusion Markdown code to create a README with a title, heading, and a paragraph."
- "Generate a C# snippet to add a 3×4 table to a Markdown document using Syncfusion Markdown API."
- "Write Program.cs code to parse a Markdown file and serialize it back to Markdown text."
- "How do I add images and hyperlinks to a Markdown document using Syncfusion?"

#### Mode 2 — Document Generation
*Use these when you want a `.md` or `.html` file created right now in the workspace.*

- "Create a project README.md describing the app architecture and save to `output/README.md`."
- "Generate `output/api-docs.md` with headings, a table of endpoints, and code examples."
- "Open `output/notes.md`, add a 'Summary' section, and save as `output/notes-updated.md`."
- "Convert `output/guide.md` to HTML and save as `output/guide.html`."

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `dotnet script` not found | `dotnet tool install -g dotnet-script` |
| License Watermark | Add key to `SyncfusionLicense.txt` or use env var `SYNCFUSION_LICENSE_KEY` |
| Missing NuGet package | `dotnet add package Syncfusion.Markdown` |
| File access error | Ensure the file isn't open in another application |

---

## Resources

- [Syncfusion Markdown Documentation](https://help.syncfusion.com/document-processing/introduction)
- [API Reference](https://help.syncfusion.com/cr/file-formats)

---

## License

Syncfusion .NET Markdown library requires a commercial license for production use. A [free community license](https://www.syncfusion.com/products/communitylicense) is available for qualifying organizations.