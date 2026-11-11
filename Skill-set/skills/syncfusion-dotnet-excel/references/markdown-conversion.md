# Convert Excel to Markdown and Markdown to Excel Using XlsIO

> Covers saving an Excel workbook or worksheet to Markdown format, opening a Markdown file and converting it to Excel, and configuring export options using Syncfusion XlsIO (.NET).
> Includes export with custom options, preserving empty rows, using display text, and importing Markdown files with custom settings.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.IO`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Save Workbook to Markdown

### Minimal Code
```csharp
using (FileStream markdownStream = new FileStream("output/workbook.md", FileMode.Create))
{
    MarkdownExportOptions options = new MarkdownExportOptions();
    workbook.SaveAs(markdownStream, options);
}
```

### Placeholders
- `"output/workbook.md"` → Replace with `"{output-path}"`



---

## Save Workbook to Markdown by File Path

### Minimal Code
```csharp
MarkdownExportOptions options = new MarkdownExportOptions();
workbook.SaveAs("output/workbook.md", options);
```

---

## Save Workbook to Markdown using ExcelSaveType

### Minimal Code
```csharp
using (FileStream markdownStream = new FileStream("output/workbook.md", FileMode.Create))
{
    workbook.SaveAs(markdownStream, ExcelSaveType.Markdown);
}
```

---

## Configure Markdown Export Options

### MarkdownExportOptions Properties

| Property | Type | Purpose | Default |
|----------|------|---------|---------|
| `PreserveEmptyRow` | `bool` | Preserve empty rows in the exported Markdown | `false` |
| `UseDisplayText` | `bool` | Export formatted display text instead of raw values | `false` |
| `SaveOptions` | `SaveOptions` | Access underlying SaveOptions for advanced Markdown settings | (Lazy-initialized) |

### SaveOptions Properties (via MarkdownExportOptions.SaveOptions)

| Property | Type | Purpose | Default |
|----------|------|---------|---------|
| `Encoding` | `System.Text.Encoding` | Character encoding for saving Markdown file | UTF8 (without BOM) |
| `ImageNodeVisited` | `EventHandler` | Event handler for custom image processing during export | `null` |

### Preserve Empty Rows

### Minimal Code
```csharp
MarkdownExportOptions options = new MarkdownExportOptions();
options.PreserveEmptyRow = true;
workbook.SaveAs("output/workbook.md", options);
```



---

## Use Display Text in Markdown Export

### Minimal Code
```csharp
MarkdownExportOptions options = new MarkdownExportOptions();
options.UseDisplayText = true;
workbook.SaveAs("output/workbook.md", options);
```



---

## Configure Encoding for Markdown Export

Control the character encoding when saving Excel to Markdown format.

### Minimal Code
```csharp
MarkdownExportOptions options = new MarkdownExportOptions();
options.SaveOptions.Encoding = Encoding.UTF8;  // Default: UTF8 without BOM
workbook.SaveAs("output/workbook.md", options);
```

### With Different Encodings
```csharp
MarkdownExportOptions options = new MarkdownExportOptions();
// Use UTF16
options.SaveOptions.Encoding = Encoding.UTF16;
workbook.SaveAs("output/workbook-utf16.md", options);

// Use ASCII
options.SaveOptions.Encoding = Encoding.ASCII;
worksheet.SaveAs("output/sheet-ascii.md", options);
```

---

## Customize Image Data in Markdown Export

Control image paths and save images externally when exporting Excel to Markdown using the ImageNodeVisited event.

### Minimal Code
```csharp
MarkdownExportOptions options = new MarkdownExportOptions();
options.SaveOptions.ImageNodeVisited += OnExportImageNodeVisited;
workbook.SaveAs("output/workbook.md", options);

private static void OnExportImageNodeVisited(object sender, SaveImageNodeVisitedEventArgs args)
{
    string imagePath = Path.Combine("output", Path.GetFileName(args.Uri));
    using (FileStream fs = File.Create(imagePath))
        args.ImageStream.CopyTo(fs);
    args.Uri = imagePath;
}
```



---

## Customize Image Data in Markdown Import

Handle image loading and sourcing when importing Markdown files using the ImageNodeVisited event.

### Minimal Code
```csharp
MdImportSettings settings = new MdImportSettings();
settings.ImageNodeVisited += OnImportImageNodeVisited;
IWorkbook workbook = application.Workbooks.Open("input.md", settings);

