# Find All and Replace Operations - Advanced Search and Replace

> Advanced find and replace operations — find by type (text, numbers, formulas, values, comments), use case-sensitive matching, entire cell matching, replace with various data types, and replace in entire workbooks using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Find All Text

### Minimal Code
```csharp
IRange[] textCells = worksheet.FindAll("Gill", ExcelFindType.Text);
foreach (IRange cell in textCells)
{
    Console.WriteLine(cell.Address);
}
```

### Find Text with Options
```csharp
IRange[] cells = worksheet.FindAll("Pen Set", ExcelFindType.Text, ExcelFindOptions.MatchCase);
```

### Placeholders
- `"Gill"` → Replace with `"{search-text}"`
- `ExcelFindType.Text` → Keep for text search
- `ExcelFindOptions.MatchCase` → Replace with `"{find-options}"` or omit for default

---

## Find All Numbers

### Minimal Code
```csharp
IRange[] numberCells = worksheet.FindAll(700, ExcelFindType.Number);
foreach (IRange cell in numberCells)
{
    Console.WriteLine($"{cell.Address}: {cell.Value}");
}
```

### Find Numeric Values
```csharp
IRange[] results = worksheet.FindAll(99.99, ExcelFindType.Number);
```

### Placeholders
- `700` → Replace with `{numeric-value}` (integer or decimal)
- `ExcelFindType.Number` → Keep for numeric search

---

## Find All Formulas

### Minimal Code
```csharp
IRange[] formulaCells = worksheet.FindAll("=SUM(F10:F11)", ExcelFindType.Formula);
foreach (IRange cell in formulaCells)
{
    Console.WriteLine($"Formula: {cell.Formula}");
}
```

### Find Formula Patterns
```csharp
IRange[] sumFormulas = worksheet.FindAll("SUM", ExcelFindType.Formula);
```

### Placeholders
- `"=SUM(F10:F11)"` → Replace with `"{formula-pattern}"`
- `ExcelFindType.Formula` → Keep for formula search

---

## Find All Values

### Minimal Code
```csharp
IRange[] valueCells = worksheet.FindAll("41", ExcelFindType.Values);
foreach (IRange cell in valueCells)
{
    Console.WriteLine($"Value: {cell.Value}");
}
```

### Find Calculated Values
```csharp
IRange[] results = worksheet.FindAll("1000", ExcelFindType.Values);
```

### Placeholders
- `"41"` → Replace with `"{search-value}"` (searches text, numbers, calculated values)
- `ExcelFindType.Values` → Keep for value search

---

## Find All Comments

### Minimal Code
```csharp
IRange[] commentCells = worksheet.FindAll("Note", ExcelFindType.Comments);
foreach (IRange cell in commentCells)
{
    Console.WriteLine($"Comment: {cell.Comment.Text}");
}
```

### Find Comment Text
```csharp
IRange[] cells = worksheet.FindAll("TODO", ExcelFindType.Comments);
```

### Placeholders
- `"Note"` → Replace with `"{comment-text}"`
- `ExcelFindType.Comments` → Keep for comment search

---

## Find All with Case Matching

### Minimal Code
```csharp
IRange[] caseSensitiveCells = worksheet.FindAll("Pen Set", ExcelFindType.Text, ExcelFindOptions.MatchCase);
foreach (IRange cell in caseSensitiveCells)
{
    cell.CellStyle.Color = System.Drawing.Color.Yellow;
}
```

### Find with Multiple Options
```csharp
IRange[] cells = worksheet.FindAll("Product", ExcelFindType.Text, 
    ExcelFindOptions.MatchCase | ExcelFindOptions.MatchEntireCellContent);
```

### Placeholders
- `ExcelFindOptions.MatchCase` → Case-sensitive matching
- `ExcelFindOptions.MatchEntireCellContent` → Entire cell must match
- Use `|` to combine multiple options

---

## Find All with Entire Cell Content Matching

### Minimal Code
```csharp
IRange[] exactCells = worksheet.FindAll("5", ExcelFindType.Text, ExcelFindOptions.MatchEntireCellContent);
foreach (IRange cell in exactCells)
{
    Console.WriteLine(cell.Text);
}
```

### Exclude Partial Matches
```csharp
// Finds only cells with exactly "Complete", not "Incomplete"
IRange[] cells = worksheet.FindAll("Complete", ExcelFindType.Text, ExcelFindOptions.MatchEntireCellContent);
```

### Placeholders
- `"5"` → Replace with `"{exact-text}"`
- `ExcelFindOptions.MatchEntireCellContent` → Keep to match entire cell only

---

## Replace Text Simple

### Minimal Code
```csharp
worksheet.Replace("Wilson", "William");
```

### Replace Text in Worksheet
```csharp
worksheet.Replace("OldValue", "NewValue");
```

### Placeholders
- `"Wilson"` → Replace with `"{search-text}"`
- `"William"` → Replace with `"{replacement-text}"`

---

## Replace Text with Options

### Minimal Code
```csharp
worksheet.Replace("4.99", "4.90", ExcelFindOptions.MatchCase);
```

### Replace with Case Sensitivity
```csharp
worksheet.Replace("ERROR", "CORRECTED", ExcelFindOptions.MatchCase);
```

### Placeholders
- `ExcelFindOptions.MatchCase` → Replace with `"{find-options}"`
- Other options: `ExcelFindOptions.MatchEntireCellContent`

