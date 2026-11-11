# Configure Page Setup and Print Settings in Excel Worksheets

> Covers configuring worksheet page setup using Syncfusion XlsIO (.NET).
> Includes paper size, page orientation, margins, center on page, print area,
> print titles (repeat rows/columns), fit to page, scaling, page order,
> print gridlines, print row/column headings, and headers/footers.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** `System.Drawing`

---

## Paper Size

### Minimal Code
```csharp
worksheet.PageSetup.PaperSize = ExcelPaperSize.PaperA4;
```

### Placeholders
- `ExcelPaperSize.PaperA4` → Replace with `"{paper-size}"`

### Common Paper Sizes
```csharp
IPageSetup pageSetup = worksheet.PageSetup;

pageSetup.PaperSize = ExcelPaperSize.PaperA4;         // A4 (210 x 297 mm)
pageSetup.PaperSize = ExcelPaperSize.PaperLetter;     // US Letter (8.5 x 11 in)
pageSetup.PaperSize = ExcelPaperSize.PaperLegal;      // US Legal (8.5 x 14 in)
pageSetup.PaperSize = ExcelPaperSize.PaperA3;         // A3 (297 x 420 mm)
pageSetup.PaperSize = ExcelPaperSize.PaperTabloid;    // Tabloid (11 x 17 in)
```

---

## Page Orientation

### Minimal Code
```csharp
worksheet.PageSetup.Orientation = ExcelPageOrientation.Landscape;
```

### Placeholders
- `ExcelPageOrientation.Landscape` → Replace with `"{page-orientation}"`

### Portrait and Landscape
```csharp
IPageSetup pageSetup = worksheet.PageSetup;

pageSetup.Orientation = ExcelPageOrientation.Landscape; // Horizontal
pageSetup.Orientation = ExcelPageOrientation.Portrait;  // Vertical (default)
```

---

## Page Margins

### Minimal Code
```csharp
IPageSetup pageSetup = worksheet.PageSetup;
pageSetup.TopMargin    = 0.75;
pageSetup.BottomMargin = 0.75;
pageSetup.LeftMargin   = 0.5;
pageSetup.RightMargin  = 0.5;
```

### All Margin Properties (in inches)
```csharp
IPageSetup pageSetup = worksheet.PageSetup;

pageSetup.TopMargin    = 0.75;  // Top margin in inches
pageSetup.BottomMargin = 0.75;  // Bottom margin in inches
pageSetup.LeftMargin   = 0.5;   // Left margin in inches
pageSetup.RightMargin  = 0.5;   // Right margin in inches
pageSetup.HeaderMargin = 0.3;   // Distance from top edge to header
pageSetup.FooterMargin = 0.3;   // Distance from bottom edge to footer
```

---

## Center on Page

### Minimal Code
```csharp
worksheet.PageSetup.CenterHorizontally = true;
worksheet.PageSetup.CenterVertically   = true;
```

### Center Horizontally and Vertically
```csharp
IPageSetup pageSetup = worksheet.PageSetup;
pageSetup.CenterHorizontally = true;  // Center content between left and right margins
pageSetup.CenterVertically   = true;  // Center content between top and bottom margins
```

---

## Print Area

### Minimal Code
```csharp
worksheet.PageSetup.PrintArea = "A1:H30";
```

### Set and Clear Print Area
```csharp
// Set a specific print area — only this range will be printed/exported
worksheet.PageSetup.PrintArea = "A1:F50";

// Set multiple ranges (separated by comma)
worksheet.PageSetup.PrintArea = "A1:F10,A20:F30";

// Clear the print area (print the entire used range)
worksheet.PageSetup.PrintArea = "";
```

---

## Print Titles — Repeat Rows and Columns

### Minimal Code
```csharp
// Repeat row 1 on every printed page
worksheet.PageSetup.PrintTitleRows = "$1:$1";

// Repeat column A on every printed page
worksheet.PageSetup.PrintTitleColumns = "$A:$A";
```

### Repeat Multiple Rows and Columns
```csharp
IPageSetup pageSetup = worksheet.PageSetup;

// Repeat rows 1 and 2 at the top of every page
pageSetup.PrintTitleRows = "$1:$2";

// Repeat columns A and B on the left of every page
pageSetup.PrintTitleColumns = "$A:$B";
```

---

## Fit to Page

### Minimal Code
```csharp
worksheet.PageSetup.IsFitToPage  = true;
worksheet.PageSetup.FitToPagesWide = 1;
worksheet.PageSetup.FitToPagesTall = 1;
```