private static void OnImportImageNodeVisited(object sender, MdImageNodeVisitedEventArgs args)
{
    if (File.Exists(args.Uri))
        args.ImageStream = new FileStream(args.Uri, FileMode.Open);
    else if (args.Uri.StartsWith("https://"))
        args.ImageStream = new MemoryStream(new WebClient().DownloadData(args.Uri));
}
```



> **Important:** Hook the event handler before opening the Markdown document.

---

## Save a Specific Worksheet to Markdown

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];  // or workbook.Worksheets["SheetName"]
MarkdownExportOptions options = new MarkdownExportOptions();
worksheet.SaveAs("output/sheet.md", options);
```



---

## Save Worksheet to Markdown Stream

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
using (FileStream markdownStream = new FileStream("output/sheet.md", FileMode.Create))
{
    MarkdownExportOptions options = new MarkdownExportOptions();
    worksheet.SaveAs(markdownStream, options);
}
```



---

## Get Markdown Document Object

### Minimal Code
```csharp
MarkdownExportOptions options = new MarkdownExportOptions();
MarkdownDocument markdownDocument = workbook.GetMarkdownDocument(options);
```



---

## Get Markdown Document from Worksheet

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
MarkdownExportOptions options = new MarkdownExportOptions();
MarkdownDocument markdownDocument = worksheet.GetMarkdownDocument(options);
```

---

## Convert Markdown to Excel with ExcelOpenType

### Minimal Code
```csharp
IWorkbook workbook = application.Workbooks.Open("input.md", ExcelOpenType.Markdown);
workbook.SaveAs("output/converted.xlsx");
```

---

## Open Markdown File with Import Settings

### MdImportSettings Properties

| Property | Type | Purpose | Default |
|----------|------|---------|---------|
| **`Encoding`** | `System.Text.Encoding` | Character encoding for reading Markdown file | `UTF8` |
| `UseThematicBreakAsContentBreak` | `bool` | Create new worksheet sections on thematic breaks (horizontal rules) | `false` |
| **`ImageNodeVisited`** | `EventHandler` | Event handler for custom image loading during import | `null` |

### Minimal Code
```csharp
IWorkbook workbook = application.Workbooks.Open("input.md", new MdImportSettings());
```

### With Encoding Configuration
```csharp
MdImportSettings settings = new MdImportSettings();
settings.Encoding = Encoding.UTF8;
settings.UseThematicBreakAsContentBreak = false;
IWorkbook workbook = application.Workbooks.Open("input.md", settings);
```



---

## Open Markdown File from Stream

### Minimal Code
```csharp
using FileStream markdownStream = new FileStream("input.md", FileMode.Open, FileAccess.Read);
IWorkbook workbook = application.Workbooks.Open(markdownStream, ExcelOpenType.Markdown, new MdImportSettings());
```



---

## Markdown to Excel — Open Markdown and Save as XLSX

### Minimal Code
```csharp
IWorkbook workbook = application.Workbooks.Open("input.md", new MdImportSettings());
workbook.Version = ExcelVersion.Xlsx;
workbook.SaveAs("output/converted.xlsx");
```



---

## Open Markdown Document Object

Open a workbook from a MarkdownDocument instance for advanced scenarios requiring pre-processing.

### Minimal Code
```csharp
MarkdownDocument markdownDocument = new MarkdownDocument("input.md");
IWorkbook workbook = application.Workbooks.Open(markdownDocument);
```

### From FileStream
```csharp
using FileStream fileStream = new FileStream("input.md", FileMode.Open, FileAccess.Read);
MarkdownDocument markdownDocument = new MarkdownDocument(fileStream);
IWorkbook workbook = application.Workbooks.Open(markdownDocument);
```

---

## Full End-to-End Example

This example covers all key Markdown conversion APIs: export/import, export options, MarkdownDocument objects, and image handling.