---

## Replace with Entire Cell Content Matching

### Minimal Code
```csharp
worksheet.Replace("Pen Set", "Pen", ExcelFindOptions.MatchEntireCellContent);
```

### Replace Only Exact Matches
```csharp
worksheet.Replace("Completed", "Done", ExcelFindOptions.MatchEntireCellContent);
```

### Placeholders
- `"Pen Set"` → Replace with `"{exact-search-text}"`
- `"Pen"` → Replace with `"{replacement-text}"`

---

## Replace with DateTime Value

### Minimal Code
```csharp
worksheet.Replace("DateValue", DateTime.Now);
```

### Replace Text with Current Date
```csharp
worksheet.Replace("TODAY", DateTime.Now);
```

### Placeholders
- `"DateValue"` → Replace with `"{placeholder-text}"`
- `DateTime.Now` → Replace with `{datetime-value}`

---

## Replace with Array

### Minimal Code
```csharp
worksheet.Replace("Central", new string[] { "Central", "East" }, true);
```

### Replace with Multiple Values
```csharp
worksheet.Replace("Region", new string[] { "North", "South", "East", "West" }, false);
```

### Placeholders
- `"Central"` → Replace with `"{search-text}"`
- `new string[] { ... }` → Replace with array of replacement values
- `true` → Replace with `{vertical}` (true = vertical arrangement, false = horizontal)

---

## Replace in Entire Workbook

### Minimal Code
```csharp
workbook.Replace("2023", "2024");
```

### Replace Across All Sheets
```csharp
workbook.Replace("OLD_TEXT", "NEW_TEXT");
```

### Placeholders
- `"2023"` → Replace with `"{search-text}"`
- `"2024"` → Replace with `"{replacement-text}"`

---

## Replace in Workbook with Options

### Minimal Code
```csharp
workbook.Replace("ERROR", "CORRECTED", ExcelFindOptions.MatchCase);
```

### Replace Across Workbook with Case Sensitivity
```csharp
workbook.Replace("Draft", "Final", ExcelFindOptions.MatchCase);
```

### Placeholders
- `ExcelFindOptions.MatchCase` → Replace with `"{find-options}"`

---

## Find All and Highlight Results

### Minimal Code
```csharp
IRange[] textCells = worksheet.FindAll("Gill", ExcelFindType.Text);
foreach (IRange cell in textCells)
{
    cell.CellStyle.Color = Color.FromArgb(255, 255, 0, 0);
}
```

### Find and Apply Formatting
```csharp
IRange[] cells = worksheet.FindAll("Important", ExcelFindType.Text);
foreach (IRange cell in cells)
{
    cell.CellStyle.Font.Bold = true;
    cell.CellStyle.Color = Color.FromArgb(255, 255, 255, 0);
}
```

### Placeholders
- `worksheet.FindAll()` → Keep to retrieve cells
- `cell.CellStyle.Color = System.Drawing.Color.Yellow` → Format results

---

## Find All Different Types Comparison

### Minimal Code
```csharp
IRange[] textCells = worksheet.FindAll("value", ExcelFindType.Text);
IRange[] numberCells = worksheet.FindAll(100, ExcelFindType.Number);
IRange[] formulaCells = worksheet.FindAll("SUM", ExcelFindType.Formula);
IRange[] valueCells = worksheet.FindAll("200", ExcelFindType.Values);
IRange[] commentCells = worksheet.FindAll("Note", ExcelFindType.Comments);
```

### Track Different Result Types
```csharp
Console.WriteLine($"Text matches: {textCells.Length}");
Console.WriteLine($"Number matches: {numberCells.Length}");
Console.WriteLine($"Formula matches: {formulaCells.Length}");
Console.WriteLine($"Value matches: {valueCells.Length}");
Console.WriteLine($"Comment matches: {commentCells.Length}");
```

### Placeholders
- `ExcelFindType.Text` → Text content
- `ExcelFindType.Number` → Numeric values
- `ExcelFindType.Formula` → Formula strings
- `ExcelFindType.Values` → Calculated values, text, numbers
- `ExcelFindType.Comments` → Cell comments

---

## End-to-End Find and Replace Example

### Minimal Code
```csharp
// Find all text occurrences
IRange[] found = worksheet.FindAll("OldData", ExcelFindType.Text);

// Replace entire worksheet
worksheet.Replace("OldData", "NewData", ExcelFindOptions.MatchCase);

// Find in workbook
workbook.Replace("Status", "State");
```

### Full Workflow
```csharp
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("input.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    // Find all text
    IRange[] textCells = worksheet.FindAll("Gill", ExcelFindType.Text);
    Console.WriteLine($"Found {textCells.Length} text cells");

    // Find all numbers
    IRange[] numberCells = worksheet.FindAll(700, ExcelFindType.Number);
    Console.WriteLine($"Found {numberCells.Length} numbers");

    // Replace in worksheet
    worksheet.Replace("Wilson", "William");

    // Replace in workbook
    workbook.Replace("2023", "2024");

    workbook.SaveAs("output.xlsx");
    workbook.Close();
}
```

### Placeholders
- `"OldData"` → Replace with actual search terms
- `ExcelFindType.*` → Choose appropriate search type
- `ExcelFindOptions.*` → Add options as needed