### Fit All Columns on One Page (Rows Wrap)
```csharp
IPageSetup pageSetup = worksheet.PageSetup;
pageSetup.IsFitToPage        = true;
pageSetup.FitToPagesWide   = 1;  // Force all columns onto 1 page wide
pageSetup.FitToPagesTall   = 0;  // 0 = no limit on height (rows wrap naturally)
```

### Fit Entire Sheet on One Page
```csharp
IPageSetup pageSetup = worksheet.PageSetup;
pageSetup.IsFitToPage        = true;
pageSetup.FitToPagesWide   = 1;
pageSetup.FitToPagesTall   = 1;
```

### Fit All Rows on One Page (Columns Wrap)
```csharp
IPageSetup pageSetup = worksheet.PageSetup;
pageSetup.IsFitToPage        = true;
pageSetup.FitToPagesWide   = 0;  // 0 = no limit on width
pageSetup.FitToPagesTall   = 1;  // Force all rows onto 1 page tall
```

---

## Print Scaling

### Minimal Code
```csharp
worksheet.PageSetup.FitToPage = false;
worksheet.PageSetup.Scale     = 75; // 75%
```

### Scale to a Percentage
```csharp
IPageSetup pageSetup = worksheet.PageSetup;

// Disable FitToPage before using Scale — they are mutually exclusive
pageSetup.FitToPage = false;
pageSetup.Scale     = 80; // Print at 80% of normal size (10–400 valid range)
```

---

## Page Order

### Minimal Code
```csharp
worksheet.PageSetup.Order = ExcelOrder.DownThenOver;
```

### Down Then Over / Over Then Down
```csharp
IPageSetup pageSetup = worksheet.PageSetup;

pageSetup.Order = ExcelOrder.DownThenOver; // Print pages top-to-bottom, then left-to-right (default)
pageSetup.Order = ExcelOrder.OverThenDown; // Print pages left-to-right, then top-to-bottom
```

---

## Print Gridlines

### Minimal Code
```csharp
worksheet.PageSetup.PrintGridlines = true;
```

### Show Gridlines When Printing
```csharp
IPageSetup pageSetup = worksheet.PageSetup;
pageSetup.PrintGridlines = true;  // Print cell gridlines
// pageSetup.PrintGridlines = false; // Hide gridlines (default)
```

---

## Print Row and Column Headings

### Minimal Code
```csharp
worksheet.PageSetup.PrintHeadings = true;
```

### Show Row Numbers and Column Letters When Printing
```csharp
IPageSetup pageSetup = worksheet.PageSetup;
pageSetup.PrintHeadings = true;  // Print A, B, C… column letters and 1, 2, 3… row numbers
// pageSetup.PrintHeadings = false; // Hide headings (default)
```

---

## First Page Number

### Minimal Code
```csharp
worksheet.PageSetup.FirstPageNumber = 3;
```

### Set Custom Starting Page Number
```csharp
IPageSetup pageSetup = worksheet.PageSetup;
pageSetup.FirstPageNumber = 3; // First printed page is numbered 3
// Set to 1 (or leave default) to start from page 1
```

---

## Headers and Footers

### Minimal Code
```csharp
worksheet.PageSetup.CenterHeader = "Sales Report";
worksheet.PageSetup.CenterFooter = "Page &P of &N";
```

### Header and Footer Sections
```csharp
IPageSetup pageSetup = worksheet.PageSetup;

// Header sections: Left, Center, Right
pageSetup.LeftHeader   = "&D";              // Current date
pageSetup.CenterHeader = "Sales Report";    // Custom title
pageSetup.RightHeader  = "&T";              // Current time

// Footer sections
pageSetup.LeftFooter   = "&F";              // File name
pageSetup.CenterFooter = "Page &P of &N";  // Page number / total pages
pageSetup.RightFooter  = "Confidential";   // Custom text
```

### Header and Footer Format Codes
```csharp
// &P  — Current page number
// &N  — Total number of pages
// &D  — Current date
// &T  — Current time
// &F  — File name (workbook name)
// &A  — Worksheet (tab) name
// &B  — Bold on/off toggle
// &I  — Italic on/off toggle
// &U  — Underline on/off toggle
// &"FontName,Style" — Set font (e.g., &"Arial,Bold")
// &10 — Set font size to 10pt

pageSetup.CenterHeader = "&\"Arial,Bold\"&14Sales Report";  // Bold Arial 14pt title
pageSetup.CenterFooter = "&B Page &P of &N &B";              // Bold page numbers
```

