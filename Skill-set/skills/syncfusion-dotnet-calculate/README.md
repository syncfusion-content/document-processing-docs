# Syncfusion<sup>®</sup> Calculate Skill

## Overview
Parses and Compute formulas using the Syncfusion dotnet Calculate. It generates C# code to enable interactive formula calculation functionality, including expression parsing, dependency resolution, and runtime evaluation of calculated values.

See **[SKILL.md](SKILL.md)** for the full intent-routing guide and rules.

---

## Key Capabilities
- **Expression Calculation:** Parse and compute algebraic expressions, intrinsic functions, and Excel‑style formulas (e.g., SUM(A1:B10), COS(x), complex nested formulas)
- **Advanced Formula Support:** 400+ built‑in functions, named ranges, array formulas, dynamic references, formula dependency tracking, cross‑sheet references
- **Integration & Extensibility:** Custom functions with optional arguments, calculation support for business objects via ICalcData, seamless integration with XlsIO for Excel workbook calculations
- **Localization & Performance:** Culture‑aware parsing (decimal and argument separators), optimized recalculation engine for large and complex formula sets

---
## Getting Started

### How to Integrate Skills

**Step 1: Checkout and copy the required skills**

Clone or download the 
Document-SDK-Skills repository and copy the **syncfusion-dotnet-calculate** skill from the `skills/` directory.

**Step 2: Install the skill**

Place the copied skill folders in your workspace following this structure:

```
your-workspace/
├── .github/skills/          # or .claude/skills/ or .codestudio/skills/
│   └── syncfusion-dotnet-calculate/
│       └── SKILL.md
├── calculate/              # Calculate projects
│   ├── Program.cs
│   ├── 
│   └── ...
└── Calculate.sln          # Solution file
```

**Step 3: Verify and manage your skills**

Type `/skills` in the GitHub Copilot or Code Studio chat to quickly access the Configure Skills menu and manage your installed skills.

**Step 4: Use skills in VS Code**

There are two ways to use skills:

1. **Slash commands** - Type `/` in the GitHub Copilot chat to see available skills. For example:
   ```
   /syncfusion-dotnet-calculate Create a Calculate with simple formula
   ```

2. **Automatic loading** - Simply describe your task naturally, and your AI Agent automatically loads the relevant skill:
   ```
   Create calculate using CalcEngine
   ```

When a skill is loaded, AI Agent gains specialized knowledge of syncfusion-dotnet-calculate and can help you generate code for your Calculate project efficiently.


### Prerequisites

### Runnable Windows Forms project 

To integrate the syncfusion-dotnet-calculate directly into your project files, you need a working calculate project. If you don't have one yet, follow the [Getting Started guide](https://help.syncfusion.com/windowsforms/calculation-engine/getting-started) to set up a new calculate project.

**Alternative Options:**
- **No project needed:** You can request code snippets directly in the chat window for learning or reference purposes
- **Separate file generation:** Code can be saved to the skill's output folder (`syncfusion-dotnet-calculate/output/`) as standalone files
---
## Example Prompts

*Use these when you want C# code snippets for your project.*

- "Create a calculation engine and evaluate arithmetic and Excel-style formulas"
- "Show me how to parse and compute formulas using CalcQuickBase"
- "Generate code to evaluate built-in formulas such as SUM, IF, and ROUND"
- "Demonstrate how to define and use named ranges in calculations"

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| License Watermark | Add key to `SyncfusionLicense.txt` or use env var `SYNCFUSION_LICENSE_KEY` |
| Missing NuGet package | `dotnet add package Syncfusion.Calculate.Base`|

---

## Resources

- [Syncfusion dotnet Calculate Documentation](https://help.syncfusion.com/windowsforms/calculation-engine/overview)
- [API Reference — CalcEngine](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Calculate.CalcEngine.html)
- [API Reference — CalcQuickBase](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Calculate.CalcQuickBase.html)
- [API Reference — ICalcData](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Calculate.ICalcData.html)

---

## License

Syncfusion Essential Calculate requires a commercial license for production use. A [free community license](https://www.syncfusion.com/products/communitylicense) is available for qualifying organizations.
