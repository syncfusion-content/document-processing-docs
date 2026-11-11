## Syncfusion Flutter Excel Library Skill

Create and manipulate Excel workbooks using the Syncfusion Flutter XlsIO library written natively in Dart. Supports creating Excel files from scratch with worksheets, cells, formatting, data filtering, hyperlinks, and more — without any Microsoft Office dependency.

See **[SKILL.md](SKILL.md)** for the full intent-routing guide and rules.

---

## Mode: Coding Assistant

This skill generates production-ready Dart code for use in Flutter projects. No standalone scripts are created or run.

**Trigger keywords:** "code", "snippet", "how to write", "main.dart", "show me", "sample", "example code", "generate code for".

**Workflow:**

#### Step 1 — Detect the Platform and Suggest the Correct Package
- Inspect the workspace project files (`pubspec.yaml`, `main.dart`, etc.) to identify the Flutter platform target.
- Tell the user to add `syncfusion_flutter_xlsio` to `pubspec.yaml` **before** generating any code.

#### Step 2 — Generate Code from Reference Files Only
Do NOT invent APIs/methods not in reference files.
- Read the relevant `references/*.md` file(s) for the requested feature
- Build Dart code **strictly** from the APIs and snippets found in those files
- Use the correct save/launch pattern for the target platform:
  - **Mobile** → `getApplicationSupportDirectory()` + `OpenFile.open()`
  - **Desktop** → `getApplicationSupportDirectory()` + `OpenFile.open()`
  - **Web** → base64 + JavaScript download or `web` package approach



---

## Quick Start

### Prerequisites

- **Flutter SDK** installed
- Add dependency to `pubspec.yaml`:
  ```yaml
  dependencies:
    syncfusion_flutter_xlsio: ^33.1.44
    syncfusion_officechart: ^33.1.44
  ```
- Use the latest compatible package versions from pub.dev or Syncfusion documentation, then run: `flutter pub get`
- Import in your Dart file:
  ```dart
  import 'package:syncfusion_flutter_xlsio/xlsio.dart';
  import 'package:syncfusion_officechart/officechart.dart';
  ```

---

## Example Prompts

- "Show me how to create an Excel workbook with multiple sheets using Syncfusion Flutter XlsIO."
- "How do I add formatted data to cells in an Excel file?"
- "Provide code to create a table with headers and multiple rows in Excel."
- "How can I add hyperlinks to an Excel worksheet?"
- "How do I format cells with number formats and colors?"
- "Show me how to apply styles and formatting to cells."
- "How do I create and configure charts in Excel?"
- "Can you show me an example of using formulas in Syncfusion Flutter XlsIO?"

---

## Integration with GitHub Copilot

This skill is designed to work with GitHub Copilot in VS Code for Flutter development. Place the skill folder in `.github/skills/` of your repository or use it directly in Code Studio.

When working with Excel in Flutter, Copilot can automatically:

1. Detect your Flutter platform (mobile, desktop, or web)
2. Generate Syncfusion XlsIO Dart code using the reference snippets
3. Suggest the correct file-handling pattern for your target platform
4. Provide complete, production-ready code snippets

### Example Prompts for Copilot

#### Basic Excel Operations

- "Show me Dart code to create a workbook with a title, header row, and a few data rows using Syncfusion XlsIO."
- "Generate a Dart snippet to add a 3×4 table and style the header row using XlsIO."
- "Write code to read Excel data from a file and populate a Flutter ListView."

#### Data Formatting and Styling

- "Create XlsIO code to format cells with currency values, colors, and bold headers."
- "Show me how to apply number formats and conditional formatting in Dart."
- "Provide a code example for creating alternating row colors in an Excel table."

#### Charts and Advanced Features

- "Generate code to create a bar chart in Excel using Syncfusion XlsIO."
- "Show me how to add hyperlinks and comments to cells in Dart."
- "Create a code example for using formulas (SUM, AVERAGE, IF) in Excel cells."

#### File Operations

- "Write code to save an Excel workbook and open it on mobile using path_provider and open_file."
- "How do I export data to CSV format using Syncfusion Flutter XlsIO?"
- "Show me the pattern for saving and opening files on desktop vs mobile in Flutter."

#### Tables and Data Management

- "Create code for converting a range to a formatted table with headers."
- "Show me how to apply filters and sorting to Excel data using XlsIO."
- "Provide a code example for creating multiple named ranges in a workbook."

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Package not found | Add `syncfusion_flutter_xlsio` to `pubspec.yaml` and run `flutter pub get` |
| File not found on mobile | Use `getApplicationSupportDirectory()` from `path_provider` |
| Excel file not opening | Add `open_file` package and call `OpenFile.open(filePath)` |
| Web download not working | Use base64 + JS download or the `web` package approach |
| Memory issues with large files | Call `workbook.dispose()` after saving to release memory |

---

## Resources

- [Syncfusion Flutter XlsIO Documentation](https://help.syncfusion.com/flutter/xlsio/overview)
- [Working with Workbook](https://help.syncfusion.com/flutter/xlsio/working-with-workbook)
- [Working with Worksheets](https://help.syncfusion.com/flutter/xlsio/working-with-excel-worksheet)
- [Working with Cells](https://help.syncfusion.com/flutter/xlsio/working-with-cells)
- [API Reference](https://pub.dev/documentation/syncfusion_flutter_xlsio/latest/xlsio/xlsio-library.html)
- [pub.dev Package](https://pub.dev/packages/syncfusion_flutter_xlsio)
- [Flutter Examples on GitHub](https://github.com/syncfusion/flutter-examples)

---
