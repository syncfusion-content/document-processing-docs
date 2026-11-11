# Set Cell Values, Formulas, and Access Cell Data in Excel

> Core cell value operations — writing and reading values (text, numbers, formulas, dates, booleans), accessing cell properties, working with ranges and collections, and using array formulas using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** `System.Drawing`

---

## Set Text

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].Text = "Hello World";
```

### With Range Notation
```csharp
// By cell name
sheet["B2"].Text = "Sample Text";

// By row/column index (1-based)
sheet[1, 1].Text = "Hello World";
```

### Placeholders
- `"Hello World"` → Replace with `"{cell-text}"`

---

## Set Number

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].Number = 1234.56;
```

### With Range Notation
```csharp
// Integer value
sheet["B2"].Number = 100;

// Decimal value
sheet[2, 3].Number = 99.99;
```

### Placeholders
- `1234.56` → Replace with `"{cell-number}"`

---

## Set Formula

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["C1"].Formula = "=A1+B1";
```

### Common Formulas
```csharp
// SUM
sheet["C1"].Formula = "=SUM(A1:A10)";

// AVERAGE
sheet["C2"].Formula = "=AVERAGE(B1:B10)";

// IF condition
sheet["C3"].Formula = "=IF(A1>100,\"High\",\"Low\")";

// VLOOKUP
sheet["C4"].Formula = "=VLOOKUP(A1,D1:E10,2,FALSE)";

// Arithmetic
sheet["C5"].Formula = "=A1*B1-D1";
```

### Placeholders
- `"=A1+B1"` → Replace with `"{formula}"`

### Read Calculated Value
```csharp
// Enable calculation before reading
sheet.EnableSheetCalculations();
double result = sheet["C1"].CalculatedValue != null
    ? double.Parse(sheet["C1"].CalculatedValue)
    : 0;
```

---

## Set DateTime

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].DateTime = new DateTime(2026, 3, 9);
```

### Date, Time, and DateTime
```csharp
// Date only
sheet["A1"].DateTime = DateTime.Today;

// Date and time
sheet["A2"].DateTime = DateTime.Now;

// Specific date
sheet["A3"].DateTime = new DateTime(2026, 1, 1, 9, 30, 0);

// Apply a display format so Excel renders it correctly
sheet["A1"].NumberFormat = "dd/MM/yyyy";
sheet["A2"].NumberFormat = "dd/MM/yyyy HH:mm:ss";
sheet["A3"].NumberFormat = "MM/dd/yyyy h:mm AM/PM";
```

### Placeholders
- `new DateTime(2026, 3, 9)` → Replace with `"{date-time}"`

---

## Set Boolean Value

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1"].Boolean = true;
```

### Get Boolean Value
```csharp
bool value = sheet["A1"].Boolean;
```

### Check if Cell Has Boolean
```csharp
if (sheet["A1"].HasBoolean)
{
    bool value = sheet["A1"].Boolean;
}
```

---

## Cell Address Properties

### Minimal Code - Get Cell Address
```csharp
IWorksheet sheet = workbook.Worksheets[0];
string address = sheet["A1"].Address;  // $A$1
string addressLocal = sheet["A1"].AddressLocal;  // A1
```

### Address Format Options
```csharp
IRange cell = sheet[3, 4];  // Row 3, Column 4 (cell D3)

// Standard address format (absolute reference)
string address = cell.Address;  // $D$3

// Global address (absolute reference)
string addressGlobal = cell.AddressGlobal;  // $D$3

// Local address (relative reference)
string addressLocal = cell.AddressLocal;  // D3

// R1C1 notation (absolute)
string addressR1C1 = cell.AddressR1C1;  // R3C4

// R1C1 notation (relative)
string addressR1C1Local = cell.AddressR1C1Local;  // R[3]C[4]
```

### Placeholders
- `{row}` → Replace with actual row number
- `{column}` → Replace with actual column number (1-based) or letter

---

## Access Range Cells and Columns Collection

### Minimal Code - Cells Collection
```csharp
IWorksheet sheet = workbook.Worksheets[0];
IRange range = sheet["A1:E5"];
IRange[] cells = range.Cells;  // All cells in range

foreach (IRange cell in cells)
{
    cell.Text = cell.AddressLocal;
}
```

### Columns Collection
```csharp
IRange range = sheet["A1:D10"];
IRange[] columns = range.Columns;  // All columns in range

// Bold all columns in range
foreach (IRange column in columns)
{
    column.CellStyle.Font.Bold = true;
}

// Alternate formatting
sheet["A1:E5"].Columns[0].CellStyle.Color = Color.LightGray;  // First column
sheet["A1:E5"].Columns[4].CellStyle.Color = Color.LightBlue;  // Last column
```

### Placeholders
- `{column-index}` → Replace with 0-based column index in the range
- `{formatting}` → Replace with desired cell formatting

---

## Count and End Properties

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
IRange range = sheet["A1:D10"];

int cellCount = range.Count;  // 40 cells (4 columns × 10 rows)
IRange lastCell = range.End;  // Get last cell in range
```

