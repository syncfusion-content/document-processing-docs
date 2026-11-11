# Syncfusion PDF To Image Converter skill

## Overview
Convert PDF files to images with customization options (output format, DPI, pages, scaling, and image quality).

See **[SKILL.md](SKILL.md)** for the full intent-routing guide and rules.

---

## Key Capabilities

- **Convert pages:** set the range of pages to be convert.
- **Customization options:** set custome size, DPI, zoom/tiles.


## Getting Started

### How to Integrate Skills

**Step 1: Checkout and copy the required skills**

Clone or download the Document-SDK-Skills repository and copy the **pdftoimage** skill from the `skills/` directory.

**Step 2: Install the skill**

Place the copied skill folders in your workspace following this structure:

```
your-workspace/
├── .github/skills/          # or .claude/skills/ or .codestudio/skills/
│   └── pdftoimage/
│       └── SKILL.md
├── your-project-files...
└── Program.cs
```

**Step 3: Verify and manage your skills**

Type `/skills` in the GitHub Copilot or Code Studio chat to quickly access the Configure Skills menu and manage your installed skills.

**Step 4: Use skills in VS Code**

There are two ways to use skills:

1. **Slash commands** - Type `/` in the GitHub Copilot chat to see available skills.

2. **Automatic loading** - Simply describe your task naturally, and your AI Agent automatically loads the relevant skill:
   ```
   Convert the first page of pdf document into image.
   ```

When the pdftoimage skill is loaded, the AI Agent provides focused C# snippets and commands for Pdf To Image Converter.

### Prerequisites

- **Visual Studio** 2019 or later
- **.NET** Framework 4.6+ or .NET 6+


### NuGet Packages

| Platform | NuGet Package |
|---|---|
| Windows Forms | Syncfusion.PdfToImageConverter.WinForms |
| WPF | Syncfusion.PdfToImageConverter.WPF |
| ASP.NET MVC5 | Syncfusion.PdfToImageConverter.AspNet.Mvc5 |
| Blazor, .NET Core and .NET Platforms | Syncfusion.PdfToImageConverter.Net |
| .NET Core (alternate) | Syncfusion.PdfToImageConverter.Net.Core |

---

## Example Prompts

#### Code Generation
*Use these when you want C# code for your existing project.*

- "Show C# code to convert the first page of sample.pdf to PNG"
- "Generate WinForms code that loads a PDF and exports all pages"
- "Convert a page of sample.pdf by skipping annotations"
---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Missing NuGet package | Add the corresponding package by referring references/nuget-packages.md |
---

## Resources

- [Syncfusion PdfToImageConverter Docs](https://help.syncfusion.com/document-processing/pdf/conversions/pdf-to-image/net/convert-pdf-to-image)
- [API Reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.PdfToImageConverter.html)

---
