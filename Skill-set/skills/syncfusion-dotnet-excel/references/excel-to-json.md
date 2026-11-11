# Save Excel Workbook or Worksheet to JSON Using XlsIO

> Covers saving an Excel workbook or worksheet to JSON format using Syncfusion XlsIO (.NET).
> Includes saving with schema, saving without schema, saving a specific worksheet to JSON,
> and saving JSON output to a file or stream.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.IO`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Save Workbook to JSON with Schema

### Minimal Code
```csharp
using (FileStream jsonStream = new FileStream("output/workbook-schema.json", FileMode.Create))
    workbook.SaveAsJson(jsonStream, true);
```

### Placeholders
- `"output/workbook-schema.json"` → Replace with `"{output-path}"`
- `true` → Replace with `"{include-schema}"`

### Save Workbook to JSON with Schema (Full)
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

using (FileStream jsonStream = new FileStream("output/workbook-schema.json", FileMode.Create))
    workbook.SaveAsJson(jsonStream, true);

workbook.Close();
excelEngine.Dispose();
```

---

## Save Workbook to JSON without Schema

### Minimal Code
```csharp
using (FileStream jsonStream = new FileStream("output/workbook.json", FileMode.Create))
    workbook.SaveAsJson(jsonStream, false);
```

### Save Workbook to JSON without Schema (Full)
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

using (FileStream jsonStream = new FileStream("output/workbook.json", FileMode.Create))
    workbook.SaveAsJson(jsonStream, false);

workbook.Close();
excelEngine.Dispose();
```

---

## Save a Specific Worksheet to JSON with Schema

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
using (FileStream jsonStream = new FileStream("output/sheet-schema.json", FileMode.Create))
    worksheet.SaveAsJson(jsonStream, true);
```

### Save Worksheet by Index to JSON with Schema
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

using (FileStream jsonStream = new FileStream("output/sheet-schema.json", FileMode.Create))
    worksheet.SaveAsJson(jsonStream, true);

workbook.Close();
excelEngine.Dispose();
```

### Save Worksheet by Name to JSON with Schema
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IWorksheet worksheet = workbook.Worksheets["SalesData"];

using (FileStream jsonStream = new FileStream("output/SalesData-schema.json", FileMode.Create))
    worksheet.SaveAsJson(jsonStream, true);

workbook.Close();
excelEngine.Dispose();
```

---

## Save a Specific Worksheet to JSON without Schema

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
using (FileStream jsonStream = new FileStream("output/sheet.json", FileMode.Create))
    worksheet.SaveAsJson(jsonStream, false);
```

### Save Worksheet to JSON without Schema (Full)
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IWorksheet worksheet = workbook.Worksheets[0];

using (FileStream jsonStream = new FileStream("output/sheet.json", FileMode.Create))
    worksheet.SaveAsJson(jsonStream, false);

workbook.Close();
excelEngine.Dispose();
```

---

## Save JSON to MemoryStream

### Minimal Code
```csharp
MemoryStream jsonStream = new MemoryStream();
workbook.SaveAsJson(jsonStream, true);
```

### Save to MemoryStream and Write to File
```csharp
using Syncfusion.XlsIO;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Open("input.xlsx");

MemoryStream jsonStream = new MemoryStream();
workbook.SaveAsJson(jsonStream, true);

jsonStream.Position = 0;
using (FileStream fs = new FileStream("output/workbook-schema.json", FileMode.Create))
    jsonStream.CopyTo(fs);

workbook.Close();
excelEngine.Dispose();
```

---

## Full End-to-End Example