### Count and Position
```csharp
IRange range = sheet["A2:F20"];

// Total cells in range
int totalCells = range.Count;

// Find last cell
IRange endCell = range.End;
string endAddress = endCell.AddressLocal;

// Range dimensions
int rowCount = range.Rows.Count();
int colCount = range.Columns.Count();
```

### Placeholders
- `{range}` → Replace with actual range reference (e.g., "A1:D10")
- `{operations}` → Replace with desired cell operations

---

## Array Formulas

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
sheet["A1:D1"].FormulaArray = "{1,2,3,4}";
```

### Array Formula with Calculations
```csharp
// Create array formula
sheet["A1:A4"].FormulaArray = "=ROW(A1:A4)*10";

// Array formula referencing cells
sheet["B1:B5"].FormulaArray = "=A1:A5*2";

// Check if cell contains array formula
if (sheet["A1"].HasFormulaArray)
{
    string arrayFormula = sheet["A1"].Formula;
}
```

### Placeholders
- `{array-values}` → Replace with comma-separated values or formula logic
- `{multiplier}` → Replace with calculation factor
- `{cell-range}` → Replace with source range reference

---

## Rich Text Formatting

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
IRange cell = sheet["A1"];
cell.Text = "RichText";

// Format specific character range
IRichTextString richText = cell.RichText;
IFont redFont = workbook.CreateFont();
redFont.Color = ExcelKnownColors.Red;
redFont.Bold = true;

richText.SetFont(0, 3, redFont);  // Format first 3 characters
```

### Mixed Color and Style Formatting
```csharp
IRange cell = sheet["B2"];
cell.Text = "HelloWorld";
IRichTextString richText = cell.RichText;

// Blue "Hello"
IFont blueFont = workbook.CreateFont();
blueFont.Color = ExcelKnownColors.Blue;
richText.SetFont(0, 4, blueFont);

// Red "World"
IFont redFont = workbook.CreateFont();
redFont.Color = ExcelKnownColors.Red;
redFont.Bold = true;
richText.SetFont(5, 9, redFont);

// Check if cell has rich text
if (cell.HasRichText)
{
    IRichTextString text = cell.RichText;
}
```

### Placeholders
- `{start-char}` → Replace with starting character index
- `{end-char}` → Replace with ending character index
- `{color}` → Replace with ExcelKnownColors color value
- `{font-style}` → Replace with Bold, Italic, Underline, etc.

---

## Detect Cell Content Type

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];

if (sheet["A1"].HasNumber)
{
    double num = sheet["A1"].Number;
}

if (sheet["A2"].HasBoolean)
{
    bool val = sheet["A2"].Boolean;
}
```

### All Detection Properties
```csharp
IRange cell = sheet["A1"];

bool hasNumber = cell.HasNumber;           // Numeric value
bool hasBoolean = cell.HasBoolean;         // Boolean (true/false)
bool hasDateTime = cell.HasDateTime;       // Date/time value
bool hasFormula = cell.HasFormula;         // Regular formula
bool hasFormulaArray = cell.HasFormulaArray; // Array formula
bool hasExternalFormula = cell.HasExternalFormula; // External file reference
bool hasRichText = cell.HasRichText;       // Formatted text
bool hasDataValidation = cell.HasDataValidation; // Validation rule
```

### Type-Safe Value Extraction
```csharp
object cellValue = null;

if (cell.HasNumber)
    cellValue = cell.Number;
else if (cell.HasBoolean)
    cellValue = cell.Boolean;
else if (cell.HasDateTime)
    cellValue = cell.DateTime;
else if (cell.HasFormula)
    cellValue = cell.Formula;
else
    cellValue = cell.Text;
```

### Placeholders
- `{cell-address}` → Replace with actual cell reference (e.g., "A1")
- `{property-name}` → Replace with Has* property (HasNumber, HasBoolean, etc.)

---

## Generic Cell Values

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];

// Get value as generic object
object value1 = sheet["A1"].Value;   // Original stored value
object value2 = sheet["A1"].Value2;  // Converted/calculated value
```

### Value vs Value2 Comparison
```csharp
sheet["A1"].Number = 100;

// Value returns as originally stored type
object originalValue = sheet["A1"].Value;  // Returns as number

// Value2 returns calculated/displayed type
object displayValue = sheet["A1"].Value2;  // Converted to display type

// Practical example
if (sheet["A1"].Value2 is double number)
{
    double calculated = number * 1.1;
}
```

### Placeholders
- `{cell-reference}` → Replace with target cell (e.g., "B5")
- `{calculation}` → Replace with desired operation on retrieved value
