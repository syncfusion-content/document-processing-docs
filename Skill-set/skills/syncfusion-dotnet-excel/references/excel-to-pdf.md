# Convert Excel Workbook or Worksheet to PDF

> Convert Excel documents to PDF format — convert entire workbooks, single sheets, set layout options, embed fonts, apply security, customize page settings, and handle special fonts using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `Syncfusion.Pdf`, `System`, `System.IO`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.XlsIORenderer`, `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** `Syncfusion.ExcelToPdfConverter`, `System.Drawing` (add `Syncfusion.ExcelChartToImageConverter` if preserving charts)

---

## Convert Entire Workbook to PDF

Load an Excel workbook and convert it to PDF document.

### Minimal Code — .NET Core / .NET 5+ / ASP.NET Core
```csharp
IWorkbook workbook = application.Workbooks.Open("input.xlsx");
XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);
using (FileStream stream = new FileStream("output/workbook.pdf", FileMode.Create))
    pdfDocument.Save(stream);
pdfDocument.Close(true);
```

### Minimal Code — .NET Framework (Windows)
```csharp
IWorkbook workbook = application.Workbooks.Open("input.xlsx");
ExcelToPdfConverter converter = new ExcelToPdfConverter(workbook);
PdfDocument pdfDocument = converter.Convert();
pdfDocument.Save("output/workbook.pdf");
pdfDocument.Close(true);
```

### Placeholders
- `"input.xlsx"` → Replace with `"{input-file}"`
- `"output/workbook.pdf"` → Replace with `"{pdf-output-path}"`

### Open from File Path and Save to File

Full example with proper initialization and resource cleanup:
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

using (FileStream stream = new FileStream("output/workbook.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

### Open from Stream and Save to Stream
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

using FileStream inputStream = new FileStream("input.xlsx", FileMode.Open, FileAccess.Read);
IWorkbook workbook = application.Workbooks.Open(inputStream);

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

using FileStream outputStream = new FileStream("output/workbook.pdf", FileMode.Create);
pdfDocument.Save(outputStream);
pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

---

## Convert a Single Worksheet to PDF

Convert a specific worksheet from an Excel workbook to PDF.

### Minimal Code — .NET Core / .NET 5+ / ASP.NET Core
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet);
using (FileStream stream = new FileStream("output/sheet1.pdf", FileMode.Create))
    pdfDocument.Save(stream);
pdfDocument.Close(true);
```

### Minimal Code — .NET Framework (Windows)
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
ExcelToPdfConverter converter = new ExcelToPdfConverter(workbook);
converter.SheetRender(worksheet);
PdfDocument pdfDocument = converter.Convert();
pdfDocument.Save("output/sheet1.pdf");
pdfDocument.Close(true);
```

### By Sheet Index
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet);