```csharp
using System;
using System.IO;
using Syncfusion.XlsIO;

class Program
{
    static void Main()
    {
        Directory.CreateDirectory("output");

        // Example 1: Save Workbook to JSON with Schema
        Example1_SaveWorkbookToJsonWithSchema();

        // Example 2: Save Workbook to JSON without Schema
        Example2_SaveWorkbookToJsonWithoutSchema();

        // Example 3: Save Worksheet by Index to JSON with Schema
        Example3_SaveWorksheetByIndexToJsonWithSchema();

        // Example 4: Save Worksheet by Name to JSON with Schema
        Example4_SaveWorksheetByNameToJsonWithSchema();

        // Example 5: Save Worksheet to JSON without Schema
        Example5_SaveWorksheetToJsonWithoutSchema();

        // Example 6: Save to MemoryStream and Write to File
        Example6_SaveToMemoryStreamAndWriteToFile();

        // Example 7: Full End-to-End Example
        Example7_FullEndToEndExample();

        Console.WriteLine("\nAll examples completed successfully!");
    }

    // Example 1: Save Workbook to JSON with Schema
    static void Example1_SaveWorkbookToJsonWithSchema()
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Xlsx;

            // Create a sample workbook
            IWorkbook workbook = application.Workbooks.Create(1);
            IWorksheet worksheet = workbook.Worksheets[0];
            worksheet["A1"].Text = "Name";
            worksheet["B1"].Text = "Age";
            worksheet["A2"].Text = "John";
            worksheet["B2"].Number = 30;

            using (FileStream jsonStream = new FileStream("output/workbook-schema.json", FileMode.Create))
                workbook.SaveAsJson(jsonStream, true);

            workbook.Close();
            Console.WriteLine("Example 1: Saved workbook to JSON with schema");
        }
    }

    // Example 2: Save Workbook to JSON without Schema
    static void Example2_SaveWorkbookToJsonWithoutSchema()
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Xlsx;

            IWorkbook workbook = application.Workbooks.Create(1);
            IWorksheet worksheet = workbook.Worksheets[0];
            worksheet["A1"].Text = "Name";
            worksheet["B1"].Text = "Age";
            worksheet["A2"].Text = "Jane";
            worksheet["B2"].Number = 28;

            using (FileStream jsonStream = new FileStream("output/workbook.json", FileMode.Create))
                workbook.SaveAsJson(jsonStream, false);

            workbook.Close();
            Console.WriteLine("Example 2: Saved workbook to JSON without schema");
        }
    }

    // Example 3: Save Worksheet by Index to JSON with Schema
    static void Example3_SaveWorksheetByIndexToJsonWithSchema()
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Xlsx;

            IWorkbook workbook = application.Workbooks.Create(1);
            IWorksheet worksheet = workbook.Worksheets[0];
            worksheet["A1"].Text = "Product";
            worksheet["B1"].Text = "Price";
            worksheet["A2"].Text = "Widget";
            worksheet["B2"].Number = 19.99;

            using (FileStream jsonStream = new FileStream("output/sheet-schema.json", FileMode.Create))
                workbook.SaveAsJson(jsonStream, true);

            workbook.Close();
            Console.WriteLine("Example 3: Saved worksheet by index to JSON with schema");
        }
    }

    // Example 4: Save Worksheet by Name to JSON with Schema
    static void Example4_SaveWorksheetByNameToJsonWithSchema()
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Xlsx;

            IWorkbook workbook = application.Workbooks.Create(1);
            IWorksheet worksheet = workbook.Worksheets[0];
            worksheet.Name = "SalesData";
            worksheet["A1"].Text = "Region";
            worksheet["B1"].Text = "Sales";
            worksheet["A2"].Text = "North";
            worksheet["B2"].Number = 15000;

            IWorksheet namedSheet = workbook.Worksheets["SalesData"];

            using (FileStream jsonStream = new FileStream("output/SalesData-schema.json", FileMode.Create))
                workbook.SaveAsJson(jsonStream, true);

            workbook.Close();
            Console.WriteLine("Example 4: Saved worksheet by name to JSON with schema");
        }
    }

    // Example 5: Save Worksheet to JSON without Schema
    static void Example5_SaveWorksheetToJsonWithoutSchema()
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Xlsx;

            IWorkbook workbook = application.Workbooks.Create(1);
            IWorksheet worksheet = workbook.Worksheets[0];
            worksheet["A1"].Text = "Category";
            worksheet["B1"].Text = "Count";
            worksheet["A2"].Text = "Electronics";
            worksheet["B2"].Number = 42;

            using (FileStream jsonStream = new FileStream("output/sheet.json", FileMode.Create))
                workbook.SaveAsJson(jsonStream, false);

            workbook.Close();
            Console.WriteLine("Example 5: Saved worksheet to JSON without schema");
        }
    }

    // Example 6: Save to MemoryStream and Write to File
    static void Example6_SaveToMemoryStreamAndWriteToFile()
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Xlsx;

            IWorkbook workbook = application.Workbooks.Create(1);
            IWorksheet worksheet = workbook.Worksheets[0];
            worksheet["A1"].Text = "Data";
            worksheet["B1"].Text = "Value";
            worksheet["A2"].Text = "Test";
            worksheet["B2"].Number = 100;

            MemoryStream jsonStream = new MemoryStream();
            workbook.SaveAsJson(jsonStream, true);

            jsonStream.Position = 0;
            using (FileStream fs = new FileStream("output/workbook-from-memory.json", FileMode.Create))
                jsonStream.CopyTo(fs);

            workbook.Close();
            Console.WriteLine("Example 6: Saved to MemoryStream and wrote to file");
        }
    }

    // Example 7: Full End-to-End Example
    static void Example7_FullEndToEndExample()
    {
        using (ExcelEngine excelEngine = new ExcelEngine())
        {
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Xlsx;

            // Build a sample workbook
            IWorkbook workbook = application.Workbooks.Create(1);
            IWorksheet worksheet = workbook.Worksheets[0];
            worksheet.Name = "SalesData";

            worksheet["A1"].Text = "Region";
            worksheet["B1"].Text = "Product";
            worksheet["C1"].Text = "Q1 Sales";
            worksheet["D1"].Text = "Q2 Sales";

            worksheet["A2"].Text = "North"; worksheet["B2"].Text = "Widget A"; worksheet["C2"].Number = 18500; worksheet["D2"].Number = 21000;
            worksheet["A3"].Text = "South"; worksheet["B3"].Text = "Widget B"; worksheet["C3"].Number = 12300; worksheet["D3"].Number = 14700;
            worksheet["A4"].Text = "East"; worksheet["B4"].Text = "Widget C"; worksheet["C4"].Number = 22100; worksheet["D4"].Number = 19500;
            worksheet["A5"].Text = "West"; worksheet["B5"].Text = "Widget D"; worksheet["C5"].Number = 9800; worksheet["D5"].Number = 11200;
            worksheet["A6"].Text = "Central"; worksheet["B6"].Text = "Widget E"; worksheet["C6"].Number = 15600; worksheet["D6"].Number = 17300;

            // Save workbook to JSON with schema
            using (FileStream jsonWithSchema = new FileStream("output/end-to-end-schema.json", FileMode.Create))
                workbook.SaveAsJson(jsonWithSchema, true);
            Console.WriteLine("Saved: output/end-to-end-schema.json");

            // Save workbook to JSON without schema
            using (FileStream jsonNoSchema = new FileStream("output/end-to-end.json", FileMode.Create))
                workbook.SaveAsJson(jsonNoSchema, false);
            Console.WriteLine("Saved: output/end-to-end.json");

            // Save workbook (containing the worksheet) to JSON with schema
            using (FileStream sheetWithSchema = new FileStream("output/SalesData-with-schema.json", FileMode.Create))
                workbook.SaveAsJson(sheetWithSchema, true);
            Console.WriteLine("Saved: output/SalesData-with-schema.json");

            // Save workbook (containing the worksheet) to JSON without schema
            using (FileStream sheetNoSchema = new FileStream("output/SalesData-no-schema.json", FileMode.Create))
                workbook.SaveAsJson(sheetNoSchema, false);
            Console.WriteLine("Saved: output/SalesData-no-schema.json");

            workbook.Close();
            Console.WriteLine("Example 7: Full end-to-end example completed");
        }
    }
}
```