### Different First Page Header/Footer
```csharp
IPageSetup pageSetup = worksheet.PageSetup;

pageSetup.DifferentFirstPage = true;

// First page — leave header/footer blank or set a different one
pageSetup.FirstPageHeader = "";
pageSetup.FirstPageFooter = "Confidential — Do Not Distribute";

// All other pages
pageSetup.CenterHeader = "Sales Report";
pageSetup.CenterFooter = "Page &P of &N";
```

### Different Odd and Even Page Headers/Footers
```csharp
IPageSetup pageSetup = worksheet.PageSetup;

pageSetup.OddAndEvenPagesHeaderFooter = true;

// Odd pages (right-hand pages)
pageSetup.OddHeader = "&CSales Report";
pageSetup.OddFooter = "&RPage &P";

// Even pages (left-hand pages)
pageSetup.EvenHeader = "&CSales Report";
pageSetup.EvenFooter = "&LPage &P";
```

---

## Full End-to-End Example

```csharp
using System;
using System.IO;
// For .NET Core / .NET 5+: use `using Syncfusion.Drawing;`
// For .NET Framework (Windows): use `using System.Drawing;`
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

Directory.CreateDirectory("output");

IWorkbook workbook   = application.Workbooks.Create(1);
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Name       = "SalesReport";

// Write header row
worksheet["A1"].Text = "Region";
worksheet["B1"].Text = "Product";
worksheet["C1"].Text = "Q1 Sales";
worksheet["D1"].Text = "Q2 Sales";
worksheet["E1"].Text = "Total";

IRange header = worksheet["A1:E1"];
header.CellStyle.Font.Bold  = true;
header.CellStyle.Font.Color = ExcelKnownColors.White;
header.CellStyle.Color      = Color.FromArgb(255, 31, 73, 125);

// Write data rows
string[] regions  = { "North", "South", "East", "West", "Central" };
string[] products = { "Widget A", "Widget B", "Widget C", "Widget D", "Widget E" };
int[]    q1       = { 18500, 12300, 22100, 9800, 15600 };
int[]    q2       = { 21000, 14700, 19500, 11200, 17300 };

for (int i = 0; i < 5; i++)
{
    int row = i + 2;
    worksheet[$"A{row}"].Text    = regions[i];
    worksheet[$"B{row}"].Text    = products[i];
    worksheet[$"C{row}"].Number  = q1[i];
    worksheet[$"D{row}"].Number  = q2[i];
    worksheet[$"E{row}"].Formula = $"=C{row}+D{row}";
}

worksheet["C2:E6"].NumberFormat = "$#,##0";

for (int col = 1; col <= 5; col++)
    worksheet.AutofitColumn(col);

// -----------------------------------------------------------
// Page Setup
// -----------------------------------------------------------
IPageSetup pageSetup = worksheet.PageSetup;

// Paper and orientation
pageSetup.PaperSize   = ExcelPaperSize.PaperA4;
pageSetup.Orientation = ExcelPageOrientation.Landscape;

// Margins (inches)
pageSetup.TopMargin    = 0.75;
pageSetup.BottomMargin = 0.75;
pageSetup.LeftMargin   = 0.5;
pageSetup.RightMargin  = 0.5;
pageSetup.HeaderMargin = 0.3;
pageSetup.FooterMargin = 0.3;

// Center on page
pageSetup.CenterHorizontally = true;
pageSetup.CenterVertically   = false;

// Print area — only export this range
pageSetup.PrintArea = "A1:E6";

// Repeat header row on every printed page
pageSetup.PrintTitleRows = "$1:$1";

// Fit all columns onto one page; rows wrap naturally
pageSetup.FitToPage      = true;
pageSetup.FitToPagesWide = 1;
pageSetup.FitToPagesTall = 0;

// Print gridlines and row/column headings
pageSetup.PrintGridlines = true;
pageSetup.PrintHeadings  = true;

// Page order
pageSetup.Order = ExcelPageOrder.DownThenOver;

// Header and footer
pageSetup.LeftHeader   = "&D";
pageSetup.CenterHeader = "&\"Calibri,Bold\"&12Sales Report";
pageSetup.RightHeader  = "&T";

pageSetup.LeftFooter   = "&F";
pageSetup.CenterFooter = "Page &P of &N";
pageSetup.RightFooter  = "Confidential";

// -----------------------------------------------------------
// Save
// -----------------------------------------------------------
workbook.SaveAs("output/sales-report-pagesetup.xlsx");
Console.WriteLine("Saved: output/sales-report-pagesetup.xlsx");

workbook.Close();
excelEngine.Dispose();
```