using (FileStream stream = new FileStream("output/sheet1.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

### By Sheet Name
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IWorksheet worksheet = workbook.Worksheets["SalesData"];

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet);

using (FileStream stream = new FileStream("output/SalesData.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

---

## XlsIORendererSettings — Conversion Options

Customize PDF conversion behavior using renderer settings for layout, fonts, and visibility.

### Minimal Code
```csharp
XlsIORendererSettings settings = new XlsIORendererSettings();
settings.LayoutOptions = LayoutOptions.FitSheetOnOnePage;
XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(workbook, settings);
```

### All Available Settings
```csharp
XlsIORendererSettings settings = new XlsIORendererSettings();

// Layout / fit options
settings.LayoutOptions = LayoutOptions.FitSheetOnOnePage;         // Fit entire sheet onto one page
// settings.LayoutOptions = LayoutOptions.FitAllColumnsOnOnePage; // All columns on one page; rows may span
// settings.LayoutOptions = LayoutOptions.FitAllRowsOnOnePage;    // All rows on one page; columns may span
// settings.LayoutOptions = LayoutOptions.NoScaling;              // Use the worksheet's own scale/fit setting

// Font and image quality
settings.EmbedFonts         = true;  // Embed all fonts used in the worksheet into the PDF
settings.ExportQualityImage = true;  // Export images at full quality (larger file size)

// Grid and header settings
settings.DisplayGridLines = GridLinesDisplayStyle.Auto; 
settings.HeaderFooterOption.ShowHeader = false; 

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(workbook, settings);

using (FileStream stream = new FileStream("output/workbook-settings.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
```

---

## Fit-to-Page Layout Options

Scale worksheet content to fit page dimensions using layout options.

### Minimal Code
```csharp
XlsIORendererSettings settings = new XlsIORendererSettings();
settings.LayoutOptions = LayoutOptions.FitSheetOnOnePage;
XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet, settings);
```

### LayoutOptions Values
```csharp
// LayoutOptions.NoScaling              — use worksheet's own FitToPage / Scale print settings
// LayoutOptions.FitSheetOnOnePage      — force all rows and columns onto a single PDF page
// LayoutOptions.FitAllColumnsOnOnePage — all columns fit on one page; rows wrap to additional pages
// LayoutOptions.FitAllRowsOnOnePage    — all rows fit on one page; columns wrap to additional pages
```

### FitSheetOnOnePage — Entire Sheet on a Single Page
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

XlsIORendererSettings settings = new XlsIORendererSettings();
settings.LayoutOptions = LayoutOptions.FitSheetOnOnePage;

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet, settings);

using (FileStream stream = new FileStream("output/fit-one-page.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

### FitAllColumnsOnOnePage — All Columns on One Page
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

XlsIORendererSettings settings = new XlsIORendererSettings();
settings.LayoutOptions = LayoutOptions.FitAllColumnsOnOnePage;

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet, settings);

using (FileStream stream = new FileStream("output/fit-columns.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

---

## Page Orientation and Paper Size via PageSetup

Configure page dimensions, margins, and orientation for PDF output.

### Minimal Code
```csharp
IPageSetup pageSetup = worksheet.PageSetup;
pageSetup.Orientation = ExcelPageOrientation.Landscape;
pageSetup.PaperSize   = ExcelPaperSize.PaperA4;
```

### Full PageSetup Before Convert
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

IPageSetup pageSetup = worksheet.PageSetup;
pageSetup.Orientation        = ExcelPageOrientation.Landscape; // or Portrait
pageSetup.PaperSize          = ExcelPaperSize.PaperA4;
pageSetup.TopMargin          = 0.75;
pageSetup.BottomMargin       = 0.75;
pageSetup.LeftMargin         = 0.5;
pageSetup.RightMargin        = 0.5;
pageSetup.HeaderMargin       = 0.3;
pageSetup.FooterMargin       = 0.3;
pageSetup.CenterHorizontally = true;
pageSetup.CenterVertically   = false;

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet);

using (FileStream stream = new FileStream("output/landscape-a4.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

---

## Print Area — Export Only a Specific Range

Render only cells within a defined print area to PDF.

### Minimal Code
```csharp
worksheet.PageSetup.PrintArea = "A1:H30";
XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet);
```

### Set Print Area and Convert
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

// Only the cells within the print area will be rendered in the PDF
worksheet.PageSetup.PrintArea = "B2:I50";

XlsIORendererSettings settings = new XlsIORendererSettings();
settings.LayoutOptions = LayoutOptions.FitAllColumnsOnOnePage;

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet, settings);

using (FileStream stream = new FileStream("output/print-area.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

---

## Show Gridlines and Row/Column Headers in PDF

Display gridlines and row/column labels in the PDF output.

### Minimal Code
```csharp
XlsIORendererSettings settings = new XlsIORendererSettings();
settings.DisplayGridLines = GridLinesDisplayStyle.Auto; 
settings.HeaderFooterOption.ShowHeader = true; 
```

### Via XlsIORendererSettings (Override — Takes Effect Regardless of PageSetup)
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

XlsIORendererSettings settings = new XlsIORendererSettings();
settings.DisplayGridLines = GridLinesDisplayStyle.Visible;
settings.HeaderFooterOption.ShowHeader = true;

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet, settings);

using (FileStream stream = new FileStream("output/gridlines-headers.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

### Via Worksheet PageSetup (Honoured with NoScaling)
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

// Set directly on the worksheet — honoured when LayoutOptions.NoScaling is used
worksheet.PageSetup.PrintGridlines = true;
worksheet.PageSetup.PrintHeadings  = true;

XlsIORendererSettings settings = new XlsIORendererSettings();
settings.LayoutOptions = LayoutOptions.NoScaling;

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet, settings);

using (FileStream stream = new FileStream("output/gridlines-pagesetup.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

---

## Embed Fonts and High-Quality Image Export

Embed fonts in PDF and export images at full resolution for optimal rendering.

### Minimal Code
```csharp
XlsIORendererSettings settings = new XlsIORendererSettings();
settings.EmbedFonts         = true;
settings.ExportQualityImage = true;
```

### Embed Fonts and Quality Images with Convert
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

XlsIORendererSettings settings = new XlsIORendererSettings();
settings.EmbedFonts         = true; // Embed all fonts — ensures correct rendering on any viewer
settings.ExportQualityImage = true; // Use full-resolution image export (increases file size)

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(workbook, settings);

using (FileStream stream = new FileStream("output/embedded-fonts.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

---

## PDF Security — Encrypt and Restrict Permissions

Protect PDF with passwords and restrict user permissions using AES encryption.

### Minimal Code
```csharp
PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);
PdfSecurity security    = pdfDocument.Security;
security.UserPassword   = "user123";
security.OwnerPassword  = "owner123";
security.Algorithm      = PdfEncryptionAlgorithm.AES;
```

### Restrict Permissions with AES Encryption
```csharp
using Syncfusion.Pdf.Security;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

PdfSecurity security  = pdfDocument.Security;
security.UserPassword  = "user123";    // Password required to open the PDF
security.OwnerPassword = "owner123";   // Password required to change permissions

// Restrict what the user can do
security.Permissions = PdfPermissionsFlags.Print
                     | PdfPermissionsFlags.FullQualityPrint;
// Other available flags:
// PdfPermissionsFlags.CopyContent
// PdfPermissionsFlags.EditContent
// PdfPermissionsFlags.EditAnnotations
// PdfPermissionsFlags.FillFields
// PdfPermissionsFlags.AccessibilityCopyContent

security.Algorithm = PdfEncryptionAlgorithm.AES;       // AES-128
// security.Algorithm = PdfEncryptionAlgorithm.AES256; // AES-256 (stronger)

using (FileStream stream = new FileStream("output/secured.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();
```

---

## Convert All Worksheets to Separate PDF Files

Export each worksheet in a workbook as individual PDF files.

### Minimal Code
```csharp
XlsIORenderer renderer = new XlsIORenderer();
foreach (IWorksheet ws in workbook.Worksheets)
{
    PdfDocument pdf = renderer.ConvertToPDF(ws);
    using FileStream fs = new FileStream($"output/{ws.Name}.pdf", FileMode.Create);
    pdf.Save(fs);
    pdf.Close(true);
}
```

### With Settings Per Sheet
```csharp
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

XlsIORendererSettings settings = new XlsIORendererSettings();
settings.LayoutOptions      = LayoutOptions.FitAllColumnsOnOnePage;
settings.EmbedFonts         = true;
settings.ExportQualityImage = true;

XlsIORenderer renderer = new XlsIORenderer();

foreach (IWorksheet worksheet in workbook.Worksheets)
{
    PdfDocument pdfDocument = renderer.ConvertToPDF(worksheet, settings);

    string outputPath = $"output/{worksheet.Name}.pdf";
    using (FileStream stream = new FileStream(outputPath, FileMode.Create))
        pdfDocument.Save(stream);

    pdfDocument.Close(true);
    Console.WriteLine($"Saved: {outputPath}");
}

workbook.Close();
excelEngine.Dispose();
```

---

## Full End-to-End Example

```csharp
using System;
using System.IO;
// For .NET Core / .NET 5+: use `using Syncfusion.Drawing;`
// For .NET Framework (Windows): use `using System.Drawing;`
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Security;
using Syncfusion.Drawing;

// Consolidated examples for Excel -> PDF conversion (based on excel-to-pdf.md)
// Copy this file contents into your Program.cs and ensure your project
// references Syncfusion.XlsIO, Syncfusion.XlsIORenderer and Syncfusion.Pdf packages.

class Program
{
    static void Main()
    {
        Directory.CreateDirectory("output");

        Example_MinimalConvertWorkbookToPdf();
        Example_OpenFromFileSaveToFile();
        Example_OpenFromStreamSaveToStream();
        Example_ConvertSingleWorksheet();
        Example_SettingsConvert();
        Example_FitToPageAndPageSetup();
        Example_PrintArea();
        Example_GridlinesHeaders();
        Example_EmbedFonts();
        Example_PdfSecurity();
        Example_AllWorksheetsToSeparatePdfs();
        Example_SubstituteFont();
        Example_SubstituteFontFromStream();
        Example_FallbackFonts();

        Console.WriteLine("Example methods complete. Review output/ (or placeholders) for generated files.");
    }

    static void Example_MinimalConvertWorkbookToPdf()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        // Build a small sample workbook
        IWorkbook workbook = application.Workbooks.Create(1);
        IWorksheet sheet = workbook.Worksheets[0];
        sheet["A1"].Text = "Hello";
        sheet["A2"].Text = "Syncfusion XlsIO";

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(workbook);
        using FileStream fs = new FileStream("output/workbook_minimal.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/workbook_minimal.pdf");
    }

    static void Example_OpenFromFileSaveToFile()
    {
        // Placeholder example: requires an input.xlsx file
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        // Replace with an actual path to an existing workbook to run this example
        const string inputPath = "input.xlsx";
        if (!File.Exists(inputPath))
        {
            Console.WriteLine($"Skipping Example_OpenFromFileSaveToFile: '{inputPath}' not found");
            return;
        }

        IWorkbook workbook = application.Workbooks.Open(inputPath);
        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(workbook);
        using FileStream fs = new FileStream("output/workbook_from_file.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/workbook_from_file.pdf");
    }

    static void Example_OpenFromStreamSaveToStream()
    {
        // Placeholder example: requires an input.xlsx file
        const string inputPath = "input.xlsx";
        if (!File.Exists(inputPath))
        {
            Console.WriteLine($"Skipping Example_OpenFromStreamSaveToStream: '{inputPath}' not found");
            return;
        }

        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        using FileStream inputStream = new FileStream(inputPath, FileMode.Open, FileAccess.Read);
        IWorkbook workbook = application.Workbooks.Open(inputStream);

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(workbook);
        using FileStream outputStream = new FileStream("output/workbook_from_stream.pdf", FileMode.Create);
            pdf.Save(outputStream);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/workbook_from_stream.pdf");
    }

    static void Example_ConvertSingleWorksheet()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        IWorkbook workbook = application.Workbooks.Create(2);
        IWorksheet ws = workbook.Worksheets[0];
        ws.Name = "SheetForPdf";
        ws["A1"].Text = "Single sheet conversion";

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(ws);
        using FileStream fs = new FileStream("output/sheet_single.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/sheet_single.pdf");
    }

    static void Example_SettingsConvert()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        IWorkbook workbook = application.Workbooks.Create(1);
        IWorksheet ws = workbook.Worksheets[0];
        ws["A1"].Text = "Settings example";

        XlsIORendererSettings settings = new XlsIORendererSettings();
        settings.LayoutOptions = LayoutOptions.FitAllColumnsOnOnePage;
        settings.EmbedFonts = true;
        settings.ExportQualityImage = true;

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(workbook, settings);
        using FileStream fs = new FileStream("output/workbook_settings.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/workbook_settings.pdf");
    }

    static void Example_FitToPageAndPageSetup()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        IWorkbook workbook = application.Workbooks.Create(1);
        IWorksheet ws = workbook.Worksheets[0];
        ws["A1"].Text = "Fit to page example";

        IPageSetup ps = ws.PageSetup;
        ps.Orientation = ExcelPageOrientation.Landscape;
        ps.PaperSize = ExcelPaperSize.PaperA4;
        ps.LeftMargin = 0.5;
        ps.RightMargin = 0.5;
        ps.TopMargin = 0.75;
        ps.BottomMargin = 0.75;

        XlsIORendererSettings settings = new XlsIORendererSettings();
        settings.LayoutOptions = LayoutOptions.FitSheetOnOnePage;

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(ws, settings);
        using FileStream fs = new FileStream("output/fit_one_page.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/fit_one_page.pdf");
    }

    static void Example_PrintArea()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        IWorkbook workbook = application.Workbooks.Create(1);
        IWorksheet ws = workbook.Worksheets[0];
        for (int r = 1; r <= 20; r++)
            ws[$"A{r}"].Number = r;

        // Only cells within print area will be rendered
        ws.PageSetup.PrintArea = "A1:A10";

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(ws);
        using FileStream fs = new FileStream("output/print_area.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/print_area.pdf");
    }

    static void Example_GridlinesHeaders()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        IWorkbook workbook = application.Workbooks.Create(1);
        IWorksheet ws = workbook.Worksheets[0];
        ws["A1"].Text = "Gridlines + headers";

        // Use worksheet PageSetup to control gridlines and headings
        ws.PageSetup.PrintGridlines = true;
        ws.PageSetup.PrintHeadings = true;

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(ws);
        using FileStream fs = new FileStream("output/gridlines_headers.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/gridlines_headers.pdf");
    }

    static void Example_EmbedFonts()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        IWorkbook workbook = application.Workbooks.Create(1);
        IWorksheet ws = workbook.Worksheets[0];
        ws["A1"].Text = "Embed fonts example";

        XlsIORendererSettings settings = new XlsIORendererSettings();
        settings.EmbedFonts = true;
        settings.ExportQualityImage = true;

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(workbook, settings);
        using FileStream fs = new FileStream("output/embedded_fonts.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/embedded_fonts.pdf");
    }

    static void Example_PdfSecurity()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        IWorkbook workbook = application.Workbooks.Create(1);
        IWorksheet ws = workbook.Worksheets[0];
        ws["A1"].Text = "Secure PDF";

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(workbook);

        PdfSecurity security = pdf.Security;
        security.UserPassword = "user123";
        security.OwnerPassword = "owner123";
        security.Permissions = PdfPermissionsFlags.Print | PdfPermissionsFlags.FullQualityPrint;
        security.Algorithm = PdfEncryptionAlgorithm.AES;

        using FileStream fs = new FileStream("output/secured_workbook.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/secured_workbook.pdf");
    }

    static void Example_AllWorksheetsToSeparatePdfs()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        IWorkbook workbook = application.Workbooks.Create(3);
        for (int i = 0; i < workbook.Worksheets.Count; i++)
            workbook.Worksheets[i]["A1"].Text = $"Sheet {i + 1}";

        XlsIORenderer renderer = new XlsIORenderer();
        int idx = 1;
        foreach (IWorksheet ws in workbook.Worksheets)
        {
            PdfDocument pdf = renderer.ConvertToPDF(ws);
            string filename = string.IsNullOrEmpty(ws.Name) ? $"sheet_{idx}.pdf" : ws.Name + ".pdf";
            string path = Path.Combine("output", filename);
            using FileStream fs = new FileStream(path, FileMode.Create);
                pdf.Save(fs);
            pdf.Close(true);
            Console.WriteLine($"Saved: {path}");
            idx++;
        }

        workbook.Close();
    }

    static void Example_SubstituteFont()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        // Attach event handler for font substitution
        application.SubstituteFont += new SubstituteFontEventHandler(OnSubstituteFont);

        IWorkbook workbook = application.Workbooks.Create(1);
        IWorksheet ws = workbook.Worksheets[0];
        ws["A1"].Text = "Substitute font example";

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(workbook);
        using FileStream fs = new FileStream("output/substituted_font.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/substituted_font.pdf");
    }

    private static void OnSubstituteFont(object sender, SubstituteFontEventArgs args)
    {
        if (args.OriginalFontName == "Arial Unicode MS")
            args.AlternateFontName = "Arial";
    }

    static void Example_SubstituteFontFromStream()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        // Event handler that sets AlternateFontStream (example expects embedded resource)
        application.SubstituteFont += new SubstituteFontEventHandler(OnSubstituteFontFromStream);

        IWorkbook workbook = application.Workbooks.Create(1);
        workbook.Worksheets[0]["A1"].Text = "Substitute font from stream";

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(workbook);
        using FileStream fs = new FileStream("output/substituted_font_stream.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/substituted_font_stream.pdf");
    }

    private static void OnSubstituteFontFromStream(object sender, SubstituteFontEventArgs args)
    {
        // This example expects an embedded font resource named "Fonts.CustomFont.ttf"
        if (args.OriginalFontName == "CustomFont")
        {
            var asm = Assembly.GetExecutingAssembly();
            var resourceName = "Fonts.CustomFont.ttf"; // adjust as needed
            Stream fontStream = asm.GetManifestResourceStream(resourceName);
            if (fontStream != null)
            {
                MemoryStream ms = new MemoryStream();
                fontStream.CopyTo(ms);
                fontStream.Close();
                args.AlternateFontStream = ms;
            }
        }
    }

    static void Example_FallbackFonts()
    {
        using ExcelEngine excelEngine = new ExcelEngine();
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;

        // Initialize default fallback fonts and optionally add more
        application.FallbackFonts.InitializeDefault();
        application.FallbackFonts.Add(ScriptType.Arabic, "Arial, Times New Roman");

        IWorkbook workbook = application.Workbooks.Create(1);
        workbook.Worksheets[0]["A1"].Text = "Fallback fonts example";

        XlsIORenderer renderer = new XlsIORenderer();
        PdfDocument pdf = renderer.ConvertToPDF(workbook);
        using FileStream fs = new FileStream("output/fallback_fonts.pdf", FileMode.Create);
            pdf.Save(fs);
        pdf.Close(true);
        workbook.Close();
        Console.WriteLine("Saved: output/fallback_fonts.pdf");
    }
}

```

---

## Custom Fonts for Conversion

When the workbook already uses a font family that is not installed, register the `.ttf` or `.otf` file **before** conversion. Do not rename the cell font.

```csharp
using (FileStream fontStream = new FileStream("fonts/CustomFont.ttf", FileMode.Open, FileAccess.Read))
    FontManager.RegisterFont(fontStream);
```

Required using: `Syncfusion.Drawing.Fonts`. Full stream, folder, style, image-export, and cleanup snippets are in `references/custom-fonts.md`.

Use the substitute-font event below only when the missing family must be replaced by a different installed family or by one embedded stream. Use fallback fonts when a script glyph is missing.

---

## Substitute Font in Excel-to-PDF Conversion

Replace unsupported or missing fonts with installed alternate fonts or a font stream during Excel-to-PDF conversion.

### Minimal Code
```csharp
application.SubstituteFont += new SubstituteFontEventHandler(OnSubstituteFont);

private static void OnSubstituteFont(object sender, SubstituteFontEventArgs args)
{
    if (args.OriginalFontName == "Arial Unicode MS")
        args.AlternateFontName = "Arial";
}
```

### Placeholders
- `"Arial Unicode MS"` → Replace with `"{missing-font-name}"`
- `"Arial"` → Replace with `"{alternate-font-name}"`

### Event Arguments:
- **AlternateFontName** – Substitutes an available font in the machine for the OriginalFontName
- **AlternateFontStream** – Substitutes a font from stream that is added as embedded resource for the OriginalFontName

### Substitute Font Using Available Fonts
```csharp
using System;
using System.IO;
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
using Syncfusion.Pdf;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

// Initialize the SubstituteFont event handler
application.SubstituteFont += new SubstituteFontEventHandler(OnSubstituteFont);

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

using (FileStream stream = new FileStream("output/substituted-fonts.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();

// Event handler for font substitution
private static void OnSubstituteFont(object sender, SubstituteFontEventArgs args)
{
    // Substitute a font if the specified font is not installed in the machine
    if (args.OriginalFontName == "Arial Unicode MS")
        args.AlternateFontName = "Arial";
    else if (args.OriginalFontName == "CustomFont")
        args.AlternateFontName = "Calibri";
    // Add more substitutions as needed
}
```

### Substitute Font Using Font Stream (Embedded Resource)
```csharp
using System;
using System.IO;
using System.Reflection;
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
using Syncfusion.Pdf;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

// Initialize the SubstituteFont event handler
application.SubstituteFont += new SubstituteFontEventHandler(OnSubstituteFontFromStream);

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

XlsIORenderer renderer = new XlsIORenderer();
PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

using (FileStream stream = new FileStream("output/substituted-fonts-stream.pdf", FileMode.Create))
    pdfDocument.Save(stream);

pdfDocument.Close(true);
workbook.Close();
excelEngine.Dispose();

// Event handler for font substitution using embedded font files
private static void OnSubstituteFontFromStream(object sender, SubstituteFontEventArgs args)
{
    if (args.OriginalFontName == "CustomFont")
    {
        // Load font from embedded resource (*.ttf file)
        var assembly = Assembly.GetExecutingAssembly();
        var resourceName = "MyNamespace.Fonts.CustomFont.ttf";
        Stream fontStream = assembly.GetManifestResourceStream(resourceName);
        
        MemoryStream memoryStream = new MemoryStream();
        fontStream.CopyTo(memoryStream);
        fontStream.Close();
        
        args.AlternateFontStream = memoryStream;
    }
}
```

---

## Fallback Fonts

Use fallback fonts for missing glyphs in specific script types or Unicode ranges during Excel-to-PDF conversion.

### Minimal Code
```csharp
application.FallbackFonts.InitializeDefault();
// or add specific fallback fonts for script types
application.FallbackFonts.Add(ScriptType.Arabic, "Arial, Times New Roman");
application.FallbackFonts.Add(ScriptType.Hebrew, "Arial, Courier New");
application.FallbackFonts.Add(ScriptType.Chinese, "DengXian, MingLiU");
application.FallbackFonts.Add(ScriptType.Japanese, "Yu Mincho, MS Mincho");
```

### Placeholders
- `ScriptType.Arabic`, `ScriptType.Hebrew` → Replace with desired `ScriptType`
- Font names → Replace with `"{font-names}"` (comma-separated)

### Initialize Default Fallback Fonts

The following code example demonstrates how to initialize default fallback fonts while converting an Excel document to PDF. The `InitializeDefault` API sets the default fallback fonts for specific script types like Arabic, Hebrew, Chinese, Japanese, etc.

```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

    // Initialize XlsIORenderer
    application.XlsIORenderer = new XlsIORenderer();

    // Initialize fallback fonts with default values
    application.FallbackFonts.InitializeDefault();

    // Initialize XlsIO renderer for conversion
    XlsIORenderer renderer = new XlsIORenderer();

    // Convert Excel document into PDF document 
    PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

    // Save the converted PDF document 
    using (FileStream stream = new FileStream("Sample.pdf", FileMode.Create))
        pdfDocument.Save(stream);

    workbook.Close();
}
```

### Fallback Fonts Based on Script Type

The following code example demonstrates how to add fallback fonts based on script types (Arabic, Hebrew, Thai, Korean, etc.). XlsIO considers these internally when converting an Excel document to PDF.

```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

    // Initialize XlsIORenderer
    application.XlsIORenderer = new XlsIORenderer();

    // Initialize default fallback fonts first
    application.FallbackFonts.InitializeDefault();

    // Add or override fallback fonts for specific script types
    application.FallbackFonts.Add(ScriptType.Arabic, "Arial, Times New Roman");
    application.FallbackFonts.Add(ScriptType.Hebrew, "Arial, Courier New");
    application.FallbackFonts.Add(ScriptType.Thai, "Tahoma, Microsoft Sans Serif");
    application.FallbackFonts.Add(ScriptType.Korean, "Malgun Gothic, Batang");
    application.FallbackFonts.Add(ScriptType.Chinese, "DengXian, MingLiU");
    application.FallbackFonts.Add(ScriptType.Japanese, "Yu Mincho, MS Mincho");
    application.FallbackFonts.Add(ScriptType.Hindi, "Mangal, Utsaah");

    // Initialize XlsIO renderer for conversion
    XlsIORenderer renderer = new XlsIORenderer();

    // Convert Excel document into PDF document 
    PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

    // Save the converted PDF document
    using (FileStream stream = new FileStream("Sample.pdf", FileMode.Create))
        pdfDocument.Save(stream);

    workbook.Close();
}
```

### Fallback Fonts for Range of Unicode Text

Users can set fallback fonts for specific Unicode range of text. This is useful for defining exact Unicode ranges that require specific fonts.

```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

    // Initialize XlsIORenderer
    application.XlsIORenderer = new XlsIORenderer();

    // Initialize default fallback fonts first
    application.FallbackFonts.InitializeDefault();

    // Add fallback fonts for specific Unicode ranges
    application.FallbackFonts.Add(new FallbackFont(0x0600, 0x06ff, "Arial"));              // Arabic
    application.FallbackFonts.Add(new FallbackFont(0x0590, 0x05ff, "Times New Roman"));    // Hebrew
    application.FallbackFonts.Add(new FallbackFont(0x0E00, 0x0E7F, "Tahoma"));             // Thai
    application.FallbackFonts.Add(new FallbackFont(0xAC00, 0xD7A3, "Malgun Gothic"));      // Korean
    application.FallbackFonts.Add(new FallbackFont(0x4E00, 0x9FFF, "DengXian"));           // Chinese

    // Initialize XlsIO renderer for conversion
    XlsIORenderer renderer = new XlsIORenderer();

    // Convert Excel document into PDF document 
    PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

    // Save the converted PDF document
    using (FileStream stream = new FileStream("Sample.pdf", FileMode.Create))
        pdfDocument.Save(stream);

    workbook.Close();
}
```

### Modify Existing Fallback Fonts

The following code example demonstrates how to modify or customize existing fallback fonts after initialization.

```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

    // Initialize XlsIORenderer
    application.XlsIORenderer = new XlsIORenderer();

    // Initialize default fallback fonts
    application.FallbackFonts.InitializeDefault();

    // Modify existing fallback fonts
    FallbackFonts fallbackFonts = application.FallbackFonts;
    foreach (FallbackFont fallbackFont in fallbackFonts)
    {
        // Customize a default fallback font name for specific scripts
        if (fallbackFont.ScriptType == ScriptType.Hebrew)
            fallbackFont.FontNames = "David";
        else if (fallbackFont.ScriptType == ScriptType.Arabic)
            fallbackFont.FontNames = "Arabic Typesetting";
    }

    // Initialize XlsIO renderer for conversion
    XlsIORenderer renderer = new XlsIORenderer();

    // Convert Excel document into PDF document 
    PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

    // Save the PDF document 
    using (FileStream stream = new FileStream("Sample.pdf", FileMode.Create))
        pdfDocument.Save(stream);

    workbook.Close();
}
```

### Supported Script Types and Unicode Ranges

The following table illustrates the supported script types by the .NET Excel library (XlsIO) in Excel to PDF conversion:

| Script Type | Unicode Range | Recommended Fonts |
|---|---|---|
| Arabic | 0x0600-0x06ff, 0x0750-0x077f, 0x08a0-0x08ff, 0xfb50-0xfdff, 0xfe70-0xfeff | Arial, Times New Roman, Microsoft Uighur |
| Hebrew | 0x0590-0x05ff, 0xfb1d-0xfb4f | Arial, Times New Roman, David |
| Hindi | 0x0900-0x097f, 0xa8e0-0xa8ff, 0x1cd0-0x1cff | Mangal, Utsaah |
| Chinese | 0x4e00-0x9fff, 0x3400-0x4dbf, 0xd840-0xd869, 0xdc00-0xdedf, 0xa960-0xa97f, 0xff00-0xffef, 0x3000-0x303f | DengXian, MingLiU, MS Gothic |
| Japanese | 0x30a0-0x30ff, 0x3040-0x309f | Yu Mincho, MS Mincho |
| Thai | 0x0e00-0x0e7f | Tahoma, Microsoft Sans Serif |
| Korean | 0xac00-0xd7a3, 0x1100-0x11ff, 0x3130-0x318f, 0xa960-0xa97f, 0xd7b0-0xd7ff | Malgun Gothic, Batang |

---

## Supported Elements

The Excel to PDF conversion supports the following elements:

- Styles
- Rich-text formatting
- Headers and footers
- Images
- Picture recolor (Black and white, Color change, DuoTone, Gray scale)
- Text boxes
- Hyperlinks
- Document properties
- Table styles
- Text rotations
- Excel page setup options
- Unicode
- Print titles
- Page breaks
- Print area
- Print order
- 2D charts
- 3D charts
- AutoShapes
- Group shapes
- Conditional formats
- Pivot tables
- Comments
- Form controls (Check box, Combo box, Option button)
- Linear and Radial Gradient fill (Cells, Shapes)

---

## Reference Links

- [Syncfusion XlsIO Documentation](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-conversion)
- [Excel to PDF Conversion Settings](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-converter-settings)
- [XlsIORenderer Documentation](https://help.syncfusion.com/document-processing/excel/working-with-xlsiorenderer)
- [Syncfusion XlsIO Examples Repository](https://github.com/SyncfusionExamples/XlsIO-Examples)
- Custom font registration: `references/custom-fonts.md`