```csharp
using System;
using System.IO;
using System.Net;
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;
Directory.CreateDirectory("output");

// Create sample workbook
IWorkbook workbook = application.Workbooks.Create(1);
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].Text = "Product";
sheet["B1"].Text = "Price";
sheet["A2"].Text = "Widget A";
sheet["B2"].Number = 29.99;

// Export to Markdown — File path with MarkdownExportOptions
MarkdownExportOptions options = new MarkdownExportOptions();
workbook.SaveAs("output/data.md", options);

// Export to Markdown — Stream with MarkdownExportOptions
using (FileStream stream = new FileStream("output/data-stream.md", FileMode.Create))
    workbook.SaveAs(stream, options);

// Export to Markdown — Using ExcelSaveType enum
using (FileStream stream = new FileStream("output/data-savetype.md", FileMode.Create))
    workbook.SaveAs(stream, ExcelSaveType.Markdown);

// Export specific worksheet to Markdown
sheet.SaveAs("output/sheet.md", options);

// Get MarkdownDocument object
MarkdownDocument markdownDoc = workbook.GetMarkdownDocument(options);

workbook.Close();

// Open Markdown file
IWorkbook mdWorkbook = application.Workbooks.Open("output/data.md", new MdImportSettings());
IWorksheet mdSheet = mdWorkbook.Worksheets[0];
Console.WriteLine($"Imported: {mdSheet.UsedRange.LastRow} rows, {mdSheet.UsedRange.LastColumn} columns");
mdWorkbook.Close();

// Open Markdown from stream
using (FileStream fs = new FileStream("output/data.md", FileMode.Open, FileAccess.Read))
{
    IWorkbook streamWorkbook = application.Workbooks.Open(fs, ExcelOpenType.Markdown, new MdImportSettings());
    streamWorkbook.Close();
}

// Open from MarkdownDocument object
MarkdownDocument mdDoc = new MarkdownDocument("output/data.md");
IWorkbook docWorkbook = application.Workbooks.Open(mdDoc);
docWorkbook.Close();

// Markdown to Excel conversion with formatting
IWorkbook convertWorkbook = application.Workbooks.Open("output/data.md", new MdImportSettings());
IWorksheet convertSheet = convertWorkbook.Worksheets[0];
convertSheet[1, 1, 1, convertSheet.UsedRange.LastColumn].CellStyle.Font.Bold = true;
convertWorkbook.Version = ExcelVersion.Xlsx;
convertWorkbook.SaveAs("output/converted.xlsx");
convertWorkbook.Close();

// Export options: PreserveEmptyRow and UseDisplayText
IWorkbook optWorkbook = application.Workbooks.Create(1);
IWorksheet optSheet = optWorkbook.Worksheets[0];
optSheet["A1"].Text = "Item";
optSheet["B1"].Text = "Price";
optSheet["A2"].Text = "Product";
optSheet["B2"].Number = 19.99;
optSheet["B2"].NumberFormat = "$#,##0.00";

MarkdownExportOptions displayOptions = new MarkdownExportOptions 
{ 
    UseDisplayText = true, 
    PreserveEmptyRow = true 
};
optSheet.SaveAs("output/with-options.md", displayOptions);
optWorkbook.Close();

// Image handling during export
IWorkbook imgExportWorkbook = application.Workbooks.Create(1);
MarkdownExportOptions imgExportOptions = new MarkdownExportOptions();
imgExportOptions.SaveOptions.ImageNodeVisited += OnExportImageNodeVisited;
imgExportWorkbook.SaveAs("output/with-images.md", imgExportOptions);
imgExportWorkbook.Close();

// Image handling during import
MdImportSettings imgImportSettings = new MdImportSettings();
imgImportSettings.ImageNodeVisited += OnImportImageNodeVisited;
IWorkbook imgImportWorkbook = application.Workbooks.Open("output/with-images.md", imgImportSettings);
imgImportWorkbook.Close();

excelEngine.Dispose();

// Helper methods
private static void OnExportImageNodeVisited(object sender, SaveImageNodeVisitedEventArgs args)
{
    string outputPath = Path.Combine("output", Path.GetFileName(args.Uri));
    Directory.CreateDirectory("output");
    using (FileStream fs = File.Create(outputPath))
        args.ImageStream.CopyTo(fs);
    args.Uri = outputPath;
}

private static void OnImportImageNodeVisited(object sender, MdImageNodeVisitedEventArgs args)
{
    if (File.Exists(args.Uri))
        args.ImageStream = new FileStream(args.Uri, FileMode.Open);
    else if (args.Uri.StartsWith("https://"))
        args.ImageStream = new MemoryStream(new WebClient().DownloadData(args.Uri));
}
```